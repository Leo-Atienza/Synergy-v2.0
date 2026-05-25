# Post-kickoff idea catalog — 19 new candidates across all 9 challenge sets

> **What this is.** A fresh sweep of project ideas from **2026-05-24**, *after* the May-24 kickoff showed us the real challenge set ([senecahackathon.com/challenges](https://www.senecahackathon.com/challenges)). How we made them: deep web research plus three research agents working in parallel (one per theme), each told to skip our pre-kickoff seeds, avoid the data traps, and ground every idea in verified Ontario data and a [pattern-break archetype](uniqueness-principles.md).
>
> **How it relates to what we already had.** Our original 18 seeds and 3 parked ideas live in `Synergy-v2.0 — Hackathon Brain/20-ideas/` ([`seed-ideas.md`](../Synergy-v2.0%20—%20Hackathon%20Brain/20-ideas/seed-ideas.md) / [`scored-ideas.md`](../Synergy-v2.0%20—%20Hackathon%20Brain/20-ideas/scored-ideas.md)). We made those against *guessed* themes before kickoff. **None of them hit the actual 9 problem statements, and none dealt with the data-wall problem below.** Everything here is new, and each idea maps to a specific problem statement.
>
> **Status: nothing here is committed or picked.** This is the wide-exploration pool. Narrowing it down (scoring → lock → `/hackathon:scope`) is a separate step. The current *lead plan* (Tide reframed as a "ULO discount-gap" equity map, Theme 3 · PS1) is at the end, under "How these relate to the lead plan."

---

## The meta-finding (read this first)

The strongest new ideas hang on **live, dated 2026 Ontario events that nobody can fake**: the Brampton incinerator approval (Apr 2026), Toronto's June-1 apartment-cooling bylaw, the May-1 winter-disconnection-ban lift, the March-2025 ice storm, the 2024 Mississauga floods. This beats hardware as an originality path, and probably by a lot. A judge can't have seen it before (it's weeks old), ten other teams won't build it, and it fights **"AI-slop"** on its own because every claim points to a real, recent event you can check.

**Data honesty is non-negotiable. The rubric throws out "AI slop".** Four of the nine problem statements hit a **data wall**: the core dataset lives inside a utility and isn't public.

| Problem statement | The wall |
|---|---|
| T1 · PS2 (DER hosting capacity) | Feeder hosting capacity is utility-internal; OEB's capacity map is view-only and excludes DER. |
| T1 · PS3 (microgrid siting) | Granular outage history is not public (live maps only). |
| T2 · PS1 (outage prediction) | The outage-history *label* you'd train on is not public. |
| T2 · PS2 (asset vulnerability) | Pole/transformer/feeder locations + per-asset age are internal everywhere; only *aggregate* OEB filings are public. |

Ideas that target those four (tagged ⚠ below) use **public stand-ins, clearly labeled** (FSA demand-shape for feeder load, real disaster footprints for outage history, OEB aggregate filings plus synthetic assets we label as synthetic). We never fake the core data.

**Legend.** Feasibility = how realistic it is to build end-to-end in the ~60h video round (1 = hard, 5 = easy). Sponsor fit: Esri = makes a strong ArcGIS map/StoryMap/dashboard; Alectra = lands in their territory (Peel + Greater Golden Horseshoe, *not* Toronto) and their priorities (grid-edge, DER, EV/V2X, microgrids, community equity). ★ = the agent's lead pick for that theme.

---

## Theme 1 — Clean Energy Generation & Integration

| Idea | PS | Archetype | Feas | Sponsor |
|---|---|---|---|---|
| ★ The Curtailment Map (Spilled Sun) | PS1 | Tension-Reveal | 4 | Esri ↑ · Alectra ↑ |
| Schoolyard South | PS1 | Local-Detail | 4 | Esri ↑ · Alectra ↑ |
| ★ The Solar Curfew ⚠ | PS2 | Time-Reveal | 4 | Alectra ↑↑ |
| Permit-to-Panel ⚠ | PS2 | Live-Computation | 3 | Alectra ↑ |
| ★ 15,000 Households in the Dark ⚠ | PS3 | Embodied-Number | 4 | Esri ↑↑ · Alectra ↑ |
| The 72-Hour Test ⚠ | PS3 | Live-Interactive | 3 | Alectra ↑ |

**★ The Curtailment Map (Spilled Sun)** — *PS1 · Tension-Reveal*
- **Pitch:** Ontario *throws away* gigawatt-hours of clean power when supply beats demand at the wrong times and places. This map says build new solar/wind where it can chase *demand that isn't being met*, not where it piles onto a grid that's already in surplus.
- **Demo (10s):** The province glows green with renewable potential. A toggle flips to "but the grid's already full here" and most of southern Ontario goes red. Only high-demand Peel/GGH FSAs stay green. "Build *here*."
- **Data:** [IESO Hourly Consumption by FSA](https://www.ieso.ca/power-data/data-directory) (real, postal-level demand shape) + NRCan PV potential + [Global Wind Atlas](https://globalwindatlas.info) via Living Atlas + [IESO surplus-baseload data](https://eco.auditor.on.ca/blog/surplus-baseload-electricity-generation-in-ontario/). *Modeled (labeled):* a curtailment-risk rule of thumb.
- **Why it's new:** It flips every rooftop-potential tool (Project Sunroof, our own Rooftop Roll Call) by asking where the grid actually *wants* power. It's a demand-fit map, not a potential map.

**Schoolyard South** — *PS1 · Local-Detail*
- **Pitch:** Peel District School Board roofs and lots are big, flat, publicly owned, and empty at the exact hours summer demand peaks. Rank them as one coordinated solar fleet against the 2-6 PM AC-driven demand curve.
- **Demo (10s):** Every Peel school site fills with a footprint-sized solar texture. A counter spins up to "X MW / Y,000 homes." The summer demand curve overlays on top: these sites generate when ACs scream and classrooms sit empty.
- **Data:** [Brampton GeoHub footprints](https://geohub.brampton.ca/) + [Mississauga Open Data](https://opendata-mississauga.hub.arcgis.com/) + NRCan PV potential + IESO FSA summer-peak demand + Ontario school locations.
- **Why it's new:** One public landlord makes a real procurement story, not a homeowner calculator. It beats Project Sunroof/MyHEAT (residential) by being a deployable fleet timed to the curve.

**★ The Solar Curfew** ⚠ — *PS2 · Time-Reveal*
- **Pitch:** You can't get feeder hosting-capacity numbers, but a feeder's spare room *is* its load valley. Show which Peel neighbourhoods could host far more rooftop solar and EV if the panels ran on the schedule the demand curve wants.
- **Demo (10s):** Pick an FSA. Its real 24h demand curve draws. Solar (a bell curve) overlays and pushes *above* local demand at noon ("back-feed risk: this overloads the feeder"). A battery shifts the excess to the 6 PM ramp, and the FSA flips red to green. "Same panels. The feeder cares about *timing*."
- **Data:** [IESO FSA hourly consumption](https://www.ieso.ca/power-data/data-directory) (a legit public stand-in for feeder load shape) + NRCan PV hourly + [Mississauga planning hub](https://city-planning-data-hub-1-mississauga.hub.arcgis.com/). *Proxy (labeled):* FSA demand stands in for feeder load, and the tool is built to drop in a utility's real hosting-capacity layer.
- **Why it's new:** It gets around the hosting-capacity wall honestly by making *timing* (public) the story instead of *capacity* (private). Midday back-feed and overvoltage are Alectra's exact grid-edge pain, a different scale and problem than Tide's overnight billing shift.

**Permit-to-Panel** ⚠ — *PS2 · Live-Computation*
- **Pitch:** Brampton publishes live building permits. Mine them to spot where new construction (big roofs, EV-ready garages) clusters, so you plan DER capacity *with* the buildings instead of bolting it on after the feeder fills.
- **Demo (10s):** Permit dots rain down in date order across 2024-25, blooming in new subdivisions. A panel flags "L6P/L6R: 1,400 new homes on 2 feeders. Get ahead of the DER crunch now."
- **Data:** [Brampton Building Permits open dataset](https://geohub.brampton.ca/) (live, barely used as an energy signal) + GeoHub footprints/zoning + IESO FSA demand. *Forward-looking estimate (labeled).*
- **Why it's new:** It predicts *future* load growth from a permit feed nobody reads as energy data. That's planning foresight, not a map of today's rooftops. (Cleaning up the geocoding is the time risk.)

**★ 15,000 Households in the Dark** ⚠ — *PS3 · Embodied-Number*
- **Pitch:** There are no feeder outage logs, but we have the *real* 2024-25 disasters. Overlay the August-2024 Mississauga floods and the 2025 ice storm (which knocked out power to ~15,000 Brampton homes) on critical facilities, then rank which hospital/LTC/shelter most needs a solar+battery microgrid.
- **Demo (10s):** The Dixie-Dundas flood polygon floods in. The ice-storm outage zone overlays. Critical-facility pins inside *both* pulse red. "Trillium + 3 LTC homes + 2 cooling centres sat in a flood zone *and* an outage zone. Microgrid rank #1."
- **Data:** [StatCan ODHF healthcare facilities](https://www.statcan.gc.ca/en/lode/databases/odhf/metadata) + [Ontario LTC homes](https://data.ontario.ca/dataset/long-term-care-management-information-system) + city flood/event footprints + NRCan PV (sizing) + census vulnerability (Esri enrichment). *Proxy (labeled):* documented real 2024-25 event footprints stand in for the feeder outage history we can't get. They're real events, not synthetic. ([ice storm / 15k homes, CBC](https://www.cbc.ca/news/canada/toronto/doug-ford-to-visit-ontario-areas-electricity-loss-ice-storm-1.7501025); [Mississauga floods, The Pointer](https://thepointer.com/article/2025-04-18/tackling-the-climate-crisis-what-the-region-of-peel-needs-and-which-federal-party-can-deliver))
- **Why it's new:** No seed touches microgrid resilience, and overlaying real disaster footprints is a fresh, citation-backed way around the outage-data wall.

**The 72-Hour Test** ⚠ — *PS3 · Live-Interactive*
- **Pitch:** A stress test. Pick a critical facility, simulate a 72h grid-down event, and see whether its real-roof solar + battery keeps the lights, heat, and fridges on. Microgrid siting turned into a pass/fail anyone gets.
- **Demo (10s):** Select Brampton's all-electric, solar-roofed [Fire Station 215](https://www.renewcanada.net/city-of-brampton-breaks-ground-on-first-all-electric-fire-station/) (opens fall 2026). Hit "Cut the grid." A 72h clock runs, the battery drains and recharges each day, and an "all-electric, so heat dies too" warning flashes. Then: "+1 battery = survives."
- **Data:** NRCan PV (roof → generation) + ODHF/LTC + municipal facilities + footprints (roof area) + typical critical-load profiles. *Modeled (labeled):* battery dispatch across a synthetic 72h outage.
- **Why it's new:** It's a resilience *simulator*, not a map, and the Station 215 hook is real and dated. (The sim logic is the time sink. Mock the dispatch curve if you start slipping.)

---

## Theme 2 — Smart Grid, Resilience & Electrification

| Idea | PS | Archetype | Feas | Sponsor |
|---|---|---|---|---|
| Mutual Aid Map ⚠ | PS1 | Time-Reveal | 3 | Alectra ↑ |
| ★ Strike Window | PS1 | Local-Detail | 4 | Alectra ↑↑ |
| ★ Pole Census ⚠ | PS2 | Permission-Break | 4 | Esri ↑↑ · Alectra ↑↑ |
| First Forty | PS2 | Format-Inversion | 5 | Esri ↑ · Alectra ↑ |
| ★ The 25 Percent | PS3 | Tension-Reveal | 5 | Alectra ↑↑ |
| Backfeed | PS3 | Audience-Inversion | 3 | Alectra ↑↑↑ |

**★ Pole Census** ⚠ — *PS2 · Permission-Break · the agent's overall Theme-2 lead*
- **Pitch:** A vulnerability *screening* tool that ranks which neighbourhoods a utility should patrol first after a storm. It uses only public OEB filings and hazard layers, with asset locations clearly labeled synthetic.
- **Demo (10s):** Split screen. On the left, the March-30-2025 ice-storm freezing-rain band sweeps Peel. On the right, census blocks flip red in patrol-priority order while a counter ticks past "2,700 broken poles" (the real Hydro One number). "We can't see the poles. We can see where they'll break first."
- **Data:** [OEB Asset Condition Assessment 2022 filing](https://www.rds.oeb.ca/CMWebDrawer/Record/840044/File/document) (aggregate pole/transformer age) + Toronto tree-canopy + Peel vegetation + Env-Canada historical ice/wind + ArcGIS dwelling-age enrichment (a stand-in for install era). *Synthetic per-pole points matched to the public age curve, labeled synthetic on screen.*
- **Why it's new:** It names the data wall out loud and makes honesty the pitch (Permission-Break), instead of faking a per-asset map that mentors will smell. It's different from our Outage Equity Index (live scrape + equity). This one ranks priority *before* a storm, built from regulatory filings.

**Strike Window** — *PS1 · Local-Detail*
- **Pitch:** A forward-looking 72h *vegetation-strike* risk map: tree canopy × incoming wind forecast (the biggest preventable cause of outages).
- **Demo (10s):** Canopy-dense Peel streets. A wind front animates in. Street segments turn from amber to red where tall canopy meets forecast gusts. "Alectra spends $5M/yr cutting trees. This says which street to cut *this week*."
- **Data:** Toronto tree-canopy + Peel vegetation + [Env-Canada](https://weather.gc.ca/) / Living Atlas wind forecast + [Alectra's $5M vegetation program](https://alectrautilities.com/tree-trimming). Output = a risk index, with **no fabricated outage label**.
- **Why it's new:** It schedules preventive trimming against a named utility's real budget line, on fully public data, and it's different from the Outage Equity Index.

**First Forty** — *PS2 · Format-Inversion*
- **Pitch:** The honest version of the asset map. A public comparator of above-ground vs below-ground hazard that shows where burying lines actually pays off, with zero need for private inventory.
- **Demo (10s):** A toggle flips a Peel neighbourhood between "overhead" (red: wind+canopy+ice) and "underground" (amber: NRCan flood). "Burying lines isn't always safer. Here's where it is."
- **Data:** [NRCan flood layers](https://www.esri.com/arcgis-blog/products/arcgis-living-atlas/manufacturing/critical-knowledge-for-siting-facilities-two-flood-risk-layers-in-arcgis-living-atlas) (below-ground risk) + tree-canopy + Env-Canada wind/ice (above-ground) + ArcGIS dwelling-age. **All public.** This is the PS2 reframe made literal.
- **Why it's new:** It treats "vulnerability" as a *siting decision*, not a fake asset register. It's a pure ArcGIS overlay, and it complements Pole Census rather than repeating it.

**★ The 25 Percent** — *PS3 · Tension-Reveal · cleanest data in the theme*
- **Pitch:** Maps Mississauga's coming "charging cliff," FSA by FSA: EV ownership climbing inside high-rises that aren't required to add chargers until 2028.
- **Demo (10s):** Mississauga FSAs fill by EV count (real Q1-2026 data), and high-rise-dense FSAs pulse red. "19% of EV drivers live in apartments. Mississauga won't require chargers until 2028. They bought the car anyway."
- **Data:** [Ontario EV-by-FSA, Q1 2026 CSV](https://data.ontario.ca/dataset/electric-vehicles-in-ontario-by-forward-sortation-area) (real, Peel-covered, updated Mar 31 2026) + ArcGIS dwelling-type/density enrichment + Mississauga's 2028 EV-ready bylaw. *Feeder capacity = a labeled stretch sim only.*
- **Why it's new:** A mismatch between demand and infrastructure, baked into a real regulatory gap, on the theme's cleanest dataset. It's different from our Carbon-Aware EV Router (which routes cars). This one maps the MURB equity gap.

**Backfeed** — *PS3 · Audience-Inversion · highest sponsor resonance*
- **Pitch:** Flips "where do EVs strain the grid" into "where could parked EV fleets *feed* the grid during the next ice storm." A V2X resilience layer.
- **Demo (10s):** An ice storm hits Peel and substations brown out. Then EV-dense FSAs glow green as parked cars "discharge," holding a neighbourhood up. "2,700 poles broke in March. The backup batteries were sitting in driveways."
- **Data:** EV-by-FSA Q1-2026 (battery-fleet density) + ArcGIS critical-facility layer + [Alectra's own V2X pilot scope](https://natural-resources.canada.ca/funding-partnerships/alectra-v2x-pilot). *Dispatch math modeled (labeled).*
- **Why it's new:** No seed touches V2X as resilience. This *is* Hemingway + Carr's funded V2X/Centricity roadmap drawn as a map. (The dispatch sim is the build risk.)

**Mutual Aid Map** ⚠ — *PS1 · Time-Reveal*
- **Pitch:** It predicts *how long you wait*, not *if* you lose power. The wait for restoration is the real public pain, and news data reports it. The outage label isn't public, but the wait time is.
- **Demo (10s):** Post-storm Peel. Two identical houses light up, one "4 hrs" and one "3 days." "Same storm, same damage. The difference is who the crews reach last." (April 2025: 18 LDCs including Alectra ran mutual aid; [17,500 still dark a week later, CP24](https://www.cp24.com/news/2025/04/09/17500-customers-still-without-power-after-ontario-ice-storm-hydro-one/).)
- **Data:** Env-Canada weather + Living Atlas alerts (severity) + ArcGIS road-network/rurality/customer-density (a *modeled* stand-in for restoration order) + historical restoration timelines from news (calibration). **No fabricated outage label.**
- **Why it's new:** It swaps the prediction label we can't get for a *duration* label we can. (Calibration is the work.)

---

## Theme 3 — Community Energy, Equity & Sustainability

| Idea | PS | Archetype | Feas | Sponsor |
|---|---|---|---|---|
| ★ The Amenity Loophole | PS2 | Tension-Reveal | 5 | Esri ↑↑ (Toronto) |
| The Overnight Map | PS2 | Time-Reveal | 4 | Esri ↑↑ |
| Tree-Line / Red-Line | PS2/3 | Format-Inversion | 4 | Esri ↑ · Alectra ↑ |
| The 8-Month Bill Cliff | PS1 | Time-Reveal | 4 | Alectra ↑↑ |
| Rebate Redline | PS1 | Audience-Inversion | 5 | Alectra ↑ |
| Who Burns Electric? | PS1 | Embodied-Number | 5 | Alectra ↑↑ |
| ★ 446 | PS3 | Permission-Break | 4 | Esri ↑↑ · Alectra ↑↑ (Brampton) |

**★ The Amenity Loophole — "Where's the cool room?"** — *PS2 · Tension-Reveal · best impact-per-hour*
- **Pitch:** Toronto's new June-1-2026 cooling bylaw only makes landlords cool an *existing* amenity room. So map every RentSafeTO building with NO amenity space, the ones legally allowed to bake.
- **Demo (10s):** Split screen. On the left, the bylaw text highlights *"if they have one."* On the right, a Toronto map fills with red dots: "1,400 buildings, 0 cooling obligation." Zoom to one tower whose only "amenity" is a laundry room.
- **Data:** [RentSafeTO Apartment Building Registry](https://open.toronto.ca/) (building age, units, amenity fields) × [Toronto Heat Vulnerability Index](https://www.toronto.ca/) × Living Atlas renter%/low-income. *Proxy (labeled):* "no amenity space" is read off the registry fields. Spot-check ~10 buildings via Street View in the video. ([blogTO](https://www.blogto.com/city/2026/05/toronto-bylaw-apartment-air-conditioning/) · [City of Toronto rules](https://www.toronto.ca/community-people/housing-shelter/rental-housing-rights-information/housing-property-standards/indoor-temperatures-in-apartment-units/))
- **Why it's new:** It beats CUSP (which maps cost, not the *legal cooling gap*) and the official cooling-centre map (which maps where you *can* go, not the homes you can't cool). It points at the *building* instead of routing people out (unlike our Cool & Clean router). Caveat: this is Toronto, not Alectra turf. Offer a Peel sibling layer.

**★ 446 — The Brampton Incinerator You Weren't Asked About** — *PS3 · Permission-Break · highest ceiling*
- **Pitch:** In April 2026 Ontario approved Canada's largest waste incinerator in Bramalea, over **446** formal objections, in a neighbourhood already above safe pollution limits. Model the new emissions plume over the people who objected.
- **Demo (10s):** A counter ticks to **446** ("elevation requests, all overruled"). The EEFW site drops on Bramalea, a plume animates outward, and census data fills in beneath it: "68% racialized, household income below GTA median." Hold on one school inside the ring.
- **Data:** [NPRI](https://pollution-waste.canada.ca/) facility releases + capacity 182k→900k t/yr ([National Observer, May 2026](https://www.nationalobserver.com/2026/05/04/news/brampton-emerald-energy-waste-incinerator-approval)) + ArcGIS GeoEnrichment + [Canadian Index of Multiple Deprivation 2021](https://open.canada.ca/data/en/dataset/ec6dc8e7-2fa0-4e49-8969-38541ca0a34d) at DA level + [Region of Peel "above allowable levels" finding](https://thepointer.com/article/2025-04-14/unfair-to-expose-already-burdened-community-to-pollution-from-brampton-waste-incinerator-report). *Modeled (labeled):* the 6× emissions scale-up is a stated projection, not a measurement.
- **Why it's new:** It's not a province-wide screening (OntarioEnviroScreen) or a static polluter list. It's ONE just-approved facility, a live 2026 fight, in Alectra's Brampton territory, with the petition number (446) as the emotional spine. **Caveat:** it's adversarial. Frame it as community benefit and climate resilience (which line up with Alectra), not as a political attack. Alectra is *not* the proponent.

**The 8-Month Bill Cliff** — *PS1 · Time-Reveal*
- **Pitch:** Ontario's winter disconnection ban lifts April 30. Map the DAs where renters face the biggest spring arrears spike and have the *least* access to OESP/LEAP relief at the moment protection ends.
- **Demo (10s):** A calendar flips from Nov to Apr with a "protected" shield over the map. On May 1 the shield shatters and clusters flare red. "The ban ends. The bills don't."
- **Data:** [OEB winter disconnection ban](https://www.oeb.ca/newsroom/2025/winter-disconnection-ban) + [OESP/LEAP eligibility](https://www.oeb.ca/consumer-information-and-protection/bill-assistance-programs/low-income-energy-assistance-program) + StatCan income/tenure by DA + [CUSP energy-burden](https://energypoverty.communitydata.ca). *Modeled (labeled):* an arrears-risk score (burden × electric-heat% × renter%), since there's no public per-DA arrears feed.
- **Why it's new:** CUSP shows *average* burden. This shows the *calendar cliff*: a date, plus the relief-access denominator CUSP leaves out. The utilities that run LEAP can act on it directly.

**Rebate Redline** — *PS1 · Audience-Inversion*
- **Pitch:** Efficiency rebates leave tenants out by design. Map the GGH neighbourhoods that are majority-renter AND majority-low-income, the people locked out of every retrofit dollar.
- **Demo (10s):** A rebate form stamps "NOT ELIGIBLE: rental." The red ink bleeds onto a Mississauga/Brampton map and fills the renter-majority DAs. "$X in rebates. 0% reachable here."
- **Data:** StatCan tenure + LIM by DA + [Efficiency Canada low-income tenant brief](https://www.efficiencycanada.org/wp-content/uploads/2023/05/Energy-Efficiency-For-Low-Income-Tenants-Federal-Policy-Brief.pdf) + [Ecotrust tenant-retrofit report 2024](https://ecotrust.ca/latest/research/advancing-tenants-rights-to-retrofits-and-energy-efficiency-research-report/) + ArcGIS enrichment. **The eligibility rules are documented, not modeled.**
- **Why it's new:** It maps the *excluded* instead of the served, the split-incentive map nobody draws. It's a pure census join, so it's fast. Don't frame it as a rental "report card." That framing is already taken by [Policy Options 2024](https://policyoptions.irpp.org/2024/05/rental-unit-energy/) and overlaps our School Report Card.

**Who Burns Electric?** — *PS1 · Embodied-Number*
- **Pitch:** Renters in old electric-baseboard buildings carry Ontario's most volatile bills. Map the electric-primary-heat DAs against income to find who's most exposed to every winter rate hike.
- **Demo (10s):** Two identical towers. A rate-hike ticker runs: the gas-heated one barely moves, the electric-baseboard one rockets. The map fills with renter DAs on electric heat. "Same cold. Triple the bill."
- **Data:** StatCan Census "primary heating fuel" by DA (real, downloadable) + LIM + tenure + OEB rate schedules. **A direct census join, no proxy.**
- **Why it's new:** The new angle is *heating-fuel type* as the thing that multiplies the burden, which CUSP doesn't split on. It's not Tide/ULO (load-shift) and not a generic burden choropleth.

**The Overnight Map** — *PS2 · Time-Reveal*
- **Pitch:** Most Toronto/Peel cooling centres close by evening, but heat deaths happen indoors at night. Map the "midnight cooling deserts" with nowhere cool after 8 PM.
- **Demo (10s):** A clock spins to 8:00 PM and nearly every cooling-centre dot blinks OUT one by one. "The city's cooling network, at midnight." A few 24h dots remain, far from the red HVI zones.
- **Data:** [Toronto Heat Relief Network / cooling-centre open data](https://open.toronto.ca) (includes hours) + HVI + Peel equivalent + StatCan seniors-living-alone by DA. *Computed (labeled):* a "desert" = a night isochrone gap (ArcGIS Network Analyst).
- **Why it's new:** School of Cities maps *daytime* vulnerability. Nobody maps the gap in *when* you can get there (open isn't the same as open-when-it-kills). It goes after hours, not routing (unlike Cool & Clean).

**Tree-Line / Red-Line** — *PS2/PS3 · Format-Inversion*
- **Pitch:** Overlay tree-canopy cover on historical low-income/renter geography (Hamilton or Brampton). The hottest, barest blocks are the same ones starved of investment for decades. One slider shows heat = inequity.
- **Demo (10s):** Drag a single opacity slider from left to right: lush canopy fades into a land-surface-temperature layer that lines up *exactly* with the low-income DAs. "Same map. Different decade."
- **Data:** Municipal tree-canopy open data (Toronto and Hamilton publish it) + NRCan/Landsat land-surface temp + CIMD + tenure by DA. **The LST is measured by satellite and the canopy is municipal data. Both real.**
- **Why it's new:** It stacks canopy↔temperature↔income in a single gesture. It's not a heat router or a polluter list.

---

## Standouts (if we shortlisted four)

1. **446** (T3·PS3): highest ceiling. A live April-2026 fight *in Alectra's Brampton territory*. "446 petitions overruled" is a gut-punch of an embodied number, the NPRI and deprivation data are real, and it wins on Impact, Innovation, and emotional connection. Risk: it's adversarial and needs careful community-benefit framing.
2. **The Amenity Loophole** (T3·PS2): best impact-per-hour. One open dataset, a genuinely new legal wedge, feasibility 5, Esri 5. Weakness: it's Toronto, not Alectra turf (offer a Peel sibling).
3. **The Solar Curfew** (T1·PS2): cleverest engineering. It turns the hosting-capacity data wall into a *timing* story on public data, and back-feed/overvoltage is Alectra's exact grid-edge pain.
4. **The 25 Percent** (T2·PS3): safest strong build. The cleanest real data (EV-by-FSA), squarely in Mississauga/Alectra territory, feasibility 5.

## The strategic fork these expose

The real decision comes down to two paths. **A proven engine plus hardware** (the Tide discount-gap map: low build risk, but we concede some originality). Or **a live-2026-event GIS map** (446 or Amenity Loophole: higher originality and emotion, but built from zero in ~60h with no prototype). Tide takes the risk out of Technical Execution. The event-anchored maps win Innovation and Impact outright but carry build risk.

## How these relate to the lead plan

The current lead is **Tide reframed as a "ULO discount-gap" equity map (Theme 3 · PS1)**: a working IESO-data engine plus a neighbourhood map of who's locked out of Ontario's 10× overnight discount. Of the new ideas, three are alternative **T3·PS1** angles that *don't* need Tide (The 8-Month Bill Cliff, Rebate Redline, Who Burns Electric?), and the two highest-ceiling new ideas (446, Amenity Loophole) sit in **T3·PS3 / PS2**. So if we stay in Theme 3, the live contender set is: **Tide discount-gap (PS1, proven engine) vs. 446 (PS3, highest originality) vs. Amenity Loophole (PS2, fastest build).**

**Next step:** score this pool against the 5-axis rubric (Innovation · Impact · Technical · Presentation · Collaboration) to narrow it down fairly, then lock via `/hackathon:scope`. Nothing is committed yet.

---

## Sources

**Theme 1 / 2 hooks:** [IESO Reliability Outlook](https://ieso.ca/en/Sector-Participants/IESO-News/2025/09/IESO-Reliability-Outlook---Ontario-Electricity-System-Prepared-Through-March-2027) · [IESO FSA Consumption](https://www.ieso.ca/power-data/data-directory) · [Surplus baseload (ECO)](https://eco.auditor.on.ca/blog/surplus-baseload-electricity-generation-in-ontario/) · [Ice storm / 15k Brampton homes (CBC)](https://www.cbc.ca/news/canada/toronto/doug-ford-to-visit-ontario-areas-electricity-loss-ice-storm-1.7501025) · [17,500 still dark (CP24)](https://www.cp24.com/news/2025/04/09/17500-customers-still-without-power-after-ontario-ice-storm-hydro-one/) · [Mississauga twin floods (The Pointer)](https://thepointer.com/article/2025-04-18/tackling-the-climate-crisis-what-the-region-of-peel-needs-and-which-federal-party-can-deliver) · [Brampton Fire Station 215 (ReNew Canada)](https://www.renewcanada.net/city-of-brampton-breaks-ground-on-first-all-electric-fire-station/) · [OEB Asset Condition Assessment 2022](https://www.rds.oeb.ca/CMWebDrawer/Record/840044/File/document) · [Ontario EV-by-FSA Q1 2026](https://data.ontario.ca/dataset/electric-vehicles-in-ontario-by-forward-sortation-area) · [Alectra V2X pilot (NRCan)](https://natural-resources.canada.ca/funding-partnerships/alectra-v2x-pilot) · [Alectra tree-trimming](https://alectrautilities.com/tree-trimming) · [Brampton GeoHub](https://geohub.brampton.ca/) · [Mississauga Open Data](https://opendata-mississauga.hub.arcgis.com/) · [StatCan ODHF](https://www.statcan.gc.ca/en/lode/databases/odhf/metadata)

**Theme 3 hooks:** [Brampton incinerator approval (National Observer, May 2026)](https://www.nationalobserver.com/2026/05/04/news/brampton-emerald-energy-waste-incinerator-approval) · [Peel "above allowable levels" (The Pointer)](https://thepointer.com/article/2025-04-14/unfair-to-expose-already-burdened-community-to-pollution-from-brampton-waste-incinerator-report) · [Toronto AC bylaw June 2026 (blogTO)](https://www.blogto.com/city/2026/05/toronto-bylaw-apartment-air-conditioning/) · [City of Toronto indoor-temperature rules](https://www.toronto.ca/community-people/housing-shelter/rental-housing-rights-information/housing-property-standards/indoor-temperatures-in-apartment-units/) · [OEB winter disconnection ban](https://www.oeb.ca/newsroom/2025/winter-disconnection-ban) · [OEB LEAP](https://www.oeb.ca/consumer-information-and-protection/bill-assistance-programs/low-income-energy-assistance-program) · [CUSP Energy Poverty Explorer](https://energypoverty.communitydata.ca) · [CIMD 2021](https://open.canada.ca/data/en/dataset/ec6dc8e7-2fa0-4e49-8969-38541ca0a34d) · [Efficiency Canada tenant brief](https://www.efficiencycanada.org/wp-content/uploads/2023/05/Energy-Efficiency-For-Low-Income-Tenants-Federal-Policy-Brief.pdf) · [Ecotrust tenant-retrofit report](https://ecotrust.ca/latest/research/advancing-tenants-rights-to-retrofits-and-energy-efficiency-research-report/) · [CELA Ontario pollution-poverty mapping](https://cela.ca/ontario-2024-pollution-and-poverty-mapping/)

*Generated 2026-05-24 via deep research (3 parallel agents). Cross-reference: pre-kickoff seeds in [`Synergy-v2.0 — Hackathon Brain/20-ideas/`](../Synergy-v2.0%20—%20Hackathon%20Brain/20-ideas/seed-ideas.md); challenge text in [`themes.md`](themes.md); archetypes in [`uniqueness-principles.md`](uniqueness-principles.md).*
