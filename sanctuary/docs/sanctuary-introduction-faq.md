# Sanctuary - Simple Introduction and FAQ

> **Backup status:** Sanctuary is a strong Theme 3 candidate, but it is not the locked build. Valley remains the active submission unless scope is amended.

## 1. What It Is

Sanctuary is a map and StoryMap concept for Peel Region.

It finds trusted community buildings that could become resilience hubs during heat waves, floods, or outages:

- gurdwaras;
- mosques;
- mandirs;
- churches;
- libraries;
- recreation centres;
- community centres;
- schools, if the data is strong enough.

The idea is not to tell people to travel farther during an emergency. The idea is to identify buildings communities already trust, then show which ones should be hardened first with cooling, solar, and battery support.

## 2. The Problem

Theme 3 says not every community experiences energy and climate risk the same way.

For Sanctuary, the sharp version is:

**The people most exposed to heat and outages are often not within easy reach of a reliable, cool, powered place.**

Existing tools usually show official cooling centres. Sanctuary asks a different question:

**Which trusted buildings should become the next safe places?**

That matters because a library that closes early or a cooling centre two bus rides away may not help an older adult, a renter without AC, or a family trying to keep medication cold.

## 3. The Demo Moment

The 10-second reveal should be one motion:

1. A Peel heat-vulnerability area glows dark red.
2. The user clicks a nearby community building, ideally a real named gurdwara, mosque, library, or rec centre.
3. A panel opens:
   - estimated roof area;
   - estimated solar + battery potential;
   - reachable vulnerable residents within a walk buffer;
   - why this building ranks above nearby alternatives.
4. A counter ticks up as the top hubs light up.

The line judges should remember:

**"The safest building is not the nearest building. It is the one people already trust, inside the heat-vulnerability zone."**

## 4. Why It Fits Theme 3

Sanctuary maps directly to Theme 3, Problem Statement 2:

- heatwaves and flooding affect vulnerable populations unevenly;
- communities rely on public and community facilities as warming or cooling spaces;
- utilities and municipalities need simple ways to see where climate risks and limited shelter access overlap.

It also has sponsor fit:

- **Esri:** clear ArcGIS StoryMap / Dashboard / Network Analyst project.
- **Alectra:** Peel territory, community energy, microgrids, DER, resilience.

## 5. What Data Is Real

Sanctuary should lead with data that is public and checkable:

- Peel Heat Vulnerability Index, public ArcGIS layer;
- Ontario Marginalization Index 2021;
- Brampton and Mississauga building footprints;
- OpenStreetMap places of worship;
- municipal libraries, recreation centres, and civic facilities;
- NRCan solar potential for rough regional estimates.

## 6. What Must Be Labelled

Do not overclaim these:

- per-building solar capacity;
- battery sizing;
- whether a building currently has backup power;
- whether a building currently has enough cooling;
- exact walkshed population if using a simple buffer instead of Network Analyst.

Use labels like:

- `estimated`;
- `candidate hub`;
- `modelled 500 m walkshed`;
- `requires site verification`;
- `not a current-state audit`.

## 7. Minimum Lovable Version

If Sanctuary becomes active under the short deadline, do not build a full platform.

Build this:

- Brampton-only or Peel-only StoryMap;
- 8 to 10 hand-verified community buildings;
- Peel Heat Vulnerability Index overlay;
- simple scoring table;
- one Dashboard or map;
- one clean 5-minute video.

No accounts. No database. No live app required. No pretending the model is a final engineering study.

## 8. Main Risks

| Risk | Simple answer |
|---|---|
| Solar/battery estimates look fake | Label as estimated and anchor the story on siting, not exact kW. |
| OSM misses a major community building | Hand-verify the showcase buildings. |
| Faith-building framing feels tokenistic | Use asset-based language: trusted community infrastructure, not "vulnerable people need churches." |
| Too much GIS complexity | Use 500 m buffers instead of Network Analyst if time is tight. |
| It competes with Valley | Keep this as backup unless scope is amended. |

## 9. FAQ

### Is Sanctuary replacing Valley?

No. Not unless scope is amended.

### What is the user?

An Alectra GRE&T community-energy planner, municipal resilience planner, or community partner deciding which buildings to harden first.

### Is this a consumer app?

No. It is a decision-support artifact and StoryMap.

### Why faith/community buildings?

Because official emergency infrastructure is not the only infrastructure people trust. In many communities, a gurdwara, mosque, mandir, church, or community centre is already where people gather, ask for help, and organize.

### Does Sanctuary build the microgrid?

No. It ranks candidate hubs for investment. The product is the prioritization map, not an installed battery.

### What should the pitch not say?

Do not say every named building is already equipped. Say these are candidate hubs to harden.

### What is the one sentence?

**Sanctuary shows which trusted Peel buildings should become solar-and-battery resilience hubs for the people most exposed to heat and outages.**

