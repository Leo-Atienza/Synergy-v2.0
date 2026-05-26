# New-session prompt — Sanctuary showcase redesign

Paste everything in the fenced block below into a fresh session opened at
`C:\Users\leooa\Documents\personal-projects\Synergy-v2.0`.

---

```
You are picking up the Sanctuary project (Seneca Energy Hackathon 2026, Theme 3) at
C:\Users\leooa\Documents\personal-projects\Synergy-v2.0. We are executing a planned
WEBSITE REDESIGN of the support showcase site in `sanctuary/web` (Next.js App Router,
hand-written CSS — NO Tailwind; hand-rolled d3-geo SVG map — NO MapLibre).

GOAL (two asks, already scoped):
1. Turn the current one-long-scroll site into a MULTI-PAGE site with top nav:
   Overview (/) · Map (/map) · Method (/method) · Vision (/vision) · Sources (/sources).
2. Give the Peel heat map its own BIG, ALWAYS-INTERACTIVE page. The pan/zoom/tract-click
   already exists in components/MapStage.tsx but is GATED OFF on desktop (it only runs in
   the scrollytelling, where wheel-zoom is disabled at MapStage.tsx ~line 134 `if (live) return`).
   The /map page runs that same engine UNLOCKED and full-bleed, with a collapsible legend +
   collapsible layer-controls, tract-click readout, candidate select → honesty panel, ranked
   five, and an optional "Play the decision" tour (RISK→GAP→CANDIDATES→deal #5→#1→Malton).

READ THESE FIRST (they have the full detail — do not re-derive):
- docs/plans/2026-05-26-001-showcase-redesign-interactive-map.md   ← the FINAL dev plan (phases, tasks, lanes, verification)
- docs/showcase-design-language.md                                 ← researched design spec + reference URLs
- docs/cursor-tasks-showcase-redesign.md                           ← Cursor's parallel lane (content pages + photos); do NOT do these
- sanctuary/web/CLAUDE.md                                          ← locked design system + anti-slop firewall (sacred)
- The map engine you will reuse: sanctuary/web/components/MapStage.tsx, MapControls.tsx,
  sanctuary/web/lib/map-constants.ts (client-safe), sanctuary/web/lib/map.ts (server-only),
  sanctuary/web/components/ScrollStage.tsx (the inline MapLegend lives at ~lines 161-191),
  sanctuary/web/app/page.tsx (current single-scroll), sanctuary/web/app/layout.tsx.

SAFETY (non-negotiable):
- Work on a branch: `git checkout -b feat/showcase-redesign`. main/prod STAYS FROZEN — the
  qualifier video may be recorded from the current live site. Review via Vercel PREVIEW deploys
  (`vercel deploy`, NOT `--prod`). No prod deploy of the redesign until the video is submitted.
- Deploy is MANUAL from sanctuary/web (`vercel deploy`); there is no Git auto-deploy.

SACRED — do not break:
- NO Tailwind. NO MapLibre/Leaflet/deck.gl. d3-geo stays SERVER-ONLY (client imports
  lib/map-constants.ts, never lib/map.ts; verify `grep -rl "geoMercator" .next/static/chunks/` → 0).
- Every on-screen number REAL or labelled verified/modelled/pending. Honesty labels = icon+text,
  never colour alone. lib/hubs.ts (toHub, HVI_COLORS, score) reused verbatim. ArcGIS StoryMap untouched.
- Motion via motion@12.40.0 only, every animation useReducedMotion-guarded. JS-off renders a static
  map + readable pages. Real Malton/Peel photography only (Wikimedia, licensed) — NO stock photos.

DESIGN LANGUAGE (full spec + URLs in docs/showcase-design-language.md): "civic heat-resilience
field report" — serious, warm-grave, map-first. Adopt these researched patterns (original execution):
- Discrete quintile cells, never a smoothed blob (Probable Futures — probablefutures.org).
- Minimal map chrome; legend + controls COLLAPSE away (default expanded desktop / collapsed mobile).
- Click a tract → read its real exposure/sensitivity/adaptive-capacity (NYC HVI, Philadelphia HVI).
- The map ends on a DECISION, not a vibe (Truth & Beauty CCVI; Esri StoryMap winners = our sponsor).
- NICE-TO-HAVE only if buffer: place/postal-code lookup → fly there + nearest CANDIDATE hubs
  (First Street / Risk Factor pattern; honest framing).
- Fraunces (display + the "5") + JetBrains Mono for ALL data (tabular-nums); ember (--signal) = signal only.

YOUR LANE (Claude) — architecture + the map (do Phase A first; it unblocks Cursor):
  A1 app/layout.tsx: mount a top Nav + Footer.
  A2 components/Nav.tsx (new): 5-link nav, active state, mobile drawer, keyboard-accessible.
  A3 lib/load-map-data.ts (new, server-only): extract the build-time geojson load + projectMap() from app/page.tsx.
  A4 app/map/page.tsx (new): full-bleed layout using load-map-data.
  A5 components/MapExplorer.tsx (new client island): MapStage with live={false} at full size + side rail
     (layers/legend/detail/ranked-five) + "Play the decision" tour button (drives currentStep).
  A5a components/MapLegend.tsx (new): extract the inline MapLegend out of ScrollStage.tsx and make it
     COLLAPSIBLE (header button, aria-expanded, keyboard; default expanded desktop / collapsed mobile;
     height+opacity transition, reduced-motion instant). Apply the same collapsible pattern to MapControls.tsx.
  A6 app/globals.css: additive /map full-bleed + collapsible-overlay styles.
  A7 app/page.tsx: slim Overview — hero + problem + condensed deal-the-five hook + cards into the other pages.
CURSOR's lane (do NOT touch): app/method|vision|sources/page.tsx, the components/sections/* bodies,
  Malton photography + attribution, copy simplification. Cursor's brief = docs/cursor-tasks-showcase-redesign.md.
  Cursor must NOT touch MapStage/MapExplorer/MapControls/MapLegend/map.ts/map-constants.ts/load-map-data.ts/Nav/layout.
  Shared files (globals.css, lib/content.ts): additive, separate sections, `git pull --rebase` before push.

VERIFY before any preview→prod promotion:
  1) cd sanctuary/web && npm run build (green, no network).
  2) npm run dev → Claude Preview MCP: screenshot every route; on /map verify pan, wheel-zoom, pinch,
     tract-click, candidate-select, tour, reset, and legend collapse/expand (mouse + keyboard).
  3) grep -rl "geoMercator" .next/static/chunks/ → 0.   4) JS-off, keyboard, reduced-motion, AA contrast.
  5) Lighthouse MCP (desktop): Perf ≥95, A11y 100, CLS < 0.1; axe 0 — on / and /map.   6) no-overclaim gate.

FIRST ACTIONS: read the 4 docs above → `git checkout -b feat/showcase-redesign` → build Phase A
(A1→A7) → preview deploy → verify. Tell me before promoting anything to prod.
```
