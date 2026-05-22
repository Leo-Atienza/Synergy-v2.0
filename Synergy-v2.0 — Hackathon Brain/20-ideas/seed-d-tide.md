---
title: Seed D — Tide
type: idea
status: draft
updated: 2026-05-21
sources: ["[[../README]]", "[[seed-ideas]]", "[[../../docs/energy-domain]]", "[[../../docs/themes]]", "[[../../docs/uniqueness-principles]]"]
---

# Seed D — Tide (grid-aware load shifting)

> **Round-2 seed.** Surfaced 2026-05-21 in a creative-ideation session, NOT from the original 2026-05-15 dossier. Origin: user pushed back that the first three round-2 concepts (WattVoice, Energy Inheritance, Energy Receipt) only *communicate about* energy — they don't *move kWh*. Tide is the answer to "what actually saves or produces energy." **Pure context — not a commitment.** Final pick at `/hackathon:ideate` (target lock 2026-05-22) after the May 24 kickoff reveals challenge sets.

> **✅ VIABILITY: PROVEN (2026-05-21).** Runnable spike at [`prototypes/tide/`](../../prototypes/tide/) — see [`prototypes/tide/VIABILITY.md`](../../prototypes/tide/VIABILITY.md). Verified end-to-end on Node 22: live IESO feed parsed **7/7 fuels** (70.6 gCO₂/kWh real-time), optimizer shifts an EV charge 18:00→23:00 saving **$1.86/night (85% off)**, **7/7 unit tests pass**, strict typecheck clean, ~520 LOC. Only un-de-risked piece: pairing a *physical* Kasa plug on venue Wi-Fi (mitigation: local-LAN control + screen fallback). Open framing risk: lead with cost, qualify carbon (winter overnight gas shrinks the carbon delta to ~6%; cost delta stays 10×).

> **🔬 2026-05-22 verification update** (full detail: [`docs/research-update-2026-05-22.md`](../../docs/research-update-2026-05-22.md)). Three things changed after a fresh prior-art + rate + hardware sweep:
> 1. **Rates verified CURRENT.** OEB now sets RPP prices *annually*; ULO 3.9¢/39.1¢ is locked through **Oct 31, 2026** (the May 1 change was TOU-timing + tier-threshold only — ULO untouched). The 10× wedge and all demo-script rate references are accurate. Fix the prototype note that says "refresh May 1 / Nov 1" → it's **annual (Nov 1)**.
> 2. **Swap the demo plug Kasa → Shelly Plug US Gen4.** TP-Link's KLAP firmware now demands cloud creds even for "local" control (open 2025–26 issues). Shelly Gen2+ has a documented **local** JSON-RPC API, no cloud: `GET /rpc/Switch.Set?id=0&on=true`. Bring a travel router + static-IP reservation for the venue.
> 3. **Originality is narrower than this seed claims — and that's fine.** Optiwatt already does Ontario ULO (EV/thermostat only); the Home Assistant DIY stack can assemble the cost *and* carbon halves today (`ontario_energy_board` + `co2signal` + cheapest-hours blueprints). A GitHub search for IESO/ULO + smart-plug load-shifting returned **zero** packaged repos. Defensible novelty = the **fusion** (cost+carbon, one decision, generic load, Ontario ULO, zero-config, verifiable receipt), not grid-aware control itself. The Originality bullet + Differentiation note below now carry the **concede-then-win** framing — don't claim "nobody does this."

## The one-line distinction this seed exists to honor

Almost every one of the original 15 candidates **talks about** energy (dashboards, maps, scores, APIs, calculators). Tide is in the small set that **moves** energy: it shifts a real shiftable load off-peak and books verifiable $ + carbon savings. That's the wedge against a judging room full of dashboards.

## Theme alignment

Theme 2 (Smart Grid, Resilience & Electrification) primary — load-shifting IS demand-side grid management. Theme 1 (Clean Energy Integration) secondary — overnight shifting raises the renewable/nuclear share of what you consume. Theme 3 thread available — the renter/low-income lens (ULO punishes households that *can't* shift; Tide is the automation that lets a shift-worker capture it).

## The wedge

Ontario's **Ultra-Low Overnight (ULO)** price plan creates a **~10× price signal**: 3.9¢/kWh overnight (11 PM–7 AM) vs **39.1¢/kWh on-peak** (weekdays 4–9 PM) — OEB rates, Nov 2025–Apr 2026. ULO is a brilliant decarbonization lever (overnight = nuclear + hydro + wind, peakers off) **but it punishes you brutally** if you don't actually shift: that 39.1¢ on-peak is nearly 2× the standard TOU on-peak (20.3¢). Most households that switch to ULO never reliably change their behaviour, so they eat the on-peak penalty and the plan backfires.

**Tide removes the behaviour-change friction.** You buy any cheap Wi-Fi smart plug ($15–25: TP-Link Kasa, Sonoff, Shelly). You run a shiftable load through it — EV charger (L1), dishwasher, dryer, water heater, pool pump, dehumidifier, electric kettle bank. Tide:

1. Pulls IESO real-time fuel mix + 24h variable-generation forecast + your TOU/ULO schedule.
2. Knows your load's run-duration (you tell it once: "dishwasher ≈ 2 h") and your patience window ("done by 7 AM").
3. Computes the cleanest **and** cheapest window that fits: `argmin over feasible start times of (price + λ·carbonIntensity)`.
4. **Actually executes the switch** — turns the plug on/off. Not a suggestion. The shift happens.
5. Tallies cumulative saved $, saved kWh-equivalent-carbon, kg CO₂ avoided.

Narrow shippable thing: pair one plug, schedule one load, show the running savings tally. Vision in pitch: a $15 open-source upgrade that makes ULO finally pay off for every Ontario household — no utility enrollment, no proprietary thermostat, no app-store lock-in.

## 10-second demo moment

> **A real smart plug + a desk lamp sit on the table** (lamp = stand-in for "dishwasher"). Screen shows live IESO intensity + the clock: **1:12 PM, grid 31 g/kWh but the hour costs 15.7¢ (mid-peak).** Tide's verdict fills the screen: **"WAIT — cheaper + cleaner in 9 h 48 m."** Tap **"fast-forward demo."** The clock spins to **11:00 PM**, ULO clicks in at **3.9¢**, **the lamp turns on in front of the judges**, and a counter ticks: **"This run: −$0.27, −0.18 kg CO₂. Lifetime: −$387, −312 kg CO₂ (≈ 14 trees)."**

Physical motion (lamp) + live computation (IESO decision) + an embodied number (trees), in one shot. No typing-user dependency once fast-forward is tapped. Maps to Hardware-Surprise (§2.3) + Live-Computation (§2.7) + Embodied-Number (§2.10) in [[../../docs/uniqueness-principles]].

## Data sources

- **IESO Real-time Totals** — `/RealtimeTotals/` XML, 5-min, current-hour demand/supply.
- **IESO Generator Output by Fuel — Hourly** — `/GenOutputbyFuelHourly/` XML → per-fuel mix → carbon intensity via ECCC NIR factors.
- **IESO Variable Generation Forecast** — `/VGForecastSummary/` XML, 48 h solar+wind → "will tomorrow's overnight be windy/clean?"
- **OEB RPP rate schedule** — TOU + ULO + Tiered cents/kWh by period (Nov 2025–Apr 2026 values hard-coded; refresh each RPP cycle May 1 / Nov 1).
- **Smart-plug control** — TP-Link Kasa (python-kasa, local LAN, no cloud), Sonoff (eWeLink / Tasmota HTTP), Shelly (local HTTP API). Pick Kasa for the demo: local control, no OAuth, fast.
- **ECCC NIR fuel-mix emissions factors** — gCO₂/kWh weights per fuel.
- Optional **GridStatus** Python SDK to skip IESO XML parsing.

## Why it could win (mapped to default 4-axis rubric)

- **Technical (25%)** — real-time data pipeline + carbon math + an actual hardware-control loop that closes (read grid → decide → actuate plug → verify state) + an optimizer. The closing of the loop (software acting on the physical world) is more than most dashboards show.
- **Design (25%)** — one screen, one verb ("WAIT" / "GO NOW"), one running number. No nav, no chrome. Tufte-clean. The plug + lamp is the design.
- **Originality (25%)** — *concede-then-win* (verified prior-art, 2026-05-22). Be honest about the landscape so a judge who knows the space hears credibility, not a false claim: **Optiwatt already optimizes Ontario ULO** (GTHA pilot, "up to 70%" EV savings) — but EVs/thermostats only, closed-source. A **Home Assistant** power-user can already assemble the pieces (`ontario_energy_board` ULO sensor + Electricity Maps `co2signal` carbon + a "cheapest-hours" blueprint + native plug control). OhmConnect/Renew Home actuate generic plugs but are CA/TX-only and need a utility account; Peak Perks needs a specific thermostat. So Tide did **not** invent grid-aware control. What nobody ships is the **fusion**: cost **and** carbon in *one* decision, for Ontario ULO, on a *generic* load, **zero-config (no Home Assistant)**, open-source, ending in a **verifiable $/CO₂ receipt** the DIY stack never produces. (A GitHub search for IESO/ULO + smart-plug load-shifting returns zero packaged repos.) Win on packaging + the dual-signal optimizer + the receipt — not on novelty of the relay.
- **Impact (25%)** — Monday-morning use: a household on ULO with an EV saves **~$17.60 per full ~50 kWh charge** (39.1¢ on-peak → 3.9¢ overnight) and dodges peaker dispatch. Verifiable, not a 2050 gigaton claim. Frame for the OEB (their own ULO plan, under-adopted) and LDCs (peak shaving).

## Risks

- **Plug pairing fails live.** Mitigation: pre-pair before the demo; the "fast-forward" path runs off cached IESO data and a known-good plug, so it survives venue Wi-Fi. Always have the screen-only fallback (no physical lamp) ready.
- **"It's just an if-statement + a plug."** Mitigation: show the optimizer + the carbon-vs-cost tradeoff (λ weighting) + the 48 h forecast lookahead. Depth lives in the *decision*, not the relay.
- **Carbon-savings honesty.** Shifting consumption doesn't reduce total kWh — it moves *when*. Be precise: Tide saves **money always**, and **carbon when the shifted-from hour was peaker-heavy** (true for Ontario weekday 4–9 PM). Don't overclaim net-energy reduction; claim cost + marginal-carbon + peak relief.
- **Real-time data dependency** (an explicit anti-pattern in [[README]]). Mitigation: replay-mode + cached forecasts make the demo deterministic; live data is a bonus, not a crutch.
- **Rates change.** OEB resets RPP May 1 / Nov 1. Hard-code current period, label it, leave a one-line refresh path.

## Stack flexibility

- **Web-first:** Next.js + Vercel; a serverless cron polls IESO + decides; the plug is controlled from a tiny local agent (python-kasa) the judge can see, OR a Vercel function hitting a cloud-plug API.
- **Python-first (recommended for the demo):** one `asyncio` loop — fetch IESO, decide, `python-kasa` actuate, write a SQLite ledger; a thin Next.js or even static page renders the verb + tally. Simplest end-to-end, ~200 LOC.
- **Hybrid:** Python control agent + Next.js dashboard reading the ledger.

Keep the optimizer pure and testable; everything else is glue.

## Differentiation note

The hook is the **10× number** and the **closed loop**. Lead the pitch with: *"Ontario will charge you 39.1 cents at 6 PM and 3.9 cents at midnight for the exact same kilowatt-hour. Tide makes sure you only ever pay the 3.9."* Then the lamp turns on at midnight on stage. Pre-commit to open source + a 200-line "add your region" README so the Public-Good frame (§2.9) snaps on as a bonus.

On originality, run the **concede-then-win** move (see the Originality bullet): *"Every piece of this exists in Home Assistant — but you'd install three integrations, reconcile a ULO price sensor against a carbon sensor yourself, and hand-write the automation. Nobody fused cost **and** carbon for Ontario ULO into one decision, and nobody ships it as a 5-minute, no-Home-Assistant install with a receipt."* Conceding the building blocks disarms the "HA already does this" rebuttal; then you win on the fusion + the receipt. **Add the under-adoption hook:** only ~12,000 Ontario households were on ULO as of early 2024 — the strongest overnight discount in North America, used by almost no one, because without automation the 39.1¢ penalty makes it a gamble Tide removes. And on behaviour: Brattle found Ontarians' response to price signals *fades over time* — *willpower fades; automation doesn't.*

## Ontario → elsewhere (scaling path)

The Ontario-specific surface is exactly two files: the **RPP rate schedule** and the **IESO data adapter**. Everything else — the optimizer, the plug drivers, the ledger, the one-verb UI — is region-agnostic. Swap those two and Tide runs on any hourly-priced grid: Québec, BC, NYISO, CAISO, UK (Octopus Agile), Australia (AEMO). The product is the scaffold; the region is config. Ship Ontario at the hackathon, leave empty PRs inviting QC/BC/CA.

## Cross-references

- [[../../docs/energy-domain]] — IESO API surface, ULO/ICI definitions, emissions factors
- [[../../docs/uniqueness-principles]] — Hardware-Surprise / Live-Computation / Embodied-Number archetypes
- [[seed-ideas]] — master candidate list (Tide = #16)
- [[seed-e-rooftop-roll-call]] — sibling round-2 seed (the *produce* play, vs Tide's *save* play)
- [[../README]] — idea-scoring rubric

## Comparison with the top-3 dossier seeds

| | Seed A (carbon API) | Seed B (EnviroScreen) | Seed C (Outage replay) | **Seed D (Tide)** |
|---|---|---|---|---|
| Theme | 1+2 | 3 | 2+3 | **2 (+1, +3 thread)** |
| Moves kWh? | No (informs) | No (informs) | No (informs) | **Yes (shifts load)** |
| Demo type | Widget + docs | Interactive map | Live time-replay | **Hardware + live computation** |
| Hardware on stage | No | No | No | **Yes (plug + lamp)** |
| Verifiable $ saved | No | No | No | **Yes (~$17.60/EV charge)** |
| Data complexity | Medium | High | Medium | **Low–medium** |
| LOC estimate | Medium | High | Medium | **~200** |
| Pattern-break | Public-Good | Tension+Local | Time-Reveal | **Hardware-Surprise + Live-Computation** |

## Pre-commitment notes for `/hackathon:ideate`

- If the May 24 set rewards **demand response / electrification / EV** → Tide is the strongest of all seeds.
- If a **sponsor track is IESO, an LDC (Toronto Hydro / Hydro One / Alectra), or Save-on-Energy** → direct hit (peak shaving is their language).
- If the venue is **fully virtual** (no in-person finale) → demote the physical lamp to a cloud-plug + on-screen state indicator; keep the closed loop, lose the table prop.
- If real-time data is **forbidden** by rules → run entirely on cached IESO history + the published rate schedule; the optimizer + replay still demo identically.
- Name fallback (if "Tide" reads as ocean/laundry-detergent): `Offpeak`, `Coil`, `Slack` (as in grid slack), or `3.9` (the overnight rate as the brand).
