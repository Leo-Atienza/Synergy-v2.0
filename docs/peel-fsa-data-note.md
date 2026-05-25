# Peel FSA Data — Sources & Citation Note

**Date pulled:** 2026-05-25
**Pulled by:** data-engineering subagent (Synergy-v2.0 / Tide)
**Region:** Peel Region, Ontario (Mississauga, Brampton, Caledon)
**Rule:** every number is real StatCan 2021 Census data. Nothing here is made up. Where a value is missing (suppressed or not published), it is `null` and noted below.

Statistics Canada released all of this data under the **Statistics Canada Open Licence** (https://www.statcan.gc.ca/en/reference/licence). You can copy and share it as long as you credit the source.

---

## File 1 — Geometry: `valley/tide-web/public/peel-fsa.geojson`

| Field | Value |
|---|---|
| Source dataset | 2021 Census — Forward Sortation Area Cartographic Boundary File (`lfsa000a21a_e`) |
| Catalogue | 92-179-X (FSA boundary), 2021 Census |
| Boundary index page | https://www12.statcan.gc.ca/census-recensement/2021/geo/sip-pis/boundary-limites/index2021-eng.cfm?year=21 |
| Direct download | https://www12.statcan.gc.ca/census-recensement/2021/geo/sip-pis/boundary-limites/files-fichiers/lfsa000a21a_e.zip |
| File picked | Cartographic (`a`) — smaller than digital (`b`); 21.7 MB zip |
| Reference guide | https://www150.statcan.gc.ca/n1/pub/92-179-g/92-179-g2021001-eng.htm |

**Processing (Python / geopandas 1.1.3, pyproj 3.7.2, shapely 2.1.2):**
1. Read shapefile (1,643 FSA features nationwide), source CRS **EPSG:3347** (Statistics Canada Lambert, NAD83).
2. Filtered to the 36-code Peel `CFSAUID` list → **35 features** matched (see "Missing FSAs" below).
3. Reprojected **EPSG:3347 → EPSG:4326 (WGS84)**.
4. Simplified geometry with Douglas–Peucker, **tolerance = 75 m** (applied in EPSG:3347 metric space, `preserve_topology=True`), then reprojected back to 4326.
5. Wrote a `FeatureCollection`; each Feature's `properties` contains only `"fsa"` (the CFSAUID, e.g. `"L6T"`).

**Verification:** parses as valid JSON; **35 features**; all have a `fsa` property; coordinate bounds longitude **−80.144 to −79.523**, latitude **43.475 to 43.990** (correct Peel/WGS84 window). Final file size **≈ 28.6 KB** (well under the 1.5 MB budget). Sample coordinate (L4T ring vertex): `[-79.6695, 43.6551]`.

We did not need the GitHub mirror fallback. The StatCan shapefile downloaded and reprojected in well under the 15-minute budget.

---

## File 2 — Attributes: `valley/tide-web/lib/peel-fsa-raw.json`

| Field | Value |
|---|---|
| Source dataset | Census Profile, 2021 Census of Population — **Forward Sortation Areas** |
| Catalogue | **98-401-X2021013** |
| Bulk file | `98-401-X2021013_English_CSV_data.csv` (645 MB; all-Canada FSA profile) |
| Download | https://www12.statcan.gc.ca/census-recensement/2021/dp-pd/prof/details/download-telecharger/comp/GetFile.cfm?Lang=E&FILETYPE=CSV&GEONO=013 |
| Download portal | https://www12.statcan.gc.ca/census-recensement/2021/dp-pd/prof/details/download-telecharger.cfm?Lang=E |
| Catalogue landing | https://www150.statcan.gc.ca/n1/en/catalogue/98-401-X2021013 |
| Metadata file | `98-401-X2021013_English_meta.txt` (characteristic-ID dictionary) |
| Encoding | Latin-1 (windows-1252) — StatCan default for this file |

**Extraction:** used the `Geo_starting_row` index to find each Peel FSA's block (DGUID prefix `2021A0011<FSA>`, GEO_LEVEL = Forward sortation area), sliced those line ranges from the 645 MB CSV, and parsed with Python's `csv` module. Values taken from columns `C1_COUNT_TOTAL` (counts) and `C10_RATE_TOTAL` (published rates).

### Variable → exact characteristic used

| JSON field | CHARACTERISTIC_ID | CHARACTERISTIC_NAME (from meta) | Column used |
|---|---|---|---|
| `population` | 1 | Population, 2021 | C1_COUNT_TOTAL |
| `medianHouseholdIncome` | 243 | Median total income of household in 2020 ($) | C1_COUNT_TOTAL |
| `renterPct` | 1416 (over 1414) | "Renter" as % of "Total - Private households by tenure - 25% sample data" | C10_RATE_TOTAL (published rate) |
| `apartmentPct` | (45+46+47)/41 | "Apartment or flat in a duplex" + "Apartment in a building that has fewer than five storeys" + "Apartment in a building that has five or more storeys", over "Total - Occupied private dwellings by structural type of dwelling - 100% data" | C1_COUNT_TOTAL counts, ratio computed |
| `electricHeatPct` | n/a | **Not published** in 98-401-X2021013 at the FSA level (no heating-fuel characteristic exists in this profile). Set to `null` for every FSA. |

`name` is `"<City> (<FSA>)"`. City assignment: L4*/L5* = Mississauga; L6*/L7A = Brampton; L7C/L7E/L7K = Caledon (L7E = Bolton, within the Town of Caledon).

**We did not compute any "burden score" or "intervention."** This file holds raw, cited facts only.

### Spot-check (eyeball against StatCan)

| FSA | Population | Median HH income | Renter % | Apt % |
|---|---|---|---|---|
| L6T (Brampton) | 39,614 | $83,000 | 46.2 | 54.8 |
| L5A (Mississauga) | 47,406 | $80,000 | 49.9 | 66.9 |
| L7K (Caledon) | 8,486 | $134,000 | 11.1 | 2.6 |
| L6P (Brampton) | 91,155 | $134,000 | 10.9 | 8.2 |

The populations of all 35 FSAs add up to **1,451,271**, which matches Peel Region's published 2021 Census population (~1.45 M). That confirms the FSA set is complete and pulled correctly.

---

## Missing / suppressed data

| FSA | Status | Reason |
|---|---|---|
| **L5P** | Not in any 2021 file | Code does not exist in the 2021 Census FSA boundary file or profile (former Pearson-airport-area FSA; not a residential FSA in 2021). We skipped it on purpose, did not invent it. Expected count was 36, actual is **35**. |
| **L4V** | population = 5; income/renter/apt = `null` | StatCan **data suppression**: negligible residential population (industrial/airport-adjacent Mississauga FSA). Income, tenure, and dwelling-structure characteristics are blank in the source CSV. |
| **L5S** | population = 27; income/renter/apt = `null` | StatCan data suppression: industrial Mississauga FSA, near-zero residential population. |
| **L5T** | population = 19; income/renter/apt = `null` | StatCan data suppression: industrial Mississauga FSA, near-zero residential population. |
| All 35 | `electricHeatPct` = `null` | Heating-fuel characteristic is not published in the FSA-level Census Profile (98-401-X2021013). Would require a different table (e.g., a custom tabulation or the dwelling-characteristics topic at a higher geography). |

**Coverage that matters:** 32 of 35 FSAs have a real `population`, `medianHouseholdIncome`, and `renterPct` (not null). The 3 nulls (L4V, L5S, L5T) are real StatCan suppressions on FSAs with fewer than 30 residents, not extraction failures.

---

## Reproduction

- Geometry build script: `C:/tmp/peel-data/build_geojson.py`
- Attributes build script: `C:/tmp/peel-data/build_attrs.py`
- Both read from the StatCan files downloaded to `C:/tmp/peel-data/` on 2026-05-25.
