---
title: Sanctuary showcase redesign + big interactive map — dev plan
date: 2026-05-26
status: FINAL (2026-05-26) — ready to execute on feat/showcase-redesign
owner: Leo (Claude CLI lead) + Cursor (parallel lane)
branch: feat/showcase-redesign (do NOT work on main)
executes: Phase 2 of ~/.claude/plans/i-want-you-to-magical-eich.md
supersedes-layout-of: the single-scroll site shipped at main 7737849
---

# Sanctuary showcase redesign + big interactive map

This executes **Phase 2** of the plan we wrote earlier (`i-want-you-to-magical-eich.md`):
turn the one-long-scroll showcase into a **navigable, multi-page site** with a **dedicated,
full-size, freely-interactive map page** as the centerpiece. Phase 1 (real HVI choropleth +
pan/zoom + tract-click) already shipped — this plan makes that interactivity *reachable and big*,
and rebuilds the site around it.

## 0. The two asks, mapped to the fix

| You said | Root cause (verified) | The fix |
|---|---|---|
| "I want to interact with the map and it's small, I can't" | The map lives only inside the scrollytelling; on desktop (`live`) **wheel-zoom is disabled** ([MapStage.tsx:130-141](../../sanctuary/web/components/MapStage.tsx)) and the map shares the screen with step text ([globals.css:580-617](../../sanctuary/web/app/globals.css)). Free pan/zoom only exists in the mobile/reduced-motion fallback. | A dedicated **`/map` page**: full-bleed, always-interactive (pan/zoom/pinch/click/keyboard), layers + legend + detail in a side rail. Reuses the existing `MapStage` engine in its `explore` mode — the interactivity is already built, it's just gated off. |
| "The whole website itself (we talked about this earlier)" | One 11-section scroll ([page.tsx:48-75](../../sanctuary/web/app/page.tsx)); no nav, map buried mid-page. | **Multi-page + top nav** (Overview · Map · Method · Vision · Sources), the "civic field report × refuge-vs-heat" identity, real Malton photography, simplified copy. Per `magical-eich` Phase 2. |

## 1. Target information architecture

Five routes, one shared shell (top nav + masthead + footer + design tokens):

| Route | Purpose | Owns the demo moment? |
|---|---|---|
| `/` **Overview** | Hero (the ember "5" + "harden"), the problem in 3 lines, and the **"deal-the-five" decision hook** (the existing scroll sequence, condensed), then CTAs into Map / Method / Vision. | Yes — the narrative hook + the #5→#1 reveal stays here. |
| `/map` **Map** | The centerpiece. Full-bleed, **always-interactive** Peel HVI map: pan/zoom/pinch, layer toggles, legend, tract-click readout, candidate select → honesty detail panel, ranked-five rail, optional **"Play the decision" guided tour**. | The *interactive proof*. |
| `/method` **Method** | How the score works (the 35/25/20/10/10 model), real-vs-estimated box, scoring discipline. | No — credibility. |
| `/vision` **Vision** | The staged future (walksheds → audits → public app → Alectra scale), honestly labelled roadmap. | No — impact/scale. |
| `/sources` **Sources** | Provenance: HVI service, ODRSF, candidate CSV, every source URL + verified/modelled/pending key. | No — anti-slop receipts. |

> Keep it to these five. Resist a sixth. The map page is the star; everything else is proof.

## 1b. Design language (researched — full spec in the design doc)

Full spec + reference URLs: [`docs/showcase-design-language.md`](../showcase-design-language.md). On-theme references found online and the patterns we adopt (original execution, no cloning):
- **Discrete quintile cells, never a smoothed blob** (Probable Futures) — the grid *is* the honesty.
- **Minimal map chrome; legend + layer-controls collapse away** (Probable Futures + your collapsible-legend ask).
- **Click a tract → read its real sub-scores** (NYC / Philadelphia HVI tools — the domain-standard interaction).
- **The map ends on a decision, not a vibe** (Truth & Beauty CCVI; Esri StoryMap winners — our sponsor's house style).
- **NICE-TO-HAVE — place lookup**: postal code / place → fly there, show the HVI quintile + nearest *candidate* hubs (First Street's address-search pattern). Only if buffer remains; honest framing (candidate hubs, not "go here now").
- Identity unchanged: civic field report, Fraunces + mono data, ember = signal only, real Malton photography, no stock.

## 2. Architecture changes (Next.js App Router)

The app is already App Router (`app/page.tsx`, `app/layout.tsx`). Changes:

1. **Shared shell** — move `Masthead` + `Footer` into `app/layout.tsx`; add a new `components/Nav.tsx` (top nav, 5 links, active state, mobile drawer). Define/confirm design tokens in `globals.css` (already semantic — reuse `--signal`, HVI ramp, hairlines, Fraunces/JetBrains Mono).
2. **Map data load is shared** — today `page.tsx:37-46` does the build-time `fs` load + `projectMap()`. Extract that into a server helper (`lib/load-map-data.ts`, server-only) so **both** `/` (condensed hook) and `/map` (full) can call it without duplicating the d3-geo work. d3-geo stays server-only (sacred).
3. **Ungate interactivity for `/map`** — `MapStage` already has full pan/zoom/pinch/wheel/tract-click in its `explore` branch. The `/map` page renders it with `live={false}` (free interaction) at full size, plus a new **tour controller** that can drive `currentStep` through RISK→GAP→CANDIDATES→DEAL→ZOOM on a button press (so the wow sequence is available *on demand*, not forced). Wheel-zoom works because `live` is false ([MapStage.tsx:134](../../sanctuary/web/components/MapStage.tsx)).
4. **Sections → pages** — the existing `components/sections/*` (Method, Honesty, Evidence, Future, Arcgis, Sources, Qa, Problem) become the bodies of the new routes. Mostly a move + a thin route wrapper; copy gets simplified.
5. **`/` Overview** keeps a condensed `ScrollStage` (the deal-the-five hook) but trimmed — it's the hook, not the whole site.

## 3. Phases, tasks, dependencies

### Phase 0 — Safety gate (do this first, non-negotiable)
- **Branch off main**: `git checkout -b feat/showcase-redesign`. **`main`/prod stays frozen** — the qualifier video may be screen-recorded from the *current* live site or ArcGIS. No prod deploy of the redesign until the video is recorded + submitted (pre-mortem F-10: no code changes after recording; red main = 0 score).
- Use **Vercel preview deploys** (`vercel deploy` — preview, NOT `--prod`) to review the redesign on a real URL without touching prod.

### Phase A — Shared shell + the Map page (Claude, ~the spine; blocks Phase B)
A1. `app/layout.tsx`: mount `Nav` + `Footer`; keep fonts/metadata.
A2. `components/Nav.tsx` (new): 5-link top nav, active route, mobile drawer, keyboard-accessible.
A3. `lib/load-map-data.ts` (new, server-only): extract the build-time load + `projectMap` from `page.tsx`.
A4. `app/map/page.tsx` (new): full-bleed layout calling `load-map-data` → renders the interactive map.
A5. `components/MapExplorer.tsx` (new client island): wraps `MapStage` in `live={false}` at full size + side rail (layers/legend/detail/ranked-five) + the **"Play the decision" tour** button (drives `currentStep`).
A5a. **Collapsible legend** — extract the inline `MapLegend` (today in [ScrollStage.tsx:161-191](../../sanctuary/web/components/ScrollStage.tsx)) into `components/MapLegend.tsx` and add an expand/collapse toggle: a header button (`aria-expanded`, keyboard-focusable) that folds the panel down to a compact "Legend" pill. Default **expanded on desktop, collapsed on mobile** (reclaims space on the full-bleed map). Height/opacity transition, `useReducedMotion`-guarded (instant when reduced). Apply the same collapsible pattern to the layer-controls panel (`MapControls.tsx`) so both map overlays fold away — the map stays the focus.
A6. `globals.css`: new `/map` full-bleed layout styles (the map fills `100svh − navh`; rail is an overlay on mobile). Additive section.
A7. `app/page.tsx`: slim Overview — hero + problem + condensed deal-the-five hook + CTAs.

### Phase B — Content pages (Claude + Cursor in parallel, after A)
- B1 `/method`, B2 `/vision`, B3 `/sources`, B4 the Malton photography + identity polish, B5 copy simplification. Split in §4.

### Phase C — Polish + verify (Claude)
- Responsive, reduced-motion, keyboard, AA contrast, JS-off; Lighthouse (Perf ≥95 / A11y 100 desktop); axe 0; no-overclaim gate; d3-geo-off-client check.

## 4. Lanes — who owns what (collision-avoidance)

Same protocol as `magical-eich`: file-level split, additive edits to shared files, rebase before push.

| Lane | Files | Notes |
|---|---|---|
| **Claude (CLI)** — architecture + map | `app/layout.tsx`, `components/Nav.tsx`, `lib/load-map-data.ts`, `app/map/page.tsx`, `components/MapExplorer.tsx`, `app/page.tsx` (Overview), map CSS in `globals.css`, `MapStage.tsx`/`MapControls.tsx`/`MapLegend.tsx` (new, collapsible)/`map-constants.ts` | The map engine + the shell are the high-risk, high-skill parts. Claude does Phase A so Cursor has routes to build into. |
| **Cursor** — content pages + assets + copy | `app/method/page.tsx`, `app/vision/page.tsx`, `app/sources/page.tsx` (new route wrappers), the `components/sections/*` bodies they render, the **Malton photography** sourcing + `<figure>`/attribution, copy simplification, page CSS sections in `globals.css` | Page-level, parallelizable, never touches the map engine. Full brief: [`docs/cursor-tasks-showcase-redesign.md`](../cursor-tasks-showcase-redesign.md). |
| **Shared (additive only)** | `globals.css` (separate sections: Claude = shell+map; Cursor = page bodies), `lib/content.ts` (different exports) | Whoever pushes second `git pull --rebase` first. |

Hard rule: **Cursor does not touch `MapStage.tsx`, `MapExplorer.tsx`, `map.ts`, `map-constants.ts`, `load-map-data.ts`, `Nav.tsx`, `layout.tsx`.** Claude does not touch the per-page content bodies Cursor is writing.

## 5. Sacred — do NOT break (any lane, any phase)
- Every on-screen number **real or labelled** `verified`/`modelled`/`pending`. HVI = real service data, sourced. Re-run the no-overclaim gate ([submission-package.md](../../sanctuary/artifacts/submission-package.md)) before any promotion.
- **No Tailwind. No MapLibre/deck.gl/Leaflet.** Hand-written CSS + the hand-rolled d3-geo SVG map. (Demo-safe, offline, no token/WebGL failure modes — the locked decisions in [sanctuary/web/CLAUDE.md](../../sanctuary/web/CLAUDE.md).)
- **d3-geo stays server-only** — client imports `map-constants.ts`, never `map.ts` (`grep -rl "geoMercator" .next/static/chunks/` → 0).
- `lib/hubs.ts` (`toHub`, `HVI_COLORS`, score) reused verbatim. ArcGIS StoryMap untouched.
- Motion via `motion@12.40.0` only, every animation `useReducedMotion`-guarded. JS-off renders a static map + readable pages.
- Honesty labels = icon + text (never colour alone), consistent across legend + detail + every page.
- **Real photography only** (Wikimedia Malton / Peel) — **no stock photos**, no solar-panel/wind-turbine clip art.

## 6. Verification gates (before any preview→prod promotion)
1. `cd sanctuary/web && npm run build` — green, no network at build.
2. `npm run dev` → Claude Preview MCP: screenshot each route; on `/map` verify pan, wheel-zoom, pinch, tract-click, candidate-select, tour, reset, and **legend collapse/expand** (mouse + keyboard).
3. d3-geo off client: `grep -rl "geoMercator" .next/static/chunks/` → 0.
4. JS-off (static map + pages render), keyboard nav, reduced-motion, AA contrast on `#0d1620`.
5. Lighthouse MCP (desktop): Perf ≥95, A11y 100, CLS < 0.1; axe 0 violations — on `/` and `/map`.
6. No-overclaim gate pass; photography licensed + attributed.

## 7. Resources (point Claude + Cursor here — don't re-derive)
- **Map engine to reuse:** [`MapStage.tsx`](../../sanctuary/web/components/MapStage.tsx) (pan/zoom/tract-click already built), [`MapControls.tsx`](../../sanctuary/web/components/MapControls.tsx), [`lib/map-constants.ts`](../../sanctuary/web/lib/map-constants.ts) (client-safe), [`lib/map.ts`](../../sanctuary/web/lib/map.ts) (server-only projection).
- **Data (offline, committed):** `public/peel-hvi.geojson`, `public/peel-facilities.geojson`, `public/candidate-hubs.geojson`, `public/peel-fsa.geojson`. Scoring + colours in [`lib/hubs.ts`](../../sanctuary/web/lib/hubs.ts).
- **Content / facts:** [`sanctuary/data/candidate-hubs.csv`](../../sanctuary/data/candidate-hubs.csv), [`sources.md`](../../sanctuary/data/sources.md), [`scoring-notes.md`](../../sanctuary/data/scoring-notes.md), [`methods-note.md`](../../sanctuary/docs/methods-note.md), [`judge-qa.md`](../../sanctuary/docs/judge-qa.md), [`team-brief.md`](../../sanctuary/docs/team-brief.md) (plain-English copy source), [`sanctuary-future-vision.md`](../../sanctuary/docs/sanctuary-future-vision.md) (Vision page source).
- **Photography (verify license on Wikimedia Commons, attribute):** "Malton Community Centre" exterior, the Morning Star Dr × Goreway Dr corner, archival Malton/Peel maps. Per `magical-eich` Phase 2. No stock.
- **Design rules:** [`docs/showcase-design-language.md`](../showcase-design-language.md) (the researched design spec + reference URLs), [`sanctuary/web/CLAUDE.md`](../../sanctuary/web/CLAUDE.md), [`docs/showcase-research-2026-05-26.md`](../showcase-research-2026-05-26.md), [`docs/showcase-assets-and-techniques.md`](../showcase-assets-and-techniques.md).
- **Free tooling (zero/low Claude tokens):** `firecrawl` MCP (scrape facility/photo pages), `local_llm_agent` (copy simplification drafts, normalise captions), Claude Preview MCP (verify), `lighthouse` MCP (audit). Skills: `frontend-design`, `web-design-guidelines`, `design-check`.

## 8. Sequencing & prod-safety (READ FIRST)
- **The qualifier video (due tonight 2026-05-26 23:59 ET) does NOT depend on this redesign.** It records from the current live site or the ArcGIS StoryMap. **This redesign targets the in-person finale (May 29–30) and a stronger showcase** — so it runs *after* tonight's recording is safely done, on a branch, with prod frozen.
- If you instead want the redesign in *tonight's* video: say so — we cut Phase B to just `/map` (the big interactive map) and skip the content-page split, and accept the risk. Otherwise the default is the safe, full version on a branch.
- Estimated effort (single + Cursor parallel): Phase A ~3–4h, Phase B ~3–4h parallel, Phase C ~2h. Comfortable before the finale; tight-but-skippable for tonight.
