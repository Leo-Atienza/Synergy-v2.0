---
title: Uniqueness thinking — deeper reasoning + archetype library + per-seed breakers
type: event
status: draft
updated: 2026-05-16
sources: ["[[../../docs/uniqueness-principles]]", "[[../../docs/build-readiness]]", "[[../20-ideas/seed-ideas]]", "[[../20-ideas/seed-a-carbon-intensity-api]]", "[[../20-ideas/seed-b-ontario-enviroscreen]]", "[[../20-ideas/seed-c-outage-equity-index]]"]
---

# Uniqueness thinking — deeper reasoning + archetype library

> Companion to the operational [`docs/uniqueness-principles.md`](../../docs/uniqueness-principles.md). This file is the *deeper reasoning* layer — where we think about WHY uniqueness works, WHICH archetypes have actually won past hackathons, and HOW each of our 15 candidate seeds could acquire a pattern-break.

---

## 1. Why ONE pattern-break, not many

The principles doc gives the operational rule ("pick one weird thing, polish to glass"). Here's the deeper reasoning.

### Judges are pattern-matching machines under cognitive load

A hackathon judge in 2026 sees 30+ projects in one afternoon. Cognitive psychology research on judge-style evaluation (Klein, Bazerman, Kahneman) consistently finds:

- **Anchoring**: the first 15 seconds of a pitch dominates the rest. (Primacy.)
- **Halo**: one highly-polished surface causes inference of overall quality.
- **Chunking**: humans hold ~4 distinct items in working memory at a time. By project 5, judges have built a *template* — anything fitting the template gets categorized, anything breaking it gets attention.
- **Decay**: 80% of details from any single project decay within 30 minutes. What remains is the strongest single feature.

A project where every choice is weird presents many features at once → exceeds working memory → averaged into "chaotic," dismissed. A project with ONE strategic break presents a clear template-violator → captured, retrieved later as "the one with X."

This is why WattsDown beat its 2020 GridShift cohort with a single physical lightbulb on stage — every other aspect of the project was conventional (smart-home app, energy-price feed). The lightbulb was the entire memory anchor.

### Form vs content competition

Most hackathon teams compete on **content**: better data, more features, deeper integrations. The marginal return on content drops fast — judges saw 5 similar dashboards before yours.

Few teams compete on **form**: the artifact's shape itself is novel. A comic instead of a dashboard. A sound piece instead of a chart. A letter auto-generated instead of a SaaS app. Form competition has a lower base rate but higher payoff because the form IS the differentiator.

The 11 archetypes (in principles doc §2) are mostly form-level moves. They're not "build a better X" — they're "your X is the wrong shape for what you're saying; pick a different shape."

### The team's structural risk on uniqueness

Teams of 3-5 tend toward conservative work because:
- Every weird choice has to survive 3-5 internal critics
- The team optimizes for not-embarrassing the most risk-averse member
- Time spent debating creative direction is time not building

The team's BUILD-throughput advantage (3-5× capacity) is real, but its CREATIVE-decision velocity drops 3-5× compared to a single mind — and worse, the *direction* of creative drift is predictable: toward the safer, more saturated template. By minute 30 of build, the locked Pattern-break has been quietly polished into a SaaS dashboard with a sidebar nav, because nobody on the team wanted to be the one to push back on the third "small reasonable" change.

The implication: **a team needs an explicit anti-dilution mechanism**, or it ends up with a competent execution of a generic idea. The Pattern-break archetype locked at `/hackathon:scope` IS that mechanism. Once locked, no teammate (and no Claude) gets to dilute it without the 1-in-1-out trade. The discipline is harder than for a solo builder, but the BUILD throughput pays for it if the team holds.

Operational read: every teammate should have read this doc + [`../../docs/uniqueness-principles.md`](../../docs/uniqueness-principles.md) before `/hackathon:scope`. The doctrine doesn't work if only one person knows it.

---

## 2. The archetype library — past winners by archetype

### 2.1 Time-Reveal archetype

**Past winners:**
- **WattsDown** (GridShift 2020) — color-changing smart bulb pulsing with prices over time. People's Choice.
- **TreeHacks 2025 OmNom** — autonomous food-delivery robot. Won Most Creative because the motion itself was the demo.
- **MIT Energy Hack 2024 Incenzo** (1st place) — animated equity-policy-targeting tool. The animation of priority shifting between communities was the wow.

**Why it works:** motion is preattentive. Judges' visual systems detect it before they think. Static maps require interpretation; moving maps tell a story.

**Apply to Ontario energy:** Seed C (Outage Equity Index time-replay) is the textbook fit. But also: Seed #5 could include a "replay the March 2025 ice storm" mode that times itself to the actual restoration curve.

### 2.2 Local-Detail archetype

**Past winners:**
- **Foam on Latte / Mood Vault** (Seneca 2023 1st, $5k CAD) — explicitly mentioned First Nations health, 75-language support, suicide ideation detection. Specific harms, specific populations, specific safety mechanisms.
- **Fram Energy** (DOE Solar Prize Round 7, $500k) — split-incentive specifically for *landlords and renters* (named populations, not generic).
- **Open Climate Fix** (UK NESO partner) — "in use by UK NESO, India, world's largest solar park" (named institutions).

**Why it works:** proper nouns activate scenes. "A neighborhood" doesn't activate anything; "Thorncliffe Park" pulls up a mental image (high-rise immigrant community, ranked low on heat-vulnerability indices).

**Apply to Ontario energy:** any seed could acquire this archetype. The default move: pick ONE Toronto neighborhood or ONE Ontario town to name and re-name throughout. Default candidates:
- **Thorncliffe Park** (low-income high-rise tower cluster, immigrant pop., heat vulnerable)
- **Scarborough East** (low EV adoption, gas-peaker adjacent)
- **Six Nations of the Grand River** (energy-equity success story — own the Oneida BESS)
- **Henvey Inlet First Nation** (Ontario's largest wind farm, Indigenous-owned)
- **Pickering** (the refurb story)
- **Atikokan** (biomass plant, NW Ontario context)

### 2.3 Hardware-Surprise archetype

**Past winners:**
- **Plantagotchi** (Royal Hackaway, MLH Top 10) — Raspberry Pi auto-watering. Hardware on stage = demo magic.
- **WattsDown** — see Time-Reveal.
- **CU Boulder 2024 Good Watt** — 7-person team, but won because of energy-monitor hardware demo.

**Why it works:** in a virtual-screen world, anything physical is novel. Judges who've watched 20 web demos suddenly see something they can touch.

**Apply to Ontario energy (virtual finale constraint):** if Phase 2 is in-person, you have hardware affordance. Ideas:
- A physical "carbon intensity meter" — Arduino + WS2812B LED strip that pulses based on Ontario grid mix (a single API call). Plug it in on stage. **~$30 in parts, ~2h to build.**
- A printable "outage equity report card" for one specific neighborhood, mailed (or printed live).
- A "phone-charge receipt" thermal printer that prints what fuel mix charged you. (Like a coffee receipt.)

**Risk:** hardware breaks. Always have the screen demo as fallback.

### 2.4 Audience-Inversion archetype

**Past winners:**
- **Incenzo** (MIT 2024 1st) — used Palmetto API to target *underserved communities*, when most equity tools target general populations.
- **AviWind Guardian** (Cloudera 1st of 2,300) — addressed *wind developers AND bird conservationists* simultaneously, when normal climate tools pick a single side.
- **Fram Energy** — for *renters*, when solar tools target homeowners.

**Why it works:** judges expect a default audience. When you name an unexpected one, they realize you've thought about the problem deeper than the surface.

**Apply to Ontario energy:** invert the obvious. Defaults: climate-conscious decision-makers, environmentalists, sustainability officers. Inversions:
- **Landlords** (deciding whether to replace gas furnaces with heat pumps)
- **Property tax assessors** (pricing climate-resilient buildings)
- **Insurance underwriters** (flood/derecho risk premiums)
- **Conservative MPPs / MLAs** (energy-affordability framing, not climate)
- **An Enbridge customer-service rep** handling disconnect calls during a heatwave
- **An oil & gas executive** managing stranded-asset risk
- **An ICU nurse** during a heat dome
- **Hydro One field linecrew dispatch** post-derecho

The product is the same; the FRAMING flips. Judges remember the inversion.

### 2.5 Format-Inversion archetype

**Past winners:**
- **TreeHacks 2023 SohamGovande overfishing dashboard** — won Best Innovation by being a *novel ML method applied to climate*, not a dashboard.
- **DrawPlatformer** (HackUVA) — converted hand-drawn paper to playable games. Not a typical web app.
- **Plantagotchi** — see Hardware-Surprise. Also format-inversion: it's an embedded gadget, not a dashboard.

**Why it works:** dashboard saturation. ~30% of energy hackathon submissions are dashboards. The non-dashboard stands out by default.

**Apply to Ontario energy:**
- A **comic** explaining Ontario's grid: each panel reveals one fact about the supply mix. Easier to grasp than a fuel-mix donut chart.
- A **sound piece** that sonifies carbon intensity: low chord when grid is clean, dissonant when gas peakers fire. Live for 24 hours of Ontario time.
- A **letter generator**: type your postal code, get a personalized letter to your MPP about a specific energy issue affecting your FSA.
- A **calendar**: each day of 2025 colored by Ontario grid carbon intensity. Print-ready PDF.
- A **physical postcard mailer**: enter address, get a postcard about your neighborhood's energy story.
- A **podcast snippet generator**: enter a topic, generate a 60-second audio explainer using local data.

### 2.6 Live-Interactive archetype

**Past winners:**
- **DrawPlatformer** — judges drew on paper, watched it convert to a game.
- **Cryptography hackathon (dossier-cited)** — judges scanned their own passports with phones, watched on-chain verification in ~30 seconds.

**Why it works:** participation > observation. A judge who DID something during your demo will retrieve your project by recalling what they did, not by recalling what they saw.

**Apply to Ontario energy:**
- During pitch, hand judges a printed FSA postal code and have them check the live carbon-intensity widget for that FSA.
- Ask judges to predict tomorrow's peak demand (or grid mix) before revealing the actual forecast.
- Have judges name their own neighborhood; demo shows live emissions/equity score for it.

### 2.7 Live-Computation archetype

**Past winners:**
- **Taiwan "Playing a Part in AI"** — AI agent runs energy-conservation meetings live, on Claude 3 Sonnet via Bedrock. Live AI inference visible.
- **MeStyle** (SCB 10X) — stopped model training short, shipped MVP. Live demo of model running.

**Why it works:** judges believe what they see typed live. Pre-recorded results feel staged.

**Apply to Ontario energy:**
- Live LLM call generating a per-neighborhood policy brief
- Live model inference generating tomorrow's carbon-intensity forecast
- Live retrieval from IESO XML in real time, displayed as it streams

### 2.8 Tension-Reveal archetype

**Past winners:**
- **AviWind Guardian** (Cloudera 1st) — wind power vs migratory birds, a tension nobody had reconciled.
- **Fram Energy** (DOE) — landlord vs renter incentive tension.

**Why it works:** judges' attention spikes on cognitive dissonance. Two goods in conflict → must be examined.

**Apply to Ontario energy:**
- **Nuclear cost overruns vs renewables intermittency** — Pickering $26.8B vs the alternative
- **Energy poverty vs decarbonization cost** — heat-pump rebates favor homeowners, leaving renters behind
- **Data center power demand vs climate equity** — 14 TWh of new data-center load by 2050 vs limited transmission to Indigenous + Northern communities
- **Gas peaker reliability vs neighborhood asthma** — Portlands runs when AQHI is already poor
- **Indigenous energy sovereignty vs federal jurisdiction** — Wataynikaneyap success vs Northern Ontario diesel dependency
- **Niagara hydro centennial vs reliability under climate stress** — historic plant, modern resilience demands

### 2.9 Public-Good Frame archetype

**Past winners:**
- **Open Climate Fix** — open-source, used by NESO, India, world's largest solar park. Pre-commitment to public infrastructure.
- **OpenNEM** (Australia) — MIT-licensed, copy-pasteable. Public good treated as public good.

**Why it works:** sponsors love it (signal of genuine community contribution). Judges treat it as a gift rather than a pitch.

**Apply to Ontario energy:** Seed A (api.carbonintensity.ca) is the textbook fit. But others can acquire it:
- **OntarioEnviroScreen with open methodology + data download** (CalEnviroScreen model)
- **OpenIESO.ca with full data archive** (OpenNEM clone)
- **School Energy Report Card with API for journalists** (so The Narwhal can use the data)

### 2.10 Embodied-Number archetype

**Past winners:**
- **Open Climate Fix savings**: "halved forecasting errors, saved ~£30M/yr" — a tangible number embodied in a year's worth of money.
- **Various climate winners** that lead with "X equivalent to Y cars/houses/cities."

**Why it works:** abstract data → felt scale. Numbers in kWh are forgettable; numbers in "annual emissions of every car in Canada for 40 years" are not.

**Apply to Ontario energy:**
- "Ontario peatlands store 1.3 BILLION tonnes of carbon — that's 40 years of every car in Canada." (Seed #15 anchor)
- "May 2022 derecho took out 1.1M customers — every household in Ottawa, Hamilton, and Mississauga combined."
- "Pickering refurb at $26.8B — enough to build 9 Bruce-Milton corridors."
- "Toronto Hydro's $5.1B 2025-29 plan = $6,500 per Toronto Hydro customer."
- "Oneida Battery's 1,000 MWh — enough to power every Six Nations of the Grand River household for 25 days continuous."

### 2.11 Permission-Break archetype

**Past winners:**
- **Climate TRACE** — facility-level emissions data nobody else aggregated. Found oil+gas emissions are 2× self-reported. Treated as accountability journalism.
- **NYC LL97 disclosure map** — building emissions made mandatory + public + searchable.

**Why it works:** the data exists (often in scattered PDFs or behind paywalls), but nobody has done the work to aggregate + publish. Doing that work is itself the contribution.

**Apply to Ontario energy:**
- **School board energy report cards** (Seed #7) — O.Reg 25/23 PDFs exist; aggregate them with letter grades. Toronto schools were 35% above national average in 2020-21 — that's a headline.
- **Building emissions ranked by Toronto landlord** — EWRB data exists; rank by ownership entity.
- **Peaker plant proximity to schools** — known peakers (Portlands, Goreway, Halton Hills); known school locations. Aggregate.
- **Outage equity by census tract** (Seed C built-in) — outage maps + ON-MARG.
- **Indigenous-led project visibility dashboard** — Indigenous Clean Energy has the directory; map it live with equity-stake values.

---

## 3. Per-seed pattern-break suggestions

For each of the 15 candidate angles in [[../20-ideas/seed-ideas|seed-ideas]], a natural pattern-break archetype. **Not commitments — just the move most likely to land.**

| # | Seed | Suggested archetype | Specific move |
|---|---|---|---|
| 1 | OpenIESO.ca | **Public-Good Frame** + Embodied-Number | Open-source first; lead with "Ontario's grid right now is cleaner than 87% of jurisdictions on Earth, but we have no public dashboard" |
| 2 | ⭐ api.carbonintensity.ca | **Public-Good Frame** | The docs page itself is interactive — embed widget IN the docs. Open-source from day 1. |
| 3 | Toronto Building Disclosure | **Permission-Break** + Local-Detail | Rank by landlord. Top 10 emitters get named. (Toronto BEPS hasn't done this — the data has been public for 5 years.) |
| 4 | ⭐ OntarioEnviroScreen | **Tension-Reveal** + Local-Detail | The score combines pollution AND energy burden — no existing tool does both. Lead with specific addresses on opposite poles of the score. |
| 5 | ⭐ Outage Equity Index | **Time-Reveal** (built-in) + Permission-Break | The derecho replay IS the pattern-break. Run it backward at 100× speed first as the cold open. |
| 6 | Cool & Clean Heat Router | **Audience-Inversion** | Pitch to a Toronto Public Health nurse, not to a city planner. Live SMS demo. |
| 7 | School Energy Report Card | **Permission-Break** + Embodied-Number | Auto-generate a letter to the school principal. "Your school is at the 23rd percentile — here's the dollar amount you'd save with envelope retrofits." |
| 8 | Carbon-Aware EV Router | **Live-Computation** + Local-Detail | Live route Toronto → a specific Northern community (Pickle Lake, Wataynikaneyap-connected). Show real-time carbon-saving math. |
| 9 | Northern Ontario Diesel-to-Solar | **Embodied-Number** + Local-Detail | "If Pikangikum stays diesel until 2030, that's 70,000 tonnes CO₂ — same as taking every Toronto Pearson flight to Edmonton off the schedule for a year." |
| 10 | DR Game Layer (OhmConnect for Ontario) | **Live-Interactive** + Hardware-Surprise | During pitch, judges pull out phones and shift their dishwasher to 11pm in real time. Bonus: an Arduino LED in the room glows green when peak collective shift hits threshold. |
| 11 | Heat Pump + Solar Calculator (renter lens) | **Audience-Inversion** | The pitch isn't to a homeowner — it's to a renter, and the demo's "Monday morning use" is the auto-generated email to their landlord. |
| 12 | Ontario Polluter Dashboard | **Permission-Break** + Tension-Reveal | Rank by parent company. Cross-reference with school proximity (asthma framing). |
| 13 | WhatPoweredYourPhone.ca | **Embodied-Number** (built-in) | "Your phone was 78% nuclear, 19% hydro, 3% gas. Over a year, that's 1.8 kg of CO₂ — same as one Tim Hortons coffee per month." |
| 14 | Tower Renewal Energy Estimator | **Local-Detail** + Tension-Reveal | Pick ONE Toronto tower (e.g., 200 Wellesley) and tell its entire energy story — past emissions, retrofit cost, renter displacement risk. Tension-reveal: green retrofit vs gentrification. |
| 15 | Peatland Carbon Dashboard | **Format-Inversion** + Embodied-Number | NOT a dashboard. A diorama / layered illustration of the Hudson Bay Lowlands. Each layer reveals a stat. Embodied number: "40 years of every Canadian car." |

The starred top-3 already have natural pattern-breaks baked in (Seed A = Public-Good, Seed B = Tension+Local, Seed C = Time-Reveal). The other 12 require choosing an archetype during `/hackathon:ideate`.

---

## 4. Decision script for `/hackathon:scope` (force the commitment)

When `/hackathon:scope` runs, the `scope.md` template should require these four fields filled BEFORE the file is considered complete:

```markdown
## Pattern-break commitment

- **Archetype:** [one of the 11 from uniqueness-principles.md §2]
- **The 10-second moment:** [literal demo-script video description]
- **Fallback if the weird version doesn't land:** [the one-notch-back option]
- **What we cut to support this:** [the feature/idea we're NOT pursuing because it would distract]
```

Without these, `/hackathon:scope` is incomplete. The `demo-moment-critic` agent should reject `scope.md` that doesn't have these fields.

---

## 5. The "wrong audience" experiment

When you can't pick an archetype, try this: take your current idea, and ask: *who would HATE this?* Their opposite is often the unexpected audience that unlocks an archetype.

| Idea | Likely hater | Unexpected audience |
|---|---|---|
| Outage equity map | Hydro One PR | A linecrew dispatcher trying to prioritize calls |
| Carbon intensity API | Enbridge | An e-commerce site trying to run on cleanest electrons |
| Heat pump calculator | Gas-furnace installers | A renter trying to negotiate with a landlord |
| OntarioEnviroScreen | Portlands Energy Centre operators | A school board picking where to invest air-purifier budgets |
| Tower Renewal estimator | Real-estate developers | A tenant council pricing co-op buyback options |

The unexpected audience is the wedge that locates your project in an unoccupied corner of the judging mental map.

---

## 6. The hard test — could this be confused with another project?

When you've made all your choices, do this gut check: name a project from your idea ("Ontario Energy Dashboard"). Could a judge confuse it with a project they saw 3 slots ago? If yes — your pattern-break isn't strong enough.

Strong pattern-breaks produce zero confusion:
- "The one with the derecho time-replay" — only Outage Equity Index
- "The one where the docs are the demo" — only api.carbonintensity.ca
- "The one with the school report card letter to the principal" — only Seed #7
- "The one ranked by landlord" — only Toronto Building Disclosure with the permission-break

Memorable = unconfusable.

---

## 7. What if I can't commit to one?

If at `/hackathon:scope` you can't pick between two archetypes, the answer is almost always: **pick the one with hardware-or-motion**. Static archetypes (Local-Detail alone, Public-Good Frame alone) are harder to demo in 10 seconds. Time-Reveal, Hardware-Surprise, Live-Interactive, Live-Computation always demo better because they're preattentive.

Combine if absolutely necessary: Time-Reveal + Local-Detail is the strongest combo (the derecho replay over Eastern Ontario named neighborhoods). Public-Good Frame + Embodied-Number is the second (open API + "halved errors saved £30M").

---

## 8. Self-test before committing

Run this prompt against your locked pattern-break:

1. **Sketch the demo screen at 0:55** (the wow moment). What's on it?
2. **Describe it to a non-technical friend in 10 seconds.** Do they react?
3. **Could this exist as a still image** (a single screenshot)? If yes → not time-reveal enough. (Unless that's intentional.)
4. **Could 3+ teams produce this same screen?** If yes → not unique enough.
5. **Does it make Carl Meyer want to write about it?** (i.e., is there a story?)

Pass 3-4 of 5 → ship. Below that → escalate the archetype or commit harder.

---

## 9. Operational reminders

- This file is **thinking**. The **operational** version is [`docs/uniqueness-principles.md`](../../docs/uniqueness-principles.md) and the **Uniqueness mode** section in the project [`CLAUDE.md`](../../CLAUDE.md).
- During `/hackathon:build`, Claude operates as the second voice. It proposes weird options first, flags template-y choices, and holds the pattern-break commitment.
- The `demo-moment-critic` and `scope-defender` project agents are extended to enforce pattern-break commitments (see project CLAUDE.md "Uniqueness mode" section).
- Post-`/hackathon:retro`, what worked / what didn't gets compiled into `~/Documents/Wiki/wiki/engineering/patterns/hackathon-pattern-breaks.md` for next event.

## Cross-references

- [`../../docs/uniqueness-principles`](../../docs/uniqueness-principles.md) — the operational doc
- [`../../docs/build-readiness`](../../docs/build-readiness.md) — operational decision infra
- [[../20-ideas/seed-ideas]] — the 15 angles
- [[../20-ideas/seed-a-carbon-intensity-api|Seed A]] — Public-Good Frame natural fit
- [[../20-ideas/seed-b-ontario-enviroscreen|Seed B]] — Tension-Reveal + Local-Detail
- [[../20-ideas/seed-c-outage-equity-index|Seed C]] — Time-Reveal built in
- `../../docs/research-dossier.md` Section 9 — patterns from 30+ past winners
- [[judge-rubric-thinking]] — judge psychology canon (this folder)
