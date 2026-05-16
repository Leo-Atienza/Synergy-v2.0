---
title: Seed ideas — initial brainstorm (15 candidates)
type: idea
status: draft
updated: 2026-05-15
sources: ["[[../../docs/themes|themes]]", "[[../../docs/energy-domain|energy-domain]]", "[[seed-a-carbon-intensity-api]]", "[[seed-b-ontario-enviroscreen]]", "[[seed-c-outage-equity-index]]"]
---

# Seed ideas

> Pre-`/hackathon:ideate` brainstorm. Goal: 5–10 candidate angles per theme, lightly sketched, NO commitment yet. Score and pick at `/hackathon:ideate` (target lock: 2026-05-22, AFTER kickoff May 24 reveals challenge sets).
>
> **15 candidates surfaced from the 2026-05-15 deep-research dossier** (`~/.claude/plans/now-i-want-you-elegant-narwhal.md`). Three are top-3 seeds with their own files: [[seed-a-carbon-intensity-api]], [[seed-b-ontario-enviroscreen]], [[seed-c-outage-equity-index]] (marked ⭐ below).

## Theme 1 — Clean Energy Generation & Integration

> "How clean energy can be understood, planned, and communicated in simple and creative ways. Maps, visuals, or digital tools."

### Candidate angles

#### 1. OpenIESO.ca — fork OpenNEM
- **One-line pitch:** Fork the MIT-licensed OpenNEM (Australia) and swap data sources for Ontario IESO.
- **Demo moment:** Open the page; live dashboard updates every 5 min showing Ontario fuel mix; side-by-side with the UK equivalent — "we built the Ontario version in 96 hours."
- **Data source:** IESO Real-time Totals + Gen Output by Fuel Hourly via [GridStatus](https://www.gridstatus.io/live/ieso) Python SDK.
- **Risk:** Looks too "derivative" if framing doesn't include Ontario-specific overlays (Bruce/Pickering/Darlington labels, intertie flows).
- **Why now:** Ontario has no consumer-grade live grid dashboard; sponsors (IESO, OPG) would understand instantly.
- **Cross-theme:** Theme 2 (Smart Grid).

#### 2. ⭐ api.carbonintensity.ca — Ontario carbon intensity API + widget
- **One-line pitch:** Build the Ontario equivalent of UK's NESO Carbon Intensity API — public REST endpoint + embeddable widget.
- **Demo moment:** "Right now your electricity is 38 g/kWh — plug in your EV at 2 AM for 19 g/kWh." Then embed widget live in a sample blog.
- **Data source:** IESO Real-time Totals + Gen Output by Fuel + Intertie Schedule + ECCC NIR fuel-mix factors.
- **Risk:** Forecast methodology defensibility; cite UK NESO approach for credibility.
- **Why now:** UK has [api.carbonintensity.org.uk](https://api.carbonintensity.org.uk/); Ontario has nothing equivalent. EV adoption growing → ULO rates need consumer-facing tooling.
- **Full file:** [[seed-a-carbon-intensity-api]]
- **Cross-theme:** Theme 2.

#### 8. Carbon-Aware EV Router for Ontario
- **One-line pitch:** A* routing over IESO real-time fuel mix + Ivy/FLO/Petro-Canada chargers, optimizing for carbon.
- **Demo moment:** Toronto → Sudbury route. Show "this route saves 8 kg CO₂ vs naive routing" with map highlighting why.
- **Data source:** IESO Gen Output by Fuel Hourly + charger network APIs (Ivy/FLO/ChargePoint) + Mapbox/OSRM routing.
- **Risk:** Charger network APIs partial — may need to scrape or mock.
- **Why now:** Ontario EV fleet ~400k → 11.5M by 2050 (IESO); charging-infra carbon-awareness still novel.
- **Cross-theme:** Theme 2.

#### 11. "Are You Ready?" Heat Pump + Solar Wedge Calculator (with renter equity lens)
- **One-line pitch:** Type Toronto address → home archetype → heat pump payback under HRS 2025 rebates → solar viability → renter-section with what-to-ask-landlord.
- **Demo moment:** Type your address; in 5 seconds see archetype, emissions, retrofit payback, and renter-specific guidance.
- **Data source:** Toronto Open Data MLAR/assessment + NRCan PV potential + Mapbox satellite tiles + Enbridge HRS rebate tables.
- **Risk:** MLS/assessment data not all openly accessible — may need to mock.
- **Why now:** HRS launched Jan 2025 ($7,500 ASHP, $12,000 GSHP); Greener Homes closed; renters increasingly excluded from green tools.
- **Cross-theme:** Theme 3.

#### 13. WhatPoweredYourPhone.ca
- **One-line pitch:** Browser/mobile app that logs your phone-charging time + location and tells you what fuel charged it.
- **Demo moment:** Pre-loaded user data shows a year of charging; reveal "your phone was 78% nuclear, 19% hydro, 3% gas." Share-card image.
- **Data source:** IESO Gen Output by Fuel Hourly (historical) + Real-time Totals.
- **Risk:** May feel too cute / not policy-meaningful — frame as gateway to deeper engagement.
- **Why now:** Ontario's clean grid is genuinely a story most residents don't know; viral angle.

#### 15. Peatland Carbon Dashboard — Hudson Bay Lowlands
- **One-line pitch:** Ontario peatlands store ~1.3 Bt carbon (40 yrs of Canada's car emissions). Map them, show fire risk, current sink/source status.
- **Demo moment:** Ontario at provincial scale; HBL highlighted; compare stored carbon to annual Canadian vehicle emissions ("40 years").
- **Data source:** ECCC carbon stock maps + NRCan peatland datasets + CWFIS fire data.
- **Risk:** Less obviously "Energy" — pitch carefully as energy/climate intersection.
- **Why now:** Climate-driven drought + fire risk increasing for boreal peat; rare angle in hackathons.

---

## Theme 2 — Smart Grid, Resilience & Electrification

> "Help explain energy use, show how systems respond to change, support planning for stronger and more reliable infrastructure."

### Candidate angles

(See cross-theme entries above: #1 OpenIESO.ca, #2 api.carbonintensity.ca, #8 Carbon-Aware EV Router)

#### 5. ⭐ Outage Equity Index (real-time + replay)
- **One-line pitch:** Live scraper of Toronto Hydro + Hydro One outage maps overlaid with ON-MARG + over-65 + high-rise inventory; with a derecho-replay engine.
- **Demo moment:** Click "Replay May 21, 2022 derecho" → storm sweeps the screen, counter ticks "3,200 seniors in tower buildings, 14h elapsed."
- **Data source:** Toronto Hydro outage map + Hydro One Storm Centre + ON-MARG + StatCan census + Toronto Open Data.
- **Risk:** Scraper fragility (mitigation: cache historical events); sensitive framing required.
- **Why now:** March 2025 ice storm was Hydro One's worst since 1998; resilience-equity intersection is hot.
- **Full file:** [[seed-c-outage-equity-index]]
- **Cross-theme:** Theme 3.

#### 10. Demand-Response Game Layer (consumer-facing OhmConnect for Ontario)
- **One-line pitch:** Gamified DR app on top of (mocked) Hydro One Green Button data. Points + leaderboard for shifting load to ULO. Earnings paid as bill credits.
- **Demo moment:** Simulate a typical evening — see your "score" rise as you push dishwasher to 11pm; leaderboard fills with classmates' avatars.
- **Data source:** Green Button schema + mock data; IESO Gen Output by Fuel Hourly for context; ULO rate periods.
- **Risk:** Needs to feel different from generic "tracker apps."
- **Why now:** OhmConnect/Renew Home targeting 50 GW residential VPP by 2030; Ontario has Peak Perks but no gamification.

#### 14. Toronto Tower Renewal Energy Estimator
- **One-line pitch:** Map every Toronto pre-1980 high-rise (~1,200 candidates per Tower Renewal). Per building: emissions + savings from envelope retrofit + heat pump + balcony PV.
- **Demo moment:** Aerial view of St. Jamestown; click one tower; see "1968 tower emits 4,200 t CO₂/yr — retrofit + heat pump = 87% reduction, $4M capex over 30 yrs."
- **Data source:** Toronto Open Data building inventory + Tower Renewal datasets + ENERGY STAR PM medians + NRCan PV potential + City rebates.
- **Risk:** Frame carefully — don't paint over real tower-renewal-and-displacement equity issues.
- **Why now:** Toronto's biggest single emissions opportunity; TGS Tier 4 trajectory by 2030.
- **Cross-theme:** Theme 1+3.

---

## Theme 3 — Community Energy, Equity & Sustainability

> "Help decision makers understand where support or investment can make the biggest difference."

### Candidate angles

(See cross-theme entries above: #5 Outage Equity Index, #11 Heat Pump + Solar Calculator, #14 Tower Renewal)

#### 3. Toronto Building Disclosure Map
- **One-line pitch:** Aggregate Ontario's large-building EWRB dataset (50,000+ sq ft buildings reporting energy/water/GHG) into a single searchable map à la NYC LL97.
- **Demo moment:** Type "1750 Finch Ave East" (Seneca's address) → see Seneca's building's energy use, rank vs peers, projected savings if heat-pump-retrofitted.
- **Data source:** open.canada.ca large-buildings dataset + Toronto Open Data EWRB + ENERGY STAR PM technical reference for medians.
- **Risk:** Dataset has gaps and lag; needs careful caveats. Toronto BEPS not mandatory yet.
- **Why now:** Toronto BEPS motion sent back Dec 2025 → return early 2027; transparency tool fills the policy gap meanwhile.

#### 4. ⭐ OntarioEnviroScreen
- **One-line pitch:** Replicate CalEnviroScreen / EJScreen for Ontario at census-tract level; combine pollution + demographic vulnerability + energy access into a single 0-100 score.
- **Demo moment:** Zoom Toronto map; south Etobicoke (Portlands peaker neighborhood) → 92/100; Forest Hill → 12/100; one-line explanation.
- **Data source:** Energy Poverty Explorer (Efficiency Canada) + StatCan census + ON-MARG + AQHI + IESO peaker locations + Climate TRACE.
- **Risk:** Methodology defensibility; sensitive framing.
- **Why now:** EJScreen delisted under Trump 2025; Canada has no equivalent; opportunity to be the keeper of NA equity data.
- **Full file:** [[seed-b-ontario-enviroscreen]]

#### 6. "Cool & Clean" Toronto Heat Equity Router
- **One-line pitch:** Combines Toronto HVI + Heat Relief Network cool-spaces (open/closed status, AC, transit) + AQHI nowcast → routes vulnerable residents to nearest accessible cool space.
- **Demo moment:** Type Scarborough address on a 32°C day → map highlights cool space, transit route, asthma-safe walk path; show why that neighborhood needs more.
- **Data source:** Toronto Open Data (Cool Spaces, wards, transit) + Toronto Public Health HVI + AQHI + TTC GTFS.
- **Risk:** TPH HVI not always public at granular level — may need to recompute.
- **Why now:** Wellesley Institute *Left in the Heat* (2024) explicitly flagged the gap; Toronto UHI is highest in Canada at +4.36°C.

#### 7. School Energy Report Card
- **One-line pitch:** Aggregate Ontario Regulation 25/23 broader-public-sector energy reports (school boards publish PDFs) into one searchable, comparable dashboard.
- **Demo moment:** Type "Newnham Campus" → see Seneca's grade, top + bottom schools; parent-friendly narrative ("how is your kid's school doing?").
- **Data source:** O.Reg 25/23 school-board PDFs (scrape/OCR — feasible at small N) + StatCan demographics + ENERGY STAR median benchmarks.
- **Risk:** PDF parsing tedium; gaps between boards in how data is reported.
- **Why now:** Data exists since 2013 but nobody has aggregated for parents/voters.

#### 9. Northern Ontario Diesel-to-Solar Calculator (Indigenous lens)
- **One-line pitch:** For each of Ontario's ~25 First Nations historically on diesel (and the 17 now on Wataynikaneyap), show diesel cost + GHG vs PAYG/solar-hybrid alternative.
- **Demo moment:** Zoom on a Northern community pre-Wataynikaneyap → see lifetime diesel cost + emissions saved; toggle "solar-hybrid scenario."
- **Data source:** NRCan Remote Communities Energy Database + NRCan PV potential rasters + Wataynikaneyap published data + ECCC weather.
- **Risk:** Requires sensitive framing — partner-with rather than speak-for. Consult Indigenous Clean Energy resources first.
- **Why now:** Wataynikaneyap completed May 2024; reconciliation-meets-climate narrative.

#### 12. Ontario Polluter Dashboard
- **One-line pitch:** Climate TRACE facility-level emissions filtered to Ontario, ranked, mapped; cross-reference with adjacent demographics.
- **Demo moment:** Top 20 Ontario polluters; click one → see surrounding census tracts (income, racialized %, asthma rates if available).
- **Data source:** Climate TRACE API + federal Greenhouse Gas Reporting Program (Canada Open Government) + StatCan census.
- **Risk:** Climate TRACE Ontario coverage may be sparse in some sectors.
- **Why now:** Climate TRACE found oil+gas emissions are 2× self-reported — accountability narrative is fresh.

---

## Cross-theme experiments

Ideas that span 2+ themes — useful as backup if challenge unveil on May 24 reframes things:

| # | Idea | Themes |
|---|---|---|
| 1 | OpenIESO.ca | 1+2 |
| 2 | ⭐ api.carbonintensity.ca | 1+2 |
| 5 | ⭐ Outage Equity Index | 2+3 |
| 8 | Carbon-Aware EV Router | 1+2 |
| 11 | Heat Pump + Solar Calculator | 1+3 |
| 14 | Tower Renewal Estimator | 1+3 |

---

## Process notes

- **Quantity first**, quality at scoring time. We have 15. 5 more by 2026-05-20 is bonus.
- **Don't filter while brainstorming** — write down even silly ones. Often the silly one becomes the seed.
- **Separate generation from evaluation** — never score in this file. Move to [[scored-ideas]] for that (create at `/hackathon:ideate`).
- **Use [`energy-domain-researcher`](../../.claude/agents/energy-domain-researcher.md)** when an idea needs a real dataset to be plausible — though [[../../docs/energy-domain]] is now backfilled with most of what you need.
- **The top-3 (⭐) are NOT pre-picks.** They surfaced from research, not from kickoff. Final picks happen post-May-24.
