---
title: Seed B — OntarioEnviroScreen
type: idea
status: draft
updated: 2026-05-15
sources: ["[[../README]]", "[[seed-ideas]]", "[[../../docs/energy-domain]]", "[[../../docs/themes]]"]
---

# Seed B — OntarioEnviroScreen

> One of three top-3 idea seeds compiled from the 2026-05-15 deep-research dossier (`~/.claude/plans/now-i-want-you-elegant-narwhal.md`). **Pure context — not a commitment.** Final pick happens at `/hackathon:ideate` (target lock 2026-05-22) AFTER kickoff May 24 reveals the actual challenge sets.

## Theme alignment

Theme 3 (Community Energy, Equity & Sustainability). Direct hit on organizers' own framing: *"help decision makers understand where support or investment can make the biggest difference."*

## The wedge

Replicate **CalEnviroScreen** ([oehha.ca.gov/calenviroscreen](https://oehha.ca.gov/calenviroscreen)) and **EPA EJScreen** (delisted under Trump 2025) for Ontario at the **census-tract level**. Score combines:

- **Pollution burden:** peaker-plant proximity, AQHI, traffic, Climate TRACE facility emissions
- **Demographic vulnerability:** income, racialized population %, age (<5, >65), recent immigrant status
- **Energy access:** energy burden (% income on energy), heating type, building age

Output: cumulative impact score 0-100 per census tract with **full transparency** about weights.

Narrow shippable thing: a single map of Toronto (or GTA) with score overlay + one click reveals tract details. Vision in pitch: a Canadian replacement for the EJScreen the US just lost.

## 10-second demo moment

> Map of Toronto (cividis colormap, no red-green confusion). **Zoom into south Etobicoke** (Portlands gas peaker neighborhood) → score **92/100** (high impact). **Zoom into Forest Hill** → score **12/100**. Explain in one line why: "south Etobicoke residents have higher energy burden + live downwind of Portlands."

Auto-plays, screen-shareable, lands in 3 seconds visually then 7 seconds of explanation. Maps to "one screen, one ah-ha" pattern from past winners.

## Data sources

- **Energy Poverty & Equity Explorer** (Efficiency Canada + Community Data Program): [energypoverty.communitydata.ca](https://energypoverty.communitydata.ca/) — census-tract-level energy burden, income, heating type, building age
- **Statistics Canada census tracts** via WDS REST API — income, racialized %, age structure, recent immigrants (98-series tables)
- **Ontario Marginalization Index (ON-MARG)** — material deprivation + ethnic concentration + dependency + residential instability (Public Health Ontario)
- **AQHI nowcast** — ECCC API
- **IESO transmission-connected generation list** — peaker-plant locations (Portlands, Goreway, Halton Hills, Brighton Beach, etc.)
- **Climate TRACE API** — facility emissions
- **City of Toronto neighbourhoods + ward boundaries** — Open Data Toronto

## Why it could win (mapped to 4-axis rubric)

- **Technical (25%)** — geospatial pipeline (PostGIS / Turf.js), multi-source data fusion, scoring model with documented weights = real engineering on display.
- **Design (25%)** — a map with a clear narrative beats anything. Cividis colormap + Toronto outline + interactive scoring is judge-gold. Use Lambert Conformal Conic projection (StatCan standard, parallels 49°N + 77°N).
- **Originality (25%)** — Canada has no equivalent; EJScreen delisted in 2025; opportunity to **be the keeper of equity data for North America**. Genuinely novel artifact.
- **Impact (25%)** — directly maps to Theme 3's organizers' own words. Decision-support framing for planners (Toronto Public Health, City Climate office, OEB, IESO). Concrete recommendation engine ("prioritize EAP enrollment in tracts scored ≥75").

## Risks

- **Methodology defensibility** — pick weights carefully, document them. Reference CalEnviroScreen's published methodology.
- **Don't speak for communities** — frame as "decision-support for planners and advocates," not "the answer." Cite Indigenous-led + community-of-color advocates whose work this builds on (Toronto Environmental Alliance, Pollution Probe).
- **Data freshness gaps** — census is from 2021; energy poverty data from same period. Be transparent about temporal lag.
- **Performance** — rendering 5,000+ census tracts can be slow. Use vector tiles (Mapbox / MapLibre) not raw GeoJSON polygons.

## Stack flexibility

Geospatial-heavy. Options:
- **Web:** Next.js + MapLibre GL JS or Mapbox GL JS + PostGIS backend (Supabase)
- **Python:** Streamlit + Folium or Plotly maps + Pandas + GeoPandas
- **Hybrid:** Python data pipeline (build the score table once) + lightweight web frontend (just renders precomputed score)

The "build the score table once" approach is simpler and demos identically.

## Differentiation note

The score includes **BOTH pollution AND energy burden** in the same cumulative metric — most equity-screen tools have one or the other, not both. This is the wedge. Frame it as: *"For the first time, you can see where Ontarians are paying the highest energy burden AND breathing the worst air, in the same map."*

Bonus differentiator: include a "What changes if we phase out gas peakers by 2030" toggle — recompute score with Portlands/Greenfield removed. Visualizes the Pembina/OCAA gas-phase-out argument in 1 click.

## Cross-references

- [[../../docs/energy-domain]] — Ontario data sources, regulators, peaker plants
- [[../README]] — idea-scoring rubric (use to score this at `/hackathon:ideate`)
- [[../../docs/themes|themes]] — Theme 3 organizer language

## Comparison with other top-3 seeds

| | Seed A | Seed B (this) | Seed C |
|---|---|---|---|
| Theme | 1+2 | 3 | 2+3 |
| Data complexity | Medium | High | Medium |
| Demo type | Widget + API | Interactive map | Live time-replay |
| Equity angle | Implicit | **Central** | Central |
| Comparable winner | Open Climate Fix | CalEnviroScreen + Incenzo (MIT 2024 1st) | Civic-tech outage maps |

## Pre-commitment notes for `/hackathon:ideate`

- If May 24 challenges include "equity" or "underserved communities" language → strongest play
- If TAF (The Atmospheric Fund) or Toronto Public Health is a sponsor → directly relevant
- If a sponsor track requires CalEnviroScreen-style methodology → automatic
- If challenges narrow to "Toronto-only" → easier scope (drop GTA, focus on 140 city neighborhoods)
- If challenges narrow to "rural Ontario" → pivot the score to include diesel-dependent communities
