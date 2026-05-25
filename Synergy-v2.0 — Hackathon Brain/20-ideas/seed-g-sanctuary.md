---
title: Seed G — Sanctuary
type: idea
status: candidate
updated: 2026-05-25
sources: ["[[../README]]", "[[seed-ideas]]", "[[scored-ideas]]", "[[../../docs/energy-domain]]", "[[../../docs/themes]]", "[[../../docs/uniqueness-principles]]", "[[../../docs/post-kickoff-ideas]]"]
---

# Seed G — Sanctuary (community buildings as resilience hubs)

> **Round-3 seed.** Surfaced 2026-05-25 from this session's deep-research agents (climate-resilience lane), promoted to **Candidate** after a verification-first deep dive + Claude's own fact-check. Theme 3. **Not the chosen idea** — the lock happens at `/hackathon:scope`.

> **✅ DEEP-DIVE VERDICT (2026-05-25): STRONG GO.** Real, public, Esri-native data spine; genuinely novel for Ontario; excellent Esri + Alectra dual-fit; scalable (config, not rebuild); feasible as a StoryMap in the tight window. Arguably the best-aligned idea on the board to the **confirmed** event reality (5-axis rubric + Esri StoryMap + Alectra-Peel + real public data). Biggest risk: the per-building **solar sizing + "has backup power"** layers are MODELLED — label them; anchor on the *siting/vulnerability* insight (which is real).

> **🔬 VERIFIED 2026-05-25 (Claude direct check of the linchpin).** The **Peel Heat Vulnerability Index is a PUBLIC ArcGIS item** (`access: public`), built by Peel Public Health (owner `david.guillette@peelregion.ca_RegionofPeel`), extent = Mississauga/Brampton/Caledon. It already combines **Exposure** (mean summer temp, tree canopy, NDVI), **Sensitivity** (seniors, pre-existing conditions), **Adaptive Capacity** (income, social isolation/living-alone, renters) into quintile scores. This resolves the deep-dive's single biggest flagged risk — the hardest layer is pre-built and drops into a StoryMap. Item: <https://www.arcgis.com/home/item.html?id=83b829a8b497476b87c3d954869c02d2> (Dashboard) + data layer on TRCA portal (id `41618718755f4468b1dc022254c88ad7`) + <https://peelregion.ca/about/climate-change/climate-change-health>.

## What it is (plain language)

A map / **ArcGIS StoryMap** that ranks Peel's *trusted community buildings* — gurdwaras, mosques, mandirs, churches, rec centres, libraries — as candidate **resilience hubs**: buildings to equip with rooftop solar + a battery so they stay cool and powered during heat waves and multi-day outages, serving the most heat-vulnerable people nearby. The decision-maker (persona): an **Alectra GRE&T Centre community-energy planner** (or a municipal/community group) choosing which buildings to harden **first**.

## Theme alignment

Theme 3 (Community Energy, Equity & Sustainability) — bullseye on the confirmed Theme-3 question ("*how can climate resilience be made more equitable and inclusive for vulnerable communities?*"; key areas: community resilience, climate vulnerability, equity-focused planning). Also lands Alectra's microgrid/community-energy priority and Esri's "spatial insight" bar.

## The wedge / pattern-break

**Public-Good Frame + Local-Detail.** Existing cooling tools *route people to existing* centres (and most close at night). Sanctuary *creates new capacity* by turning buildings communities already trust into solar+battery refuges, ranked by **walkshed-reachable vulnerable population** — not raw proximity.

## 10-second demo moment

> Camera on a Brampton map; a north-east dissemination area glows dark-red on the **Peel Heat Vulnerability Index**. User clicks the nearest **gurdwara**. A panel snaps open: *"Gore Meadows-area hub — ~X m² roof → est. 90 kW solar + battery → cools 1,400 residents within a 7-minute walk: 60% renters, high seniors, inside a top-quintile heat-vulnerable area."* A counter ticks the reachable vulnerable population as more buildings light up.

Motion + a real heat layer + an embodied number, in one shot. No typing-user dependency.

## Data sources (REAL vs MODELLED — every layer checked 2026-05-25)

- **REAL / PUBLIC — Peel Heat Vulnerability Index** (Peel Public Health, ArcGIS, verified `access: public`). The vulnerability backbone, pre-built. (see verification banner above)
- **REAL / PUBLIC — Ontario Marginalization Index 2021** (dissemination-area level), Esri feature layer id `01ba4213e6d7490a9d33b9a0a0a24c3b` + <https://www.publichealthontario.ca/en/data-and-analysis/health-equity/ontario-marginalization-index>. Drop-in. (Optional — HVI already covers most of this.)
- **REAL / PUBLIC — Building footprints** (rooftop area): [Brampton GeoHub](https://geohub.brampton.ca/datasets/building-footprints) · [Mississauga Open Data](https://data.mississauga.ca/datasets/building-footprints-1). Esri ArcGIS Hub, GeoJSON/REST/CSV, no signup.
- **REAL — Community / worship points:** [OSM `amenity=place_of_worship`](https://wiki.openstreetmap.org/wiki/Tag:amenity=place_of_worship) + pre-packaged [OSM Places of Worship NA (ArcGIS item `2b8b3326960c4cb7833b7546db6d0502`)](https://www.arcgis.com/home/item.html?id=2b8b3326960c4cb7833b7546db6d0502); supplement with Brampton/Mississauga civic facilities (rec centres, libraries) from their open-data hubs. *Caveat: OSM completeness for small Peel congregations is UNVERIFIED — cross-check the showcase buildings by hand.*
- **REAL (historical — cite the year) — Peel schools without full AC:** "*seven elementary schools without any air conditioning; 167 ... in some areas; 34 cooled completely*" ([Globe & Mail, 2017](https://www.theglobeandmail.com/news/toronto/stifling-heat-sparks-concerns-in-toronto-area-schools-without-ac/article36385081/)). The *phenomenon persists* — PDSB still published hot-weather measures for "non-air-conditioned schools" in June 2024 — but the precise counts are 2017; cite as such.
- **MODELLED (label on screen) — per-building solar capacity & battery sizing.** NRCan PV potential is a ~2 km grid, not per-roof ([NRCan PV maps](https://natural-resources.canada.ca/energy-sources/renewable-energy/photovoltaic-potential-solar-resource-maps-canada)); estimate = footprint area × usable factor × regional kWh/kWp. Never quote a precise kW without "estimated."
- **MODELLED — walkshed reachable population** (ArcGIS Network Analyst service area; fall back to 500 m buffers if time-short).
- **ASSUMPTION (state it) — backup-power/AC status by building.** No public registry exists. Frame as *candidate hubs to harden*, NOT a current-state audit.

## Why it could win (mapped to the CONFIRMED 5-axis rubric)

- **Innovation & Creativity** — "trusted multi-faith gathering places as grid assets" is a fresh, non-default frame; no Ontario tool does it.
- **Impact & Relevance** — equity + climate + real vulnerable populations + a named decision-maker (GRE&T community-energy planner) with a Monday-morning use ("harden these 5 buildings first").
- **Technical Execution** — multi-layer fusion + transparent weighted suitability score + Network Analyst walkshed = real GIS depth (the Esri "insight", not decoration).
- **Presentation & Communication** — a StoryMap is purpose-built for this narrative; the heat→building→walkshed reveal lands in <10s.
- **Collaboration & Teamwork** — content-dependent (assign: data/GIS, narrative/StoryMap, design-thinking artifacts).

## Esri fit / Alectra fit

- **Esri (excellent):** ArcGIS **StoryMap + Dashboard**; **Network Analyst** walkshed (the genuine spatial insight: rank by reachable vulnerable population); **Living Atlas** + the public Peel HVI layer; **GeoEnrichment** for per-catchment demographics. Buildable on Seneca's free ArcGIS org.
- **Alectra (excellent):** hits **community energy + equity + DER/microgrids + grid-edge** head-on — the literal GRE&T Centre mandate (Hemingway/Carr). In-territory (Brampton/Mississauga).

## Scalability

**High, config-not-rebuild.** Pattern = `footprints + census/ON-Marg + heat + community points`. Peel → Alectra's 17 communities (Guelph/Hamilton/Vaughan all publish footprints) = config. Ontario-wide = re-point the heat layer. Other provinces = swap ON-Marg → Canadian Index of Multiple Deprivation. Honest friction: only some regions have an official HVI; elsewhere model land-surface temp from Landsat.

## Prior art

US **resilience-hub** movement is real ([USDN Resilience Hubs](https://www.usdn.org); [Spokane MLK Community Center solar+storage](https://www.microgridknowledge.com/microgrids/community/news/55377985)); Toronto heat-vuln maps exist ([School of Cities](https://schoolofcities.github.io/heat-vulnerability-toronto/)). **Genuinely novel:** resilience-hub *siting* on **Peel's multi-faith community buildings**, ranked by walkshed-reachable vulnerable population — no Ontario tool found doing this.

## Risks (brutal)

1. **Modelled solar/backup layers over-claimed as measured** — the #1 Q&A puncture. Label every estimate; anchor on the siting insight.
2. **OSM worship completeness** — a missed major gurdwara looks careless; hand-verify showcase buildings.
3. **2017 AC stat** — say "as of 2017" or a judge who saw the 2023 update pounces.
4. **Performative risk** — name faith buildings as *asset-based community planning*, not tokenism; ground every pick inside a real top-quintile HVI area.

## Feasibility (tight ~1.5–3 day window, as a StoryMap/Dashboard)

**Yes.** **Minimum lovable version:** Brampton-only — HVI + footprints + the 7/167 AC story + ~8–10 hand-curated *real* community buildings scored on a transparent 4-factor index, in a StoryMap with one Dashboard. **Time sink:** joining worship points to footprints; walkshed. **Mock/simplify if slipping:** 500 m buffers (not Network Analyst), fixed solar factor, ~10 showcase buildings rather than scoring all.

## Pre-commitment notes for `/hackathon:scope`

- Lock pattern-break = Public-Good Frame (+ Local-Detail). The 10-sec moment = the heat→gurdwara→walkshed reveal.
- Confirm the deadline (May 26 vs 28) before sizing scope — Brampton-only if May 26.
- Confirm the exact Peel HVI **feature service** (behind the public dashboard / TRCA item) is addable to a web map; if not, proxy HVI from Landsat LST + census (fallback).

## Cross-references

- [[../../docs/post-kickoff-ideas]] — sibling Theme-3 ideas (Amenity Loophole, Overnight Map, 446, etc.)
- [[seed-h-thaw]] — the other round-3 candidate (wounded; see its kill-shot)
- [[scored-ideas]] — scoring + finalist pool
- [[../../docs/energy-domain]] · [[../../docs/uniqueness-principles]]
