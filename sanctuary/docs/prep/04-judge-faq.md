# 04 · Judge FAQ (the broad set)

> Sanctuary finale prep. Front door: [`README.md`](README.md). For the sharpest, most adversarial finalist questions, drill [`05-hard-questions.md`](05-hard-questions.md). For the one-screen card, see [`01-cheat-card.md`](01-cheat-card.md).

**How to use this.** Each question has a **Say** line (the spoken answer, say it then stop), an *If pressed* line (backup for follow-ups), and a *Guardrail* where there's a trap. Give the **Say** line first. Don't volunteer the backup unless they push. Every number here is on the live site and traceable on the Sources page.

**The three reflexes that win this event.**
1. **Lead with the decision, not the map.** "We rank the five Peel buildings to harden first." Not "we built a heat map."
2. **Label honesty out loud.** Say verified, modelled, or pending for every number, before they ask. The rubric says "AI slop disqualifies," so honesty is the moat.
3. **Use proper nouns.** "Malton Community Centre and Library, 3540 Morning Star Drive" beats "a community building" every time.

---

## A. Concept and problem

**Q: What is Sanctuary, in one sentence?**
> **Say:** "Sanctuary ranks trusted Peel buildings, libraries, recreation centres, gurdwaras, mosques, mandirs, churches, as candidate solar-and-battery resilience hubs, so planners know which to harden first before the next heat wave or outage."

**Q: What problem are you solving?**
> **Say:** "Heat risk and shelter access are both uneven. The people most exposed to heat and outages often can't easily reach a cool, powered place they trust. Existing tools map where the official cooling centres are. We ask a sharper question: which trusted buildings should become the next safe places?"
- *If pressed:* That's Theme 3, Problem Statement 2: climate resilience, vulnerable populations, and shelter access, made literal for Peel.

**Q: Why does this matter? Who's actually hurt by the gap?**
> **Say:** "An older adult, a renter without air conditioning, a family trying to keep medication cold during an outage. A cooling centre two bus rides away, closed, or unfamiliar doesn't protect them. We start planning from the buildings those people already know and trust."

**Q: What's the core insight?**
> **Say:** "Most heat tools route vulnerable people to the official cooling network. We flip it: stop routing people around, and start asking which trusted buildings should become the network. The output isn't a map, it's a ranked planning shortlist."

**Q: Who is the user? Is this a consumer app?**
> **Say:** "No. The first user is a planner, not a resident. A Region of Peel climate or emergency-management planner, or an Alectra community-energy planner, deciding which buildings to verify and harden first. A public app is a future stage, only after sites are verified."
- *Guardrail:* Never say residents use this today to find shelter. Routing people during a real emergency needs verified safety, hours, owner agreement, and live status. We don't claim any of that yet.

**Q: What does "resilience hub" mean?**
> **Say:** "A trusted building that supports people before, during, and after an emergency: cooling or warmth, device charging, information, washrooms, water. We borrow the Urban Sustainability Directors Network's five-function definition, power, communications, facilities, operations, services, rather than inventing our own."

**Q: Isn't this just telling people to travel farther during an emergency?**
> **Say:** "The opposite. We're not adding distant destinations. We're recognizing the buildings already inside the high-risk neighbourhoods that people already walk to. The whole point is reach: a modelled 500 metre catchment, the area within a short walk."

---

## B. Originality (the "why is this different" question)

**Q: What makes this different from a normal heat map or GIS dashboard?**
> **Say:** "A heat map ends in a colour. Sanctuary ends in a decision: harden these five named buildings first. It names Malton Community Centre and Library at 3540 Morning Star Drive, not 'a community centre,' and it tells you exactly what's proven versus what still needs a site visit."

**Q: What's genuinely novel here?**
> **Say:** "Three things. One, the inversion: trusted buildings as candidate infrastructure, not just routing to existing centres. Two, honesty as a feature: every number is tagged verified, modelled, or pending, on screen. Three, a multi-hazard lens that refuses to fake data: we map heat, flood, and winter energy burden, and we explain why there's deliberately no cold-temperature map."

**Q: Hasn't this been done? Brampton already has the Lighthouse Project.**
> **Say:** "Brampton Lighthouse is exactly the precedent we build on: 79 registered places of worship, 39 with signed partner agreements, as an emergency-refuge network. But it's a trust network, not an energy program. Our contribution is adding the solar-and-battery layer so a refuge keeps power when the grid goes down, plus a transparent score for which ones first."
- *Guardrail:* Lighthouse is refuge and cooling, not solar. Don't conflate them. The full answer is in [`05-hard-questions.md`](05-hard-questions.md), question 15.

---

## C. Data and honesty (this is where the event is won)

**Q: Is the data real?**
> **Say:** "Yes. The heat layer is Peel Public Health's public Heat Vulnerability Index, 282 census tracts, straight from their ArcGIS feature service. Building names and addresses come from official municipal and organization pages. Every candidate's quintile was point-queried against the live service and re-verified on May 26. Anything we estimate, we label as estimated."

**Q: Is the data live or hardcoded?**
> **Say:** "It's a frozen snapshot, on purpose. Each map layer is a file pulled from a public source, committed to the repo, and loaded once when the site builds. No database, no live call while you browse. That's deliberate: a dropped connection or an expired map token can't break the demo. The values trace to the Sources page and were re-checked against the live Peel service on May 26."
- *If pressed:* The only live network element is the embedded ArcGIS web map. Everything else is static and reproducible from documented scripts.

**Q: How do I know you didn't just make up plausible numbers? (the AI-slop question)**
> **Say:** "Because every on-screen number is either linked to a public source or carries a modelled or pending label right where you read it. We don't print a reachable-population count we can't defend. For nine of the ten buildings that count literally says pending. We'd rather show a gap than fake a figure."
- *If pressed:* That's why the verified, modelled, pending key is a permanent part of the interface, not a footnote.

**Q: Did you use AI? Isn't AI-generated content disqualified?**
> **Say:** "We used AI as a tool, never as a source of facts. There's one optional feature, a planning checklist drafted by Gemini, and it runs offline behind a filter that rejects any invented power, dollar, or sizing figure. Gemini does not make the ranking, and the live site calls no model. Every fact on the map comes from a public dataset we can point to."
- *Guardrail:* Be confident. The discipline is the answer. Don't get defensive, explain the no-overclaim filter.

**Q: What's the single most important real number?**
> **Say:** "Malton Community Centre and Library sits in HVI quintile 5, Peel's most heat-vulnerable fifth, verified against the public service. Its census tract holds 5,217 people as of the 2021 census. Those are the anchors. Everything else is labelled honestly around them."

**Q: Where did the heat data come from, and is it current?**
> **Say:** "Peel Public Health's Extreme Heat Vulnerability Index, built on the 2021 census tract geography. It scores each tract on three things, exposure, sensitivity, and adaptive capacity, and rolls them into a quintile from 1 to 5. It's their published, public layer. We re-queried it live on May 26 to confirm every candidate's quintile."

**Q: The reachable-population number, is it exact?**
> **Say:** "No, and we're explicit about it. Malton carries a modelled estimate of about 5,900, the sum of the 2021 populations of the seven dissemination areas whose Statistics Canada point falls inside the 500 metre circle. We even state the sensitivity: roughly 4,500 to 5,900 depending on how you define those centres. For the other nine buildings it says pending until a real walkshed is run."
- *If pressed:* Beside the modelled catchment we show a verified anchor, the census tract's actual 2021 population, 5,217. We cross-checked the dissemination-area populations against two independent Statistics Canada sources and they matched.

---

## D. Method and scoring

**Q: How does the score work?**
> **Say:** "Five factors, weighted, out of 100. Heat vulnerability nearby is 35 percent, vulnerable population in the catchment 25, trust and community role 20, rooftop hardening potential 10, facility suitability 10. It's deliberately simple. A judge can grasp it in twenty seconds and a planner can challenge any single input."

**Q: Where did the weights come from? Is there a published framework?**
> **Say:** "They're our reasoned judgment, not an external formula. We structured them on two sources we already cite: Peel's own index, which splits heat risk into exposure, sensitivity, and adaptive capacity, and the USDN resilience-hub functions. Heat leads at 35 percent because it's the only axis that's fully verified and resolved tract by tract. The other four are planning proxies a site audit later replaces."
- *Guardrail:* Don't invent a citation. "Our judgment, structured on two cited sources" is the honest and strong answer.

**Q: Why those five factors?**
> **Say:** "They answer the planner's real question. Is the building where the heat is, can it reach the people who need it, do people trust it, and could it physically take the hardening? Heat and trust are verified. Population, roof, and suitability are first-pass planning proxies, and we tag them modelled."

**Q: Is the ranking automated? Machine learning?**
> **Say:** "No. The displayed rank is hand-verified, a human ranking, heat-led. The 0-to-100 score is a transparency aid that shows how the five factors stack up. It's not a black box that overrides judgment. A first-pass score is a screen, not a verdict."

**Q: I clicked rank 6 and it scores higher than rank 5. Why?** *(sharp or GIS judge curveball, be ready)*
> **Say:** "Good catch. That's the human-judgment layer being honest. The score is a transparent weighted sum. The rank is heat-led. We don't let a big recreation centre in a cooler tract leapfrog a building inside the hottest pocket, and we don't over-rank on a population proxy that's still modelled. Where the raw score and the heat-led rank disagree, that's exactly the point a site audit settles with verified data."
- *If pressed:* "Chinguacousy is a large civic facility, so it scores well on roof and suitability, but it's quintile 3. Our top five lead with heat exposure because that's our one fully-verified, tract-resolved hazard. We'd rather be honest that the ordering isn't final than pretend the formula is gospel."

**Q: Why is heat weighted highest?**
> **Say:** "Because it's the only factor that's fully verified and resolved tract by tract, Peel's own index. The other four are honest planning estimates. We weight the thing we can prove."

**Q: Could someone game the score?**
> **Say:** "It's a transparent first-pass screen, not a gate that hands out money, so there's nothing to game. A real decision runs a site audit, which replaces the modelled inputs with measured ones. The score's job is to pick where to look first."

---

## E. The hero building and the candidate list

**Q: Why Malton Community Centre and Library?**
> **Say:** "Four reasons. It's a real civic building at 3540 Morning Star Drive. It's in HVI quintile 5, the highest heat-risk fifth. It's a community centre and a library, so the public role is instantly legible. And leading on a public civic building is safer and clearer than opening on a faith site."

**Q: Did you change your hero building? Why?**
> **Say:** "Yes, and that's a credibility point, not a weakness. Our first instinct was Gore Meadows. When we point-queried it against the index it came back quintile 2, not top-risk. Malton came back quintile 5. So we changed the hero based on the evidence and kept Gore Meadows in the dataset as an honest contrast candidate."

**Q: Why only 10 buildings?**
> **Say:** "Discipline over coverage. Ten hand-verified buildings, each with a name, address, source link, and a live quintile check, beat five hundred auto-scraped points we can't stand behind. Scaling the method to all of Peel is a roadmap stage. Faking breadth would break the honesty story."

**Q: How did you pick the candidates?**
> **Say:** "We started from trusted public and community buildings inside or near the high-risk pockets, a deliberate mix of civic anchors and faith and community anchors. We pulled names and addresses from official pages, geocoded them, and point-queried each against the Peel index for its real quintiles, census tract, and health zone."

**Q: Why include places of worship at all?**
> **Say:** "Because resilience runs on trust, volunteers, and local knowledge, and in many Peel communities a gurdwara, mosque, mandir, or church is exactly where people already gather and ask for help. We treat them as community infrastructure. It's also realistic: Faith and Common Good counts 137 Ontario faith institutions already running solar."

**Q: Isn't naming faith buildings tokenistic or extractive?**
> **Say:** "We were careful about that. The list mixes civic and faith and community buildings, and every site is framed as an asset and a partner, not as a group that needs rescuing. The pitch is never 'vulnerable people need churches.' It's 'trusted buildings are part of the resilience network.'"
- *Guardrail:* Asset-based language only. Never pity framing.

**Q: What if a building owner doesn't want to participate?**
> **Say:** "Then it doesn't become a hub. Owner agreement is one of the pending site-audit items we flag for every candidate. The ranking tells a planner who to talk to first. It never assumes anyone has said yes."

---

## F. Multi-hazard (heat, flood, winter)

**Q: You only handle heat. What about the rest of climate risk?**
> **Say:** "We cover the breadth of Problem Statement 2, heat and flooding, cooling and warming. Three separately-toggleable lenses on the same map, each labelled honestly: heat from Peel's index, flood from TRCA's regulatory floodplain, and winter energy burden from the 2021 Ontario Marginalization Index. TRCA itself publishes a combined 'Flood and Heat Vulnerable Areas in Peel' service, so an authoritative body already treats them as overlapping."

**Q: Where's your winter cold map?** *(the strongest answer in the deck, use it)*
> **Say:** "We deliberately don't fake one. Heat vulnerability varies block to block because of the urban heat island, so it maps cleanly per tract. Winter cold has no equivalent gradient, there's no winter heat-island, so a per-tract cold-temperature index would invent an exposure axis that isn't real. Winter resilience need is driven by energy affordability and marginalization, which is real per-area data, so the winter layer maps the 2021 Ontario Marginalization Index, labelled modelled, and heat stays the lead, verified hazard."
- *Why this wins:* It pre-empts the sharpest data question and shows method literacy. Knowing what you can't honestly measure is a credibility flex.

**Q: What exactly is the flood layer?**
> **Say:** "TRCA's regulatory floodplain, the greater of the Hurricane Hazel regional storm or the 100-year flood, for the Humber, Etobicoke Creek, and Mimico Creek watersheds. It's riverine flooding, not urban storm-sewer flooding, and we say so. West Peel's Credit River watershed is mapped by a different authority, Credit Valley Conservation, so two of our candidates read 'not mapped by TRCA' rather than a false 'flood-safe.'"
- *Guardrail:* All ten candidates sit outside the mapped floodplain. That's an honest result, not a gap. Don't imply flood drove the ranking. It's context.

**Q: Why is flood off by default on the map?**
> **Say:** "Heat is the lead, fully-verified hazard, so it's the default view. Flood and winter are opt-in comparison lenses. Toggle them on and the legend stacks a key for each. We didn't want a secondary layer competing with the hook."

**Q: What's the year-round resilience point?**
> **Say:** "Our top four heat candidates are also high on winter energy burden, verified, not assumed. Malton and Sri Guru Singh Sabha are quintile 5 on both. So hardening them isn't a summer-only bet. The same buildings protect the same people in a heat wave and in a cold snap."

---

## G. Technical and coding questions

**Q: What's your tech stack?**
> **Say:** "The judged artifact is an ArcGIS StoryMap and web map, the Esri-track fit. Behind it we built a support site in Next.js 16 and React 19, with a hand-rolled d3-geo SVG map, no Tailwind, and static map data loaded when the site builds so it runs fully offline. There's an optional Gemini feature for planning checklists, gated so it can't be abused."
- *If pressed:* The full code walkthrough is in [`03-code-explained.md`](03-code-explained.md), in plain English and in technical depth.

**Q: Why hand-roll a d3-geo SVG map instead of a real mapping library?**
> **Say:** "Demo safety. MapLibre or deck.gl mean a basemap token, WebGL, and a live tile server, three things that can fail on conference wifi. Our map is plain SVG shapes drawn once when the site builds. No token, no WebGL, no network call. It can't break from a dropped connection."

**Q: Walk me through the architecture.**
> **Say:** "A server-rendered shell with one interactive client component. When the site builds, the server reads the map files off disk, projects them into SVG shapes, and passes those shapes and the building points into a single interactive map component. No live fetch, no backend, no database. The only live element is the embedded ArcGIS map."

**Q: Did AI write your code?**
> **Say:** "AI was a development tool, like an IDE or Stack Overflow. Every line is reviewed, the data is all from public sources, and the facts on screen are independently verified. The thing the rubric warns about, AI slop and invented numbers, is exactly what our no-overclaim discipline prevents."

**Q: How does the Gemini feature work, and could it hallucinate a number?**
> **Say:** "It drafts a site-audit checklist, things like 'verify backup power with the operator,' never a fact about the building. It runs offline, the reviewed output ships as a static file, and it's wrapped in a filter: any output mentioning kilowatts, dollars, sizing, a rank change, or 'already has solar' is rejected before it can appear. The live site makes no model call. And it's double-gated: the model only runs if both an API key and an explicit regeneration flag are set, so a stray key in production can't burn quota or expose an open endpoint."

**Q: Is it deployed? How?**
> **Say:** "Yes, the support site is live on Vercel at project-sanctuary-seneca.vercel.app. We deploy manually from the command line and check every page after, rather than trusting an 'up to date' message. The judged artifact, though, is the ArcGIS StoryMap and the video, not the site."

**Q: What happens if the wifi dies or the live demo breaks on stage?**
> **Say:** "We don't depend on it. The judged deliverable is a pre-recorded video, the ArcGIS views have screenshot fallbacks, and our support site runs fully offline once loaded. If something lags, we switch to the backup without apologizing. The decision sequence is identical."

**Q: What about performance and accessibility?**
> **Say:** "Accessibility scores 100 on desktop with zero accessibility violations, and the whole story renders with reduced motion or with JavaScript off, the map just unpins into a stacked, readable view. We built it to be fast and offline-safe. Accessibility matters extra here because the project is about people who get left behind."
- *If pressed:* Performance is strong on desktop. An interactive map dips a little under a simulated slow phone, which is expected. We chose to keep the map fully interactive rather than strip it for a benchmark number.

---

## H. Feasibility and impact

**Q: Can Alectra actually use this?**
> **Say:** "Yes, as a planning concept. Alectra works on community energy and grid resilience across the Greater Golden Horseshoe. Sanctuary shows where energy hardening would meet public need first, a way to find resilience-hub candidates before the deeper engineering and partner work. A hardened hub with solar and a battery is a distributed energy resource: it supports the local grid on normal days and islands to keep people safe during an outage."

**Q: Who pays for the solar and batteries?**
> **Say:** "For a public owner, the anchor is the 15 percent refundable Clean Electricity Investment Tax Credit, the one federal credit a tax-exempt owner like a library or a place of worship can reach. It stacks with the Green Municipal Fund retrofit program and Ontario's Save on Energy. The 30 percent Clean Technology credit is for taxable corporations only, so it's not the lever for these buildings, and getting that distinction right is part of the honesty story."
- *Guardrail:* 15 percent Clean Electricity credit for community buildings, never 30 percent Clean Technology. These are eligibility, not guaranteed funding.

**Q: What's the impact? Does this save lives?**
> **Say:** "We don't claim lives saved, that would be the exact overclaim we avoid. The honest impact is a pre-verify list: before the next heat day or outage, a planner already knows which trusted buildings to investigate first. We show this with two real, sourced events, a 35.8 degree day at Pearson last June, and the 2022 derecho that had Ottawa opening rec centres as reception points, framed as planning thought experiments, not claims about outcomes."

**Q: What are the next steps after the hackathon?**
> **Say:** "Five. Verify the top five with owners, replace the 500 metre circles with real walksheds, run site audits for cooling, power, and accessibility, compare funding paths, then repeat the same scoring across more of Alectra's territory. The method is the product, and it's built to scale."

**Q: Does it scale beyond Peel?**
> **Say:** "That's the whole design. Swap in another city's heat-risk layer, add its public and community buildings, run the same five-factor score, and apply the same verified, modelled, pending labels. It reads as a template a utility or region can run, not a one-off Peel map."

---

## I. Sponsor fit

**Q: How does this fit Esri / ArcGIS?**
> **Say:** "It's a clean ArcGIS project, a StoryMap narrative over a web map that styles Peel's real index, with our candidate points, 500 metre catchments, and the ranked reveal. We use the public feature service directly and the World Geocoder for addresses. The map does the spatial storytelling, which is exactly what the Esri track rewards."

**Q: How does this fit Alectra / the GRE&T Centre?**
> **Say:** "Alectra is the Peel and Greater Golden Horseshoe grid-innovation sponsor, focused on community resilience and distributed energy. Sanctuary is a community-energy siting layer: where would solar-and-battery hardening protect the most vulnerable people and strengthen the local grid? It connects to the resilience work in Alectra's distribution-system plan, without claiming any of these buildings runs it today."
- *Guardrail:* Alectra's GridExchange pilot ran in Vaughan, Markham, Barrie, Richmond Hill, and Hamilton, not Peel. Frame it as a transferable template, never a Peel deployment.

---

## J. Hostile and skeptical (quick set)

> The full adversarial drill, with the 17 prepared finalist questions plus more, is in [`05-hard-questions.md`](05-hard-questions.md). These are the fast ones.

**Q: Are these buildings already resilience hubs?** *(the one we fear most, everyone must know this cold)*
> **Say:** "No. They're candidate hubs. Sanctuary ranks where hardening should be investigated first. The building names and the heat layer are real. Reachable population and hardening potential are labelled planning estimates that require site verification before any capital decision. Nothing here is claimed to be equipped today."

**Q: Isn't this just a fancy heat map with some dots?**
> **Say:** "A heat map tells you where it's hot. Sanctuary answers a Monday-morning planning question: if Peel can harden only five buildings first, which five? It names them, ranks them, scores them transparently, and tells you what's proven versus what needs a visit. The map is the input. The ranked decision is the output."

**Q: What's the weakest part of your project?**
> **Say:** "The reachable-population modelling. Nine of our ten buildings show pending because a 500 metre circle isn't a real walkshed, sidewalks, transit, and barriers matter. We chose to show that gap honestly rather than fill it with a number we can't defend. Replacing it with a real walkshed is step one of the roadmap."
- *Why this answer is strong:* Naming a real, bounded weakness with a credible fix reads as maturity, not doubt.

**Q: Why should this win?**
> **Say:** "Because it does what the rubric asks and refuses to fake anything. It's an original take on a real problem, grounded in verified public data with the receipts on screen, it fits both sponsors, and it ends in a decision a Peel planner could act on Monday. In an event where AI slop disqualifies, honesty is the differentiator."

---

## K. Team and process

**Q: Who did what?** *(Collaboration is 20 percent of the score, name everyone)*
> **Say:** Name all five and their lane. **Cynthia Salazar** (programming and marketing), **Jackson Li** (project management and engineering), **Roger Lungsee** (automation engineering), **Jhonatan** (programming), **Leo Atienza** (research and build). The tracks were GIS and data, narrative and design, and verification, with a dedicated skeptic whose only job was to challenge every claim.
- *Guardrail:* Make sure names are on screen in the video and each person can speak to their piece live.

**Q: How did you collaborate and stay coordinated?**
> **Say:** "We locked scope hard on day one, a written must-have list and one signature demo moment, so nobody drifted into building extra features. Then we split into data, narrative, and verification tracks and recombined for the recording. The honesty rules were shared discipline, not one person's job."

**Q: What did you learn?**
> **Say:** "That the discipline of not overclaiming is harder and more valuable than adding features. Our sharpest moments came from cutting, demoting Gore Meadows after the data disagreed, refusing to fake a winter cold map. Saying 'this is pending' out loud is what makes the verified parts believable."

---

## L. Edge cases and curveballs

**Q: Any privacy concerns with the data?**
> **Say:** "None. It's all aggregate public data. Census tract and dissemination-area populations, a public health vulnerability index, public building addresses. No individuals, no personal data, nothing scraped that Statistics Canada, Peel, or the municipalities haven't already published."

**Q: Aren't you stigmatizing or redlining these neighbourhoods?**
> **Say:** "We thought hard about that. The framing is asset-based: these are neighbourhoods with trusted community infrastructure worth investing in, not neighbourhoods to avoid. The index is Peel's own public health tool, built precisely to direct resources to where need is highest. We're using it for its intended purpose."

**Q: Liability. What if you send someone to a building that isn't actually safe?**
> **Say:** "That's exactly why the resident-facing app is a future stage and not today's product. The current tool is for planners, and it routes nobody anywhere. A public app would only ever show verified hubs, open, equipped, owner-agreed, with live status and emergency-manager sign-off. We won't point a resident at a candidate hub."

**Q: Why not just build more official cooling centres instead?**
> **Say:** "That may well be part of the answer, and Sanctuary helps decide where a new or upgraded centre would protect the most vulnerable people first. But building new is slow and expensive. Hardening the trusted buildings that already exist, inside the high-risk pockets, is often faster and reaches people who wouldn't travel to a brand-new official site."

**Q: What about people who can't travel at all during a heat wave?**
> **Say:** "A fair limit. A walk-in hub doesn't reach a homebound resident. That's where this connects to the bigger picture: hardened hubs with backup power also support medical refrigeration and charging for caregivers and outreach, and the same data could prioritize check-in routes. We're honest that this is one layer of resilience, not the whole answer."

**Q: Could this work for hazards beyond heat and flood, like wildfire smoke or ice storms?**
> **Say:** "Yes. The pattern is hazard-agnostic: a real risk layer, plus trusted buildings, plus honest scoring. Swap the risk layer for air-quality or ice-storm outage data and the same method holds. The discipline stays the same: if a layer is modelled, label it."

---

## Honesty guardrails (the lines we never cross)

These are estimates or pending. Never state them as fact.

| Don't say | Say instead |
|---|---|
| "This building is already a resilience hub." | "Candidate hub, not yet equipped." |
| "It has solar, batteries, backup power, or enough cooling." | "Pending. A site-audit question." |
| "The battery is X kW. It costs $Y." | "Planning estimate, requires a site audit." (No kW, kWh, or dollar figures, ever.) |
| "Reachable population is exactly N." | "Modelled 500 metre catchment, pending a real walkshed." (Malton about 5,900 modelled; tract population 5,217 verified.) |
| "This will save lives, restore power, or is guaranteed funding." | "A planning layer. Impact and funding require the next steps." |
| "Alectra's GridExchange ran in Peel." | "It ran in Vaughan, Markham, Barrie, Richmond Hill, and Hamilton. A template Peel can adopt." |
| "The 30 percent Clean Technology credit pays for it." | "The 15 percent Clean Electricity credit, the one tax-exempt owners can reach." |
| "AI-powered." | "AI drafts a site-audit checklist behind a no-overclaim filter. It doesn't make the ranking, and the live site calls no model." |

**When unsure about anything, fall back to the safe sentence:**
> *"This is a candidate hub and a planning estimate. It needs a site audit before anyone treats it as ready."*

---

## The closing line (have one ready)

> "Harden these five trusted buildings first, then repeat the same honest method across Alectra's service territory. That's Sanctuary."
