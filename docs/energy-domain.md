# Energy domain notes — Seneca Energy Hackathon 2026

> Backfilled 2026-05-15 from the deep-research dossier (`research-dossier.md`). Originally maintained progressively by the `energy-domain-researcher` agent. Cite every entry with a URL. No marketing prose — only datasets, APIs, regulators, and metrics.

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

- **GridStatus** — Python SDK over IESO + 7 US ISOs, normalized API. <https://www.gridstatus.io/live/ieso> · <https://opensource.gridstatus.io/en/latest/autoapi/gridstatus/ieso/index.html> · IESO data guide: <https://docs.gridstatus.io/data-guides/market-guides/independent-electricity-system-operator-ieso>
- **Gridwatch Ontario** — JSON facade. <https://gridwatch.ca/> · <https://live.gridwatch.ca/>

### OEB — Ontario Energy Board

Open data: <https://www.oeb.ca/ontarios-energy-sector/open-data> (last refreshed Sep 5, 2025 with 2024 data).

Products: Yearbooks of Electricity & Natural Gas Distributors, Electricity Distribution Rates (2006+), Distributor Service Areas (GIS), Performance Scorecards (annual), Complaints (2013+), Service Quality (annual), System Reliability Indicators (2015+ — SAIDI/SAIFI/CAIDI), Major Event Response Reports (2017+). Toronto Hydro 2024 scorecard: <https://www.oeb.ca/documents/scorecard/2024/Scorecard%20-%20Toronto%20Hydro-Electric%20System%20Limited.pdf>.

### Statistics Canada

Hub: <https://www150.statcan.gc.ca/n1/en/subjects/energy>

Key tables:
- **25-10-0015-01** Electric power generation, monthly by class of producer and type
- **25-10-0016-01** Electric power consumption (monthly)
- **25-10-0055-01 / -0058-01 / -0059-01** Natural gas supply, transmission, distribution

**WDS REST API** — JSON, no API key required. Guide: <https://www.statcan.gc.ca/en/developers/wds/user-guide>. 15 methods including `getDataFromCubePidCoordAndLatestNPeriods`, `getFullTableDownloadCSV`.

### Canadian Centre for Energy Information

StatCan + CER + NRCan + ECCC partnership: <https://energy-information.canada.ca/>

### ECCC — Environment and Climate Change Canada

- **Historical Climate Data**: <https://climate.weather.gc.ca/> — per-station CSV/XML (hourly = 1 month at a time, daily = 1 year, monthly = full record)
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
- Alectra + Hydro One launched parallel capacity maps. Coverage write-up: <https://electricautonomy.ca/charging/utilities/2025-03-19/grid-capacity-maps-canada-ontario/>

### Federal GHG inventory + ENERGY STAR

- **Canada NIR**: <https://www.canada.ca/en/environment-climate-change/services/climate-change/greenhouse-gas-emissions/inventory.html> (NIR 2025 covers 1990-2023)
- **Open data mirror**: <https://open.canada.ca/data/en/dataset/779c7bcf-4982-47eb-af1b-a33618a05e5b>
- **ENERGY STAR Portfolio Manager** (used by Toronto/Ontario building reporting): <https://www.energystar.gov/buildings/tools-and-resources/tracking-greenhouse-gas-emissions-portfolio-manager>
- **NRCan regional median GHG intensity tables**: <https://natural-resources.canada.ca/energy-efficiency/energy-star/buildings/technical-reference-documents/canadian-regional-median-greenhouse-gas-emissions-intensity>

### Energy poverty + equity data

- **Energy Poverty & Equity Explorer** (Efficiency Canada + Community Data Program): <https://energypoverty.communitydata.ca/> — census-tract level energy burden, income, heating type, building age. (*Note: cert expiry warning at time of fetch.*)
- **Toronto Social Atlas**: <https://www.toronto.ca/city-government/data-research-maps/neighbourhoods-communities/toronto-social-atlas/>
- **School of Cities — Wealth & poverty concentration in Toronto**: <https://schoolofcities.github.io/neighbourhood-income-toronto-2020/>
- **School of Cities — Heat Vulnerability Toronto**: <https://schoolofcities.github.io/heat-vulnerability-toronto/>
- **Toronto Public Health Heat Vulnerability Index** (TPH publishes maps + methodology)
- **Ontario Marginalization Index (ON-MARG)** — Public Health Ontario

### Climate projections for Ontario

- **Climate Atlas of Canada — Toronto report**: <https://climateatlas.ca/sites/default/files/cityreports/Toronto-EN.pdf> — projects +30°C days nearly 2 months/yr by end of century under RCP 8.5
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

- **OPG** — Ontario Power Generation; nuclear (Pickering, Darlington), hydro fleet, gas via Atura, SMR developer. <https://www.opg.com/>
- **Bruce Power** — Bruce nuclear operator (private consortium of TC Energy + OMERS-aligned + pension funds + employees). <https://www.brucepower.com/>
- **Hydro One** — Transmission ~98% + largest LDC (rural). <https://www.hydroone.com/>

---

## Common metrics

| Metric | Definition |
|---|---|
| **kWh** | Kilowatt-hour. 1 kW sustained for 1 hour. Household billing unit. |
| **kW** | Kilowatt. Power (instantaneous rate). |
| **MWh / GWh / TWh** | Mega-/Giga-/Terawatt-hours. 1 TWh = 10⁹ kWh. Ontario consumes ~151 TWh/yr. |
| **MW capacity** | Nameplate maximum power output. Ontario total ≈ 37,566 MW. |
| **GHG t-CO₂e** | Tonnes of CO₂ equivalent — all GHGs weighted by Global Warming Potential. |
| **Capacity factor** | (Actual energy generated ÷ (Nameplate × hours)) × 100. Nuclear ~90%+, gas peakers 5-15%, wind 25-40%, solar 15-20%, hydro 40-60%. |
| **LCOE** | Levelized Cost of Energy. Total lifetime cost ÷ total lifetime MWh. Combines capex + opex + capacity factor. Misses reliability/dispatchability value. |
| **Demand response (DR)** | Customers reduce/shift load on signal from grid operator. Ontario clears ~$171k/MW-yr (2026). |
| **Load factor** | Average load ÷ peak load over a period. Higher = better utilization. |
| **Peak demand** | Highest instantaneous (typically hourly) demand in a period. Ontario 2025 summer peak: 24,862 MW on June 24 at 7pm. |
| **Baseload** | Always-on minimum demand met by high-capacity-factor low-marginal-cost generation (nuclear, run-of-river hydro). |
| **Dispatchable** | Can be ramped on/off by operator command (gas, hydro reservoirs, storage). |
| **Intermittent / variable** | Output depends on weather (wind, solar). Requires forecasting + backup. |
| **TOU / RPP** | Time-of-Use rates / Regulated Price Plan — Ontario residential default (on/mid/off-peak). |
| **ULO** | Ultra-Low Overnight rate (2023+) for EV charging. 4 periods. |
| **Global Adjustment (GA)** | Reconciliation charge covering nuclear regulated + hydro contracts + FIT contracts + conservation. **2024 GA ≈ $8.0B.** Often bigger than HOEP on bills. |
| **HOEP** | Hourly Ontario Energy Price (wholesale spot). |
| **DER** | Distributed Energy Resource — rooftop solar, small storage, EVs, demand response. |
| **DERMS** | Distributed Energy Resource Management System (Ontario lacks a statewide one). |
| **kg CO₂/kWh** | Carbon intensity of electricity. Ontario grid: ~25-50 g/kWh average (one of cleanest in N. America). Coal ~900 g/kWh; gas ~400 g/kWh. |
| **EFPH** | Equivalent Full Power Hours — nuclear operating lifetime measure (Pickering 5-8 capped at 305,000 EFPH per current licence). |
| **SAIDI / SAIFI / CAIDI** | System Average Interruption Duration / Frequency / Customer Average Interruption Duration. OEB reliability scorecard metrics. Toronto Hydro 2024 SAIDI = 0.33 hours. |
| **EUI** | Energy Use Intensity (kWh/m² or kBTU/ft²). Building energy benchmarking. |
| **MRP** | Market Renewal Program — moved Ontario to nodal pricing across ~973 nodes May 1, 2025. |
| **ICI** | Industrial Conservation Initiative — Class A/B GA-busting based on top-5 system peak share. |

---

## Angle library — for `/hackathon:ideate`

Surfaced from the 2026-05-15 deep-research dossier. 15 candidate angles, 3 starred top-3 seeds. Full cards in [`../Synergy-v2.0 — Hackathon Brain/20-ideas/seed-ideas.md`](../Synergy-v2.0%20%E2%80%94%20Hackathon%20Brain/20-ideas/seed-ideas.md). Top-3 in dedicated files: `seed-a-carbon-intensity-api.md`, `seed-b-ontario-enviroscreen.md`, `seed-c-outage-equity-index.md`.

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

Heuristics from past winners:
- **Demo moment must be visual + auto-play in <10s** (per cross-theme observation in [`themes.md`](themes.md))
- **Ontario data + organizer's "help decision makers" framing** = strongest theme alignment for Theme 3
- **Map + dashboard archetype** has highest win rate across 30+ historical winners
- **Equity / underserved-communities framing** explicitly rewarded by judges (Incenzo MIT 2024 1st)
- **API + embeddable widget** is rare and lands the "public good" frame
- **Time-replay engine** is the most underused demo mechanic

---

## Recent news + debates worth knowing (2024-2026)

Top stories likely in judge / mentor conversations:

1. **Pickering refurb $26.8B** approved Nov 2025 — 37,000 jobs (<https://news.ontario.ca/en/release/1006772/ontario-greenlights-pickering-nuclear-generating-station-refurbishment-to-create-nearly-37000-jobs>)
2. **Darlington SMR** construction started May 2025; foundation module set May 2026; **first grid-scale SMR in G7** (<https://www.opg.com/projects-services/projects/nuclear/smr/darlington-smr/>)
3. **Bruce C** $300M predevelopment May 2026 — first new large nuclear in Ontario in 30 yrs (<https://www.power-eng.com/nuclear/ontario-advances-bruce-c-nuclear-project-with-300m-pre-development-agreement/>)
4. **IESO 2025 APO**: 75% demand growth to 2050 (<https://www.ieso.ca/Corporate-IESO/Media/News-Releases/2024/10/Electricity-Demand-in-Ontario-to-Grow-by-75-per-cent-by-2050>)
5. **Ontario IEP "Energy for Generations"** (June 2025) — first 25-year integrated plan
6. **Nov 2025 RPP rate hike** — ~29-30% (biggest since 2019); OER raised to 23.5%
7. **iZEV paused → EVAP launched Feb 2026** ($2.3B); **Carney repealed ZEV sales mandate**
8. **March 30 2025 ice storm** — Hydro One's worst since 1998; 2,700+ poles; 1M+ outages
9. **Natural gas moratorium** debate — IESO Phase-Out Study says feasible to 2050, but LT1 still procured 411 MW new gas
10. **2024 OBC** effective Jan 1, 2025 — new Part 12 (resource conservation, GHG); Efficiency Canada flagged "no path to net-zero codes by 2030"
11. **Dec 2025 capacity auction** — DR value soared to $171,319/MW-yr, +163% YoY

### Key debates

- **Nuclear-first vs. renewables-first** — Bruce/OPG/IESO/OEA push +17,800 MW nuclear by 2050; Pembina/CCI/OCAA/Pollution Probe argue renewables+storage+QC imports decarbonize faster
- **Gas plant phaseout** — 32+ municipalities (~60% Ontario population) passed phase-out motions; IESO says 2030 phaseout = blackouts + $100/month rate hike
- **Affordability** — OER is now $5B+/yr general-revenue subsidy critics call regressive
- **Climate resilience** — May 2022 derecho + March 2025 ice storm exposed grid fragility; vegetation mgmt + hardening + undergrounding pilots on the table

### Voices to know

- **Jack Gibbons** — Chair, Ontario Clean Air Alliance; leads gas phase-out coalition
- **Mark Winfield** — Prof, York Faculty of Environmental & Urban Change; nuclear skeptic
- **Adam Scott** — Exec Dir, Shift Action; pension/climate risk
- **Lesley Gallinger** — CEO, IESO
- **Lynne Anderson** — Chair, OEB

---

## 2026-05-22 freshness update

> Append-only delta gathered by `energy-domain-researcher` on 2026-05-22. Covers (1) the May 15→22 freshness window, (2) confirmed/unknown Seneca event facts, (3) the Tide carbon-honesty / marginal-emissions check. Every line carries a URL. Items already in the dossier (Bruce C May 7 announcement, Pickering refurb, Darlington SMR) are NOT repeated here.

### Marginal vs. average emissions factor — Ontario (the Tide carbon-honesty crux)

The single most decision-relevant finding for Tide. **Cost savings from ULO are guaranteed; carbon savings depend on the marginal generator in the hour you shift FROM.**

- **TAF marginal emissions factor (MEF):** `0.00015 tCO₂e/kWh` = **150 gCO₂e/kWh**, from analysis of 2015 IESO data. Source: The Atmospheric Fund, "ABCs of GHGs" <https://taf.ca/abcs-ghgs-underestimating-emission-reduction-potential-green-energy/> and the full "Ontario Electricity Emissions Factors and Guidelines" 2024 PDF <https://taf.ca/custom/uploads/2024/06/TAF-Ontario-Emissions-Factors-2024.pdf> (8.4 MB; not machine-readable via WebFetch — cite the HTML companion). 2025 edition supersedes; landing page <https://taf.ca/publications/electricity_emissions_factors/>.
- **Average grid factor for contrast:** `0.00005 tCO₂e/kWh` = **~50 gCO₂e/kWh** (Canada NIR, Ontario). So the **marginal factor is ~3× the average** — using the average understates the carbon value of load-shifting.
- **Why marginal ≠ average matters for Tide:** TAF states conservation/shifting "at times when natural-gas-fired energy is being used to handle peak loads … will result in more carbon reductions" than during baseload (nuclear+hydro) periods. The carbon benefit of Tide comes from *avoiding the on-peak gas hour*, NOT from the overnight hour being clean. Source: <https://taf.ca/abcs-ghgs-underestimating-emission-reduction-potential-green-energy/>
- **TAF publishes time-of-use AND seasonal MEFs** (on-peak vs off-peak; summer vs winter). TAF caveat: seasonal MEFs are NOT forecast (too weather-dependent) and **you must not mix factors in one calculation**. Source: <https://taf.ca/publications/electricity_emissions_factors/>
- **Summer overnight reality (the honest caveat):** Ontario nuclear+hydro baseload "runs 24/7 … often enough to meet low-demand periods such as overnight." BUT during 2025 summer heat waves "natural gas was increasingly relied upon to ensure reliability," and gas use "is expected to remain above typical levels through this decade" because of nuclear refurbishments (Pickering B / Bruce / Darlington offline in waves). So a summer overnight hour is NOT guaranteed gas-free. Sources: <https://www.ontario.ca/page/powering-ontarios-growth>, IESO 2025 Year in Review <https://www.ieso.ca/corporate-ieso/media/year-end-data>, <https://www.ontario.ca/page/ontarios-affordable-energy-future-pressing-case-more-power>
- **Marginal data caveat for any "carbon API" angle:** Electricity Maps **discontinued its marginal-emissions product in 2025** (verifiability concerns); some US/EU rules now restrict marginal-signal use. Real-time *average* CA-ON intensity is still available. Sources: <https://www.electricitymaps.com/resources/publications/marginal-emissions-introduction>, zone page <https://app.electricitymaps.com/zone/CA-ON>
- **Reference intensities:** simple-cycle gas ≈ **460 gCO₂/kWh** (TAF). Ontario grid average ≈ 25–50 g/kWh. Source: <https://taf.ca/abcs-ghgs-underestimating-emission-reduction-potential-green-energy/>
- **Honest one-liner for the pitch:** *"ULO cuts your bill every night (3.9¢ vs 39.1¢/kWh — guaranteed). It cuts carbon when the hour you shift away from is gas-fired — which in Ontario is most on-peak summer afternoons. We use IESO's live fuel mix to show you when shifting is also clean, not just cheap."*

### Datasets & APIs — confirmed/refreshed this week

#### TAF Ontario Electricity Emissions Factors & Guidelines — added 2026-05-22
- **URL:** <https://taf.ca/publications/electricity_emissions_factors/> (2025 ed. current; 2024 PDF <https://taf.ca/custom/uploads/2024/06/TAF-Ontario-Emissions-Factors-2024.pdf>)
- **Type:** report (PDF) + methodology
- **Shape:** marginal & average emissions factors for Ontario electricity, split by time-of-use (on/off-peak) and season (summer/winter); guidance on which factor to use for conservation vs. consumption claims
- **Access:** free, no signup. PDF is large (8.4 MB) and not WebFetch-readable — download manually or cite the HTML "ABCs of GHGs" companion for the headline numbers.
- **Hackathon use:** the citable authority that lets Tide make an honest, defensible carbon claim instead of a hand-wavy "overnight = clean" claim a judge could puncture.

#### IESO 2025 Year in Review — added 2026-05-22
- **URL:** <https://www.ieso.ca/corporate-ieso/media/year-end-data>
- **Type:** regulator report
- **Shape:** 2025 capacity mix (nuclear 25%, gas 28%, hydro 24%, wind 14%, solar 7%, bio 1%, imports 1%); **gas ≈ 30% of capacity but only ~10% of generation**; 2025 peak **24,862 MW on June 24** (highest in 12 yrs); **555 MW new capacity added, 451 MW (>80%) from storage** (Oneida, Tilbury, York BESS, Goreway).
- **Access:** free HTML.
- **Hackathon use:** fresh 2025 numbers for Tide's "why overnight" slide and to size the gas-on-the-margin argument.

### Common metrics — refreshed values

| Metric | 2026 value (verified this week) | Source |
|---|---|---|
| **ULO overnight rate** | **3.9¢/kWh**, 11pm–7am daily | <https://www.oeb.ca/consumer-information-and-protection/electricity-rates> |
| **ULO on-peak rate** | **39.1¢/kWh** weekday (≈10× the overnight rate) | <https://www.oeb.ca/consumer-information-and-protection/electricity-rates> |
| **ULO weekend/off-peak (7am–11pm)** | **9.8¢/kWh** (was 7.6¢ in the prior RPP period — corrected 2026-05-22 against OEB primary source; equals TOU off-peak) | <https://www.oeb.ca/consumer-information-and-protection/electricity-rates> |
| **RPP rates unchanged at summer switch** | Nov 1 2025 rates hold through Oct 31 2026; **no change at the May 1 2026 summer switch** | <https://www.oeb.ca/consumer-information-and-protection/electricity-rates> |
| **Marginal EF (Ontario)** | **~150 gCO₂e/kWh** (2015 IESO basis) | <https://taf.ca/abcs-ghgs-underestimating-emission-reduction-potential-green-energy/> |
| **Average EF (Ontario)** | **~50 gCO₂e/kWh** | same |
| **2026 APO reference demand** | net **152 TWh** (2025 ref yr), growing **~65% to ~250 TWh by 2050**; first edition with high/low scenarios; data centres 8.6% of 2050 demand | <https://www.ieso.ca/Sector-Participants/Planning-and-Forecasting/Annual-Planning-Outlook/2026-APO-Summary> |

### Freshness delta (May 15 → 22) — thin, reported honestly

The May 15→22 window produced **no major new Ontario energy announcement** that a mentor/judge would cite. The big recent items (Bruce C $300M, May 7; IESO 2026 APO; Pickering/Darlington) all predate May 15 and are already in the dossier. What IS active this exact week:

- **IESO stakeholder engagement meetings May 20–22, 2026** — agenda live; ongoing APO / procurement discussions. Source: <https://www.ieso.ca/>
- **IESO Long Lead-Time (LLT) RFP** — competitive procurement for new-build hydro + long-duration storage (5+ yr lead). Relevant to storage/resilience themes. Source: <https://www.ieso.ca/>
- **2026 wholesale price pressure** — commercial/industrial wholesale energy costs projected **+71%** in 2026 (on top of ~68% in 2025); a live affordability talking point. Source (third-party forecast, treat as directional): <https://solar-x.ca/blog/ontario-electricity-prices-2026-forecast>

### Seneca Energy Hackathon 2026 — event facts (confirmed vs unknown, as of 2026-05-22)

Sources: <https://www.senecahackathon.com/> and <https://www.senecahackathon.com/about>

**Confirmed:**
- Dates: **May 24–30, 2026**. Phase 1 (virtual build) May 24–28; Phase 2 (in-person stage) May 29–30; finale May 30 at "Helix," Seneca Polytechnic, 1750 Finch Ave E, Toronto M2J 2X5.
- Format: hybrid (Discord + Microsoft Teams for virtual; in-person finalist stage).
- Theme: energy innovation ("The next big energy breakthrough could start with you"). Three challenge tracks per organizer brief: Clean Energy Generation & Integration; Smart Grid, Resilience & Electrification; Community Energy, Equity & Sustainability.
- Eligibility: **open to every student**, any program/background/experience level.
- Learning partner: **Octo Learning Inc.** (learnatocto.com), listed under Learning Resources.
- Contact: hackathon@senecapolytechnic.ca. Past themes: Food (2025), Housing (2024), Smart Cities (2023), Sustainability (2022).

**Still UNKNOWN (not published as of 2026-05-22 — do NOT assume):**
- Sponsors / sponsor tech or required APIs — **none named** on the site.
- Prize pool / amounts — not stated.
- Judging rubric / axes — not stated (the dossier's MLH 4-axis default is an assumption, not confirmed).
- Team-size rules — not stated.
- Submission portal — **no Devpost link found** on the official site or via search. (Unrelated "Seneca Hacks"/"Design Hacks" Devpost pages exist but are different events — do not conflate.)

### Angle library — implication for Tide

- The carbon-honesty data above does NOT kill Tide — it sharpens it. Lead the demo with **cost** (guaranteed 3.9¢ vs 39.1¢) and frame **carbon as conditional**, surfaced live from IESO fuel mix. A judge who knows the grid will respect the honesty; a judge who doesn't gets the clean "10× cheaper overnight" hook.
