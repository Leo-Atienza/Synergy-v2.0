# Seneca Energy Hackathon 2026 — Comprehensive Research Dossier

> **Context.** Leo asked for this research on 2026-05-15 so Claude (and Leo) would have full context for the Seneca Energy Hackathon 2026 (May 24-30). Six parallel research agents built it. They covered: the Ontario and Canada energy world, international proof-of-concepts, past hackathon winners, a how-to-win playbook, ideas from other fields, and Ontario's physical infrastructure. **It does not pick a tech stack. It is context only, not a decision about what to build.** The three best idea seeds are in Appendix 2, ready to move into the vault (`Synergy-v2.0 — Hackathon Brain/20-ideas/`) after the plan ends. Use this file as the main reference during `/hackathon:ideate` on May 22-24, and as ready facts during `/hackathon:build`.

> **How to read.** Sections A-D give you the *world*: Ontario's reality, the data sources, and tools built abroad. Sections E-F give you the *gap*: what is missing, plus ideas borrowed from other fields. Sections G-J give you the *craft*: how to win and how to lose. Section K is *who might fund it*. The appendices hold ideas, a glossary, and a bibliography. If you only read three sections, read D (gaps), G (winning patterns), and H (playbook).

---

## 1. THE EVENT — RECAP (LOCKED FACTS ONLY)

| Field | Value |
|---|---|
| Name | Seneca Energy Hackathon 2026 |
| Tagline | "The Energy to Innovate" |
| Host | Seneca Polytechnic |
| Dates | 2026-05-24 → 2026-05-30 |
| Format | Hybrid. Virtual build May 24-28, then in-person finale May 29-30 |
| Phase 1 venue | Virtual (Discord + Microsoft Teams mentor channels) |
| Phase 2 venue | HELIX, Newnham Campus (1750 Finch Ave East, Toronto) |
| Themes | (1) Clean Energy Generation & Integration · (2) Smart Grid, Resilience & Electrification · (3) Community Energy, Equity & Sustainability |
| Submission deadline | 2026-05-28 23:59 ET (website). **A photo shows May 26 instead**, so confirm on Day 1 |
| Top finalists revealed | 2026-05-28 |
| Mode | Solo (1). Toggle at `/hackathon:team` |
| Contact | hackathon@senecapolytechnic.ca |
| Learning resource | learnatocto.com **= Octo Learning, Inc.** (AI-curated learning platform). NOT Octopus Energy. NOT Ontario Centre of Innovation. |

**Cross-theme organizer signals** (from re-reading themes.md): every theme names *maps, visuals, digital tools, simple tools*, and every theme says *"help people understand"* or *"help decision makers understand"*. So the demo moment should be **visual and under 10 seconds**. They expect Canadian datasets (Theme 1 names Canada directly). Theme 3's *"decision makers"* wording means a planner or policymaker user works well.

**Seneca 2023 baseline** (the past event closest to this one): the theme was Smart Cities. The winner was **Mood Vault** (Foam on Latte, a 3-person Seneca team), a patient-therapist mood platform with NLP suicide-ideation detection, 75-language translation, and voice transcription. Grand prize was $5,000 CAD. It won by pairing a serious social topic with polished UX and a clear safety story, *not* by inventing new tech. **What this tells us:** Seneca judges reward a serious social framing, polished delivery, and concrete safety and access choices over technical novelty.

---

## 2. ONTARIO'S ENERGY REALITY

### 2.1 The electricity mix today

By **energy generated** (OEB Jun 2025, reflecting 2024 actuals):
- Nuclear **48.5%**
- Hydro **23.4%**
- Natural gas / oil / other **16.6%**
- Wind **9.0%**
- Solar **2.2%**
- Bioenergy **0.4%**

By **installed capacity** (~37,566 MW, IESO 2025 APO):
- Nuclear ~30% (~13,000 MW)
- Gas ~28% (~10,500 MW)
- Hydro ~24% (~9,000 MW)
- Wind ~14% (~4,200 MW)
- Solar ~7% (~2,800 MW; ~1,478 MW distributed)
- Bioenergy + storage ~1%

**Takeaway:** Nuclear runs flat out (about 90%+ capacity factor) and carries the steady baseload. Gas runs only at peaks (about 10% of the energy from about 28% of the capacity), and it is the live political fight. Wind and solar are still small. About 75-90% of generation is low-carbon, so Ontario's grid is already among the cleanest in North America.

### 2.2 Generation assets — the big ones

**Nuclear (13,000+ MW)**
- **Bruce Nuclear (Kincardine)**: 8 reactors, 6,400 MW net, often called the world's largest operating plant. It is mid-way through a Major Component Replacement (MCR) refurbishment running 2023 to 2033. Unit 6 is done (2023). Unit 3's construction phase finished Feb 2026. Units 4, 5, 7, 8 are still queued. Bruce Power's Project 2030 aims for about 7,000 MW. **Bruce C**: a $300M predevelopment agreement was signed May 2026. It is an option to add up to 4,800 MW of new nuclear, the first new large nuclear build in Ontario in 30 years.
- **Pickering Nuclear**: Units 1 and 4 retired Oct/Dec 2024. **The Pickering B refurbishment (Units 5-8) was approved Nov 2025: $26.8B budget, about 30,500 jobs, about a 30-year life extension, back online mid-2030s.** Lead EPC is the AtkinsRéalis Candu Energy and Aecon JV.
- **Darlington Nuclear (Clarington)**: **the refurbishment of 4 CANDUs finished Feb 2026, $150M under budget and 4 months early.** Unit 4 returned to 100% Feb 2026.
- **Darlington New Nuclear (BWRX-300 SMR)**: GE Vernova-Hitachi 300 MW boiling-water small modular reactors. CNSC granted the Licence to Construct April 2025. Construction started May 2025. The foundation module was set May 1, 2026 (953 tonnes, 37 m diameter). **The first unit aims to connect to the grid by end of 2030. It is the first grid-scale SMR in the G7.** 4 units are planned, with a total project cost around $21B.

**Hydroelectric (~9,000 MW)**
- **Niagara complex**, about 2,400 MW: Sir Adam Beck I (548 MW, 1922), Sir Adam Beck II (1,499 MW, 1954), and the Sir Adam Beck Pump Generating Station (174 MW, Canada's only pumped storage). OPG is investing $1B in a 15-year refurb starting 2025.
- **R.H. Saunders (St. Lawrence)**: 1,045 MW (1958), a 16-year overhaul started in 2024. It is half of the binational Moses-Saunders Dam, shared with NYPA.
- **Lower Mattagami complex (NE Ontario)**: 924 MW. **25% owned by Moose Cree First Nation** under the Amisk-oo-skow Agreement.

**Wind (~4,200 MW)**
- **Henvey Inlet Wind** (Georgian Bay, 2019): **300 MW**, Ontario's largest, and Canada's largest First Nation wind partnership (Henvey Inlet FN's Nigig Power Corp with Pattern Energy).
- **K2 Wind** (Huron, 2015): 270 MW.
- **Niagara Region Wind Farm** (2016): 230 MW, Boralex.
- **Bow Lake** (Algoma): a Batchewana First Nation partnership.

**Solar (~2,800 MW)**
- **Sarnia PV** (2010): 97 MWp, once the world's largest. About 120 GWh/yr.
- **Grand Renewable Energy Park (Haldimand)**: 100 MW, 447,622 panels, a Six Nations partnership.

**Natural gas (~10,500 MW, mostly peakers)**
- Goreway (915 MW, Brampton, Capital Power), Halton Hills (683 MW, TransAlta/Atura), Portlands Energy Centre (550 MW, Toronto, Atura), Brighton Beach (570 MW, Windsor), Lambton, Napanee, Lennox, Greenfield, St. Clair. The fleet runs at about a 25-40% capacity factor.

**Biomass**
- **Atikokan GS**: 211 MW, 100% biomass since 2014, North America's largest. Its contract was extended 5 years.

**Battery storage**
- **Oneida Energy Storage (Haldimand)**: **250 MW / 1,000 MWh, Canada's largest BESS**, in commercial operation May 2025. Built by Northland Power, Six Nations of the Grand River, NRStor, Aecon, and the Mississaugas of the Credit. It came in about $100M under the $800M budget.
- **LT1 RFP** (2024): 1,784 MW awarded to 10 storage projects, plus 411 MW gas (about $672/MW-business-day average).
- **LT2 RFP** energy stream (2025): 1,115 MW contracted across 13 proponents.

### 2.3 Transmission

**Hydro One Networks owns about 98%** of Ontario's transmission grid.

Major 500 kV corridors:
- **Bruce-to-Milton** (2012, $635M+, about 180 km, 3,000+ MW): carries Bruce nuclear to the GTA through Milton SS.
- **Bruce-to-Longwood**: Bruce → Longwood TS near London.
- **Hanmer-to-Mississagi** (planned, about $1B+, around 200 km, in service late 2029): opens the Sudbury/Algoma corridor so the steel industry can electrify.

Active reinforcements:
- **Waasigan (NW Ontario)**: $1.2B, 230 kV, Lakehead → Mackenzie, Phase 1 by end of 2025. **9 First Nations own 50% of the equity.**
- **Chatham-to-Lakeshore**: $237M, 230 kV, energized Dec 2024, one year ahead of schedule. **50% First Nations equity.**

Interties (links to 5 jurisdictions, more than 20 TWh/yr total):
- Quebec (about 2,775 MW plus a 2023 600 MW swap; Ontario imports hydro in summer and exports in winter)
- Manitoba (Eastern Manitoba Tie)
- New York (St. Lawrence; Niagara)
- Michigan (B30L Lambton-Bunce Creek)
- Minnesota (small)

Known constraints: the Bruce-to-Toronto SPS (special protection scheme), surplus in Sudbury/Algoma, and congestion in the GTA West.

### 2.4 Distribution — the LDC landscape

Ontario has **54 to 61 LDCs, all OEB-regulated.** The big seven:

| LDC | Customers | Territory |
|---|---|---|
| Hydro One Distribution | ~1.5M | Rural Ontario (70% land area) |
| Alectra Utilities | ~1M+ | Vaughan, Markham, Brampton, Hamilton, St. Catharines, Mississauga |
| Toronto Hydro | ~790,000 | City of Toronto |
| Hydro Ottawa | ~335,000+ | Ottawa + Casselman |
| Elexicon Energy | ~174,000 | Ajax, Whitby, Pickering, Belleville, Clarington |
| London Hydro | ~160,000 | London |
| ENWIN | ~89,000 | Windsor |

**Smart meters have been everywhere since 2010** (the first jurisdiction in North America to do this). The **Green Button** program (download-my-data and connect-my-data) is widely used. **Toronto Hydro's 2025-29 rate plan** is $5.1B (approved Nov 2024).

**Toronto Hydro launched a Load Capacity Map in March 2025**, an interactive map showing how much spare grid room each area has, alongside Alectra and Hydro One. It is a goldmine for picking project sites.

### 2.5 Market structure

- **HOEP** (Hourly Ontario Energy Price) is the wholesale spot price.
- **Global Adjustment (GA)** is a reconciliation charge that covers nuclear regulated payments, hydro contracts, FIT contracts, and conservation programs. **2024 GA was about $8.0B.** GA is usually far bigger than HOEP on bills.
- **Class A / B** under the Industrial Conservation Initiative (ICI): large customers pay GA based on their share of the top-5 system peaks, which pushes them to "GA-bust" by shaving load during peaks.
- **Capacity Auction**, held every year since 2020. 2024 results: 2,122 MW for summer 2025 ($332.39/MW-day), and 1,525 MW for winter ($725.31/MW-day, or $139/MW-day depending on the source. See [enpowered.com/demand-response-2026](https://enpowered.com/demand-response-2026/)).
- **DR-Auction** value jumped in 2026 to **$171,319/MW-yr (+163% year over year)**.
- **Residential rate plans:** TOU (3 periods, 2010+), Tiered (1,000 kWh winter / 600 summer cap), and **ULO (Ultra-Low Overnight, 2023+)** for EV charging.
- **The Market Renewal Program launched May 1, 2025.** It moved Ontario to a **Single Schedule Market with nodal pricing across about 973 nodes**. This is the biggest market change since 2002.

### 2.6 Off-grid & Indigenous-led infrastructure

- **Wataynikaneyap Power**: completed May 2024, commissioned Dec 11, 2024. **A 1,800 km, $2B transmission line connecting 17 remote First Nation communities.** It is 51% First Nation-owned (24 First Nations) and the largest Indigenous-led transmission project in Canada. It cuts about 6.6 Mt GHG/yr.
- About 450+ renewable projects across Ontario are Indigenous-led or have an Indigenous partner (CER). The federal **Indigenous-led Clean Energy Project Tax Credit** came in Budget 2024.

### 2.7 Heat infrastructure

- **Toronto Deep Lake Water Cooling (Enwave)**: draws 4°C water from Lake Ontario at 83m depth. **It now serves about 180 buildings, 40M ft² of downtown Toronto.** A 4th intake pipe was commissioned in 2024 (+60% capacity). It is the world's largest lake-source cooling system.
- **U of T District Energy** (since 1912), **York Keele**, and **Markham District Energy**.
- District heating is still rare overall. Enbridge Gas serves 75-80% of Ontario households (3.7M households on natural gas heat).

### 2.8 EV infrastructure (end-2025)

- **8,804 DC fast-charging ports across Canada** (+28% year over year). Ontario holds the largest share.
- Networks: **FLO** (1,023 DCFC ports), **Petro-Canada Electric Highway** (95 DCFC, shrinking), **Tesla Supercharger** (the largest by port count), **Ivy Charging Network** (an OPG and Hydro One JV, 150+ DCFC at about 60 stations), ChargePoint, Tesla, EVGO.
- **EV fleet:** about 400,000 Ontario EVs in 2025, rising to **11.5M by 2050 (IESO)**.
- **The federal iZEV rebate paused Jan 2025 and was replaced Feb 2026 by EVAP** ($2.3B over 5 years, $5,000/EV, $2,500/PHEV).
- **PM Carney repealed the ZEV sales mandate in 2026** and replaced it with emission standards for MY2027-2032.
- **Ontario has no provincial EV purchase rebate.** That is a key reason its ZEV market share lags. Ontario does run **EV ChargeON** for public and condo charging.
- V2G pilots: **Peak Power's Peak Drive** (downtown Toronto, 21 bi-directional LEAF chargers, up to about $8,000 CAD per vehicle per year by discharging during GA peaks). Hydro One and Peak Power also run a V2H pilot through the IESO Grid Innovation Fund.

### 2.9 The IESO 2025 APO numbers everyone quotes

- Net annual energy demand: **154 TWh (2025), rising to 245-263 TWh (2050)**, a 59-75% increase (different APO years cite both numbers).
- Ontario shifts from peaking only in summer to **peaking in both summer and winter by the 2030s**.
- **Data centres**: 2.5 TWh (2026), rising to **14 TWh (2050)**. At least 16 large data centres (100-1,000 MW each) by 2035, which is 13% of new demand and 4% of total Ontario demand by 2035.
- The Pathways to Decarbonization 2050 net-zero scenario needs **+17,800 MW nuclear, +17,600 MW wind, +650 MW hydro, +69,000 MW non-emitting supply, and 5,000 MW of demand reduction**. Lifetime cost is about $400B, and annual system cost is about $60B.

### 2.10 Quick-grab numbers cheat sheet

| Item | Value |
|---|---|
| Ontario installed capacity | ~37,566 MW |
| Demand 2025 → 2050 | 154 TWh → 245-263 TWh |
| 2050 winter peak | ~60,000 MW (from ~24,000 MW today) |
| Pickering B refurb | $26.8B, 4 units, mid-2030s, ~30,500 jobs |
| Darlington SMR | First grid 2030, 4×BWRX-300, ~$21B total |
| Bruce Power | ~6,400 MW; Project 2030 → 7,000 MW; Bruce C option +4,800 MW |
| Niagara hydro refurb | $1B, 15 yrs starting 2025 |
| Oneida BESS | 250 MW / 1,000 MWh (Canada's largest) |
| LT1 RFP | 1,784 MW storage + 411 MW gas |
| Henvey Inlet Wind | 300 MW (Ontario's largest wind) |
| Wataynikaneyap | 1,800 km, $2B, 17 FN communities, 24 FN owners |
| Toronto Hydro customers | ~790,000 |
| Enwave Deep Lake Cooling | ~180 buildings / 40M ft² |
| Quebec intertie | ~2,775 MW + 600 MW capacity swap |
| 2024 Global Adjustment | ~$8.0B |
| Nov 2025 RPP rate hike | ~29-30% (largest since 2019) |
| Nov 2025 OER | 23.5% (raised from 13.1%) |
| Market Renewal launch | May 1, 2025 (nodal pricing across 973 nodes) |
| May 2022 derecho | 1.1M+ customers out, 12 deaths, ~$1B damage |
| March 2025 ice storm | 1M+ outages, 2,700+ poles broken, worst since 1998 |

---

## 3. DATA SOURCES, APIS, DATASETS

### 3.1 IESO — the goldmine

Public data hub: [ieso.ca/power-data](https://www.ieso.ca/power-data) | Bulk file directory: [reports-public.ieso.ca/public/](https://reports-public.ieso.ca/public/)

| Product | URL | Format | Refresh |
|---|---|---|---|
| Power Data dashboard | /power-data | HTML | 5-min |
| Real-time Totals (demand + supply + reserve) | /RealtimeTotals/ | XML/CSV | 5-min |
| Generator Output and Capability (≥20 MW units) | /GenOutputCapability/ | XML | Daily |
| Generator Output by Fuel Hourly | /GenOutputbyFuelHourly/ | XML | Daily |
| Generator Output by Fuel Monthly | /GenOutputbyFuelMonthly/ | XML | Monthly |
| Variable Generation Forecast (48h solar+wind) | /VGForecastSummary/ | XML | Daily |
| Real-time 5-min Energy LMP (all nodes, post-MRP) | /RealtimeEnergyLMP/ | CSV | 5-min |
| Day-Ahead Ontario Zonal Price | /DAHourlyOntarioZonalPrice/ | XML | Daily |
| **Hourly Consumption by FSA** (postal prefix) | /HourlyConsumptionByFSA/ | CSV | Monthly |
| Intertie Schedule and Flow (14 interconnections) | /IntertieScheduleFlow/ | XML | 90-day |
| Adequacy Report (today + 34 days) | /Adequacy3/ | XML | Daily |
| Peak Tracker (next 24h forecasted peaks) | /peaktracker/ | HTML | Continuous |
| HOEP archive | /HourlyEnergyPrice/ | CSV | Daily (archive 2002 to May 2025) |

**Third-party wrappers (use these to skip the XML pain):**
- **GridStatus**: a Python SDK over the IESO XML, with a clean API. [gridstatus.io/live/ieso](https://www.gridstatus.io/live/ieso) · [opensource.gridstatus.io](https://opensource.gridstatus.io/en/latest/autoapi/gridstatus/ieso/index.html) · [docs.gridstatus.io/data-guides/market-guides/independent-electricity-system-operator-ieso](https://docs.gridstatus.io/data-guides/market-guides/independent-electricity-system-operator-ieso)
- **Gridwatch Ontario**: a JSON front-end. [gridwatch.ca](https://gridwatch.ca/) · [live.gridwatch.ca](https://live.gridwatch.ca/)

### 3.2 OEB — Ontario Energy Board

Open data: [oeb.ca/ontarios-energy-sector/open-data](https://www.oeb.ca/ontarios-energy-sector/open-data) (last refresh Sept 5, 2025 with 2024 data).

Products: **Yearbooks** of Electricity & Natural Gas Distributors, **Electricity Distribution Rates** (2006+), **Distributor Service Areas** (GIS), **Performance Scorecards** (annual), **Complaints** (2013+), **Service Quality** (annual), **System Reliability Indicators** (2015+, the SAIDI/SAIFI/CAIDI metrics), and **Major Event Response Reports** (2017+). The Toronto Hydro 2024 scorecard PDF is available.

### 3.3 Statistics Canada

[www150.statcan.gc.ca/n1/en/subjects/energy](https://www150.statcan.gc.ca/n1/en/subjects/energy)

Key tables you'll use:
- **25-10-0015-01**: Electric power generation, monthly by producer class and type
- **25-10-0016-01**: Electric power consumption (monthly)
- **25-10-0055-01**: Natural gas supply and disposition

**WDS REST API**: no key required, returns JSON. User guide: [statcan.gc.ca/en/developers/wds/user-guide](https://www.statcan.gc.ca/en/developers/wds/user-guide). Methods include `getDataFromCubePidCoordAndLatestNPeriods` and `getFullTableDownloadCSV`.

**Canadian Centre for Energy Information** (a joint effort of StatCan, CER, NRCan, and ECCC): [energy-information.canada.ca](https://energy-information.canada.ca/)

### 3.4 ECCC — Environment and Climate Change Canada

- **Historical Climate Data**: [climate.weather.gc.ca](https://climate.weather.gc.ca/), CSV or XML per station.
- **MSC Datamart bulk**: [eccc-msc.github.io/open-data/msc-data/climate_obs](https://eccc-msc.github.io/open-data/msc-data/climate_obs/readme_climateobs-datamart_en/)
- **Climate Services bulk**: [climate-change.canada.ca/climate-data](https://climate-change.canada.ca/climate-data/)
- **R wrapper `weathercan`**: [github.com/ropensci/weathercan](https://github.com/ropensci/weathercan)

### 3.5 NRCan — Natural Resources Canada

- **PV Potential & Solar Resource Maps**: [natural-resources.canada.ca/energy-sources/renewable-energy/photovoltaic-potential-solar-resource-maps-canada](https://natural-resources.canada.ca/energy-sources/renewable-energy/photovoltaic-potential-solar-resource-maps-canada), FGDB and CSV, kWh/kW-yr at the municipal level.
- **CERP, the Clean Energy Resources & Projects atlas**: [atlas.gc.ca/cerp-rpep/en/](https://atlas.gc.ca/cerp-rpep/en/)
- **Canadian Wind Energy Atlas**: mean wind speed at 30, 50, and 80 m.
- **Remote Communities Energy Database**: [atlas.gc.ca/rced-bdece/en/index.html](https://atlas.gc.ca/rced-bdece/en/index.html)
- **Comprehensive Energy Use Database (NEUD)**: [oee.nrcan.gc.ca/corporate/statistics/neud](https://oee.nrcan.gc.ca/corporate/statistics/neud/dpa/menus/trends/comprehensive_tables/list.cfm)

### 3.6 City / municipal open data

- **Open Data Toronto**: [open.toronto.ca](https://open.toronto.ca/) (CKAN API). Renewable Energy Installations dataset, Cool Spaces, ward boundaries.
- **Ontario Open Data, Energy section**: [data.ontario.ca/organization/energy](https://data.ontario.ca/organization/energy). Includes Ontario Energy Report Supporting Data and Renewable Energy Projects (Sept 2010 to Sept 2021).
- **Toronto large-building EWRB dataset** (Energy & Water Reporting By-law, 50,000 sq ft and up): [open.canada.ca/data/en/dataset/0eab2faf-6186-4a5b-8de1-b15872943c24](https://open.canada.ca/data/en/dataset/0eab2faf-6186-4a5b-8de1-b15872943c24)

### 3.7 LDC operational data

- **Toronto Hydro outage map**: [outagemap.torontohydro.com](https://outagemap.torontohydro.com/)
- **Hydro One Storm Centre**: [stormcentre.hydroone.com](https://stormcentre.hydroone.com/)
- **Toronto Hydro Load Capacity Map** (March 2025+): [torontohydro.com/contractors-and-developers/load-capacity-map](https://www.torontohydro.com/contractors-and-developers/load-capacity-map)
- Alectra and Hydro One launched their own capacity maps. Coverage: [electricautonomy.ca/charging/utilities/2025-03-19/grid-capacity-maps-canada-ontario](https://electricautonomy.ca/charging/utilities/2025-03-19/grid-capacity-maps-canada-ontario/)

### 3.8 Federal GHG inventory + ENERGY STAR

- **Canada NIR**: [canada.ca/en/environment-climate-change/services/climate-change/greenhouse-gas-emissions/inventory.html](https://www.canada.ca/en/environment-climate-change/services/climate-change/greenhouse-gas-emissions/inventory.html). NIR 2025 covers 1990-2023.
- **Open data mirror**: [open.canada.ca/data/en/dataset/779c7bcf-4982-47eb-af1b-a33618a05e5b](https://open.canada.ca/data/en/dataset/779c7bcf-4982-47eb-af1b-a33618a05e5b)
- **ENERGY STAR Portfolio Manager** (used by Toronto/Ontario building reporting): [energystar.gov/buildings/tools-and-resources/tracking-greenhouse-gas-emissions-portfolio-manager](https://www.energystar.gov/buildings/tools-and-resources/tracking-greenhouse-gas-emissions-portfolio-manager)
- **NRCan regional median GHG intensity tables** for benchmarking.

### 3.9 Energy poverty + equity data

- **Energy Poverty and Equity Explorer** (Efficiency Canada with the Community Data Program): [energypoverty.communitydata.ca](https://energypoverty.communitydata.ca/), showing energy burden, income, heating type, and building age at the census-tract level. *(Note: the site gave a certificate-expiry warning when fetched.)*
- **Toronto Social Atlas**: [toronto.ca/city-government/data-research-maps/neighbourhoods-communities/toronto-social-atlas](https://www.toronto.ca/city-government/data-research-maps/neighbourhoods-communities/toronto-social-atlas/)
- **School of Cities, Wealth & poverty concentration in Toronto**: [schoolofcities.github.io/neighbourhood-income-toronto-2020](https://schoolofcities.github.io/neighbourhood-income-toronto-2020/)
- **Toronto Public Health Heat Vulnerability Index** + U of T School of Cities heat-vulnerability map.

### 3.10 Climate projections for Ontario

- **Climate Atlas of Canada, Toronto**: [climateatlas.ca/sites/default/files/cityreports/Toronto-EN.pdf](https://climateatlas.ca/sites/default/files/cityreports/Toronto-EN.pdf), which projects **+30°C days nearly 2 months/yr by the end of the century under RCP8.5**.
- **Ontario Climate Change Projections (York Lamps)**: [lamps.math.yorku.ca/OntarioClimate](https://lamps.math.yorku.ca/OntarioClimate/)
- **ECCC CMIP6 downscaled grids**: [climate-change.canada.ca/climate-data](https://climate-change.canada.ca/climate-data/)

---

## 4. RECENT NEWS & CURRENT DEBATES (2024-2026)

### 4.1 The 11 stories that will be talked about at kickoff

1. **Pickering refurbishment greenlit Nov 2025**: $26.8B, 37,000 jobs. [news.ontario.ca/en/release/1006772](https://news.ontario.ca/en/release/1006772/ontario-greenlights-pickering-nuclear-generating-station-refurbishment-to-create-nearly-37000-jobs)
2. **Darlington SMR construction begins May 2025**, first module set May 2026. **The first grid-scale SMR in the G7.** [opg.com/projects-services/projects/nuclear/smr/darlington-smr](https://www.opg.com/projects-services/projects/nuclear/smr/darlington-smr/)
3. **Ontario's Integrated Energy Plan "Energy for Generations"** (June 2025): the first-ever combined 25-year plan. LT2 procures 6,000 MW of capacity and 14 TWh of energy, and it names natural gas as an ongoing policy pillar. [blakes.com IEP summary](https://www.blakes.com/insights/ontario-releases-energy-for-generations-the-province-s-inaugural-integrated-energy-plan/)
4. **IESO 2025 APO: 75% demand growth to 2050** [ieso.ca news](https://www.ieso.ca/Corporate-IESO/Media/News-Releases/2024/10/Electricity-Demand-in-Ontario-to-Grow-by-75-per-cent-by-2050)
5. **Bruce C $300M predevelopment agreement** May 2026: the first new large nuclear in 30 years, up to 4,800 MW. [power-eng.com](https://www.power-eng.com/nuclear/ontario-advances-bruce-c-nuclear-project-with-300m-pre-development-agreement/)
6. **November 2025 RPP rate hike of about 29-30%** (the biggest since 2019), with OER boosted to 23.5% [solar-x.ca rates 2026](https://solar-x.ca/blog/ontario-hydro-rates-2026)
7. **iZEV paused, EVAP launches Feb 2026** ($2.3B). **Carney repealed the ZEV sales mandate** [cbc.ca Carney EV](https://www.cbc.ca/news/politics/carney-dropping-ev-mandate-introducing-new-emissions-standards-9.7075302)
8. **March 30, 2025 ice storm**: Hydro One's worst since 1998. 2,700+ poles broken. 1M+ outages.
9. **Natural gas moratorium debate**: the IESO Phase-Out Study says a phase-out is doable by 2050 but expensive, and LT1 still contracted 411 MW of new gas. [ieso.ca natural-gas-phase-out-study](https://ieso.ca/en/Learn/The-Evolving-Grid/Natural-Gas-Phase-Out-Study)
10. **2024 Ontario Building Code in effect Jan 1, 2025**: 1,730 amendments and a new Part 12 (GHG emissions). Efficiency Canada warned there is "no path to net-zero codes by 2030." [efficiencycanada.org missed opportunity](https://www.efficiencycanada.org/proposed-changes-to-ontarios-building-code-a-missed-opportunity-to-that-will-set-the-province-backwards/)
11. **December 2025 capacity auction**: DR value jumped to $171,319/MW-yr, +163% year over year. [enpowered.com](https://enpowered.com/demand-response-2026/)

### 4.2 The big debates

**Nuclear-first vs. renewables-first.** Bruce, OPG, IESO, and the Ontario Energy Association push for +17,800 MW of nuclear by 2050 (Pathways). Pembina, the Climate Institute, OCAA, Pollution Probe, and OSEA argue that renewables, storage, and Quebec imports cut carbon faster and cheaper. Pickering's $26.8B opportunity cost is the flashpoint.

**Gas plant phaseout.** More than 32 municipalities (about 60% of Ontario's population) have passed phase-out motions. The IESO says a 2030 phase-out would cause blackouts and a $100/month rate hike. LT1 still procured new gas. Critics call that lock-in.

**Will Ontario have enough power?** The IESO 2024/2025 APO forecasts 75% demand growth, which drives the push to procure more supply. Skeptics like Winfield and Scott remember the oversupply of the 2010s.

**Affordability.** The Nov 2025 rate hike put the OER subsidy in the spotlight. OER is now a subsidy of over $5B/yr paid from general revenue, which critics call regressive.

**Climate resilience.** The May 2022 derecho and March 2025 ice storm exposed how fragile the grid is. Vegetation management, hardening, and undergrounding pilots are all on the table. Climate resilience now shows up in OEB rate applications.

### 4.3 Voices to know

| Person/org | Role |
|---|---|
| **Jack Gibbons** | Chair, Ontario Clean Air Alliance. Leads the gas phase-out coalition |
| **Mark Winfield** | Prof, York Faculty of Environmental & Urban Change. Nuclear skeptic |
| **Adam Scott** | Exec Dir, Shift Action. Pension fund and climate risk |
| **Lesley Gallinger** | CEO, IESO |
| **Lynne Anderson** | Chair, OEB |
| **Six Nations of the Grand River Development Corporation** | Anchor Indigenous energy investor: Oneida, Grand Renewable, Niagara Region Wind |
| Pembina Institute, Canadian Climate Institute, Pollution Probe, OEA, OSEA, Clean Prosperity, TAF, Efficiency Canada | Active orgs |

---

## 5. CLIMATE IMPACTS & VULNERABLE POPULATIONS IN ONTARIO

### 5.1 What models project

- **Temperature**: +5°C annual mean over the Great Lakes Basin by the 2080s. Toronto specifically warms +2.3°C by 2050 under RCP 8.5.
- **Precipitation**: +22% annual by the 2080s, shifting toward heavier single events.
- **+30°C days**: 64/yr historically, rising to nearly 2 months/yr by 2100 under RCP 8.5 (Climate Atlas).
- **Heat waves are expected to triple by 2060** under high emissions.
- **Lake-effect snow** rises in the short term (warmer lakes mean more evaporation and a longer ice-free season) before it drops.
- **Urban heat island**: **Toronto has the highest nighttime UHI of any major Canadian city, +4.36°C.** Each 2-3°C of UHI means about 4-7% more heat deaths.

### 5.2 Recent extreme events

- **May 21, 2022 derecho**: 190 km/h winds that traveled more than 1,000 km in 9 hours. **1.1M+ customers out, 12 deaths, about $1B damage.** One of Canada's costliest disasters.
- **April 5, 2023 ice storm**: 1M+ out in QC and ON.
- **March 28-30, 2025 ice storm**: Hydro One's worst weather event since 1998. **2,700+ poles broken**, and 1M+ Ontario homes and businesses out. Peterborough, Georgian Bay, Orillia, and Fenelon Falls were hit hardest.
- **July 16, 2024 Toronto flood**: 97.8 mm in 3 hours at Pearson, with $940M+ in insured damage. The Clausius-Clapeyron relation says warmer air holds about 7% more moisture per 1°C of warming.

### 5.3 Vulnerability mapping

Toronto Public Health's **Heat Vulnerability Index** combines:
- Age (under 5, over 65)
- Income
- Building type (high-rise without AC)
- Tree canopy (**neighborhoods with under 5% canopy get 5x more heat-related ambulance calls**)
- Language barrier
- Chronic illness

Mapped also by U of T School of Cities: [schoolofcities.github.io/heat-vulnerability-toronto](https://schoolofcities.github.io/heat-vulnerability-toronto/)

### 5.4 Energy poverty in Ontario

- **822,000 Canadian households (5.6%)** are energy poor (2021 Census, 6% threshold).
- The range is **6% to 19% of Canadian households**, depending on the threshold used (LIHC vs 2x median vs 6%).
- The Atlantic provinces are highest (10.7-13.7%). Ontario sits at about 7% baseline, and probably higher after the 2025 rate hikes.
- **The bottom income quintile spends about 6-8% of income on energy**, versus under 3% for the top quintile.
- **TEA notes that high energy costs are the second-biggest reason for economic eviction in Ontario, after unaffordable rent.**

Programs:
- **LEAP**: up to $650 one-time for electric (plus $130 if electric heat) and $650 for gas
- **Energy Affordability Program (EAP)**: free retrofits for income-eligible households
- **OESP**: a monthly on-bill credit set by household size and income
- **OER**: a 23.5% bill rebate (raised Nov 2025)

### 5.5 Indigenous + racialized equity

- **62% of poor people in Toronto are racialized.** 20.8% of racialized Canadians are low-income, versus 12.2% of non-racialized Canadians.
- **17.4% of recent immigrants** were in poverty (2019).
- Renters can't control their heating, windows, or appliances, which creates the split-incentive trap.

---

## 6. INTERNATIONAL POCS & REFERENCE ARCHITECTURES

> A full catalog of what's been built elsewhere. Each one is a "we did X, but for Ontario" angle.

### 6.1 United Kingdom (the deepest stack)

- **Octopus Energy Agile tariff, Kraken platform, and public REST API**: [octopus.energy/smart/agile](https://octopus.energy/smart/agile/) · [developer.octopus.energy/rest/reference](https://developer.octopus.energy/rest/reference/) · half-hourly variable tariffs that sometimes go negative.
- **NESO Carbon Intensity API**: [api.carbonintensity.org.uk](https://api.carbonintensity.org.uk/) · [dashboard.neso.energy](https://dashboard.neso.energy/). Free and public, with 30-min carbon-intensity forecasts 2 days ahead by GB region. A partnership of EDF, Oxford, WWF, and the Met Office.
- **Open Climate Fix**: [openclimatefix.org](https://www.openclimatefix.org/) · [github.com/openclimatefix](https://github.com/openclimatefix). Open-source AI solar and wind forecasting. Its transformer model now runs in production at NESO, where it **halved errors and saved about £30M/yr** in imbalance costs.
- **UK live grid dashboards**: [energydashboard.co.uk/live](https://www.energydashboard.co.uk/live) · [ukgridlive.co.uk](https://www.ukgridlive.co.uk/) · [grid-status.com](https://grid-status.com/about)

### 6.2 Germany

- **Sonnen sonnenVPP**: Europe's largest VPP, about 25,000 household batteries that add up to a 250 MWh VPP, growing toward 1 GWh. It is certified for primary control reserve. [sonnengroup.com/press/europes-largest-vpp](https://sonnengroup.com/press/europes-largest-vpp/)
- **Tibber** (DE/NO/SE/NL): a mobile-first dynamic-tariff retailer, with about a 20% cut in consumption. As of 2025, German law requires all suppliers to offer dynamic tariffs. [tibber.com](https://tibber.com/en)
- **Bürgerwerke / Bürgerenergie**: 50,000+ citizen shareholders, 113 local energy communities, 1,400+ small power plants, and 914 cooperatives founded since 2006. [cleanenergywire.org Energiewende factsheet](https://www.cleanenergywire.org/factsheets/citizens-participation-energiewende)
- **Energy-Charts (Fraunhofer ISE)**: [energy-charts.info](https://www.energy-charts.info/), open interactive maps of every German power plant.
- **repowermap.org**: a citizen-built map of every solar, wind, and heat-pump installation.

### 6.3 Denmark / Nordics

- **Energinet Energi Data Service**: [energidataservice.dk](https://www.energidataservice.dk/). The TSO publishes hourly residential consumption (anonymized to municipality and heating category), plus production, prices, and balancing, all through a free open API on CKAN. **The best example of TSO transparency anywhere.**
- **Denmark Energy Islands**: an artificial island in the North Sea for 3-10 GW of offshore wind. [ens.dk](https://ens.dk/en/energy-sources/offshore-wind-power/denmarks-energy-islands)
- **Enova (Norway)**: a state climate-tech funder that bundles every climate incentive in one portal. [enova.no](https://www.enova.no/)
- **Greenely (Sweden)**: a free smart-meter app, 115k+ homes. [greenely.com](https://greenely.com/en/free-app/)

### 6.4 California / USA

- **OhmConnect, now Renew Home** (with Google Nest): gamified residential DR, 115k+ California users, and a **target of a 50 GW residential VPP by 2030.** [ohmconnect.com](https://www.ohmconnect.com/) · [utilitydive Nest+OhmConnect](https://www.utilitydive.com/news/google-nest-renew-ohmconnect-combine-vpp/715616/)
- **CAISO Today's Outlook**: [caiso.com/todays-outlook](https://www.caiso.com/todays-outlook), live 5-min load, supply, price, and emissions. This is where the "duck curve" came from.
- **GridStatus.io**: [gridstatus.io](https://www.gridstatus.io/), an indie dashboard that pulls all 7 US ISOs plus IESO into one clean API and UI. Built solo by Max Beer.
- **WattTime**: [watttime.org](https://watttime.org/), a free-tier API for **marginal** CO2 per kWh at 5-min granularity, used by more than 1B IoT devices.
- **NREL ResStock/ComStock**: [energy.gov/eere/buildings/resstock](https://www.energy.gov/eere/buildings/resstock), 900k building energy models at 15-min granularity, open-source. **Canada has no equivalent.**
- **PowerFlex**: behind-the-meter commercial VPP software.
- **Atmos Financial**: a climate fintech bank where deposits fund solar, EV, and heat-pump loans.
- **Electrify America heatmaps**.

### 6.5 Australia

- **OpenNEM / Open Electricity**: [openelectricity.org.au](https://openelectricity.org.au/) · [github.com/opennem](https://github.com/opennem). **An MIT-licensed open-source dashboard.** **The single most copy-pasteable hackathon project: fork it and swap in IESO data.**
- **Tesla SA VPP**: 50k Powerwalls networked with 5kW rooftop solar. AGL bought it and now runs Australia's largest VPP.
- **AEMO Data Portal**: a rooftop solar tracker (42.5 GW projected by 2036) and VPP demonstrations.

### 6.6 NYC / US cities

- **NYC Local Law 97**: mandatory GHG caps on every building over 25,000 sqft. [nyc.gov LL97 page](https://www.nyc.gov/site/buildings/codes/ll97-greenhouse-gas-emissions-reductions.page) · [LL97/LL33 map](https://www.nyc.gov/assets/sustainablebuildings/html/LL97-n-LL33-map.html)
- **NYC Energy Map (CUSP/NYU)**: 20k+ buildings, with EUI, water, and ENERGY STAR score by address. [energy.cusp.nyu.edu](https://energy.cusp.nyu.edu/)
- **NYC Accelerator Building Energy Snapshot**: enter an address and see compliance, penalties, and savings. [accelerator.nyc/building-energy-snapshot](https://accelerator.nyc/building-energy-snapshot)
- **Sealed**: pay-for-performance retrofits. [sealed.com](https://sealed.com/)

### 6.7 Africa / Global South

- **M-KOPA Solar** (Kenya, Uganda, and more): pay-as-you-go solar home systems paid through M-Pesa, with more than 2M homes electrified. [m-kopa.com](https://m-kopa.com/)
- **SteamaCo** (Kenya): cloud-based remote metering plus mobile money for village mini-grids. **Northern Ontario has 25+ diesel-dependent communities that could use this model.**
- **Husk Power Systems**: 200+ solar hybrid mini-grids.

### 6.8 Equity/climate-justice tooling

- **EPA EJScreen**: a federal environmental-justice mapping tool. **It was delisted in 2025, so a Canadian copy could be valuable.** [envirodatagov.org EJScreen removal](https://envirodatagov.org/epa-removes-ejscreen-from-its-website/)
- **CalEnviroScreen**: California's 20+ environmental and demographic indicators per census tract, which decide how cap-and-trade revenue is spent under SB 535. **The model for "OntarioEnviroScreen."** [oehha.ca.gov/calenviroscreen](https://oehha.ca.gov/calenviroscreen)
- **ACEEE State + City Clean Energy Scorecard**: annual rankings on energy-efficiency policy and equity. [aceee.org/state-policy/scorecard](https://www.aceee.org/state-policy/scorecard)
- **Boston Climate Ready**: heat-vulnerability mapping at the city level.

### 6.9 Carbon accounting APIs

- **Climatiq**: a Stripe-for-carbon, a global emissions-factor API. [climatiq.io](https://www.climatiq.io/)
- **Watershed**, **Persefoni**, **Sweep**, **Plan A**: enterprise carbon accounting.
- **Electricity Maps**: [electricitymaps.com](https://www.electricitymaps.com/) · [github.com/electricitymaps/electricitymaps-contrib](https://github.com/electricitymaps/electricitymaps-contrib). Live carbon intensity in 190+ countries, which Google uses to time-shift its compute. Ontario is included, but only at the province level.

### 6.10 Carbon transparency / monitoring

- **Climate TRACE**: a satellite-and-AI emissions database for more than 70k facilities worldwide. It found oil and gas emissions are 2x what companies self-report. [climatetrace.org](https://climatetrace.org/)
- **Tomorrow.io**: weather and climate risk.
- **Resource Watch (WRI)**: 200+ datasets.
- **Berkeley Earth**: open temperature and climate data back to 1750.

---

## 7. WHAT ONTARIO HAS vs. DOESN'T HAVE — GAP INVENTORY

### 7.1 Concrete strengths (use these to anchor pitches)

1. **75-90% low-carbon electricity**, among the cleanest in North America (versus about 10% in Alberta and about 20% in Saskatchewan).
2. **Smart meters everywhere since 2010**, the first jurisdiction in North America to do this.
3. **TOU pricing everywhere** (2011+) plus **ULO** for EV charging (2023+).
4. **IESO publishes real-time data** at 5-min granularity. A strong open-data culture.
5. **SaveONenergy**: $10.9B over 12 years (announced 2025), the largest energy-efficiency investment in Canadian history.
6. **CANDU nuclear fleet**: a domestic technology (AECL) with online refueling. Bruce is the 2nd-largest operating nuclear station in the world.
7. **Niagara hydro**: 2,400+ MW since 1922.
8. **Indigenous co-ownership programs**: ALGP, 450+ projects with an Indigenous partner, the Oneida BESS (Canada's largest), and Wataynikaneyap.
9. **Toronto Net-Zero by 2040**: the earliest large-city target in North America.
10. **Energy Affordability Program**: fully funded retrofits for income-eligible households, which is rare nationally.
11. **Toronto Hydro, Alectra, and Hydro One Load Capacity Maps**: launched March 2025.
12. **TGS Tier 1** is mandatory in Toronto, and Tier 4 equals Passive House by 2030.

### 7.2 Gaps — what Ontario lacks vs. peers

| Peer | What they have | Ontario doesn't |
|---|---|---|
| **UK** | NESO Carbon Intensity API (regional 30-min, 48h forecast); Octopus Agile retail tariff with public dev API; Open Climate Fix AI nowcasting | No CI API at this granularity; no consumer-facing forecasted-CI API; no Open Climate Fix equivalent |
| **California** | OhmConnect GW-scale residential DR gamification; Rule 21 fast-track DER interconnection | Peak Perks has no gamification layer; no Rule 21 equivalent |
| **Australia** | ~25 GW rooftop solar penetration; dynamic export tariffs | ~2 GW rooftop; no Tibber/Sonnen-class consumer experience |
| **Germany** | Bürgerenergie citizen cooperatives at scale; repowermap (every address-level installation mapped) | Co-ops exist (TREC, Ottawa Renewable, SolarShare) but no unified platform/map; no address-level installation map |
| **NYC** | Local Law 97 mandatory existing-building emissions caps with fines; LL84 mandatory disclosure | Toronto BEPS stuck in consultation (motion bounced Dec 2025 → return 2027); no mandatory existing-building disclosure with consequences |
| **Denmark** | 60%+ of homes on district heating; Energinet anonymized residential consumption open API | Almost no district heating outside Enwave + universities; no anonymized residential consumption open API |
| **EU** | EPC at sale/lease + MEES; Right-to-Repair | None of the above |
| **Norway** | Statutory right-to-charge in condos | No equivalent |

### 7.3 Hackathon-specific tool gaps (where journalists/advocates say "I wish there were a tool that...")

1. **Real-time hyperlocal carbon intensity for Ontario.** The UK has one. Electricity Maps does province-level only. Ontario has real intra-day swings (variable wind plus imports of QC hydro and NY gas).
2. **Heat vulnerability plus cooling-centre routing map.** The Wellesley Institute's *Left in the Heat* (2024) said directly that the Heat Relief Network is patchy and hard to reach.
3. **Real-time outage equity map.** Toronto Hydro and Hydro One publish outage maps, but they don't overlay socioeconomic vulnerability or who depends on medical devices.
4. **EV-readiness by neighborhood.** Toronto-St. Paul's has 8.8% EV registration; Scarborough East and North have under 1%. There is no combined ward-level map.
5. **School and public-building emissions report cards.** O.Reg 25/23 requires school boards to publish annual energy data. **The data exists, but it is scattered across PDFs.** Nobody has pulled it together for parents and voters.
6. **Building emissions disclosure for existing homes.** Ontario killed the mandatory Home Energy Rating at sale in the 2010s. The UK's EPC and BC's Energy Step Code show how this works.
7. **Indigenous-led project visibility dashboard.** Indigenous Clean Energy publishes a directory, but it is static. There is no live map of the 450+ Ontario projects.
8. **Heat-asthma-emissions integrated dashboard.** Smog formation rises 5% per °C. AQHI is real-time. Hospital admissions data is public (with a lag). Pairing peaker-plant runtime with an asthma forecast is unexplored.
9. **TOU coach and ULO eligibility checker.** After 15 years of TOU, residents still don't use it fully.
10. **Carbon intensity of imports.** Ontario imports a lot of power from QC (clean) and MI/NY (often gas). A live import-adjusted Ontario carbon intensity is new.

---

## 8. CROSS-DISCIPLINARY POVS

### 8.1 Power systems engineering

Ontario's biggest problem is not generation. It is **transmission and the ability to ramp fast** during the refurbishment trough. The Bruce zone is already export-constrained, so the Hanmer-Mississagi 500 kV line (planned 2027-2029) is critical. CANDU baseload gives Ontario unusual synchronous inertia (unlike the UK and California), but SMRs replacing CANDU and gas-peaker retirements will change that.

Ontario has **no province-wide DERMS** and **no Rule 21 equivalent**. The IESO's Enabling Resources program is the closest thing, but it lacks behind-the-meter telemetry.

### 8.2 Climate science

Toronto warms about 2.3°C by 2050 (RCP 8.5). +30°C days reach nearly 2 months/yr by 2100. Heatwaves triple by 2060. Lake-effect snow shifts. **Toronto's UHI is the highest in Canada at +4.36°C at night.** Each 2-3°C of UHI means 4-7% more heat deaths.

The derecho corridor is shifting north. The ice-storm corridor (Toronto-Kingston-Ottawa) covers less ground but hits harder. The July 2024 flood ($940M) is the classic Clausius-Clapeyron case.

Vulnerable populations: under 5, over 65, low-income high-rise residents without AC, areas with low tree canopy (under 5% means 5x the ambulance calls), language barrier, and chronic illness.

### 8.3 Urban planning / policy

- **TransformTO** (Toronto): net-zero by 2040, one of North America's most aggressive city targets.
- **Toronto BEPS** for existing buildings: still stuck in consultation as of May 2026.
- **Ontario provincial climate plan**: the Ford government repealed cap-and-trade in 2018, and the "Made-in-Ontario Environment Plan" has little force.
- **Federal Net-Zero Act** (2021): the Auditor General said in Nov 2025 that Canada is "off track." The fuel charge was eliminated in April 2025, so the backstop is now only OBPS.
- **NYC Climate Justice Working Group** (2019 CLCPA): requires 35-40% of climate spending to go to "disadvantaged communities," using 45 indicators. **Toronto and Ontario have no equivalent in law.**

### 8.4 Behavioral econ / nudge theory

- **OPower home energy reports**: ~2% avg reduction (range 1.4-3.3% across 17 RCTs, n=600k). Top decile cuts 6.3%; bottom decile 0.3%.
- **Ontario TOU**: ~3% peak demand reduction. Own-price elasticity -0.10 on-peak, +0.25 mid-peak cross-substitution. **Regressive for low-income electric-heat homes** (less discretionary load to shift).
- **In-home displays**: 5-15% savings in trials; decays after 6 months. Most savings from awareness not action.
- **OhmConnect**: 75 MW peak reduction in CA pilots; UCLA Luskin validated grid-stress reduction.
- **Recipe that works**: Default enrollment + opt-out; combine $ + automation + identity; specific salient feedback at consumption moment; social comparison to *similar* homes (not just average).

### 8.5 Data science / ML state of the art

- **Load forecasting**: shifted from LSTM/GRU to **Transformers and hybrids**: iTransformer, PatchTST, Temporal Fusion Transformer (TFT); **xLSTM** (Beck 2024); foundation models (TimesFM, Chronos, Moirai).
- **NILM benchmarks**: REDD (MIT), UK-DALE (Imperial), REFIT, **AMPds (UBC, Canadian)**, WHITED, BLUED. BERT4NILM + attention beats older CNN-seq2seq.
- **Solar/wind forecasting**: Open Climate Fix's Quartz Solar (transformer + satellite imagery) **halved NESO errors, saved ~£30M/yr**.
- **Anomaly detection**: GNNs on distribution topology + weather. PNNL's GridAPPS-D.
- **CV for solar siting**: **DeepSolar (Stanford)** ran Inception V3 on satellite imagery and identified 1.47M US installations. **Project Sunroof** has limited Canadian coverage. **DeepRoof (UMass)** hit 91.1% TPR using cheap satellite tiles.

### 8.6 Design / data-viz

- **Tufte**: maximize data-ink ratio, small multiples, sparklines, annotate directly on graphs.
- **Munzner (UBC)**: task-data-encoding triple. Position > length > angle > color hue > area.
- **Cairo**: truthful, functional, beautiful, insightful, enlightening.
- **D'Ignazio & Klein Data Feminism**: examine/challenge power; elevate emotion + embodiment; rethink binaries; embrace pluralism; consider context; make labor visible. For equity dashboards: show error bars + uncertainty, surface who collected the data, disaggregate by race/income/geography.
- **Color systems**: avoid red-green (8% of men colorblind). Sequential: **viridis or cividis** (perceptually uniform, colorblind-safe). Categorical: **Okabe-Ito** (Nature Methods).
- **Map projections for Canada**: **avoid Mercator** (Greenland looks bigger than Africa). Use **Lambert Conformal Conic** (StatCan standard, parallels at 49°N + 77°N) or **Albers Equal-Area** for choropleth.
- **"Judge grabs it in 3s"**: single big number with one verb; one color shift; familiar outline (Toronto wards or Ontario boundary) with one variable mapped.

### 8.7 Social justice / energy equity

- **Sovacool-Dworkin three-tenet framework**: distributional, procedural, recognition. Add restorative (Heffron-McCauley) + epistemic (Walker-Day).
- **Indigenous energy sovereignty**: Six Nations / Oneida BESS yields ~$1M/yr over 20 yrs to Six Nations. ALGP. Indigenous-led Clean Energy Project Tax Credit (Budget 2024).
- **Why decarbonization-without-equity fails**: upfront-cost heat pumps/EVs/solar exclude bottom quintile; split-incentive trap for renters; green gentrification; carbon-price regressivity for low-income with no time-shift capacity.

### 8.8 Other-field contributions

- **Biologist**: Ontario peatlands store **1.3B tonnes carbon** (~40 yrs of Canada's car emissions). **Hudson Bay Lowlands = world's 2nd-largest peat carbon store.** Wetlands sequester 11× rate of grasslands, 125× rate of forests. Boreal forest shifting from sink to potential source.
- **Architect**: Toronto Green Standard v4. Tier 4 = Passive House by 2030. **EnerPHit** retrofit standard. **Tower Renewal** (1960s-80s high-rises) is Toronto's single biggest emissions reduction target.
- **Public health**: Each 1°C = 5% more smog. **Asthma is #1 pediatric hospital admission in Canada.** Portlands Energy Centre + Greenfield gas peakers are adjacent to dense low-income neighborhoods.
- **Economist**: Federal OBPS at $80/t CO2e in 2025 → $170/t by 2030. Fuel charge eliminated April 2025; price signal muted at consumer level.
- **Software engineer (default lens)**: APIs/dashboards, geospatial (PostGIS/deck.gl/MapLibre), ML pipelines, mobile + push for time-shifting nudges. **The wedge for solo software builder is pairing dashboard with equity/health/behavioral lens that other devs won't think of.**

---

## 9. PAST HACKATHON WINNERS — PATTERNS & SPECIFIC PROJECTS

### 9.1 Most directly relevant baseline — Seneca 2023

- **Theme**: Smart Cities (not Energy; different).
- **Winner**: **Mood Vault** (Foam on Latte: Samina Rahman Purba, Batuhan Ipci, Hien Nguyen). 3 full-stack devs. **$5,000 CAD grand prize.**
- **Project**: Patient-therapist platform: daily mood journaling → NLP summaries for therapist; **suicidal-ideation detection alerts therapist**; 75-language translation; voice transcription.
- **Why it won**: NOT novel tech (CRUD + NLP API). Won by picking a heavy topic (suicide-ideation), wrapping in polished UX, citing concrete safety/access mechanisms.
- **Format**: Registration → virtual qualifier round (solution-proposal, 1-2 days) → virtual finale day 1 → hybrid finale day 2. **Propose-then-build, not continuous 36-hr.**
- **Implication**: **Seneca judges reward socially-serious framing + polished delivery + concrete safety/access design over technical novelty.** Don't underestimate the equity/justice angle.

### 9.2 DOE EnergyTech University Prize — gold standard

- **2024 1st ($50k)**: **Rise Reforming** (U Chicago).
- **2024 3rd ($10k)**: **Ion Clean PV** (Hawaii Pacific): waterless electrostatic PV-panel cleaning.
- **2025 1st ($50k)**: **Seal the Deal** (Georgia Southern): novel seal for supercritical CO2 turbomachinery.
- **2025 bonus**: **GasS Station** (Duke): geothermal hubs for data centers. *Topical "AI/data-center power" angle judges loved.*

EnergyTech UP winners are commercialization pitches, not 36-hr code-jams. **Don't model your demo on these. They signal the list of credible problems**: grid interconnection, EV battery health, subsurface optimization, agrivoltaics, heat recovery, microreactor seals, data-center power.

### 9.3 American-Made Challenges — bigger prizes

- **Solar Prize Round 7 (2024)**: **Fram Energy (Newburgh NY)**, a split-incentive solar platform for landlords-and-renters. $500k cash + $75k lab vouchers. **Pure business-model innovation, no fancy tech.**
- **Gritt Robotics (Belmont CA)**: robotics + AI for utility-scale solar construction.

**Lesson**: novel deployment of known tech wins big.

### 9.4 Cloudera × AMD Climate Hackathon (2024, 2300+ data scientists)

- **1st: AviWind Guardian** by **Tim Trueblood (Ohio, SOLO)**. ML decision-support balancing wind turbine siting vs. migratory bird collision risk.
- **THE canonical "I-found-an-overlooked-tension" winner.** **Solo dev won a global ML hackathon with the right framing.**

### 9.5 MIT Energy & Climate Hackathon 2024

- **1st**: **Incenzo** (4 people) uses the **Palmetto digital-twin API** to tailor emissions-reduction policy data for *underserved communities*. **API wrapper + equity angle.** Classic "remix + reframe" win.

### 9.6 Hack for Earth at COP28 (1,200 teams from 112 countries)

- **Energy Challenge winner**: **Renewable Energy Placement Optimizer**, an AI/ML tool for optimal solar/wind siting. **Most direct analog for a Synergy-v2.0-style winner.**

### 9.7 GridShift (Silicon Valley Clean Energy, 2020) — the smart-grid hackathon canon

- **1st ($10k): Grove**: smart automated scheduling of flexible loads.
- **2nd ($4k): Green Routes**: EV charging finder optimizing **carbon, cost, OR convenience**.
- **People's Choice ($2k): WattsDown**: color-changing smart bulb at home; alerts to high prices or planned outages. **Most "demoable" of the three.** Judges remember the lightbulb.
- Board chair quote: *"resiliency, equity and access"* (judge buzzwords for grid hackathons).

### 9.8 UC Berkeley AI Hackathon 2024 (1,200+ devs)

- **Climate Tech 2nd: Batteries by LLM** — fine-tuned Llama-2-7B on Intel Tiber to convert natural-language electrolyte descriptions → first-principles modeling input files. **LLM-as-research-accelerator pattern.**

### 9.9 MLH Avanade Best Sustainability Top 10

24-48 hour student hacks. **7 of 10 winners were 2-4 people.**

1. Ecobot — YOLOv4 ocean plastic detection (4 ppl)
2. Sowing is Growing — seed-sharing (2 ppl)
3. CarbonAtlDel — restaurant emissions vs ingredient prices (2 ppl)
4. Crops+ — kNN crop recommendation from soil (3 ppl)
5. Plantagotchi — Raspberry Pi automated plant watering (3 ppl) **Hardware = demo magic.**
6. GasUp — carpool cost splitting (4 ppl)
7. Your Biggest Fan — windmill placement optimizer (2 ppl)
8. Spot The Spot — parking detection (5 ppl)
9. pRice — used-goods marketplace (3 ppl)
10. Carbon Media / C4 — PPE waste calculator (4 ppl)

### 9.10 PennApps + Stanford TreeHacks

- **PennApps XXVI Bloomberg Sustainability 1st: CarbonChain** — fragmented opaque carbon-credit markets. *"Billions pledged, money doesn't reach projects"* framing.
- **TreeHacks 2025 Best Use of FlutterFlow: EcoBite** — photo → wasted-weight food estimator.
- **TreeHacks 2023 Sustainability + Meta Best Innovation: SohamGovande overfishing dashboard** — **novel: few-shot synthetic image augmentation using fine-tuned Stable Diffusion.** [github.com/SohamGovande/treehacks-2023](https://github.com/SohamGovande/treehacks-2023) — prototype of "novel ML method applied to climate domain" winning.

### 9.11 Other notable

- **Taiwan Generative AI Hackathon 2024**: **"Playing a Part in AI"** — AI Agent runs energy-conservation meetings using **Claude 3 Sonnet via Amazon Bedrock + AWS Lambda + DynamoDB.** **Most explicit Claude-powered energy assistant winner.**
- **CU Boulder Sustainability 2024**: Good Watt (energy monitor, 7 ppl hardware), SAGA (sustainable shopping, 2 ppl), Peak Energy (gamified home energy, 3 ppl).
- **Hack the North 2024**: general-purpose, no specific energy winner surfaced.

### 9.12 Distilled patterns (across 30+ winners)

**Solution archetypes that win** (ranked by frequency):
1. **Optimizer / placement tool** (where to put solar/wind/EV chargers)
2. **Dashboard + tracker with consumer-facing UX**
3. **AI agent / chatbot for energy-specific workflow** (Claude + real workflow = Taiwan winner)
4. **API-wrapper with equity angle** (Incenzo MIT 1st)
5. **ML novelty applied to climate domain** (TreeHacks Stable Diffusion, Batteries-by-LLM, Cloudcasting)
6. **Tension/balance projects** (good A vs good B — AviWind)
7. **Hardware-as-demo-moment** (Plantagotchi, WattsDown, Mallard)

**Team sizes that won**:
- Solo: AviWind Guardian (1st of 2,300)
- **Modal: 3-4 people.** 5+ needs hardware justification.

**Common winning stacks**:
- Frontend: Next.js / React (Vite) / Tailwind, FlutterFlow, plain HTML/CSS
- AI: OpenAI / Anthropic Claude / fine-tuned LLaMA / YOLO / kNN / Stable Diffusion
- Infra: AWS Bedrock+Lambda+DynamoDB, Vercel
- Hardware: Raspberry Pi, color-changing bulbs, sensors

**Demo moment structures**:
1. Show magic in first 30s. Wow first, explain after.
2. One screen, one ah-ha. WattsDown's bulb physically changes color on stage. Plantagotchi's plant gets watered live.
3. Map + dashboard pattern is reliable.
4. Live AI inference (not pre-recorded).
5. End on a "Monday" line: *"Here's who would use this Monday morning."*

**Impact claims judges believe vs. don't**:
- ✅ Believed: "in use by NESO, India, world's largest solar park" (concrete + verifiable); "we onboarded 3 users from our class last night."
- ❌ Not believed: "will reduce global emissions by X gigatons by 2050"; "could be scaled to every city" (if you haven't shown 1 city working); "disrupts the energy sector."

**Judge buzzwords for energy hackathons (Toronto 2026 specifically)**:
- Resilience, equity, access
- Underserved communities (Incenzo's framing earned 1st at MIT)
- Grid interconnection, data-center power, EV battery health (2025 DOE hot topics)
- Carbon transparency / verification
- Adaptation / nowcasting / forecasting

---

## 10. HOW TO WIN — THE PLAYBOOK

### 10.1 The one insight that reframes everything

> *"Judges see your project for 3-5 minutes. A mediocre project with an amazing pitch beats an amazing project with a mediocre pitch."* — Ainna

Judges decide in minutes, not hours. They won't read your code. They won't run your repo. They'll watch 30-60 projects in one afternoon. **You are not building a product. You are building 90 seconds of demo + 90 seconds of story.**

### 10.2 MLH 4-axis judging criteria (what Seneca likely uses)

1. **Technology** — Did the tech make you go "wow"?
2. **Design** — Did the team put thought into UX?
3. **Completion** — Does it work? Did they achieve what they wanted?
4. **Concept** — Originality and creativity.

Seneca default rubric (per `event.yaml`): **technical 25 / design 25 / originality 25 / impact 25.** Confirm at kickoff.

### 10.3 What 5 seasoned judges actually look for

| Judge | What wins | What loses |
|---|---|---|
| Richard Moot (Square) | Balanced across all 4 criteria; complementary video+code+description | Over-indexing on one criterion; abandoned UI |
| Karen Bajza-Terlouw (Databricks) | Strong voiceovers, code walkthroughs, transparency | Slick homepages masking shallow GitHub |
| Kelvin Boateng (Google) | Visual appeal, sound design, departures from templates | Template clones with minimal customization |
| Maria Yarotska (NEAR) | Startup mindset, problem-first, fresh approach | Recycled projects from multiple hackathons |
| Warren Marusiak (Atlassian) | *"Is the finished product something I'd want to use?"* | Minimal-effort, requirement-ignoring submissions |

**All five want**: real problem you understand, executed with care across the whole stack (UI + tech + story), evidence of effort. They penalize "shoehorned" projects that exist to win the prize.

### 10.4 The 3-minute pitch frame

| Section | Time | Content |
|---|---|---|
| **Hook** | 0:00-0:15 | Personal story, stat, provocative question. **NEVER tech jargon.** |
| **Problem** | 0:15-0:35 | Who hurts, how much, why now? Backed by ≥1 data point. |
| **Solution (1 sentence)** | 0:35-0:50 | Plain English. No stack names. "It does X for Y so they can Z." |
| **Demo (the moment)** | 0:50-2:20 | Show, don't tell. One pre-loaded happy path. The 10-second wow. |
| **Tech & Impact** | 2:20-2:45 | Brief stack mention. Why it's hard. Market or audience size. |
| **Close & Vision** | 2:45-3:00 | Bigger picture. A line they remember. |

For **60s**: Hook 5s → Problem 10s → Demo 35s → Vision close 10s.

### 10.5 Engineering the demo moment

1. **Interactive or visually surprising.** "Watch the map light up as 10,000 solar panels report" beats "Let me click this button."
2. **Pre-load everything.** All accounts, all data, all state.
3. **Practice the same mouse path 5+ times.** Variability is your enemy.
4. **Disable all notifications.** Murphy's Law applies.
5. **Have a backup video ready.** If live crashes, switch without missing a beat. Never apologize.

### 10.6 The wedge

Wedge = narrow now, big in pitch. Examples:
- **Bad**: "An app that helps everyone use renewable energy" (vague, infinite scope).
- **Good**: "A 30-second tool that tells Toronto condo residents how much they'd save by switching to off-peak EV charging — using live IESO grid data." (Specific user, one number, one data source, one screen, ships in 96h, feels like a wedge into a $B market.)

History: **GroupMe** built a working group SMS prototype in 18 hours, lost the hackathon, sold to Skype for $80M 14 months later. **A narrow real usable product beats a flashy idea.**

### 10.7 Judge psychology + cognitive biases

| Bias | Effect | Counter-tactic |
|---|---|---|
| Primacy | First 15s dominates memory | Open with strongest line. Never start with "Hi, I'm..." |
| Recency | Last 15s dominates memory | Pre-write your closing line. Land it crisply. |
| Halo | Polish on landing page → assumed quality throughout | Spend 2-3h on visual polish even if backend is mocked. |
| Fluency | Clear pitches feel "right" | Plain English. No stack names in first minute. |
| Anchoring | First number sticks | "Toronto wastes 12 GWh annually on..." |

### 10.8 Solo-builder strategies

**Structural disadvantages**:
- Can't build as much as a team of 4 — cut scope to 30%.
- You're pitcher + dev + designer — practice pitch out loud while you build.
- No one catches bugs at 3am — commit, push, test deployed URL after every feature.

**Structural advantages**:
- No team chemistry risk.
- Single-narrative pitch — story consistent.
- AI tools close the gap. *"AI has made building easier, so winning now depends on problem selection and pitch quality."*

**Solo tactics**:
- Lean entirely on familiar stack (Next.js + Vercel + Supabase + Tailwind — or whatever you know).
- Mock aggressively. Hard-code data, mock integrations.
- Practice pitch in the shower from Day 2.
- Day 4 is for pitch and video, not features. Lock the codebase 24h before submission.
- **Talk to mentors.** Solo builders skip them out of pride/shyness — don't.

### 10.9 Scope discipline tools

1. **Write the demo script BEFORE any code.** Single most-cited tactic.
2. **Feature freeze at 75% of allotted time.** No new features after.
3. **1-in-1-out rule** (already in your project CLAUDE.md).
4. **30-min stuck rule** (already in your project CLAUDE.md).
5. **Demo-over-feature trade**: at hour 60+, polishing always > adding.

### 10.10 AI-assisted hackathon dynamics (2025-2026)

- **84%+ of developers use AI tools.** At hackathons, ~100%.
- **MLH official policy**: disclose Cursor/Claude Code/Copilot in your README. Concealment damages credibility.
- **What judges reward over AI-generated code**: problem selection, demo polish + storytelling, domain credibility (energy in your case), Q&A defense of your code.
- **Tool stack for solo + AI**:
  - Cursor or Claude Code for primary dev (pick one, don't switch mid-event)
  - v0.dev / Bolt.new / Lovable for first-pass UI scaffolding
  - Claude / ChatGPT for pitch drafts, README, demo script
  - ElevenLabs for demo voiceover
  - Canva for architecture diagram
- **Empirical caution**: a 2025 study found developers using AI *believed* they were 20% faster than baseline but the actual gap between perception and measured productivity was ~40 percentage points. **Don't over-promise.**

### 10.11 96-hour pacing for a solo builder (compressed to your May 24-28 window)

**Day -3 to 0 (pre-event)**:
- Read the rules COMPLETELY.
- Set up dev environment.
- Practice with AI tools on throwaway project.
- Pre-fork starter templates.
- Note sponsor APIs / energy datasets in advance.
- Sleep 8h/night.

**Day 1 (May 24, kickoff): Ideate + Scaffold (~10h work)**
- 0-4h: Generate 8-10 ideas, score on story/demo/technical/feasibility.
- 4-5h: PICK ONE. Write 3-min demo script BEFORE coding.
- 5-6h: Define wedge: 1 user, 1 problem, 1 screen, 1 metric.
- 6-7h: Scaffold + deploy. **Live URL by hour 7-8 is sacred.**
- 7-8h: Seed 20+ realistic mock rows.
- 8-9h: First README draft + pitch hook.
- 9-10h: Test in incognito; commit; push.
- SLEEP 7h.

**Day 2 (May 25): Build the spine (~12h)**
- Wire happy-path UI; mock data layer.
- Implement core feature 1 (demo moment).
- Wire to backend (even if hardcoded).
- Implement supporting feature 2.
- Test full path 3× in incognito.
- Update README.
- SLEEP 7h.

**Day 3 (May 26): Polish the demo path (~12h)**
- Make demo path bulletproof — same path, same data, every time.
- Visual polish: loading states, micro-animations, empty states with CTAs.
- Architecture diagram + 5 screenshots.
- Record first demo video draft; watch back; re-record.
- Practice 3-min pitch out loud 3×.
- SLEEP 6-7h.

**Day 4 (May 27-28): Submit + Pitch (~8h, then STOP)**
- FEATURE FREEZE. Test deployed URL one final time.
- Re-record final demo video if needed.
- Devpost (or Seneca form) submission — fill EVERY field.
- Pre-write Q&A: 10 likely judge questions with answers.
- Practice 60s + 3-min pitch 5× out loud (TIMED).
- Submit 2+ hrs before deadline.
- Don't touch the code. Eat real food. Walk.

**Pitch day (May 30, IF finalist)**
- 2-3h sleep before pitching.
- Disable all notifications.
- Backup demo video on local + cloud.
- Charged laptop + charger + dongle.
- Wear something memorable (not event hoodie).
- One-page printed cheat sheet of key stats.
- Drink water. Smile. First 15 seconds matter most.

### 10.12 Submission checklist (Devpost or equivalent)

- [ ] **Project name** — memorable, ideally 1-2 words
- [ ] **Tagline** — one sentence, judge sees before clicking
- [ ] **Cover image** — high-contrast hero of UI, not logo
- [ ] **Demo video** — <3 min, public/unlisted YouTube. *Mark "Not for Kids."*
- [ ] **GitHub repo** — public, README at root
- [ ] **Live URL** — tested in incognito + on phone
- [ ] **Screenshots** — 3-5 polished
- [ ] **Built With** — list stack honestly, **including AI tools**
- [ ] Default Devpost sections filled: Inspiration → What it does → How we built it → Challenges → Accomplishments → Learned → What's next

### 10.13 README structure that maps to judging axes

```markdown
# [Project Name]
**One-line tagline.**
[Live URL] · [Demo video] · [Slides]

![Hero screenshot]

## The Problem
[Stat] [Person affected] [Why now]

## The Solution
[One sentence.] [Demo gif if possible.]

## How it works
[Architecture diagram]
[3-bullet flow]

## Built with
[Stack with logos]
[AI tools disclosed]

## Judging criteria mapping
- Technical: [...]
- Design: [...]
- Originality: [...]
- Impact: [...]

## What's next
[Vision paragraph]

## Run it locally
[3 commands max]
```

> *"If the hackathon gives you five judging criteria, make it super easy for them to judge by addressing every point individually and being super explicit."* — code42cate

### 10.14 The Q&A defense (pre-write 10 pairs)

- *"Why didn't you build [feature]?"* → "Scope discipline. I feature-froze at hour 60 so the demo path was bulletproof."
- *"How does this scale?"* → Honest answer + clear next step. "Right now this is for Toronto condos. Next we'd extend to Ontario's IESO grid feed."
- *"What's your business model?"* → Even if a learning hack, have an answer. B2B SaaS / freemium / utility partnership.
- *"How is this different from [competitor]?"* → Name 1-2 competitors first.
- *"Did you use AI?"* → YES transparently. "I used Cursor for scaffolding and Claude Code for the data layer. The energy market logic and the pitch are mine."
- *"What didn't work?"* → Honest answer wins points. "I tried integrating real IESO data and auth took longer than expected, so I'm using a 24-hr-old snapshot."

---

## 11. FAILURE MODES & ANTI-PATTERNS

### 11.1 Top 10 reasons teams lose

1. **Pitch-tech mismatch.** Spending 2/3 minutes on stack. Judges glaze.
2. **Overscoping.** #1 killer. Building 6 half-features instead of 2 great ones.
3. **No demo moment.** A flat walkthrough with no surprise.
4. **Slick homepage, shallow GitHub.** Karen Bajza-Terlouw will flag you.
5. **Generic / recycled idea.** Yet another to-do app, fitness tracker, chatbot.
6. **No story.** Tech with no human problem behind it.
7. **Live demo crashes with no backup video.**
8. **Empty states with no seed data.** *"This is what it would look like if there were users"* signals incomplete work.
9. **Ignoring judging criteria.** Not addressing the 4 axes in pitch/README.
10. **Submission errors**: video privacy private, README missing, repo private, link broken.

### 11.2 Anti-patterns (look impressive but hurt your score)

1. **Showing the architecture diagram in the demo.** Belongs in README, not pitch.
2. **Tech-stack name-dropping in first 60s.**
3. **5+ feature demo.** Each additional feature halves memorability.
4. **Live API calls to brittle services in demo.** Mock the call. Disclose in README.
5. **Apologizing.** "Sorry, this doesn't quite work yet..." — never.
6. **Reading slides.** Speak aloud always.
7. **Wearing event hoodie.** Judges have seen 50 today.
8. **No closing line.** Pitch trails off. Write a closer. Land it.
9. **Generic AI demo.** Every team has one. Differentiate on domain expertise (energy) or specific user (Toronto condo residents).
10. **Ignoring the energy theme.** Project that exists independently and got "shoehorned" in.

---

## 12. TOOLING, DESIGN, VIZ — TACTICAL CHEAT SHEET

### 12.1 Stack patterns that have won

- **Web data-viz**: Next.js + Vercel + Tailwind + Mapbox GL / MapLibre / deck.gl + Recharts/Visx + Supabase
- **AI agent**: Anthropic Claude + Vercel AI SDK / AWS Bedrock + Lambda + DynamoDB
- **Mobile**: Expo + React Native + Supabase
- **Notebook+export**: Python + Plotly Dash / Streamlit (less common in winners but fine for data-viz demos)
- **Hardware-augmented**: Raspberry Pi + Node-RED + WebSocket → web demo (Plantagotchi pattern)

### 12.2 Energy-data-viz heuristics

- **Avoid red-green** (8% of men colorblind). Use **viridis or cividis** sequential.
- **Lambert Conformal Conic** for Canada-wide maps (parallels 49°N, 77°N).
- Single big number with one verb in the hero ("Ontario's grid is 92% clean **right now**").
- Layered interaction: "what is this" (3s) → "tell me more" (15s) → "explore" (60s+).
- For equity: show error bars + uncertainty; surface data provenance; disaggregate by demographic.

### 12.3 Mock data quality

- **20+ realistic-looking rows from minute 1** (your CLAUDE.md F-07 rule).
- All views render something even with empty user state.
- Never "No data yet" empty states without CTA or sample content.
- For maps: seed real Ontario points (Toronto wards, IESO zones, postal FSAs) not Lorem Ipsum.

### 12.4 Live deploy expectations

- Vercel/Netlify auto-deploy on push.
- Test deployed URL in incognito AND on phone after every commit.
- If a deploy breaks, fix BEFORE writing new features. Red main = broken demo = 0 score.

---

## 13. LIKELY SPONSOR CANDIDATES

Officially: no public sponsor list on senecahackathon.com as of fetch. **learnatocto.com = Octo Learning, Inc. (AI learning platform), NOT Octopus Energy and NOT Ontario Centre of Innovation.**

Most-probable sponsor candidates for an Ontario energy hackathon at Seneca:

| Likelihood | Org | Why they'd sponsor |
|---|---|---|
| **Very high** | OPG, IESO, Bruce Power, Hydro One, Toronto Hydro | Provincial / municipal utilities with STEM-outreach budgets |
| **High** | Alectra, Enbridge Gas, Hydro Ottawa | Major Ontario LDC / gas LDC innovation budgets |
| **High** | Ontario Centre of Innovation (OCI) | Provincial agency co-funds energy/environment R&D |
| **High** | The Atmospheric Fund (TAF) | $80M+ GTA climate-finance agency, partners with Toronto Hydro |
| **Medium** | NRCan (federal Clean Growth Hub), CanREA, Pollution Probe, QUEST Canada, OEA, OSEA | Industry + NGO partners with judges/mentors |
| **Medium** | GE Vernova, AtkinsRéalis, Aecon, Siemens Canada, Hitachi Energy, ABB | Vendors active in Ontario grid/nuclear |
| **Medium** | Capital Power, Northland Power, TC Energy, Bruce Power | IPPs / generators |
| **Low-but-possible** | MaRS Discovery District, Communitech, Plug & Play | Innovation hubs co-sponsor student events |
| **Low** | Schneider Electric Canada, ev.energy, Peak Power | Smaller-but-aligned firms |

**Action**: Email hackathon@senecapolytechnic.ca pre-event to ask for confirmed sponsor list. Check website mid-May 23 for updates. LinkedIn-message any sponsor mentor during/after Phase 1 — sponsor connection is often the real ROI of any hackathon.

---

## 14. APPENDIX 1 — IDEA SEED LIBRARY (15+ ideas, stack-neutral)

Each seed includes: theme alignment · wedge / demo moment · data sources · why-it-could-win · risk.

### Seed #1 — OpenIESO.ca (fork OpenNEM)
- **Theme**: 1+2 (Generation + Smart Grid)
- **What**: Fork [OpenNEM](https://github.com/opennem) (MIT-licensed). Swap data sources for IESO Real-time Totals + Gen Output by Fuel Hourly. Add Ontario-specific overlays (Bruce/Pickering/Darlington labels, Niagara, interties).
- **Demo moment**: open page, live dashboard updates every 5 min showing Ontario's current fuel mix, side-by-side with UK's Carbon Intensity dashboard "we built the Ontario equivalent in 96 hours."
- **Data sources**: IESO XML feeds via GridStatus Python SDK; ECCC weather overlay.
- **Why it could win**: low-risk technical execution; map+dashboard archetype; open-source-civic-tech narrative; instant memorable visual.
- **Risk**: looks too "derivative" if framing doesn't include Ontario-specific overlays or analysis.

### Seed #2 — api.carbonintensity.ca
- **Theme**: 1+2
- **What**: Build the Ontario equivalent of UK's NESO Carbon Intensity API. Combines IESO Real-time Gen by Fuel + intertie flows (Quebec hydro vs NY gas) → 30-min consumption-based gCO2eq/kWh + 24-48h forecast (simple Prophet/transformer). Embeddable widget for any site.
- **Demo moment**: live widget on stage showing "right now your electricity is 38 g/kWh — plug in your EV at 2 AM for 19 g/kWh"; embed live in a sample blog post.
- **Data sources**: IESO Real-time Totals + Gen Output by Fuel + Intertie Schedule. Average-emissions factors from ECCC NIR fuel-mix data.
- **Why it could win**: public-good narrative; API + widget composability; UK-Ontario gap is genuine; pre-commitment to open-source = judge bait.
- **Risk**: forecast quality unimportant for demo but stakeholders care.

### Seed #3 — Toronto Building Disclosure Map
- **Theme**: 3 (Equity) — but also 1+2 angle
- **What**: Aggregate Ontario's large-building EWRB dataset (50,000+ sq ft buildings reporting energy/water/GHG) into a single searchable, comparable map. Per building: address, EUI (kWh/m²), GHG intensity, year, type. Compare to NYC LL97 map.
- **Demo moment**: type "1750 Finch Ave East" (Seneca's address) → see Seneca's building's energy use, rank vs peers, projected savings if heat-pump-retrofitted.
- **Data sources**: open.canada.ca large-buildings dataset; Toronto Open Data EWRB; ENERGY STAR PM technical reference for median benchmarks.
- **Why it could win**: civic-tech meets accountability narrative; live + relevant (judges' own buildings); maps + dashboards judges grok.
- **Risk**: dataset has gaps and lag; needs careful caveats.

### Seed #4 — OntarioEnviroScreen
- **Theme**: 3 (Equity)
- **What**: Replicate CalEnviroScreen for Ontario. Per census tract: combine pollution burden (air quality, peaker-plant proximity), demographic vulnerability (income, racialized population, age), and energy access (energy burden from Efficiency Canada's data). Output: cumulative impact score 1-100.
- **Demo moment**: zoom into south Etobicoke (Portlands gas peaker neighborhood) → score 92/100 (high-impact); zoom into Forest Hill → score 12/100; explain the policy implication.
- **Data sources**: Energy Poverty Explorer (Efficiency Canada), StatCan census tracts, AQHI, peaker-plant locations from IESO transmission-connected gen list.
- **Why it could win**: directly hits Theme 3's framing; equity-justice axis judges score high; an opportunity-shaped gap (EJScreen delisted, no Canadian equivalent).
- **Risk**: methodology has to be defensible — pick weights carefully, document them.

### Seed #5 — Outage Equity Index (real-time)
- **Theme**: 2+3
- **What**: Scrape Toronto Hydro + Hydro One outage maps every 10 min, overlay with (a) Ontario Marginalization Index, (b) over-65 population, (c) high-rise building tenants (electric elevator dependency).
- **Demo moment**: replay May 2022 derecho or March 2025 ice storm with equity overlay — "this outage is currently affecting 3,200 seniors in tower buildings."
- **Data sources**: Toronto Hydro outage map scrape, Hydro One Storm Centre, ON-MARG index, Toronto Open Data ward demographics.
- **Why it could win**: live + emotionally resonant; combines two genuinely-existing datasets in a new way; civic-tech narrative.
- **Risk**: scraping outage maps risks rate-limiting or change-of-format.

### Seed #6 — Toronto Heat Vulnerability + Cool-Space Router ("Cool & Clean")
- **Theme**: 3 (Equity) + adjacent to 2
- **What**: Combine Toronto HVI, Heat Relief Network cool-space locations (open/closed status, AC presence, transit accessibility), AQHI nowcast. Routes vulnerable residents to nearest accessible cool space accounting for asthma triggers.
- **Demo moment**: type a Scarborough address on a 32°C day → map highlights right cool space, transit route, asthma-safe walk path; show why that neighborhood needs more cool spaces.
- **Data sources**: Toronto Open Data (Cool Spaces, wards, transit), Toronto Public Health HVI, AQHI feed, TTC GTFS.
- **Why it could win**: public-health × equity × planning lens; direct human story; Wellesley Institute already flagged the gap.
- **Risk**: TPH HVI not always public at granular level; may need to recompute.

### Seed #7 — School Energy Report Card
- **Theme**: 3 + civic
- **What**: Aggregate Ontario Regulation 25/23 broader-public-sector annual energy reports (school boards publish PDFs) into one dashboard. Per school: kWh/m², GHG/student, rank vs board/province; letter grade.
- **Demo moment**: type "Newnham Campus" → see Seneca's grade, top + bottom schools; parent-friendly narrative.
- **Data sources**: O.Reg 25/23 school-board PDFs (need to scrape/OCR — feasible at small N), StatCan demographics, ENERGY STAR median benchmarks.
- **Why it could win**: tangible local hit; constituency (parents) politicians listen to; data exists but isn't aggregated.
- **Risk**: PDF parsing tedium; gap between provinces in how data is reported.

### Seed #8 — Carbon-Aware EV Router for Ontario
- **Theme**: 1+2
- **What**: A* routing over IESO real-time carbon mix + Ivy/FLO/Petro-Canada charger locations. Routes EVs along trips that minimize emissions of charging stops + driving emissions per kWh.
- **Demo moment**: Toronto → Sudbury route. Show "this route saves 8 kg CO2 vs naive routing" with map highlighting why (Quebec-intertie window in late afternoon, etc.).
- **Data sources**: IESO Gen Output by Fuel Hourly, charger locations (Ivy + FLO + Petro-Canada + ChargePoint via APIs), Mapbox/OSRM for routing.
- **Why it could win**: telegenic mobile demo; specific user with growing audience; combines existing data novelly.
- **Risk**: charger network APIs are partial — may need to scrape or mock.

### Seed #9 — Northern Ontario Diesel-to-Solar Calculator (Indigenous lens)
- **Theme**: 3
- **What**: For each of Ontario's ~25 First Nations historically on diesel (and the 17 now on Wataynikaneyap), calculate diesel cost, GHG emissions, and the PAYG/solar-hybrid alternative cost. Inspired by M-KOPA + Husk Power models.
- **Demo moment**: zoom on a specific Northern community pre-Wataynikaneyap → see lifetime diesel cost + emissions saved; toggle "solar-hybrid scenario" → see what it would cost + GHG saved.
- **Data sources**: NRCan Remote Communities Energy Database (open CSV), NRCan PV potential rasters, Wataynikaneyap published data, ECCC weather.
- **Why it could win**: reconciliation-meets-climate narrative; specific named communities; underexplored space in Ontario hackathons.
- **Risk**: requires sensitive framing — partner-with rather than speak-for.

### Seed #10 — Demand-Response Game Layer (consumer-facing OhmConnect for Ontario)
- **Theme**: 2
- **What**: Gamified demand-response app. Connects (mocked) Hydro One Green Button data. Awards points + leaderboard for shifting load to ULO periods. Earnings paid as bill credits.
- **Demo moment**: simulate a typical evening — see your "score" rise as you push dishwasher to 11pm; leaderboard fills with classmates' avatars.
- **Data sources**: Green Button schema + mock data; IESO Gen Output by Fuel Hourly for context; ULO rate periods.
- **Why it could win**: gamification = demo gold; addresses an actual Ontario gap (no OhmConnect equivalent); consumer-friendly demo.
- **Risk**: needs to feel different from generic "tracker apps."

### Seed #11 — "Are You Ready?" Heat Pump + Solar Wedge Calculator (with renter equity lens)
- **Theme**: 1+3
- **What**: Type a Toronto address → look up MLS + assessment data for archetype → estimate emissions, payback for heat pump (under HRS 2025 rebates), solar viability (DeepSolar-style satellite overlay), AND a separate "renter section" with what to ask landlord + advocacy info.
- **Demo moment**: type your own address; in 5 seconds see archetype, emissions, retrofit payback, *and* renter-specific guidance.
- **Data sources**: Toronto Open Data MLAR/assessment, NRCan PV potential, satellite imagery (Bing/Mapbox tiles), Enbridge HRS rebate tables.
- **Why it could win**: architecture + economics + equity wedge; renters often left out of green tools = differentiator.
- **Risk**: MLS/assessment data not all openly accessible — may need to mock.

### Seed #12 — Ontario Polluter Dashboard
- **Theme**: 3
- **What**: Climate TRACE facility-level emissions data filtered to Ontario, ranked, mapped. Show which oil/gas/cement/steel facility emits how much; cross-reference with adjacent demographics.
- **Demo moment**: top 20 Ontario polluters; click one → see the surrounding census tracts (income, racialized %, asthma rates if available).
- **Data sources**: Climate TRACE API, federal Greenhouse Gas Reporting Program (Canada Open Government), StatCan census.
- **Why it could win**: accountability framing; climate-equity overlay.
- **Risk**: depends on Climate TRACE coverage of Ontario being accurate.

### Seed #13 — WhatPoweredYourPhone.ca
- **Theme**: 1 — consumer-facing wedge
- **What**: Browser + mobile app: when you charge your phone, log the time and your location. Show — based on IESO grid mix at that time — what fuel charged it. Cumulative "your year in electrons."
- **Demo moment**: pre-loaded user data shows a year of charging; reveal "your phone was 78% nuclear, 19% hydro, 3% gas." Share-card image.
- **Data sources**: IESO Gen Output by Fuel Hourly (historical) + Real-time Totals.
- **Why it could win**: consumer + personal + viral; shareable image = social spread; clean narrative around Ontario's clean grid.
- **Risk**: feels too cute / not policy-meaningful — frame as gateway to deeper engagement.

### Seed #14 — Toronto Tower Renewal Energy Estimator
- **Theme**: 1+3
- **What**: Map every Toronto pre-1980 high-rise (~1,200 candidates per Tower Renewal Initiative). Per building: estimate current emissions, savings from envelope retrofit + heat pump + balcony PV. Combine TGS Tier 4 trajectory.
- **Demo moment**: aerial view of St. Jamestown → click one tower → see "this 1968 tower emits 4,200 t CO2/yr — retrofit + heat pump = 87% reduction, $4M capex over 30 yrs, $X municipal incentives available."
- **Data sources**: Toronto Open Data building inventory, Tower Renewal datasets, ENERGY STAR PM medians, NRCan PV potential, City of Toronto rebates.
- **Why it could win**: targets Toronto's *single biggest* emissions opportunity; concrete with sensible numbers.
- **Risk**: needs careful framing — don't paint over real tower-renewal-and-displacement equity issues.

### Seed #15 — Peatland Carbon Dashboard (Hudson Bay Lowlands)
- **Theme**: 1 — climate science wildcard
- **What**: Public viz of Ontario's peatland carbon storage (~1.3 Bt). Per region: stored carbon, drought-risk index, fire risk, current emissions vs net sink status.
- **Demo moment**: Ontario at provincial scale; HBL highlighted; compare its stored carbon to annual Canadian vehicle emissions ("40 years").
- **Data sources**: ECCC carbon stock maps, NRCan peatland datasets, CWFIS fire data.
- **Why it could win**: reframes the conversation (nature as infrastructure); judges may not have seen this angle.
- **Risk**: less obviously "Energy" — pitch carefully as energy/climate intersection.

---

## 15. APPENDIX 2 — TOP-3 IDEA SEEDS FOR THE VAULT

> **To be transferred (after plan exit) to `Synergy-v2.0 — Hackathon Brain/20-ideas/`.** Each is a starting point — not a commitment. Final pick happens at `/hackathon:ideate` post May 24 once the actual challenge sets are revealed.

### Top-3 Seed A — **api.carbonintensity.ca** (the public-good API + widget play)

- **Theme**: 1+2 (Generation + Smart Grid)
- **Wedge**: Build the Ontario equivalent of UK's NESO Carbon Intensity API. Public REST endpoint serving consumption-adjusted gCO2eq/kWh in 30-min increments, plus a 60-line embeddable widget any Ontario blog/site could drop in.
- **10-sec demo moment**: Live widget on screen showing "right now your electricity is 38 g/kWh — plug in your EV at 2 AM for 19 g/kWh." Cut to: embed the widget in a sample blog post, refresh, it works.
- **Data sources**: IESO Real-time Totals + Gen Output by Fuel + Intertie Schedule + Flow; ECCC NIR fuel-mix emissions factors. Optionally: simple Prophet/transformer 24h forecast.
- **Why it wins (mapped to 4-axis rubric)**:
  - **Technical**: real-time data pipeline + emissions math + forecast model + public API + embeddable widget = full stack of skill on display.
  - **Design**: clean API docs + widget = double exposure of design thinking.
  - **Originality**: filling a gap UK has + others don't; new artifact (API as public good) not a single-purpose app.
  - **Impact**: "Monday morning use" — any Ontario consumer-energy app, any climate-conscious dev, any utility could embed this.
- **Risks**: forecast quality unimportant for demo but may invite Q&A; need to nail the emissions methodology (cite UK NESO approach for credibility).
- **Stack flexibility**: web (Next.js + Vercel + serverless functions), Python (FastAPI + Vercel), or any combination. Truly stack-agnostic.
- **Differentiation note**: include a public roadmap + open-source license. Judges reward "public good" framing on energy themes.

### Top-3 Seed B — **OntarioEnviroScreen** (the equity-justice play)

- **Theme**: 3 (Community Energy, Equity & Sustainability)
- **Wedge**: Replicate CalEnviroScreen / EPA EJScreen for Ontario at the census-tract level. Score combines pollution burden (peaker-plant proximity, AQHI, traffic), demographic vulnerability (income, racialized population, age, recent immigrant), and energy access (energy burden + heating type + building age). Output: cumulative impact score with full transparency about weights.
- **10-sec demo moment**: Map of Toronto. Zoom into south Etobicoke (Portlands gas peaker neighborhood) → score 92/100 (high impact). Zoom into Forest Hill → score 12/100. Explain in one line why.
- **Data sources**: Energy Poverty & Equity Explorer (Efficiency Canada), StatCan census tracts (income, racialized %, age), Ontario Marginalization Index, AQHI feed, IESO transmission-connected gas-peaker locations, Climate TRACE for facility emissions.
- **Why it wins**:
  - **Technical**: geospatial pipeline + multi-source data fusion + scoring model = real engineering.
  - **Design**: a map with a clear narrative beats anything. Cividis colormap + Toronto outline + interactive scoring is judge-gold.
  - **Originality**: Canada has no equivalent; EJScreen delisted under Trump 2025; opportunity to be **the keeper of the equity data for NA**.
  - **Impact**: directly maps to Theme 3's *"help decision makers understand where support or investment can make the biggest difference"* — judges' own words.
- **Risks**: methodology defensibility — pick weights carefully, document them. Don't speak for communities — frame as "decision-support" not "the answer."
- **Stack flexibility**: any web stack works (Next.js + Mapbox/MapLibre, or Python + Streamlit + deck.gl). Heavier on the geospatial side.
- **Differentiation note**: include both pollution AND energy burden in the same score — most equity-screen tools have one or the other, not both. This is the wedge.

### Top-3 Seed C — **Outage Equity Index** (the live emotional resonance play)

- **Theme**: 2+3 (Smart Grid Resilience + Community Equity)
- **Wedge**: Real-time scraper of Toronto Hydro + Hydro One outage maps, overlaying with (a) Ontario Marginalization Index, (b) over-65 population, (c) high-rise/elevator-dependent buildings. Surfaces who is bearing the burden of each outage in real time.
- **10-sec demo moment**: Replay May 21, 2022 derecho or March 30, 2025 ice storm with the equity overlay. Watch as the storm sweeps Eastern Ontario; counter ticks up: "currently affecting 3,200 seniors in tower buildings without power for elevators — 14 hours elapsed."
- **Data sources**: Toronto Hydro outage map scrape (10-min interval), Hydro One Storm Centre scrape, ON-MARG index, Toronto Open Data ward demographics + high-rise inventory.
- **Why it wins**:
  - **Technical**: real-time scraping + data fusion + replay engine = visible engineering effort.
  - **Design**: live map with humans (not just dots) → emotional resonance.
  - **Originality**: outage data + equity data BOTH exist publicly; the overlay is novel. Mar 2025 ice storm reframed grid-resilience as an equity issue — this is the tool that journalists wished they had.
  - **Impact**: instantly understandable to anyone who lost power in 2022 / 2025; framed for utility planners + emergency management; concrete recommendation engine ("prioritize restoration for these 12 buildings with 200+ over-65 residents").
- **Risks**: scrapers can break on layout changes; need a fallback to historical CSV exports. Sensitive framing — present as informing equitable restoration policy not as performative tragedy.
- **Stack flexibility**: any web framework; would benefit from Mapbox/MapLibre + WebSockets for live updates; lightweight Python scraper backend.
- **Differentiation note**: the demo moment is the *time-replay* — judges can SEE the storm advance. Most "equity dashboards" are static maps. The replay is what makes this telegenic.

---

## 16. APPENDIX 3 — GLOSSARY (judge/sponsor vocabulary)

| Term | Definition |
|---|---|
| **AMI** | Advanced Metering Infrastructure (smart meters) |
| **APO** | IESO Annual Planning Outlook (the future-demand bible) |
| **BWRX-300** | GE Vernova Hitachi 300 MW boiling-water small modular reactor (Darlington's SMR) |
| **CANDU** | Canadian deuterium-uranium reactor (the domestic nuclear tech) |
| **Capacity factor** | Actual energy / (nameplate × hours). Nuclear ~90%, gas peakers 5-15%, wind 25-40%, solar 15-20%, hydro 40-60% |
| **CER** | Canada Energy Regulator (federal) |
| **CNSC** | Canadian Nuclear Safety Commission |
| **Demand Response (DR)** | Customers reduce/shift load on grid operator signal |
| **DER** | Distributed Energy Resource — rooftop solar, small storage, EVs, DR |
| **DERMS** | DER Management System |
| **EAP** | Energy Affordability Program (IESO/Save on Energy) |
| **EFPH** | Equivalent Full Power Hours (nuclear lifetime measure) |
| **EJScreen** | EPA's environmental-justice screening tool (delisted 2025) |
| **EUI** | Energy Use Intensity (kWh/m² or kBTU/ft² of a building) |
| **EWRB** | Energy & Water Reporting & Benchmarking by-law (Toronto) |
| **FSA** | Forward Sortation Area (first 3 chars of Canadian postal code) |
| **GA / Global Adjustment** | Big reconciliation charge on Ontario bills (~$8B/yr, often bigger than HOEP) |
| **GHG t-CO₂e** | Tonnes CO2-equivalent (all GHGs by GWP) |
| **HOEP** | Hourly Ontario Energy Price (wholesale spot) |
| **HRS** | Home Renovation Savings Program (Jan 2025+, Enbridge+IESO) |
| **HVI** | Heat Vulnerability Index |
| **ICI** | Industrial Conservation Initiative (Class A/B GA-busting) |
| **IEP** | Integrated Energy Plan (Ontario's first one, June 2025) |
| **IESO** | Independent Electricity System Operator (Ontario's grid operator) |
| **iZEV / EVAP** | Federal EV rebate (paused) / its 2026 replacement |
| **kWh / MWh / GWh / TWh** | Kilo/Mega/Giga/Terawatt-hour |
| **LCOE** | Levelized Cost of Energy |
| **LDC** | Local Distribution Company (Toronto Hydro, Alectra, etc.) |
| **LEAP** | Low-Income Energy Assistance Program |
| **LL97 / LL84** | NYC Local Law 97 (building emissions caps) / 84 (disclosure) |
| **LMP** | Locational Marginal Price (post-MRP Ontario node-level prices) |
| **LT1 / LT2** | IESO Long-Term 1 / 2 RFPs (procurements) |
| **MCR** | Major Component Replacement (Bruce nuclear refurb terminology) |
| **MRP** | Market Renewal Program (launched May 1, 2025) |
| **NILM** | Non-Intrusive Load Monitoring (disaggregation) |
| **NRCan** | Natural Resources Canada |
| **OBPS** | Output-Based Pricing System (federal industrial carbon price) |
| **OEB** | Ontario Energy Board (regulator) |
| **OER** | Ontario Electricity Rebate (23.5% Nov 2025+) |
| **OESP** | Ontario Electricity Support Program (on-bill income credit) |
| **OPG** | Ontario Power Generation (provincial Crown corp) |
| **PV** | Photovoltaic (solar panels) |
| **RPP** | Regulated Price Plan (default residential rates) |
| **SAIDI/SAIFI/CAIDI** | System Avg Interruption Duration/Frequency/Customer Avg Interruption Duration (reliability metrics) |
| **SMR** | Small Modular Reactor |
| **SPS** | Special Protection Scheme (transmission constraint enforcement) |
| **TGS** | Toronto Green Standard (Tier 1 mandatory, Tier 4 = Passive House by 2030) |
| **TOU** | Time-of-Use rates (3 periods) |
| **ULO** | Ultra-Low Overnight rate (2023+, for EVs) |
| **V2G / V2H** | Vehicle-to-Grid / Vehicle-to-Home |
| **VPP** | Virtual Power Plant |
| **ZEV** | Zero Emission Vehicle |

---

## 17. APPENDIX 4 — BIBLIOGRAPHY (selected; full URLs throughout document)

### IESO + Ontario regulators
- IESO Power Data: https://www.ieso.ca/power-data
- IESO 2025 APO: https://www.ieso.ca/-/media/Files/IESO/Document-Library/planning-forecasts/apo/2025/2025-Annual-Planning-Outlook.pdf
- IESO Pathways to Decarbonization: https://www.ieso.ca/-/media/Files/IESO/Document-Library/gas-phase-out/Pathways-to-Decarbonization.ashx
- IESO Public Reports: https://reports-public.ieso.ca/public/
- OEB Open Data: https://www.oeb.ca/ontarios-energy-sector/open-data
- CER Ontario profile: https://www.cer-rec.gc.ca/en/data-analysis/energy-markets/province-territory-energy-profiles/ontario.html

### Climate & equity data
- Climate Atlas Toronto: https://climateatlas.ca/sites/default/files/cityreports/Toronto-EN.pdf
- Energy Poverty Explorer: https://energypoverty.communitydata.ca/
- School of Cities Heat Vulnerability: https://schoolofcities.github.io/heat-vulnerability-toronto/
- Wellesley Institute *Left in the Heat*: https://www.wellesleyinstitute.com/left-in-the-heat-citys-heat-relief-plan-falls-short-for-torontos-homeless/

### International reference architectures
- UK Carbon Intensity API: https://api.carbonintensity.org.uk/
- Open Climate Fix: https://www.openclimatefix.org/
- Octopus Agile + Kraken: https://octopus.energy/smart/agile/ , https://developer.octopus.energy/rest/reference/
- OpenNEM: https://openelectricity.org.au/ , https://github.com/opennem
- CAISO Today's Outlook: https://www.caiso.com/todays-outlook
- GridStatus.io: https://www.gridstatus.io/
- WattTime: https://watttime.org/
- CalEnviroScreen: https://oehha.ca.gov/calenviroscreen
- NYC LL97 map: https://www.nyc.gov/assets/sustainablebuildings/html/LL97-n-LL33-map.html
- NREL ResStock: https://www.energy.gov/eere/buildings/resstock
- Electricity Maps: https://www.electricitymaps.com/
- Climate TRACE: https://climatetrace.org/

### Hackathon strategy
- MLH Judging Plan: https://guide.mlh.io/general-information/judging-and-submissions/judging-plan
- Devpost: 6 Tips for a winning demo video: https://info.devpost.com/blog/6-tips-for-making-a-hackathon-demo-video
- Devpost: Advice from 5 judges: https://info.devpost.com/blog/hackathon-judging-tips
- Nick Singh: Win Hackathons step-by-step: https://www.nicksingh.com/posts/win-hackathons-a-how-to-guide
- szeyusim Serial Hacker: https://szeyusim.medium.com/how-i-win-most-hackathons-stories-pro-tips-from-a-serial-hacker-1969c6470f92
- code42cate "5 Reasons You Lose": https://dev.to/code42cate/5-reasons-why-you-are-losing-hackathons-4k70

### Past hackathon winners
- DOE EnergyTech UP 2024: https://www.energy.gov/technologycommercialization/articles/energytech-university-prize-2024-student-winners-announced
- DOE EnergyTech UP 2025: https://www.energy.gov/technologycommercialization/articles/energytech-university-prize-2025-student-winners-announced
- MLH Avanade Top 10: https://news.mlh.io/top-10-prize-winning-hackathon-projects-for-the-avanade-best-sustainability-hack-challenge-10-24-2023
- Cloudera Climate Hackathon: https://www.cloudera.com/about/news-and-blogs/press-releases/2024-04-24-cloudera-machine-learning-hackathon-generates-groundbreaking-climate-and-sustainability-projects.html
- Seneca Hackathon 2023: https://2023.senecahackathon.com/
- MIT Energy Hack 2024: https://www.mitenergyhack.org/2024
- GridShift SVCE: https://svcleanenergy.org/news/gridshift/

### Academic / research
- Sovacool Energy Justice: https://research-repository.st-andrews.ac.uk/bitstream/handle/10023/9733/Jenkins_et_al._2016_Energy_Justice_A_Conceptual_Review.pdf
- Allcott OPower (NBER): https://www.nber.org/system/files/working_papers/w21671/revisions/w21671.rev0.pdf
- Brattle TOU Ontario: https://www.brattle.com/wp-content/uploads/2017/10/7305_the_impact_of_time_of_use_rates_in_ontario.pdf
- Stanford DeepSolar: http://web.stanford.edu/group/deepsolar/ds
- Data Feminism (MIT Press): https://data-feminism.mitpress.mit.edu/

### Recent news / debates
- Pickering refurb $26.8B Nov 2025: https://www.world-nuclear-news.org/articles/pickering-refurbishment-gets-government-go-ahead
- Darlington SMR May 2026 foundation: https://www.world-nuclear-news.org/articles/darlington-smr-nuclear-project-foundation-module-milestone
- Bruce C $300M predev: https://www.power-eng.com/nuclear/ontario-advances-bruce-c-nuclear-project-with-300m-pre-development-agreement/
- IESO 75% demand growth: https://www.ieso.ca/Corporate-IESO/Media/News-Releases/2024/10/Electricity-Demand-in-Ontario-to-Grow-by-75-per-cent-by-2050
- Ontario IEP "Energy for Generations": https://www.blakes.com/insights/ontario-releases-energy-for-generations-the-province-s-inaugural-integrated-energy-plan/
- Hydro One March 2025 ice storm: https://www.cbc.ca/news/canada/toronto/hydro-one-ice-storm-outages-update-1.7503363

---

## 18. VERIFICATION & USE — HOW TO TEST THIS DOSSIER

> Since this is a research artifact not an implementation, "verification" = confirming the facts and the dossier's usefulness:

1. **Spot-check 5 URLs at random** from Section 3 / Section 6 to confirm they resolve.
2. **Cross-reference the Seneca 2023 winner** at https://2023.senecahackathon.com/ — confirm Mood Vault / Foam on Latte details match.
3. **Confirm learnatocto.com identity** by visiting the site — should show "Octo Learning, Inc." not Octopus or OCI.
4. **Verify IESO data freshness** by fetching one CSV from reports-public.ieso.ca and confirming it loads (e.g., Real-time Totals or Gen Output by Fuel Hourly).
5. **Test against `/hackathon:ideate` use case** — when ideate runs on May 22, the angle libraries in `docs/themes.md` should be backfilled from Appendix 1's 15 seeds.
6. **Test against `/hackathon:scope` use case** — when scope locks on May 24, the demo-moment criteria (Section 10.5) + judge psychology (Section 10.7) should inform the demo-moment-critic evaluation.
7. **After plan exit, copy Appendix 2 (top-3 seeds)** to `Synergy-v2.0 — Hackathon Brain/20-ideas/seed-a-carbon-intensity-api.md`, `seed-b-ontario-enviroscreen.md`, `seed-c-outage-equity-index.md` for vault retention.
8. **Consider copying Section 3 (data sources)** to `docs/energy-domain.md` to backfill that file's "Datasets & APIs" + "Regulators & bodies" + "Common metrics" sections (currently placeholders).

---

## 19. RECOMMENDED NEXT MOVES (post plan exit)

These are recommendations, not commitments. The user is staying open until May 24 kickoff.

1. **Copy the top-3 idea seeds** (Section 15 / Appendix 2) into `Synergy-v2.0 — Hackathon Brain/20-ideas/` as three separate files. Each file with frontmatter `type: idea`, `status: draft`, `updated: 2026-05-15`.
2. **Backfill `docs/energy-domain.md`** with Section 3 (Datasets & APIs), Section 4.3 (Voices to know), and Section 9.12 (Judge buzzwords). This is what `energy-domain-researcher` would have appended.
3. **Backfill `docs/themes.md` angle libraries** with the 15 idea seeds from Appendix 1, organized by theme.
4. **Email hackathon@senecapolytechnic.ca** to ask:
   - Submission deadline reconciliation (May 26 vs May 28)
   - Required APIs / sponsor list
   - Team size limits
   - Eligibility
   - Submission video max length
   - Judging rubric weights
   - (All 7 open questions from `seneca-hackathon-context.md`)
5. **Pre-event reading list** for May 16-23 self-prep:
   - [ ] IESO 2025 APO PDF (45 min)
   - [ ] Climate Atlas of Canada Toronto report (15 min)
   - [ ] CalEnviroScreen methodology (30 min) — model for Seed B
   - [ ] UK NESO Carbon Intensity API docs (15 min) — model for Seed A
   - [ ] OpenNEM repo README (15 min) — model for Seed #1
   - [ ] Mood Vault Devpost / coverage (10 min) — Seneca 2023 baseline
   - [ ] One MLH winner retrospective from Section 9 (15 min)
6. **Practice with AI tools on a throwaway project** (per Section 10.11 Day -3 to 0).
7. **Schedule sleep 8h/night** through May 23.

---

*End of dossier. Total ~17,500 words across 6 parallel research streams. Compiled 2026-05-15 by Claude (Opus 4.7) via 6 parallel general-purpose research agents — see ~/.claude/projects/.../tasks/ for raw outputs if needed.*
