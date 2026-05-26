# Peel HVI + Facilities Data — Sources & Citation Note

**Date pulled:** 2026-05-26
**Pulled by:** Claude (Synergy-v2.0 / Sanctuary, `feat/sanctuary-build`)
**Region:** Peel Region, Ontario (Mississauga, Brampton, Caledon)
**Rule:** every value on the interactive map is real, sourced data or is labelled. The heat choropleth is real service quintiles; the facilities are real ODRSF records. Nothing is fabricated. This note is the sibling of [`peel-fsa-data-note.md`](peel-fsa-data-note.md) for the two layers added when the map was made real (it had been faking heat with a radial glow).

---

## File 1 — Heat choropleth: `sanctuary/web/public/peel-hvi.geojson`

The real heat layer — Peel's Heat Vulnerability Index by census tract, replacing the previous fake glow.

| Field | Value |
|---|---|
| Source service | Region of Peel — **Extreme Heat Vulnerability Index**, FeatureServer layer 0 (`hvi_ct2021`) |
| REST endpoint | `https://services6.arcgis.com/ONZht79c8QWuX759/arcgis/rest/services/Extreme_Heat_Vulnerability_Index/FeatureServer/0` |
| Item page | https://www.arcgis.com/home/item.html?id=83b829a8b497476b87c3d954869c02d2 |
| Geography | 282 Statistics Canada census tracts covering Peel Region (2021 tract boundaries) |
| Geometry | Polygons. Native CRS NAD83 Statistics Canada Lambert; requested `outSR=4326` (WGS84 lon/lat) so it overlays the FSA base under the same `geoMercator` projection |
| Build script | [`sanctuary/web/scripts/fetch-hvi.mjs`](../sanctuary/web/scripts/fetch-hvi.mjs) |

**Fields kept (all REAL quintiles, 1 = least vulnerable … 5 = most):**

| Property | ODRSF/service field | Meaning |
|---|---|---|
| `Index_Qnt` | Index_Qnt | Overall HVI quintile (the choropleth fill, via `HVI_COLORS`) |
| `Exposure_Qnt` | Exposure_Qnt | Heat exposure (summer temp, tree canopy, NDVI) |
| `Sensitivity_Qnt` | Sensitivity_Qnt | Population sensitivity (seniors, pre-existing conditions) |
| `Adaptivity_Qnt` | Adaptivity_Qnt | Adaptive capacity (income, isolation, renters) |
| `PHDZ` | PHDZ | Peel Health Data Zone |
| `Municipality`, `CTUID` | — | Census tract id + municipality |

The normalized `*_Nrm` doubles and `Shape__*` fields are dropped as noise.

**Processing:** one ArcGIS query, `where=1=1`, `f=geojson`. Server-side simplification via `maxAllowableOffset=0.0007` (~78 m in 4326 degrees — comparable to the FSA build's 75 m Douglas–Peucker) plus `geometryPrecision=5` (~1 m). No mapshaper / extra dependency. Projected-path coordinates are then rounded to 1 decimal pixel in `lib/map.ts` (visually lossless, ~halves the client payload). The file is committed static so the map runs fully offline (no runtime fetch).

**Verification (run by the script, asserted on every refresh):**
- **282 tracts**, file ≈ **110 KB**.
- Quintile distribution `{1: 57, 2: 56, 3: 56, 4: 56, 5: 57}` — the near-even split expected of genuine quintiles (each ~20%).
- **Malton cross-check:** tract **CTUID 5350530.01**, PHDZ **M-04**, `Index_Qnt` = **5** (top quintile). The script throws if this is not 5, so a bad refresh cannot ship. This matches the hero claim in `lib/content.ts`.
- d3-geo never reaches the client (`grep -rl geoMercator .next/static/chunks/` → 0); the choropleth renders in the SSR HTML (291 `hvi-tract` nodes) so it is visible with JS off.

---

## File 2 — Shelter-gap network: `sanctuary/web/public/peel-facilities.geojson`

The "current network" layer for the GAP step — official Peel public recreation buildings.

| Field | Value |
|---|---|
| Source dataset | **Open Database of Recreational and Sport Facilities (ODRSF)**, Statistics Canada, catalogue **21260002** |
| Served via | Public ArcGIS mirror `Sports_Recreation_Facilities_gdb` FeatureServer layer 0: `https://services.arcgis.com/wjcPoefzjpzCgffS/arcgis/rest/services/Sports_Recreation_Facilities_gdb/FeatureServer/0` |
| Item page | https://www.arcgis.com/home/item.html?id=4814caea658941bb8596a342cd171269 |
| Licence | **Open Government Licence — Canada** |
| ODRSF home | https://www.statcan.gc.ca/en/lode/databases/odrsf |
| Build script | [`sanctuary/web/scripts/fetch-facilities.mjs`](../sanctuary/web/scripts/fetch-facilities.mjs) |

**Scope / filter:** `CSD_Name IN ('Mississauga','Brampton','Caledon')` (= Peel Region) **AND** `ODRSF_facility_type IN ('community centre','arena','pool')` — the indoor civic buildings that are realistic cooling / gathering spaces. ODRSF's Peel rows break down as: trail 24,550 · sports field 1,857 · park 838 · playground 692 · rink 86 · **pool 45** · **community centre 44** · splash pad 40 · **arena 31** · marina 3 · beach 2. Only the three bolded indoor-building types are kept.

**Processing:** `Facility_Name`, `ODRSF_facility_type`, `City`, `Latitude`, `Longitude` (ODRSF ships WGS84 lat/long — **no geocoding**). Co-located facilities (a complex with a community centre + arena + pool at one site) are collapsed on a **~110 m grid** (round lat/lon to 3 decimals); the community-centre name wins the tie. Names are used **verbatim** from ODRSF.

**Result:** **120 ODRSF rows → 87 deduped sites.** By municipality: Mississauga 46, Brampton 27, Caledon 13 (+1 with a blank ODRSF `City`). 87 facility markers render in the SSR HTML.

**Honesty:** this is the official **recreation** network, not a list of designated cooling centres, so the map labels the layer **"Public facilities"** (a `<title>` tooltip names each one). ODRSF already covers Mississauga's civic facilities, so the City of Mississauga recreation-locations page (https://www.mississauga.ca/recreation-and-sports/locations-and-rentals/locations/) is a manual cross-check, not a second scrape. Libraries are not in ODRSF (a sport/recreation database); the candidate-hub layer already carries the library case (Malton Community Centre **and Library**).

---

## Reproduction

```bash
cd sanctuary/web
node scripts/fetch-hvi.mjs          # → public/peel-hvi.geojson   (asserts Malton = quintile 5)
node scripts/fetch-facilities.mjs   # → public/peel-facilities.geojson
npm run build                       # offline; bakes both layers into the prerender
```

Both scripts hit only the two public ArcGIS endpoints above and write into `public/`. The committed GeoJSON is the source of truth at runtime; the scripts exist for provenance and refresh.
