# Sanctuary Methods Note

## What Is Real

- Peel Heat Vulnerability Index is a public Peel Public Health / ArcGIS layer.
- Candidate building names and addresses are taken from public facility, library, municipal, or organization pages.
- Candidate addresses were geocoded and point-queried against the public Peel HVI feature service.
- Candidate list is intentionally small: 8 to 10 hand-verified buildings for a hackathon demo.
- Ranking inputs and source URLs live in `sanctuary/data/candidate-hubs.csv`.
- All map layers ship as **static GeoJSON** pulled from the public sources above and loaded at build time — a frozen snapshot, not a live query, so the demo can't break on a dropped connection. Full provenance + the live-vs-static breakdown: `sanctuary/data/sources.md`.

## What Is Estimated

- **Reachable population:** modelled from a 500 m catchment unless ArcGIS Network Analyst is used. This field is still pending in the seed CSV.
- **Roof/hardening class:** rough small/medium/large class from footprint or visual inspection.
- **Solar/battery potential:** planning estimate only. Requires a site audit before any investment decision.
- **Current backup power, cooling capacity, and formal emergency agreements:** unknown unless directly verified.

## What Sanctuary Claims

Sanctuary ranks **candidate hubs** for further investigation. It does not certify that any named building is ready, equipped, willing, or funded.

## Scoring Summary

The current ranking model weights:

- 35% heat vulnerability nearby;
- 25% vulnerable population within catchment;
- 20% trust / community role;
- 10% rooftop hardening potential;
- 10% facility suitability.

The score is a prioritization tool, not an engineering feasibility study.
