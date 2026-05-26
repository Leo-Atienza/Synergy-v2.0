# Sanctuary Sources

Use this as the fast provenance sheet for the StoryMap, video, and judge Q&A.

## Core Layers

- **Peel Heat Vulnerability Index:** public ArcGIS dashboard/item, verified in `Synergy-v2.0 — Hackathon Brain/20-ideas/seed-g-sanctuary.md`. Start URL: `https://www.arcgis.com/home/item.html?id=83b829a8b497476b87c3d954869c02d2`.
- **Peel HVI Web Map:** `https://www.arcgis.com/home/item.html?id=d1adca8a3b1e403483e608040734c07a`.
- **Peel HVI Feature Service:** `https://services6.arcgis.com/ONZht79c8QWuX759/arcgis/rest/services/Extreme_Heat_Vulnerability_Index/FeatureServer/0`.
- **Peel climate and health context:** `https://peelregion.ca/about/climate-change/climate-change-health`.
- **Ontario Marginalization Index:** optional overlay if it drops in quickly. URL: `https://www.publichealthontario.ca/en/data-and-analysis/health-equity/ontario-marginalization-index`.
- **Brampton building footprints:** `https://geohub.brampton.ca/datasets/building-footprints`.
- **Mississauga building footprints:** `https://data.mississauga.ca/datasets/building-footprints-1`.
- **OSM places of worship ArcGIS item:** `https://www.arcgis.com/home/item.html?id=2b8b3326960c4cb7833b7546db6d0502`.
- **NRCan PV potential:** regional solar context only, not per-building proof. URL: `https://natural-resources.canada.ca/energy-sources/renewable-energy/photovoltaic-potential-solar-resource-maps-canada`.

## Mississauga City Layers

Official City of Mississauga org: owner `MississaugaData`, hosted at `services6.arcgis.com/hM5ymMLbxIyWTjn2/`. All public; add via Add Layer → From URL. Prioritized for the Malton hero:

- **Building footprints (hero roof):** `https://services6.arcgis.com/hM5ymMLbxIyWTjn2/arcgis/rest/services/building_footprint/FeatureServer/0` — polygons. Only attribute is `Shape__Area` (2D footprint m²); no name/address, so select Malton's footprint by location under the candidate point. Use area as a labelled planning estimate, not a roof-usable claim.
- **Community centres:** `…/City_Community_Centres/FeatureServer/0` — official source behind the Mississauga civic candidates (Malton CC).
- **Libraries:** `…/City_Libraries/FeatureServer/0` — Malton is a Community Centre *and Library*; backs the "and Library" half.
- **Roof planes (check before relying on it):** `…/BldgRoof/FeatureServer/0` — name implies roof geometry; verify it carries usable roof area/slope before any solar framing.
- **Ward boundaries (framing):** `…/Ward_Boundaries/FeatureServer/0` — 11 wards, Mississauga context frame.
- **All facilities / POI (optional context):** `…/ALL_Facilities/FeatureServer/0`, `…/CITY_POI/FeatureServer/0` — single point layers, broad facility backdrop.

Brampton equivalents: `geohub.brampton.ca`. Caledon footprints: Region of Peel `Building_Footprints_Caledon`.

## Candidate Buildings

The first seed list lives in `sanctuary/data/candidate-hubs.csv`. Each candidate has a source URL for name/address verification. Before recording, update `verification_status` after checking:

- map point is correct;
- candidate is in or near the visible high-HVI reveal;
- the detail panel does not imply the building is already equipped;
- roof/hardening class is labelled as an estimate.

## HVI Verification Pass

On 2026-05-25, the seed candidate addresses were geocoded with the ArcGIS World Geocoder and point-queried against the public Peel HVI Feature Service. The result is recorded in `sanctuary/data/candidate-hubs.csv` as:

- `longitude`
- `latitude`
- `hvi_quintile`
- `exposure_quintile`
- `sensitivity_quintile`
- `adaptive_capacity_quintile`
- `ctuid`
- `phdz`

This pass changed the hero from Gore Meadows to **Malton Community Centre and Library** because Malton Community Centre geocoded into HVI quintile 5, while Gore Meadows geocoded into HVI quintile 2.

## HVI Field + Palette Reference

Pulled from the public Peel HVI Web Map config (item `d1adca8a3b1e403483e608040734c07a`) on 2026-05-25. The Web Map's four layers ("Heat Vulnerability Index", "Exposure", "Sensitivity", "Adaptive Capacity") are the **same** feature service styled four ways — all point to `Extreme_Heat_Vulnerability_Index/FeatureServer/0` (public, census-tract polygons, 2021 boundaries, classified by quintile).

Use the **service** field names in the click popup — the CSV uses friendly names:

| Meaning | Service field | CSV column |
|---|---|---|
| HVI overall quintile | `Index_Qnt` | `hvi_quintile` |
| Exposure quintile | `Exposure_Qnt` | `exposure_quintile` |
| Sensitivity quintile | `Sensitivity_Qnt` | `sensitivity_quintile` |
| Adaptive capacity quintile | `Adaptivity_Qnt` | `adaptive_capacity_quintile` |
| Census-tract join key | `CTUID` | `ctuid` |
| Peel Health Data Zone | `PHDZ` | `phdz` |
| Municipality | `Municipality` | `municipality` |

Quintile semantics: **1 = lowest relative risk, 5 = highest** (dark-green Q1 → dark-orange Q5).

Peel's official quintile palette (reuse so the StoryMap matches the source):

| Quintile | Label | Hex |
|---|---|---|
| 1 | Very Low | `#008575` |
| 2 | Low | `#00b9b0` |
| 3 | Average | `#ffe7c7` |
| 4 | High | `#fbb664` |
| 5 | Very High | `#c67718` |

## Public-Copy Rules

- Say **candidate hub**, not "current hub."
- Say **modelled 500 m estimate**, not exact walkshed population unless Network Analyst was actually used.
- Say **solar/battery planning estimate, requires site audit**, not a precise kW/kWh claim.
- Say **trusted community infrastructure**, not charity/pity framing.
