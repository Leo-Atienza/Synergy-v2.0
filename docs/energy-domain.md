# Energy domain notes — Seneca Energy Hackathon 2026

> Backfilled 2026-05-15 from the deep-research dossier (`research-dossier.md`). The `energy-domain-researcher` agent kept this up to date as it went. Cite every entry with a URL. No marketing prose. Datasets, APIs, regulators, and metrics only.

---

## Datasets & APIs

### IESO — the goldmine

Public hub: <https://www.ieso.ca/power-data>. Bulk file directory: <https://reports-public.ieso.ca/public/>.

| Product | URL | Format | Refresh |
|---|---|---|---|
| Power Data dashboard (demand + supply mix + price) | https://www.ieso.ca/power-data | HTML | 5-min |
| Real-time Totals | https://reports-public.ieso.ca/public/RealtimeTotals/ | XML/CSV | 5-min, current hour |
| Generator Output and Capability (≥20 MW units) | https://reports-public.ieso.ca/public/GenOutputCapability/ | XML | Daily, 90-day window |
| Generator Output by Fuel — Hourly | https://reports-public.ieso.ca/public/GenOutputbyFuelHourly/ | XML | Daily |
| Generator Output by Fuel — Monthly | https://reports-public.ieso.ca/public/GenOutputbyFuelMonthly/ | XML | Monthly |
| Variable Generation Forecast (solar+wind, 48h) | https://reports-public.ieso.ca/public/VGForecastSummary/ | XML | 30-day window |
| Real-time 5-min Energy LMP (post-MRP nodal) | https://reports-public.ieso.ca/public/RealtimeEnergyLMP/ | CSV | 30-day window |
| Day-Ahead Ontario Zonal Price | https://reports-public.ieso.ca/public/DAHourlyOntarioZonalPrice/ | XML | Daily |
| **Hourly Consumption by FSA** (postal first 3 chars) | https://reports-public.ieso.ca/public/HourlyConsumptionByFSA/ | CSV | Monthly |
| Intertie Schedule and Flow (14 interconnections) | https://reports-public.ieso.ca/public/IntertieScheduleFlow/ | XML | 90-day window |
| Adequacy Report (today + 34 days) | https://reports-public.ieso.ca/public/Adequacy3/ | XML | 90-day window |
| Peak Tracker (next 24h forecasted peaks) | https://www.ieso.ca/peaktracker/ | HTML | Continuous |
| HOEP (legacy archive) | https://reports-public.ieso.ca/public/HourlyEnergyPrice/ | CSV | Daily, archive 2002–May 2025 |
| 2025 APO PDF | https://www.ieso.ca/-/media/Files/IESO/Document-Library/planning-forecasts/apo/2025/2025-Annual-Planning-Outlook.pdf | PDF | Annual |
| Pathways to Decarbonization | https://www.ieso.ca/-/media/Files/IESO/Document-Library/gas-phase-out/Pathways-to-Decarbonization.ashx | PDF | Static (Dec 2022) |
| Natural Gas Phase-Out Study | https://ieso.ca/en/Learn/The-Evolving-Grid/Natural-Gas-Phase-Out-Study | HTML | Static |
| LT2 RFP | https://www.ieso.ca/Sector-Participants/Resource-Acquisition-and-Contracts/Long-Term-2-RFP | HTML | Active |

### Third-party wrappers (skip XML pain)

- **GridStatus**: a Python SDK that covers IESO plus 7 US ISOs through one normalized API. <https://www.gridstatus.io/live/ieso> · <https://opensource.gridstatus.io/en/latest/autoapi/gridstatus/ieso/index.html> · IESO data guide: <https://docs.gridstatus.io/data-guides/market-guides/independent-electricity-system-operator-ieso>
- **Gridwatch Ontario**: a JSON front end. <https://gridwatch.ca/> · <https://live.gridwatch.ca/>

### OEB — Ontario Energy Board

Open data: <https://www.oeb.ca/ontarios-energy-sector/open-data> (last refreshed Sep 5, 2025 with 2024 data).

Products: Yearbooks of Electricity & Natural Gas Distributors, Electricity Distribution Rates (2006+), Distributor Service Areas (GIS), Performance Scorecards (annual), Complaints (2013+), Service Quality (annual), System Reliability Indicators (2015+ — SAIDI/SAIFI/CAIDI), Major Event Response Reports (2017+). Toronto Hydro 2024 scorecard: <https://www.oeb.ca/documents/scorecard/2024/Scorecard%20-%20Toronto%20Hydro-Electric%20System%20Limited.pdf>.

### Statistics Canada

Hub: <https://www150.statcan.gc.ca/n1/en/subjects/energy>

Key tables:
- **25-10-0015-01** Electric power generation, monthly by class of producer and type
- **25-10-0016-01** Electric power consumption (monthly)
- **25-10-0055-01 / -0058-01 / -0059-01** Natural gas supply, transmission, distribution

**WDS REST API**: JSON, no API key required. Guide: <https://www.statcan.gc.ca/en/developers/wds/user-guide>. 15 methods including `getDataFromCubePidCoordAndLatestNPeriods`, `getFullTableDownloadCSV`.

### Canadian Centre for Energy Information

StatCan + CER + NRCan + ECCC partnership: <https://energy-information.canada.ca/>

### ECCC — Environment and Climate Change Canada

- **Historical Climate Data**: <https://climate.weather.gc.ca/>. Per-station CSV/XML (hourly = 1 month at a time, daily = 1 year, monthly = full record)
- **MSC Datamart bulk**: <https://eccc-msc.github.io/open-data/msc-data/climate_obs/readme_climateobs-datamart_en/>
- **Climate Services bulk**: <https://climate-change.canada.ca/climate-data/>
- **R wrapper `weathercan`**: <https://github.com/ropensci/weathercan>

### NRCan — Natural Resources Canada

- **PV Potential & Solar Resource Maps**: <https://natural-resources.canada.ca/energy-sources/renewable-energy/photovoltaic-potential-solar-resource-maps-canada> (FGDB+CSV, municipal-level kWh/kW-yr)
- **CERP — Clean Energy Resources & Projects atlas**: <https://atlas.gc.ca/cerp-rpep/en/>
- **Canadian Wind Energy Atlas**: 30/50/80 m mean wind speed/energy
- **Remote Communities Energy Database**: <https://atlas.gc.ca/rced-bdece/en/index.html> (CSV)
- **NEUD — Comprehensive Energy Use Database**: <https://oee.nrcan.gc.ca/corporate/statistics/neud/dpa/menus/trends/comprehensive_tables/list.cfm>

### Open Data Toronto + Ontario

- **Open Data Toronto**: <https://open.toronto.ca/> (CKAN). Renewable Energy Installations dataset, Cool Spaces, ward boundaries, EWRB
- **Ontario Open Data — Energy**: <https://data.ontario.ca/organization/energy>
- **Ontario Energy Report Supporting Data**: <https://data.ontario.ca/dataset/ontario-energy-report-supporting-data>
- **Ontario Renewable Energy Projects**: <https://data.ontario.ca/dataset/renewable-energy-projects> (Sept 2010 → Sept 2021)
- **Toronto large-building EWRB dataset** (≥50,000 sq ft): <https://open.canada.ca/data/en/dataset/0eab2faf-6186-4a5b-8de1-b15872943c24>

### LDC operational data

- **Toronto Hydro outage map**: <https://outagemap.torontohydro.com/>
- **Hydro One Storm Centre**: <https://stormcentre.hydroone.com/>
- **Toronto Hydro Load Capacity Map** (interactive grid headroom by area, March 2025+): <https://www.torontohydro.com/contractors-and-developers/load-capacity-map>
- Alectra and Hydro One launched their own capacity maps too. Coverage write-up: <https://electricautonomy.ca/charging/utilities/2025-03-19/grid-capacity-maps-canada-ontario/>

### Federal GHG inventory + ENERGY STAR

- **Canada NIR**: <https://www.canada.ca/en/environment-climate-change/services/climate-change/greenhouse-gas-emissions/inventory.html> (NIR 2025 covers 1990-2023)
- **Open data mirror**: <https://open.canada.ca/data/en/dataset/779c7bcf-4982-47eb-af1b-a33618a05e5b>
- **ENERGY STAR Portfolio Manager** (used by Toronto/Ontario building reporting): <https://www.energystar.gov/buildings/tools-and-resources/tracking-greenhouse-gas-emissions-portfolio-manager>
- **NRCan regional median GHG intensity tables**: <https://natural-resources.canada.ca/energy-efficiency/energy-star/buildings/technical-reference-documents/canadian-regional-median-greenhouse-gas-emissions-intensity>

### Energy poverty + equity data

- **Energy Poverty & Equity Explorer** (Efficiency Canada + Community Data Program): <https://energypoverty.communitydata.ca/>. Census-tract level energy burden, income, heating type, building age. (*Note: cert expiry warning at time of fetch.*)
- **Toronto Social Atlas**: <https://www.toronto.ca/city-government/data-research-maps/neighbourhoods-communities/toronto-social-atlas/>
- **School of Cities — Wealth & poverty concentration in Toronto**: <https://schoolofcities.github.io/neighbourhood-income-toronto-2020/>
- **School of Cities — Heat Vulnerability Toronto**: <https://schoolofcities.github.io/heat-vulnerability-toronto/>
- **Toronto Public Health Heat Vulnerability Index** (TPH publishes maps + methodology)
- **Ontario Marginalization Index (ON-MARG)** — Public Health Ontario

### Climate projections for Ontario

- **Climate Atlas of Canada — Toronto report**: <https://climateatlas.ca/sites/default/files/cityreports/Toronto-EN.pdf>. Projects +30°C days nearly 2 months/yr by end of century under RCP 8.5
- **Ontario Climate Change Projections (York Lamps)**: <https://lamps.math.yorku.ca/OntarioClimate/>
- **ECCC CMIP6 downscaled grids**: <https://climate-change.canada.ca/climate-data/>
- **Climate TRACE** (satellite + AI emissions for >70k facilities globally): <https://climatetrace.org/>

---

## Regulators & bodies

| Org | Role | URL |
|---|---|---|
| **IESO** | Wholesale market operator + LT planner; runs procurements (LT1, LT2, capacity auction, eDSM/Save on Energy) | <https://www.ieso.ca/> |
| **OEB** | Quasi-judicial regulator; sets retail electricity prices (RPP), approves distributor rates, licenses LDCs + gas utilities | <https://www.oeb.ca/> |
| **CER / Canada Energy Regulator** | Federal regulator for interprovincial/international energy infrastructure; publishes Ontario Energy Profile | <https://www.cer-rec.gc.ca/en/data-analysis/energy-markets/province-territory-energy-profiles/ontario.html> |
| **NRCan** | Federal department; runs energy data programs (NEUD, CERP), Greener Homes, ENERGY STAR Canada | <https://natural-resources.canada.ca/> |
| **ECCC** | Federal department; weather, climate models, NIR, federal carbon-pricing administration | <https://www.canada.ca/en/environment-climate-change.html> |
| **CNSC** | Canadian Nuclear Safety Commission; licenses Pickering refurb, Darlington SMR | <https://www.cnsc-ccsn.gc.ca/> |
| **CanREA / Canadian Renewable Energy Association** | Industry voice for wind, solar, storage | <https://renewablesassociation.ca/> |
| **Pollution Probe** | Toronto-based environmental NGO (1969); energy program | <https://www.pollutionprobe.org/> |
| **The Atmospheric Fund (TAF)** | GTA-Hamilton climate finance agency, $80M+ endowment; partners with Toronto Hydro on furnace-to-heat-pump | <https://taf.ca/> |
| **Toronto Environmental Alliance (TEA)** | Co-founded LIEN; Smog Facts | <https://www.torontoenvironment.org/> |
| **Efficiency Canada** | Carleton-affiliated; runs Energy Poverty Data Map | <https://www.efficiencycanada.org/> |
| **Ontario Centre of Innovation (OCI)** | Provincial agency; co-invests in energy/environment startups; runs Discovery conf | <https://www.oc-innovation.ca/> |
| **Electricity Distributors Association** | Ontario LDC industry org | <https://www.eda-on.ca/> |
| **Ontario Energy Association (OEA)** | Industry umbrella for utilities + generators; pro-Powering Ontario's Growth | <https://energyontario.ca/> |
| **Ontario Sustainable Energy Association (OSEA)** | Renewables + community-energy advocacy | <https://www.ontario-sea.org/> |
| **Pembina Institute** | Calgary-based, Ontario program active; Optimizing Ontario report (Oct 2024) | <https://www.pembina.org/> |
| **Canadian Climate Institute** | Independent climate-policy research | <https://climateinstitute.ca/> |
| **Indigenous Clean Energy** | Indigenous-led clean-energy hub; directory of 200+ major projects | <https://indigenouscleanenergy.com/> |
| **Six Nations of the Grand River Development Corporation (SNGRDC)** | Anchor Indigenous energy investor — Oneida BESS, Grand Renewable, Niagara Region Wind partnerships | (search SNGRDC) |
| **Wataynikaneyap Power** | 1,800 km transmission line connecting 17 First Nations; 51% First Nation-owned (24 First Nations) | <https://www.wataypower.ca/> |

### Ontario Crown / utility entities

- **OPG**: Ontario Power Generation. Nuclear (Pickering, Darlington), hydro fleet, gas via Atura, SMR developer. <https://www.opg.com/>
- **Bruce Power**: Bruce nuclear operator (private consortium of TC Energy + OMERS-aligned + pension funds + employees). <https://www.brucepower.com/>
- **Hydro One**: transmission ~98% plus the largest LDC (rural). <https://www.hydroone.com/>

---

## Common metrics

| Metric | Definition |
|---|---|
| **kWh** | Kilowatt-hour. 1 kW sustained for 1 hour. Household billing unit. |
| **kW** | Kilowatt. Power (instantaneous rate). |
| **MWh / GWh / TWh** | Mega-/Giga-/Terawatt-hours. 1 TWh = 10⁹ kWh. Ontario consumes ~151 TWh/yr. |
| **MW capacity** | Nameplate maximum power output. Ontario total ≈ 37,566 MW. |
| **GHG t-CO₂e** | Tonnes of CO₂ equivalent. All GHGs weighted by Global Warming Potential. |
| **Capacity factor** | (Actual energy generated ÷ (Nameplate × hours)) × 100. Nuclear ~90%+, gas peakers 5-15%, wind 25-40%, solar 15-20%, hydro 40-60%. |
| **LCOE** | Levelized Cost of Energy. Total lifetime cost ÷ total lifetime MWh. Combines capex + opex + capacity factor. Misses reliability/dispatchability value. |
| **Demand response (DR)** | Customers reduce/shift load on signal from grid operator. Ontario clears ~$171k/MW-yr (2026). |
| **Load factor** | Average load ÷ peak load over a period. Higher = better utilization. |
| **Peak demand** | Highest instantaneous (typically hourly) demand in a period. Ontario 2025 summer peak: 24,862 MW on June 24 at 7pm. |
| **Baseload** | Always-on minimum demand met by high-capacity-factor low-marginal-cost generation (nuclear, run-of-river hydro). |
| **Dispatchable** | Can be ramped on/off by operator command (gas, hydro reservoirs, storage). |
| **Intermittent / variable** | Output depends on weather (wind, solar). Requires forecasting + backup. |
| **TOU / RPP** | Time-of-Use rates / Regulated Price Plan. The Ontario residential default (on/mid/off-peak). |
| **ULO** | Ultra-Low Overnight rate (2023+) for EV charging. 4 periods. |
| **Global Adjustment (GA)** | Reconciliation charge covering nuclear regulated + hydro contracts + FIT contracts + conservation. **2024 GA ≈ $8.0B.** Often bigger than HOEP on bills. |
| **HOEP** | Hourly Ontario Energy Price (wholesale spot). |
| **DER** | Distributed Energy Resource: rooftop solar, small storage, EVs, demand response. |
| **DERMS** | Distributed Energy Resource Management System (Ontario lacks a statewide one). |
| **kg CO₂/kWh** | Carbon intensity of electricity. Ontario grid: ~25-50 g/kWh average (one of cleanest in N. America). Coal ~900 g/kWh; gas ~400 g/kWh. |
| **EFPH** | Equivalent Full Power Hours. A measure of nuclear operating lifetime (Pickering 5-8 capped at 305,000 EFPH per current licence). |
| **SAIDI / SAIFI / CAIDI** | System Average Interruption Duration / Frequency / Customer Average Interruption Duration. OEB reliability scorecard metrics. Toronto Hydro 2024 SAIDI = 0.33 hours. |
| **EUI** | Energy Use Intensity (kWh/m² or kBTU/ft²). Building energy benchmarking. |
| **MRP** | Market Renewal Program. Moved Ontario to nodal pricing across ~973 nodes May 1, 2025. |
| **ICI** | Industrial Conservation Initiative. Class A/B GA-busting based on top-5 system peak share. |

---

## Angle library — for `/hackathon:ideate`

Pulled from the 2026-05-15 deep-research dossier. 15 candidate angles, with 3 starred as the top seeds. Full cards in [`../Synergy-v2.0 — Hackathon Brain/20-ideas/seed-ideas.md`](../Synergy-v2.0%20%E2%80%94%20Hackathon%20Brain/20-ideas/seed-ideas.md). The top 3 have their own files: `seed-a-carbon-intensity-api.md`, `seed-b-ontario-enviroscreen.md`, `seed-c-outage-equity-index.md`.

| # | Angle | Theme(s) | Key data source | Wedge / demo moment |
|---|---|---|---|---|
| 1 | OpenIESO.ca (fork OpenNEM) | 1+2 | IESO via GridStatus | Live dashboard updates every 5 min |
| 2 | ⭐ api.carbonintensity.ca | 1+2 | IESO + ECCC NIR | "Plug in EV at 2 AM for half the carbon" + embed widget |
| 3 | Toronto Building Disclosure Map | 3 | Open Data EWRB | Type Seneca's address → see emissions, rank, savings |
| 4 | ⭐ OntarioEnviroScreen | 3 | EnergyPoverty + ON-MARG + StatCan | Toronto map; Etobicoke 92/100 vs Forest Hill 12/100 |
| 5 | ⭐ Outage Equity Index | 2+3 | Outage maps + ON-MARG | Replay May 2022 derecho with equity overlay |
| 6 | "Cool & Clean" Heat Equity Router | 3 | TPH HVI + Cool Spaces + AQHI | Route Scarborough address to nearest accessible cool space |
| 7 | School Energy Report Card | 3 | O.Reg 25/23 PDFs + StatCan | Type "Newnham Campus" → see grade |
| 8 | Carbon-Aware EV Router | 1+2 | IESO + charger network APIs | Toronto→Sudbury route saves 8 kg CO₂ |
| 9 | Northern Ontario Diesel-to-Solar | 3 | NRCan Remote Communities DB | Show diesel cost vs solar-hybrid for a Northern community |
| 10 | DR Game Layer (OhmConnect for Ontario) | 2 | Green Button + ULO | Push dishwasher to 11pm → score rises, leaderboard fills |
| 11 | Heat Pump + Solar Wedge Calculator (renter lens) | 1+3 | Toronto MLAR + NRCan PV + HRS rebates | Type address → see archetype, payback, renter section |
| 12 | Ontario Polluter Dashboard | 3 | Climate TRACE + Open Govt | Top 20 polluters; click → see surrounding demographics |
| 13 | WhatPoweredYourPhone.ca | 1 | IESO Gen Output by Fuel Hourly | "Your phone was 78% nuclear, 19% hydro, 3% gas" |
| 14 | Tower Renewal Energy Estimator | 1+3 | Toronto Open Data + ENERGY STAR PM | Click 1968 tower → 87% emissions reduction with retrofit |
| 15 | Peatland Carbon Dashboard (HBL) | 1 | ECCC + NRCan + CWFIS | Compare HBL stored carbon to 40 yrs of Canada vehicle emissions |

### Scoring guidance (use [[../Synergy-v2.0 — Hackathon Brain/20-ideas/README|README]] rubric)

What past winners did:
- **The demo moment has to be visual and auto-play in under 10s** (per cross-theme observation in [`themes.md`](themes.md))
- **Ontario data plus the organizer's "help decision makers" framing** lines up best with Theme 3
- **The map + dashboard archetype** wins most often across 30+ past winners
- **An equity / underserved-communities framing** wins points with judges (Incenzo MIT 2024 1st)
- **An API plus an embeddable widget** is rare and nails the "public good" frame
- **A time-replay engine** is the most underused demo trick

---

## Recent news + debates worth knowing (2024-2026)

Top stories that may come up with judges or mentors:

1. **Pickering refurb $26.8B** approved Nov 2025, 37,000 jobs (<https://news.ontario.ca/en/release/1006772/ontario-greenlights-pickering-nuclear-generating-station-refurbishment-to-create-nearly-37000-jobs>)
2. **Darlington SMR**: construction started May 2025; foundation module set May 2026; **first grid-scale SMR in G7** (<https://www.opg.com/projects-services/projects/nuclear/smr/darlington-smr/>)
3. **Bruce C** $300M predevelopment May 2026, the first new large nuclear in Ontario in 30 yrs (<https://www.power-eng.com/nuclear/ontario-advances-bruce-c-nuclear-project-with-300m-pre-development-agreement/>)
4. **IESO 2025 APO**: 75% demand growth to 2050 (<https://www.ieso.ca/Corporate-IESO/Media/News-Releases/2024/10/Electricity-Demand-in-Ontario-to-Grow-by-75-per-cent-by-2050>)
5. **Ontario IEP "Energy for Generations"** (June 2025), the first 25-year integrated plan
6. **Nov 2025 RPP rate hike** of ~29-30% (biggest since 2019); OER raised to 23.5%
7. **iZEV paused → EVAP launched Feb 2026** ($2.3B); **Carney repealed ZEV sales mandate**
8. **March 30 2025 ice storm**: Hydro One's worst since 1998; 2,700+ poles; 1M+ outages
9. **Natural gas moratorium** debate: the IESO Phase-Out Study says it's doable by 2050, yet LT1 still procured 411 MW of new gas
10. **2024 OBC** effective Jan 1, 2025: new Part 12 (resource conservation, GHG); Efficiency Canada flagged "no path to net-zero codes by 2030"
11. **Dec 2025 capacity auction**: DR value jumped to $171,319/MW-yr, +163% YoY

### Key debates

- **Nuclear-first vs. renewables-first.** Bruce/OPG/IESO/OEA push +17,800 MW nuclear by 2050; Pembina/CCI/OCAA/Pollution Probe argue renewables+storage+QC imports decarbonize faster
- **Gas plant phaseout.** 32+ municipalities (~60% Ontario population) passed phase-out motions; IESO says a 2030 phaseout means blackouts plus a $100/month rate hike
- **Affordability.** The OER is now a $5B+/yr general-revenue subsidy that critics call regressive
- **Climate resilience.** The May 2022 derecho and the March 2025 ice storm exposed how fragile the grid is; vegetation management, hardening, and undergrounding pilots are on the table

### Voices to know

- **Jack Gibbons**: Chair, Ontario Clean Air Alliance; leads the gas phase-out coalition
- **Mark Winfield**: Prof, York Faculty of Environmental & Urban Change; nuclear skeptic
- **Adam Scott**: Exec Dir, Shift Action; pension/climate risk
- **Lesley Gallinger**: CEO, IESO
- **Lynne Anderson**: Chair, OEB

---

## 2026-05-22 freshness update

> Append-only delta gathered by `energy-domain-researcher` on 2026-05-22. Covers (1) the May 15→22 freshness window, (2) confirmed/unknown Seneca event facts, (3) the Tide carbon-honesty / marginal-emissions check. Every line carries a URL. Items already in the dossier (Bruce C May 7 announcement, Pickering refurb, Darlington SMR) are NOT repeated here.

### Marginal vs. average emissions factor — Ontario (the Tide carbon-honesty crux)

This is the finding that matters most for Tide. **ULO cost savings are guaranteed. Carbon savings depend on the marginal generator in the hour you shift away FROM.**

- **TAF marginal emissions factor (MEF):** `0.00015 tCO₂e/kWh` = **150 gCO₂e/kWh**, from analysis of 2015 IESO data. Source: The Atmospheric Fund, "ABCs of GHGs" <https://taf.ca/abcs-ghgs-underestimating-emission-reduction-potential-green-energy/> and the full "Ontario Electricity Emissions Factors and Guidelines" 2024 PDF <https://taf.ca/custom/uploads/2024/06/TAF-Ontario-Emissions-Factors-2024.pdf> (8.4 MB; WebFetch can't read it, so cite the HTML companion). The 2025 edition replaces it; landing page <https://taf.ca/publications/electricity_emissions_factors/>.
- **Average grid factor for contrast:** `0.00005 tCO₂e/kWh` = **~50 gCO₂e/kWh** (Canada NIR, Ontario). So the **marginal factor is ~3× the average**. Using the average makes load-shifting look like it saves less carbon than it does.
- **Why marginal ≠ average matters for Tide:** TAF says that conserving or shifting "at times when natural-gas-fired energy is being used to handle peak loads … will result in more carbon reductions" than during baseload (nuclear+hydro) periods. Tide's carbon benefit comes from *avoiding the on-peak gas hour*, not from the overnight hour being clean. Source: <https://taf.ca/abcs-ghgs-underestimating-emission-reduction-potential-green-energy/>
- **TAF publishes time-of-use AND seasonal MEFs** (on-peak vs off-peak; summer vs winter). TAF's caveat: seasonal MEFs are NOT a forecast (too weather-dependent), and **you must not mix factors in one calculation**. Source: <https://taf.ca/publications/electricity_emissions_factors/>
- **Summer overnight reality (the honest caveat):** Ontario's nuclear+hydro baseload "runs 24/7 … often enough to meet low-demand periods such as overnight." But during the 2025 summer heat waves "natural gas was increasingly relied upon to ensure reliability," and gas use "is expected to remain above typical levels through this decade" because nuclear refurbishments take Pickering B, Bruce, and Darlington offline in waves. So a summer overnight hour is NOT guaranteed gas-free. Sources: <https://www.ontario.ca/page/powering-ontarios-growth>, IESO 2025 Year in Review <https://www.ieso.ca/corporate-ieso/media/year-end-data>, <https://www.ontario.ca/page/ontarios-affordable-energy-future-pressing-case-more-power>
- **Marginal data caveat for any "carbon API" angle:** Electricity Maps **stopped selling its marginal-emissions product in 2025** (verifiability concerns); some US/EU rules now limit marginal-signal use. Real-time *average* CA-ON intensity is still available. Sources: <https://www.electricitymaps.com/resources/publications/marginal-emissions-introduction>, zone page <https://app.electricitymaps.com/zone/CA-ON>
- **Reference intensities:** simple-cycle gas ≈ **460 gCO₂/kWh** (TAF). Ontario grid average ≈ 25-50 g/kWh. Source: <https://taf.ca/abcs-ghgs-underestimating-emission-reduction-potential-green-energy/>
- **Honest one-liner for the pitch:** *"ULO cuts your bill every night (3.9¢ vs 39.1¢/kWh, guaranteed). It cuts carbon when the hour you shift away from is gas-fired, which in Ontario is most on-peak summer afternoons. We use IESO's live fuel mix to show you when shifting is also clean, not just cheap."*

### Datasets & APIs — confirmed/refreshed this week

#### TAF Ontario Electricity Emissions Factors & Guidelines — added 2026-05-22
- **URL:** <https://taf.ca/publications/electricity_emissions_factors/> (2025 ed. current; 2024 PDF <https://taf.ca/custom/uploads/2024/06/TAF-Ontario-Emissions-Factors-2024.pdf>)
- **Type:** report (PDF) + methodology
- **Shape:** marginal and average emissions factors for Ontario electricity, split by time-of-use (on/off-peak) and season (summer/winter); guidance on which factor to use for conservation vs. consumption claims
- **Access:** free, no signup. The PDF is large (8.4 MB) and WebFetch can't read it. Download it manually or cite the HTML "ABCs of GHGs" companion for the headline numbers.
- **Hackathon use:** the source we can cite so Tide makes an honest, defensible carbon claim instead of a vague "overnight = clean" claim a judge could poke a hole in.

#### IESO 2025 Year in Review — added 2026-05-22
- **URL:** <https://www.ieso.ca/corporate-ieso/media/year-end-data>
- **Type:** regulator report
- **Shape:** 2025 capacity mix (nuclear 25%, gas 28%, hydro 24%, wind 14%, solar 7%, bio 1%, imports 1%); **gas ≈ 30% of capacity but only ~10% of generation**; 2025 peak **24,862 MW on June 24** (highest in 12 yrs); **555 MW new capacity added, 451 MW (>80%) from storage** (Oneida, Tilbury, York BESS, Goreway).
- **Access:** free HTML.
- **Hackathon use:** fresh 2025 numbers for Tide's "why overnight" slide and to size the gas-on-the-margin argument.

### Common metrics — refreshed values

| Metric | 2026 value (verified this week) | Source |
|---|---|---|
| **ULO overnight rate** | **3.9¢/kWh**, 11pm-7am daily | <https://www.oeb.ca/consumer-information-and-protection/electricity-rates> |
| **ULO on-peak rate** | **39.1¢/kWh** weekday (≈10× the overnight rate) | <https://www.oeb.ca/consumer-information-and-protection/electricity-rates> |
| **ULO weekend/off-peak (7am-11pm)** | **9.8¢/kWh** (was 7.6¢ in the prior RPP period; corrected 2026-05-22 against OEB primary source; equals TOU off-peak) | <https://www.oeb.ca/consumer-information-and-protection/electricity-rates> |
| **RPP rates unchanged at summer switch** | Nov 1 2025 rates hold through Oct 31 2026; **no change at the May 1 2026 summer switch** | <https://www.oeb.ca/consumer-information-and-protection/electricity-rates> |
| **Marginal EF (Ontario)** | **~150 gCO₂e/kWh** (2015 IESO basis) | <https://taf.ca/abcs-ghgs-underestimating-emission-reduction-potential-green-energy/> |
| **Average EF (Ontario)** | **~50 gCO₂e/kWh** | same |
| **2026 APO reference demand** | net **152 TWh** (2025 ref yr), growing **~65% to ~250 TWh by 2050**; first edition with high/low scenarios; data centres 8.6% of 2050 demand | <https://www.ieso.ca/Sector-Participants/Planning-and-Forecasting/Annual-Planning-Outlook/2026-APO-Summary> |

### Freshness delta (May 15 → 22) — thin, reported honestly

The May 15→22 window produced **no major new Ontario energy announcement** that a mentor or judge would cite. The big recent items (Bruce C $300M, May 7; IESO 2026 APO; Pickering/Darlington) all predate May 15 and are already in the dossier. Here is what's active this exact week:

- **IESO stakeholder engagement meetings May 20-22, 2026.** Agenda is live; ongoing APO / procurement discussions. Source: <https://www.ieso.ca/>
- **IESO Long Lead-Time (LLT) RFP.** Competitive procurement for new-build hydro plus long-duration storage (5+ yr lead). Relevant to storage/resilience themes. Source: <https://www.ieso.ca/>
- **2026 wholesale price pressure.** Commercial/industrial wholesale energy costs are projected to rise **+71%** in 2026 (on top of ~68% in 2025); a live affordability talking point. Source (third-party forecast, treat as directional): <https://solar-x.ca/blog/ontario-electricity-prices-2026-forecast>

### Seneca Energy Hackathon 2026 — event facts (confirmed vs unknown, as of 2026-05-22)

Sources: <https://www.senecahackathon.com/> and <https://www.senecahackathon.com/about>

**Confirmed:**
- Dates: **May 24-30, 2026**. Phase 1 (virtual build) May 24-28; Phase 2 (in-person stage) May 29-30; finale May 30 at "Helix," Seneca Polytechnic, 1750 Finch Ave E, Toronto M2J 2X5.
- Format: hybrid (Discord + Microsoft Teams for virtual; in-person finalist stage).
- Theme: energy innovation ("The next big energy breakthrough could start with you"). Three challenge tracks per the organizer brief: Clean Energy Generation & Integration; Smart Grid, Resilience & Electrification; Community Energy, Equity & Sustainability.
- Eligibility: **open to every student**, any program, background, or experience level.
- Learning partner: **Octo Learning Inc.** (learnatocto.com), listed under Learning Resources.
- Contact: hackathon@senecapolytechnic.ca. Past themes: Food (2025), Housing (2024), Smart Cities (2023), Sustainability (2022).

**Still UNKNOWN (not published as of 2026-05-22, so do NOT assume):**
- Sponsors, sponsor tech, or required APIs: **none named** on the site.
- Prize pool / amounts: not stated.
- Judging rubric / axes: not stated (the dossier's MLH 4-axis default is an assumption, not confirmed).
- Team-size rules: not stated.
- Submission portal: **no Devpost link found** on the official site or via search. (Unrelated "Seneca Hacks"/"Design Hacks" Devpost pages exist, but they're different events. Don't conflate them.)

### Angle library — implication for Tide

- The carbon-honesty data above does NOT kill Tide. It sharpens it. Lead the demo with **cost** (guaranteed 3.9¢ vs 39.1¢) and frame **carbon as conditional**, pulled live from the IESO fuel mix. A judge who knows the grid will respect the honesty; a judge who doesn't gets the clean "10× cheaper overnight" hook.

---

## Energy Poverty Map — data confirmation (2026-05-24)

> GO/NO-GO verification for a neighbourhood-level energy-cost-burden map of Peel (Mississauga + Brampton, Alectra territory). Engine = IESO grid prices + ULO rates + optimizer; the map shows "dollars left on the table by not shifting overnight" across real neighbourhoods. We probed each source below live on 2026-05-24. Verdicts are per-dataset.

### CUSP Energy Poverty & Equity Explorer — NO-GO for raw data; viewer only
- **URL:** <https://energypoverty.communitydata.ca/> (tool) · microsite <https://energypoverty.ca/> · CUSP page <https://cuspnetwork.ca/data-insights/energy-poverty-and-equity-explorer-tool/> · user guide <https://energypoverty.communitydata.ca/user_guide.pdf>
- **Type:** online mapping tool + members-only dataset
- **Shape:** census-tract-level energy cost burden + housing age/type/condition + income + poverty. It IS a pre-joined energy-poverty dataset, the single highest-value find IF we can get at it.
- **Two blockers:** (1) **TLS certificate EXPIRED.** `energypoverty.communitydata.ca` throws `certificate has expired` on fetch and `cuspnetwork.ca` returned `ECONNREFUSED` (2026-05-24). The cert warning in the older note is now a hard failure, not a warning. (2) **The raw download is gated**: "members of the CUSP network as well as of the Community Data Program have access to the larger data set behind this map." No public CSV/Excel/API endpoint found. Granularity is **census tract**, not DA.
- **Substitute:** build the energy-burden layer ourselves from the StatCan Census Profile (income + heating fuel + period of construction + tenure) joined to our ULO/IESO engine output. We lose CUSP's pre-computed burden index but gain a defensible, reproducible, fully-cited pipeline. That's arguably *better* for a hackathon ("we computed this from primary census + grid data" beats "we used a tool whose site is down").

### StatCan 2021 Census Profile (98-401-X) — GO
- **URL:** bulk download portal <https://www12.statcan.gc.ca/census-recensement/2021/dp-pd/prof/details/download-telecharger.cfm?Lang=E> · Open Gov mirror <https://open.canada.ca/data/en/dataset/750e6035-adf8-4426-966f-4c25b12a999e> · WDS profile API guide <https://www12.statcan.gc.ca/wds-sdw/2021profile-profil2021-eng.cfm>
- **Type:** dataset (bulk CSV/TAB/IVT) + REST API (CSV/JSON/XML)
- **Shape:** the comprehensive download is "counts and rates for all geographies within a hierarchy and ALL available topics." Confirmed downloadable at both **DA** ("Canada, provinces, CDs, CSDs and DAs" file) and **FSA** (dedicated FSA file). All four target variables are in the 2021 release topics: **income** (released 2022-07-13), **tenure / primary heating fuel / period of construction** (all in the Housing release 2022-09-21).
- **Access:** free, no signup, no key. **File-size warning:** the all-DA comprehensive CSV runs up to **2.2 GB** (with confidence intervals). Pre-filter to Peel DGUIDs (`2021A00053521*` = Ontario 35 / Peel 21) before you ship anything client-side. The FSA file is far smaller.
- **Hackathon use:** the real demographic base for the burden score. Join median income + % electric-heating + building age + % renter onto each polygon, then multiply by the engine's per-household overnight-shift savings.

### StatCan 2021 Boundary Files (DA + FSA) — GO
- **URL:** StatCan boundary page <https://www12.statcan.gc.ca/census-recensement/2021/geo/sip-pis/boundary-limites/index2021-eng.cfm?year=21> · Open Gov mirror <https://open.canada.ca/data/en/dataset/ef70dc3b-1069-4037-9bce-61f47e628a1d> · FSA file catalogue 92-179-X <https://www150.statcan.gc.ca/n1/en/catalogue/92-179-X>
- **Type:** geospatial boundary files
- **Shape / format:** Shapefile (.shp), GML, File Geodatabase (.gdb); FSA also offered as Esri REST + WMS. Projection is Lambert conformal conic, NAD83, so **reproject to WGS84/EPSG:4326 for web (Leaflet/Mapbox/deck.gl)** and convert .shp→GeoJSON (mapshaper/ogr2ogr). National files; clip to Peel.
- **Polygon counts (a gauge of map complexity):** **Peel Region = ~1,746 DAs total** (Caledon is rural and sparse, so Mississauga+Brampton ≈ 1,500-1,650 DAs). Coarser tiers: **282 census tracts** in Peel; **~35-45 FSAs** cover Mississauga (L4T/W/X/Y/Z, L5A-L5W) + Brampton (L6P/R/S/T/V/W/X/Y/Z, L7A). So FSA is about 1% of the polygon count of DA. Sources: Peel CT count <https://census.peelregion.ca/pages/population-and-dwellings-2021>; FSA pop table 98-10-0019-01 <https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=9810001901>.
- **Hackathon use:** the map geometry itself. ~1,600 DA polygons will render but need simplifying or tiling; ~40 FSA polygons render with no trouble.

### IESO Hourly Consumption by FSA — GO
- **URL:** <https://reports-public.ieso.ca/public/HourlyConsumptionByFSA/>
- **Type:** dataset (monthly bulk, zipped)
- **Shape:** **~85 monthly files, Jan 2018 → Jan 2026**, named `PUB_HourlyConsumptionByFSA_YYYYMM_v1.zip` (~8-14 MB each). An aggregate all-data file is also there. The directory listing alone doesn't confirm the inner format or columns, so download one ZIP to check the exact columns and that L4*/L5*/L6*/L7* rows are present (FSA × hourly kWh is the documented product shape; treat column names as TODO-on-download).
- **Access:** free, no signup, no key. Public IESO report directory.
- **Hackathon use:** REAL measured consumption per FSA, so we calibrate "typical household kWh" per neighbourhood instead of estimating it. That makes the dollars-left-on-the-table figure defensible. Note: this is **FSA-only**. There is no DA-level IESO consumption product, and that's the deciding factor below.

### Recommendation — build on FSA
- **Verdict: FSA.** Three reasons. (1) **It is the only level with REAL measured consumption.** IESO publishes kWh by FSA, nothing finer; at DA level the consumption term becomes an estimate, which undercuts the "real data" pitch. (2) **Render cost is ~40 polygons vs ~1,600**, so the map is instant with no tiling or simplification work on a hackathon clock. (3) Postal-area FSAs are **easy for judges to read** ("L5B is downtown Mississauga"). The cost is coarser equity resolution: an FSA averages ~20-40k people and hides pockets inside it. Mitigation: keep DA-level census as an optional drill-down or stretch layer, but ship the demo on FSA. If equity granularity becomes the whole point of the demo, revisit DA, but then flag the consumption term as modelled, not measured.

---

## Tide impact sizing (2026-05-24)

> Skeptical, quantified check: does Tide's real-world impact reach low-income RENTERS (the PS1 population), or mostly better-off homeowners and EV owners? Every claim carries a number + URL. The verdict at the bottom is honest, not promotional. ULO rates (3.9¢ overnight / 39.1¢ on-peak / 9.8¢ off-peak-weekend) are pre-verified and used as inputs, not re-derived.

### 1. Size of the problem — energy poverty (Ontario + renters)
- **The threshold you pick changes everything.** CUSP's policy definition is the **2× national median ("2M") burden = ~6% of after-tax income** on home energy; the **strict 10%** definition is much narrower. Both are standard; cite the one that fits the claim. Source (CUSP backgrounder): <https://energypoverty.communitydata.ca/backgrounder.pdf>
- **6% / 2M basis:** **~21% of Canadian households** are in energy poverty (2016 census, 2M measure); **Ontario has the most of any province at ~1.1 million households.** Source: <https://homelesshub.ca/resource/energy-poverty-canada-cusp-backgrounder/> and EnergyRates summary <https://energyrates.ca/energy-poverty-in-canada-how-each-province-performs/>
- **10% / strict basis (StatCan 2021 Census, table 46-28-0001):** national **5.6% (822,000 households)**; **Ontario 4.8%.** Source: <https://www150.statcan.gc.ca/n1/pub/46-28-0001/2024001/article/00001-eng.htm>
- **THE RENTER SEAM, the PS1 crux, and it cuts in our favour.** On **direct** energy payments renters look *better* than owners (4.3% vs 6.1%). But once you estimate in **indirect** payments (utilities bundled into rent), the **renter rate nearly DOUBLES to 8.3%** while owners barely move (6.1%→6.5%). So renter energy poverty is real but **hidden inside rent**, the exact "incentives target owners, not renters" gap PS1 names. Source: <https://www150.statcan.gc.ca/n1/pub/46-28-0001/2024001/article/00001-eng.htm>
- **No public Peel/Mississauga+Brampton energy-poverty figure exists** at the regional level. CUSP's tract-level Explorer is the only source, and its raw data is members-gated and its site cert is expired (see prior section). Anything Peel-specific has to be computed from census ourselves.

### 2. The addressable shiftable load among low-income renters (the device-TAM crux)
- **Air conditioning IS a real, sized, shiftable summer load.** StatCan 2025: **52.1% of renters** have AC (vs 75.9% of owners); **54.8% of <$50k-income households** have AC (vs 82.2% of $150k+). So roughly **half** of low-income renters own a coolable load. Source (table): <https://www150.statcan.gc.ca/n1/daily-quotidien/250708/t001a-eng.htm>; article <https://www150.statcan.gc.ca/n1/daily-quotidien/250708/dq250708a-eng.htm>
- **Shiftability caveat:** that AC figure includes central plus window/portable, and the **central-vs-portable split is NOT in the public table**, so we can't size what fraction is a discrete plug Tide controls. Worse, cooling is **demand-coincident** (you cool when it's hot, which is on/mid-peak), so only the pre-cool/overnight portion genuinely shifts. The load exists; the *shiftable* part is smaller than the ownership rate.
- **In-unit laundry prevalence among low-income Ontario renters: NO clean public statistic found.** CMHC's Rental Market Survey and StatCan SHS don't publish an in-suite-laundry share that survives a judge's "source?" question. Treat in-unit laundry as anecdotal, not sized. (Searched CMHC RMS and StatCan; only rental listings surfaced.)
- **EV ownership among low-income renters is near-zero** by definition (capital cost + home-charging access), so the headline ~$1,760/yr EV figure does NOT describe this population.

### 3. The baseboard reality check
- **National: ~25% of households heat with electric baseboard; ~51% forced-air furnace (mostly gas); Ontario 75% forced-air furnace.** Source: <https://www.statcan.gc.ca/o1/en/plus/2717-heat-how-canadians-heat-their-home-during-winter>
- **The gap that matters here:** StatCan's public heating article does **NOT break electric-baseboard share down by tenure or by apartment vs detached.** The "renters on baseboard" group, the one Tide structurally CANNOT help with heat, is real but **not sized in any public summary table**. Getting it needs a custom Census Profile (98-401-X) pull on `primary heating fuel × tenure × dwelling type` (the data exists at that level per the prior section, just not pre-tabulated). Baseboard heat is also comfort-coincident and barely shifts no matter who controls the thermostat.

### 4. Per-household $ impact — renter-realistic (NOT the EV number)
Modelled at verified ULO rates (on-peak 39.1¢, off-peak/weekend 9.8¢, overnight 3.9¢/kWh). Figures are order-of-magnitude, labelled optimistic vs honest.
- **Window AC** (~1 kW, ~500 cooling-h/summer): only the pre-cool/overnight slice shifts. ~200 kWh moved from ~mid/on-peak to overnight → **~$40/yr optimistic.**
- **Space heater** (~1.5 kW, one room): the shiftable portion is small (you heat when home and cold). ~300 kWh from on-peak → **~$60-105/yr optimistic**, far less in practice.
- **In-unit laundry** (~560 kWh/yr): fully time-flexible, but **people already often run it evenings and weekends (9.8¢)**, so the honest gap to overnight is ~560 × (0.098−0.039) ≈ **~$33/yr** (it would be ~$197 if every load had been on-peak, which isn't realistic).
- **Honest renter total ≈ $30-$130/yr** depending on which loads they own. That's **roughly one-tenth to one-fifteenth of the ~$1,760/yr EV figure.** The savings are real but modest. The EV number is not the renter's number.

### 5. The regressive-rate literature (decides whether this undercuts us or IS our thesis)
- **The evidence says TOU/variable pricing CAN be regressive, and the mechanism is exactly Tide's thesis.** A peer-reviewed working paper finds that consumers with *high peak-period use, inflexible demand, and high price sensitivity*, "characteristics often associated with low-income households," lose the most welfare when they switch to variable pricing. The key line: *"demand flexibility provides welfare protection only when coincident with large price changes, a condition more easily met by higher-income consumers."* Its conclusion: variable pricing *"risks exacerbating energy inequality unless accompanied by targeted policies ensuring equitable access."* Source: <https://arxiv.org/html/2509.01499> (and corroborated by the literature surveyed in <https://www.rff.org/documents/4757/WP_25-04_vSszGzz.pdf>)
- **What this means for Tide:** ULO's 10× peak/overnight spread is the steepest such signal in Ontario. The literature says the inflexible lose under it. **Automation that captures the overnight rate *without any behaviour change* is exactly the "targeted policy ensuring equitable access" the papers call for**, IF it can reach a controllable load. So the regressive literature is a *tailwind* for the framing. It also sharpens the seam: the device only helps where a shiftable load exists (see §2/§3).

### 6. Aggregate / grid impact
- **Per-household shiftable peak is small.** A renter's controllable load (window AC + laundry) trims on the order of **0.5-1.5 kW** of coincident peak, and not all of it lines up with the system peak. Call it ~1 kW/household optimistically.
- **DR clears ~$171,319/MW-yr** (Ontario Dec 2025 capacity auction, +163% YoY). Source: <https://news.ontario.ca/en/release/1006772/ontario-greenlights-pickering-nuclear-generating-station-refurbishment-to-create-nearly-37000-jobs> *(value figure is in this doc's "Recent news" §11; primary auction citation: IESO capacity-auction results)*.
- **Scale math:** at ~1 kW/household, **~1,000 households ≈ 1 MW ≈ ~$171k/yr** of DR value; a **grid-meaningful ~50-100 MW** needs **~50,000-100,000 enrolled controllable loads.** That's a big deployment for a $15 plug, workable as a thesis but not at hackathon-demo scale. The grid-value story is real but stays rhetorical until adoption hits the tens of thousands.

### Honest verdict
**For the specific population PS1 cares about, Tide's impact is real but comes mainly from the targeting MAP, not the device.** The device delivers guaranteed savings, but for a low-income *renter* that is realistically **~$30-$130/yr** (§4), and a large share of the population is structurally un-helpable by the plug: baseboard-heat renters (un-shiftable, un-sized but real, §3) and the ~48% of renters with no AC at all (§2). The genuinely strong, defensible contributions are two. First, the **map**: energy poverty is real and concentrated (~1.1M Ontario households, renter rate doubling to 8.3% once hidden-in-rent costs count, §1), and showing *which neighbourhoods get which intervention* is high-value decision support. Second, the **equity framing**, which the regressive-pricing literature actively endorses (§5): automation as the fix for a rate design that otherwise punishes the inflexible. **Recommendation:** lead the pitch with the map plus the regressive-ULO thesis (well-sourced, judge-proof), present the device as the *automated equity intervention* the literature calls for, and quote the **honest renter $ range, not the EV number**, so you survive a skeptical "does this actually reach renters?" question.

---

## ULO adopter demographics & renter access (2026-05-25)

> Hardens the pitch line "ULO is a rate built for the affluent; renters are locked out." Each bullet has a number + URL; the verdict at the bottom is honest. The OEB sets ULO prices each year, so the vintages differ. The **Nov 2024-Oct 2025** report (read in full for this note) uses **2.8¢ overnight / 28.4¢ on-peak**; the **Nov 2025-Oct 2026** vintage already in this doc is **3.9¢ / 39.1¢**. Same plan, ~10× spread either way.

### 1. Enrollment / uptake — small but growing
- **12,073 RPP customers were on ULO as of March 31, 2024**, which confirms the ~12,000 figure we already had. This is the most recent *headcount* in public sources; nothing finer or newer than a count is out there. It's attributed to OEB data via the Ontario Federation of Agriculture (the page carries it; the figure originates with the OEB). Source: <https://ofa.on.ca/resources/new-ultra-low-overnight-electricity-rate-plan/>
- **In context, that's a tiny share.** RPP serves ~**66 TWh / ~66% of Class B** consumption and on the order of **4-5 million residential accounts** province-wide (OEB RPP Price Report Nov 2024, p.14: "RPP consumption … approximately 66 TWh, or 66% of total Class B consumption"). So 12,073 ULO accounts is **well under ~0.3% of RPP households**. ULO is a niche plan two years after launch. Source: <https://www.oeb.ca/sites/default/files/rpp-price-report-20241018.pdf>
- **The trend is up, but no public number measures it.** OEB Nov-2024 report, §3.2: "there has been an increased uptake of the ULO program," enough that the OEB recalibrated the ULO load profile on 12 months of *actual* ULO-customer data. No public number attached. Source: same PDF (p.25-26).
- **The only ongoing public uptake series is proportional, not a headcount.** The IESO Smart Metering Entity publishes "Quarterly Tiered Uptake" and "Quarterly ULO Uptake" charts (share of price-plan switches since the 2021 Customer Choice launch); it feeds raw analysis to the OEB but doesn't post a downloadable households-on-ULO table. Source: <https://www.ieso.ca/Sector-Participants/Smart-Metering-Entity/Consumption-Data>

### 2. WHO it's for — "EV-adjacent," but the OEB never says "for the affluent"
- **It was created in response to EV growth, but it's aimed at *anyone* who uses power overnight, not EV owners only.** OEB EV page: ULO "encourages shifting electricity use to overnight when provincewide electricity demand is lower, **supporting the integration of EVs**." Source: <https://www.oeb.ca/consumer-information-and-protection/electric-vehicles-evs>
- **The government's launch framing named EV charging explicitly** as the motivating use case (ULO "specially designed for customers who use more electricity at night, such as those who charge their electric vehicles"). Source (Ontario gov news release): <https://news.ontario.ca/en/release/1002916/ontario-launches-new-ultra-low-overnight-electricity-price-plan>
- **The stated "best fit" group is overnight-heavy users in general** ("shift workers, late-night businesses," EV owners), not a wealth descriptor. The OEB tells everyone else to run the bill calculator. Source: <https://energyrates.ca/how-the-ultra-low-overnight-electricity-price-plan-works-in-ontario/>
- **No public dataset links ULO uptake to income, EV ownership, or tenure.** The "affluent EV-owning homeowner captures ULO" claim is a *reasonable inference* (EV ownership skews high-income and needs home charging access), not a directly-sourced statistic. Treat it as an inference and label it that way to a skeptical judge.

### 3. Renter ACCESS — the crux, and it SPLITS into two very different renter populations
- **Individually-metered renter (the LDC is the biller): CAN choose ULO.** The price plan is chosen **per account by the account-holder of record**. A renter who holds the Alectra/utility account and has a smart meter can elect ULO by notifying the distributor (OEB Standard Supply Service Code). OEB Nov-2024 report: consumers with smart meters "are charged on the basis of TOU prices, **unless they elect** one of the other options by giving notice to their distributor." Source: <https://www.oeb.ca/sites/default/files/rpp-price-report-20241018.pdf> (p.3, 9). Also: since Nov 1 2023 every distributor **must offer** ULO to smart-metered RPP customers (same PDF, p.24).
- **Sub-metered / bulk-metered MURB renter (a USMP is the biller): STRUCTURALLY LOCKED OUT of choosing.** If the bill comes from a **Unit Sub-Meter Provider (USMP)** instead of the local utility, the tenant **cannot switch price plans at all**: "**That decision can only be made for the building as a whole by the 'principal/master consumer'** … in most cases the property manager, landlord or condominium board." Source (OEB consumer page): <https://www.oeb.ca/consumer-information-and-protection/electricity-rates/choosing-your-electricity-price-plan>. Corroborated by Toronto Hydro multi-unit guidance and Hydro Ottawa FAQ via <https://www.torontohydro.com/for-business/pricing-and-rebates-for-multi-unit-buildings>.
- **This is the load-bearing finding for the pitch.** USMP-billed tenants ARE still on RPP-regulated commodity prices (USMPs are OEB-licensed and pass RPP rates through), so the issue isn't that they're outside RPP. It's that **the landlord, not the tenant, picks WHICH RPP plan applies.** The renter most likely to be in a sub-metered apartment is exactly the low-income MURB tenant Tide targets. The exclusion is **legal and structural, not behavioural**: a renter cannot opt into 3.9¢ overnight even if perfectly informed and motivated, because the landlord holds that lever.
- **The size of the locked-out group isn't publicly quantified.** No public figure exists for "# of Ontario tenants billed by a USMP." Sub-metering is concentrated in post-2007 condos and rentals (O. Reg. 442/07 required per-unit smart meters in condos built after Aug 1 2007), so it's directionally a large and growing slice of the GTA/Peel rental stock, but there's no hard count to cite. Source: <https://stikeman.com/en-ca/kh/canadian-energy-law/ontario-energy-board-clarifies-smart-sub-metering-rights-for-multi-unit-buildings>

### 4. Equity / distributional evidence
- **Ontario's own full-scale TOU rollout study (Brattle, for the IESO) found mandatory TOU produced only modest peak shifting and that bill outcomes vary**: many customers paid *more* in summer. ULO is a steeper version of the same mechanism. Source: <https://www.brattle.com/wp-content/uploads/2017/10/7289_analysis_of_ontarios_full_scale_roll-out_of_tou_rates_-_final_study-3.pdf>
- **TOU-equity literature: low-income customers fare worse on TOU when their peak use is inflexible.** ACEEE / Opinion Dynamics: large shares of customers see *higher* bills under TOU despite some demand reduction; low-income and inflexible households are most exposed. Source: <https://opiniondynamics.com/wp-content/uploads/2021/06/2020_ACEEE-Summer-Study_Assessing-Equity-How-Low-Income-Customers-Fare-on-TOU_Rates_Folks.pdf> (and see the regressive-pricing arXiv working paper already cited in "Tide impact sizing" §5: <https://arxiv.org/html/2509.01499>)

### Verdict — CONFIRMS the structural-exclusion half; WEAKENS the "designed for the affluent" half
- **CONFIRMED (strong, judge-proof):** the *structural* renter lockout is real and citable. **Sub-metered MURB tenants cannot choose ULO at all; the landlord/condo board chooses for the whole building** (OEB primary source). This is the cleanest possible support for "incentives target property owners, not renters": the property owner literally holds the rate-selection lever. Lead with this.
- **WEAKENED / NEEDS RE-WORDING:** the claim that ULO was "**designed for the affluent**" is NOT what the OEB says. Its framing is "supports EV integration / for overnight-heavy users (incl. shift workers)," which is neutral, not wealth-targeted. The affluent-capture story is a defensible *inference* from EV economics, not an OEB statement. A skeptical judge who has read the OEB page can puncture "designed for the affluent." **Safer pitch line:** *"ULO was built around overnight EV charging, a load that skews toward homeowners who can charge at home. And the renters most likely to be sub-metered can't even choose the plan: their landlord picks the rate for the whole building."*
- **SURPRISE a judge could use against us (flag it):** on ULO, **most households pay MORE than on standard TOU** unless they genuinely move load overnight (ULO on-peak 39.1¢ ≫ TOU on-peak ~20.3¢). So "opening 3.9¢ to a renter with a $40 window AC" only nets out if Tide *actually* shifts enough load overnight to beat the punishing 4-9pm ULO on-peak. Otherwise enrolling a renter in ULO could *raise* their bill. Tide's automation is exactly what makes ULO safe for an inflexible household, which is the right framing, but don't imply ULO is free money. Sources: <https://solar-x.ca/blog/ontario-electricity-rates-explained>, OEB rates <https://www.oeb.ca/consumer-information-and-protection/electricity-rates>.
- **Enrollment number to use:** **12,073 on ULO as of March 31, 2024** (≈ <0.3% of RPP households). Frame it as "a rate almost nobody is on two years in," which supports the "captured by a niche" narrative. Do not claim a newer or larger figure; none is public.
