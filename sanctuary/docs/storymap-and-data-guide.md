# Sanctuary - StoryMap and Data Guide

> Practical guide for building Sanctuary quickly if it becomes the active submission.

## 1. Artifact Shape

Use ArcGIS first.

Recommended deliverables:

- one ArcGIS StoryMap;
- one ArcGIS Web Map;
- optional Dashboard if time remains;
- one CSV of candidate buildings and scores;
- one 5-minute video walkthrough.

Do not build a custom web app unless ArcGIS fails. The sponsor fit is the point.

## 2. StoryMap Structure

### Section 1 - The Heat Map

Open with the Peel Heat Vulnerability Index.

Copy direction:

> Heat risk in Peel is not evenly distributed. The red areas are not just hotter; they combine exposure, sensitivity, and lower adaptive capacity.

### Section 2 - The Shelter Gap

Show public facilities and cooling/warming spaces if available.

The point is not that official facilities are bad. The point is that official facilities are incomplete.

### Section 3 - The Trusted Buildings Layer

Fade in trusted community buildings:

- places of worship;
- libraries;
- rec centres;
- community centres;
- schools only if useful and verified.

Copy direction:

> Communities already have infrastructure for trust. Sanctuary asks which of those buildings should be hardened first.

### Section 4 - The Hero Click

Click one real building in or near a high-HVI area.

Panel should show:

- building name;
- type;
- nearby heat vulnerability;
- estimated reachable population;
- estimated roof/hardening class;
- why this ranks high.

### Section 5 - The Ranked Five

Show five candidate hubs.

Use a table or side panel:

| Rank | Building | Why |
|---|---|---|
| 1 | Real name | High HVI, large catchment, trusted site. |
| 2 | Real name | High HVI, civic access, large roof. |
| 3 | Real name | High HVI, gap in official cooling access. |

### Section 6 - Honesty Box

Every StoryMap should include a visible "What is real / what is estimated" box.

Real:

- HVI layer;
- building names and locations;
- municipal footprints where used;
- census/marginalization layers.

Estimated:

- solar capacity;
- battery size;
- reachable population if using buffers;
- current backup power and cooling capability.

### Section 7 - The Ask

End with a decision, not a vibe:

> Harden these five candidate hubs first. Then repeat the same scoring across Alectra's service territory.

## 3. Data Sources

### Core

| Source | Use | Status |
|---|---|---|
| Peel Heat Vulnerability Index | Main vulnerability layer | Public ArcGIS item, verified in seed card. |
| Brampton building footprints | Roof / building geometry | Public open data. |
| Mississauga building footprints | Roof / building geometry | Public open data. |
| OpenStreetMap places of worship | Trusted community buildings | Public, but completeness must be checked. |
| Municipal facility datasets | Libraries, rec centres, civic buildings | Public, varies by municipality. |
| Ontario Marginalization Index | Equity context | Public Health Ontario. |
| NRCan PV potential | Regional solar estimate | Public, coarse. |

### URLs To Start From

- Peel HVI dashboard: `https://www.arcgis.com/home/item.html?id=83b829a8b497476b87c3d954869c02d2`
- Peel climate-health page: `https://peelregion.ca/about/climate-change/climate-change-health`
- OSM places of worship ArcGIS item: `https://www.arcgis.com/home/item.html?id=2b8b3326960c4cb7833b7546db6d0502`
- Brampton GeoHub: `https://geohub.brampton.ca/`
- Mississauga data: `https://data.mississauga.ca/`
- ON-Marg: `https://www.publichealthontario.ca/en/Data-and-Analysis/Health-Equity/Ontario-Marginalization-Index`

## 4. Fast Scoring Workflow

If there is no time for full spatial joins:

1. Pick 8 to 10 candidate buildings by hand.
2. Place points in ArcGIS.
3. For each point, inspect nearby HVI and assign `heat_quintile`.
4. Use a 500 m buffer as the catchment.
5. Estimate reachable population from nearby census or ArcGIS enrichment.
6. Assign roof class from footprint size:
   - small;
   - medium;
   - large.
7. Score each candidate with the simple model in `developer-build-plan.md`.

This is acceptable if every modelled field is labelled.

## 5. Visual Design

Avoid generic dashboard styling.

Recommended visual language:

- map-first layout;
- red/orange only for heat vulnerability;
- deep blue or teal for candidate hubs;
- one accent colour for the selected building;
- big labels for one or two named places;
- short captions instead of paragraphs on the map.

Do not use stock photos of solar panels. Use real map screenshots or real building names.

## 6. Q&A Answers

### Are these buildings already resilience hubs?

No. They are candidate hubs. Sanctuary ranks where hardening should be investigated first.

### Are the solar and battery numbers measured?

No. They are first-pass estimates from building footprint and regional solar potential. The siting insight is the real output.

### Why include places of worship?

Because resilience is not only about public ownership. It is also about trust, proximity, and where people already gather.

### Why not just build more cooling centres?

That is one option. Sanctuary helps decide where new or upgraded safe spaces would reach the most vulnerable residents.

### Is this scalable beyond Peel?

Yes. The pattern is reusable: heat layer + vulnerability data + trusted building points + catchment score. Other Alectra communities can swap in local layers.

## 7. Backup If ArcGIS Fails

Use a static slide deck or simple web map:

- screenshot HVI layer;
- place candidate points manually;
- use circles for 500 m buffers;
- show a ranked table;
- record the 5-minute video from slides.

The video deliverable can still work without a deployed app.

