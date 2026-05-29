# 02 · Project context and brief

> Sanctuary finale prep. Front door: [`README.md`](README.md). The code lives in [`03-code-explained.md`](03-code-explained.md). The questions live in [`04-judge-faq.md`](04-judge-faq.md) and [`05-hard-questions.md`](05-hard-questions.md).

Read this to understand the project cold: concept, place, data, scoring, multi-hazard, honesty, evidence, funding, users, and roadmap.

---

## 0. The 60-second orientation

| | |
|---|---|
| **Project** | **Sanctuary**, by team Synergy |
| **One sentence** | Sanctuary ranks trusted Peel buildings (libraries, recreation centres, gurdwaras, mosques, mandirs, churches) as candidate solar-and-battery resilience hubs, so planners know which to harden first before the next heat wave or outage. |
| **The decision it answers** | *"If Peel can harden only five trusted buildings first, which five should be investigated first?"* |
| **Hero building** | **Malton Community Centre and Library**, 3540 Morning Star Drive, Mississauga. HVI quintile 5 (verified). Score 91 of 100. |
| **The line they remember** | *"The safest building isn't the nearest building. It's the one people already trust, inside the heat-risk zone."* |
| **Event** | Seneca Energy Hackathon 2026 ("The Energy to Innovate"). Theme 3, Problem Statement 2. |
| **Status** | Finalist. Live demo May 30, 2026, HELIX Main Stage, Seneca Newnham (1750 Finch Ave East, Toronto). |
| **Judged artifact** | An ArcGIS StoryMap and web map, demoed in a 5-minute video. The Next.js site is a support showcase and clickable backup. |
| **Live support site** | https://project-sanctuary-seneca.vercel.app |
| **The moat** | Radical honesty. Every number is verified, modelled, or pending, on screen. The rubric says "AI slop disqualifies." Our discipline is the differentiator. |

---

## 1. Event, theme, rubric, sponsors, team

### The event
- **Seneca Energy Hackathon 2026**, theme "The Energy to Innovate." A Seneca College internal event.
- **Format:** hybrid. Qualifier video due May 26, finalists revealed May 28, in-person finale May 30.
- **Phase 1 (virtual build):** May 24 to 28. **Phase 2 (in-person):** May 29 to 30, finale at HELIX, Newnham Campus.
- **Contact:** hackathon@senecapolytechnic.ca.

### Theme 3, Problem Statement 2 (our fit)
Climate resilience, vulnerable populations, and shelter access. The official problem shape:
- heatwaves and flooding hit vulnerable populations harder;
- communities rely on libraries, schools, and community centres as safe shelter spaces;
- utilities and municipalities need ways to see where climate risk and limited shelter access overlap.

Sanctuary extends it: add trusted community buildings and distributed-energy (DER) hardening potential, then rank which to verify first.

### Judging rubric: 5 axes, 20 percent each (confirmed at kickoff)
1. **Innovation / Creativity:** the public-good inversion, honesty as a feature, the no-fake-winter-map call.
2. **Impact / Relevance:** a real Peel planning decision, real vulnerable populations, real precedents.
3. **Technical Execution:** a verified GIS spine, transparent scoring, an offline-safe build, an AI no-overclaim filter.
4. **Presentation / Communication:** the scroll-pinned "deal the five" reveal, the honesty panel, the proper nouns.
5. **Collaboration / Teamwork:** name all five members and their roles on screen and on stage.

### Sponsors (and our fit)
- **Esri Canada** (GIS and ArcGIS, heavily mentored). Our map is the sponsor-track fit: a StoryMap and web map over Peel's real index.
- **Alectra GRE&T Centre** (Peel and Greater Golden Horseshoe grid innovation, community resilience, DER hardening). Sanctuary is a community-energy siting layer for exactly this.
- **No mandated tech.** Real data is required. The deck says "AI slop in any form will disqualify."

### The team (name everyone, Collaboration is 20 percent)
| Member | Role |
|---|---|
| **Cynthia Salazar** | Programmer / Marketing |
| **Jackson Li** | Project Manager / Engineer |
| **Roger Lungsee** | Automation Engineer |
| **Jhonatan** | Programmer |
| **Leo Atienza** | Researcher / Build (Claude power user) |

Work split into three tracks: GIS and data, narrative and design (StoryMap), and verification (a dedicated skeptic whose job was to challenge every claim). Make sure each person can speak to their piece live.

---

## 2. The product

### What it is
A map and StoryMap concept for Peel Region that finds trusted community buildings that could become resilience hubs during heat waves, floods, or outages, then ranks which to harden first. It is a decision-support artifact and StoryMap, not a consumer app and not an installed microgrid.

### What is Peel Region (the place, in one paragraph)
A regional municipality just west of Toronto, made up of **Mississauga, Brampton, and Caledon**, about 1.5 million people (2021 census). It is one of Canada's most diverse regions, with about half its residents born outside Canada, and it is home to Toronto Pearson International Airport, in Mississauga. Pearson is also where the 35.8 degree reading came from in June 2025, about 5 km from our hero building in Malton. So the heat, the diversity, and the trusted community and faith buildings all sit in the same place.

### The problem, sharpened
Theme 3 says not every community experiences energy and climate risk the same way. Our sharp version:
> **The people most exposed to heat and outages are often not within easy reach of a reliable, cool, powered place.**

Existing tools show official cooling centres. Sanctuary asks a different question: **which trusted buildings should become the next safe places?** And Peel does not run designated seasonal cooling centres, so the gap is real: public facilities simply stay open during their regular hours.

### The pattern-break (locked archetype)
- **Primary: Public-Good Frame.** Municipal and utility facing. A public siting decision, not a consumer gadget.
- **Reinforcing: Local-Detail.** Proper nouns, addresses, one real hero building. Memorable.
- **The non-default move:** stop routing vulnerable people to the official cooling network. Start asking which trusted buildings should become the network.

### Who uses it: the three desks
The first user is a planner, not a resident. Three real desks act on the ranking:
1. **Region of Peel, Office of Climate Change and Energy Management.** Decides which buildings to harden. For capital resilience investment, this desk, working with council, holds the lever.
2. **Region of Peel, Regional Emergency Management.** Prepares and opens public buildings during an extreme-heat day or an outage. This desk is the operator, not the buyer.
3. **Alectra Utilities, distribution planning.** Wants solar-and-battery sites as distributed energy resources that strengthen the local grid. The realistic energy partner and co-funder.

Realistic first call: the Region's climate office, with Alectra as the energy partner.

**Residents come later.** Only after sites are verified would a public app help a resident find the nearest open, equipped, trusted safe place during an event. That is not the current product.

### One-liners (pick the register)
- **Pitch one-liner:** "Sanctuary ranks trusted Peel buildings that should be hardened first into safe, powered gathering places before the next heat wave or outage."
- **The "describe it two hours later" test:** "the one that picks the five trusted Peel buildings to harden before the next heat wave."

---

## 3. The demo moment (the 10 seconds judges remember)

**One sentence:** a Peel heat-risk pocket glows red, we click a real trusted building, and the map ranks the five candidate hubs to harden first.

### Literal script
```
0:00  Peel Heat Vulnerability Index fills the screen. One Malton/Brampton pocket glows dark red.
      Caption: "Heat risk is not evenly distributed. Shelter access is not either."
0:02  Click the hero: "Malton Community Centre and Library, 3540 Morning Star Drive, Mississauga."
      HVI quintile 5, public-health zone M-04.
0:05  Side panel opens with three honesty labels:
        "Candidate hub, not currently equipped"
        "Reachable population: modelled 500 m estimate"
        "Solar/battery: planning estimate, requires site audit"
      plus HVI level, roof class, and why it ranks high.
0:08  Five candidate hubs light up in rank order ("deal the five").
      Caption: "If Peel can harden only five buildings first, Sanctuary ranks these five."
```

### Why it lands
- **It answers a decision, not a vibe.** "Which five first?" is a Monday-morning question.
- **It uses proper nouns.** Judges remember Malton, Morning Star Drive, Mississauga.
- **It's honest on screen.** Every risky estimate is labelled where the judge sees it.
- **It fits the sponsors.** ArcGIS does the reveal. Alectra gets a community-energy use case.

### Floor versus upgrade (demo safety)
- **Floor (must always work):** preloaded ArcGIS screenshots of the index, the hero click, the panel, and the ranked five.
- **Upgrade:** live StoryMap and web-map interaction recorded cleanly, or drive the same sequence from the Next.js site.
- **The judged deliverable is a pre-recorded video.** Live interaction is an upgrade, never a dependency.

---

## 4. The data spine

> **Golden rule:** every on-screen number is verified (linked to a public source), modelled (a labelled planning estimate), or pending (needs a site audit). No exceptions. Full provenance is in [`sources.md`](../../data/sources.md).

### The map layers (all static, loaded when the site builds)
| Layer | File | Records | Origin | Status |
|---|---|---|---|---|
| Heat-vulnerability choropleth | `peel-hvi.geojson` | 282 census tracts | Export of Peel's public Extreme Heat Vulnerability Index service (overall quintile plus exposure, sensitivity, adaptive-capacity sub-scores). Re-verified live May 26. | verified |
| Flood risk (TRCA regulated floodplain) | `peel-flood.geojson` | 295 polygons | TRCA "Flood and Heat Vulnerable Areas in Peel," layer 6: the riverine regulatory floodplain (greater of the Hurricane Hazel regional storm or the 100-year flood) for the Humber, Etobicoke Creek, and Mimico Creek watersheds. Not storm-sewer flooding. | verified |
| Winter / energy-burden vulnerability | `peel-winter-vuln.geojson` | 282 census tracts | The 2021 Ontario Marginalization Index Material Resources quintile per tract, joined to the same geography as the heat map. An affordability proxy, deliberately not a fabricated cold-temperature index. | modelled |
| Peel outline | `peel-fsa.geojson` | 35 forward sortation areas | Statistics Canada 2021 Census boundary file (92-179-X), reprojected to standard GPS coordinates. | verified |
| Public facilities (shelter gap) | `peel-facilities.geojson` | 87 facility points | Statistics Canada Open Database of Recreational and Sport Facilities: arenas, community centres, pools across Mississauga, Brampton, Caledon. | verified |
| Candidate hubs | `candidate-hubs.geojson` | 10 hand-verified buildings | Names and addresses from official municipal, library, and faith-organization pages, geocoded with the ArcGIS World Geocoder, then point-queried against the Peel index for each building's quintiles, census tract, and health zone. | verified |

### The 10 candidate buildings
Ranked by the hand-verified, heat-led seed. HVI is the overall quintile (1 lowest, 5 highest). The "score" is the transparency breakdown the detail panel shows (see section 5).

| Rank | Building | Municipality | HVI | Exp / Sens / Adapt | Type | Trust | Roof / Facility | Score | Flood (TRCA) | Winter q |
|---|---|---|:--:|:--:|---|---|---|:--:|---|:--:|
| 1 | **Malton Community Centre and Library** | Mississauga | **5** | 4 / 2 / 5 | Community centre + library | Civic | large / high | **91** | about 50 m from floodplain | 5 |
| 2 | Sri Guru Singh Sabha Malton | Mississauga | **5** | 5 / 4 / 5 | Place of worship | Faith / community | medium / medium | 84 | about 30 m | 5 |
| 3 | Susan Fennell Sportsplex | Brampton | **5** | 3 / 2 / 5 | Community centre | Civic | large / high | 88 | not mapped (Credit watershed) | 4 |
| 4 | Anjuman-E-Anwarul Islam of Malton (Malton Masjid) | Mississauga | 4 | 3 / 1 / 5 | Place of worship | Faith / community | medium / medium | 65 | about 40 m | 4 |
| 5 | Bharat Mata Mandir | Brampton | 3 | 5 / 1 / 3 | Place of worship | Faith / community | medium / medium | 64 | about 280 m | 4 |
| 6 | Chinguacousy Wellness Centre | Brampton | 3 | 5 / 2 / 2 | Community centre | Civic | large / high | 80 | outside floodplain | 4 |
| 7 | Hindu Sabha Temple | Brampton | 2 | 5 / 2 / 1 | Place of worship | Faith / community | large / medium | 63 | about 190 m | 4 |
| 8 | Gore Meadows Community Centre and Library | Brampton | 2 | 2 / 5 / 2 | Community centre + library | Civic | large / high | 70 | about 70 m | 3 |
| 9 | Guru Nanak Darbar Gurdwara | Brampton | 1 | 3 / 2 / 1 | Place of worship | Faith / community | large / medium | 50 | about 50 m | 4 |
| 10 | Cassie Campbell Community Centre | Brampton | 1 | 5 / 1 / 2 | Community centre | Civic | large / high | 64 | not mapped (Credit watershed) | 3 |

*(Scores are computed directly from the `scoreHub()` logic in `lib/hubs.ts`. Click any pin on the live map to confirm. They are a transparency aid, not the ranking. See section 5.)*

### The hero, in detail: Malton Community Centre and Library
- **Address:** 3540 Morning Star Drive, Mississauga (verified, Mississauga civic facility page).
- **HVI quintile 5,** Peel's most heat-vulnerable fifth. Verified against the public service, re-checked May 26.
- **Public-health zone M-04, census tract 5350530.01** (verified).
- **Census-tract population:** 5,217 (2021 census, verified).
- **Reachable population:** about 5,900, modelled. The sum of the 2021 populations of the seven dissemination areas whose Statistics Canada point falls inside the 500 metre circle (sensitivity about 4,500 to 5,900 depending on how the centres are defined). Cross-checked against two independent Statistics Canada sources.
- **Prototype status:** candidate hub, not equipped (pending). **Next step:** site audit required (pending).
- **Why the hero:** a real civic building, top heat quintile, a community centre and library so the public role is instantly legible, and a public-first hero is safer and clearer than opening on a faith site.

### The Gore Meadows story (a credibility asset)
Our first instinct for the hero was Gore Meadows Community Centre and Library. When point-queried against the index it came back quintile 2, not top-risk. Malton came back quintile 5. We changed the hero based on the evidence and kept Gore Meadows as an honest contrast candidate. "We changed the hero after checking the data" is a strong honesty beat.

### What's verified, modelled, pending (say this structure out loud)
- **Verified:** the heat layer plus all quintiles and sub-scores, building names and addresses, census tract and health zone, source links, Malton's tract population, flood geometry, funding program rates.
- **Modelled:** the 500 metre catchment (Malton about 5,900, others pending), roof and hardening class, facility suitability, the five scoring weights, and the winter Marginalization Index proxy. In the score, the 25 percent population factor is also tagged **modelled** (a 500 metre proxy built from exposure and sensitivity), even though the literal head count stays pending.
- **Pending:** backup power (all 10), cooling capacity, electrical readiness, owner agreement, solar and battery sizing, real walksheds, and the reachable-population count for nine of the ten buildings.

---

## 5. The scoring model

### The weights (frozen)
```
hub_score (0 to 100) =
  35%  heat vulnerability nearby          (verified, the HVI quintile)
+ 25%  vulnerable population in catchment  (modelled, a 500 m proxy; the head count stays pending)
+ 20%  trust / community role              (verified, civic or faith/community anchor)
+ 10%  rooftop hardening potential         (modelled, small/medium/large)
+ 10%  facility suitability                (modelled, low/medium/high)
```

### How each factor is computed (the exact logic)
- **Heat (35%):** quintile divided by 5. Malton: 5 of 5 = 1.0, so 35 points.
- **Population (25%):** a proxy built as (exposure / 5) times 0.6, plus (sensitivity / 5) times 0.4. Tagged **modelled** (bucket label: "500 m proxy, count pending"), because the real catchment count isn't done.
- **Trust (20%):** civic anchor 1.0, faith or community anchor 0.7.
- **Roof (10%):** large 1.0, medium 0.6, small 0.3.
- **Facility (10%):** high 1.0, medium 0.6, low 0.3.

Score is the sum of each fraction times its weight, rounded. **Malton equals 91 of 100** (35 + 16 + 20 + 10 + 10).

### Rank versus score: the critical distinction (a sharp judge will probe this)
- The **displayed rank is the hand-verified seed.** A human ranking, heat-led. It is not a machine sort of the score.
- The **0-to-100 score is a transparency aid.** It shows how the five factors stack up, not a black box that overrides judgment.
- **They don't perfectly co-vary, by design.** Example: rank 3 (Susan Fennell, 88) scores higher than rank 2 (Sri Guru Singh Sabha, 84), and rank 6 (Chinguacousy, 80) scores higher than rank 5 (Bharat Mata Mandir, 64). The hand-rank leads with heat exposure, our one fully-verified, tract-resolved hazard, and it applies discipline: we don't let a big recreation centre in a cooler tract leapfrog a building inside the hottest pocket, and we don't over-rank on a population proxy that's still modelled.
- **The honest meta-point:** a first-pass score is a screen, not a verdict. Where raw score and heat-led rank disagree, that's exactly the point a site audit settles with verified data. The spoken answer is in [`05-hard-questions.md`](05-hard-questions.md).

### Ranking discipline
- A candidate can't be top-five from an unverifiable estimate alone.
- A strong community role with weak heat proximity stays in the dataset but isn't the hero.
- Each top-five building gets a one-sentence "why this one."
- Ties break toward cleaner source verification and a clearer map reveal.

---

## 6. Multi-hazard (heat, flood, winter)

Sanctuary covers the breadth of Problem Statement 2, heat and flooding, cooling and warming, with three separately-toggleable lenses on the same map, each labelled verified, modelled, or pending:

1. **Heat:** Peel's index. Verified, the lead hazard, default on.
2. **Flood:** TRCA's regulatory floodplain. Verified geometry, per-building proximity computed and dual-method checked. Off by default.
3. **Winter / energy burden:** the 2021 Ontario Marginalization Index Material Resources quintile. Modelled affordability proxy. Off by default.

**Authoritative backing:** TRCA itself publishes a combined "Flood and Heat Vulnerable Areas in Peel" service. A real body already treats flood and heat as overlapping in Peel.

### The "no winter cold map" call (the strongest data answer we have)
> Heat vulnerability varies block to block because of the urban heat island, so the index resolves it per tract. Winter cold has no equivalent gradient, there's no winter heat-island, so a per-tract cold-temperature index would invent an exposure axis that isn't real. Winter resilience need is driven by energy affordability and marginalization, which is real per-area data, so the winter layer maps the Marginalization Index Material Resources dimension, labelled modelled, and heat stays the lead, verified hazard.

Knowing what you can't honestly measure pre-empts the sharpest data question and shows method literacy.

### The year-round insight (use it)
The four top-ranked heat candidates are also high on winter energy burden, verified, not assumed:

| Building | Heat (HVI) | Material Resources q |
|---|:--:|:--:|
| Malton Community Centre and Library | 5 | 5 |
| Sri Guru Singh Sabha Malton | 5 | 5 |
| Susan Fennell Sportsplex | 5 | 4 |
| Anjuman-E-Anwarul Islam of Malton | 4 | 4 |

So hardening these isn't a summer-only bet. The same buildings protect the same people in a heat wave and in a cold snap. It's flagged on each card as the "year-round resilience case."

### Flood honesty guardrails
- All ten candidates sit outside the mapped floodplain. An honest result, not a gap.
- Two candidates (Susan Fennell, Cassie Campbell) are in the Credit River watershed, mapped by Credit Valley Conservation, not TRCA, so they read "not mapped by TRCA," never a false "flood-safe."
- Flood means the riverine regulatory floodplain (Hurricane Hazel or 100-year), not urban or storm-sewer flooding.

---

## 7. The honesty system (the credibility engine)

### The evidence vocabulary (first-class, on screen everywhere)
- **verified:** checked against a public source.
- **modelled:** a planning estimate.
- **pending:** needs a site audit.

These appear as icon plus text (never colour alone) in the map legend, the detail panel, and a persistent key. The honesty labels are sacred. Never present a modelled or estimated value as measured.

### Copy rules
- Say "candidate hub," not "current hub."
- Say "modelled 500 metre estimate," not exact walkshed population.
- Say "solar and battery planning estimate, requires site audit," not a precise kW or kWh.
- Say "trusted community infrastructure," not charity or pity framing.
- Use specific proper nouns and real numbers. No corporate-comms ("leverage," "empower," "stakeholders"). No "AI-powered" as a feature.

### The no-overclaim gate (the AI-safety story)
The optional Gemini planning-checklist feature is wrapped in a hard gate (`lib/planning-assistant.ts`):
- A schema forces the exact shape: a summary, exactly five recommended checks, at least one unknown, source tags from a fixed list, and a fixed disclaimer.
- A filter (`hasPlanningOverclaim`) rejects any output containing: kW, kWh, MW, MWh, dollar figures, "sizing," "payback," "roi," "grant guaranteed," "already / currently has solar / battery / backup power / cooling," rank changes or new candidates, or "saved lives / restore power / guaranteed."
- If validation fails, it falls back to a static, human-reviewed checklist.
- **Gemini never makes the ranking.** It only drafts what to verify next.

### Things we will not submit or say
Do not imply: a named building is already a hub; any building currently has solar, battery, backup power, cooling, or an emergency agreement; Sanctuary operates a virtual power plant today; tax credits or grants are guaranteed; reachable population is exact when only the 500 metre model is used.

---

## 8. The code

The technical detail has its own file so it stays readable: [`03-code-explained.md`](03-code-explained.md). It explains the stack and architecture twice, first in plain English for the whole team, then in depth for the programmers.

One-line version: a server-rendered Next.js site that draws a hand-built SVG map from static data at build time, so there is no live database or fetch and nothing to break on stage. The only live element is the embedded ArcGIS map. The optional Gemini feature runs offline behind a filter that blocks invented numbers.

---

## 9. Evidence and precedents (every number sourced)

| Fact | Number | Source |
|---|---|---|
| Heat at Pearson, about 5 km from Malton | 35.8 degrees, June 23, 2025 | CBC (GTA heat warning) |
| Toronto-area extreme-heat days | about 8 a year in the 1950s, about 18 now, 54 by the 2060s | City of Toronto, ResilientTO |
| Brampton Lighthouse Project | 79 registered places of worship, 39 signed partners. An emergency-refuge network, not solar. | Canada in a Changing Climate |
| USDN resilience hub | 5 functions: power, communications, facilities, operations, services | USDN Resilience Hubs (2018) |
| Faith buildings on solar | 137 Ontario faith institutions | Faith and Common Good |
| May 2022 derecho | Ottawa opened rec and community facilities as reception points (about 400 km east of Peel, honest geography) | Ottawa Citizen |
| Peel warming centres | Peel and Mississauga do not run designated seasonal warming centres; public facilities open during regular hours | Mississauga.com |
| Alectra GridExchange | Ran in Vaughan, Markham, Barrie, Richmond Hill, Hamilton. Not Peel. A template. | Alectra / Newswire |

### The two counterfactuals (planning thought experiments, not impact claims)
1. **A 35.8 degree day at Pearson (June 2025).** Had Sanctuary existed, planners would already hold a five-building pre-verify list, Malton at number 1. Temperature, date, and place verified. Sanctuary effect hypothetical.
2. **The May 2022 derecho (Ottawa).** Had the ranking existed across Alectra's territory, "which civic buildings do we prepare first?" would already have an answer. Event verified. Ottawa, not Peel. Sanctuary effect hypothetical.

---

## 10. Funding (the "who pays" story)

We surface program rates (percentages), never modelled dollar totals. Sizing stays pending until a site audit.

| Program | Rate | Status | Note |
|---|---|---|---|
| **Clean Electricity ITC (CEITC)** | 15% | In force since March 2026 | The anchor. The only federal clean-energy credit a tax-exempt public owner can reach (refundable). |
| Clean Technology ITC (CTITC) | 30% | Taxable corporations only | A library, gurdwara, or municipal centre is tax-exempt and can't claim it directly. That's why 15 percent CEITC, not 30, is the lever. |
| FCM Green Municipal Fund (Community Buildings Retrofit) | up to 80% | Open, year-round | Federal grant and loan for community-building retrofits. Needs a measured emissions reduction. |
| IESO Save on Energy (Retrofit) | up to 50% | Open 2025 to 2027 | Covers up to half an eligible retrofit, including behind-the-meter solar. |

**Honesty caveat (named, not counted):** NRCan's Smart Renewables and Electrification Pathways main streams aren't taking new proposals, and the Disaster Mitigation and Adaptation Fund is fully allocated. An honest plan tracks both for the next round.

**Operating model (future).** On blue-sky days, aggregated hub solar and batteries shave peak demand and join Ontario's demand-response and capacity markets as distributed energy resources. On outage days, the battery islands the building to keep cooling, charging, and information running. A municipal or utility partner operates it. Alectra's GridExchange, run elsewhere in the Greater Golden Horseshoe, is the kind of template Peel could adopt. No building here runs this today.

---

## 11. The roadmap (the honest future)

1. **Real access modelling.** Replace the 500 metre circles with multimodal walksheds (sidewalks, transit, barriers, slope).
2. **Audit and verify.** Owners, cooling, accessibility, roof, backup power, electrical readiness, then rerank with audited data.
3. **Resident guidance, later.** Only after verification, a public view of open, equipped, trusted hubs with live status and routing.
4. **Scale across hazards and territory.** Deepen heat, flood, and winter with building-level data. Repeat the method across Alectra's service area.

**Phase-2 layer:** schools (Peel District School Board 250-plus, Dufferin-Peel Catholic 152) via Ontario's Community Use of Schools program. Each needs a board-level agreement first.

---

## 12. Key sources (for "where did X come from")

- **Peel HVI feature service:** `https://services6.arcgis.com/ONZht79c8QWuX759/arcgis/rest/services/Extreme_Heat_Vulnerability_Index/FeatureServer/0` (public, no token; layer `hvi_ct2021`, 2021 census tracts).
- **Peel HVI source item:** `https://www.arcgis.com/home/item.html?id=83b829a8b497476b87c3d954869c02d2`. HVI web map: `id=d1adca8a3b1e403483e608040734c07a`.
- **TRCA flood (layer 6):** `https://maps.trca.ca/hostingserver/rest/services/Hosted/Flood_and_Heat_Vulnerable_Areas_in_Peel_WFL1/FeatureServer/6`.
- **Ontario Marginalization Index 2021:** Public Health Ontario and St. Michael's Hospital (Statistics Canada 2021 Census), the Material Resources quintile.
- **Statistics Canada:** FSA boundaries (92-179-X), 2021 dissemination-area population, the Open Database of Recreational and Sport Facilities.
- **Service versus CSV field names:** `Index_Qnt` to hvi, `Exposure_Qnt` to exposure, `Sensitivity_Qnt` to sensitivity, `Adaptivity_Qnt` to adaptive capacity (note Peel's "Adaptivity" spelling), `CTUID` to ctuid, `PHDZ` to phdz.
- **Quintile semantics:** 1 is lowest relative risk, 5 is highest. (Our site palette intentionally differs from Peel's official teal-to-orange ramp; it's a heat-anchored slate-to-ember ramp, a locked design choice.)

Full provenance: [`sources.md`](../../data/sources.md). Data notes: [`peel-flood-data-note.md`](../../../docs/peel-flood-data-note.md), [`peel-winter-vuln-data-note.md`](../../../docs/peel-winter-vuln-data-note.md), [`malton-catchment-data-note.md`](../../../docs/malton-catchment-data-note.md).

---

## 13. Glossary

- **HVI (Heat Vulnerability Index):** Peel Public Health's per-census-tract heat-risk score, grouped into quintiles 1 to 5 (5 most vulnerable). Combines exposure, sensitivity, adaptive capacity.
- **Quintile:** a fifth. HVI quintile 5 is the most heat-vulnerable fifth of tracts.
- **Exposure / Sensitivity / Adaptive capacity:** the three sub-scores. How much heat stress, how strongly it affects people there, how easily they can cope or get help.
- **Candidate hub:** a building worth checking first. Not confirmed ready, equipped, funded, or signed on.
- **Resilience hub:** a trusted place that supports people before, during, or after an emergency (cooling, warmth, charging, information, washrooms, water).
- **Hardening:** upgrading a building to work better in heat or outage events (electrical, cooling, solar, storage, staffing, agreements).
- **500 metre catchment:** a simple circle estimating nearby reach. Not a real walking route.
- **Walkshed:** a real access model using streets, paths, transit, and barriers.
- **DER (distributed energy resource):** behind-the-meter solar and battery that can support the grid and island a building during an outage.
- **CTUID / PHDZ:** census-tract ID, Peel public-health data zone.
- **ON-Marg:** the Ontario Marginalization Index (2021). We use its Material Resources dimension as the winter and energy-burden proxy.
- **ODRSF:** Statistics Canada's Open Database of Recreational and Sport Facilities.
- **CEITC / CTITC:** Clean Electricity ITC (15 percent, reaches tax-exempt owners) and Clean Technology ITC (30 percent, taxable corporations only).
- **TRCA / CVC:** Toronto and Region Conservation Authority, and Credit Valley Conservation (maps the Credit River watershed in west Peel).
- **StoryMap / web map:** the narrative ArcGIS page, and the interactive ArcGIS map. The judged artifact.

---

## 14. Artifacts and links

| Thing | Link or path |
|---|---|
| Live support site | https://project-sanctuary-seneca.vercel.app |
| ArcGIS web map (build) | `https://senecatechnology.maps.arcgis.com/apps/mapviewer/index.html?webmap=17951a55fae44a83a330101433dda67a` |
| StoryMap | the narrative wrapper over the web map (the recorded deliverable) |
| GitHub repo (private) | https://github.com/Leo-Atienza/Synergy-v2.0 |
| Candidate data | `sanctuary/data/candidate-hubs.csv` and `.geojson` |
| Methods note | [`methods-note.md`](../methods-note.md) |
| Multi-hazard talking points | [`multi-hazard-talking-points.md`](../../../docs/multi-hazard-talking-points.md) |
| Scope lock | [`scope.md`](../../../.hackathon/scope.md). Pre-mortem: [`pre-mortem.md`](../../../.hackathon/pre-mortem.md) |

---

## 15. The four reflexes (print these on the inside of your eyelids)

1. **Lead with the decision, not the map.** "We rank the five Peel buildings to harden first."
2. **Label honesty out loud:** verified, modelled, or pending, before they ask.
3. **Use proper nouns:** "Malton Community Centre and Library, 3540 Morning Star Drive," HVI quintile 5.
4. **When unsure, fall back to the safe sentence:** "This is a candidate hub and a planning estimate. It needs a site audit before anyone treats it as ready."

**Close with:** "Harden these five trusted buildings first, then repeat the same honest method across Alectra's service territory. That's Sanctuary."
