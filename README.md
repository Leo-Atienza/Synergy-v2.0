# Sanctuary

**Live showcase: [project-sanctuary-seneca.vercel.app](https://project-sanctuary-seneca.vercel.app)**

*The Synergy team's entry for the Seneca Energy Hackathon 2026. Theme 3, Community Energy, Equity & Sustainability (Problem Statement 2: climate resilience, vulnerable populations, and shelter access).*

**Before the next heat wave, which five buildings should Peel harden first?**

Sanctuary ranks trusted community buildings in Peel Region, libraries, recreation centres, gurdwaras, mosques, mandirs, and churches, as candidate resilience hubs: places worth equipping with cooling, solar, and battery backup so they keep power and stay open when the grid goes down. It does not route people to the nearest cooling centre. It answers the question that comes first: if a region can only harden a handful of buildings before the next heat wave or outage, which ones, and in what order?

> Heat risk is not spread evenly across Peel, and neither is shelter access. Pearson hit **35.8 °C on June 23, 2025**, about 5 km from Malton ([CBC](https://www.cbc.ca/news/canada/toronto/environment-canada-heat-warning-monday-greater-toronto-area-1.7568283)). Extreme-heat days in the Toronto area are climbing from about **8 a year in the 1950s to roughly 18 today, and a projected 54 by the 2060s** ([City of Toronto](https://www.toronto.ca/services-payments/water-environment/environmentally-friendly-city-initiatives/resilientto/resilience-actions/)).

## See it for yourself

| | |
|---|---|
| **Submission video** | [Watch on YouTube](https://www.youtube.com/shorts/uKURph_Dm10) (2 min) |
| **Live showcase** | [project-sanctuary-seneca.vercel.app](https://project-sanctuary-seneca.vercel.app) |
| **ArcGIS web map** | [Peel HVI, public facilities, and candidate hubs](https://senecatechnology.maps.arcgis.com/apps/mapviewer/index.html?webmap=17951a55fae44a83a330101433dda67a) |
| **Methods and judge Q&A** | [methods-note.md](sanctuary/docs/methods-note.md) · [judge-qa.md](sanctuary/docs/judge-qa.md) |

The submission video is the team's two-minute walkthrough of Sanctuary. The live showcase above performs the same decision on the map and doubles as a clickable backup.

## The decision Sanctuary makes

Most heat-risk tools point vulnerable people toward official cooling spaces. Sanctuary flips the decision upstream, to siting: which trusted buildings should become the next resilience hubs? The whole thing happens on one map.

1. **Risk.** The Peel Heat Vulnerability Index lights up. A pocket of Malton and northeast Brampton sits in the top risk quintile.
2. **Gap.** Official cooling and shelter are just as uneven. During an outage the nearest space may be closed, unfamiliar, or two bus rides away.
3. **The named building.** Click a real one: **Malton Community Centre and Library, 3540 Morning Star Drive**. A panel opens, and it is honest about what it knows: *candidate hub, not currently equipped*; *reachable population, a modelled 500 m estimate*; *solar and battery, a planning estimate that requires a site audit*; plus the building's HVI level and why it ranks high.
4. **The ranking.** The top five candidate hubs light up in rank order. Harden these first.

### The current top five

| Rank | Building | Peel HVI | Community role |
|---|---|---|---|
| 1 | Malton Community Centre and Library | Quintile 5 of 5 | Civic and library anchor |
| 2 | Sri Guru Singh Sabha Malton | Quintile 5 | Gurdwara, community anchor |
| 3 | Susan Fennell Sportsplex | Quintile 5 | Large civic facility |
| 4 | Anjuman-E-Anwarul Islam of Malton | Quintile 4 | Mosque, community anchor |
| 5 | Bharat Mata Mandir | Quintile 3 | Mandir, community anchor |

Ranks 4 and 5 enter the list on a top-quintile heat sub-score (adaptive capacity, exposure) even where the composite index is lower. This is a seed ranking; reachable-population catchments are still modelled and labelled pending.

Why count gurdwaras, mosques, mandirs, and churches alongside libraries and rec centres? Because trust is infrastructure. These buildings already hold volunteers, local knowledge, and the confidence of the people most at risk. Sanctuary treats that as part of the resilience network, framed as an asset, not as a group that needs rescuing.

## How the ranking works

One transparent score, explainable in twenty seconds. Every input carries its evidence status.

```
hub_score =
    35%  heat vulnerability nearby           (verified:  Peel HVI quintile at the tract)
  + 25%  vulnerable population in catchment   (modelled:  500 m reach, head count pending)
  + 20%  trust / community role               (verified:  the building's official page)
  + 10%  rooftop hardening potential          (modelled:  roof footprint class)
  + 10%  facility suitability                 (modelled:  first-pass public-site fit)
```

A candidate cannot reach the top five on an unverifiable estimate alone, and every building in the final five carries a one-sentence "why this one." Full model: [`sanctuary/data/scoring-notes.md`](sanctuary/data/scoring-notes.md).

## What is real, and what is estimated

The hackathon rubric is blunt: an entry made of AI slop is disqualified. So every number on screen is either sourced or labelled an estimate, at the point you read it. Three tags do the work everywhere: **verified**, **modelled**, **pending**.

**Verified (checked against a public source):** the Peel Heat Vulnerability Index (a public Peel Public Health / ArcGIS layer over 2021 census tracts), every building name and address, and every HVI quintile. Malton Community Centre and Library geocodes into quintile 5 (zone M-04, census tract 5350530.01), re-verified live against the public feature service on 2026-05-26.

**Modelled (a labelled planning estimate):** the 500 m reach, the roof and hardening class, and the first-pass score. Useful for triage, never for an investment decision.

**Pending (needs a site audit):** backup power, cooling capacity, electrical readiness, owner agreement, and any solar or battery sizing. None of it is assumed.

Where the data comes from, per shipped layer:

| Map layer | Records | Source |
|---|---|---|
| Heat-vulnerability choropleth | 282 census tracts | Peel's public Extreme Heat Vulnerability Index feature service |
| Peel outline | 35 forward sortation areas | Statistics Canada 2021 Census boundaries (92-179-X) |
| Public facilities (the shelter gap) | 87 facility points | Statistics Canada Open Database of Recreational and Sport Facilities |
| Candidate hubs | 10 hand-verified buildings | Municipal, library, and faith-organization pages, geocoded then point-queried against the HVI service |

Every layer is a frozen GeoJSON file committed to this repository and read once at build time. There is no database and no live API call while you browse, on purpose: a dropped connection or an expired map token cannot break the demo. The only live element is the embedded ArcGIS web map.

Sanctuary ranks **candidate hubs** for investigation. It does not certify that any named building is ready, equipped, willing, or funded. On funding, a tax-exempt library, municipal centre, or place of worship can claim the **15% refundable Clean Electricity Investment Tax Credit**, the federal credit written to include tax-exempt owners, not the 30% Clean Technology credit, which excludes them.

## How it is built

- **ArcGIS StoryMap and web map** is the primary judged artifact, and the reason the map fits the Esri Canada GIS track. It carries the HVI layer, public-facility and municipal context, and the ranked candidate points.
- **Next.js 16 and React 19** power the live showcase: a server-rendered shell with one interactive map island and no backend.
- **d3-geo SVG** projects Peel geography and the candidate points, with no basemap token and no WebGL, so it runs fully offline.
- **Static GeoJSON** bundled at build keeps the data auditable and the demo safe.
- **Gemini 2.5 Flash** drafts each candidate's planning checklist offline, behind a no-overclaim gate that rejects invented power, dollar, or sizing figures. The reviewed text ships as static JSON, so nothing calls a model while you browse.

The planning layer speaks directly to Alectra's GRE&T Centre focus on community resilience, distributed-energy hardening, and candidate-hub planning across the Greater Golden Horseshoe.

Run the showcase locally:

```bash
cd sanctuary/web
npm install
npm run dev
```

## Where this goes after the hackathon

Sanctuary is the planning layer that comes before the engineering. For Alectra and municipal partners, the path is:

1. Verify the top five sites with their owners and operators.
2. Replace the modelled 500 m buffers with real walksheds.
3. Run site audits for roof, electrical, cooling, and backup-power capacity.
4. Compare funding paths for solar, storage, and facility upgrades.
5. Repeat the same honest scoring across the rest of Alectra's service territory.

## Team

The Synergy team, Seneca Polytechnic:

| Member | Role |
|---|---|
| Cynthia Salazar | Programmer / Marketing |
| Jackson Li | Project Manager / Engineer |
| Roger Lungsee | Automation Engineer |
| Jhonatan | Programmer |
| Leo Atienza | Research / Claude Power User |

---

Every figure on the map and the showcase traces to a public source. The full list lives in the [Sources section of the live site](https://project-sanctuary-seneca.vercel.app/sources) and in [`sanctuary/`](sanctuary/).
