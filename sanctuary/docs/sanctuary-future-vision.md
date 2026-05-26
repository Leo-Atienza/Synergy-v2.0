# Sanctuary — Future Vision (the "Command Center" north-star)

> **⚠️ This is the long-term vision, NOT the hackathon build scope.** The command-center, Virtual Power Plant, dispatch, and financing layers below are **explicitly out of scope** for the submission — the locked build only *ranks candidate hubs* (see [`../../.hackathon/scope.md`](../../.hackathon/scope.md), "EXPLICITLY CUT"). For what we're actually building, read **[`sanctuary-introduction-faq.md`](sanctuary-introduction-faq.md)**. Keep this doc for the pitch's "where it goes" closing and judge Q&A on the operating model.
>
> **Citation note:** bracketed citations like `[1]` and `[source needed]` are placeholders from the working draft. Replace them with real source links before using any of this copy in public materials.

## Project Overview

In the face of escalating extreme weather events and grid instability, the safest emergency shelter is not always the largest municipal building. It is the space a community already knows and trusts. **Sanctuary** is a software dashboard designed for municipal emergency managers to map, monitor, and dispatch resources to a decentralized network of Community Resilience Hubs.

By upgrading trusted local infrastructure, such as places of worship, public libraries, and community centers, with solar and battery microgrids, municipalities can help vulnerable populations maintain access to critical services like medical refrigeration, cooling, and water during catastrophic power failures `[1]`, `[2]`. Sanctuary provides the software layer that turns these individual buildings into a coordinated, intelligent, and financially viable urban defense network.

## The Problem

Centralized emergency response often fails to reach a city's most marginalized residents. Following severe weather events, municipalities frequently find that standard communication channels miss vulnerable populations, and centralized cooling or warming centers remain drastically underutilized due to transportation barriers or lack of community trust `[3]`. Prolonged grid outages also pose life-threatening risks to individuals who rely on electrically powered medical devices, air conditioning, refrigeration, and clean water access.

## The Sanctuary Solution

### 1. Data-Driven Vulnerability Targeting

Sanctuary reduces guesswork in emergency planning by using geospatial intelligence. The platform integrates the Peel Region Heat Vulnerability Index (HVI) to identify neighborhoods at the highest risk during extreme heat `[4]`.

Sanctuary cross-references HVI with the Ontario Marginalization Index (ON-Marg) to identify areas facing residential instability, material deprivation, social isolation, and other vulnerability factors `[source needed]`. This helps prioritize resilience infrastructure where it is most likely to protect lives.

### 2. A Tiered Network of Trust

Building on municipal frameworks like the Brampton Lighthouse Project, which identified 79 local places of worship as effective emergency rendezvous points `[3]`, Sanctuary organizes community infrastructure into a manageable tiered network:

- **Tier 1 Primary Hubs:** Secular, municipally supported anchors such as public libraries and recreation centers `[5]`.
- **Tier 2 Secondary Hubs:** High-trust, neighborhood-embedded sites such as mosques, gurdwaras, churches, mandirs, and NGO facilities `[1]`.

The goal is not to replace public emergency infrastructure. The goal is to expand it through buildings that already have local trust, local volunteers, and local reach.

### 3. Virtual Power Plant and Microgrid Management

Sanctuary includes an **Energy Command** panel that models active management of distributed energy resources.

- **Blue Sky Mode:** During normal operations, Sanctuary aggregates solar and battery capacity from participating hubs. The network can function as a Virtual Power Plant (VPP), supporting the broader grid and generating operating revenue `[source needed]`.
- **Emergency Mode:** During a blackout, the dashboard helps emergency managers monitor facilities as they island from the main grid, prioritizing stored battery power for critical loads such as medical refrigeration, water pumps, communications, and cooling `[6]`.

For the hackathon, this energy panel should be framed as a **modelled planning layer**, not proof that any named building already has a working microgrid.

### 4. Financial Feasibility

Sanctuary treats financing as part of the resilience plan, not an afterthought. The physical retrofitting of community spaces may be supported by federal clean-energy funding mechanisms.

The Clean Technology Investment Tax Credit (CTITC) provides up to a 30% refundable credit for eligible clean-energy property `[source needed]`. The Clean Electricity Investment Tax Credit (CEITC) offers a 15% refundable tax credit that can be accessible to tax-exempt entities, including municipalities, charities, and Indigenous-owned corporations `[source needed]`.

That matters because many of the most trusted community buildings are not conventional private-sector energy customers. Sanctuary's financing layer helps emergency planners see which sites are not only socially valuable, but also financially plausible.

## Frequently Asked Questions

### What exactly is a Community Resilience Hub?

A resilience hub is a trusted, community-serving facility upgraded with resilient energy systems, such as solar panels and battery storage. These hubs support residents during extreme weather emergencies by providing reliable power, climate-controlled shelter, resource distribution, communications, and year-round community services `[2]`.

### How does Sanctuary decide where to place these hubs?

Sanctuary uses an Esri-powered mapping interface to overlay municipal and public-health data. The key layers are the Peel Heat Vulnerability Index (HVI) and the Ontario Marginalization Index (ON-Marg) `[4]`, `[source needed]`.

This lets municipal planners identify where extreme climate risk overlaps with socioeconomic vulnerability, then rank candidate hubs by proximity, trust, roof potential, and reachable vulnerable population.

### Does this project only focus on places of worship?

No. Faith-based organizations are strong starting points because many already have deep community ties, volunteer networks, and emergency-gathering potential `[3]`. Sanctuary is designed to map and manage a diverse network that can also include:

- public libraries;
- recreation centers;
- community centers;
- schools;
- fire stations;
- NGO facilities;
- food banks;
- municipal service buildings.

### How does the platform help the energy grid when there is not an emergency?

Sanctuary is designed with Virtual Power Plant capabilities, inspired by utility pilots such as Alectra's POWER.HOUSE `[source needed]`.

When the grid is stable, decentralized solar and battery systems at community hubs can be aggregated to dispatch clean energy back to the grid, reduce peak demand strain, and generate revenue that helps keep the hubs operational.

For the hackathon, this should be presented as the **future operating model**, while the prototype focuses on siting and prioritization.

### How will municipalities or non-profits pay for the solar panels and batteries?

The upfront capital costs can be reduced by federal clean-energy incentives. The Clean Electricity Investment Tax Credit (CEITC) can help tax-exempt organizations, such as municipal governments and community charities, access a 15% refundable tax credit for clean-electricity investments `[source needed]`.

The Clean Technology Investment Tax Credit (CTITC) can provide up to a 30% credit for eligible clean-energy equipment `[source needed]`.

### What is the hackathon version of Sanctuary?

The hackathon version should be a focused StoryMap or dashboard, not a full enterprise platform.

The minimum strong version is:

- a Peel or Brampton map;
- the Peel Heat Vulnerability Index;
- ON-Marg or related vulnerability data;
- 8 to 10 hand-verified candidate hubs;
- a transparent scoring method;
- one demo moment showing a vulnerable area, a trusted building, and the reachable residents it could protect.

### What should Sanctuary not claim?

Sanctuary should not claim that named buildings already have solar, batteries, cooling capacity, backup power, or formal emergency agreements unless those facts are verified.

Use careful labels:

- `candidate hub`;
- `estimated solar potential`;
- `modelled battery sizing`;
- `requires site verification`;
- `planning layer, not a current-state audit`.

### What is the one-sentence pitch?

**Sanctuary shows which trusted community buildings should become solar-and-battery resilience hubs before the next heat wave or blackout.**
