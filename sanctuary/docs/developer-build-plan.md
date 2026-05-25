# Developer Build Plan - Sanctuary

> **Status:** backup-only candidate packet. Do not spend implementation time on this while Valley is the active scoped submission.
> **If activated:** this is a StoryMap/Dashboard build, not a full custom app.

## 0. Current State

| Component | State |
|---|---|
| Seed card | Written and scored as a strong Theme 3 candidate. |
| Core data spine | Verified: Peel Heat Vulnerability Index is a public ArcGIS item. |
| Scope lock | Not active. Valley is active. |
| Code | None. |
| Recommended artifact | ArcGIS StoryMap + one Web Map / Dashboard. |
| Main risk | Overclaiming modelled solar/battery/current-building-readiness data. |

## 1. Product Definition

Sanctuary ranks candidate resilience hubs in Peel.

The decision-maker asks:

**If we can harden only five community buildings before the next heat wave, which five serve the most vulnerable people nearby?**

The output is a ranked list and map of candidate hubs, not a consumer-facing app.

## 2. Active Challenge Fit

Best fit: **Theme 3, Problem Statement 2**.

Official problem shape:

- heatwaves and flooding disproportionately affect vulnerable populations;
- communities rely on libraries, schools, and community centres as safe shelter spaces;
- utilities and municipalities need ways to visualize where climate risks and limited access to shelter overlap.

Sanctuary extends that by adding trusted community buildings and DER hardening potential.

## 3. Pattern-Break

Primary archetype: **Public-Good Frame**.

Reinforcing archetype: **Local-Detail**.

The non-default move:

**Stop routing vulnerable people to the official cooling network and start asking which trusted buildings should become the network.**

The demo should name real places. Do not say "a community centre." Say a real building and a real neighbourhood.

## 4. Minimum Lovable Build

If Sanctuary becomes active, build only this:

1. **StoryMap narrative**
   - problem;
   - heat-vulnerability map;
   - trusted-building layer;
   - ranked hub reveal;
   - limitations.

2. **Web Map / Dashboard**
   - Peel HVI layer;
   - candidate buildings;
   - 500 m buffer or Network Analyst walkshed;
   - score fields;
   - selected-building details.

3. **Hand-curated candidate set**
   - 8 to 10 buildings;
   - hand-verified names and addresses;
   - mix of worship, civic, and community buildings;
   - at least one hero building in a high-vulnerability zone.

4. **Five-minute video**
   - cold open on a heat-vulnerability zone;
   - click the hero building;
   - show reachable residents and estimated hardening potential;
   - show top five hubs;
   - close with Alectra/Esri fit.

## 5. Build Tracks

### Track A - GIS/Data

Owner: GIS/data teammate.

Tasks:

- Add Peel HVI layer to ArcGIS Online.
- Add candidate building points.
- Add building footprints where available.
- Compute or approximate 500 m catchments.
- Add score fields.
- Export a clean Web Map for the StoryMap.

### Track B - Narrative/StoryMap

Owner: presentation teammate.

Tasks:

- Draft the StoryMap sections.
- Place the hero reveal early.
- Add citations near every claim.
- Keep the language asset-based, not pity-based.
- Prepare screenshots/video captures.

### Track C - Verification

Owner: skeptical reviewer.

Tasks:

- Check every named building.
- Mark modelled values.
- Remove precise kW/kWh claims if not defensible.
- Prepare Q&A answers.

## 6. Suggested Scoring Model

Keep it transparent and simple. A hackathon judge should understand it in 20 seconds.

Candidate score:

```txt
hub_score =
  35% heat vulnerability nearby
+ 25% vulnerable population within catchment
+ 20% trust / community role
+ 10% rooftop hardening potential
+ 10% facility suitability
```

Use rough buckets instead of false precision:

- high / medium / low heat vulnerability;
- estimated reachable residents;
- estimated roof area class;
- known civic/community use;
- site verification needed.

## 7. Data Fields

Recommended candidate-building fields:

| Field | Type | Notes |
|---|---|---|
| `name` | text | Real public name. |
| `address` | text | Hand-verified. |
| `type` | enum | worship, library, rec centre, school, community centre. |
| `municipality` | enum | Brampton, Mississauga, Caledon. |
| `heat_quintile` | 1-5 | From Peel HVI or nearby DA. |
| `catchment_method` | text | Network Analyst or 500 m buffer. |
| `reachable_population_est` | number | Modelled, label it. |
| `roof_area_class` | enum | small, medium, large. |
| `solar_potential_est` | text | Estimate, not measured. |
| `verification_status` | enum | hand-checked, needs check. |

## 8. Video Script Skeleton

```txt
0:00 - Open on Peel HVI: one Brampton area glows red.
0:10 - "Heat does not hit evenly. Shelter access does not either."
0:30 - Show official facilities, then fade in trusted community buildings.
1:00 - Click the hero building. Panel opens with reachable vulnerable population.
2:00 - Explain score: heat + people + trust + roof + facility suitability.
3:00 - Top five candidate hubs light up.
4:00 - Be honest: solar/battery estimates are modelled; siting data is real.
4:40 - Close: "Harden these buildings first."
```

## 9. Scope Amendment If Activated

If Sanctuary replaces Valley, amend scope explicitly:

- **ADD:** Sanctuary StoryMap / Dashboard.
- **CUT:** Valley ULO plug + Peel FSA energy-burden map.
- **New challenge:** Theme 3 PS2.
- **New pattern-break:** Public-Good Frame + Local-Detail.
- **New demo moment:** heat-vulnerability area -> trusted building -> reachable residents.

Do not quietly run both.

