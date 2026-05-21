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
| `src/rates.ts` | Ontario ULO + TOU schedule, verified Nov 2025–Apr 2026 rates |
| `src/carbon.ts` | fuel mix → gCO₂/kWh (IPCC AR5 factors) |
| `src/ieso.ts` | live IESO fetch (graceful fallback) + cached sample-day loader |
| `src/optimizer.ts` | **the brain** — pure, tested window selection |
| `src/plug.ts` | `PlugDriver` interface + `MockPlugDriver` |
| `src/plug-kasa.ts` | real TP-Link Kasa driver (drop-in; needs `npm i tplink-smarthome-api` + a plug) |
| `src/savings.ts` | per-run + annualized savings |
| `scripts/simulate.ts` | the end-to-end demo run |
| `scripts/fetch-live.ts` | the live-data probe |
| `web/index.html` | one-screen "WAIT / GO NOW" demo view |
| `data/sample-day.json` | deterministic Ontario-summer fixture |

## Going real (closing the last risk)

```bash
npm i tplink-smarthome-api          # then, with a Kasa plug on your LAN:
```
```ts
import { KasaPlugDriver } from "./src/plug-kasa.ts";
const plug = await KasaPlugDriver.connect("192.168.1.50"); // local control, no cloud
```
Swap `MockPlugDriver` → `KasaPlugDriver` in `simulate.ts` and the same loop drives real hardware.

## Honest limits

Average (not marginal) carbon factors; synthetic sample day (live path proven separately); regex XML parser (works on the real feed, but production should use `fast-xml-parser`); single-load; 120 V plug only (covers EV L1, window AC, dehumidifier, pool pump — not 240 V dryers/L2/water heaters). See [`VIABILITY.md`](./VIABILITY.md).
