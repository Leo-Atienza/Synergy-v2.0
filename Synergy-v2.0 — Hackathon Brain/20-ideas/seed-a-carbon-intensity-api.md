---
title: Seed A — api.carbonintensity.ca
type: idea
status: draft
updated: 2026-05-15
sources: ["[[../README]]", "[[seed-ideas]]", "[[../../docs/energy-domain]]", "[[../../docs/themes]]"]
---

# Seed A — api.carbonintensity.ca

> One of three top-3 idea seeds compiled from the 2026-05-15 deep-research dossier (`~/.claude/plans/now-i-want-you-elegant-narwhal.md`). **Pure context — not a commitment.** Final pick happens at `/hackathon:ideate` (target lock 2026-05-22) AFTER kickoff May 24 reveals the actual challenge sets.

## Theme alignment
Themes 1 (Clean Energy Generation & Integration) + 2 (Smart Grid, Resilience & Electrification). Cross-theme.

## The wedge

Build the **Ontario equivalent of UK's NESO Carbon Intensity API** ([api.carbonintensity.org.uk](https://api.carbonintensity.org.uk/)). Public REST endpoint serving consumption-adjusted gCO₂eq/kWh in 30-min increments, plus a 60-line embeddable widget any Ontario blog/site/app could drop in.

The narrow shippable thing: real-time + 24h forecast endpoint + a `<script src=…>` widget. The vision in pitch: every Ontario consumer-energy app, climate-conscious dev, and utility could embed this — replacing 100s of one-off dashboards.

## 10-second demo moment

> Live widget on screen showing **"right now your electricity is 38 g/kWh — plug in your EV at 2 AM for 19 g/kWh"**. Cut to: embed the widget in a sample blog post, refresh, it works.

Screen-shareable, auto-plays, no typing required. Two snapshots = the whole story.

## Data sources

- **IESO Real-time Totals** — `/RealtimeTotals/` XML, 5-min, current hour
- **IESO Generator Output by Fuel Hourly** — `/GenOutputbyFuelHourly/` XML
- **IESO Intertie Schedule and Flow** — `/IntertieScheduleFlow/` XML (for import-adjusted intensity from Quebec/NY/MI/MB)
- **IESO Variable Generation Forecast** — `/VGForecastSummary/` XML (48h solar+wind forecast)
- **ECCC NIR fuel-mix emissions factors** for the per-fuel gCO₂/kWh weights
- **Optionally:** simple Prophet or transformer forecast on historical fuel mix
- **Wrapper:** GridStatus Python SDK over IESO XML if you don't want to parse XML directly

## Why it could win (mapped to default 4-axis rubric)

- **Technical (25%)** — real-time data pipeline + emissions math + import-adjustment + forecast model + public API + embeddable widget = full stack of skill on display.
- **Design (25%)** — clean API docs page + interactive widget = double exposure of design thinking.
- **Originality (25%)** — filling a gap UK has + others don't; new artifact (API as public good) not a single-purpose app; nobody has built `api.carbonintensity.ca`.
- **Impact (25%)** — "Monday-morning use" — any Ontario consumer-energy app, climate-conscious dev, or utility could embed this. Concrete pre-commitment to open-source = judge bait.

## Risks

- Forecast quality unimportant for demo but invites Q&A. Mitigation: cite UK NESO methodology and pre-write Q&A defense.
- Emissions methodology defensibility — average vs marginal vs consumption-adjusted matters. Pick consumption-adjusted (most defensible), document weights from ECCC NIR.
- Domain credibility — be ready to explain what "consumption-adjusted" means and why imports matter (Quebec hydro vs NY gas).

## Stack flexibility

Truly stack-agnostic:
- **Web:** Next.js + Vercel + serverless functions for API
- **Python:** FastAPI + Vercel/Railway + Plotly Dash dashboard
- **Hybrid:** Python backend (FastAPI) + Next.js frontend (widget)

The widget itself is the surface area — keep it framework-free vanilla JS so any site can embed.

## Differentiation note

Include a **public roadmap + open-source license + contributor docs** in the README. Judges reward "public good" framing on energy themes. If sponsors are in the room (IESO, OPG, Hydro One), they'll understand instantly why this matters.

## Cross-references

- [[../../docs/energy-domain]] — full IESO API surface + emissions factors
- [[../README]] — idea-scoring rubric (use to score this at `/hackathon:ideate`)
- [[../../docs/themes|themes]] — Theme 1+2 organizer language

## Comparison with other top-3 seeds

| | Seed A (this) | Seed B | Seed C |
|---|---|---|---|
| Theme | 1+2 | 3 | 2+3 |
| Data complexity | Medium (real-time XML + forecast) | High (geospatial + multi-source) | Medium (scraping + overlay) |
| Demo type | Widget + API docs | Interactive map | Live time-replay |
| Equity angle | Implicit (anyone can use) | Central | Central |
| Comparable winner | Open Climate Fix (UK) | CalEnviroScreen | Civic-tech outage maps |

## Pre-commitment notes for `/hackathon:ideate`

- If May 24 challenge set explicitly calls for a "consumer tool" → adapt the widget storefront accordingly
- If there's an IESO sponsor track → this aligns naturally
- If there's a "data API / open infrastructure" sponsor track → this is the obvious play
- If the challenge set forbids real-time data dependency → fall back to historical-only API (still useful)
