# ArcGIS Artifact Tracker

Fill these in as the StoryMap/Web Map is built.

## Required

- **Source HVI Web Map:** `https://www.arcgis.com/home/item.html?id=d1adca8a3b1e403483e608040734c07a`
- **Build Web Map:** _pending_
- **StoryMap:** _pending_
- **HVI source layer/item:** `https://www.arcgis.com/home/item.html?id=83b829a8b497476b87c3d954869c02d2`
- **HVI feature service:** `https://services6.arcgis.com/ONZht79c8QWuX759/arcgis/rest/services/Extreme_Heat_Vulnerability_Index/FeatureServer/0`
- **Candidate CSV:** `sanctuary/data/candidate-hubs.csv`
- **Candidate GeoJSON import:** `sanctuary/data/candidate-hubs.geojson`

## Recording Assets

- HVI overview screenshot: `sanctuary/artifacts/screenshots/`
- Hero-click panel screenshot: `sanctuary/artifacts/screenshots/`
- Ranked top-five screenshot: `sanctuary/artifacts/screenshots/`
- Real/estimated honesty box screenshot: `sanctuary/artifacts/screenshots/`

## Build Checklist

- [x] HVI layer loads and exposes `Index_Qnt` through the public feature service.
- [x] Candidate GeoJSON generated from the verified CSV.
- [ ] Candidate points import into ArcGIS.
- [x] Hero building selected from HVI evidence: Malton Community Centre and Library, HVI quintile 5.
- [ ] Hero building label is readable in the final Web Map/StoryMap.
- [ ] Detail panel includes all honesty labels.
- [ ] Top five can be shown in rank order.
- [ ] Screenshots captured in case live interaction lags.
