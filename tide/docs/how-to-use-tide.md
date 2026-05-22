# How to use Tide

*Set it up once, then forget it. This is the practical companion to [`tide-team-brief.md`](tide-team-brief.md) (which explains **why** Tide exists) and the spike's [`tide/spike/README.md`](../spike/README.md) (how to **run the code**). This page is how a household actually **uses** it.*

---

> **The whole point in one line:** In Ontario the same kilowatt-hour costs about **3.9¢ at midnight and 39.1¢ at dinnertime**. Tide runs your big appliances at the 3.9¢ hour, automatically, so you never have to think about it.

## What you'll need

| Thing | Notes |
|---|---|
| **A Shelly Plug US Gen4** (~$25) | The plug Tide switches on and off. We recommend Shelly because it works **without internet or a cloud account** — control stays inside your home. Any Shelly Gen2+ plug works; cheaper plugs exist from ~$15. |
| **A device worth shifting** | An EV charger (the regular 120-volt kind), a window air conditioner, a dehumidifier, a dishwasher, a pool pump. See [What to plug in](#what-to-plug-in) — and the [limits](#what-tide-does--and-doesnt-do) (120-volt loads only). |
| **Somewhere to run Tide** | Any always-on computer on your home Wi-Fi — a laptop left plugged in, a Raspberry Pi, a mini PC. |
| **The Ultra-Low Overnight (ULO) rate plan** | Call your utility (Toronto Hydro, Alectra, Hydro One…) and ask to switch to ULO. This is what creates the 3.9¢-vs-39.1¢ gap Tide lives in. (A regular Time-of-Use plan also works, with smaller savings.) |

## Set it up (about 10 minutes, once)

1. **Wire it up.** Plug the Shelly into the wall. Plug your device (say, your EV charger) into the Shelly. Nothing is shifting yet — that's fine.
2. **Get the Shelly on your Wi-Fi, then turn Cloud OFF.** In the Shelly's setup screen, connect it to your home network, then switch **Cloud** off. This is the important bit: with Cloud off, Tide talks to the plug directly over your own network, so a flaky internet connection can never break it. Note the plug's address (its IP, like `192.168.1.50`) and, in your router, **reserve that address** so it never changes.
3. **Point Tide at the plug and test it.** Start Tide and give it the plug's address. Run the connection test — your device should click **on**, hold for two seconds, then click **off**. If the lamp blinks, the hard part is done. *(Today this is one command — see the [appendix](#appendix--running-tide-today).)*
4. **Tell Tide about your load — once.** Two facts: **how long it runs** ("my dishwasher takes about 2 hours") and **when it needs to be finished** ("done by 7 a.m."). That's the entire configuration. Tide figures out the rest every night.

## Living with Tide

There's no daily routine. That *is* the feature.

- You plug your thing in whenever — 6 p.m., right after work, doesn't matter.
- Every hour, Tide reads two live numbers Ontario publishes for free: **how expensive** power is and **how dirty** it is.
- It finds tonight's cheapest, cleanest stretch that still finishes by your deadline, switches the plug **on** then, and **off** when the job's done.
- You did nothing. You didn't watch the clock. You didn't run the dishwasher at 2 a.m. like a raccoon.

The screen, if you glance at it, shows one word — **WAIT** or **GO NOW** — the live price and carbon, and a running tally of what you've saved. You never *have* to look at it.

## What to plug in

The savings, if you shift a load off the 4–9 p.m. window to overnight on ULO:

| What you plug in | Saves about |
|---|---|
| Electric car — full charge | **~$1,760 / year** |
| Electric car — nightly top-up | ~$790 / year |
| Dehumidifier | ~$320 / year |
| Window air conditioner | ~$250 / year |
| Dishwasher | ~$140 / year |

**Rule of thumb — a load is worth shifting if it (1) runs for a good while, (2) doesn't care *when* it runs, and (3) plugs into a normal wall outlet.** The car charger saves the most; a dehumidifier or AC is the most relatable. The $15–25 plug pays for itself in **days** on an EV, **weeks** on anything else.

## Reading your savings

Tide keeps a running ledger — **per run** and **lifetime** — in both dollars and kilograms of CO₂ avoided.

A single EV charge is the clearest example: about **$2.20** if you'd charged at 6 p.m., versus about **$0.34** overnight. That's **85% off** — the same energy, the same full battery, a tenth of the price, with zero effort from you.

## If something's not working

| What you see | The fix |
|---|---|
| **"Can't reach the plug."** | Is **Cloud** turned off in the Shelly app? Is the plug on the same network as the computer running Tide? Is the address right (the one you reserved in step 2)? |
| **The plug switches, but the device doesn't run.** | Some appliances don't restart themselves after losing power. Check that yours turns *on* when power comes back (most chargers, ACs, and pumps do; a few electronics need a physical button). |
| **Flaky or public Wi-Fi** (a demo, an apartment, a venue). | Run the plug and the computer on your **own little travel router** with the reserved address. The grid data + the on-screen display still work even if the plug itself drops off. |

## What Tide does — and doesn't do

The honest version, so nothing surprises you:

- **It saves money every single day** the prices differ — which on ULO is every weekday.
- **It saves carbon when the hour you shifted *away from* was the dirty one** — true for Ontario weekday evenings, when gas "peaker" plants switch on. On a deep-winter overnight, the *cleaner* benefit shrinks; the *cheaper* benefit never does. So: **money first, planet second.**
- **It shifts *when* you use power, not *how much*.** Your total electricity use is the same — Tide just moves it to the cheap, clean hours. It's not an efficiency gadget; it's a timing one.
- **120-volt plug-in loads only.** That covers EV Level-1 charging, window ACs, dehumidifiers, pool pumps. It does **not** cover things hardwired into your panel or on a big 240-volt outlet — electric dryers, Level-2 car chargers, central AC, tank water heaters.
- **You need a time-varying rate.** On a flat rate there's no cheap hour to aim for, so there's nothing to save.

## What's real today vs. the finished product

Be clear-eyed about this: the **engine is real and proven**, the **packaging is not built yet**.

What works *right now*, on real Ontario grid data: pulling the live prices and fuel mix, deciding the cheapest-and-cleanest window, switching a real plug on and off and verifying it happened, and tallying the savings. That's the risky part, and it's done.

What's still ahead: turning "run a command and edit one setting" into a one-tap app your aunt could install. The savings don't change — the front door does.

---

## Appendix — running Tide today

For whoever does the technical setup. Full detail in [`tide/spike/README.md`](../spike/README.md).

```bash
cd tide/spike
npm install
npm run plug:test -- 192.168.1.50    # step 3 above — the plug should blink on, then off
npm run plug -- 192.168.1.50         # the real thing: read the grid, switch for the right hour
```

Your load (step 4) is set in `scripts/control-plug.ts` — the `load` object's `durationHours` (how long it runs) and `deadlineHour` (when it must be done). In the finished product this becomes a setup screen.

To see it without any hardware: `npm run sim` (a full 24-hour simulation) or open `tide/spike/web/index.html` (the WAIT / GO NOW screen).

---

*New to the vocabulary — "the grid," "kWh," "gas peaker"? The mini-glossary at the bottom of [`tide-team-brief.md`](tide-team-brief.md) covers every term in one screen.*
