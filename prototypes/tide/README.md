# Tide — viability spike

Charge your car and run your appliances when Ontario's electricity is cheapest — automatically.

> **What this is:** a throwaway prototype to prove Tide's mechanic works before idea-lock. **Not** the hackathon submission (that scaffolds later). Read [`VIABILITY.md`](./VIABILITY.md) for the verdict; this file is how to run it.

## The idea in one line

Ontario charges about **4¢/kWh overnight and 39¢/kWh at dinnertime** for the same electricity (OEB ULO plan). Tide is a $15 smart plug + this software: it waits for the cheap, clean hours and runs your load then. You plug in once and forget it.

## Run it

```bash
npm install
npm test          # 7 unit tests — the optimizer + savings math
npm run sim       # full 24h simulation: signal -> decision -> plug -> savings
npm run live      # probe the REAL IESO feed (needs internet)
npx tsc --noEmit  # strict typecheck
open web/index.html   # one-screen demo (drag the scrubber; the verb flips)
```

`npm run sim` prints the price/carbon curve, the optimizer's choice (23:00 start vs an 18:00 plug-in), the closed-loop plug actuation, and annualized savings. `npm run live` proves the data dependency is real.

## How it's wired

```
 IESO fuel mix ─┐
 OEB rates     ─┼─► HourSample[] ─► buildHorizon ─► chooseWindow ─► PlugDriver ─► ledger
 ECCC factors  ─┘   (ieso.ts)      (optimizer.ts)   argmin cost     (plug.ts)    (savings.ts)
                                                    + λ·carbon
```

| File | Role |
|---|---|
| `src/rates.ts` | Ontario ULO + TOU schedule, verified Nov 2025–Oct 2026 rates (annual cycle) |
| `src/carbon.ts` | fuel mix → gCO₂/kWh (IPCC AR5 average factors; see marginal note) |
| `src/ieso.ts` | live IESO fetch (graceful fallback) + cached sample-day loader |
| `src/optimizer.ts` | **the brain** — pure, tested window selection |
| `src/plug.ts` | `PlugDriver` interface + `MockPlugDriver` |
| `src/plug-shelly.ts` | **recommended** real driver — Shelly Gen2+ local JSON-RPC, zero deps, no cloud |
| `src/plug-kasa.ts` | TP-Link Kasa driver (KLAP/cloud-auth caveat — see file header; prefer Shelly) |
| `src/savings.ts` | per-run + annualized savings |
| `scripts/simulate.ts` | the end-to-end demo run |
| `scripts/fetch-live.ts` | the live-data probe |
| `web/index.html` | one-screen "WAIT / GO NOW" demo view |
| `data/sample-day.json` | deterministic Ontario-summer fixture |

## Going real (closing the last risk)

Recommended: a **Shelly Plug US Gen4** (~$25). Gen2+ Shelly speaks a documented local JSON-RPC
API with **no cloud account** — turn Cloud off in its web UI and control stays on-LAN. Zero deps.

```bash
npm run plug -- 192.168.8.50            # Shelly (default) — one-shot grid-aware switch
npm run plug -- 192.168.1.50 kasa       # Kasa fallback — needs `npm i tplink-smarthome-api`
```
```ts
import { ShellyPlugDriver } from "./src/plug-shelly.ts";
const plug = await ShellyPlugDriver.connect("192.168.8.50"); // local RPC, no cloud
```
Swap `MockPlugDriver` → `ShellyPlugDriver` in `simulate.ts` and the same loop drives real hardware.
For the stage, run the plug + laptop on your **own travel router with a reserved IP** — venue
Wi-Fi (client isolation / captive portals) will betray a shared-LAN demo. `MockPlugDriver` stays
the screen-only fallback if RF fails entirely. (Why not Kasa: TP-Link's KLAP firmware can demand
cloud creds even for "local" control — see `src/plug-kasa.ts`.)

## Honest limits

Average (not marginal) carbon factors; synthetic sample day (live path proven separately); regex XML parser (works on the real feed, but production should use `fast-xml-parser`); single-load; 120 V plug only (covers EV L1, window AC, dehumidifier, pool pump — not 240 V dryers/L2/water heaters). See [`VIABILITY.md`](./VIABILITY.md).
