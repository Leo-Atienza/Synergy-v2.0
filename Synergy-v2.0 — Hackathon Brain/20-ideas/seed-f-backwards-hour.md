---
title: Seed F — Backwards Hour
type: idea
status: draft
updated: 2026-05-21
sources: ["[[../README]]", "[[seed-ideas]]", "[[../../docs/energy-domain]]", "[[../../docs/themes]]", "[[../../docs/uniqueness-principles]]"]
---

# Seed F — Backwards Hour (energy saving as a wellness ritual)

> **Round-2 seed — the wildcard.** Surfaced 2026-05-21, same session as [[seed-d-tide]] + [[seed-e-rooftop-roll-call]]. Highest creative variance: it could be the most memorable thing in the room or read as a vibe. **Pure context — not a commitment.**

## Theme alignment

Theme 2 (behavioural demand response at peak) + Theme 3 (accessible to anyone, no hardware, no EV, no homeownership — the most inclusive of the round-2 seeds).

## The wedge

Most energy-savings apps fail because they ask people to *think about energy*. People don't want to. They want to put their phone down and read. **So reframe the save as a wellness ritual that happens to be grid-aware.**

Once a day, at the hour Ontario's grid is dirtiest/most-strained (computed from the IESO forecast — usually the weekday 4–9 PM on-peak block), Backwards Hour sends **one** notification: *"Your Backwards Hour starts in 5 minutes. Unplug 3 things. Read something. We'll count what you saved the grid."* The user opts in; a streak builds; a per-user carbon ledger accrues. Aggregated across users it's real peak-shaving demand response — sold as a phone-detox habit, not an energy chore.

Narrow shippable thing: the daily notification + a streak + a saved-kWh ledger for one user. Vision in pitch: behavioural DR that spreads because it feels like self-care, not sacrifice.

## 10-second demo moment

> **A phone on screen, 5:47 PM.** Notification fires: *"Backwards Hour. Unplug. Breathe."* The home illustration dims room by room; a counter rises: **"Today: −1.4 kWh, −0.06 kg CO₂. Streak: 11 days."** Cut to the aggregate: **"10,000 Torontonians doing this at peak = 14 MWh/day — one Portlands peaker stays cold."**

Format-Inversion (a wellness ritual, not a dashboard — §2.5) + Audience-Inversion (target = wellness-curious, not energy nerds — §2.4) + Embodied-Number (a peaker staying cold — §2.10).

## Data sources

- **IESO Adequacy / Peak Tracker + Variable Generation Forecast** — pick tomorrow's worst hour (highest demand or highest carbon intensity).
- **IESO Gen Output by Fuel Hourly** + ECCC NIR factors — carbon ledger.
- **OEB ULO/TOU schedule** — bonus: align Backwards Hour with the 39.1¢ on-peak block so users save money too.
- No hardware, no smart meter required — savings are modelled from a typical household peak draw (transparent assumptions).

## Why it could win (4-axis rubric)

- **Technical (25%)** — weakest of the round-2 seeds technically (notifications + a ledger + a forecast pick). Lean on the forecast logic + the aggregate model to show depth.
- **Design (25%)** — strongest. The whole thing IS the design: calm typography, the dimming-home animation, the streak. A genuinely different aesthetic from every dashboard in the room.
- **Originality (25%)** — high. No energy hackathon ships a *wellness ritual*. Unconfusable with any other project.
- **Impact (25%)** — behavioural DR is real but soft; savings depend on compliance (can't be proven mid-demo). Frame honestly via the aggregate model, not per-user certainty.

## Risks

- **Habit apps die / compliance unprovable** — the core weakness. Mitigation: present the aggregate-model math + cite behavioural-DR field studies; don't claim verified savings you can't show.
- **"Is this even an energy project?"** — frame tightly to the peak-hour grid logic so judges see the demand-response spine under the wellness skin.
- **Could read as twee.** Mitigation: anchor every soft moment to a hard number (the peaker staying cold). If it still reads soft → it's the fallback, not the lead seed.

## Stack flexibility

- **Web push or PWA:** Next.js + service-worker notifications + a tiny ledger (localStorage or Supabase). No app-store needed (avoids the [[README]] "requires a download" anti-pattern).
- The forecast-pick + carbon-model is a single serverless cron.

## Differentiation note

The aesthetic is the moat — this is the one round-2 seed where the **color palette + typography + motion** carry the project. If picked, the [[../../docs/uniqueness-principles]] visual directives (calm, non-shadcn, one weird serif) matter more here than anywhere.

## Ontario → elsewhere

Region-agnostic by construction — swap the IESO forecast feed for any grid's peak/carbon signal. The ritual is universal.

## Cross-references

- [[seed-d-tide]] + [[seed-e-rooftop-roll-call]] — round-2 siblings
- [[../../docs/uniqueness-principles]] — Format-Inversion + Audience-Inversion archetypes
- [[../README]] — scoring rubric (note the "requires user input to demo" anti-pattern — Backwards Hour skirts it via a pre-loaded streak)

## Pre-commitment notes for `/hackathon:ideate`

- Pick only if the challenge set rewards **behaviour change / accessibility / community participation** over technical depth.
- Strong **fallback/companion** to Tide: same peak-hour logic, opposite end of the hardware spectrum (Tide = automate the shift; Backwards Hour = ritualize it). Could even be one product's two modes.
- If technical-depth weight is high in the rubric → demote to fallback; lead with Tide or Roll Call.
