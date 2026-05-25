# Post-kickoff idea catalog — 19 new candidates across all 9 challenge sets

> **What this is.** A fresh sweep of project ideas generated **2026-05-24**, *after* the May-24 kickoff revealed the real challenge set ([senecahackathon.com/challenges](https://www.senecahackathon.com/challenges)). Method: deep web research + three parallel research agents (one per theme), each told to avoid our pre-kickoff seeds, dodge the data traps, and ground every idea in verified Ontario data + a [pattern-break archetype](uniqueness-principles.md).
>
> **How it relates to what we already had.** Our original 18 seeds + 3 parked live in `Synergy-v2.0 — Hackathon Brain/20-ideas/` ([`seed-ideas.md`](../Synergy-v2.0%20—%20Hackathon%20Brain/20-ideas/seed-ideas.md) / [`scored-ideas.md`](../Synergy-v2.0%20—%20Hackathon%20Brain/20-ideas/scored-ideas.md)). Those were generated against *assumed* themes before kickoff. **None of them targeted the actual 9 problem statements, and none accounted for the data-wall reality below.** Everything here is new and maps to a specific problem statement.
>
> **Status: nothing here is committed or picked.** This is the divergent-exploration pool. Convergence (scoring → lock → `/hackathon:scope`) is a separate step. The current *lead plan* (Tide reframed as a "ULO discount-gap" equity map, Theme 3 · PS1) is described at the end under "How these relate to the lead plan."

---

## The meta-finding (read this first)

The strongest new ideas hang on **live, dated, un-rebuildable 2026 Ontario events** — the Brampton incinerator approval (Apr 2026), Toronto's June-1 apartment-cooling bylaw, the May-1 winter-disconnection-ban lift, the March-2025 ice storm, the 2024 Mississauga floods. This is a **different and arguably stronger originality path than hardware**: a judge can't have seen it before (it's weeks old), ten other teams won't build it, and it's inherently **anti-"AI-slop"** because every claim cites a real, recent, verifiable event.

**Data honesty (non-negotiable — the rubric disqualifies "AI slop").** Four of the nine problem statements have a **data wall**: the core dataset is utility-internal and not public.

| Problem statement | The wall |
|---|---|
| T1 · PS2 (DER hosting capacity) | Feeder hosting capacity is utility-internal; OEB's capacity map is view-only and excludes DER. |
| T1 · PS3 (microgrid siting) | Granular outage history is not public (live maps only). |
| T2 · PS1 (outage prediction) | The outage-history *label* you'd train on is not public. |
| T2 · PS2 (asset vulnerability) | Pole/transformer/feeder locations + per-asset age are internal everywhere; only *aggregate* OEB filings are public. |

Ideas targeting those four (tagged ⚠ below) use **public proxies, clearly labeled** (FSA demand-shape for feeder load, real disaster footprints for outage history, OEB aggregate filings + synthetic-but-labeled assets) — never faked core data.

**Legend.** Feasibility = realistic end-to-end build in the ~60h video round (1 = hard, 5 = easy). Sponsor fit: Esri = makes a compelling ArcGIS map/StoryMap/dashboard; Alectra = lands in their territory (Peel + Greater Golden Horseshoe — *not* Toronto) and priorities (grid-edge, DER, EV/V2X, microgrids, community equity). ★ = agent's lead pick for that theme.

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
- **Pitch:** Ontario *throws away* gigawatt-hours of clean power when supply outruns demand at the wrong hours/places; this map says build new solar/wind where it chases *unmet local demand*, not where it piles onto an already-surplus grid.
- **Demo (10s):** Province glows green with renewable potential; a toggle flips to "but the grid's already full here" → most of southern Ontario goes red, only high-demand Peel/GGH FSAs stay green. "Build *here*."
- **Data:** [IESO Hourly Consumption by FSA](https://www.ieso.ca/power-data/data-directory) (real, postal-level demand shape) + NRCan PV potential + [Global Wind Atlas](https://globalwindatlas.info) via Living Atlas + [IESO surplus-baseload data](https://eco.auditor.on.ca/blog/surplus-baseload-electricity-generation-in-ontario/). *Modeled (labeled):* curtailment-risk heuristic.
- **Why it's new:** Inverts every rooftop-potential tool (Project Sunroof, our own Rooftop Roll Call) by asking where the grid actually *wants* generation. Not a potential map — a demand-fit map.

**Schoolyard South** — *PS1 · Local-Detail*
- **Pitch:** Peel District School Board roofs + lots are huge, flat, publicly owned, and empty exactly when summer demand peaks — rank them as one coordinated solar fleet against the 2–6 PM AC-driven demand curve.
- **Demo (10s):** Every Peel school site fills with a footprint-sized solar texture; a counter spins to "X MW / Y,000 homes"; the summer demand curve overlays — they generate when ACs scream and classrooms sit empty.
- **Data:** [Brampton GeoHub footprints](https://geohub.brampton.ca/) + [Mississauga Open Data](https://opendata-mississauga.hub.arcgis.com/) + NRCan PV potential + IESO FSA summer-peak demand + Ontario school locations.
- **Why it's new:** One public landlord = a real procurement story, not a homeowner calculator. Beats Project Sunroof/MyHEAT (residential) by being a deployable fleet timed to the curve.

**★ The Solar Curfew** ⚠ — *PS2 · Time-Reveal*
- **Pitch:** You can't get feeder hosting-capacity numbers — but a feeder's spare headroom *is* its load valley. Show which Peel neighbourhoods could host far more rooftop solar + EV if the panels behaved as the demand curve demands.
- **Demo (10s):** Pick an FSA; its real 24h demand curve draws; solar (bell curve) overlays and punches *above* local demand at noon ("back-feed risk — this overloads the feeder"); a battery shifts the excess to the 6 PM ramp; the FSA flips red→green. "Same panels. The feeder cares about *timing*."
- **Data:** [IESO FSA hourly consumption](https://www.ieso.ca/power-data/data-directory) (legit public proxy for feeder load shape) + NRCan PV hourly + [Mississauga planning hub](https://city-planning-data-hub-1-mississauga.hub.arcgis.com/). *Proxy (labeled):* FSA demand stands in for feeder load; tool designed to drop in a utility's real hosting-capacity layer.
- **Why it's new:** Sidesteps the hosting-capacity wall honestly by making *timing* (public) the story, not *capacity* (private). Midday back-feed/overvoltage is Alectra's exact grid-edge pain — different scale/problem than Tide's overnight billing shift.

**Permit-to-Panel** ⚠ — *PS2 · Live-Computation*
- **Pitch:** Brampton publishes live building permits — mine them to spot where new construction (big roofs, EV-ready garages) clusters, so DER capacity is planned *with* the buildings, not bolted on after the feeder fills.
- **Demo (10s):** Permit dots rain down chronologically over 2024–25, blooming in new subdivisions; a panel flags "L6P/L6R: 1,400 new homes on 2 feeders — pre-empt the DER crunch now."
- **Data:** [Brampton Building Permits open dataset](https://geohub.brampton.ca/) (live, underused as an energy signal) + GeoHub footprints/zoning + IESO FSA demand. *Forward-looking estimate (labeled).*
- **Why it's new:** Predicts *future* load growth from a permit feed nobody reads as energy data — planning foresight, not a present-rooftop map. (Geocoding cleanup is the time risk.)

**★ 15,000 Households in the Dark** ⚠ — *PS3 · Embodied-Number*
- **Pitch:** No feeder outage logs — but we have the *real* 2024–25 disasters. Overlay the August-2024 Mississauga floods + the 2025 ice storm (which blacked out ~15,000 Brampton homes) on critical facilities to rank which hospital/LTC/shelter most needs a solar+battery microgrid.
- **Demo (10s):** The Dixie-Dundas flood polygon floods in; the ice-storm outage zone overlays; critical-facility pins inside *both* pulse red — "Trillium + 3 LTC homes + 2 cooling centres sat in a flood zone *and* an outage zone. Microgrid rank #1."
- **Data:** [StatCan ODHF healthcare facilities](https://www.statcan.gc.ca/en/lode/databases/odhf/metadata) + [Ontario LTC homes](https://data.ontario.ca/dataset/long-term-care-management-information-system) + city flood/event footprints + NRCan PV (sizing) + census vulnerability (Esri enrichment). *Proxy (labeled):* documented real 2024–25 event footprints stand in for unavailable feeder outage history — real events, not synthetic. ([ice storm / 15k homes — CBC](https://www.cbc.ca/news/canada/toronto/doug-ford-to-visit-ontario-areas-electricity-loss-ice-storm-1.7501025); [Mississauga floods — The Pointer](https://thepointer.com/article/2025-04-18/tackling-the-climate-crisis-what-the-region-of-peel-needs-and-which-federal-party-can-deliver))
- **Why it's new:** No seed touches microgrid resilience; real-disaster-footprint overlay is a fresh, citation-anchored method around the outage-data wall.

**The 72-Hour Test** ⚠ — *PS3 · Live-Interactive*
- **Pitch:** A stress-test: pick a critical facility, simulate a 72h grid-down event, see whether its real-roof solar + battery keeps lights/heat/fridges on. Microgrid siting as a pass/fail anyone understands.
- **Demo (10s):** Select Brampton's all-electric, solar-roofed [Fire Station 215](https://www.renewcanada.net/city-of-brampton-breaks-ground-on-first-all-electric-fire-station/) (opens fall 2026); hit "Cut the grid"; a 72h clock runs, battery drains/recharges daily, an "all-electric, so heat dies too" warning flashes → "+1 battery = survives."
- **Data:** NRCan PV (roof → generation) + ODHF/LTC + municipal facilities + footprints (roof area) + typical critical-load profiles. *Modeled (labeled):* battery dispatch over a synthetic 72h outage.
- **Why it's new:** A resilience *simulator*, not a map; the Station 215 hook is real and dated. (Sim logic is the time sink — mock the dispatch curve if slipping.)

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
- **Pitch:** A vulnerability *screening* tool that ranks which neighbourhoods a utility should patrol first after a storm — using only public OEB filings + hazard layers, with asset locations clearly labeled synthetic.
- **Demo (10s):** Split screen — left, the March-30-2025 ice-storm freezing-rain band sweeps Peel; right, census blocks flip red in patrol-priority order, a counter ticks past "2,700 broken poles" (the real Hydro One number). "We can't see the poles. We can see where they'll break first."
- **Data:** [OEB Asset Condition Assessment 2022 filing](https://www.rds.oeb.ca/CMWebDrawer/Record/840044/File/document) (aggregate pole/transformer age) + Toronto tree-canopy + Peel vegetation + Env-Canada historical ice/wind + ArcGIS dwelling-age enrichment (install-era proxy). *Synthetic per-pole points matched to the public age curve — labeled synthetic on screen.*
- **Why it's new:** Names the data wall out loud and turns honesty into the pitch (Permission-Break), instead of faking a per-asset map mentors will smell. Distinct from our Outage Equity Index (live scrape + equity); this is a *pre-storm* prioritizer from regulatory filings.

**Strike Window** — *PS1 · Local-Detail*
- **Pitch:** A forward-looking 72h *vegetation-strike* risk map = tree canopy × incoming wind forecast (the biggest preventable outage cause).
- **Demo (10s):** Canopy-dense Peel streets; a wind front animates in; street segments turn amber→red where tall canopy meets forecast gusts. "Alectra spends $5M/yr cutting trees — this says which street to cut *this week*."
- **Data:** Toronto tree-canopy + Peel vegetation + [Env-Canada](https://weather.gc.ca/) / Living Atlas wind forecast + [Alectra's $5M vegetation program](https://alectrautilities.com/tree-trimming). Output = a risk index, **no fabricated outage label**.
- **Why it's new:** Preventive trim-scheduling tied to a named utility's real budget line — fully public data, distinct from the Outage Equity Index.

**First Forty** — *PS2 · Format-Inversion*
- **Pitch:** The honest version of the asset map — a public above-vs-below-ground hazard comparator showing where burying lines actually pays off, needing zero private inventory.
- **Demo (10s):** A toggle flips a Peel neighbourhood between "overhead" (red: wind+canopy+ice) and "underground" (amber: NRCan flood). "Burying lines isn't always safer. Here's where it is."
- **Data:** [NRCan flood layers](https://www.esri.com/arcgis-blog/products/arcgis-living-atlas/manufacturing/critical-knowledge-for-siting-facilities-two-flood-risk-layers-in-arcgis-living-atlas) (below-ground risk) + tree-canopy + Env-Canada wind/ice (above-ground) + ArcGIS dwelling-age. **All public.** This is the PS2 reframe made literal.
- **Why it's new:** Reframes "vulnerability" as a *siting decision*, not a fake asset register; pure ArcGIS overlay; complements (doesn't duplicate) Pole Census.

**★ The 25 Percent** — *PS3 · Tension-Reveal · cleanest data in the theme*
- **Pitch:** Maps Mississauga's coming "charging cliff" — EV ownership climbing inside high-rises that aren't required to add chargers until 2028, FSA by FSA.
- **Demo (10s):** Mississauga FSAs fill by EV count (real Q1-2026 data); high-rise-dense FSAs pulse red. "19% of EV drivers live in apartments. Mississauga won't require chargers until 2028. They bought the car anyway."
- **Data:** [Ontario EV-by-FSA, Q1 2026 CSV](https://data.ontario.ca/dataset/electric-vehicles-in-ontario-by-forward-sortation-area) (real, Peel-covered, updated Mar 31 2026) + ArcGIS dwelling-type/density enrichment + Mississauga's 2028 EV-ready bylaw. *Feeder capacity = labeled stretch sim only.*
- **Why it's new:** A demand–infrastructure mismatch baked into a real regulatory gap; uses the theme's cleanest dataset. Distinct from our Carbon-Aware EV Router (routes cars) — this maps the MURB equity gap.

**Backfeed** — *PS3 · Audience-Inversion · highest sponsor resonance*
- **Pitch:** Flips "where do EVs strain the grid" into "where could parked EV fleets *feed* the grid during the next ice storm" — a V2X resilience layer.
- **Demo (10s):** Ice storm hits Peel; substations brown out; then EV-dense FSAs glow green as parked cars "discharge," holding a neighbourhood up. "2,700 poles broke in March. The backup batteries were sitting in driveways."
- **Data:** EV-by-FSA Q1-2026 (battery-fleet density) + ArcGIS critical-facility layer + [Alectra's own V2X pilot scope](https://natural-resources.canada.ca/funding-partnerships/alectra-v2x-pilot). *Dispatch math modeled (labeled).*
- **Why it's new:** No seed touches V2X-as-resilience; this *is* Hemingway + Carr's funded V2X/Centricity roadmap rendered as a map. (Dispatch sim is the build risk.)

**Mutual Aid Map** ⚠ — *PS1 · Time-Reveal*
- **Pitch:** Predicts not *if* you lose power but *how long you wait* — restoration latency is the real public pain, and news data reports it (the outage label isn't public, the wait time is).
- **Demo (10s):** Post-storm Peel; two identical houses light up "4 hrs" vs "3 days." "Same storm, same damage. The difference is who the crews reach last." (April 2025: 18 LDCs incl. Alectra ran mutual aid; [17,500 still dark a week later — CP24](https://www.cp24.com/news/2025/04/09/17500-customers-still-without-power-after-ontario-ice-storm-hydro-one/).)
- **Data:** Env-Canada weather + Living Atlas alerts (severity) + ArcGIS road-network/rurality/customer-density (restoration-order proxy, *modeled*) + historical restoration timelines from news (calibration). **No fabricated outage label.**
- **Why it's new:** Reframes the un-gettable prediction label as a gettable *duration* label. (Calibration is the work.)

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
- **Pitch:** Toronto's new June-1-2026 cooling bylaw only forces landlords to cool an *existing* amenity room — so map every RentSafeTO building with NO amenity space, legally allowed to bake.
- **Demo (10s):** Split screen — left, the bylaw text highlighting *"if they have one"*; right, a Toronto map fills with red dots: "1,400 buildings, 0 cooling obligation." Zoom to one tower; its only "amenity" is a laundry room.
- **Data:** [RentSafeTO Apartment Building Registry](https://open.toronto.ca/) (building age, units, amenity fields) × [Toronto Heat Vulnerability Index](https://www.toronto.ca/) × Living Atlas renter%/low-income. *Proxy (labeled):* "no amenity space" inferred from registry fields — spot-check ~10 buildings via Street View in the video. ([blogTO](https://www.blogto.com/city/2026/05/toronto-bylaw-apartment-air-conditioning/) · [City of Toronto rules](https://www.toronto.ca/community-people/housing-shelter/rental-housing-rights-information/housing-property-standards/indoor-temperatures-in-apartment-units/))
- **Why it's new:** Beats CUSP (maps cost, not the *legal cooling gap*) and the official cooling-centre map (maps where you *can* go, not the homes you can't cool). Indicts the *building*, not routes people out (vs our Cool & Clean router). Caveat: Toronto, not Alectra turf — offer a Peel sibling layer.

**★ 446 — The Brampton Incinerator You Weren't Asked About** — *PS3 · Permission-Break · highest ceiling*
- **Pitch:** In April 2026 Ontario approved Canada's largest waste incinerator in Bramalea — over **446** formal objections — in a neighbourhood already above safe pollution limits; model the new emissions plume over the people who objected.
- **Demo (10s):** A counter ticks to **446** ("elevation requests, all overruled"); the EEFW site drops on Bramalea; a plume animates outward; census fills in beneath — "68% racialized, household income below GTA median." Hold on one school inside the ring.
- **Data:** [NPRI](https://pollution-waste.canada.ca/) facility releases + capacity 182k→900k t/yr ([National Observer, May 2026](https://www.nationalobserver.com/2026/05/04/news/brampton-emerald-energy-waste-incinerator-approval)) + ArcGIS GeoEnrichment + [Canadian Index of Multiple Deprivation 2021](https://open.canada.ca/data/en/dataset/ec6dc8e7-2fa0-4e49-8969-38541ca0a34d) at DA level + [Region of Peel "above allowable levels" finding](https://thepointer.com/article/2025-04-14/unfair-to-expose-already-burdened-community-to-pollution-from-brampton-waste-incinerator-report). *Modeled (labeled):* 6× emissions scale-up is a stated projection, not measured.
- **Why it's new:** Not a province-wide screening (OntarioEnviroScreen) or static polluter list — ONE just-approved facility, a live 2026 fight, in Alectra's Brampton territory, with the petition number (446) as the emotional spine. **Caveat:** adversarial — frame as community-benefit/climate-resilience (Alectra-aligned), not a political attack; Alectra is *not* the proponent.

**The 8-Month Bill Cliff** — *PS1 · Time-Reveal*
- **Pitch:** Ontario's winter disconnection ban lifts April 30 — map the DAs where renters carry the biggest spring arrears spike and have the *least* access to OESP/LEAP relief, the moment protection ends.
- **Demo (10s):** A calendar flips Nov→Apr with a "protected" shield over the map; on May 1 the shield shatters and clusters flare red. "The ban ends; the bills don't."
- **Data:** [OEB winter disconnection ban](https://www.oeb.ca/newsroom/2025/winter-disconnection-ban) + [OESP/LEAP eligibility](https://www.oeb.ca/consumer-information-and-protection/bill-assistance-programs/low-income-energy-assistance-program) + StatCan income/tenure by DA + [CUSP energy-burden](https://energypoverty.communitydata.ca). *Modeled (labeled):* arrears-risk composite (burden × electric-heat% × renter%) — no public per-DA arrears feed.
- **Why it's new:** CUSP shows *average* burden; this shows the *calendar cliff* — a date, plus a relief-access denominator CUSP omits. Directly actionable for the utilities that administer LEAP.

**Rebate Redline** — *PS1 · Audience-Inversion*
- **Pitch:** Efficiency rebates exclude tenants by design — map the GGH neighbourhoods that are majority-renter AND majority-low-income, i.e. the people structurally locked out of every retrofit dollar.
- **Demo (10s):** A rebate form stamps "NOT ELIGIBLE — rental"; the red ink bleeds onto a Mississauga/Brampton map, filling the renter-majority DAs. "$X in rebates. 0% reachable here."
- **Data:** StatCan tenure + LIM by DA + [Efficiency Canada low-income tenant brief](https://www.efficiencycanada.org/wp-content/uploads/2023/05/Energy-Efficiency-For-Low-Income-Tenants-Federal-Policy-Brief.pdf) + [Ecotrust tenant-retrofit report 2024](https://ecotrust.ca/latest/research/advancing-tenants-rights-to-retrofits-and-energy-efficiency-research-report/) + ArcGIS enrichment. **Structural eligibility rules — documented, not modeled.**
- **Why it's new:** Maps the *excluded*, not the served — the split-incentive map nobody draws. Pure census join (fast). NOT a rental "report card" (avoid that framing — already proposed in [Policy Options 2024](https://policyoptions.irpp.org/2024/05/rental-unit-energy/) and overlaps our School Report Card).

**Who Burns Electric?** — *PS1 · Embodied-Number*
- **Pitch:** Renters in old electric-baseboard buildings carry Ontario's most volatile bills — map electric-primary-heat DAs against income to find who's most exposed to every winter rate hike.
- **Demo (10s):** Two identical towers; a rate-hike ticker runs — the gas-heated one barely moves, the electric-baseboard one rockets. The map fills with renter DAs on electric heat. "Same cold. Triple the bill."
- **Data:** StatCan Census "primary heating fuel" by DA (real, downloadable) + LIM + tenure + OEB rate schedules. **Direct census join — no proxy.**
- **Why it's new:** The novel axis is *heating-fuel type* as the equity multiplier — which CUSP doesn't split on. Not Tide/ULO (load-shift) and not a generic burden choropleth.

**The Overnight Map** — *PS2 · Time-Reveal*
- **Pitch:** Most Toronto/Peel cooling centres close by evening — but heat deaths happen indoors at night; map the "midnight cooling deserts" with nowhere cool after 8 PM.
- **Demo (10s):** A clock spins to 8:00 PM; nearly every cooling-centre dot blinks OUT one by one — "the city's cooling network, at midnight." A few 24h dots remain, far from the red HVI zones.
- **Data:** [Toronto Heat Relief Network / cooling-centre open data](https://open.toronto.ca) (includes hours) + HVI + Peel equivalent + StatCan seniors-living-alone by DA. *Computed (labeled):* "desert" = night isochrone gap (ArcGIS Network Analyst).
- **Why it's new:** School of Cities maps *daytime* vulnerability; nobody maps the *temporal* access gap (open ≠ open-when-it-kills). Attacks hours, not routing (vs Cool & Clean).

**Tree-Line / Red-Line** — *PS2/PS3 · Format-Inversion*
- **Pitch:** Overlay tree-canopy cover on historical low-income/renter geography (Hamilton or Brampton) — the hottest, barest blocks are the same ones disinvested for decades; one slider reveals heat = inequity.
- **Demo (10s):** A single opacity slider drags left→right: lush canopy fades to a land-surface-temperature layer that lines up *exactly* with the low-income DAs. "Same map. Different decade."
- **Data:** Municipal tree-canopy open data (Toronto/Hamilton publish it) + NRCan/Landsat land-surface temp + CIMD + tenure by DA. **LST measured (satellite); canopy municipal — both real.**
- **Why it's new:** The canopy↔temperature↔income triple-overlay as a single gesture — not a heat router or polluter list.

---

## Standouts (if we shortlisted four)

1. **446** (T3·PS3) — highest ceiling. Live April-2026 fight *in Alectra's Brampton territory*; "446 petitions overruled" is a devastating embodied number; real NPRI + deprivation data; wins Impact + Innovation + emotional connection. Risk: adversarial — needs careful community-benefit framing.
2. **The Amenity Loophole** (T3·PS2) — best impact-per-hour. One open dataset, a genuinely novel legal wedge, feasibility 5, Esri 5. Weakness: Toronto, not Alectra turf (offer a Peel sibling).
3. **The Solar Curfew** (T1·PS2) — cleverest engineering. Turns the hosting-capacity data wall into a *timing* story (public data); back-feed/overvoltage is Alectra's exact grid-edge pain.
4. **The 25 Percent** (T2·PS3) — safest strong build. Cleanest real data (EV-by-FSA), squarely in Mississauga/Alectra territory, feasibility 5.

## The strategic fork these expose

The real decision axis: **proven-engine + hardware (Tide discount-gap map, low build risk, conceded originality) vs. live-2026-event GIS map (446 / Amenity Loophole — higher originality + emotion, but built from zero in ~60h with no prototype).** Tide de-risks Technical Execution; the event-anchored maps win Innovation + Impact outright but carry build risk.

## How these relate to the lead plan

The current lead is **Tide reframed as a "ULO discount-gap" equity map (Theme 3 · PS1)** — a working IESO-data engine + a neighbourhood map of who's locked out of Ontario's 10× overnight discount. Of the new ideas, three are alternative **T3·PS1** angles that *don't* need Tide (The 8-Month Bill Cliff, Rebate Redline, Who Burns Electric?), and the two highest-ceiling new ideas (446, Amenity Loophole) sit in **T3·PS3 / PS2**. So if we stay in Theme 3, the live contender set is: **Tide discount-gap (PS1, proven engine) vs. 446 (PS3, highest originality) vs. Amenity Loophole (PS2, fastest build).**

**Next step:** score this pool against the 5-axis rubric (Innovation · Impact · Technical · Presentation · Collaboration) to narrow objectively, then lock via `/hackathon:scope`. Nothing is committed yet.

---

## Sources

**Theme 1 / 2 hooks** — [IESO Reliability Outlook](https://ieso.ca/en/Sector-Participants/IESO-News/2025/09/IESO-Reliability-Outlook---Ontario-Electricity-System-Prepared-Through-March-2027) · [IESO FSA Consumption](https://www.ieso.ca/power-data/data-directory) · [Surplus baseload (ECO)](https://eco.auditor.on.ca/blog/surplus-baseload-electricity-generation-in-ontario/) · [Ice storm / 15k Brampton homes (CBC)](https://www.cbc.ca/news/canada/toronto/doug-ford-to-visit-ontario-areas-electricity-loss-ice-storm-1.7501025) · [17,500 still dark (CP24)](https://www.cp24.com/news/2025/04/09/17500-customers-still-without-power-after-ontario-ice-storm-hydro-one/) · [Mississauga twin floods (The Pointer)](https://thepointer.com/article/2025-04-18/tackling-the-climate-crisis-what-the-region-of-peel-needs-and-which-federal-party-can-deliver) · [Brampton Fire Station 215 (ReNew Canada)](https://www.renewcanada.net/city-of-brampton-breaks-ground-on-first-all-electric-fire-station/) · [OEB Asset Condition Assessment 2022](https://www.rds.oeb.ca/CMWebDrawer/Record/840044/File/document) · [Ontario EV-by-FSA Q1 2026](https://data.ontario.ca/dataset/electric-vehicles-in-ontario-by-forward-sortation-area) · [Alectra V2X pilot (NRCan)](https://natural-resources.canada.ca/funding-partnerships/alectra-v2x-pilot) · [Alectra tree-trimming](https://alectrautilities.com/tree-trimming) · [Brampton GeoHub](https://geohub.brampton.ca/) · [Mississauga Open Data](https://opendata-mississauga.hub.arcgis.com/) · [StatCan ODHF](https://www.statcan.gc.ca/en/lode/databases/odhf/metadata)

**Theme 3 hooks** — [Brampton incinerator approval (National Observer, May 2026)](https://www.nationalobserver.com/2026/05/04/news/brampton-emerald-energy-waste-incinerator-approval) · [Peel "above allowable levels" (The Pointer)](https://thepointer.com/article/2025-04-14/unfair-to-expose-already-burdened-community-to-pollution-from-brampton-waste-incinerator-report) · [Toronto AC bylaw June 2026 (blogTO)](https://www.blogto.com/city/2026/05/toronto-bylaw-apartment-air-conditioning/) · [City of Toronto indoor-temperature rules](https://www.toronto.ca/community-people/housing-shelter/rental-housing-rights-information/housing-property-standards/indoor-temperatures-in-apartment-units/) · [OEB winter disconnection ban](https://www.oeb.ca/newsroom/2025/winter-disconnection-ban) · [OEB LEAP](https://www.oeb.ca/consumer-information-and-protection/bill-assistance-programs/low-income-energy-assistance-program) · [CUSP Energy Poverty Explorer](https://energypoverty.communitydata.ca) · [CIMD 2021](https://open.canada.ca/data/en/dataset/ec6dc8e7-2fa0-4e49-8969-38541ca0a34d) · [Efficiency Canada tenant brief](https://www.efficiencycanada.org/wp-content/uploads/2023/05/Energy-Efficiency-For-Low-Income-Tenants-Federal-Policy-Brief.pdf) · [Ecotrust tenant-retrofit report](https://ecotrust.ca/latest/research/advancing-tenants-rights-to-retrofits-and-energy-efficiency-research-report/) · [CELA Ontario pollution-poverty mapping](https://cela.ca/ontario-2024-pollution-and-poverty-mapping/)

*Generated 2026-05-24 via deep research (3 parallel agents). Cross-reference: pre-kickoff seeds in [`Synergy-v2.0 — Hackathon Brain/20-ideas/`](../Synergy-v2.0%20—%20Hackathon%20Brain/20-ideas/seed-ideas.md); challenge text in [`themes.md`](themes.md); archetypes in [`uniqueness-principles.md`](uniqueness-principles.md).*
