# Sanctuary — Showcase & Domain Research Dossier

> Compiled 2026-05-26 for the Sanctuary submission (Seneca Energy Hackathon 2026, Theme 3 · PS2).
> Produced by deep internet research (multiple parallel research agents, heavy WebSearch/WebFetch) plus a **live verification pass against the public ArcGIS feature service**. Every claim carries a source URL. Items that could not be verified, or that correct a current project claim, are flagged explicitly.
>
> Purpose: (a) strengthen the project's factual credibility, (b) lock down what is real before any number goes on screen, and (c) stage the design + tooling decisions for the showcase-site rebuild. Companion to the build plan at `~/.claude/plans/first-of-all-i-binary-babbage.md`.

---

## Part A — Domain & credibility (sourced)

### A1. Peel Heat Vulnerability Index — VERIFIED PUBLIC & CORRECT
The HVI data spine the project already uses is real, public, and queryable anonymously.

- **Service to cite (correct, already in `sanctuary/data/sources.md`):**
  `https://services6.arcgis.com/ONZht79c8QWuX759/arcgis/rest/services/Extreme_Heat_Vulnerability_Index/FeatureServer/0`
  Layer `hvi_ct2021` — polygon, **2021 census tracts**, quintile-classified, `capabilities: Query,Extract`, anonymous query allowed (no token). Published by **Region of Peel / Peel Public Health** (parent public dashboard item `83b829a8b497476b87c3d954869c02d2`, owner `david.guillette@peelregion.ca`). Service description: *"The Peel Extreme Heat Vulnerability Index (EHVI) is a tool designed by Peel Public Health to identify areas and populations within Peel Region that are most vulnerable to extreme heat events."*
- **Field mapping confirmed verbatim** (project friendly name → real field): `hvi_quintile→Index_Qnt`, `exposure_quintile→Exposure_Qnt`, `sensitivity_quintile→Sensitivity_Qnt`, `adaptive_capacity_quintile→Adaptivity_Qnt` (service alias literally reads "Adaptivity Capacity (Quintile)" — Peel's typo), `ctuid→CTUID`, `phdz→PHDZ`, `municipality→Municipality`. Normalized companions also exist (`Index_Nrm`, etc.). Quintile semantics 1=low … 5=high.
- **Do NOT confuse with** the older `services1.arcgis.com/d0ZCwU7eGKVeNiEE/.../Peel_Heat_Vulnerability_Index/FeatureServer` (TRCA tree-planting product): dissemination-area, **2016 census** (`DAPOP16`), raw continuous scores (`HVI`, `Sum_Exp_In`, `Sens_Score`, `Adapt_Sum`), **no quintile field**. It cannot back a "quintile 5" claim.
- Peel primary pages: `https://peelregion.ca/about/climate-change/climate-change-health` · assessment PDF `https://peelregion.ca/sites/default/files/2024-05/climate-change-health-report.pdf` · `https://peelregion.ca/about/climate-change/climate-change-master-plan`
- Authority to name-drop (HVI maintainers): Franca Ursitti, Lydia Cheng, David Guillette (Peel Public Health), PHO Rounds webinar 2025-11-26 — `https://www.publichealthontario.ca/en/Education-and-Events/Events-and-Presentations/2025/11/Peel-Regions-Heat-Vulnerability-Index`

### A2. Resilience-hub prior art & frameworks
- **Brampton Lighthouse Project** (the single strongest citation — a *federal* source validating "faith buildings as community refuge" in Peel): Canada in a Changing Climate states **79 registered places of worship citywide** and **90% of Brampton citizens had religious affiliations**; coordinated by Brampton Environmental Planning + Brampton Emergency Management + Faith & the Common Good; partners grew from ~20 to **39 with signed agreements**; covers extreme heat, rainfall, flooding, ice storms, tornadoes. `https://changingclimate.ca/map/brampton-lighthouse-project/` · program FAQ `https://www.brampton.ca/EN/residents/Emergency-Management/Pages/Lighthouse-Program-FAQs.aspx`
  - **Framing rule:** Lighthouses today are *unpowered refuge points*. Sanctuary's contribution = **add solar+battery so the refuge keeps power/cooling when the grid fails.** Cite "79 registered" as the addressable universe; "39 signed" as actual partners. Do NOT call it a solar/energy precedent.
- **USDN Resilience Hubs** — canonical framework; 5 functions: power, communications, facilities, operations, services & programming. `https://www.usdn.org/uploads/cms/documents/usdn_resiliencehubs_2018.pdf` · tech/power guide `http://resilience-hub.org/wp-content/uploads/2019/07/USDN_ResilienceHubTech_Final.pdf`. *Use:* adopt the 5-function vocabulary on the "what is a resilience hub" panel.
- **Faith & Common Good** (Greening Sacred Spaces) — **137 Ontario faith institutions use solar; 120 are FCG members**; ran a Toronto Neighbourhood Extreme Weather Resilience pilot. `https://www.faithcommongood.org/resources/solar-in-faith-communities/` · `https://www.faithcommongood.org/extreme-weather-resilience/`. *Use:* proves candidate faith buildings are realistic solar adopters.
- **Peer-reviewed solar+storage resilience-hub siting** (Risk Analysis, 2025): `https://onlinelibrary.wiley.com/doi/10.1111/risa.14341` (open: `https://pmc.ncbi.nlm.nih.gov/articles/PMC11735336/`). *Use:* academic backing for rank-and-size methodology.
- Toronto/Ontario context for differentiation: Toronto Heat Relief Strategy (season May 15–Sep 30), 2025 Council push for 24/7 cooling centres + Chief Resiliency Officer. `https://www.toronto.ca/services-payments/water-environment/environmentally-friendly-city-initiatives/resilientto/resilience-actions/`

### A3. Alectra fit (concrete, current)
- **GRE&T Centre** (Green Energy & Technology, Guelph): identifies/evaluates/deploys emerging green energy solutions; 2024 ESG + GRE&T reports released 2025-06-13. `https://www.globenewswire.com/news-release/2025/06/13/3099101/0/en/Alectra-releases-2024-ESG-and-GRE-T-Centre-reports-highlighting-commitment-to-sustainability-community-support-and-grid-modernization.html`
- People: **Keith Hemingway — Head of Advanced Planning, GRE&T**; **Daniel Carr — Head, Grid Edge Solutions**. (LinkedIn / DistribuTECH speaker pages.)
- Real DER precedents: IESO **York Region Non-Wires Alternatives** ("North America's first local energy marketplace"); **Alectra/Convergent 120 MW** storage via IESO E-LT1. `https://www.alectrasolutions.com/distributed-energy-solutions`
- **CORRECTION — GridExchange was NOT in Peel.** Its 21-household blockchain transactive-energy pilot ran in **Vaughan, Markham, Barrie, Richmond Hill, Hamilton** (results: 4,881 kWh delivered/reduced, 1,606 kWh saved, 294 kg CO₂). NRCan-funded; partners Sunverge, Savage Data, FLO. Reframe as a transferable GGH *template*, never a Peel deployment. `https://www.newswire.ca/news-releases/alectra-launches-gridexchange-an-innovative-transactive-energy-platform-836252722.html`

### A4. Funding mechanisms (verified — fills future-vision placeholders)
- **Clean Electricity ITC (CEITC) — 15% refundable, and the only clean-economy ITC some tax-exempt entities can claim** (built for municipalities, First Nations, pension plans, Crown utilities). Enacted into law via Bill C-15, Royal Assent **2026-03-26**; applies to property available for use after 2024-04-16. → The realistic federal lever for a tax-exempt gurdwara/library/church/municipal rec centre. `https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/corporations/business-tax-credits/clean-economy-itc/clean-electricity-investment-tax-credit.html`
- **Clean Technology ITC (CTITC) — up to 30% refundable, but tax-exempts are EXCLUDED** ("only taxable Canadian corporations"). Reachable only via a taxable project-co / third-party-ownership structure. `https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/corporations/business-tax-credits/clean-economy-itc/clean-technology-itc.html` · corroboration: Torys Q2-2026, BLG, Gowling WLG.
- **NRCan SREPs** — $4.5B program (to 2036-03-31); +$500M Utility Support Stream (Oct 2025); $300M to 2027 for Indigenous/rural/remote clean energy (up to 75% of project cost for majority-Indigenous). `https://natural-resources.canada.ca/climate-change/sreps`
- *Watch-item (not yet law):* Finance consultation (Feb–Mar 2026) on a possible domestic-content requirement for both ITCs. Label as forward risk.

### A5. Fresh 2026 heat/equity facts (embodied numbers)
- 2026 already saw a **May GTA heat alert** covering Mississauga & Brampton (feels-like ~36 °C). `https://thesiliconreview.com/2026/05/heat-alert-gta-first-heat-warning-2026-environment-canada`
- **Pearson hit 35.8 °C on 2025-06-23** (record; Pearson is in Mississauga, ≈5 km from Malton). `https://www.cbc.ca/news/canada/toronto/environment-canada-heat-warning-monday-greater-toronto-area-1.7568283`
- Extreme-heat-day trajectory (Toronto area): **~8/yr (1950s) → ~18 now → 29 by 2030s → 54 by 2060s**. `https://www.toronto.ca/services-payments/water-environment/environmentally-friendly-city-initiatives/resilientto/resilience-actions/`
- 2025 ED load: Toronto PH 42 heat-related ER visits (Jun 22–24); Peel EDs 15 (May 1–Jul 3). Cohort = seniors + renters without AC. `https://thepointer.com/article/2025-08-09/seniors-renters-without-ac-most-vulnerable-during-continuous-heatwaves`
- Peel PH projects "an increase in expected days above 35 °C." `https://peelregion.ca/about/climate-change/climate-change-health`
- *Could NOT verify (do not print without a source):* a specific 2025 Peel/Ontario heat-death count; a precise current days-above-30 figure for Mississauga specifically.

### A6. ArcGIS build resources
- **Living Atlas Canada**: Canadian Index of Multiple Deprivation (CIMD, **2021** DA-level, 4 dimensions) as a defensible social-vulnerability cross-layer; Building Footprint extraction. `https://resources.esri.ca/news-and-updates/what-s-new-in-the-canadian-edition-of-living-atlas-of-the-world`
- **App structure (Esri's own guidance):** StoryMap = narrative spine; embed a Web Map (HVI + candidates) and a Dashboard (ranked top-5 scorecard). `https://www.esri.com/about/newsroom/arcnews/how-to-choose-the-right-web-app-in-arcgis-online` · multi-app embedding `https://www.esri.com/arcgis-blog/products/arcgis-storymaps/constituent-engagement/elevate-your-storytelling-integrating-multiple-apps-in-arcgis-storymaps`
- **Walkshed:** Network Analyst **Service Area** (e.g., 10-min walk) is more defensible than a straight-line buffer. `https://pro.arcgis.com/en/pro-app/latest/help/analysis/networks/service-area-analysis-layer.htm`. Ship the 500 m buffer labelled "planning approximation"; show one network walkshed for Malton.
- **Templates:** Learn ArcGIS "Customize a climate resilience index" (methodological cite for the weighted score) `https://learn.arcgis.com/en/projects/customize-a-climate-resilience-index/` · "Tell the story of your equity plan" `https://learn.arcgis.com/en/projects/tell-the-story-of-your-equity-plan/`
- **Places of worship:** no authoritative Living Atlas layer found — use OSM `amenity=place_of_worship` / curated list, labelled a compiled dataset.

---

## Part B — Data verification record (2026-05-26, live)

Method: anonymous point-queries against `…/Extreme_Heat_Vulnerability_Index/FeatureServer/0/query?geometry=lon,lat&geometryType=esriGeometryPoint&inSR=4326&spatialRel=esriSpatialRelIntersects&outFields=*&f=json`. All 12 queries succeeded without a token.

**Result: every value in `candidate-hubs.csv` reproduces from the live service. No data fabrication. No corrections to the data spine.**

| Rank | Building | CTUID | HVI | Exp | Sens | Adapt | PHDZ |
|---|---|---|---|---|---|---|---|
| 1 | Malton Community Centre & Library | 5350530.01 | **5** | 4 | 2 | 5 | M-04 |
| 2 | Sri Guru Singh Sabha Malton | 5350528.62 | **5** | 5 | 4 | 5 | M-04 |
| 3 | Susan Fennell Sportsplex | 5350528.21 | **5** | 3 | 2 | 5 | B-16 |
| 4 | Anjuman-E-Anwarul Islam of Malton | 5350529.01 | **4** | 3 | 1 | 5 | M-04 |
| 5 | Bharat Mata Mandir | 5350576.65 | **3** | 5 | 1 | 3 | B-13 |
| 6 | Chinguacousy Wellness Centre | 5350576.20 | **3** | 5 | 2 | 2 | B-04 |
| 7 | Hindu Sabha Temple | 5350576.62 | **2** | 5 | 2 | 1 | B-13 |
| 8 | Gore Meadows Community Centre & Library | 5350576.73 | **2** | 2 | 5 | 2 | B-05 |
| 9 | Guru Nanak Darbar Gurdwara | 5350576.63 | **1** | 3 | 2 | 1 | B-12 |
| 10 | Cassie Campbell Community Centre | 5350576.53 | **1** | 5 | 1 | 2 | B-01B |

- **Hero (Malton) = HVI quintile 5, PHDZ M-04, CT 5350530.01 — confirmed and defensible on the project's existing basis.** No re-geocode or basis change required.
- **Gore Meadows = quintile 2** (note its sensitivity sub-quintile is 5) — demotion from provisional hero is correct.
- Belt-and-suspenders for judges: re-open the query URLs in a browser for raw JSON (no login). Spot-check any pin visually near a tract boundary (none flagged).

### Corrections to apply (the only real "fixes")
- **C1 — GridExchange:** never claim a Peel/Mississauga/Brampton deployment (see A3). Where a transactive-market precedent is wanted, frame GridExchange as a GGH template.
- **C2 — Lighthouse:** "79" = citywide inventory; "39" = signed partners; it's emergency-refuge/cooling, not solar (see A2). Fix in `sanctuary/docs/sanctuary-future-vision.md`.
- **C3 — Tax credits:** fill `[source needed]` placeholders in `sanctuary-future-vision.md` with verified facts; community (tax-exempt) buildings access the **15% CEITC**, not the **30% CTITC** (see A4).
- **C4 — Walkshed:** keep 500 m buffers labelled "modelled"; optionally add one Malton network walkshed.

---

## Part C — Showcase website design direction

### C1. The signature move (the one pattern-break)
**A scroll-pinned Peel map that *performs the decision*.** Map locks to screen; scrolling drives: risk (HVI heat-glow) → shelter gap (sparse official dots) → candidates appear (10 pins + catchment rings) → **"deal the five"** (#5→#4→#3→#2→#1 scale-pop in sequence, others recede) → zoom to Malton (honesty panel slides in, score bars fill, score counts up). Then unpin → editorial sections = the "proof/appendix." This is the NYT/Pudding editorial-data register, demo-safe (IntersectionObserver + CSS transforms over static GeoJSON), with a unique twist (dealing out five *named* buildings with honesty tags).

### C2. Hero
Giant display **"5"** + verb **"harden"** ("Before the next heat wave / 5 / buildings Peel should harden first"). Lead with the number + Malton, never vague copy.

### C3. Type / color / spacing / motion
- **Type:** Fraunces (variable serif) for display + the "5"; quiet sans body; **mono for ALL data** (scores, HVI, weights, ranks, addresses, honesty tags); `font-variant-numeric: tabular-nums` everywhere a number aligns/changes; never change font-weight on hover.
- **Color:** keep the heat palette but make it semantic — ember = **signal only** (CTA, selected pin/row, the "5", eyebrow), never decorative; keep `HVI_COLORS` ramp; hairlines (0.5–1px) not heavy boxes; concentric radii 8/12/16; section rhythm 96–128px.
- **Honesty labels** (verified/modelled/pending) → first-class evidence key (icon+text, never color-only) across legend + detail panel + a persistent indicator.
- **Motion** (purposeful, `useReducedMotion`-guarded, transform/opacity only): scroll-step transitions, staggered "deal the five", count-up, bar fill, selection blink, entrance reveals. Reduced-motion → full story static.

### C4. Anti-slop firewall (DO NOT)
Kill the gradient-clip wordmark + all decorative gradient-filled cards (`.mission-card`, `.story-block`, `.phase-card`, `.timeline-step`, `.indicator-card`). No purple/blue gradients, no Inter-as-display, no centered-tagline+2-buttons hero, no 3-col emoji feature grid, no uniform-card monotony, no color-only meaning, no `transition: all`, no animating width/top/left, no autoplay/parallax, no beams/aurora/confetti, no WebGL gimmicks. ONE signature move, not three. Never sacrifice the honesty labels for visual drama.

### C5. References (steal-from)
| Reference | URL | Steal |
|---|---|---|
| NYT redlining × urban heat | storybench.org/how-the-new-york-times-visualized-racist-historical-redlining-and-urban-heat/ | the scroll-reveal narrative arc; named anchor place |
| The Pudding — sticky scrollytelling | pudding.cool/process/scrollytelling-sticky/ | the sticky-map + step-trigger technique |
| Vercel Web Interface Guidelines | vercel.com/design/guidelines | the craft/a11y checklist to run the whole site against |
| Rauno / Devouring Details | rauno.me/craft/interaction-design | micro-interaction taste (blink-then-settle, no weight-on-hover) |
| Mantlr — premium UI (Stripe/Linear/Vercel) | mantlr.com/blog/stripe-linear-vercel-premium-ui | "premium = considered"; 96–128px rhythm; hairlines; ≤6 type sizes |
| 925studios — AI-slop guide | 925studios.co/blog/ai-slop-web-design-guide | the DO-NOT list (gradients, uniform cards, vague heroes) |
| Pangram Pangram — editorial pairings | pangrampangram.com/blogs/journal/pairings-editorial-new | serif-display × mono-data pairing |
| Muzli — free variable fonts 2026 | muz.li/blog/best-free-variable-fonts-for-ui-and-web-design-2026/ | the self-hostable OFL font shortlist |
| Awwwards data-viz gallery | awwwards.com/websites/data-visualization/ | calibrate current award-tier motion/layout |

---

## Part D — Stack, skills & tooling decisions

| Question | Decision | Why / runner-up |
|---|---|---|
| Map rendering | **Keep hand-rolled d3-geo SVG** | Token-free, offline, SSR-trivial, demo-safe, already animatable with CSS vars. Runner-up MapLibre GL adds 210–750KB + WebGL init risk + a basemap token/PMTiles. |
| Animation | **`motion@12.40.0`** via LazyMotion + `m` + `domAnimation` (~4.6KB), `useReducedMotion` | Declarative, React-first, tiny, RSC-aware with "use client". Runner-up GSAP only wins at 60+ elements; the local `gsap` skill defers ScrollTrigger to an uninstalled `gsap-advanced`. |
| Component registries | **Pull almost nothing; hand-build on existing CSS** | aceternity/Magic UI require Tailwind (not installed) AND read as AI-slop (beams/aurora/confetti). Mine shadcn/aceternity for *ideas* only. |
| Custom skill | **No** — use a `sanctuary/web/CLAUDE.md` | One-off hackathon site; skill-creator overhead doesn't repay. |
| Perf | RSC server shell + one client map island; `next/font`; lazy ArcGIS iframe; transform/opacity-only | Target Lighthouse Perf 95+/A11y 100 desktop, 90+ mobile. Verify with `lighthouse` MCP. |
| Deploy | **Vercel as clickable backup**, pre-recording | Live URL is high-signal, low-cost; local recording is the real safety net. (Staged decision.) |

**Skills to invoke (in order):** `design-check` → `impeccable` (craft) → `web-design-guidelines` → `vercel-react-best-practices` + `vercel-composition-patterns` → `stop-slop`/`ghost` → `design-polish` → `lighthouse` (MCP) → `deploy-to-vercel`.

**One dependency:** `motion@12.40.0`. **Fonts (self-host via `next/font/local` in `app/fonts/`):** Fraunces (variable) + a mono (Space Mono / JetBrains Mono). **Do NOT add:** maplibre-gl, react-map-gl, deck.gl, react-simple-maps, gsap, tailwindcss, aceternity/magicui.

---

## Part E — Source bibliography (consolidated)

**Peel HVI / Peel PH:** services6 EHVI FeatureServer (verified) · arcgis.com item 83b829a8b497476b87c3d954869c02d2 · peelregion.ca/about/climate-change/climate-change-health · publichealthontario.ca PHO Rounds 2025-11-26
**Resilience hubs:** changingclimate.ca/map/brampton-lighthouse-project/ · brampton.ca Lighthouse FAQ · usdn.org resiliencehubs 2018 + resilience-hub.org tech guide · faithcommongood.org (solar-in-faith-communities, extreme-weather-resilience) · onlinelibrary.wiley.com/doi/10.1111/risa.14341 · toronto.ca ResilientTO
**Alectra:** globenewswire 2025-06-13 ESG/GRE&T · alectrasolutions.com/distributed-energy-solutions · newswire.ca GridExchange launch
**Funding:** canada.ca clean-electricity-investment-tax-credit + clean-technology-itc · natural-resources.canada.ca/climate-change/sreps · Torys Q2-2026; BLG; Gowling WLG ITC analyses
**Heat facts:** cbc.ca heat-warning Jun-2025 (35.8 °C Pearson) · toronto.ca ResilientTO (heat-day trajectory) · thepointer.com 2025-08-09 (ED visits) · canada.ca ECCC 2026 hottest-year forecast
**ArcGIS build:** esri.com how-to-choose-the-right-web-app · esri.com multi-app StoryMaps · pro.arcgis.com service-area · learn.arcgis.com climate-resilience-index + equity-plan · resources.esri.ca Living Atlas Canada (CIMD)
**Design/UX:** storybench.org NYT redlining-heat · pudding.cool/process/scrollytelling-sticky · vercel.com/design/guidelines (+ github vercel-labs/web-interface-guidelines) · rauno.me/craft/interaction-design · devouringdetails.com · mantlr.com/blog/stripe-linear-vercel-premium-ui · 925studios.co/blog/ai-slop-web-design-guide · pangrampangram.com editorial pairings · muz.li best free variable fonts 2026 · awwwards.com/websites/data-visualization · climatecentral.org urban-heat-islands-2024 · w3.org WCAG 2.3.3 animation-from-interactions
**Stack:** nextjs.org lazy-loading + perf guides · motion.dev (reduce-bundle-size, gsap-vs-motion) · blog.logrocket.com best-react-animation-libraries-2026 · visgl.github.io/react-map-gl · maplibre.org docs · deck.gl docs

*End of dossier.*
