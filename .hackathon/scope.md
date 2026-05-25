# Scope Lock — Tide

**Status:** LOCKED at 2026-05-25T12:30:00-04:00
**Amendments:** see `scope-log.md`
**Challenge:** Seneca Energy Hackathon 2026 · Theme 3 · Problem Statement 1 (energy burden — "incentives target property owners, not renters")
**Deadline:** 2026-05-26T23:59:00-04:00 (qualifier video) · **Deliverable:** a 5-min YouTube video demoing the prototype, NOT a deployed app

---

## Pattern-break archetype

> One of the 11 archetypes from [`docs/uniqueness-principles.md`](../docs/uniqueness-principles.md) §2. Validated by `demo-moment-critic` 2026-05-25 (verdict: BORDERLINE → LANDS once the two seams below are closed).

**Locked archetype:** **Tension-Reveal**

**Why this one:** The thesis is genuinely counterintuitive and nobody else in a ~30-team field will surface it — Ontario's *cheapest* electricity rate (ULO, 3.9¢/kWh overnight) is, for a low-income renter, either a **locked door** or a **trap**. Sub-metered apartment tenants can't choose ULO at all — the landlord picks the building's plan (OEB rule, verbatim; see [`docs/energy-domain.md`](../docs/energy-domain.md) "ULO adopter demographics… 2026-05-25"). And renters who *can* choose it usually pay *more*, because capturing 3.9¢ means using power at 3 a.m. — which an inflexible low-income household can't. The rate built to reward flexibility quietly penalizes those who can't flex. The **map** reveals *where* in Peel that gap is worst; the **device** is the automated fix that springs the trap — the "targeted policy ensuring equitable access" the regressive-pricing literature (arXiv 2509.01499) explicitly calls for. The reveal IS the project.

**Optional second archetype (reinforcing):** **Hardware-Surprise** — a real $15 plug fires a physical desk lamp at 3.9¢ on camera, in a field of pure-software projects. It *discharges* the tension (the trap, sprung) rather than competing with it; the caption keeps the lamp reading as argument, not gadget. **NOTE — hardware not yet in hand (being bought).** This is the hero *upgrade*, not the floor: the demo must land on the screen alone (see Fallback). If the plug arrives and verifies in time, the lamp becomes the hero shot.

---

## Demo moment — literal video script

```
0:00 — Camera shows: a laptop running Tide. The panel reads "11:00 · $0.391/kWh · ON-PEAK · WAIT" in red.
         Beside it, a choropleth of Peel; the worst-burden FSA — Malton (Mississauga L4X) — glows deepest red.
         [If hardware landed: a dark desk lamp sits next to the laptop.]
0:02 — User does: drags the hour scrubber from 6pm toward 3am (one continuous motion).
0:05 — Screen reacts: at the overnight window the panel flips GREEN "03:00 · $0.039/kWh · GO"
         and the device tile flips to ON.  [If hardware: the physical lamp clicks on.]
0:08 — End frame: caption "3.9¢ — Ontario's cheapest rate is a 3 a.m. trap. Tide springs it for you."
         The reddest FSA (Malton / L4X) stays labeled on the map.
```

The "describe it 2 hours later" test (per critic): *"the one where the rate flips to 3.9¢ at 3 a.m. and the lamp turns on."* Build this FIRST. If it fails at judging time, the whole project fails.

**Two seams closed (critic-mandated):**
1. **No EV contradiction on camera.** The current screen says "EV charger plugged in at 6pm" — the exact framing we cut. MUST-HAVE #2 rewrites it to a renter load before any recording. The artifact must match the pitch.
2. **The FSA click disambiguates the two renters.** Clicking the worst FSA — Malton (L4X) — must state *which* fix applies ("largely sub-metered → policy fix: the landlord chooses the rate") vs an individually-metered FSA like Brampton L6V ("Tide-reachable"). This converts the sub-metered-vs-individually-metered seam from a vulnerability into the thesis: the map tells utilities which neighbourhoods the device reaches and which need the policy lever.

---

## Fallback if the weird version doesn't land

**Baseline (since hardware isn't yet in hand):** the **screen-only WAIT→GO reveal** — the on-screen device tile flipping to ON at 3.9¢ is the moment, no physical lamp required. This is the floor the demo is built on; the lamp is the upgrade.

**If the live IESO grid read fails on camera:** use the committed sample-day data ([`lib/sample-day.ts`](../tide/tide-web/lib/sample-day.ts)) — same reveal, labelled "demo fixture, Ontario summer weekday."

**What we do NOT fall back to:** a static dashboard screenshot; an "AI-powered energy assistant" framing; the EV-charging savings story. Degrade the *liveness*, never the thesis.

---

## What was cut to support the pattern-break

- **The EV-charging savings headline (~$1,760/yr)** — pulls toward the affluent-homeowner story and is dishonest for renters. Cut to keep the renter-equity reveal sharp. **This is not just a pitch edit — it requires rewriting the on-screen copy** ([`tide-screen.tsx`](../tide/tide-web/app/tide-screen.tsx) foot text + tally) from "EV charger plugged in at 6pm" to a renter-shiftable load. Named explicitly as MUST-HAVE #2 so it cannot slip under the crunch.
- **DA-level (~1,600-polygon) map** — pulls toward a generic GIS-tiling exercise; cut to keep ~40 FSA polygons and one clean reveal. (FSA is also the only level with real *measured* IESO consumption.)
- **The VPP / grid-aggregation vision** — pulls toward an enterprise-SaaS pitch; demoted to a single closing "where this goes / Alectra GridExchange" line.

---

## MUST-HAVES (max 5, ranked by demo criticality)

| # | Feature | Rubric axis | Pattern-break role | Est. hours | Status |
|---|---|---|---|---|---|
| 1 | **Energy Poverty Map of Peel (FSA)** — choropleth of ~40 FSAs by burden score (renter % × energy burden × electric-heat, from StatCan 2021 census) + click→FSA detail panel with the **intervention-routing note** (Tide-reachable vs policy vs retrofit). IESO measured FSA consumption calibrates the $ figure. | Impact / Innovation / Technical | supports | 10 | [ ] |
| 2 | **Truth the demo screen (EV → renter)** — rewrite `tide-screen.tsx` foot copy + tally headline to a renter load (window-AC pre-cool), honest ~$30–130/yr range, not the EV number. Optimizer logic unchanged; only the load label + dollar figure. | Impact / Presentation | supports | 0.5 | [ ] |
| 3 | **Device demo** — screen WAIT→GO baseline (engine already built + tested) **+** buy Shelly Plug US Gen4, wire local JSON-RPC, pre-record a clean real-lamp-fire take as the hero upgrade. | Technical / Presentation | supports | 3 | [ ] |
| 4 | **5-min qualifier video** — arc: trap → map → fix (lamp/tile) → honesty (two-renter split) → close (Alectra GridExchange). Includes one explicit **collaboration line** (who built what) to earn the Collaboration axis. | Presentation / Collaboration | supports | 4 | [ ] |
| 5 | **Real-data provenance** — footer "StatCan 2021 · IESO measured hourly · OEB ULO · live Ontario grid" + a 2-line methods note. The anti-"AI slop" defense. | Technical / Impact | supports | 1.5 | [ ] |

Total estimated hours: **19** (single-track)
Event duration: ~24h effective (now → May 26 23:59, minus sleep/setup)
Buffer: ~5h solo (~20%) — **below the 30% ideal.** Mitigation: **TEAM mode** splits this across 3 parallel tracks — **map** (#1), **device** (#2+#3), **video+narrative** (#4+#5) — → ~8–10h critical-path wall-clock, comfortably inside 1.5 days. The map (#1) is the swing item; if it blows the 30-min×N rule, fall back to a static-colored FSA map with real hardcoded numbers.

---

## NICE-TO-HAVES (only if buffer remains, only if they reinforce the pattern-break)

- Computed **"Tide-addressable %"** per FSA (individually-metered renters w/ AC) vs "needs-policy %" (sub-metered) vs "needs-retrofit %" (baseboard / no-AC) — hardens the disambiguation with real numbers.
- **Animated peak-shift** across the map (reuse the `tide-screen` scrub/`windowHours` pattern at FSA scale).
- **Esri/ArcGIS map swap** (sponsor points) — only if the lightweight GeoJSON map ships early.

---

## EXPLICITLY CUT (resist the urge)

- **DA-level granularity** — reason: ~1,600 polygons need tiling/perf work + dilute the one reveal; FSA is the only level with real measured IESO consumption anyway.
- **VPP / grid-aggregation feature** — reason: grid-meaningful scale = 50–100k loads; a thesis, not a demo. Closing line only.
- **EV savings number** — reason: dishonest for the renter population PS1 cares about; gets punctured by a domain-literate Alectra judge.
- **User accounts / persistence / API routes** — reason: a 5-min video demo needs none of it.
- **Any city beyond Peel** — reason: Peel = Alectra territory = sponsor-aligned scope.

---

## 60-second pitch draft (written BEFORE code)

**Hook (5s):** "Ontario's cheapest electricity costs 3.9 cents. The most expensive costs 39 — ten times more. Guess which one a low-income renter is stuck paying."

**Problem (10s):** "Ontario built the 3.9¢ overnight rate to reward flexibility. But a low-income renter usually can't flex — power at 3 a.m. means being awake at 3 a.m. — so most who switch pay *more*. And in sub-metered buildings, renters can't even choose it: the landlord picks the plan." *(OEB rule.)*

**Solution (10s):** "Tide automates the shift for renters who *can* choose the rate — a $15 plug that runs the AC or laundry at 3.9¢, no behaviour change. Plus a map that tells utilities which Peel neighbourhoods Tide can reach, and which need the policy fix instead."

**Live demo (25s):** the demo-moment script, expanded — show the 39¢ WAIT, scrub to 3 a.m., the panel flips to 3.9¢ GO and the lamp/tile fires; then click the reddest FSA — Malton (L4X) — and read its real numbers + which intervention it needs.

**Tech highlight (5s):** "Every number is real — StatCan 2021 census, IESO's measured hourly consumption per postal area, and the live Ontario grid. No synthetic data."

**Ask / close (5s):** "Alectra runs a flexibility marketplace called GridExchange. Tide is the renter-side device that feeds it."

---

## Amendment protocol

- Cannot silently add a feature during `/hackathon:build`.
- To amend: run `/hackathon:scope --amend`, which FORCES a 1-in-1-out trade.
- Amendments must preserve the locked **Tension-Reveal** archetype OR explicitly re-lock a new one (then `demo-moment-critic` re-validates from scratch).
- Every amendment appends to `.hackathon/scope-log.md` with timestamp + reason.
- `/hackathon:retro` reviews the amendment log for learnings.
