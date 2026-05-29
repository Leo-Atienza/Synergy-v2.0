# Malton Catchment Estimate — Sources & Citation Note

**Date computed:** 2026-05-28
**Computed by:** Claude (Synergy-v2.0 / Sanctuary, multi-hazard finalist upgrade)
**Rule:** every value on the map is real, sourced data or is labelled. This catchment is a **modelled** estimate from **real** StatCan 2021 dissemination-area populations, with the method and its boundary sensitivity stated. No magic numbers.

---

## What we computed

A **modelled reachable-population estimate** for **Malton Community Centre and Library** (`-79.63854, 43.72354`):

> the sum of the **2021 populations of the dissemination areas (DAs) whose StatCan representative point falls within 500 m** of the building.

Displayed in the detail panel as **"~5,900" (modelled)**, replacing the previous "catchment pending". Malton only (per scope).

## Result — 7 DAs within 500 m

| DAUID | rep-point distance | 2021 population |
|---|---|---|
| 35211066 | 189 m | 365 |
| 35212293 | 295 m | 1,232 |
| 35211065 | 305 m | 294 |
| 35211070 | 331 m | 454 |
| 35211067 | 432 m | 310 |
| 35212311 | 489 m | 1,817 |
| 35211077 | 494 m | 1,383 |
| **Total** | | **5,855** -> displayed **~5,900** |

## Sources

| Need | Source |
|---|---|
| DA geometry | Esri Canada **"Canadian Dissemination Area (DA) Boundaries - 2021"** (`services.arcgis.com/wjcPoefzjpzCgffS/.../DisseminationAreas`), StatCan 2021 boundaries. |
| DA representative points + population | **"Census 2021 Population by Dissemination Area"** (`services.arcgis.com/txWDfZ2LIgzmw5Ts/...`): carries StatCan `DARPLAT/DARPLONG` (Geographic Attribute File representative points) + `POP_COUNT_`. |
| Population cross-check | **ON-Marg 2021** `DA_2021` sheet `Pop2021` (independent). |
| Verified tract context | StatCan 2021 Census, **CT 5350530.01** population = **5,217** (shown as a verified anchor beside the modelled estimate). |

## Verification

- **Dual-source population check:** all 7 DA populations match **exactly** between the service `POP_COUNT_` and the independent ON-Marg `DA_2021` sheet (365, 1232, 294, 454, 310, 1817, 1383).
- Sanity: 5,855 in a 0.785 km^2 catchment is ~7,450/km^2, consistent with dense suburban Malton; it is below the whole tract (5,217 in CT 5350530.01 plus parts of neighbouring tracts), as expected for a 500 m circle that straddles tract lines.

## Honest boundary sensitivity (stated, not hidden)

The estimate is a **centroid-in-buffer sum**: a DA is counted whole if its point lies inside the 500 m circle. Two large DAs sit **right at the boundary** — 35212311 (1,817) at 489 m and 35211077 (1,383) at 494 m. A few metres of representative-point placement swings the total by up to ~3,200.

For comparison, a **geometric area-centroid** method (instead of StatCan's representative point) places 35211077 at 561 m (outside) and yields **6 DAs / 4,472**. We use the **StatCan representative point** because it is the official, published DA georeference and is reproducible. The honest read is **roughly 4,500-5,900 within 500 m**; "~5,900" is the representative-point figure.

A real walkshed (sidewalks, crossings, barriers) would replace the circle entirely; that is on the roadmap.

## Reproduction

Query the population-by-DA service for DAs near Malton, keep those whose `DARPLAT/DARPLONG` is within 500 m (great-circle), sum `POP_COUNT_`, and cross-check against ON-Marg `DA_2021`. (One-shot script kept in the scratchpad; the committed value lives in `sanctuary/data/candidate-hubs.csv` `reachable_population_est` for Malton.)
