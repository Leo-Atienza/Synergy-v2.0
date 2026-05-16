---
title: Canadian energy data sources — working list
type: research
status: draft
updated: 2026-05-15
sources: ["[[../../docs/energy-domain.md|energy-domain]]"]
---

# Canadian energy data sources — working list

> Working list. Populated as we find sources. Authoritative copy with full URLs and access notes lives in [`../../docs/energy-domain.md`](../../docs/energy-domain.md) (managed by [`energy-domain-researcher`](../../.claude/agents/energy-domain-researcher.md)).

## Government / regulator

| Source | Domain | Access | Notes |
|---|---|---|---|
| Statistics Canada | Energy use, GHG, household data | Open API + CSV | Census-grade data, slow to update |
| Environment and Climate Change Canada (ECCC) | Weather, climate, GHG inventory | Open API | CDS API for climate data |
| Natural Resources Canada (NRCan) | Energy production, renewable potential maps | Mixed (some open) | Has solar/wind potential atlases |
| Canada Energy Regulator (CER) | Pipeline, electricity infrastructure | Open data portal | Cross-province |

## Provincial / regional (Ontario focus — Seneca is in Toronto)

| Source | Domain | Access | Notes |
|---|---|---|---|
| IESO (Independent Electricity System Operator) | Ontario grid demand, supply, prices | Open data portal + reports | Real-time-ish demand data |
| Ontario Energy Board (OEB) | Rates, utilities, conservation | Public reports | |
| Open Data Toronto | City-level energy, building, climate | Open portal | Includes Better Buildings energy benchmarking |
| Hydro One | Outage data | _tbc_ | Verify access |
| Toronto Hydro | Local distribution | _tbc_ | Verify access |

## Open mapping / GIS

| Source | Domain | Access | Notes |
|---|---|---|---|
| Open Street Map | Buildings, roads, infrastructure | Free | Source for any map demo |
| Mapbox | Map tiles + geocoding | Free tier (50k loads/mo) | Good for demo deploys |
| Statistics Canada Census Mapper | Boundary files (DA, CT, FSA) | Open | Needed for any equity/community-level analysis |

## Climate / weather

| Source | Domain | Access | Notes |
|---|---|---|---|
| ECCC Climate Data | Historical weather, climate normals | API | Daily station data 1840+ |
| NASA POWER | Solar irradiance, wind | API | Global, free |
| OpenWeatherMap | Current + forecast | Free tier | Good for "live" demos with real refresh |

## Sponsor APIs (placeholder — sponsors not yet announced)

To be filled as sponsors announce their tracks. See [[../10-event/sponsors-watch|sponsors-watch]].

## Verification status

- ☐ Verify Hydro One outage API access
- ☐ Verify Toronto Hydro data availability
- ☐ Confirm IESO real-time data freshness for "live demo" use
- ☐ Check Open Data Toronto Better Buildings dataset coverage
- ☐ Test ECCC Climate Data API quota for hackathon use
