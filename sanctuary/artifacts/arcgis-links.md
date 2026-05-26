# ArcGIS Artifact Tracker

Fill these in as the StoryMap/Web Map is built.

## Required

- **Source HVI Web Map:** `https://www.arcgis.com/home/item.html?id=d1adca8a3b1e403483e608040734c07a`
- **Build Web Map:** `https://senecatechnology.maps.arcgis.com/apps/mapviewer/index.html?webmap=17951a55fae44a83a330101433dda67a`
- **StoryMap:** _pending_
- **HVI source layer/item:** `https://www.arcgis.com/home/item.html?id=83b829a8b497476b87c3d954869c02d2`
- **HVI feature service:** `https://services6.arcgis.com/ONZht79c8QWuX759/arcgis/rest/services/Extreme_Heat_Vulnerability_Index/FeatureServer/0`
- **Candidate CSV:** `sanctuary/data/candidate-hubs.csv`
- **Candidate GeoJSON import:** `sanctuary/data/candidate-hubs.geojson`

## Current Build Web Map Layers

- **Peel Heat Vulnerability Index** — risk evidence layer.
- **Welcome Spaces - Places of Worship** — trusted community infrastructure layer.
- **Municipal Boundary** — geographic context.
- **candidate_hubs** — Sanctuary candidate points with rank, address, HVI, trust role, roof class, source URL, and verification status.

## Popup / StoryMap Copy

Use this exact framing for candidate hub popups and captions:

- **Candidate hub, not currently equipped.**
- **Reachable population:** modelled 500 m estimate.
- **Solar/battery:** planning estimate, requires site audit.
- **Decision output:** harden these five candidate hubs first.

## Recording Assets

- HVI overview screenshot: `sanctuary/artifacts/screenshots/`
- Hero-click panel screenshot: `sanctuary/artifacts/screenshots/`
- Ranked top-five screenshot: `sanctuary/artifacts/screenshots/`
- Real/estimated honesty box screenshot: `sanctuary/artifacts/screenshots/`

## Build Checklist

- [x] HVI layer loads and exposes `Index_Qnt` through the public feature service.
- [x] Candidate GeoJSON generated from the verified CSV.
- [x] Candidate points import into ArcGIS.
- [x] Hero building selected from HVI evidence: Malton Community Centre and Library, HVI quintile 5.
- [x] Hero building label is readable in the support web app and should be pinned in StoryMap recording.
- [x] Detail panel includes all honesty labels in the support web app; mirror these in ArcGIS popups before recording if editing access is available.
- [x] Top five can be shown in rank order through `rank_seed` and the support web app ranked list.
- [ ] Screenshots captured in case live interaction lags.
