---
title: Scored ideas — rubric scores + finalist candidates
type: idea
status: draft
updated: 2026-05-22
sources: ["[[README]]", "[[seed-ideas]]", "[[seed-a-carbon-intensity-api]]", "[[seed-b-ontario-enviroscreen]]", "[[seed-c-outage-equity-index]]", "[[seed-d-tide]]", "[[seed-e-rooftop-roll-call]]", "[[seed-f-backwards-hour]]"]
---

# Scored ideas

> The **evaluation** half of `/hackathon:ideate` (generation lives in [[seed-ideas]] — never score there). This file scores the candidate pool against the project rubric in [[README]] and names the **finalist candidates** (anything ≥75/100). The single **chosen idea** is a separate, later rung — see "What is NOT decided here" below.

## Two provisional caveats (read before trusting a number)

1. **Buildability is scored before [[../../.hackathon/event|team]] capacity is locked.** Per [[README]] the buildability axis should be scored *after* `/hackathon:team` sets team size + skills (currently `size: 0`). These scores assume a small capable team; re-rank buildability once capacity is known. The proven-spike seeds (D especially) are the most robust to this — they're already partly built.
2. **The challenge set isn't revealed yet** (kickoff 2026-05-24). Each seed's "Pre-commitment notes" lists the May-24 conditions that would re-rank it. So this scoring promotes Tide to **Candidate**; it does **not** lock the chosen idea. That lock waits for May 24.

## The rubric (from [[README]])

| Criterion | Weight | Question |
|---|---|---|
| Theme fit | 25 | Lands cleanly in 1 of 3 themes? Bonus for Theme 3 (broadest). |
| Demo-moment visual | 25 | 10-sec clip describable as a literal video script — no "allows"/"lets users"? |
| Buildability in 96h | 20 | Realistically achievable end-to-end (data + UI + deploy) with team capacity? |
| Canadian-data leverage | 15 | Uses a real Canadian dataset (IESO / ECCC / NRCan / Open Data Toronto)? |
| Originality | 15 | Will 10 other teams build the same thing? If yes, dock. |

Total /100. **≥75 = finalist candidate.** Highest ≥75 = locked idea (deferred — see below).

## Scoring — the 6 carded seeds

Only the six seeds with dedicated cards are full-scored; the 12 thin dossier candidates are screened out below (generation→evaluation gate). Sub-scores are out of each criterion's weight.

| Rank | Seed | Theme /25 | Demo /25 | Build /20 | Cdn-data /15 | Orig /15 | **Total** | Verdict | Preset* |
|---|---|---|---|---|---|---|---|---|---|
| 1 | **[[seed-d-tide\|D · Tide]]** | 23 | 25 | 19 | 15 | 12 | **94** | ✅ **lead candidate** | data-viz + py agent |
| 2 | [[seed-c-outage-equity-index\|C · Outage Equity Index]] | 23 | 24 | 13 | 15 | 13 | **88** | ✅ finalist | data-viz |
| 3 | [[seed-e-rooftop-roll-call\|E · Rooftop Roll Call]] | 23 | 22 | 14 | 15 | 13 | **87** | ✅ finalist | data-viz |
| 4 | [[seed-b-ontario-enviroscreen\|B · OntarioEnviroScreen]] | 24 | 20 | 11 | 15 | 13 | **83** | ✅ finalist | data-viz |
| 5 | [[seed-f-backwards-hour\|F · Backwards Hour]] | 21 | 20 | 15 | 12 | 14 | **82** | ✅ finalist | web-ai / PWA |
| 6 | [[seed-a-carbon-intensity-api\|A · api.carbonintensity.ca]] | 22 | 20 | 14 | 15 | 11 | **82** | ✅ finalist | data-viz |

\* Preset is **indicative only** — it is committed to `event.yaml` at the chosen-lock, not here. Most cluster on `data-viz` because the event theme is visualization-heavy. Tide is the exception: its dashboard half is `data-viz` (the already-built [`prototypes/tide-web`](../../prototypes/tide-web/)) but the closed control loop is a custom Python agent ([`prototypes/tide`](../../prototypes/tide/)) — no clean preset fit.

## Why each score (the determining factors)

**D · Tide — 94 (lead).** The only seed that **moves kWh** *and* arrives with **viability PROVEN** ([`prototypes/tide/VIABILITY.md`](../../prototypes/tide/VIABILITY.md): 7/7 fuels parsed, optimizer 85% off, 7/7 tests, tsc clean) *and* an already-built, `next build`-green demo UI. That's why Buildability (19) and Demo (25) top the pool — the 10-sec moment is written as a literal script (lamp turns on at 11 PM, counter ticks −$0.27 / 14 trees) and it's de-risked, not aspirational. Max Canadian-data (15: IESO real-time + fuel mix + VG forecast + OEB RPP + ECCC NIR). It **concedes** Originality honestly (12) — grid-aware control exists (Optiwatt, Home-Assistant DIY); the defensible novelty is the cost+carbon+generic-load+zero-config+**receipt** fusion (zero packaged repos), not the relay. A clear 6-point lead, grounded in the spike, not in hype.

**C · Outage Equity Index — 88.** Strongest demo *drama* after Tide (24: the derecho-replay sweeps the screen, "3,200 seniors in towers, 14h"). Dual Theme 2+3 fit (23) and rich Canadian data (15). Buildability drops to 13 — live-scraper fragility (mitigated by cached historical events) + sensitive framing + no spike.

**E · Rooftop Roll Call — 87.** Theme-1 bullseye (23, matches the organizers' own "identify good locations for small-scale solar" sample). Strong local-detail demo (22: a named real Costco roof, "2.4 MW, offsets 290 homes, panels: zero"). Buildability 14 — a tractable geospatial pipeline, shrinkable to one neighbourhood's Top 20. The "produce" counterpart to Tide's "save."

**B · OntarioEnviroScreen — 83.** Best pure Theme-fit (24, Theme-3 bonus) and maximal Canadian data (15). But Buildability is the pool's lowest (11) — methodology defensibility + many datasets + heaviest build + no spike. Demo (20) is a strong choropleth, but judges see many maps.

**F · Backwards Hour — 82.** Highest Originality (14: nobody ships a *wellness ritual* at an energy hackathon) and lightest build (15). Capped by softer Demo (20, behavioural) and weaker Canadian-data (12, savings modelled not metered). The natural **companion/fallback to Tide** (automate the shift vs. ritualize it).

**A · api.carbonintensity.ca — 82.** Clean Theme 1+2 (22) and full Canadian data (15). Originality lowest (11) — a faithful port of the UK NESO API; "first in Ontario" is real but it's a known pattern. Widget demo (20) reveals a number but has no physical motion.

## Screened out at the generation→evaluation gate (12 dossier candidates)

Not full-scored: each is a thin one-liner in [[seed-ideas]] without a card, and most **talk about** energy rather than **move** it (the user's own round-2 filter). Promote to a card first if a May-24 condition revives one.

| # | Candidate | Why screened | Revive if… |
|---|---|---|---|
| 1 | OpenIESO.ca (fork OpenNEM) | Dashboard; "derivative" risk flagged in its own sketch | challenge wants a live grid dashboard |
| 8 | Carbon-Aware EV Router | Borderline-moves, but charger APIs partial → mock risk | EV / charging-infra challenge |
| 10 | Demand-Response Game Layer | Moves load but on **mocked** Green Button data | gamified-DR or LDC sponsor |
| 11 | Heat Pump + Solar Calculator | Calculator (talks about); MLS/assessment data may need mocking | retrofit / rebate challenge |
| 13 | WhatPoweredYourPhone.ca | Viral explainer (talks about); "too cute" risk | awareness/virality is the ask |
| 14 | Tower Renewal Estimator | Estimator (talks about); high build | buildings/retrofit challenge |
| 15 | Peatland Carbon Dashboard | Talks about; "less obviously Energy" risk | climate×carbon-sink framing rewarded |
| 3 | Building Disclosure Map | Transparency map (talks about); data lag/gaps | disclosure/benchmarking challenge |
| 6 | Cool & Clean Heat Router | Routes to cool spaces (talks about); not energy-moving | heat-equity / public-health challenge |
| 7 | School Energy Report Card | PDF aggregation (talks about); parsing tedium | schools / public-sector challenge |
| 9 | Diesel-to-Solar Calculator | Calculator (talks about); needs sensitive Indigenous framing | reconciliation / remote-community challenge |
| 12 | Ontario Polluter Dashboard | Ranking/map (talks about); Climate TRACE coverage sparse | accountability / emissions challenge |

## Candidate verdict

- **All 6 carded seeds clear ≥75 → all are finalist candidates.**
- **Tide is promoted to lead candidate (94/100)** — its lead is decided by the proven viability spike + built demo UI (buildability) and the scripted hardware/live-compute/embodied-number demo moment, with max Canadian-data leverage. It honestly concedes the originality axis.
- Tide + Backwards Hour remain two modes of one peak-hour logic; keep F as Tide's companion/fallback, not a rival.

## What is NOT decided here

The **chosen idea** (the single locked project) is intentionally **not** locked, because:
- the May-24 challenge reveal can re-rank the pool (see each seed's pre-commitment notes — generation/siting lifts E, equity/resilience lifts B/C, behaviour/accessibility lifts F);
- buildability needs a re-check once `/hackathon:team` locks capacity.

**Next:** at/after the May-24 kickoff, lock `chosen-idea` → write [[chosen-idea]], set `stack_preset` in [[../../.hackathon/event|event.yaml]], fill the Stack/Demo rows in [`CLAUDE.md`](../../CLAUDE.md), then `/hackathon:scope`.

## Cross-references

- [[README]] — the rubric + anti-patterns this scoring applies
- [[seed-ideas]] — the generation pool (#1–18 + 3 parked)
- [[seed-d-tide]] — the lead candidate's full card (+ 2026-05-22 verification)
- [[../50-build-log/decisions]] — the ADR entry for this promotion
