---
title: Handoff — Build resume (Tide + Energy Poverty Map, Theme 3 · PS1)
type: handoff
status: confirmed
updated: 2026-05-25
supersedes_context_in: "2026-05-25-handoff-tide-decision.md (that doc says scope NOT locked — STALE; scope is now LOCKED)"
---

# Handoff — 2026-05-25 — Build resume

> Orientation session (NO code changes). Absorbed the intervening sessions' decisions, confirmed scope is locked, oriented on the codebase, and laid out the build. Next session: commit pending artifacts (if not already), then build the 5 MUST-HAVEs against the **May 26 23:59** deadline.

## Resume in one line
Read `.hackathon/scope.md` (the lock) + `docs/energy-domain.md` (honest numbers + map data) + `tide/tide-web/` (the engine), then build in order: **MH#2 (truth the screen) → MH#1 (the map) → MH#5 (provenance) → MH#4/#3 (video/hardware, human-led).**

## Current ground truth
- **Scope LOCKED** — `.hackathon/scope.md`, `Status: LOCKED`. (The earlier `2026-05-25-handoff-tide-decision.md` says "not yet locked" — it predates the lock; **trust scope.md**.)
- **Build IN PROGRESS (uncommitted, UNVERIFIED)** — parallel sessions have started MH#1 (the map). Uncommitted on disk: `tide/tide-web/app/map/`, `tide/tide-web/lib/peel-data.ts`, `tide/tide-web/lib/peel-fsa-raw.json`, `tide/tide-web/public/`, modified `app/page.tsx` / `app/tide-screen.tsx` / `app/globals.css`, new deps in `package.json`/`package-lock.json`, and `.hackathon/video-script.md` + a filled `.hackathon/pre-mortem.md`. **Not reviewed here; `next build` not verified.** Review/verify before trusting or committing this code.
- **Deadline: 2026-05-26 23:59** (qualifier video, ~1 day). Deliverable = a 5–6 min YouTube video, not a deployed app.

## The locked decision
- **Challenge:** Theme 3 · PS1 (energy burden — "incentives target owners, not renters").
- **Product:** **Tide + an Energy Poverty Map of Peel**, ONE use case, **map-led** (device = the fix).
- **Archetype:** **Tension-Reveal** — Ontario's *cheapest* rate (ULO 3.9¢) is a 3 a.m. **trap / locked door** for low-income renters; the map shows where the gap is worst; the plug springs the trap.
- **Honest numbers (USE THESE — never the EV figure):**
  - ULO **3.9¢ overnight / 39.1¢ on-peak / 9.8¢ off-peak** (Nov 2025–Oct 2026).
  - Renter savings **≈ $30–130/yr** (window AC ~$40, laundry ~$33). **The ~$1,760/yr EV number is CUT — dishonest for renters.**
  - **Load-bearing, judge-proof:** sub-metered MURB renters **cannot choose ULO** — the landlord picks the building's plan (OEB rule). That *is* PS1.
  - ~1.1M Ontario households in energy poverty; renter rate doubles 4.3%→8.3% with hidden-in-rent costs; **12,073 on ULO** (Mar 2024, <0.3%); ~48% of renters have no AC → map routes them to retrofit/policy, not the plug.
  - Carbon: lead with cost (guaranteed); carbon conditional (marginal EF ~150g vs avg ~50g), surfaced live from IESO.

## The 5 MUST-HAVEs (from scope.md)
| # | Feature | Est | Owner | Notes |
|---|---|---|---|---|
| 2 | **Truth the demo screen (EV→renter)** | 0.5h | agent | **DO FIRST, critic-mandated.** Edit `tide/tide-web/app/page.tsx` `LOAD` (EV → window-AC pre-cool) + `tide-screen.tsx` foot copy (~line 100-104) + tally. Optimizer unchanged. **No "EV" on camera.** |
| 1 | **Energy Poverty Map of Peel (FSA)** | 10h | agent | Swing item / only real new work. Choropleth ~40 FSAs by burden score + click→detail with **intervention routing** (Tide-reachable / policy / retrofit). |
| 3 | **Device demo** | 3h | human+agent | Screen WAIT→GO baseline built. Buy **Shelly Plug US Gen4** (local JSON-RPC), pre-record lamp fire. |
| 4 | **5-min video** | 4h | human | trap → map → fix → honesty (two-renter split) → close (Alectra GridExchange). Include a collaboration line. |
| 5 | **Provenance footer** | 1.5h | agent | "StatCan 2021 · IESO measured hourly · OEB ULO · live grid" + 2-line methods. Anti-slop defense. |

**Two critic seams to close:** (1) no EV on screen; (2) FSA click disambiguates sub-metered (policy fix) vs individually-metered (Tide-reachable).

## Codebase (`tide/tide-web/`)
Next.js 16 / React 19. `lib/` = pure engine (`optimizer`, `rates`, `carbon`, `savings`, `grid`, `sample-day`, `types`). `app/page.tsx` (server, hardcodes EV `LOAD`) → `app/tide-screen.tsx` (client WAIT/GO UI + scrubber). `next build` green. **No map / API routes / persistence yet.** Reuse the `tide-screen` scrub/`windowHours` pattern for the map's animated peak-shift.

## Map data (verified in energy-domain.md → "Energy Poverty Map — data confirmation")
- **GO:** StatCan 2021 Census Profile (98-401-X) **FSA file** (income, tenure, heating fuel, building age); StatCan 2021 **FSA boundary file** (reproject NAD83→WGS84 → GeoJSON); **IESO Hourly Consumption by FSA** (real measured kWh; only level with measured consumption).
- **NO-GO:** CUSP Explorer (cert expired + members-only) → compute burden score ourselves.
- **Build on FSA** (~40 Peel polygons: L4*, L5*, L6*, L7A), not DA (~1,600). Burden score = renter % × energy burden × electric-heat %.
- Lightweight map first (react-simple-maps / GeoJSON); Esri/ArcGIS swap only if slack (sponsor points). **30-min-stuck fallback:** static-colored FSA map with real hardcoded numbers.

## Recommended next-session order
1. Commit + push pending decision artifacts (if not already done in the resume session).
2. **MH#2** truth the screen → verify `next build` green.
3. **MH#1** the map (pull 3 datasets → burden score → choropleth + detail + intervention routing).
4. **MH#5** provenance footer.
5. **MH#4 / MH#3** video + hardware (human-led).
6. Housekeeping: set `event.yaml` `stack_preset: data-viz`; address team `size: 0` (Collaboration axis); optional 2nd data pull (heating-fuel × tenure for Peel FSAs).

## Risks / flags
- ~1 day left; solo buffer below the 30% target → **team mode** splits map / device / video.
- Team size 0 → the Collaboration rubric axis is a real gap (name who-built-what in the video).
- Hardware (Shelly plug) not yet in hand → **demo must land on the screen alone**; lamp is the upgrade.
- The map data pull is the single biggest build risk.

## What this session did / did NOT do
- **Did:** wrote this handoff; committed the **decision/doc artifacts only** (scope, demo-moment, video-script, pre-mortem, event.yaml, energy-domain, seeds g/h, vault logs).
- **Did NOT:** touch, review, verify, or commit the in-progress **map build** (`app/map/`, `lib/peel-data.ts`, `lib/peel-fsa-raw.json`, modified screen/css, new deps) — that came from parallel sessions and is left uncommitted on disk for review. No `next build` was run.
- **⚠ Multi-session churn:** the working tree changed under this session more than once (the map code appeared mid-session). Re-run `git status` before trusting any snapshot.
