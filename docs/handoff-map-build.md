# Handoff — Sanctuary interactive map build (`sanctuary/web`)

> Written 2026-05-26 at the end of the session that made the `sanctuary/web` map
> REAL (it had been faking heat). Read this first if you're picking up the Sanctuary
> website map. Complements — does not replace — the project `CLAUDE.md`,
> `sanctuary/web/CLAUDE.md` (locked design rules), `docs/handoff-showcase-rebuild.md`
> (the prior scrollytelling rebuild), and the plan at
> `~/.claude/plans/i-want-you-to-magical-eich.md`.

---

## TL;DR (state right now)

**PRIORITY #1 — the interactive map — is DONE, verified, committed, and pushed.** The
fake radial-glow "heat" is gone; the map now performs the real decision: real HVI
choropleth → real shelter-gap facilities → trusted candidates → deal-the-five → zoom
to Malton.

- **Branch:** `feat/sanctuary-build` @ `9106674`, pushed to origin. 3 commits on top of
  `b932b09`. Working tree clean, local == origin.
- **`main` is FROZEN at `b932b09`** (= live prod at https://sanctuary-phi.vercel.app).
  Nothing merged. Do not touch `main` until Leo says so.
- **Build green.** Production Lighthouse (desktop, unthrottled): **Perf 100 · A11y 100 ·
  SEO 100 · Best-Practices 96 · CLS 0.001 · LCP 0.2s.** d3-geo = 0 in client chunks.
  Hydration clean (fixed a pre-existing bug). JS-off renders the full map.
- **Two-agent split is live:** Claude = `feat/sanctuary-build` (map). Cursor =
  `feat/cursor-sanctuary-planning-assistant` (Gemini planning-assistant checklist).
  Both branched off `b932b09`. Merge both → `main` when ready.

**If you do nothing else:** the map is shippable. To see it: `cd sanctuary/web && npm run
dev`. To promote later: merge `feat/sanctuary-build` (+ Cursor's branch) → `main`, deploy,
`/ship-verify`.

---

## ⚠️ The worktree reality (read this or you WILL lose work)

This session ran inside a **git worktree**, not the main repo:

| Tree | Path | Branch |
|---|---|---|
| **Worktree (Claude's)** | `…/Synergy-v2.0/.claude/worktrees/keen-bartik-9ef451/` | `feat/sanctuary-build` |
| Main tree (Cursor's) | `…/Synergy-v2.0/` | `feat/cursor-sanctuary-planning-assistant` |

- The two trees are **separate filesystems** sharing one `.git`. Editing a file under
  `…/Synergy-v2.0/sanctuary/web/…` (main tree) is NOT the same as editing
  `…/keen-bartik-9ef451/sanctuary/web/…` (worktree). I lost ~2 min early on by writing a
  file to the main tree by mistake. **Always use the worktree absolute path** for
  Read/Write/Edit, and in Bash `cd "$WT"` first with `WT=…/keen-bartik-9ef451/sanctuary/web`.
- **Bash cwd drifts** between calls (sometimes resets to the worktree root, sometimes
  errors on `cd sanctuary/web`). Use absolute paths every time; don't rely on a persisted cwd.
- **If your new session is NOT in this worktree:** `git fetch origin && git checkout
  feat/sanctuary-build` (or make a fresh worktree on it). All the work is on that branch on
  origin. Then `cd sanctuary/web && npm install` (node_modules is gitignored; a fresh
  tree has none — this worktree already has them).
- **Coordinate with Cursor only through origin** (shared branch / rebase), never by editing
  the other tree. The file-level split (below) is what prevents merge conflicts.

---

## What was built (PRIORITY #1, all three parts)

**(a) Real HVI heat choropleth — replaces the fake glow.**
- `public/peel-hvi.geojson` (NEW, ~110 KB): **282 Peel census tracts** from the public
  Region of Peel EHVI FeatureServer, committed static (offline-safe). Real quintiles only.
- Rendered as a choropleth filled by `Index_Qnt` via `HVI_COLORS` (the existing ramp).
- Malton's tract (CTUID `5350530.01`, PHDZ `M-04`) = `Index_Qnt` 5; the fetch script
  asserts this and refuses to write otherwise.

**(b) Real shelter-gap facilities layer.**
- `public/peel-facilities.geojson` (NEW, ~15 KB): **87 official Peel public buildings**
  (community centres, arenas, pools) from StatCan **ODRSF** (OGL-Canada), deduped from 120
  rows on a ~110 m grid. Coordinates ship with ODRSF — no geocoding, no scrape. Labelled
  "Public facilities" (honest: the official recreation network, not designated cooling
  centres). Shown at the GAP step; toggleable in explore mode.

**(c) Explorable map.**
- Hand-rolled **pan/zoom** (drag · wheel · pinch · ＋/−/reset buttons), clamped, **no new
  dependency** (the locked stack forbids MapLibre/deck.gl).
- **Layer toggles** (heat · facilities · candidates · 500 m rings) that double as a legend.
- **Tract-click → real Exposure / Sensitivity / Adaptive-capacity quintiles** in a readout.
- Kept the existing candidate-select + honesty `DetailPanel` + the **deal-the-five →
  zoom-to-Malton** signature move (verified intact; it now lands on the real red Malton
  heat pocket).

---

## File inventory (Claude's lane — what changed)

| File | Status | What |
|---|---|---|
| `sanctuary/web/public/peel-hvi.geojson` | NEW | 282 HVI tracts (the headline) |
| `sanctuary/web/public/peel-facilities.geojson` | NEW | 87 ODRSF facility sites |
| `sanctuary/web/scripts/fetch-hvi.mjs` | NEW | documented HVI fetch (Malton=5 assertion) |
| `sanctuary/web/scripts/fetch-facilities.mjs` | NEW | documented ODRSF fetch (Peel + dedupe) |
| `sanctuary/web/lib/map-constants.ts` | M | `BaseLayer`/`HviTract`/`Facility`/`LayerKey`/`LayerState`/`ViewTransform` types + `clampView`/`zoomAt`/`clamp` pan-zoom helpers (d3-FREE, client-safe) |
| `sanctuary/web/lib/map.ts` | M | `projectMap(base, hubs, hvi?, facilities?)` projects all layers; exports `HviGeo`/`FacilityGeo`; 1-dp path rounding (d3-geo SERVER-ONLY) |
| `sanctuary/web/app/page.tsx` | M | build-time load of `peel-hvi` (strict) + `peel-facilities` (safe) → `projectMap` |
| `sanctuary/web/components/MapStage.tsx` | M | choropleth + facilities + pan/zoom + tract-click + memoized 282 paths; **fixed the `<title>` hydration bug** |
| `sanctuary/web/components/MapControls.tsx` | NEW | zoom buttons + layer toggles + tract readout |
| `sanctuary/web/lib/content.ts` | M (additive) | `MAP_LAYERS` export only |
| `sanctuary/web/app/globals.css` | M (additive) | `.fsa` restyle + `.hvi-tract`, `.facility-dot`, `.map-controls`/`.mc-*`, `.tract-readout`/`.tract-*` + a mobile media query |
| `docs/peel-hvi-data-note.md` | NEW | provenance for both new layers |
| `docs/handoff-map-build.md` | NEW | this file |

---

## Key architecture decisions (the non-obvious ones — don't relitigate)

1. **The `fsaPaths` prop carries a `BaseLayer` bundle, on purpose.** ScrollStage (Cursor's
   file, forbidden) calls `<MapStage fsaPaths={mapData.fsaPaths} points=… zoom=… …/>` and
   forwards ONLY those three mapData fields. The new HVI tracts + facilities must reach
   MapStage **as props** (so they're in the SSR HTML — sacred JS-off rule), but I can't add
   a prop to ScrollStage. So `MapData.fsaPaths` was changed from `string[]` to
   `BaseLayer = { outline, tracts, facilities }`. ScrollStage forwards it blindly; the type
   change is fully contained in MapStage (consumer) + map.ts (producer) + map-constants
   (type). MapStage destructures `{ fsaPaths: base }`. **This is why a prop named `fsaPaths`
   holds the whole base layer** — it's the no-touch-ScrollStage workaround, not sloppiness.

2. **d3-geo is SERVER-ONLY.** `lib/map.ts` (imports d3-geo) is imported only by `page.tsx`
   (RSC). The client island imports `lib/map-constants.ts` (d3-FREE). Verify after any
   change: `grep -rl "geoMercator" .next/static/chunks/` → must be 0.

3. **Pan/zoom = two nested groups.** Outer `<g transform="translate(view.x view.y)
   scale(view.scale)">` (user-controlled, default identity) wraps the inner `<m.g
   animate={zoomT}>` (the existing scrollytelling fly-to, untouched). They compose; the
   scrollytelling is unchanged when the user hasn't panned.

4. **Layer opacity = toggle × step.** e.g. `heat = (layers.heat?1:0) * (explore ? 0.62 :
   step===RISK?1 : step===GAP?0.5 : 0.28)`. Toggles default ON so the live story works;
   they only matter in explore mode. Facilities show at GAP (live) / 0.9 (explore-toggle).

5. **Tract-click is pointer-only** (no `tabindex` on 282 paths — that would wreck keyboard
   nav). The keyboard-accessible path to sub-scores is the candidate `DetailPanel`. axe/
   Lighthouse a11y = 100 confirms this is fine.

6. **Hydration fix (React 19 `<title>`).** React 19 special-cases `<title>` and expects a
   **single text child**; a multi-child `<title>{h.name} — HVI {h.hvi} (…)</title>` renders
   EMPTY in SSR but filled on the client → hydration mismatch that silently regenerated the
   whole map tree. Fixed by a single template-literal child:
   `<title>{`${h.name} — HVI ${h.hvi} (${HVI_LABEL[h.hvi]})`}</title>`. **This was
   pre-existing in `b932b09`** — keep the single-child rule for any new SVG `<title>`.

---

## Data pipeline (how to refresh)

```bash
cd sanctuary/web
node scripts/fetch-hvi.mjs          # → public/peel-hvi.geojson  (asserts Malton = quintile 5)
node scripts/fetch-facilities.mjs   # → public/peel-facilities.geojson
npm run build                       # offline; bakes both into the prerender
```
- HVI service: `services6.arcgis.com/ONZht79c8QWuX759/.../Extreme_Heat_Vulnerability_Index/FeatureServer/0`
- ODRSF service: `services.arcgis.com/wjcPoefzjpzCgffS/.../Sports_Recreation_Facilities_gdb/FeatureServer/0`
- Full provenance + field meanings: `docs/peel-hvi-data-note.md`.
- `page.tsx` reads `peel-facilities.geojson` via `loadJsonSafe` (won't break the build if
  absent), `peel-hvi.geojson` via strict `loadJson` (it must exist).

---

## How to run / verify

```bash
cd sanctuary/web
npm install        # only if a fresh tree (this worktree already has node_modules)
npm run dev        # localhost:3000 — Claude Preview: preview_start name "sanctuary-web"
npm run build      # must stay green, needs NO network
```
**Verification gates (all green this session — don't regress):**
- `grep -rl "geoMercator" .next/static/chunks/` → **0** (d3-geo off client).
- SSR has the map: `grep -o 'class="hvi-tract' .next/server/app/index.html | wc -l` (~282),
  `grep -o 'class="facility-dot"' … | wc -l` (87), pin `<title>`s populated (10).
- **Prod Lighthouse** (representative): stop the dev server, then
  `npm run build && npm run start -- -p 3100`, poll `:3100`, run the `lighthouse` MCP
  `run_audit` desktop **throttling:false** against `http://localhost:3100`. Got Perf 100 /
  A11y 100 / CLS 0.001. (Dev-server perf is NOT representative — always audit a prod build.)
- Demo-safety: JS-off (SSR renders the static map), reduced-motion (no animations, full map
  renders), keyboard (Tab to a pin, Enter selects), AA contrast (reused existing tokens).

**Preview-tool gotcha:** preview_eval reads DOM **synchronously**; React state updates
(setView/setTract) flush on the next tick, so re-query in a *separate* eval to see the
result (I twice thought zoom/tract-click failed — they hadn't). The dev server also dies on
an MCP reconnect; just `preview_start` again.

---

## Collision protocol with Cursor (HARD — keeps merges clean)

- **NEVER edit** `components/ScrollStage.tsx` or `package.json` (Cursor's). Map state lives
  inside `MapStage` (local state), reusing the existing `selectedRank`/`onSelect` props.
- Cursor also owns: `lib/planning-assistant.ts`, `public/planning-checklists.json`,
  `app/api/planning-checklist/route.ts`, `DetailPanel.tsx` (checklist UI),
  `components/sections/EvidenceSection.tsx`, `data/sources.md`, `submission-package.md`,
  and the `@google/genai` + `zod` deps.
- **Shared files — additive only, different exports, `git pull --rebase` before push:**
  `lib/content.ts` (Claude = `MAP_LAYERS`; Cursor = `EVIDENCE`) and `app/globals.css`
  (Claude = map sections; Cursor = evidence sections).
- Cursor's branch is `feat/cursor-sanctuary-planning-assistant`. When integrating, rebase/
  merge both feature branches onto `main` — the file split should yield no conflicts.

---

## Next steps (prioritized)

### Phase 1 — optional polish (small, non-blocking)
1. **Legend/readout overlap (minor, demo-irrelevant):** when a tract is selected on a
   *short* map, the top-left `.tract-readout` bottom can touch the bottom-left `.legend` top
   row. It stacks cleanly (translucent) and never happens during the scrollytelling demo
   (tract-click is explore-only). Fix idea: hide `.legend` when a tract is selected, or cap
   readout height, or move the readout. CSS-only, in `globals.css` (Claude's map section).
2. **Facility dots** read a touch faint (hollow cool circles, r=5). Could bump size/contrast
   if the GAP "shelter gap" beat needs more punch. `.facility-dot` in `globals.css`.
3. **1 ODRSF facility has a blank `..` municipality** (its name is real). Trivial; documented
   in the data-note. Could drop it in `fetch-facilities.mjs` if you want it spotless.
4. (Optional) **Pinch-zoom** on touch is best-effort because `touch-action: pan-y` lets the
   page scroll; the zoom **buttons** are the reliable touch path. Fine as-is.

### Phase 2 — showcase redesign (was deprioritized "until the map is real" — now UNBLOCKED)
Per `~/.claude/plans/i-want-you-to-magical-eich.md` §"PHASE 2" and the prior direction:
- Navigable **pages + top nav** (Overview · Map · Method · Vision · Sources) instead of one
  long scroll.
- "Civic field report × refuge-vs-heat" identity.
- **Real Malton photography** (free on Wikimedia: `Malton_Community_Centre.jpg`, the Morning
  Star × Goreway corner, archival 1877/1938 maps).
- Simplified copy — **keep every verified/modelled/pending label** (the honesty voice is
  sacred).
- The completed interactive map becomes the redesign's centerpiece.
- Use the `frontend-design` + `web-design-guidelines` skills. Honor `sanctuary/web/CLAUDE.md`
  anti-slop firewall (no gradient cards, ember = signal only, Fraunces display, etc.).

### Promotion (when Leo says go)
- Merge `feat/sanctuary-build` (+ Cursor's branch) → `main`.
- Deploy: `cd sanctuary/web && vercel deploy --prod --yes` (CLI deploys the working tree;
  `.vercel/` is linked + gitignored in the **main tree**, NOT the worktree — deploy from the
  main tree after merge). Then **`/ship-verify`** (never trust UP-TO-DATE).
- The judged deliverable is the **ArcGIS StoryMap/video** (due 2026-05-26 23:59 ET) — the
  website is the support/recording backup. **Do not touch ArcGIS** (out of scope, can't edit).

---

## Sacred — do NOT break (any phase)

- **Every number real or labelled** `verified`/`modelled`/`pending`. HVI choropleth =
  real service quintiles. Re-run the no-overclaim gate (`sanctuary/artifacts/submission-package.md`)
  before any submission. Corrected facts: 15% Clean **Electricity** ITC (not 30% CTITC);
  Brampton Lighthouse 79 registered / 39 signed (refuge, not solar); GridExchange = GGH
  template, not a Peel deployment; reachable population stays `pending`.
- **d3-geo stays server-only** (client imports `lib/map-constants.ts`, never `lib/map.ts`).
- **Demo-safe:** JS-off SSRs the static map (choropleth + pins + facilities visible);
  pan/zoom is enhancement only. Reduced-motion renders the full story. AA contrast.
- `lib/hubs.ts` reused **verbatim** (data + `toHub` + `HVI_COLORS`/`HVI_LABEL`). ArcGIS
  StoryMap untouched. `main`/prod frozen at `b932b09`.
- New SVG `<title>` elements: **single string child only** (React 19 hydration).

---

## Source-of-truth pointers (read by topic)

- Plan (this session): `~/.claude/plans/i-want-you-to-magical-eich.md`
- Locked design rules: `sanctuary/web/CLAUDE.md`
- Prior scrollytelling rebuild: `docs/handoff-showcase-rebuild.md`
- Data provenance: `docs/peel-hvi-data-note.md` (HVI + facilities), `docs/peel-fsa-data-note.md` (FSA base)
- Demo moment / scope: `.hackathon/scope.md`
- Project memory: `~/.claude/projects/C--Users-leooa-Documents-personal-projects-Synergy-v2-0/memory/` → `MEMORY.md`, `sanctuary-web-rebuild.md`, `sanctuary-data-truth.md`
- Project agents: `demo-moment-critic`, `scope-defender`, `energy-domain-researcher` (in `.claude/agents/`)
