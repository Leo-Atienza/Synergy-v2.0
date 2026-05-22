---
title: Seed C — Outage Equity Index
type: idea
status: draft
updated: 2026-05-15
sources: ["[[../README]]", "[[seed-ideas]]", "[[../../docs/energy-domain]]", "[[../../docs/themes]]"]
---

# Seed C — Outage Equity Index (real-time + replay)

> One of three top-3 idea seeds compiled from the 2026-05-15 deep-research dossier (`../../docs/research-dossier.md`). **Pure context — not a commitment.** Final pick happens at `/hackathon:ideate` (target lock 2026-05-22) AFTER kickoff May 24 reveals the actual challenge sets.

## Theme alignment

Themes 2 (Smart Grid, Resilience & Electrification) + 3 (Community Energy, Equity & Sustainability). Cross-theme.

## The wedge

Real-time scraper of **Toronto Hydro outage map** + **Hydro One Storm Centre**, overlaid with:
- Ontario Marginalization Index (ON-MARG)
- Over-65 population by tract
- High-rise / elevator-dependent building inventory (Tower Renewal candidates)

Surfaces who is bearing the burden of each outage **in real time** AND offers a **time-replay engine** for past major events (May 2022 derecho, March 2025 ice storm).

Narrow shippable thing: live map showing current Ontario outages with equity overlay + a "replay derecho" button for the demo. Vision in pitch: utility planners and emergency management get the map they wished they had after every storm.

## 10-second demo moment

> **Click "Replay May 21, 2022 derecho."** Map of Eastern Ontario. Storm sweeps across the screen at 10× real time. As outages spread, a counter ticks up: **"currently affecting 3,200 seniors in tower buildings — 14 hours elapsed."** End state: dispersed colored dots showing weeks-long rural outages, one statistic burned in: *"the people who waited longest for power had ON-MARG scores 2.3× the provincial median."*

The time-replay is the killer mechanic. Most "equity dashboards" are static maps; this one moves. Judges remember motion.

## Data sources

- **Toronto Hydro outage map** ([outagemap.torontohydro.com](https://outagemap.torontohydro.com/)) — scrape every 10 min for live; archive snapshots
- **Hydro One Storm Centre** ([stormcentre.hydroone.com](https://stormcentre.hydroone.com/)) — same approach
- **Hydro One 2022 Derecho Major Events Response Report** (PDF) — for historical replay data
- **Hydro Ottawa After-the-storm report** — for May 2022 replay data (Eastern Ontario coverage)
- **Ontario Marginalization Index (ON-MARG)** — Public Health Ontario
- **StatCan census** — over-65 population by tract
- **Toronto Open Data** — building stock, ward boundaries, Tower Renewal building list
- **Optional:** Hydro Ottawa, Alectra outage maps for broader coverage

## Why it could win (mapped to 4-axis rubric)

- **Technical (25%)** — real-time scraping + data fusion + replay engine + WebSocket-driven live updates = visible engineering effort.
- **Design (25%)** — live map with humans (not just dots) → emotional resonance. The replay is the design wedge — most equity dashboards are static.
- **Originality (25%)** — outage data + equity data BOTH exist publicly; the overlay + replay is novel. March 2025 ice storm reframed grid resilience as an equity issue — this is the tool journalists wished they had.
- **Impact (25%)** — instantly understandable to anyone who lost power in 2022/2025; framed for utility planners + emergency management; concrete recommendation engine ("prioritize restoration for these 12 buildings with 200+ over-65 residents").

## Risks

- **Scraper fragility** — outage map layouts can change, breaking selectors. Mitigation: build a fallback that uses cached historical CSV exports of past major events; demo doesn't need live data.
- **Sensitive framing** — present as informing equitable restoration policy, NOT performative tragedy. Get the language right.
- **Privacy** — never tie outages to specific addresses or named individuals. Aggregate to census tract minimum.
- **Tower data** — Tower Renewal list is partial. Be transparent about coverage.

## Stack flexibility

- **Web:** Next.js + MapLibre GL or Mapbox GL + PostGIS for geospatial joins + WebSocket (Supabase realtime / Pusher) for live updates + Python scraper as cron
- **Lighter alternative:** Python + Streamlit + Plotly maps; cron-driven scraper writes to local SQLite; replay reads from saved snapshots
- **Hybrid:** Python backend (scraping + scoring) + Next.js frontend (live + replay UI)

For demo purposes, the replay-mode is enough — scraper liveness is a bonus, not required.

## Differentiation note

The **time-replay engine** is what separates this from a static equity map. Every other "equity dashboard" judges see is a snapshot. This one *moves through time*, and the motion *is* the argument.

Secondary differentiator: include a **"who restored last"** metric for past events. Hydro One restored urban Ottawa in 48h; rural Perth/Bancroft/Tweed waited weeks. The map highlights this distributional pattern.

## Cross-references

- [[../../docs/energy-domain]] — Ontario LDC outage maps + key extreme-weather events
- [[../README]] — idea-scoring rubric (use to score this at `/hackathon:ideate`)
- [[../../docs/themes|themes]] — Theme 2+3 organizer language

## Comparison with other top-3 seeds

| | Seed A | Seed B | Seed C (this) |
|---|---|---|---|
| Theme | 1+2 | 3 | 2+3 |
| Data complexity | Medium | High | Medium |
| Demo type | Widget + API | Interactive map | **Live time-replay** |
| Equity angle | Implicit | Central | Central |
| Live data dependency | Yes | No | Live optional, replay required |
| Comparable winner | Open Climate Fix | CalEnviroScreen + Incenzo | Civic-tech outage maps + GridShift WattsDown |

## Pre-commitment notes for `/hackathon:ideate`

- If May 24 challenges include "resilience" or "extreme weather" → strongest play
- If a sponsor track touches grid hardening / DR / restoration → directly relevant (Hydro One, Toronto Hydro likely candidates)
- If challenges include March 2025 ice storm as motivation → automatic alignment
- If scraping is forbidden by event rules → use Hydro One's Major Events Response Report PDFs as the dataset (replay-only mode)
