# Sanctuary Team Brief

Use this as the fast team cheat sheet before recording or answering judges.

## Read This First

If you only have two minutes, remember this:

- **Sanctuary is a planning map, not an emergency app yet.**
- **Current demo:** heat-risk map -> Malton Community Centre and Library -> honesty labels -> ranked top five.
- **Main line:** "If Peel can harden only five trusted buildings first, Sanctuary ranks which five to verify first."
- **Do not overclaim:** no building is confirmed ready, equipped, funded, or signed on.
- **Future scalability:** public navigation app, cold-weather support, better walksheds, operations status, and Alectra-wide scaling are roadmap ideas.

## Presentation Flow

Use this order when speaking:

1. **Problem:** heat risk and shelter access are uneven.
2. **Hero click:** Malton Community Centre and Library, 3540 Morning Star Drive.
3. **Honesty labels:** candidate hub, modelled 500 m reach, site audit required.
4. **Decision:** ranked top five buildings to verify and harden first.
5. **Future scalability:** close with how the method grows after the prototype.

## Quick Jump

- [What Sanctuary Is](#1-what-sanctuary-is)
- [What The Demo Shows](#4-what-the-demo-shows)
- [What Is Real](#5-what-is-real)
- [What Is Estimated](#6-what-is-estimated)
- [Terms And Shortcuts](#8-terms-and-shortcuts)
- [Who Uses Sanctuary And How](#12-who-uses-sanctuary-and-how)
- [Scoring In Plain English](#14-scoring-in-plain-english)
- [Future Scalability Plans](#16-future-scalability-plans)
- [Judge FAQs](#19-judge-faqs)

## Core Safety Rule

When unsure, say:

> "This is a candidate hub and a planning estimate. It needs a site audit before anyone treats it as ready."

## 1. What Sanctuary Is

Sanctuary is a planning tool for heat waves and power outages in Peel.

It answers one question:

**If Peel can harden only five trusted buildings first, which five should it check first?**

The project does not say any building is ready today. It ranks **candidate hubs** for the next step: owner talks, site audits, electrical checks, cooling checks, and real access planning.

## 2. The Short Pitch

During a heat wave, the safest building is not always the nearest official cooling centre. It may be the trusted building people already know.

Sanctuary uses public heat-risk data and public building data to rank libraries, recreation centres, gurdwaras, mosques, mandirs, and other community buildings as **candidate hubs**.

Our hero site is **Malton Community Centre and Library, 3540 Morning Star Drive, Mississauga**.

## 2.1 Challenge Fit

Sanctuary fits **Theme 3, Problem Statement 2**: climate resilience, vulnerable populations, and shelter access.

The problem is simple:

- heat waves and flooding do not affect every neighbourhood equally;
- some residents cannot easily reach an official safe space;
- municipalities and utilities need a clear way to see where climate risk and shelter access overlap.

Sanctuary's answer is also simple:

**Use public risk data to choose which trusted buildings should be verified and hardened first.**

## 2.2 Main Deliverables

The judged hackathon deliverable is a StoryMap/Web Map, not a full public app.

The current deliverables are:

- **ArcGIS StoryMap:** the main presentation artifact;
- **ArcGIS Web Map:** the map with HVI, candidate buildings, and ranked hubs;
- **Next.js support site:** backup interactive showcase and explanation pages;
- **candidate CSV/GeoJSON:** the data spine;
- **5-minute video:** the qualifier submission;
- **methods and Q&A docs:** proof that we know what is real, estimated, and pending.

If ArcGIS is slow on camera, use screenshots and the Next.js showcase as backup.

## 3. What Judges Should Remember

They should remember this:

**Sanctuary picks five named Peel buildings to harden before the next heat wave or outage.**

Not a generic dashboard. Not a fake emergency app. Not a solar sizing tool.

## 4. What The Demo Shows

1. Peel's Heat Vulnerability Index map shows where heat risk is highest.
2. We click **Malton Community Centre and Library**.
3. The panel shows honesty labels:
   - candidate hub, not currently equipped;
   - modelled 500 m reach;
   - solar/battery: planning estimate, requires site audit.
4. Sanctuary reveals the ranked top five buildings to investigate first.
5. We explain what is real, what is estimated, and what still needs checking.

## 5. What Is Real

- Peel Heat Vulnerability Index is a public ArcGIS layer.
- Candidate building names and addresses come from public pages.
- Malton Community Centre and Library was checked against the public Peel HVI service.
- Malton is in HVI quintile 5, the highest heat-risk quintile.
- The candidate list lives in `sanctuary/data/candidate-hubs.csv`.
- The StoryMap/Web Map is the main judged artifact.

## 6. What Is Estimated

- The 500 m catchment is a simple model, not a real walking route.
- Roof or hardening class is a rough planning class: small, medium, or large.
- Solar and battery ideas are planning estimates only.
- Reachable population is pending until a real walkshed is run.

## 7. What Is Unknown

We do not know yet:

- whether a site has backup power;
- whether a site has enough cooling capacity;
- whether a site has electrical readiness;
- whether an owner has agreed to emergency use;
- what the exact solar or battery size would be;
- what the exact upgrade cost would be.

Say these are **site-audit questions**.

## 8. Terms And Shortcuts

**Sanctuary**  
Our project name. It means a trusted safe place during heat, storm, or outage conditions.

**HVI**  
Heat Vulnerability Index. A public Peel layer that shows relative heat risk by census tract.

**HVI quintile**  
A score from 1 to 5. In our demo, 5 means highest heat vulnerability.

**Candidate hub**  
A building worth checking first. It is not confirmed ready.

**Resilience hub**  
A trusted place that can support people before, during, or after an emergency. It may offer cooling, warmth, charging, information, washrooms, food, or services.

**Hardening**  
Upgrading a building so it can work better during heat or outage events. This might include electrical work, cooling support, solar, storage, staffing, communications, and agreements.

**500 m catchment**  
A simple circle around a building. It estimates nearby reach. It is not the same as a real walking route.

**Walkshed**  
A better access model using real streets, paths, transit, and barriers.

**Verified**  
Checked against a public source.

**Modelled**  
Estimated with a simple method. Useful for planning, not final proof.

**Pending**  
Needs a site audit or owner confirmation.

**ArcGIS Web Map**  
The interactive map used for the main demo.

**StoryMap**  
The narrative ArcGIS page used for the video and judging flow.

**Alectra**  
The local energy utility partner/sponsor context. We frame Sanctuary as useful for utility and municipal planning.

**ODRSF**  
Statistics Canada's Open Database of Recreational and Sport Facilities. It helps cross-check facility names, types, addresses, and locations.

**Clean Electricity ITC**  
A Canadian investment tax credit. The project materials frame it as a possible 15% refundable path for eligible tax-exempt owners, not as guaranteed funding.

**Gemini planning checklist**  
A small assistant feature that gives a reviewed checklist for what planners should verify. It uses public facts only. It does not change ranks, costs, or energy sizing.

## 9. Safe Words To Use

Use these:

- "candidate hub"
- "planning estimate"
- "modelled 500 m catchment"
- "site audit required"
- "first-pass ranking"
- "public data"
- "trusted community infrastructure"
- "which buildings should be checked first"

Avoid these:

- "this building is already a hub"
- "this site has backup power"
- "this site has solar or batteries"
- "this will save lives"
- "this restores power"
- "the cost is..."
- "the battery size is..."
- "the reachable population is exact"

## 10. Why This Matters

Heat, storms, and outages hit people unevenly. Some people cannot easily travel to an official cooling centre. Some people trust a nearby library, recreation centre, gurdwara, mosque, mandir, or church more than a distant official site.

Sanctuary helps planners start with places people already know.

## 11. Why Malton First

Malton Community Centre and Library is the hero candidate because:

- it is a real named civic building;
- it is at **3540 Morning Star Drive**;
- it sits in an HVI quintile 5 area;
- it is a community centre and library;
- it has a public role people can understand quickly.

We still say it is a **candidate**, not a finished resilience hub.

## 12. Who Uses Sanctuary And How

Sanctuary has different users at different stages.

### Current Hackathon Users

**Municipal resilience planners** use Sanctuary to decide which buildings should be checked first for heat and outage readiness.

How they use it:

- open the HVI map;
- look at high-risk neighbourhoods;
- compare nearby trusted buildings;
- read the honesty labels;
- pick the first sites for audit and partner outreach.

**Alectra or utility community-energy planners** use Sanctuary to see where future energy hardening could support public need.

How they use it:

- find candidate buildings in high-risk areas;
- see which sites may be good for future solar/storage investigation;
- coordinate with municipalities before deeper engineering work;
- repeat the method across more of their service territory.

**Emergency management teams** use Sanctuary as an early planning layer.

How they use it:

- identify possible gathering points before a heat wave, storm, or outage;
- check which sites need agreements, staffing, cooling checks, and communications planning;
- avoid relying only on distant official facilities.

**Community partners and building owners** use Sanctuary to understand why their building may be asked to participate.

How they use it:

- see why their site appears on the map;
- review what is still unknown;
- decide whether they want to join a future resilience-hub network;
- prepare for a site audit.

**Hackathon judges** use Sanctuary to evaluate the idea, data discipline, design, and impact.

How they use it:

- watch the StoryMap/Web Map demo;
- check the top-five decision reveal;
- ask whether the team overclaimed;
- judge whether the project could become useful after the hackathon.

### Future Public Users

In the future, after sites are verified and live status exists, **residents** could use a public Sanctuary app.

How they would use it:

- open the app during a heat wave, storm, or outage;
- enter their location or use current location;
- see the nearest verified safe building;
- check whether it is open;
- see what support is available, such as cooling, charging, washrooms, water, or information;
- get simple directions by walking, transit, or driving;
- see warnings if a site is full, closed, or not yet verified.

This is a future plan only. The current hackathon version does not tell residents where to go during a real emergency.

## 13. How Sanctuary Works

Sanctuary works in five simple steps:

1. Start with a heat-risk map.
2. Add trusted public and community buildings.
3. Check each building's heat-risk area.
4. Score the buildings with a simple, honest method.
5. Show the top candidates for site audits and partner talks.

The point is not to automate every decision. The point is to help planners ask the right first question: **which trusted places should we check first?**

## 14. Scoring In Plain English

Sanctuary uses five scoring factors:

- **Heat vulnerability nearby, 35%:** Is the building in or near a high heat-risk area?
- **Vulnerable population in catchment, 25%:** Who might be nearby? This is still modelled with a 500 m circle.
- **Trust / community role, 20%:** Is this a place people already know and use?
- **Rooftop hardening potential, 10%:** Is the building roughly small, medium, or large for future upgrades?
- **Facility suitability, 10%:** Is it the kind of building that could support people during heat or outage conditions?

The score is a first-pass planning score. It is not an engineering study.

## 15. Data Fields In The Candidate List

The candidate data is simple on purpose.

Important fields include:

- **name:** real building name;
- **address:** public address;
- **type:** community centre, library, place of worship, or similar;
- **municipality:** Mississauga, Brampton, or Caledon;
- **source URL:** public page used to check the building;
- **HVI quintile:** heat-risk score from 1 to 5;
- **exposure quintile:** how much heat stress the area faces;
- **sensitivity quintile:** how strongly heat may affect people nearby;
- **adaptive capacity quintile:** how easily people nearby can cope or get help;
- **catchment method:** currently modelled 500 m;
- **reachable population:** pending in the current seed data;
- **roof/hardening class:** small, medium, or large planning class;
- **facility suitability:** rough planning fit;
- **trust role:** civic anchor or faith/community anchor;
- **verification status:** what has been checked and what is still pending;
- **notes:** short reason for the candidate.

These fields keep the story explainable. A judge should understand the model in under 20 seconds.

## 16. Future Scalability Plans

The hackathon version ranks a small hand-verified list of Peel buildings. The future version can grow in stages.

Short version:

- **Better data:** replace circles with real walksheds and add more verified buildings.
- **Real readiness:** audit cooling, warming, backup power, accessibility, staffing, and owner agreements.
- **Public app later:** help residents find verified safe buildings only after live status is trustworthy.
- **Scale the method:** repeat the same honest scoring across Alectra territory and other hazards.

**Presentation note:** Future Scalability should be featured when we present. The showcase website or StoryMap should include a visible **Future Scalability** section/page after the core ranked-five demo. Use it to explain the public navigation app, cold-weather resilience, stronger data layers, operations tracking, and Alectra-wide scaling. Keep the wording honest: these are roadmap directions, not features already implemented in the prototype.

Keep this section short in the 5-minute video. The ranked-five demo is still the main moment; Future Scalability is the closing roadmap.

Presentation timing:

- Spend most of the time on Malton, the honesty labels, and the ranked top five.
- Give Future Scalability one clear closing section, about 20 to 30 seconds.
- Use four points only in the spoken pitch: better walksheds, more verified buildings/site audits, a future public app after verification, and repeat across Alectra territory.
- Mention cold-weather resilience as one future extension, not as a second demo.

### Stage 1: Better Access Modelling

Replace the simple 500 m circle with real walksheds.

That means checking:

- sidewalks;
- roads;
- bus routes;
- barriers like highways;
- travel time for older adults, families, and people without cars.

This makes the reach estimate more realistic.

### Stage 2: More Buildings

Expand from 10 candidate buildings to a full Peel-wide list.

Add more:

- libraries;
- recreation centres;
- schools;
- places of worship;
- community halls;
- civic facilities;
- sport and recreation facilities from ODRSF.

Each new building still needs a source, address check, and honesty label.

### Stage 3: Real Site Audits

After ranking, teams visit the top sites.

They check:

- cooling capacity;
- backup power;
- electrical readiness;
- roof condition;
- accessibility;
- washrooms;
- staff and volunteer capacity;
- owner/operator agreement.

This is where candidates become real projects.

### Stage 4: Funding And Upgrade Planning

Once a site passes a basic audit, planners compare funding paths.

Possible future funding paths include:

- municipal capital budgets;
- utility partnership programs;
- grants;
- the Clean Electricity ITC, if the owner is eligible;
- community energy partnerships.

We should not say funding is guaranteed.

### Stage 5: Operations Layer

After sites are verified and upgraded, Sanctuary could track real readiness.

Future status fields could include:

- open or closed;
- cooling available;
- warming available;
- charging available;
- supplies available;
- staff available;
- backup power status;
- public contact information.

This would turn Sanctuary from a planning map into an operations tool.

### Stage 6: Public Navigation App

After buildings are verified, upgraded, and connected to live status data, Sanctuary could become a public-facing app.

The public app would help residents answer:

**Which verified safe building is open near me, and what support does it offer?**

The app could show:

- nearest verified safe building;
- whether it is open;
- distance and travel time;
- walking, transit, and driving directions;
- available supports, such as cooling, charging, washrooms, water, food, information, or basic services;
- accessibility information;
- language or community support if verified;
- alerts for closures, full sites, or unsafe routes;
- official emergency instructions from the municipality.

This public app should only launch after:

- owners agree to participate;
- sites pass basic audits;
- opening hours and emergency roles are confirmed;
- live status can be trusted;
- emergency managers approve the public wording.

Important: this future app should route people only to **verified safe buildings**, not to candidate hubs.

### Stage 7: Scale Across Alectra Territory

The same method can work beyond Peel.

To repeat it in another city:

1. Swap in that city's heat-risk or climate-risk layer.
2. Add local public and community buildings.
3. Verify names and addresses.
4. Run the same scoring method.
5. Label what is real, modelled, and pending.
6. Pick the first sites for audit.

This is why the project matters to Alectra: it connects grid resilience, public need, and trusted local buildings.

### Stage 8: Stronger Data Later

A future version could add:

- cold-weather vulnerability or cold-exposure layers;
- flood-risk layers;
- outage-history layers;
- transit access;
- demographic vulnerability data;
- real walking routes;
- building footprint data;
- owner participation status;
- live facility status during emergencies.

Every new layer must stay honest. If it is estimated, label it.

### Stage 9: Cold-Weather Resilience

The current demo focuses on cooling people during heat waves because Peel's public HVI layer is verified and ready to use.

In the future, the same hub-siting method could support cold-weather resilience too.

That future version could ask:

**Which verified buildings should help people warm up during cold snaps, winter storms, or heating outages?**

To do this responsibly, Sanctuary would need a separate cold-risk method, such as:

- cold-weather vulnerability data;
- outage risk during winter storms;
- housing or energy-poverty indicators;
- transit and walking access in winter conditions;
- confirmed indoor warming capacity;
- confirmed backup heat or power status;
- owner/operator agreement for cold-weather response.

The same building could be useful in both heat and cold, but the proof is different. Cooling readiness and warming readiness must each be checked.

## 17. What We Are Not Building Yet

We are not building:

- a live emergency dispatch system;
- a full virtual power plant;
- exact solar or battery sizing;
- a full engineering feasibility report;
- a guarantee that any site will participate;
- a final funding plan;
- a public navigation app for real emergency use;
- a cold-weather vulnerability map in the current demo.

Those are future steps after the hackathon.

## 18. How To Explain The Project In 20 Seconds

"Sanctuary helps Peel decide which trusted buildings to harden first before the next heat wave or outage. We start with public heat-risk data, add real community buildings, rank the first candidates, and clearly label what is verified, modelled, and still pending."

## 19. Judge FAQs

### Are these buildings already resilience hubs?

No. They are candidate hubs. Sanctuary ranks where to investigate hardening first.

### Does Malton already have solar, batteries, or backup power?

We do not claim that. Those are pending site-audit questions.

### Are your solar and battery numbers measured?

No. We avoid exact solar and battery numbers in the demo. We only use rough hardening classes and say a site audit is required.

### Are the reachable population numbers exact?

No. The demo uses a modelled 500 m catchment. A real project would replace that with a walkshed.

### Why include places of worship?

Because resilience depends on trust, local knowledge, volunteers, and buildings people already use. We treat faith buildings as community infrastructure, not charity.

### Is this tokenizing faith communities?

No. The list mixes civic and faith/community buildings. Every site is framed as an asset and partner, not as a group being used.

### Why not just build more cooling centres?

That may be part of the answer. Sanctuary helps decide where new or upgraded safe spaces should go first.

### What makes this different from a normal map?

The map ends in a decision: **harden these five named buildings first**. It is not just a heat map.

### What data did you use?

We used the public Peel Heat Vulnerability Index, public candidate building pages, facility data, and hand-verified addresses. The candidate CSV is in `sanctuary/data/candidate-hubs.csv`.

### Why should Alectra care?

Alectra works on community energy and grid resilience. Sanctuary shows where energy hardening could meet public need first.

### Can this scale beyond Peel?

Yes, as a planning method. Replace the local heat-risk layer and candidate list, then repeat the same scoring and honesty labels.

### What happens after the hackathon?

1. Confirm owners and operators.
2. Replace 500 m circles with real walksheds.
3. Run site audits.
4. Check cooling, electrical readiness, backup power, and accessibility.
5. Compare funding paths.
6. Expand across more communities.

### Who is the first real user?

The first user is a planner, not a resident. That could be an Alectra community-energy planner, a municipal resilience planner, or an emergency management team deciding which buildings to verify first.

### How would the public use Sanctuary later?

After sites are verified, a future public app could help residents find the nearest verified safe building, check whether it is open, see what supports are available, and navigate there.

### Why not make the public app first?

Because sending people to a building during an emergency requires verified safety, open hours, owner agreement, live status, and official emergency wording. The responsible first step is the planning map.

### Did Gemini make the ranking?

No. The ranking is based on the candidate data and scoring method. Gemini only helps produce a planning checklist for what to verify next.

### Did Gemini use private data?

No. The checklist uses public facts only.

### What is the biggest limitation?

The prototype is a first-pass planning tool. It needs real walksheds, owner confirmation, site audits, and engineering work before any real investment decision.

### How does this become real after the hackathon?

Start with the top five. Confirm owners, run site audits, replace modelled access with real walksheds, check funding, then expand the same method to more buildings.

### Could this work during floods or winter storms too?

Yes. The same trusted-building method can work for other hazards, but the risk layer would change. For floods, use flood-risk data. For winter outages, use outage and cold-weather data.

### Are we only helping people cool down?

The current prototype focuses on cooling during heat waves because the verified Peel HVI layer gives us a strong source. Future Sanctuary could also help people warm up during cold snaps or winter outages, but that needs separate cold-weather data and verified warming readiness.

### Would the same hubs work for heat and cold?

Some might. A community centre, library, or place of worship could support cooling in summer and warmth in winter. But we cannot assume that. Each site would need separate checks for cooling, warming, backup power, staff, hours, and owner agreement.

### Why is this scalable?

The method is simple: risk layer plus trusted buildings plus honest scoring. Any municipality can repeat that pattern with local data.

## 20. One-Sentence Close

Sanctuary helps Peel and energy partners decide which trusted buildings to verify and harden first before the next heat wave or outage.
