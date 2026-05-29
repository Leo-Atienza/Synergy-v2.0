# Peel Flood Data — Sources & Citation Note

**Date pulled:** 2026-05-28
**Pulled by:** Claude (Synergy-v2.0 / Sanctuary, multi-hazard finalist upgrade)
**Region:** Peel Region, Ontario (Mississauga, Brampton, Caledon)
**Rule:** every value on the map is real, sourced data or is labelled. The flood layer is real TRCA regulatory-floodplain geometry; per-building flood status is computed offline and dual-method verified. Nothing is fabricated. Sibling of [`peel-hvi-data-note.md`](peel-hvi-data-note.md).

---

## File — Flood layer: `sanctuary/web/public/peel-flood.geojson`

The second real hazard layer: TRCA's riverine regulatory floodplain.

| Field | Value |
|---|---|
| Source service | Toronto and Region Conservation Authority (TRCA) — **Flood and Heat Vulnerable Areas in Peel**, FeatureServer **layer 6** (`Floodline TRCA Polygon`) |
| REST endpoint | `https://maps.trca.ca/hostingserver/rest/services/Hosted/Flood_and_Heat_Vulnerable_Areas_in_Peel_WFL1/FeatureServer/6` |
| What it is | The **regulatory floodplain**: the greater of the **Regional Storm (Hurricane Hazel, 1954)** or the **100-year flood**, the MNRF standard TRCA regulates to. **Riverine only** (along watercourses), **not** urban / pluvial (storm-sewer) flooding. |
| Geometry | 295 polygons. Native CRS requested `outSR=4326` (WGS84) so they overlay the HVI + FSA layers under the same `geoMercator` projection. |
| Build script | [`sanctuary/web/scripts/fetch-flood.mjs`](../sanctuary/web/scripts/fetch-flood.mjs) |

**Fields kept:** `floodplain` (Engineered \| Estimated — how the floodline was derived), `watershed`. `OBJECTID` + `Shape__*` dropped as noise.

**Coverage (per-watershed, asserted by the script):** Humber River **164**, Etobicoke Creek **101**, Mimico Creek **30** = **295**. The **Credit River watershed (west Peel) is NOT in this layer** — it is Credit Valley Conservation's jurisdiction (see below).

**Processing:** one ArcGIS query, `where=1=1`, `f=geojson`. Server-side simplification via `maxAllowableOffset=0.0007` (~78 m, matching the HVI layer; visually lossless at region scale) + `geometryPrecision=5`. Projected-path coordinates are rounded to 1 decimal pixel in `lib/map.ts`. Committed static so the map runs fully offline. The 295-polygon source GeoJSON never reaches the client (it is projected to path strings at build).

---

## Per-building flood status (the `flood_status` column)

Each of the 10 candidates was classified by its relationship to the TRCA regulatory floodplain, **dual-method verified**:

1. **Local pass:** ray-casting point-in-polygon + great-circle nearest-edge distance against the full-precision (`geometryPrecision=6`, un-simplified) TRCA geometry.
2. **Authoritative cross-check:** a live ArcGIS spatial query per candidate (`spatialRel=esriSpatialRelIntersects`). All 10 returned `count=0` (none inside the floodplain — confirming the local pass). Every computed distance was bracket-verified against the live service: 0 features within `(dist - 15 m)`, >=1 within `(dist + 15 m)`. So distances are accurate to +/- 15 m.
3. **Watershed membership:** each candidate point was tested against the **CVC Credit River Watershed** boundary (`geohub.cvc.ca/.../Credit_River_Watershed/MapServer/0`). Two candidates fall in the Credit watershed, where TRCA does not map, so they are labelled `not mapped by TRCA` rather than a false `outside the floodplain`.

| Rank | Candidate | Watershed | Nearest TRCA floodline | `flood_status` | tag |
|---|---|---|---|---|---|
| 1 | Malton Community Centre and Library | Mimico (TRCA) | 52 m | ~50 m from the floodplain | modelled |
| 2 | Sri Guru Singh Sabha Malton | Mimico (TRCA) | 27 m | ~30 m from the floodplain | modelled |
| 3 | Susan Fennell Sportsplex | **Credit (CVC)** | n/a (TRCA: 1494 m) | not mapped by TRCA (Credit watershed) | pending |
| 4 | Anjuman-E-Anwarul Islam of Malton | Mimico (TRCA) | 39 m | ~40 m from the floodplain | modelled |
| 5 | Bharat Mata Mandir | Humber (TRCA) | 281 m | ~280 m from the floodplain | modelled |
| 6 | Chinguacousy Wellness Centre | Mimico (TRCA) | 1138 m | outside the mapped floodplain | verified |
| 7 | Hindu Sabha Temple | Humber (TRCA) | 194 m | ~190 m from the floodplain | modelled |
| 8 | Gore Meadows Community Centre and Library | Humber (TRCA) | 71 m | ~70 m from the floodplain | modelled |
| 9 | Guru Nanak Darbar Gurdwara | Humber (TRCA) | 50 m | ~50 m from the floodplain | modelled |
| 10 | Cassie Campbell Community Centre | **Credit (CVC)** | n/a (TRCA: 2506 m) | not mapped by TRCA (Credit watershed) | pending |

**All 10 candidates sit OUTSIDE the regulatory floodplain** — an honest result for built-up civic buildings, not a failure. Tag logic (`floodTag` in `lib/hubs.ts`): `~N m` -> modelled, `outside ...` -> verified, `not mapped ...` -> pending.

**Caveat (shown on `/map`):** riverine regulatory floodplain (Hurricane Hazel / 100-year), not urban or storm-sewer flooding; west Peel's Credit watershed is mapped separately by Credit Valley Conservation.

---

## Reproduction

```bash
cd sanctuary/web
node scripts/fetch-flood.mjs        # -> public/peel-flood.geojson (asserts ~295 polygons, prints per-watershed counts)
npm run build                       # offline; bakes the flood layer into the prerender
```

Per-building values are computed offline (TRCA layer 6 + the CVC Credit River Watershed boundary) and written into `sanctuary/data/candidate-hubs.csv` (`flood_status`), mirrored into both `candidate-hubs.geojson` copies. The committed files are the source of truth at runtime.
