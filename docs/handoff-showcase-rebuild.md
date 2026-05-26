# Handoff — Sanctuary showcase rebuild (`sanctuary/web`)

> Written 2026-05-26 at the end of the autonomous overnight execution of
> `~/.claude/plans/using-all-of-the-floofy-mountain.md`. Read this first if you're
> picking up the Sanctuary website. It complements (does not replace) the project
> `CLAUDE.md`, `sanctuary/web/CLAUDE.md` (locked design rules), and the two project
> memory files (`sanctuary-web-rebuild`, `sanctuary-data-truth`).

---

## TL;DR (state right now)

The signature rebuild of the Sanctuary **showcase website** is **DONE, deployed, and verified**.

- **Live:** https://sanctuary-phi.vercel.app (Vercel Hobby/free, project `sanctuary`, team `leo-atienzas-projects-0eb755c3`, **root directory = `sanctuary/web`**).
- **Branch:** `feat/showcase-rebuild` (13 commits). **`main` is untouched at `41a45ca`.** Nothing is merged yet.
- **Build:** `npm run build` green. **Lighthouse desktop: A11y 100, SEO 100, Best-Practices 96, Performance 100 unthrottled** (79 only under the MCP's Slow-4G-style throttle — see "Performance" below). **CLS 0. 0 axe violations.**
- **Demo moment LANDS** (validated by `demo-moment-critic`). **Code-review came back clean** (no correctness bugs).
- This site is the **support showcase + recording backup**. The **judged deliverable is the ArcGIS StoryMap/video** — *do not touch ArcGIS* (can't, and it's out of scope).

**If you do nothing else:** the site is shippable as-is. To promote: review the branch, then merge `feat/showcase-rebuild` → `main`.

---

## What this project is (30-second version)

Sanctuary (Seneca Energy Hackathon 2026, Theme 3) ranks trusted Peel community buildings (libraries, rec centres, gurdwaras, mosques, mandirs) as **candidate** solar+battery resilience hubs — *"if Peel can harden only five buildings before the next heat wave, which five first?"* Hero building: **Malton Community Centre and Library** (Peel HVI quintile 5, verified). Pattern-break archetype (sacred): **Public-Good Frame + Local-Detail**. Doctrine: one polished signature move, anti-AI-slop, every number real or labelled `verified`/`modelled`/`pending`.

---

## The architecture (don't relitigate — these are locked decisions that work)

```
app/
  page.tsx           RSC shell. Loads both GeoJSON at BUILD via fs, runs projectMap()
                     (d3-geo, server-only), passes path strings + projected points +
                     Hub[] as serializable props. Composes Masthead/Hero/sections + the island.
  layout.tsx         next/font/local: Fraunces (display + the "5"), JetBrains Mono (all data).
                     mono preload:false (Fraunces wins LCP bandwidth). OG metadata.
  globals.css        Semantic tokens, hairlines, 96–128px rhythm, ZERO decorative gradients.
                     .decision-stage[data-live] drives sticky-scroll vs stacked-explore.
  opengraph-image.tsx  Static 1200×630 share card. Reads *-og.ttf (Satori CANNOT parse woff2).
  fonts/             Fraunces.woff2 + JetBrainsMono.woff2 (site) + *-og.ttf (OG image only).
components/
  ScrollStage.tsx    THE ONLY "use client" island. Owns selectedRank + the scroll step.
                     `live` = (desktop ≥900px && motion-OK), set in useEffect (SSR=false).
                     LazyMotion features={domAnimation} strict.
  MapStage.tsx       The signature SVG map. Renders precomputed paths/points (NO d3-geo on
                     client). Derives every layer's opacity/scale from currentStep + live.
  DetailPanel.tsx    Honesty panel + CountUp + scaleX bar fills.
  CountUp.tsx        JS-off-safe count-up (SSR shows real value; resets+counts on in-view IO).
  RankedList.tsx / CandidateTable.tsx   cross-highlight via shared selectedRank.
  Hero/Masthead/Section/Footer + sections/*  all RSC, zero JS.
  EvidenceTag.tsx    icon+text honesty tag (never colour alone). icons/index.tsx = inline SVGs.
hooks/useScrollSteps.ts   ONE IntersectionObserver, rootMargin -45%/-45%, only when enabled.
lib/
  hubs.ts            REUSED VERBATIM — data model + the transparent score. DO NOT EDIT.
  map.ts             d3-geo projectMap() — SERVER ONLY (imported only by page.tsx).
  map-constants.ts   d3-FREE constants/types — the client imports THIS, never lib/map.ts.
  content.ts         all copy + sourced-number constants + citations.
  motion.ts          LazyMotion bundle, STEP enum, easings, dealDelay.
```

**Scrollytelling state machine:** `STEP = {RISK:0, GAP:1, CANDIDATES:2, DEAL:3, ZOOM:4}`. On desktop+motion (`live=true`) the map column is `position:sticky; height:100svh`; five sibling step panels (`min-height:100svh`) scroll past it; the IO sets `currentStep`; `MapStage` animates layer states. On mobile/reduced/JS-off (`live=false`) the **same DOM** reflows via CSS into a stacked explore view (map shows the final state, the decision card reorders to the top). The map never unmounts between modes.

---

## Hard constraints (still binding — see `sanctuary/web/CLAUDE.md`)

- **Anti-slop firewall:** no gradient-clip wordmark, no decorative gradient cards, ember (`--signal`) = signal only, no purple/blue, Fraunces (not Inter) for display, transform/opacity-only motion, no autoplay/parallax/beams/WebGL. ONE signature move.
- **Every number real or labelled.** Re-run the **no-overclaim gate** in `sanctuary/artifacts/submission-package.md` before any submission. Corrected facts already in copy: **15% CEITC** (not 30% CTITC), Brampton Lighthouse **79 registered / 39 signed** (refuge, not solar), **GridExchange = GGH template** (not a Peel deployment), reachable population stays **pending**.
- **Demo-safe:** must stay readable under JS-off / reduced-motion / keyboard. All verified this session — don't regress.
- **Stack locked:** keep hand-rolled d3-geo SVG (no MapLibre/deck.gl), `motion@12.40.0` only (no GSAP), no Tailwind. `lib/hubs.ts` and the data spine are verbatim/verified.
- **Never touch the ArcGIS StoryMap/video** (the judged deliverable; can't edit it anyway).

---

## How to run / build / deploy / verify

```bash
cd sanctuary/web
npm install          # motion@12.40.0, d3-geo@3.1.1, next@16.2.6, react@19 already in package.json
npm run dev          # localhost:3000  (Claude Preview: preview_start name "sanctuary-web" via .claude/launch.json)
npm run build        # must stay green; needs NO network (build-time data, self-hosted fonts)
```

**Deploy (Vercel CLI, already linked — `.vercel/` is local + gitignored):**
```bash
cd sanctuary/web
vercel deploy --prod --yes        # deploys the working tree (NOT git); aliases to sanctuary-phi.vercel.app
```
- First-time link needed `--scope leo-atienzas-projects-0eb755c3` (non-interactive mode has no default scope). Already linked, so subsequent deploys don't need it.
- The Vercel MCP `deploy_to_vercel` takes no dir arg → the CLI from inside `sanctuary/web` is the deterministic path (sidesteps the root-directory trap).
- **`/ship-verify` after every deploy:** `curl -s -o /dev/null -w "%{http_code}" https://sanctuary-phi.vercel.app` + grep the HTML for markers (`decision-stage`, `Harden these five first`, `role="group"`). Vercel CLI deploys the working tree, so the live site reflects uncommitted edits too.
- **Lighthouse:** `mcp__lighthouse__run_audit` against the live URL, `device: desktop`. Warm the cache first (2× curl) and prefer `throttling:false` to see the real desktop score.

---

## Verification status (all green this session)

- Build: ✅ green (Next 16.2.6, 4 static routes incl. `/opengraph-image`).
- Lighthouse desktop: A11y **100**, SEO **100**, Best-Practices 96, Perf **100 unthrottled** / 79 throttled, CLS **0**, LCP 2.35s (passes <2.5s).
- axe-core (wcag2a/aa, wcag21a/aa): **0 violations**, 29 pass.
- Demo-safety matrix: JS-off (SSR final state, score 91, pins visible), reduced-motion/mobile (unpins to explore), offline (no runtime fetch), keyboard (Enter selects, arrows cycle, focus-visible), AA contrast, evidence = icon+text.
- `demo-moment-critic`: **LANDS** (4/4 rubric, pattern-break intact).
- `code-reviewer`: **clean** (no correctness bugs; confirmed d3-geo off client, hydration-safe `live` upgrade, leak-free observers).

---

## Gotchas I hit (so you don't repeat them)

1. **Motion renders `initial` in SSR** → with `initial={{opacity:0}}`, JS-off showed an invisible map + score "0". Fix used everywhere: **`initial={false}`** on the map layers/bars so SSR renders the visible `animate` value; scroll transitions still animate (they're `animate` prop changes, not the mount initial).
2. **CountUp + JS-off/hydration:** SSR must show the real value (not 0). Pattern: `useState(value)` (matches SSR), then in `useEffect` reset to 0 and count up on an IntersectionObserver in-view (so it plays when seen, not below the fold).
3. **d3-geo leaking to the client:** importing ANY runtime value from a module that imports d3-geo pulls d3-geo into the client bundle. Constants the client needs live in **`lib/map-constants.ts`** (d3-free); `lib/map.ts` (d3-geo) is server-only. Verify: `grep -rl "geoMercator" .next/static/chunks/` → must be 0.
4. **`content-visibility: auto` on sections destabilised the scroll** (intrinsic-size estimates re-measured on first scroll-through → scroll jumped). Removed it. Don't re-add without accurate `contain-intrinsic-size`.
5. **Satori (next/og) cannot parse woff2** → the OG route reads static **TTF** subsets (`app/fonts/*-og.ttf`), separate from the site's woff2.
6. **ARIA:** `role="img"` can't contain interactive children → the map SVG is `role="group"`. `aria-pressed` is invalid on `role="row"` → the candidate table dropped the ARIA table roles (it's a set of selectable buttons).
7. **Lighthouse perf is noisy + the MCP throttles a desktop viewport with a mobile-grade profile.** Real/Chrome-desktop-preset = 100. Don't chase the throttled 79 by degrading the Fraunces hero (`display: optional` risks fallback). Already at the architectural optimum (RSC, build-time data, no client d3-geo, font preload priority, inlined CSS, transform/opacity-only).

---

## Open items / possible next steps (none are blocking)

1. **(Out of scope — Leo/ArcGIS)** The judged **StoryMap video** should reproduce the deal-the-five + Malton honesty-panel zoom, or splice a screen-capture of this website's decision sequence as the wow moment, so the scored artifact is no weaker than this backup. (`demo-moment-critic`'s top note.)
2. **Promote when ready:** merge `feat/showcase-rebuild` → `main`.
3. **Custom domain (optional):** currently the default `*.vercel.app`. Not needed.
4. **Below-the-bar, left intentionally** (hackathon doctrine): unused `AnimatePresence` re-export in `lib/motion.ts`; the GAP-step "official anchors" use a `typeLabel.includes("library")` heuristic (resolves to the 2 community-centre-libraries — works, but coupled to the label string).
5. **Map pins #6–10** convey HVI by colour only on the map (top-5 are numbered); the full HVI-as-text lives in the candidate table + tooltips + aria. Deliberate; the table is the accessible alternative.

---

## Assumptions made on Leo's behalf (he can revert any)

- Mono = **JetBrains Mono** (variable); Fraunces kept `display: swap` (guaranteed brand font over a synthetic Lighthouse number).
- Deployed to team `leo-atienzas-projects-0eb755c3`, default `*.vercel.app`.
- Baseline-committed the prep work onto the branch so `main` stays at `41a45ca`.
- Did **not** hit Perf ≥95 on the *throttled* run (hit 100 unthrottled) — documented as a throttle artifact, not papered over.
- Dev server may be left running on `localhost:3000`.

---

## Source-of-truth pointers (read by topic, not full-file)

- `sanctuary/web/CLAUDE.md` — locked design + anti-slop rules.
- `docs/showcase-research-2026-05-26.md` — sourced domain facts + the data-verification record.
- `docs/showcase-assets-and-techniques.md` — free assets + technique table + judge playbook.
- `.hackathon/scope.md` — locked demo-moment script, the three seams, fallbacks, what was cut.
- `sanctuary/data/sources.md` · `sanctuary/docs/methods-note.md` · `sanctuary/docs/judge-qa.md` · `sanctuary/artifacts/submission-package.md` (no-overclaim gate).
- Plans: `~/.claude/plans/using-all-of-the-floofy-mountain.md` (executed) + `~/.claude/plans/first-of-all-i-binary-babbage.md` (full §5 architecture rationale).
- Project memory: `~/.claude/projects/C--Users-leooa-Documents-personal-projects-Synergy-v2-0/memory/` → `MEMORY.md`, `sanctuary-web-rebuild.md`, `sanctuary-data-truth.md`.
