# 03 · The code, two ways

> Sanctuary finale prep. Front door: [`README.md`](README.md). Full project brief: [`02-project-context.md`](02-project-context.md).

This project's code was built for two goals above all: it cannot break during a live demo, and it cannot show a number we can't defend. This file explains it twice, first in plain English for everyone, then in technical depth for the programmers.

---

## A. The code in plain English (for the whole team)

Think of the website like a printed pamphlet, not a live app that phones a server every time you open it. All the drawing and number work happens once, ahead of time, when we "build" the site. By the time a judge opens it, everything is already baked in. That's why it can't fail live.

- **The map is hand-drawn shapes, not Google Maps.** We don't load map tiles from an outside service, so there's no map key to expire and nothing to download while you browse. It works with the wifi off. The colours, the pins, and the "fly to Malton" move are all just shapes we drew and animated.
- **The data is frozen on purpose.** Each layer (the heat map, the flood map, the buildings) is a file we downloaded from a public source, checked, and saved into the project. The live site never goes and re-fetches it. That removes a whole class of demo-day failures.
- **The one "live" thing is the embedded ArcGIS map.** That's the only piece that talks to the internet, and it loads lazily so it never blocks the page.
- **The AI feature is fenced in.** There's one button that drafts a checklist of what a planner should verify. We wrote and reviewed those checklists ahead of time and saved them as a plain file, so the live site never calls the AI. And the AI is boxed in by a filter: if it ever tried to write a kilowatt number, a dollar figure, or "this building already has solar," the code throws that answer out before anyone sees it. It also needs two switches flipped at once to run at all, so a stray key can never quietly rack up a bill.
- **We ship it by hand and double-check.** We push the site live from the command line and then open every page to confirm it loaded, rather than trusting the tool when it says "done."

The theme across all of it: we chose the boring, bulletproof option on purpose, because a finale is the wrong place to discover that a live service is down.

---

## B. The technical detail (for the programmers)

### Stack

| Layer | Choice | Why |
|---|---|---|
| Judged artifact | ArcGIS StoryMap and web map | Esri sponsor-track fit. Does the spatial reveal. |
| Support site | Next.js 16.2.6 (Turbopack), React 19, TypeScript 5.7 | Premium showcase and offline-safe clickable backup. |
| Map | Hand-rolled d3-geo SVG | No basemap token, no WebGL, no tile server. Can't break on conference wifi. |
| Animation | `motion@12.40.0` via `LazyMotion` plus `m` plus `domAnimation` (about 4.6 KB) | Tiny bundle. Every animation guarded by `useReducedMotion`. |
| Styling | Hand-written CSS in `app/globals.css` (semantic tokens) | No Tailwind. Reads as bespoke civic craft, not generated. |
| Data | Static GeoJSON read at build via `node:fs` | Auditable, demo-safe, zero runtime fetch. |
| AI (optional) | Gemini 2.5 Flash via `@google/genai`, validated with `zod@4` | Offline regeneration tool only, behind the no-overclaim gate. |
| Fonts | Fraunces (display, the "5") and JetBrains Mono (all data), self-hosted via `next/font/local` | Zero layout shift, no Google-Fonts call, offline-safe. |
| Hosting | Vercel, manual deploy | |

### The architecture in one paragraph
A React Server Components shell plus one client island. At build time the shell (`app/page.tsx`, `app/map/page.tsx`) calls `loadMapData()`, which reads the GeoJSON off disk with `node:fs` and runs the d3-geo projection (`lib/map.ts`) on the server, once. It passes only serialized SVG path strings and projected points into the client island. So d3-geo never ships to the browser, there's no runtime data fetch, no database, and no backend. The only live network element is the lazy-loaded ArcGIS web map.

### Build-time data flow
```
public/*.geojson  --(node:fs at build)-->  lib/load-map-data.ts
        |                                          |
        |                          toHub() + scoreHub()  (lib/hubs.ts)
        |                          projectMap() d3-geo   (lib/map.ts, server only)
        v                                          v
   raw features            { mapData: path strings + points, hubs: scored }
                                          |  passed as props
                                          v
                       ScrollStage / MapExplorer  (the client island)
                                          v
                              MapStage  (SVG render)
```

### The signature interaction (`MapStage.tsx`, `lib/motion.ts`)
A scroll-pinned map that performs the decision, driven by one IntersectionObserver (`useScrollSteps`, a center band that trims 45 percent off the top and bottom, no scroll-event listeners):
1. RISK: heat choropleth at full opacity.
2. GAP: official facilities fade in (the incomplete "current network").
3. CANDIDATES: the 10 pins and 500 metre rings appear.
4. DEAL: number 5 to number 1 pop in sequence (`dealDelay`, an overshoot ease); the other five recede.
5. ZOOM: a transform fly-to lands Malton at the viewport center, with the honesty panel and the score counting up to 91.

`live` (desktop 900px and wider, motion allowed) gates the sticky scrollytelling. Otherwise the same DOM reflows into a stacked, fully-readable explore view, the reduced-motion, no-JavaScript, mobile fallback. The map never unmounts. The `/map` page reuses the same `MapStage` engine but always interactive, with a "Play the decision" tour that drives the five beats then releases control.

### Map rendering details
- viewBox is 760 by 720. `geoMercator().fitExtent` fits Peel into it at build.
- Coordinates round to one decimal pixel, which roughly halves the path-string payload sent to the client.
- The 282-tract choropleth is memoized, so panning (which only changes the outer transform) doesn't re-reconcile every path.
- Hand-rolled pan and zoom (`map-constants.ts`, `clampView` and `zoomAt`): pointer drag, two-finger pinch, non-passive wheel, no dependency. Clamped so content can't be panned off-frame.
- Fly-to gotcha (fixed): `motion` owns the transform-origin (50 percent, 50 percent) on an animated scale, so the translate is computed for a center pivot, k times (center minus Malton), with k = 1.9. A 0,0-origin formula stranded Malton in the corner.
- The winter choropleth recolours the same tract paths by Marginalization Index quintile (a non-interactive overlay), so no second polygon set ships.
- Flood winding fix (live): TRCA's GeoJSON polygons are wound right-hand-rule (counter-clockwise exterior), but d3-geo reads winding spherically (the opposite), so every polygon filled the whole sphere and washed the map blue. The fix flips each polygon when d3's `geoArea` says it encloses more than a hemisphere. Both the fetch script and the committed GeoJSON were corrected.

### The Gemini route (`app/api/planning-checklist/route.ts`, `lib/planning-assistant.ts`)
- Runtime is Node. It is a local regeneration tool, never on the live demo path. The UI reads the static `public/planning-checklists.json`.
- Double-gated: the live model call runs only if both `GEMINI_API_KEY` and `PLANNING_CHECKLIST_REGEN=1` are set. Otherwise it returns the free static fallback, so a stray key in production can't burn quota or expose an open billable endpoint.
- Flow: POST a candidate, build the prompt (public facts only, the allowed source tags listed verbatim), call Gemini (temperature 0.2, JSON mime), then `validatePlanningChecklist` (schema plus the no-overclaim filter), then commit the reviewed JSON. On any failure it returns the static fallback.

### Routes and pages (6 user-facing)
| Route | File | What it is |
|---|---|---|
| `/` | `app/page.tsx` | Overview. Hero (the giant "5" and "harden"), the problem, the scroll-pinned "deal the five," read-on cards. |
| `/map` | `app/map/page.tsx` | Full-bleed, always-interactive map plus a side rail (detail panel, ranked list, "Play the decision"). |
| `/method` | `app/method/page.tsx` | The 35/25/20/10/10 model, and what's verified, modelled, or pending. |
| `/vision` | `app/vision/page.tsx` | The honest roadmap (future phases). |
| `/funding` | `app/funding/page.tsx` | The capital stack, how it works, the operating model. |
| `/sources` | `app/sources/page.tsx` | Every claim linked to a public source, the honesty key, the tech stack. |

### Key files (where to change things)
- **All on-screen copy and numbers:** `lib/content.ts`. Change words and figures here, not in components.
- **Hub data model and scoring:** `lib/hubs.ts` (`toHub`, `scoreHub`, `HVI_COLORS`, `WINTER_COLORS`).
- **Projection and fly-to math:** `lib/map.ts` (server only). d3-free constants and pan/zoom: `lib/map-constants.ts`.
- **Build-time load:** `lib/load-map-data.ts`. Scroll state machine: `lib/motion.ts` and `hooks/useScrollSteps.ts`.
- **The map:** `components/MapStage.tsx`. Islands: `ScrollStage.tsx` (home) and `MapExplorer.tsx` (`/map`).
- **The honesty panel:** `components/DetailPanel.tsx`. Legend: `MapLegend.tsx`. Controls: `MapControls.tsx`.
- **AI gate:** `lib/planning-assistant.ts` and `app/api/planning-checklist/route.ts`.
- **Styles, one file:** `app/globals.css`. Icons: `components/icons/` (local inline SVGs, zero runtime dependency).

### Build, deploy, verify
- Dev: `cd sanctuary/web && npm run dev` (port 3000). Build: `npm run build` (must stay green, needs no network). No tests, by design (hackathon).
- Deploy is manual: `cd sanctuary/web && vercel deploy --prod --yes`. A `git push` does not update the live site. There's no Git auto-deploy, and env-var changes need a redeploy. Vercel project "sanctuary," root `sanctuary/web`.
- Always ship-verify: load all six pages for a 200 and check for a known new token in the deployed HTML. Never trust an "up to date" message.
- Live: https://project-sanctuary-seneca.vercel.app (the alias `sanctuary-phi.vercel.app` redirects here).

### Performance and accessibility (honest version)
Desktop accessibility scores 100 with zero axe violations. The whole story renders with reduced motion or with JavaScript off, so the map unpins into a stacked, readable view. Performance is strong on desktop unthrottled. Under a simulated slow phone it dips, which is expected for an interactive map, and we chose to keep the map fully interactive rather than strip it for a benchmark number. Accessibility matters extra here, because the project is about people who get left behind.
