# File A — Pitch & Business Case (Valley)

> **Audience:** teammates (stress-test this), judges, sponsors.
> **Name:** **Valley** — chosen 2026-05-25. The judge-visible brand still reads **TIDE** in the UI + video captions; swap before recording (tracked in File B §6).
> **Status:** draft for team stress-test, 2026-05-25. Every number here is sourced (§9). If a number isn't sourced, it's flagged.
> **Challenge:** Seneca Energy Hackathon 2026 · Theme 3 · PS1 (energy burden — "incentives target property owners, not renters").

---

## 1. What it is, in one breath

**Ontario's cheapest electricity costs 3.9¢/kWh. The most expensive costs 39.1¢ — ten times more. A low-income renter is usually stuck paying the expensive one.** Valley is the fix in two halves:

- **A ~$25 smart plug** that automatically runs a renter's shiftable load (window-AC pre-cool, laundry) at 3 a.m. on the 3.9¢ overnight rate — *no behaviour change, no staying up.*
- **An energy-burden map of Peel** that shows a utility *where* the gap hurts most across Mississauga, Brampton and Caledon — and routes each neighbourhood to the right fix: **the plug, a policy change, or a retrofit.**

The map is the brain; the plug is one of its hands. The map's real job is **triage** — it admits which households the plug *can't* help and sends them somewhere that can.

---

## 2. The thesis (why this is counterintuitive — the thing judges remember)

Ontario built the Ultra-Low Overnight (ULO) rate to *reward flexibility*. But the people who most need a cheaper bill are the **least able to flex**:

1. **The trap:** capturing 3.9¢ means using power at 3 a.m. A low-income renter who works shifts, has kids, or simply sleeps can't — so most who switch to ULO **pay more**, not less. The rate built to reward flexibility quietly **penalizes the inflexible**. *(Peer-reviewed: arXiv 2509.01499 — variable pricing reduces welfare for inflexible, low-income, high-peak households unless paired with demand-response access. That access is exactly what Valley is.)*
2. **The locked door:** in sub-metered apartment buildings, the tenant **legally cannot choose** the ULO rate at all. By Ontario Energy Board rule, the building's rate plan is picked by the landlord/property manager — not the tenant. The cheapest rate in the province is *unreachable* for the renters who'd benefit most.

**Valley springs the trap for the renters it can reach — and the map flags the locked doors for the policy lever.**

---

## 3. Impact

### Realistic (what we'll claim on camera — honest, defensible)
- **Per renter the plug reaches:** ~**$30–$130/year** saved (window-AC ~$40, in-unit laundry ~$33, a space heater ~$60–105), modeled at verified ULO rates. Modest — and **real**. We will not inflate it.
- **The honest moat is the map, not the plug.** It turns a $25 device into **targeting intelligence**: it tells a utility which homes the plug reaches and which need a different fix. That triage is the product.
- **Scale of the problem it speaks to:** ~**1.1 million Ontario households** are in energy poverty — the most of any province. Renters' energy burden roughly **doubles** once utilities buried in rent are counted (~8.3% vs ~4.3% direct).

### Ceiling (where it goes — say this once, at the close, never as the core claim)
- **~1,000 plugs ≈ 1 MW of dispatchable overnight load.** Ontario's most recent capacity auction cleared roughly **$171,000/MW-year**, so a fleet at that scale is a five- to six-figure flexibility asset *on top of* the household savings.
- **Grid-meaningful scale = 50–100 MW = 50,000–100,000 loads.** That's a multi-year deployment, not a weekend demo — which is why it's the *vision slide*, not the pitch.

> **Honesty rule (load-bearing for the Impact + Innovation score):** the realistic case is the pitch; the ceiling is one closing line. Leading with the ceiling is how energy hackathon projects lose the "is this real?" question.

---

## 4. Why this isn't "already done" (judges WILL probe this — here's the answer)

Both halves exist separately. Saying that *first*, ourselves, is the move:

| Prior art | What it does | What it doesn't do |
|---|---|---|
| **Emporia** (Time-of-Use Scheduling) | Auto-shifts loads to the cheapest window on generic plugs | Not renter-targeted, not Ontario-ULO, no equity lens |
| **Optiwatt** (GTHA pilot) | Automates Ontario ULO/TOU savings | EV chargers + thermostats only, not a $25 renter plug |
| **Shifted Energy** (Hawai'i) | VPP for low-income renters (~90% multifamily) | Utility-installed water-heater controllers, Hawai'i-only, not BYO |
| **CUSP Energy Poverty Explorer** | Maps neighbourhood energy burden Canada-wide | Doesn't route to interventions; doesn't model the sub-metering lockout |

**Our defensible, unoccupied slice — the one-sentence rebuttal:**
> *"Emporia automates this for homeowners; Shifted Energy proved it for low-income renters in Hawai'i; CUSP maps the burden. Nobody has connected them for the Ontario renter — and nobody else's map admits that half these households are **legally barred** from the cheap rate and need policy, not a plug."*

The original ideas are **(a)** building the product around the OEB sub-metering legal wall, and **(b)** a map that does **intervention triage** instead of just visualization. Lead with those, not with "we automate load-shifting" (rebutted in 10 seconds) or "we map energy burden" (CUSP did it).

---

## 5. Scalability path

1. **Now (demo):** one plug, one renter load, one region (Peel), real public data.
2. **Pilot:** partner with a Local Distribution Company (e.g., Alectra in Peel) or a non-profit housing provider; ship plugs to individually-metered renters the map identifies as reachable; measure real savings + shifted kW.
3. **Targeting layer as SaaS:** sell the *triage map* to utilities/LDCs — which postal areas to target with devices, which to escalate to sub-metering-policy advocacy, which to flag for efficiency retrofits. This is the asset that scales without hardware.
4. **Aggregation:** at thousands of plugs, the fleet becomes dispatchable flexibility a utility can value against capacity-auction prices. (Vision, not near-term.)

---

## 6. Business model (who pays, and for what)

The renter is the *beneficiary*, not the *customer*. Three candidate revenue lines, in order of realism:

- **B2G/B2Utility (most realistic): sell the targeting layer.** Utilities and energy-poverty programs already spend on outreach; the map makes that spend efficient (device vs policy vs retrofit per neighbourhood). Recurring, hardware-free, high-margin.
- **Program-subsidized hardware:** the plug is cheap enough (~$25) to be bundled into existing low-income energy programs (e.g., utility CDM / energy-affordability funds) rather than sold to renters who can't front capex. Avoids the split-incentive trap.
- **Flexibility aggregation (long-term):** monetize the aggregated overnight load as a capacity/DR resource once the fleet is large enough; share proceeds back to participants.

**What we deliberately reject:** selling a $25 gadget direct-to-renter at retail. A household in energy poverty can't front capex for a ~6–12 month payback, and that framing recreates the very inequity we're attacking.

---

## 7. Counterarguments & integration limits (pre-answer the hostile questions)

| The question a judge/sponsor asks | Our honest answer |
|---|---|
| *"Does this actually reach poor renters, or just affluent EV owners?"* | "One slice — individually-metered renters with a shiftable load — for ~$30–130/yr, modest but real. The leverage is the map: it tells the utility which neighbourhoods the plug reaches and which are sub-metered or baseboard-heated and need a policy/retrofit fix. Matching the fix to the household is the product." |
| *"Hasn't load-shifting been done (Emporia, Optiwatt)?"* | See §4 — yes, separately. Our slice is the renter + the legal lockout + the triage map. |
| *"Isn't critiquing ULO an attack on the utility/sponsor?"* | No — it's decision-support *for* the utility. The map finds their last-mile flexibility; the device supplies it. We're solving their targeting problem, not criticizing their rate. |
| *"$30–130/yr is tiny."* | Agreed, per household. The value compounds two ways: the aggregated flexibility (~$171k/MW-yr) and the targeting intelligence that makes utility program spend efficient. |
| *"Can the plug help sub-metered tenants?"* | **No — and that's the point.** The map names them and routes them to the policy lever. Admitting the limit is the credibility. |
| **Integration limits (state them plainly):** | 120V plug-through loads only (no central AC, no 240V dryer/EV). Requires an individually-metered unit + a shiftable load + home WiFi. Heating-fuel data isn't published at FSA level, so the retrofit routing is flagged as "next," not claimed as live. |

---

## 8. The demo moment (what judges actually see — 10 seconds)

> Screen reads **"11:00 · $0.391/kWh · ON-PEAK · WAIT"** in red, beside a map of Peel with **Malton (L4X)** glowing deepest red. Drag the hour scrubber 6 p.m. → 3 a.m. in one motion. The panel flips green: **"03:00 · $0.039/kWh · GO"**, the device turns ON *(and — if hardware lands — a real desk lamp clicks on)*. Caption: **"3.9¢ — Ontario's cheapest rate is a 3 a.m. trap. Valley springs it for you."**

The screen-only version is built and works today. The physical lamp is an upgrade, never a dependency.

---

## 9. Sourced facts (cite these; don't ad-lib numbers)

- **ULO rates** (eff. Nov 1 2025 – Oct 31 2026): overnight **3.9¢**, weekend off-peak **9.8¢**, mid-peak **15.7¢**, on-peak **39.1¢**. Source: **OEB**, oeb.ca electricity rates. *(10× spread = 39.1 / 3.9.)*
- **Sub-metered tenants can't choose their plan:** OEB — "that decision can only be made for the building as a whole by the master consumer" (landlord/property manager). Source: OEB "Understanding electricity unit" (USMP).
- **~1.1M Ontario households in energy poverty:** CUSP / homelesshub.ca. Strict 10%-of-income basis: Ontario ~4.8% (StatCan table 46-28-0001).
- **Renter energy burden ~8.3% (with indirect) vs ~4.3% direct:** StatCan 46-28-0001.
- **Renter savings ~$30–130/yr:** modeled at verified ULO rates (window AC ~$40, space heater ~$60–105, laundry ~$33). *Internal model — show the method note.*
- **DR ~$171,319/MW-yr:** Ontario Dec 2025 capacity auction. ⚠️ *The citation in `docs/energy-domain.md` is mislabeled (points to a Pickering release, not the auction result) — re-verify before putting on screen.*
- **Academic backing:** arXiv 2509.01499, "When Do Consumers Lose from Variable Electricity Pricing?" (2025).
- **Data sources powering the map:** StatCan 2021 Census (98-401-X2021013 attributes; 92-179-X geometry, 35 Peel FSAs), IESO measured hourly consumption by FSA, OEB ULO rates, live IESO grid feed.
- **Competitor URLs:** Emporia TOU; Optiwatt GTHA pilot; Shifted Energy (Hawai'i); CUSP Explorer (energypoverty.communitydata.ca).

---

## 10. STRESS-TEST THIS (teammates: push back here before we lock)

Open assumptions I want challenged before we burn build time:

1. **Sponsors:** Are Esri Canada + Alectra *confirmed* sponsors? `event.yaml` says "confirmed at kickoff"; our pre-event dossier doesn't list them. **Someone verify against the kickoff deck / official site (5 min).** Our Esri (map) and Alectra (flexibility) alignment hinges on this.
2. **"AI slop disqualifies":** Is this an actual organizer rule or our own discipline? Affects how hard we lean on it.
3. **The retrofit story:** heating-fuel data isn't published at FSA level, so the map only really shows **two** interventions (plug vs policy), not three. Do we present two honestly, or hardcode 1–2 retrofit FSAs with a caveat?
4. **The name — RESOLVED: Valley.** ("Valley filling" is the grid term for shifting load into the overnight demand trough — domain-fluent and broadly legible; the old placeholder collided with the laundry detergent.) Finalists kept below for the record:
   - **Valley** *(rec.)* — "valley filling" is the actual grid term for shifting load into the overnight demand valley; calm, domain-fluent, legible.
   - **Filament** — ties to the hero shot (the lamp's filament glowing at 3 a.m.); warm, visual.
   - **Small Hours** — "the small hours" (1–4 a.m.); human, literary, captures the sleeping renter.
   - **Latch** — the rate is a locked door; the device latches onto 3.9¢ the instant it opens ("latchkey" → working-class resonance).
   - **Tender** — it *tends* your load + "legal tender" ($); minds your energy and money while you sleep.
5. **Is the plug worth it at all,** or is the screen-only + map story stronger and simpler? (The hardware is the differentiator but also the only thing that can fail on camera.)
