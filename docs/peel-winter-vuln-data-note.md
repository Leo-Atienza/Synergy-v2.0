# Peel Winter / Energy-Burden Data — Sources & Citation Note

**Date pulled:** 2026-05-28
**Pulled by:** Claude (Synergy-v2.0 / Sanctuary, multi-hazard finalist upgrade)
**Region:** Peel Region, Ontario (Mississauga, Brampton, Caledon)
**Rule:** every value on the map is real, sourced data or is labelled. The winter lens is real ON-Marg 2021 quintiles, labelled `modelled`. Nothing is fabricated. Sibling of [`peel-hvi-data-note.md`](peel-hvi-data-note.md).

---

## The honesty decision: why there is NO cold-temperature map

Heat vulnerability varies block by block because of the **urban heat island**, so Peel's HVI resolves it per census tract. **Winter cold has no equivalent gradient** — there is no winter heat-island — so a per-tract cold-temperature index would invent an exposure axis that is not real. We deliberately do **not** build one. (ECCC extreme-cold data is regional warning thresholds, ~ -30 C wind chill for southern Ontario; Peel has no Cold Vulnerability Index.)

Instead we map what genuinely drives **winter resilience need**: **energy affordability and marginalization** — who can least afford to heat a home, and who is most isolated in a cold snap. That is real per-area data.

---

## File — Winter layer: `sanctuary/web/public/peel-winter-vuln.geojson`

| Field | Value |
|---|---|
| Source | **2021 Ontario Marginalization Index (ON-Marg)**, sheet `2021_CTUID`. Joint publication of **St. Michael's Hospital (Unity Health Toronto)** and **Public Health Ontario**. Underlying data: **Statistics Canada 2021 Census Profile (98-316-X2021001)**. |
| Download | `https://www.publichealthontario.ca/-/media/Data-Files/index-on-marg.xlsx` |
| Licence | Free for non-commercial use with credit to St. Michael's Hospital + PHO (a hackathon qualifies). |
| Measure | **Material Resources** quintile (formerly "Material Deprivation": income, education, lone-parent families, etc.). **1 = low marginalization, 5 = high.** The affordability driver of winter need. The **Households and Dwellings** quintile (residential instability) is carried as context. |
| Geometry | The **same 282 Peel census tracts** as `peel-hvi.geojson`, joined by `CTUID`. The choropleth reuses the HVI tract paths recoloured by the Material Resources quintile (no second polygon set ships). |
| Build script | [`sanctuary/web/scripts/build-winter-vuln.py`](../sanctuary/web/scripts/build-winter-vuln.py) |
| Auditable extract | [`sanctuary/data/onmarg-peel-ct.csv`](../sanctuary/data/onmarg-peel-ct.csv) (282 rows: CTUID, pop2021, MR score, MR quintile, HD quintile) |

**Fields kept (per tract):** `CTUID`, `MR_q` (Material Resources quintile), `HD_q` (Households and Dwellings quintile), `pop2021`.

**Verification (asserted by the script):**
- **282 of 282 Peel tracts matched** to ON-Marg (100%).
- Peel Material Resources quintile distribution: `{1: 20, 2: 55, 3: 95, 4: 84, 5: 28}` (Ontario-relative; Peel skews mid-to-high).
- **Malton cross-check:** CT **5350530.01** -> Material Resources quintile **5** (verified, not assumed). The script refuses to ship if this is not 5.

---

## Per-building winter status (the `winter_vuln` column) + the year-round flag

Each candidate carries the Material Resources quintile of its own census tract, tagged `modelled`. A **"year-round resilience case"** is flagged only where a building is genuinely high on **BOTH** heat (HVI >= 4) **and** winter / energy burden (MR quintile >= 4):

| Rank | Candidate | HVI | Material Resources q | Year-round case? |
|---|---|---|---|---|
| 1 | Malton Community Centre and Library | 5 | 5 | **yes** |
| 2 | Sri Guru Singh Sabha Malton | 5 | 5 | **yes** |
| 3 | Susan Fennell Sportsplex | 5 | 4 | **yes** |
| 4 | Anjuman-E-Anwarul Islam of Malton | 4 | 4 | **yes** |
| 5 | Bharat Mata Mandir | 3 | 4 | no (heat not high) |
| 6 | Chinguacousy Wellness Centre | 3 | 4 | no |
| 7 | Hindu Sabha Temple | 2 | 4 | no |
| 8 | Gore Meadows Community Centre and Library | 2 | 3 | no |
| 9 | Guru Nanak Darbar Gurdwara | 1 | 4 | no |
| 10 | Cassie Campbell Community Centre | 1 | 3 | no |

The four top-ranked heat candidates are also high on winter energy burden — the same buildings serve both seasons. Verified, not assumed.

---

## Roadmap (next, honest)

The winter lens uses marginalization as the affordability proxy. A future upgrade is **energy-explicit** cost-burden data per area (for example the **CUSP Energy Poverty and Equity Explorer**, `energypoverty.communitydata.ca`, 2016 vintage so it must be labelled), plus building-level heating / warming-space readiness.

---

## Reproduction

```bash
pip install openpyxl
cd sanctuary/web
python scripts/build-winter-vuln.py   # -> public/peel-winter-vuln.geojson + ../data/onmarg-peel-ct.csv
                                       #    asserts 282 tracts, Malton = Material Resources quintile 5
npm run build                          # offline; bakes the winter quintile onto the HVI tracts
```

Per-candidate `winter_vuln` is each building's tract Material Resources quintile, written into `sanctuary/data/candidate-hubs.csv` and mirrored into both `candidate-hubs.geojson` copies.

**Citation:** 2021 Ontario Marginalization Index (ON-Marg). St. Michael's Hospital (Unity Health Toronto) and Public Health Ontario. Derived from Statistics Canada, 2021 Census of Population.
