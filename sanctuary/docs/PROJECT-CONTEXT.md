# Sanctuary — Complete Project Context & Brief

**The single source of truth for Project Sanctuary.** Read this to understand the project cold — concept, data, scoring, code, and everything in between. Built for the Synergy team's finale prep, May 30, 2026.

**Companion docs:** [`JUDGE-FAQ.md`](JUDGE-FAQ.md) (every judge question, answered) · [`team-brief.md`](team-brief.md) (2-minute cheat sheet) · [`methods-note.md`](methods-note.md) · [`sources.md`](../data/sources.md) · [`multi-hazard-talking-points.md`](../../docs/multi-hazard-talking-points.md) · scope in [`.hackathon/scope.md`](../../.hackathon/scope.md).

---

## 0. The 60-second orientation

| | |
|---|---|
| **Project** | **Sanctuary** — by team Synergy |
| **One sentence** | Sanctuary ranks trusted Peel buildings — libraries, recreation centres, gurdwaras, mosques, mandirs, churches — as candidate solar-and-battery resilience hubs, so planners know which to harden first before the next heat wave or outage. |
| **The decision it answers** | *"If Peel can harden only five trusted buildings first, which five should be investigated first?"* |
| **Hero building** | **Malton Community Centre and Library**, 3540 Morning Star Drive, Mississauga — HVI quintile 5 (verified). |
| **The memorable line** | *"The safest building isn't the nearest building — it's the one people already trust, inside the heat-risk zone."* |
| **Event** | Seneca Energy Hackathon 2026 ("The Energy to Innovate") · **Theme 3, Problem Statement 2** |
| **Status** | **Finalist.** Live demo May 30, 2026, HELIX Main Stage, Seneca Newnham (1750 Finch Ave East, Toronto). |
| **Judged artifact** | An **ArcGIS StoryMap + web map** (demoed in a 5-min video). The Next.js site is a support showcase + clickable backup. |
| **Live support site** | https://project-sanctuary-seneca.vercel.app |
| **The moat** | Radical honesty. Every number is **verified**, **modelled**, or **pending** — on screen. The rubric says "AI slop disqualifies"; our discipline is the differentiator. |

---

## 1. Event, theme, rubric, sponsors, team

### The event
- **Seneca Energy Hackathon 2026**, theme "The Energy to Innovate" (energy / sustainability). Seneca College internal event.
- **Format:** hybrid. Qualifier video due May 26 → finalists revealed May 28 → **in-person finale May 30**.
- **Phase 1 (virtual build):** May 24–28. **Phase 2 (in-person):** May 29–30, finale at HELIX, Newnham Campus.
- **Contact:** hackathon@senecapolytechnic.ca.

### Theme 3, Problem Statement 2 (our fit)
Climate resilience, vulnerable populations, and shelter access. The official problem shape:
- heatwaves and flooding disproportionately affect vulnerable populations;
- communities rely on libraries, schools, and community centres as safe shelter spaces;
- utilities and municipalities need ways to visualize where climate risks and limited shelter access overlap.

Sanctuary extends it: add **trusted community buildings** and **distributed-energy (DER) hardening potential**, and rank which to verify first.

### Judging rubric — 5 axes, 20% each (confirmed at kickoff)
1. **Innovation / Creativity** — the public-good inversion; honesty as a feature; the no-fake-winter-map flex.
2. **Impact / Relevance** — a real Peel planning decision, real vulnerable populations, real precedents.
3. **Technical Execution** — verified GIS spine, transparent scoring, offline-safe build, AI no-overclaim gate.
4. **Presentation / Communication** — the scroll-pinned "deal the five" reveal, the honesty panel, the proper nouns.
5. **Collaboration / Teamwork** — name all five members and their roles on screen and on stage.

### Sponsors (and our fit)
- **Esri Canada** (GIS / ArcGIS, heavily mentored) → our map *is* the sponsor-track fit. StoryMap + web map over Peel's real HVI feature service.
- **Alectra GRE&T Centre** (Peel + Greater Golden Horseshoe grid innovation; community resilience, DER hardening) → Sanctuary is a community-energy siting layer for exactly this.
- **No mandated tech.** Real data is required — *"AI slop in any form will disqualify."*

### The team (name everyone — Collaboration = 20%)
| Member | Role |
|---|---|
| **Cynthia Salazar** | Programmer / Marketing |
| **Jackson Li** | Project Manager / Engineer |
| **Roger Lungsee** | Automation Engineer |
| **Jhonatan** | Programmer |
| **Leo Atienza** | Researcher / Build (Claude power user) |

Work split into three tracks: **GIS & data**, **narrative & design (StoryMap)**, and **verification** (a dedicated skeptic whose job was to challenge every claim). Make sure each person can speak to their piece live.

---

## 2. The product

### What it is
A map and StoryMap concept for Peel Region that finds trusted community buildings that could become resilience hubs during heat waves, floods, or outages — and ranks which to harden first. It is a **decision-support artifact and StoryMap**, not a consumer app and not an installed microgrid.

### The problem, sharpened
Theme 3 says not every community experiences energy and climate risk the same way. Our sharp version:
> **The people most exposed to heat and outages are often not within easy reach of a reliable, cool, powered place.**

Existing tools show official cooling centres. Sanctuary asks a different question: **which trusted buildings should become the next safe places?**

### The pattern-break (locked archetype)
- **Primary: Public-Good Frame.** Municipal- and utility-facing; a public siting decision, not a consumer gadget.
- **Reinforcing: Local-Detail.** Proper nouns, addresses, one real hero building — memorable.
- **The non-default move:** stop routing vulnerable people *to* the official cooling network; start asking which trusted buildings should *become* the network.

### Who uses it (by stage)
- **Now (planners):** Region of Peel climate office, Regional Emergency Management, Alectra community-energy planners, emergency-management teams → decide which buildings to verify and harden first.
- **Later (residents):** a public app, **only after** sites are verified — find the nearest open, equipped, trusted safe place during an event. **Not** the current product.

### One-liners (pick the register)
- **20-sec:** see [§0](#0-the-60-second-orientation) memorable line + the decision question.
- **Pitch one-liner:** "Sanctuary ranks trusted Peel buildings that should be hardened first into safe, powered gathering places before the next heat wave or outage."
- **"Describe it 2 hours later" test:** "the one that picks the five trusted Peel buildings to harden before the next heat wave."

---

## 3. The demo moment (the 10 seconds judges remember)

**One sentence:** *A Peel heat-risk pocket glows red, we click a real trusted building, and the map ranks the five candidate hubs to harden first.*

### Literal script
```
0:00 — Peel Heat Vulnerability Index fills the screen. One Malton/Brampton pocket glows dark red.
         Caption: "Heat risk is not evenly distributed. Shelter access is not either."
0:02 — Click the hero: "Malton Community Centre and Library, 3540 Morning Star Drive, Mississauga."
         HVI quintile 5, PHDZ M-04.
0:05 — Side panel opens with three honesty labels:
         "Candidate hub, not currently equipped"
         "Reachable population: modelled 500 m estimate"
         "Solar/battery: planning estimate, requires site audit"
         plus HVI level, roof/hardening class, and why it ranks high.
0:08 — Five candidate hubs light up in rank order ("deal the five").
         Caption: "If Peel can harden only five buildings first, Sanctuary ranks these five."
```

### Why it lands
- **It answers a decision, not a vibe** — "which five first?" is a Monday-morning question.
- **It uses proper nouns** — judges remember Malton, Morning Star Drive, Mississauga.
- **It's honest on screen** — every risky estimate is labelled where the judge sees it.
- **It fits the sponsors** — ArcGIS does the reveal; Alectra gets a community-energy use case.

### Floor vs upgrade (demo safety)
- **Floor (must always work):** preloaded ArcGIS screenshots — HVI, hero click, panel, ranked five.
- **Upgrade:** live StoryMap/web-map interaction, recorded cleanly; or drive the same sequence from the Next.js site.
- **The judged deliverable is a pre-recorded video** — live interaction is an upgrade, never a dependency.

---

## 4. The data spine

> **Golden rule:** every on-screen number is **verified** (linked to a public source), **modelled** (a labelled planning estimate), or **pending** (needs a site audit). No exceptions. The full provenance sheet is [`data/sources.md`](../data/sources.md).

### The map layers (all static GeoJSON, loaded at build)
| Layer | File | Records | Origin | Status |
|---|---|---|---|---|
| Heat-vulnerability choropleth | `peel-hvi.geojson` | **282 census tracts** | Export of Peel's public Extreme Heat Vulnerability Index feature service (quintile + exposure/sensitivity/adaptive-capacity sub-scores). Re-verified live 2026-05-26. | verified |
| Flood risk (TRCA regulated floodplain) | `peel-flood.geojson` | **295 polygons** | TRCA "Flood and Heat Vulnerable Areas in Peel," layer 6 — riverine regulatory floodplain (greater of Hurricane Hazel regional storm or 100-year flood) for Humber, Etobicoke Creek, Mimico Creek. **Not** storm-sewer flooding. | verified |
| Winter / energy-burden vulnerability | `peel-winter-vuln.geojson` | **282 census tracts** | 2021 Ontario Marginalization Index (ON-Marg) **Material Resources** quintile per tract, joined to the HVI geography. An affordability proxy — deliberately **not** a fabricated cold-temperature index. | modelled |
| Peel outline | `peel-fsa.geojson` | **35 forward sortation areas** | StatCan 2021 Census FSA boundary file (92-179-X), reprojected to WGS84. | verified |
| Public facilities (shelter gap) | `peel-facilities.geojson` | **87 facility points** | StatCan Open Database of Recreational and Sport Facilities (ODRSF): arenas, community centres, pools across Mississauga, Brampton, Caledon. | verified |
| Candidate hubs | `candidate-hubs.geojson` | **10 hand-verified buildings** | Names/addresses from official municipal/library/faith-org pages, geocoded with the ArcGIS World Geocoder, point-queried against the Peel HVI service for quintiles, CTUID, PHDZ. | verified |

### The 10 candidate buildings (the dataset)
Ranked by the **hand-verified, heat-led** `rank_seed`. HVI = overall Heat Vulnerability Index quintile (1 = lowest, 5 = highest). The "score" is the transparency breakdown the detail panel shows (see [§5](#5-the-scoring-model)).

| Rank | Building | Municipality | HVI | Exp / Sens / Adapt | Type | Trust | Roof / Facility | Score | Flood (TRCA) | Winter (MR q) |
|---|---|---|:--:|:--:|---|---|---|:--:|---|:--:|
| 1 | **Malton Community Centre and Library** | Mississauga | **5** | 4 / 2 / 5 | Community centre + library | Civic | large / high | **91** | ~50 m from floodplain | 5 |
| 2 | Sri Guru Singh Sabha Malton | Mississauga | **5** | 5 / 4 / 5 | Place of worship | Faith/community | medium / medium | 84 | ~30 m | 5 |
| 3 | Susan Fennell Sportsplex | Brampton | **5** | 3 / 2 / 5 | Community centre | Civic | large / high | 88 | not mapped (Credit watershed) | 4 |
| 4 | Anjuman-E-Anwarul Islam of Malton (Malton Masjid) | Mississauga | 4 | 3 / 1 / 5 | Place of worship | Faith/community | medium / medium | 65 | ~40 m | 4 |
| 5 | Bharat Mata Mandir | Brampton | 3 | 5 / 1 / 3 | Place of worship | Faith/community | medium / medium | 64 | ~280 m | 4 |
| 6 | Chinguacousy Wellness Centre | Brampton | 3 | 5 / 2 / 2 | Community centre | Civic | large / high | 80 | outside floodplain | 4 |
| 7 | Hindu Sabha Temple | Brampton | 2 | 5 / 2 / 1 | Place of worship | Faith/community | large / medium | 63 | ~190 m | 4 |
| 8 | Gore Meadows Community Centre and Library | Brampton | 2 | 2 / 5 / 2 | Community centre + library | Civic | large / high | 70 | ~70 m | 3 |
| 9 | Guru Nanak Darbar Gurdwara | Brampton | 1 | 3 / 2 / 1 | Place of worship | Faith/community | large / medium | 50 | ~50 m | 4 |
| 10 | Cassie Campbell Community Centre | Brampton | 1 | 5 / 1 / 2 | Community centre | Civic | large / high | 64 | not mapped (Credit watershed) | 3 |

*(Scores above are computed directly from the shipped `scoreHub()` logic in `lib/hubs.ts` — click any pin on the live map to confirm. They are a transparency aid, not the ranking; see §5.)*

### The hero, in detail — Malton Community Centre and Library
- **Address:** 3540 Morning Star Drive, Mississauga (verified, Mississauga civic facility page).
- **HVI quintile 5** (`Index_Qnt=5`) — Peel's most heat-vulnerable fifth. **Verified** against the public feature service, re-checked 2026-05-26.
- **PHDZ M-04**, **CTUID 5350530.01** (verified).
- **Census-tract population:** 5,217 (2021 census, **verified**).
- **Reachable population:** **~5,900 modelled** — sum of the 2021 populations of the 7 dissemination areas whose StatCan representative point falls inside the 500 m circle (sensitivity ~4,500–5,900 depending on DA-centre definition). Cross-checked against two independent StatCan-derived sources.
- **Prototype status:** candidate hub, **not equipped** (pending). **Next step:** site audit required (pending).
- **Why the hero:** real named civic building, top heat quintile, community-centre-*and*-library so the public role is instantly legible, and a public-first hero is safer/clearer than opening on a faith site.

### The Gore Meadows story (a credibility asset)
Our first instinct for the hero was **Gore Meadows Community Centre and Library**. When point-queried against the HVI service it came back **quintile 2** — not top-risk. Malton came back **quintile 5**. We changed the hero **based on the evidence** and kept Gore Meadows as an honest contrast candidate. *"We changed the hero after checking the layer"* is a strong honesty beat.

### What's verified / modelled / pending (say this structure out loud)
- **Verified:** the HVI layer + all quintiles and sub-scores, building names and addresses, CTUID/PHDZ, source links, Malton's tract population, flood geometry, funding program *rates*.
- **Modelled:** the 500 m catchment (Malton ~5,900; others pending), roof/hardening class, facility suitability, the 5 scoring weights, the winter ON-Marg proxy.
- **Pending:** backup power (all 10), cooling capacity, electrical readiness, owner agreement, solar/battery sizing, real walksheds.

---

## 5. The scoring model

### The weights (frozen — `scoring-notes.md` + `methods-note.md` + `lib/hubs.ts`)
```
hub_score (0–100) =
  35%  heat vulnerability nearby        (verified — HVI quintile)
+ 25%  vulnerable population in catchment (modelled — proxy now; real catchment population pending)
+ 20%  trust / community role           (verified — civic vs faith/community anchor)
+ 10%  rooftop hardening potential      (modelled — small/medium/large)
+ 10%  facility suitability             (modelled — low/medium/high)
```

### How each factor is computed (the exact logic)
- **Heat (35%):** `hvi / 5`. (Malton: 5/5 = 1.0 → 35 pts.)
- **Population (25%):** proxied as `(exposure/5)×0.6 + (sensitivity/5)×0.4` and tagged **modelled** (a planning proxy); the real catchment population stays **pending** a walkshed. The panel shows this honestly rather than hiding it (matches the Method page and the map breakdown tag).
- **Trust (20%):** civic anchor = 1.0, faith/community anchor = 0.7.
- **Roof (10%):** large = 1.0, medium = 0.6, small = 0.3.
- **Facility (10%):** high = 1.0, medium = 0.6, low = 0.3.

Score = Σ(fraction × weight), rounded. **Malton = 91/100** (35 + 16 + 20 + 10 + 10).

### Rank vs score — the critical distinction (a sharp judge will probe this)
- The **displayed rank is the hand-verified `rank_seed`** — a human ranking, **heat-led**. It is *not* a machine sort of the score.
- The **0–100 score is a transparency aid** — it shows *how the five factors stack up*, not a black box that overrides judgment.
- **They don't perfectly co-vary, by design.** Example: rank 3 (Susan Fennell, 88) scores higher than rank 2 (Sri Guru Singh Sabha, 84); rank 6 (Chinguacousy, 80) scores higher than rank 5 (Bharat Mata Mandir, 64). Why? The hand-rank **leads with heat exposure** (our one fully-verified, tract-resolved hazard) and applies discipline: we don't let a big recreation centre in a cooler tract leapfrog a building inside the hottest HVI pocket, and we don't over-rank on a population proxy that's still modelled.
- **The honest meta-point:** a first-pass score is a *screen, not a verdict*. Where raw score and heat-led rank disagree, that's exactly the point a **site audit reranks with verified data**. See the [JUDGE-FAQ](JUDGE-FAQ.md) §D for the spoken answer.

### Ranking discipline (from `scoring-notes.md`)
- A candidate can't be top-five from an unverifiable estimate alone.
- A strong community role with weak HVI proximity stays in the dataset but isn't the hero.
- Each top-five gets a one-sentence "why this one."
- Ties break toward cleaner source verification and a clearer map reveal.

---

## 6. Multi-hazard (heat / flood / winter)

Sanctuary covers the **breadth** of Problem Statement 2 — heat *and* flooding, cooling *and* warming — with **three separately-toggleable lenses** on the same map, each labelled `verified` / `modelled` / `pending`:

1. **Heat** — Peel's HVI (**verified**, the lead hazard, default on).
2. **Flood** — TRCA's regulatory floodplain (**verified** geometry; per-building proximity computed and dual-method checked; off by default).
3. **Winter / energy burden** — 2021 ON-Marg Material Resources quintile (**modelled** affordability proxy; off by default).

**Authoritative backing:** TRCA *itself* publishes a combined "Flood and Heat Vulnerable Areas in Peel" service — a real body already treats flood + heat as overlapping in Peel.

### The "no winter cold map" flex (the strongest data answer we have)
> Heat vulnerability varies block to block because of the urban heat island, so the HVI resolves it per tract. Winter cold has **no equivalent gradient** — there's no winter heat-island — so a per-tract cold-temperature index would invent an exposure axis that isn't real. Winter resilience need is driven by **energy affordability and marginalization**, which *is* real per-area data — so the winter layer maps ON-Marg's Material Resources dimension, labelled **modelled**, and heat stays the lead, verified hazard.

Knowing what you *can't* honestly measure pre-empts the sharpest data-judge question and demonstrates method literacy.

### The year-round insight (use it)
The four top-ranked **heat** candidates are *also* high on **winter** energy burden — verified, not assumed:

| Building | Heat (HVI) | Material Resources q |
|---|:--:|:--:|
| Malton Community Centre and Library | 5 | 5 |
| Sri Guru Singh Sabha Malton | 5 | 5 |
| Susan Fennell Sportsplex | 5 | 4 |
| Anjuman-E-Anwarul Islam of Malton | 4 | 4 |

So hardening these isn't a summer-only bet — **the same buildings protect the same people in a heat wave and in a cold snap.** Flagged on each card as the "year-round resilience case."

### Flood honesty guardrails
- All ten candidates sit **outside** the mapped floodplain — an honest result, not a gap.
- Two candidates (Susan Fennell, Cassie Campbell) are in the **Credit River watershed**, mapped by Credit Valley Conservation (not TRCA), so they read **"not mapped by TRCA,"** never a false "flood-safe."
- Flood = **riverine** regulatory floodplain (Hurricane Hazel / 100-year), **not** urban/storm-sewer flooding.

---

## 7. The honesty system (the credibility engine)

### The evidence vocabulary (first-class, on screen everywhere)
- **verified** — checked against a public source.
- **modelled** — a planning estimate.
- **pending** — needs a site audit.

These appear as icon + text (never colour alone) in the map legend, the detail panel, and a persistent key. The honesty labels are **sacred** — never present a modelled/estimated value as measured.

### Copy rules
- Say **"candidate hub,"** not "current hub."
- Say **"modelled 500 m estimate,"** not exact walkshed population.
- Say **"solar/battery planning estimate, requires site audit,"** not a precise kW/kWh.
- Say **"trusted community infrastructure,"** not charity/pity framing.
- Use specific proper nouns and real numbers. No corporate-comms ("leverage," "empower," "stakeholders"). No "AI-powered" as a feature.

### The no-overclaim gate (the AI-safety story)
The optional Gemini planning-checklist feature is wrapped in a hard gate (`lib/planning-assistant.ts`):
- A **zod schema** forces the exact shape (summary, *exactly 5* recommended checks, ≥1 unknown, source tags from a fixed enum, a fixed disclaimer).
- A **regex gate** (`hasPlanningOverclaim`) rejects any output containing: kW/kWh/MW/MWh, dollar/CAD/USD figures, "sizing/payback/roi/grant guaranteed," "already/currently has solar/battery/backup power/cooling," rank changes/new candidates, or "saved lives/restore power/guaranteed."
- If validation fails → it falls back to a static, human-reviewed checklist.
- **Gemini never makes the ranking.** It only drafts *what to verify next*.

### Things we will NOT submit/say (the no-overclaim list)
Do not imply: a named building is already a hub; any building currently has solar/battery/backup power/cooling/an emergency agreement; Sanctuary operates a VPP today; tax credits/grants are guaranteed; reachable population is exact when only the 500 m model is used.

---

## 8. The technical architecture (for coding questions)

### Stack
| Layer | Choice | Why |
|---|---|---|
| Judged artifact | **ArcGIS StoryMap + web map** | Esri sponsor-track fit; does the spatial reveal. |
| Support site | **Next.js 16.2.6 (Turbopack) + React 19 + TypeScript 5.7** | Premium showcase + offline-safe clickable backup. |
| Map | **Hand-rolled d3-geo SVG** | No basemap token, no WebGL, no tile server — can't break on conference wifi. |
| Animation | **`motion@12.40.0`** via `LazyMotion` + `m` + `domAnimation` (~4.6 KB) | Tiny bundle; every animation `useReducedMotion`-guarded. |
| Styling | **Hand-written CSS** in `app/globals.css` (~2,700 lines, semantic tokens) | **No Tailwind** — reads as bespoke civic craft, not generated. |
| Data | **Static GeoJSON** loaded at build via `node:fs` | Auditable, demo-safe, zero runtime fetch. |
| AI (optional) | **Gemini 2.5 Flash** via `@google/genai`, validated with **zod@4** | Offline regeneration tool only, behind the no-overclaim gate. |
| Fonts | **Fraunces** (display + the "5") + **JetBrains Mono** (all data), self-hosted via `next/font/local` | Zero CLS, no Google-Fonts call, offline-safe. |
| Hosting | **Vercel** (manual deploy) | — |

### The architecture in one paragraph
A **React Server Components shell** + **one `"use client"` island**. At **build time**, the RSC shell (`app/page.tsx`, `app/map/page.tsx`) calls `loadMapData()`, which reads the GeoJSON off disk with `node:fs` and runs the **d3-geo projection** (`lib/map.ts`) — *server-side, once*. It passes only **serialized SVG path strings + projected points** into the client island. So **d3-geo never ships to the browser**, there's **no runtime data fetch**, **no database**, **no backend**. The only live network element is the lazy-loaded ArcGIS iframe.

### Build-time data flow
```
public/*.geojson  ──(node:fs readFileSync, at build)──▶  lib/load-map-data.ts
        │                                                        │
        │                                          toHub() + scoreHub()  (lib/hubs.ts)
        │                                          projectMap() d3-geo   (lib/map.ts, server only)
        ▼                                                        ▼
   raw features                                   { mapData: path strings + points, hubs: scored }
                                                            │  passed as props
                                                            ▼
                                       ScrollStage / MapExplorer  ("use client" island)
                                                            ▼
                                                   MapStage (SVG render)
```

### The signature interaction (`MapStage.tsx` + `lib/motion.ts`)
A **scroll-pinned map that performs the decision**, driven by one `IntersectionObserver` (`useScrollSteps`, a −45%/−45% centre band — no scroll-event listeners):
1. **RISK** — HVI heat choropleth at full opacity.
2. **GAP** — official facilities fade in (the incomplete "current network").
3. **CANDIDATES** — the 10 pins + 500 m rings appear.
4. **DEAL** — #5→#1 scale-pop in sequence (`dealDelay`, an overshoot ease); the other five recede to 0.16 opacity / 0.72 scale.
5. **ZOOM** — a transform fly-to that lands Malton at the viewport centre + the honesty `DetailPanel` (score counts up to 91).

`live` (desktop ≥900px + motion-OK) gates the sticky scrollytelling. Otherwise the **same DOM reflows** into a stacked, fully-readable explore view — the reduced-motion / no-JS / mobile fallback. **The map never unmounts.** The `/map` page reuses the same `MapStage` engine but always-interactive, with a "Play the decision" tour that drives the five beats then releases control.

### Map rendering details (the clever bits)
- **W=760 × H=720** viewBox; `geoMercator().fitExtent` fits Peel into it at build.
- Coordinates rounded to 1 decimal px → roughly halves the path-string payload sent to the client.
- The **282-tract choropleth** is memoized so panning (which only changes the outer transform) doesn't re-reconcile every path.
- **Hand-rolled pan/zoom** (`map-constants.ts` `clampView`/`zoomAt`) — pointer drag, two-finger pinch, non-passive wheel — no dependency. Clamped so content can't be panned off-frame.
- **Fly-to gotcha (fixed):** `motion` owns `transform-origin` (50% 50%) on an animated scale, so the translate is computed for a **centre pivot**: `t = k·(centre − malton)`, `k=1.9`. A 0,0-origin formula stranded Malton in the corner.
- **Winter choropleth** recolours the *same* tract paths by ON-Marg quintile (non-interactive overlay), so no second polygon set ships.
- **Flood winding fix (live):** TRCA's `f=geojson` polygons are wound RFC-7946 (CCW exterior), but d3-geo reads winding *spherically* (opposite), so every polygon filled the whole sphere → a full-map blue wash. Fix: flip each polygon component when d3's `geoArea` says it encloses > a hemisphere. Both the fetch script and the committed GeoJSON were corrected.

### The Gemini route (`app/api/planning-checklist/route.ts`)
- **Runtime:** Node. **It is a local *regeneration tool*, never on the live demo path.** The UI reads the static `public/planning-checklists.json`.
- **Double-gated:** the live model call runs only if **both** `GEMINI_API_KEY` *and* `PLANNING_CHECKLIST_REGEN=1` are set. Otherwise it returns the free static fallback — so a stray key in prod can't burn quota or expose an open billable endpoint.
- Flow: POST a candidate → `buildPlanningPrompt` (public facts only, lists the allowed enum tags verbatim) → Gemini (temp 0.2, JSON mime) → `validatePlanningChecklist` (zod + no-overclaim regex) → commit the reviewed JSON. On any failure → static fallback.

### Routes & pages (6)
| Route | File | What it is |
|---|---|---|
| `/` | `app/page.tsx` | **Overview** — Hero (giant "5" + "harden") + Problem + the scroll-pinned "deal the five" + read-on cards. |
| `/map` | `app/map/page.tsx` | Full-bleed, always-interactive HVI map + side rail (DetailPanel + RankedList + "Play the decision"). |
| `/method` | `app/method/page.tsx` | The 35/25/20/10/10 model + what's verified/modelled/pending + the winter-method note. |
| `/vision` | `app/vision/page.tsx` | The honest roadmap (future phases). |
| `/funding` | `app/funding/page.tsx` | The capital stack + "how it works" + the operating model. |
| `/sources` | `app/sources/page.tsx` | Every claim linked to a public source + honesty key + tech stack. |

### Key files (where to change things)
- **All on-screen copy + numbers:** `lib/content.ts` — change words/figures *here*, not in components.
- **Hub data model + scoring:** `lib/hubs.ts` (`toHub`, `scoreHub`, `HVI_COLORS`, `WINTER_COLORS`).
- **Projection / fly-to math:** `lib/map.ts` (server only). **d3-free constants + pan/zoom:** `lib/map-constants.ts`.
- **Build-time load:** `lib/load-map-data.ts`. **Scroll state machine:** `lib/motion.ts` + `hooks/useScrollSteps.ts`.
- **The map:** `components/MapStage.tsx`; islands `ScrollStage.tsx` (home) and `MapExplorer.tsx` (`/map`).
- **The honesty panel:** `components/DetailPanel.tsx`. **Legend:** `MapLegend.tsx`. **Controls:** `MapControls.tsx`.
- **AI gate:** `lib/planning-assistant.ts` + `app/api/planning-checklist/route.ts`.
- **Styles — ONE file:** `app/globals.css`. **Icons:** `components/icons/` (local inline Phosphor SVGs, zero runtime dep).

### Build, deploy, verify
- **Dev:** `cd sanctuary/web && npm run dev` (`:3000`). **Build:** `npm run build` (must stay green; needs no network). **No tests** — by design (hackathon).
- **Deploy is MANUAL:** `cd sanctuary/web && vercel deploy --prod --yes`. **A `git push` does NOT update the live site** — there's no Git auto-deploy, and env-var changes need a redeploy. Vercel project "sanctuary," root `sanctuary/web`.
- **Always ship-verify:** `curl` all 6 routes for HTTP 200 + grep a new-code token in the deployed HTML. Never trust an "up to date" message.
- **Live:** https://project-sanctuary-seneca.vercel.app (alias `sanctuary-phi.vercel.app` 307-redirects here).

### Performance & accessibility (verified)
Desktop Lighthouse **Perf 100 / A11y 100 / SEO 100 / Best-Practices 96** (unthrottled); **0 axe violations**; LCP 2.4s, CLS 0. The whole story renders with reduced motion or JS off. Accessibility matters extra here — the project is about people who get left behind.

---

## 9. Evidence & precedents (every number sourced)

| Fact | Number | Source |
|---|---|---|
| Heat at Pearson, ~5 km from Malton | **35.8 °C**, June 23, 2025 | CBC (GTA heat warning) |
| Toronto-area extreme-heat days | **~8/yr (1950s) → ~18 now → 54 by 2060s** | City of Toronto · ResilientTO |
| Brampton Lighthouse Project | **79 registered places of worship, 39 signed partners** — an emergency-refuge network (NOT solar) | Canada in a Changing Climate |
| USDN resilience hub | **5 functions:** power, communications, facilities, operations, services | USDN Resilience Hubs (2018) |
| Faith buildings on solar | **137 Ontario faith institutions** | Faith & Common Good |
| May 2022 derecho | Ottawa opened rec/community facilities as reception points (**~400 km east of Peel** — honest geography) | Ottawa Citizen |
| Peel warming centres | Peel/Mississauga do **not** run designated seasonal warming centres; public facilities open during regular hours | Mississauga.com |
| Alectra GridExchange | Ran in **Vaughan, Markham, Barrie, Richmond Hill, Hamilton** — **NOT Peel**; a GGH template | Alectra / Newswire |

### The two counterfactuals (framed as planning thought experiments, not impact claims)
1. **A 35.8 °C day at Pearson (June 2025):** had Sanctuary existed, planners would already hold a five-building pre-verify list, Malton at #1. *Temperature/date/place verified; Sanctuary effect hypothetical.*
2. **The May 2022 derecho (Ottawa):** had the ranking existed across Alectra's territory, "which civic buildings do we prepare first?" would already have an answer. *Event verified; Ottawa, not Peel; Sanctuary effect hypothetical.*

---

## 10. Funding (the "who pays" story — `/funding`)

We surface program **rates** (percentages), never modelled dollar totals — sizing stays pending until a site audit.

| Program | Rate | Status | Note |
|---|---|---|---|
| **Clean Electricity ITC (CEITC)** | **15%** | In force since March 2026 | **The anchor** — the only federal clean-energy credit a tax-exempt public owner can actually reach (refundable). |
| Clean Technology ITC (CTITC) | 30% | Taxable corporations only | A library/gurdwara/municipal centre is tax-exempt → **can't claim it directly**. This is why 15% CEITC, not 30%, is the lever. |
| FCM Green Municipal Fund (Community Buildings Retrofit) | up to 80% | Open, year-round | Federal grant + loan for community-building retrofits; needs a measured emissions reduction. |
| IESO Save on Energy (Retrofit) | up to 50% | Open 2025–2027 | Covers up to half an eligible retrofit, including behind-the-meter solar. |

**Honesty caveat (named, not counted):** NRCan's Smart Renewables and Electrification Pathways main streams aren't taking new proposals; the Disaster Mitigation and Adaptation Fund is fully allocated. An honest plan tracks both for the next round.

**Operating model (future):** on blue-sky days, aggregated hub solar + batteries shave peak demand and join Ontario's demand-response/capacity markets as DERs; on outage days, the battery islands the building to keep cooling, charging, and information running. A municipal/utility partner operates it; Alectra's GridExchange (run elsewhere in the GGH) is the kind of template Peel could adopt. **No building here runs this today.**

---

## 11. The roadmap (the honest future — `/vision`)

1. **Real access modelling** — replace 500 m circles with multimodal walksheds (sidewalks, transit, barriers, slope).
2. **Audit and verify** — owners, cooling, accessibility, roof, backup power, electrical readiness — then rerank with audited data.
3. **Resident guidance, later** — only after verification, a public view of open, equipped, trusted hubs with live status and routing.
4. **Scale across hazards & territory** — deepen heat/flood/winter with building-level data; repeat the method across Alectra's service area.
- **Phase-2 layer:** schools (Peel DSB 250+, Dufferin-Peel Catholic 152) via Ontario's Community Use of Schools program — each needs a board-level agreement first.

---

## 12. Key sources (for "where did X come from")

- **Peel HVI feature service:** `https://services6.arcgis.com/ONZht79c8QWuX759/arcgis/rest/services/Extreme_Heat_Vulnerability_Index/FeatureServer/0` (public, no token; layer `hvi_ct2021`, 2021 census tracts).
- **Peel HVI source item:** `https://www.arcgis.com/home/item.html?id=83b829a8b497476b87c3d954869c02d2` · **HVI web map:** `id=d1adca8a3b1e403483e608040734c07a`.
- **TRCA flood (layer 6):** `https://maps.trca.ca/hostingserver/rest/services/Hosted/Flood_and_Heat_Vulnerable_Areas_in_Peel_WFL1/FeatureServer/6`.
- **ON-Marg 2021:** Public Health Ontario + St. Michael's Hospital (StatCan 2021 Census) — Material Resources quintile.
- **StatCan:** FSA boundaries (92-179-X); 2021 dissemination-area population; ODRSF facilities.
- **Service vs CSV field names:** `Index_Qnt`→hvi, `Exposure_Qnt`→exposure, `Sensitivity_Qnt`→sensitivity, `Adaptivity_Qnt`→adaptive capacity (note Peel's "Adaptivity" spelling), `CTUID`→ctuid, `PHDZ`→phdz.
- **HVI quintile semantics:** 1 = lowest relative risk, 5 = highest. (Our site palette intentionally differs from Peel's official teal→orange ramp; it's heat-anchored slate→ember, a locked design choice.)

Full provenance: [`data/sources.md`](../data/sources.md). Data notes: [`peel-flood-data-note.md`](../../docs/peel-flood-data-note.md), [`peel-winter-vuln-data-note.md`](../../docs/peel-winter-vuln-data-note.md), [`malton-catchment-data-note.md`](../../docs/malton-catchment-data-note.md).

---

## 13. Glossary

- **HVI (Heat Vulnerability Index):** Peel Public Health's per-census-tract heat-risk score, grouped into quintiles 1–5 (5 = most vulnerable). Combines exposure, sensitivity, adaptive capacity.
- **Quintile:** a fifth. HVI quintile 5 = the most heat-vulnerable fifth of tracts.
- **Exposure / Sensitivity / Adaptive capacity:** the three HVI sub-scores — how much heat stress; how strongly it affects people there; how easily they can cope/get help.
- **Candidate hub:** a building worth checking first. **Not** confirmed ready, equipped, funded, or signed on.
- **Resilience hub:** a trusted place that supports people before/during/after an emergency (cooling, warmth, charging, info, washrooms, water).
- **Hardening:** upgrading a building to work better in heat/outage events (electrical, cooling, solar, storage, staffing, agreements).
- **500 m catchment:** a simple circle estimating nearby reach. **Not** a real walking route.
- **Walkshed:** a real access model using streets, paths, transit, and barriers.
- **DER (distributed energy resource):** behind-the-meter solar + battery that can support the grid and island a building during an outage.
- **CTUID / PHDZ:** census-tract ID / Peel public-health data zone.
- **ON-Marg:** Ontario Marginalization Index (2021). We use its Material Resources dimension as the winter/energy-burden proxy.
- **ODRSF:** StatCan's Open Database of Recreational and Sport Facilities.
- **CEITC / CTITC:** Clean Electricity ITC (15%, reaches tax-exempt owners) / Clean Technology ITC (30%, taxable corporations only).
- **TRCA / CVC:** Toronto and Region Conservation Authority / Credit Valley Conservation (maps the Credit River watershed in west Peel).
- **StoryMap / web map:** the narrative ArcGIS page / the interactive ArcGIS map — the judged artifact.

---

## 14. Artifacts & links

| Thing | Link / path |
|---|---|
| **Live support site** | https://project-sanctuary-seneca.vercel.app |
| **ArcGIS web map (build)** | `https://senecatechnology.maps.arcgis.com/apps/mapviewer/index.html?webmap=17951a55fae44a83a330101433dda67a` |
| **StoryMap** | the narrative wrapper over the web map (the recorded deliverable) |
| **GitHub repo (private)** | https://github.com/Leo-Atienza/Synergy-v2.0 |
| **Candidate data** | `sanctuary/data/candidate-hubs.csv` + `.geojson` |
| **Methods note** | `sanctuary/docs/methods-note.md` |
| **Judge FAQ** | `sanctuary/docs/JUDGE-FAQ.md` |
| **Video script** | `sanctuary/docs/video-script.md` · **StoryMap script:** `sanctuary/docs/storymap-script.md` |
| **Scope lock** | `.hackathon/scope.md` · **Pre-mortem:** `.hackathon/pre-mortem.md` |

---

## 15. The four reflexes (print this on the inside of your eyelids)

1. **Lead with the decision, not the map.** "We rank the five Peel buildings to harden first."
2. **Label honesty out loud** — *verified / modelled / pending* — before they ask.
3. **Use proper nouns** — "Malton Community Centre and Library, 3540 Morning Star Drive," HVI quintile 5.
4. **When unsure, fall back to the safe sentence:** *"This is a candidate hub and a planning estimate. It needs a site audit before anyone treats it as ready."*

**Close with:** *"Harden these five trusted buildings first — then repeat the same honest method across Alectra's service territory. That's Sanctuary."*
