---
title: Seed H — Thaw
type: idea
status: candidate
updated: 2026-05-25
sources: ["[[../README]]", "[[seed-ideas]]", "[[scored-ideas]]", "[[seed-c-outage-equity-index]]", "[[../../docs/energy-domain]]", "[[../../docs/themes]]", "[[../../docs/uniqueness-principles]]"]
---

# Seed H — Thaw (outage × food-insecurity)

> **Round-3 seed.** Surfaced 2026-05-25 from this session's deep-research agents (climate-resilience lane), promoted to **Candidate** after a verification-first deep dive. Theme 3. **Not the chosen idea.**

> **⚠️ DEEP-DIVE VERDICT (2026-05-25): NO-GO as originally specified — viable only as a PIVOT.** The core premise — overlay a *real* multi-day outage footprint on Peel's hunger map — **is not honestly buildable**, because (1) granular historical outage geography for Peel is **not public** (utilities publish live maps only; PowerOutage.com history is paid + city-level), and (2) the storms that caused real multi-day outages (May 2022 derecho, March 2025 ice storm) hit **Hydro One's rural** territory — Alectra's urban Peel stayed stable enough that it *sent mutual-aid crews out* in 2025. **Promotable, but a clear notch below [[seed-g-sanctuary|Sanctuary]]**, and only in the pivoted form below.

## What it is (plain language)

A map / **ArcGIS StoryMap (swipe)** that lays a power-outage footprint over **food-insecurity** geography in Peel, revealing the neighbourhoods where a multi-day blackout would simultaneously destroy the fridge/freezer food of households who can least afford to replace it. Decision-maker (persona): a **Region of Peel emergency-management officer** or a **food-bank operations lead** pre-positioning emergency food + a utility deciding restoration order.

## The kill-shot (why the original premise fails — documented honestly)

- **No real, mappable, multi-day Peel outage footprint exists publicly.** Alectra's live outage map is an ArcGIS Experience (snapshot-only, no archive: `experience.arcgis.com/experience/8371de586076441192a1fa7058816c00`). PowerOutage.com historical data is **paid, city-level, email-to-purchase** ([poweroutage.com/products](https://poweroutage.com/products)). Utility **Major Event Reports** (filed to the OEB) are **aggregate counts** (customers, hours, poles) — not neighbourhood polygons.
- **The big storms missed urban Peel.** March 30 2025 ice storm = Hydro One's worst since 1998 (weeks-long *rural* outages) — Alectra was a mutual-aid *provider*. May 2022 derecho left ~70k across a Sarnia→Toronto band but urban Peel restored fast; weeks-long outages were rural Hydro One.
- **Conclusion:** you cannot show a *real* Peel blackout polygon. Faking one violates the "no AI slop = disqualification" rule.

## The pivot (the only honest version)

**"Peel Food-Resilience Map: where a blackout would hurt most."** Lead with the **real** food-vulnerability spine; render the outage layer as a **transparently-labelled MODELLED restoration-prioritization scenario** (a plausible storm footprint, watermarked "MODELLED SCENARIO"). Frame for the decision (pre-positioning + restoration order), not the suffering.

## 10-second demo moment (pivoted)

> Camera on a Peel map shaded by food-insecurity / marginalization. User drags a swipe slider; a **labelled "modelled scenario"** storm footprint sweeps across; ON-Marg-red dissemination areas light up; a counter reads *"in this scenario, 11,400 food-insecure residents in Malton + NE Mississauga lose power — and 3 of their 4 nearest food banks go dark too."*

## Data sources (REAL vs MODELLED — checked 2026-05-25)

- **REAL / PUBLIC — Peel food insecurity:** 48,539 unique food-bank visitors (Jun 2024–May 2025, 28% children) — [Food Banks Mississauga 2025 Impact Report](https://www.foodbanksmississauga.ca/announcements/2025-annual-impact-report/); Mississauga declared food insecurity an emergency Nov 2024 ([City of Mississauga](https://www.mississauga.ca/city-of-mississauga-news/news/mississauga-city-council-declares-food-insecurity-an-emergency/)); Region of Peel fund $2M→$3.6M, "100k users by 2027" ([The Pointer](https://thepointer.com/article/2024-11-30/more-than-100-000-residents-will-use-food-banks-in-mississauga-by-2027-city-declares-emergency-region-steps-up)).
- **REAL / PUBLIC / Esri-native — Peel food-program locations** (name, address, hours, 60+ programs): [data.peelregion.ca food programs](https://data.peelregion.ca/datasets/food-programs/about) + [Brampton GeoHub mirror](https://geohub.brampton.ca/datasets/region-of-peel-food-programs). The real spatial anchor.
- **REAL / PUBLIC — Ontario Marginalization Index 2021** (DA) + StatCan census income by DA — [PHO ON-Marg](https://www.publichealthontario.ca/en/Data-and-Analysis/Health-Equity/Ontario-Marginalization-Index) ([live ArcGIS dashboard](https://www.arcgis.com/apps/dashboards/44d0f17d5a0a45aeb47bcdb59902b37e)).
- **REAL guidance / MODELLED dollar — food loss:** FDA/USDA "discard refrigerated food after 4 hrs" ([FoodSafety.gov](https://www.foodsafety.gov/food-safety-charts/food-safety-during-power-outage)); typical $200–$500/household is an industry estimate (illustrative, not Peel-specific).
- **MODELLED (the defining layer) — outage footprint.** Hand-drawn/"scenario" polygon or a vegetation/infrastructure outage-*risk* proxy. Must be loudly watermarked.

## Why it could win / where it's weak (CONFIRMED 5-axis rubric)

- **Innovation & Creativity — MEDIUM.** Outage-equity has prior art incl. our own [[seed-c-outage-equity-index]]; the *food-spoilage* twist is the fresh bit. No published outage × *food-insecurity* map for Ontario found.
- **Impact & Relevance — STRONG.** Live Peel emergency; named decision-maker.
- **Technical Execution — MEDIUM.** StoryMap/Dashboard; the real geospatial join is the credibility; the headline layer is modelled.
- **Presentation & Communication — STRONG.** Swipe overlay is inherently demoable.
- **Collaboration — content-dependent.**
- **Esri fit — STRONG:** StoryMap swipe / Map-Series + companion Dashboard; ON-Marg + food-programs layers native.
- **Alectra fit — GOOD only if framed as restoration-prioritization / community well-being** (Alectra is a *wires* utility — keep it pro-utility, never utility-blaming).

## Scalability

Strong: (open food-program layer) × (ON-Marg, province-wide) × (utility live feed). Peel → Alectra territory = config; Ontario = config; other provinces = swap to CIMD.

## Risks (brutal — beyond the kill-shot)

1. **Inferential leap** (outage → specific food loss): present as *risk exposure*, never measured loss.
2. **Modelled-outage honesty trap:** if the "MODELLED SCENARIO" label slips, it reads as slop. Mandatory loud watermark.
3. **Performative-tragedy framing:** lead with the decision, not the suffering.
4. **One-question Q&A puncture:** "Is this a real outage?" → must answer "no, modelled" cleanly. That single question is the whole risk.

## Feasibility (tight window, StoryMap/Dashboard)

**Yes** as pivoted. Minimum lovable: ON-Marg DA layer + Peel food-program points + one swipe vs a labelled modelled storm polygon + 3 real anchored stats. Time sink: ON-Marg→DA join + food-program geocode (~3–5 h). Mock if slipping: hand-draw the scenario polygon; skip any live scrape.

## Pre-commitment notes for `/hackathon:scope`

- Only pursue in pivoted ("modelled scenario") form. If a judge values "real data" above all, this loses to [[seed-g-sanctuary|Sanctuary]].
- If picked, the watermark + the restoration-decision framing are non-negotiable.

## Cross-references

- [[seed-g-sanctuary]] — the stronger round-3 candidate
- [[seed-c-outage-equity-index]] — prior outage-equity seed (originality overlap)
- [[../../docs/energy-domain]] · [[../../docs/uniqueness-principles]]
