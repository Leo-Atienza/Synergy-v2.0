# Tide — viability verdict

> Throwaway spike built 2026-05-21 to answer one question before idea-lock: **does the core mechanic actually work?** Not the hackathon scaffold (that waits for `/hackathon:scaffold`). Everything below is verified by running the code in this folder on Node 22.22.

## TL;DR

**VIABLE.** The whole chain — real Ontario grid data → carbon math → optimizer → plug actuation → verified savings — runs end-to-end today in ~520 lines. The only un-de-risked piece is pairing a *physical* smart plug on venue Wi-Fi, and that has a known mitigation (local-LAN control + screen fallback). Recommend carrying Tide into `/hackathon:ideate` as the lead of the round-2 trio.

## What got proven (by running it)

| Claim | How it was tested | Result |
|---|---|---|
| **Ontario grid data is gettable** | `npm run live` hits the real IESO feed | ✅ reachable, **3.1 MB**, parsed **7/7 fuels**, computed **70.6 gCO₂/kWh** live |
| **The 10× price signal is real** | OEB RPP Nov 2025–Apr 2026, hard-coded + verified | ✅ overnight **3.9¢** vs on-peak **39.1¢** = 10.0× |
| **The optimizer picks the right hour** | `npm test` (4 optimizer tests) + `npm run sim` | ✅ chooses **23:00** start, not the 18:00 plug-in |
| **The savings are real** | simulation, EV L1, 6h, plug-in 18:00 | ✅ **$0.34 vs $2.20 → saves $1.86/night (85% off)** + 0.51 kg CO₂ |
| **Cost-vs-carbon tradeoff works** | λ=0 vs λ=$0.15/kg in sim | ✅ greener window shifts 23:00→00:00, carbon 0.44→0.42 kg |
| **The loop closes** | MockPlugDriver on/off + `isOn()` read-back | ✅ ON 23:00 / OFF 05:00, state verified |
| **Real hardware is a drop-in** | `src/plug-kasa.ts` implements the same `PlugDriver` | ✅ swap one line (untested on physical plug — see risks) |
| **It's honest TypeScript** | `tsc --noEmit`, strict + verbatimModuleSyntax | ✅ clean |
| **It's small** | `wc -l src scripts` | ✅ ~520 LOC incl. the demo harness |

### Annualized savings the sim prints (ULO, shift off 4–9pm peak → overnight)

| Load | Per run | Per year |
|---|---|---|
| EV full charge (~50 kWh, L2) | $17.60 | **~$1,760** |
| EV nightly top-up (~9 kWh, L1) | $3.17 | ~$793 |
| Window AC overnight pre-cool (~6 kWh) | $2.11 | ~$253 |
| Dehumidifier (~5 kWh) | $1.76 | ~$317 |
| Dishwasher (~1.5 kWh) | $0.53 | ~$138 |

The $15 plug pays for itself in **days** on an EV, **weeks** on anything else.

## What's assumed / simplified (honest list)

- **Sample day is synthetic** (realistic Ontario summer magnitudes). The *live* path is proven separately by `npm run live`; they share the same carbon math.
- **Carbon uses AVERAGE lifecycle factors** (IPCC AR5), not **marginal**. Marginal is more defensible and would make summer overnights look even cleaner — but average is fine to prove the mechanic. A sharp judge will ask; have the answer ready.
- **ULO schedule is precise; TOU is simplified** (ULO is the headline plan).
- **Horizon assumes the same day repeats** for the overnight wrap. Production fetches the real next-day forecast (IESO VGForecast).
- **XML parser is regex spike-grade** — yet it parsed the real 3.1 MB feed 7/7. Production swaps in `fast-xml-parser`.
- **One load modeled.** Multi-load coordination (don't fire everything at 23:00 and spike the house panel) is not built.

## What's still UNKNOWN — test before committing hard

1. **Physical Kasa plug on venue Wi-Fi.** The #1 demo risk. Mitigation already designed: `tplink-smarthome-api` over **local LAN** (no cloud), plus a screen-only fallback. **Action: buy one KP125/EP25 (~$20) and test the `plug-kasa.ts` path on a real plug this week.**
2. **The winter carbon caveat.** Real IESO data from a Jan cold snap shows overnight gas is *also* high → carbon delta shrinks to ~6% (cost delta stays 10×). **Framing: lead with cost, qualify carbon as "biggest in summer."** Don't overclaim.
3. **Marginal vs average carbon** — decide whether to upgrade before the demo or just defend the choice.
4. **Behavioural/market:** will people buy a $15 plug? (Not a technical risk; a pitch risk. The ULO-under-adoption angle answers it.)

## Kill criteria (when we'd drop Tide)

- May 24 rules forbid hardware **and** forbid real-time data **and** weight technical depth heavily (each alone is survivable; all three together kills the edge).
- A sponsor track makes a dashboard mandatory.

## Go criteria — all met

- Data gettable ✅ · savings real + verifiable ✅ · demo deterministic (replay on cached data) ✅ · buildable in 96h ✅ (core already exists here) · unconfusable demo ✅ (nobody else brings a plug).

## Decision input for `/hackathon:ideate` (May 22)

Tide clears every viability bar that can be cleared without the venue + a physical plug. The two open risks are cheap to close: **(a) buy a Kasa plug and test `plug-kasa.ts`; (b) lock the "cost-first, carbon-qualified" framing.** Recommend: **lead seed of the round-2 trio**, paired with Backwards Hour as the no-hardware fallback if May 24 forbids props.
