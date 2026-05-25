---
title: Handoff — Tide + Energy Poverty Map decision (Theme 3 · PS1)
type: handoff
status: confirmed
updated: 2026-05-25
---

# Handoff — 2026-05-25 — Tide + Energy Poverty Map

> Decision session (no code changes). We picked the challenge and the product framing, confirmed the data exists, and sized the real impact honestly. **Scope is NOT yet locked** (`/hackathon:scope` not run). Next session resumes at: lock scope OR run two remaining data pulls, then build.

## Resume in one line
Read this file + `docs/energy-domain.md` (two 2026-05-24 subsections) + `tide/tide-web/`, then either run `/hackathon:scope` to lock the map-led framing, or do the two open data pulls first (below). **Deadline is imminent — see Critical Flags.**

## The decision (locked by reasoning, not yet written to scope.md)
- **Challenge: Theme 3 · Problem Statement 1** — energy burden / "incentives target property owners, not renters."
- **Product: Tide + an Energy Poverty Map of Peel (Mississauga + Brampton), framed as ONE use case** — renters are locked out of Ontario's 10× overnight discount (ULO 3.9¢ vs 39.1¢ on-peak); the map shows where that gap is worst and which intervention each neighbourhood needs; the $15 plug is the renter-accessible fix, shown working on stage (lamp).
- **Framing is MAP-LED, not device-led** (this is the truthful framing per the impact data — see below). Lead with the map + the regressive-pricing equity thesis; the device is the *automated equitable-access fix the research calls for*. Quote the honest renter savings (~$30–130/yr), NEVER the ~$1,760 EV number.

## Why map-led (the honest impact verdict, data-backed)
Deep research (in `docs/energy-domain.md` → "Tide impact sizing (2026-05-24)") found:
- Energy poverty is real & large: **~1.1M Ontario households**; renter rate **doubles 4.3%→8.3%** once utilities-bundled-in-rent count = exactly PS1's hidden-renter burden.
- Device savings for a poor renter are **modest (~$30–130/yr)**; ~48% of renters have no AC; baseboard heat won't shift → the plug can't reach a big slice.
- **Regressive-pricing literature (arXiv 2509.01499) is our thesis, not our undercut**: variable rates harm inflexible low-income households *unless* paired with "targeted policies ensuring equitable access" — automation-without-behaviour-change IS that policy.
- Grid/VPP: ~1,000 homes ≈ 1 MW ≈ ~$171k/yr DR value; grid-meaningful = 50k–100k loads (a vision, not demo-scale).
- **Verdict: real impact lives in the MAP + the equity thesis**, device = the working proof-of-concept fix.

## The defense against "the plug barely helps poor renters" (load-bearing for the pitch)
Reframe from *savings* to *protection + access*:
1. **The counterfactual is negative.** ULO on-peak (39.1¢) ≈ 2× standard TOU (20.3¢). Without automation, ULO is a *trap* for the inflexible. Tide removes the trap so the poor can safely touch the best rate.
2. **Democratizes a rate captured by the affluent.** ULO was built for EV charging; ~12k households use it (early 2024). Tide opens 3.9¢ to a renter with a $40 window AC. *(Hedge: ULO-adopter demographics not yet verified — see open data pulls.)*
3. **Honesty defense:** the map names who the plug helps and routes baseboard/no-AC renters to retrofits. Matching fix-to-household IS the product.
- Supporting: caps peak-bill shocks (arrears/disconnection); no comfort-rationing (dignity).
- **Presenter comeback line:** *"We're not selling $130. Ontario's cheapest rate is a perk for EV-owning homeowners; for an inflexible low-income renter the same plan is a penalty the research documents. Tide makes the best rate safe for the people it currently punishes — and the map tells the utility exactly who that is, and who needs a retrofit instead."*

## Score (honest, vs ~30-team field)
~**80/100 as-is, ~84–88 with map-led framing.** Finalist-grade, winnable, not a lock.
- Technical 9 (proven engine + real data) · Impact 8→8.5 · Presentation 8 · Innovation 7→8 · Collaboration TBD (team unformed — real gap).

## Data confirmation (in `docs/energy-domain.md` → "Energy Poverty Map — data confirmation (2026-05-24)")
- StatCan 2021 Census Profile = **GO** (income, tenure, electric heating, building age @ DA + FSA). All-DA CSV is 2.2GB → filter to Peel DGUIDs `2021A00053521*`.
- StatCan boundary files = **GO** (DA + FSA; reproject NAD83→WGS84, convert to GeoJSON). Peel ≈ 1,746 DAs vs ~35–45 FSAs.
- IESO Hourly Consumption by FSA = **GO** (real *measured* consumption, monthly ZIPs 2018–2026). Spot-check one ZIP's columns.
- CUSP Energy Poverty Explorer = **NO-GO** (cert expired + members-only). Build the burden score ourselves from census (more defensible anyway).
- **BUILD ON FSA** (only level with real measured consumption; ~40 polygons render instantly; judge-legible like "L5B = downtown Mississauga"). DA is an optional drill-down stretch.

## Built assets (already in repo — this is our edge under the short clock)
- `tide/spike/` — proven engine: live IESO parse (7/7 fuels), ULO optimizer, plug control, 7/7 tests, tsc clean. See `tide/spike/VIABILITY.md`.
- `tide/tide-web/` — Next.js 16 + React 19, one-screen WAIT/GO UI. `lib/` = pure shared engine; `app/page.tsx` (server) + `app/tide-screen.tsx` (client). `next build` green. **No map, no persistence, no API routes yet.**
- Hardware: use **Shelly Plug US Gen4** (local JSON-RPC, no cloud) — Kasa KLAP now needs cloud creds. Bring travel router + static-IP for venue. Screen-only fallback ready.

## Open / next actions
1. **Lock `/hackathon:scope`** using the project-local template (`templates/scope.md.tmpl`) — write the ONE use case, the demo moment as a literal video script, the cut line (hero = device+lamp + map; below cut = DA drill-down, Esri swap), and the pattern-break. Run `demo-moment-critic`.
2. **Two open data pulls** (optional but on the user's "data-backed" directive): (a) verify ULO-adopter demographics to make defense #2 airtight; (b) custom StatCan 98-401-X pull of *heating fuel × tenure* for Peel FSAs to harden the "baseboard renters the plug can't help" claim AND become a real map layer.
3. **Build the map** (the only real new work): download census + FSA boundaries + IESO FSA consumption → reproject boundaries to GeoJSON → join by FSA → map screen with animated peak-shift (reuse the `tide-screen` scrub/`windowHours` pattern) + click-a-neighbourhood → intervention recommendation. **Lightweight map first** (react-simple-maps / GeoJSON); Esri/ArcGIS only if slack (Esri is mentor-supported = sponsor points).
4. **Fix the May 26 deadline** across `.hackathon/event.yaml` + `docs/seneca-hackathon-context.md` (they say May 28 — WRONG).
5. **Address the Collaboration axis** — team is size 0 in event.yaml.

## CRITICAL FLAGS (corrections to stale project docs)
- **Deadline = May 26, 11:59 PM** (qualifier video), per Opening Day deck slide 9. `event.yaml`/context docs say May 28 — STALE. As of 2026-05-25, ~1.5 days left.
- **Deliverable = a 5-min YouTube video (max 6) + artifacts**, NOT a deployed app. Demo/prototype on camera counts. Video arc: 0:00 intro → 0:30 problem/stakeholder → 1:15 solution → 2:30 demo → 4:00 impact/lessons/future.
- **Rubric (confirmed, deck slide 27, 5-axis):** Innovation & Creativity · Impact & Relevance · Technical Execution · Presentation & Communication · Collaboration & Teamwork. (event.yaml's 4-axis is a stale placeholder.)
- **"AI slop in any form will disqualify."** Our real-data approach (IESO measured consumption + StatCan census) is the defense.
- **"Pick ONE use case; don't try to solve everything"** is the deck's #1 listed mistake — keep it one story (map + device), not four deliverables.
- **Sponsors:** Esri Canada (GIS — heavily mentored) + Alectra GRE&T Centre (Peel + GGH, NOT Toronto). Alectra mentors: **Keith Hemingway** (Emerging Tech), **Daniel Carr** (Grid Edge). Alectra runs **GridExchange**, a transactive-energy marketplace = Tide's VPP/aggregated-flexibility business. Pre-read: alectra.com/innovation-projects.

## Standing user rules (this session)
- **Every decision must be backed by data + deep research** (not vibes).
- **Optimize for real-world impact, not demo polish.**

## Verbatim Theme 3 problem statements (recovered from session 16154069; NOT otherwise in the repo)
**PS1:** "Low-income households spend a higher percentage of income on energy, and many incentives are targeted at property owners rather than renters. Because renters pay the utility bills but do not control building upgrades, this misalignment can limit adoption of energy-efficiency measures. Utilities need simple tools to visualize where these gaps exist and identify communities facing higher energy burdens."
- *Solutions:* **Energy Burden Index** ("Build an index combining income, building age, renter/owner mix, and estimated consumption."); **Energy Poverty Map** ("Design a map that highlights communities facing high energy costs or high renter populations where incentives may have lower uptake."); **Program Recommendation Tool** (visualize where targeted outreach/rebates/retrofits have greatest impact).

**PS2 (climate vulnerability / cooling spaces):** Multi-Hazard Vulnerability Map; Resilience Investment Tool; Preparedness App Mockup. *(Does NOT fit Tide — heat/flood, not electricity cost.)*

**PS3 (pollution near marginalized communities):** Pollution Exposure Map; Equity Planning Tool; Environmental Justice Dashboard. *(The "446 Brampton incinerator" idea lives here — higher originality ceiling but from-scratch + adversarial; rejected for the short clock.)*

## Reading list for the new session
1. This handoff.
2. `CLAUDE.md` (hackathon doctrine: scope lock, uniqueness, project agents).
3. `docs/post-kickoff-ideas.md` (9-PS catalog + the strategic fork).
4. `docs/energy-domain.md` (the two 2026-05-24 subsections: data confirmation + impact sizing).
5. `tide/spike/VIABILITY.md` + `tide/tide-web/` (built assets).
6. `Synergy-v2.0 — Hackathon Brain/20-ideas/seed-d-tide.md` (the Tide seed).
