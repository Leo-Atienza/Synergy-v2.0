# Sanctuary: the data and methods packet

This folder holds the evidence behind the Sanctuary map: the candidate-building data, the ranking model, the source list, and the answers to the questions a judge is most likely to ask. For the project overview and the demo, start at the [repository README](../README.md) or the [live showcase](https://project-sanctuary-seneca.vercel.app).

Sanctuary ranks trusted community buildings in Peel Region (libraries, recreation centres, gurdwaras, mosques, mandirs, and churches) as candidate resilience hubs to harden with cooling, solar, and battery backup before the next heat wave or outage. It ranks **candidate hubs** for investigation. It does not claim any building is already equipped, willing, or funded.

## Inspect the evidence

| File | What it holds |
|---|---|
| [`data/candidate-hubs.csv`](data/candidate-hubs.csv) | The 10 hand-verified candidate buildings: name, address, type, HVI quintile, community role, source link, and verification status. |
| [`data/candidate-hubs.geojson`](data/candidate-hubs.geojson) | The same buildings as a point layer for ArcGIS import. |
| [`data/scoring-notes.md`](data/scoring-notes.md) | The transparent ranking model, and the discipline that keeps an unverifiable estimate from carrying a building into the top five. |
| [`data/sources.md`](data/sources.md) | Full provenance for every map layer, with the live-versus-static breakdown. |
| [`docs/methods-note.md`](docs/methods-note.md) | What is real, what is estimated, and what Sanctuary actually claims. |
| [`docs/judge-qa.md`](docs/judge-qa.md) | Short answers to the likely judge questions: solar sizing, faith buildings, reachable population, and whether Alectra can use this. |
| [`docs/storymap-and-data-guide.md`](docs/storymap-and-data-guide.md) | How the ArcGIS StoryMap and web map are assembled from the data spine. |
| [`docs/sanctuary-future-vision.md`](docs/sanctuary-future-vision.md) | Where it goes after the prototype (hub network, financing). Out of build scope, kept for the "what's next" question. |
| [`artifacts/arcgis-links.md`](artifacts/arcgis-links.md) | The ArcGIS web map, the Peel HVI feature service, and the candidate layers. |
| [`web/`](web/) | Source for the live showcase (Next.js). Run `npm install && npm run dev` inside the folder. |

## The honesty key

Every number on the map and in the showcase carries one of three tags, at the point you read it:

- **verified**, checked against a public source (the Peel Heat Vulnerability Index, official building pages, Statistics Canada boundaries).
- **modelled**, a labelled planning estimate (the 500 m reach, the roof class, the first-pass score).
- **pending**, not yet known and flagged for a site audit (backup power, cooling capacity, owner agreement, solar or battery sizing).

Malton Community Centre and Library, the building Sanctuary ranks first, geocodes into Peel HVI quintile 5 of 5, re-verified against the public feature service on 2026-05-26.
