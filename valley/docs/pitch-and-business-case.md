# File A — Pitch & Business Case (Valley)

> **Audience:** teammates (stress-test this), judges, sponsors.
> **Name:** Valley (chosen 2026-05-25). The on-screen brand still reads TIDE in the UI + video captions; swap before recording (File B §6).
> **Status:** draft for team stress-test, 2026-05-25. Every number is sourced (see "The numbers"). Anything unsourced is flagged.
> **Challenge:** Seneca Energy Hackathon 2026 · Theme 3 · Problem Statement 1 (energy burden — "incentives target property owners, not renters").

> **Quick glossary** (so everyone reads this the same way):
> - **ULO** — "Ultra-Low Overnight," one of Ontario's electricity price plans. Cheap overnight (3.9¢/kWh), expensive at dinnertime (39.1¢).
> - **FSA** — the first three characters of a postal code (e.g., "L4X"). Roughly a neighbourhood. Our map uses Peel's 35 FSAs.
> - **Sub-metered** — an apartment building with one main meter that a third-party company divides among units. The **tenant can't pick their own price plan** — the building owner does.
> - **Load-shifting** — running an appliance at a cheaper time of day to save money.

---

## The whole idea in one minute

Ontario has a super-cheap overnight electricity rate: **3.9¢ at 3 a.m. versus 39.1¢ at dinner — ten times cheaper.** It exists to reward people who move their power use to off-hours.

The catch: the people who most need a cheaper bill — **low-income renters** — usually can't take it.
- They can't be awake at 3 a.m. to run the laundry, so switching to this plan often makes their bill **go up**, not down.
- And many of them **aren't even allowed to choose it** — in a lot of apartments the landlord picks the building's rate plan, not the tenant.

So the cheapest rate in the province is basically out of reach for the people it would help most.

**Valley fixes this with two pieces:**
1. **A ~$25 smart plug** that runs a renter's appliance (like a window air conditioner) automatically at 3 a.m., so they get the 3.9¢ rate **without waking up or changing anything.**
2. **A map of Peel** that shows a utility which neighbourhoods the plug can actually help — and which ones are stuck behind the landlord problem and need a **policy** fix instead.

The plug is the fix. The map is the brain that decides *who* the fix is for.

---

## How it works

### Piece 1 — the plug (automatic load-shifting, zero effort from the renter)

Think of it as a timer that's smart about **price** instead of just clock time.

1. **Set it once.** The renter plugs an appliance (window AC, laundry, space heater) into the Valley plug and tells it the job — e.g. *"this needs about 3 hours and should be done by 7 a.m."* (In our demo this is pre-set.)
2. **Valley knows every hour's price and how clean the grid is.** The ULO price schedule is fixed (cheap overnight, pricey at dinner); Valley also pulls Ontario's **live grid mix** from IESO to know which hours are cleanest.
3. **It picks the best window automatically.** Valley's optimizer scans the allowed hours and finds the cheapest stretch long enough to finish the job. On ULO that's always the overnight 3.9¢ block.
4. **It flips the switch at the right time.** When the cheap window arrives, Valley turns the plug **ON**; when the job's done it turns it **OFF** — and reads the plug back to confirm the switch actually happened.
5. **The renter does nothing.** They set it once and sleep. The appliance runs at 3.9¢ instead of 39¢. No behaviour change, no lost sleep.

```
Renter sets it once
      │
      ▼
Valley checks tonight's prices (ULO) + the live grid
      │
      ▼
Finds the cheapest hours that still finish by the deadline   →   ~3 a.m. (3.9¢)
      │
      ▼
At 3 a.m.:  plug turns ON  →  appliance runs  →  plug turns OFF before morning
      │
      ▼
Renter wakes to a cooled room and a 3.9¢ bill — having done nothing
```

*The plug itself is "dumb" — just a switch with a power meter (a ~$25 Shelly, controlled over home Wi-Fi, no cloud account). All the intelligence is Valley deciding **when**. In the demo, an on-screen hour slider lets you watch that decision: drag to dinnertime and it says WAIT; drag to 3 a.m. and it flips to GO.*

### Piece 2 — the map (energy-burden triage)

The map answers one question for a utility: **"Which neighbourhoods can this plug actually help, and which need a different fix?"**

1. **Real data in.** For each of Peel's 35 postal-code areas, Valley pulls Statistics Canada 2021 census facts: median income, share who rent, share in apartments, population.
2. **One burden score out.** Valley blends those into a single **0–100 energy-burden score** per neighbourhood (more renters + lower income = higher burden) and colours the map from teal (okay) to red (worst). Malton (L4X) comes out the reddest.
3. **Click a neighbourhood → it tells you the right fix.** This triage is the clever part:
   - **Lots of apartments → "Policy fix."** Mostly sub-metered, so the landlord picks the plan and the renter is locked out of ULO. A plug can't help here.
   - **Mostly individually-metered renters → "Valley reaches this."** These renters *can* choose ULO but get punished by it — exactly who the plug helps.
   - *(A third "retrofit" category, for electric-baseboard homes that can't shift at all, is flagged as "next" — the census doesn't publish heating fuel at this map's resolution, so we don't claim it yet.)*
4. **Why it matters:** the map turns a $25 gadget into **targeting intelligence**. It honestly admits who the plug *can't* reach and routes them to policy or retrofit instead. That honesty is the credibility.

---

## Why it matters — the core insight (the thing judges remember)

Ontario built the cheap overnight rate to **reward flexibility**. But the people who most need a cheaper bill are the **least able to flex** — which creates the two problems Valley is built around:

- **The trap.** Getting 3.9¢ means using power at 3 a.m. A renter working shifts, raising kids, or just sleeping can't — so most who switch to ULO **pay more.** A peer-reviewed study (arXiv 2509.01499) found exactly this: variable pricing hurts inflexible, low-income households *unless* they're given a way to respond automatically. **That automatic response is what Valley is.**
- **The locked door.** In sub-metered apartments the tenant **legally can't choose** ULO — the Ontario Energy Board says the building owner picks the plan. The cheapest rate in the province is unreachable for the renters who'd benefit most.

**Valley springs the trap for the renters it can reach — and the map flags the locked doors so a utility knows where a policy fix is needed instead.**

---

## Impact

**Realistic (what we'll say on camera — honest):**
- A renter the plug reaches saves about **$30–$130 a year** (window AC ~$40, in-unit laundry ~$33, a space heater ~$60–105), at real ULO rates. Modest, and **real** — we won't inflate it.
- The bigger value is the **map**: it turns a cheap device into targeting intelligence a utility can act on.
- The problem is large: about **1.1 million Ontario households** are in energy poverty — the most of any province. Renters' energy burden roughly **doubles** once utilities buried in rent are counted.

**Ceiling (one closing line only — never the main claim):**
- About **1,000 plugs ≈ 1 megawatt** of shiftable overnight load. Ontario's latest capacity auction cleared roughly **$171,000 per megawatt-year**, so a fleet becomes a real flexibility asset *on top of* the household savings.
- Grid-meaningful scale (50–100 MW) means 50,000–100,000 homes — a multi-year build, which is why it's the vision, not the pitch.

> **Honesty rule:** lead with the realistic case; the ceiling is one sentence at the end. Leading with the big number is how energy projects lose the "is this real?" question.

---

## Is this new? (the honest answer — judges will ask)

Both halves exist separately, so we say that *first, ourselves*:

| Already out there | What it does | What it doesn't do |
|---|---|---|
| **Emporia** | Auto-shifts loads to cheap hours on generic plugs | Not for renters, not Ontario-ULO, no equity angle |
| **Optiwatt** (Toronto pilot) | Automates Ontario ULO savings | EV chargers + thermostats only, not a $25 renter plug |
| **Shifted Energy** (Hawai'i) | Flexibility for low-income renters | Utility-installed water heaters, Hawai'i-only |
| **CUSP Explorer** | Maps energy burden across Canada | Doesn't route to a fix; ignores the sub-metering lockout |

**Our one-sentence answer:**
> *"Emporia automates this for homeowners; Shifted Energy proved it for low-income renters in Hawai'i; CUSP maps the burden. Nobody has connected them for the Ontario renter — and nobody else's map admits half these households are **legally barred** from the cheap rate and need policy, not a plug."*

What's genuinely ours: building the product around the **sub-metering legal wall**, and a map that does **triage** (plug vs policy vs retrofit) instead of just colouring neighbourhoods.

---

## How we'd make money

The renter is who we *help*, not who *pays*. Revenue lines, most realistic first:
- **Sell the targeting map to utilities / energy-poverty programs.** They already spend on outreach; the map makes that spend efficient (device vs policy vs retrofit, per neighbourhood). Recurring, no hardware, high margin. **This is the real business.**
- **Program-subsidized plugs.** At ~$25 the plug is cheap enough to fold into existing low-income energy programs, rather than asking a struggling renter to pay upfront.
- **Flexibility aggregation (long-term).** Once there are enough plugs, sell the combined overnight load as a grid resource and share the proceeds back.

**What we won't do:** sell a $25 gadget direct to renters at retail. A household in energy poverty can't front cash for a 6–12-month payback — that just recreates the unfairness we're fighting.

---

## How it scales
1. **Now (demo):** one plug, one renter load, one region (Peel), all real public data.
2. **Pilot:** team up with a utility (e.g., Alectra in Peel) or a housing non-profit; send plugs to the renters the map says are reachable; measure real savings.
3. **Map as a product:** sell the triage layer to utilities — no hardware needed to scale it.
4. **Aggregation:** at thousands of plugs, the combined load becomes a grid asset. (Vision.)

---

## The hard questions (and our answers)

| What they'll ask | Our answer |
|---|---|
| *"Does this really reach poor renters, or just well-off EV owners?"* | "One slice — individually-metered renters with a shiftable appliance — for ~$30–130/yr, modest but real. The leverage is the map: it tells the utility who the plug reaches and who's sub-metered or baseboard-heated and needs a policy/retrofit fix. Matching the fix to the household is the product." |
| *"Hasn't load-shifting been done?"* | "Yes, separately (Emporia, Optiwatt). Our slice is the renter + the legal lockout + the triage map." |
| *"Isn't criticizing ULO an attack on the utility/sponsor?"* | "No — it's decision-support *for* them. The map finds their hard-to-reach flexibility; the plug supplies it." |
| *"$30–130/yr is tiny."* | "Per household, yes. It compounds two ways: aggregated flexibility (~$171k/MW-yr) and targeting that makes program spend efficient." |
| *"Can the plug help sub-metered tenants?"* | "No — and that's the point. The map names them and sends them to the policy fix. Admitting the limit is the credibility." |

**Real-world limits we state plainly:** works on 120V plug-in appliances only (no central AC, 240V dryers, or EV chargers); needs an individually-metered home, a shiftable appliance, and home Wi-Fi; we don't yet claim the retrofit category because heating-fuel data isn't published at the neighbourhood level.

---

## The demo moment (what judges see — 10 seconds)
> Screen reads **"11:00 · $0.391/kWh · ON-PEAK · WAIT"** in red, next to a map of Peel with **Malton (L4X)** glowing deepest red. Drag the hour slider 6 p.m. → 3 a.m. in one motion. The panel flips green: **"03:00 · $0.039/kWh · GO,"** the device turns ON *(and if the hardware lands, a real desk lamp clicks on)*. Caption: **"3.9¢ — Ontario's cheapest rate is a 3 a.m. trap. Valley springs it for you."**

The screen-only version works today. The physical lamp is a bonus, never a dependency.

---

## The numbers, with sources (cite these; don't ad-lib)
- **ULO rates** (eff. Nov 1 2025 – Oct 31 2026): overnight **3.9¢**, weekend off-peak **9.8¢**, mid-peak **15.7¢**, on-peak **39.1¢**. Source: **OEB**, oeb.ca electricity rates. (10× spread = 39.1 / 3.9.)
- **Sub-metered tenants can't choose their plan:** OEB — "that decision can only be made for the building as a whole by the master consumer" (landlord/property manager). Source: OEB "Understanding electricity unit" (USMP).
- **~1.1M Ontario households in energy poverty:** CUSP / homelesshub.ca. Strict 10%-of-income basis: Ontario ~4.8% (StatCan table 46-28-0001).
- **Renter energy burden ~8.3% (with indirect) vs ~4.3% direct:** StatCan 46-28-0001.
- **Renter savings ~$30–130/yr:** internal model at verified ULO rates (window AC ~$40, space heater ~$60–105, laundry ~$33). *Show the method note.*
- **DR ~$171,319/MW-yr:** Ontario Dec 2025 capacity auction. ⚠️ *The citation in `docs/energy-domain.md` is mislabeled (points to a Pickering release, not the auction result) — re-verify before putting on screen.*
- **Academic backing:** arXiv 2509.01499, "When Do Consumers Lose from Variable Electricity Pricing?" (2025).
- **Data behind the map:** StatCan 2021 Census (98-401-X2021013 attributes; 92-179-X geometry, 35 Peel FSAs), IESO measured hourly consumption by FSA, OEB ULO rates, live IESO grid feed.
- **Competitors:** Emporia TOU; Optiwatt (GTHA pilot); Shifted Energy (Hawai'i); CUSP Explorer (energypoverty.communitydata.ca).

---

## Stress-test this (team: push back before we lock)
1. **Sponsors:** Are Esri Canada + Alectra *confirmed* sponsors? `event.yaml` says "confirmed at kickoff"; our pre-event dossier doesn't list them. **Someone verify against the kickoff deck / official site (5 min)** — our map (Esri) and flexibility (Alectra) framing hinges on it.
2. **"AI slop disqualifies":** Is this an actual organizer rule or our own discipline? Affects how hard we lean on "every number is real."
3. **The retrofit story:** heating-fuel data isn't published at the neighbourhood level, so the map really shows **two** fixes (plug vs policy), not three. Present two honestly, or hardcode 1–2 retrofit neighbourhoods with a caveat?
4. **Name:** locked to **Valley** ("valley filling" = the grid term for shifting load into the overnight demand trough). Other finalists if anyone objects: Filament, Small Hours, Latch, Tender.
5. **Is the plug worth it at all,** or is the screen + map story stronger and simpler? The hardware is our biggest differentiator *and* the only thing that can fail on camera.
