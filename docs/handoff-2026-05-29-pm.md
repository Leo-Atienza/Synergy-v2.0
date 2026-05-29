# Session Handoff — 2026-05-29 (PM) → next session

> For the next session. The person picking this up **wants to make changes** — this doc is oriented around where everything lives, the constraints, and the traps.

## Project
**Sanctuary** (Seneca Energy Hackathon 2026 — **FINALIST, live demo May 30** @ HELIX, Newnham) | branch `main` | Next.js 16.2.6 (Turbopack) + React 19, hand-written CSS (**NO Tailwind**), d3-geo SVG map, `motion@12`, `inlineCss` experiment ON. Showcase site = `sanctuary/web/`. **Live:** https://project-sanctuary-seneca.vercel.app (`sanctuary-phi.vercel.app` 307-redirects here). The **JUDGED artifact is an ArcGIS StoryMap/video**; this site is the support showcase + clickable backup.

## Current live state (verified)
- **Live commit: `01cbdbe`** — deployed + ship-verified this session (deploy `dpl_8uZSEPXX5DutpkbgjettrEXNH25v`, all 6 routes HTTP 200, build green, 0 console errors).
- `prod_code_commit` in `.hackathon/event.yaml` = `01cbdbe` (synced in `3f01687`). Working tree clean.
- **Tags:** `v2-finalist-live` → `01cbdbe` (the polished build live for the finale) · `v2-multi-hazard-finalist` → `c07393a` (the finalist-reveal build, kept as history). `final_commit_sha` stays `c07393a` **by design** — don't "fix" it.

## Changes made in the 2026-05-29 PM session (shipped + live)
- **DetailPanel** (`components/DetailPanel.tsx`): added an `INSIDE THE FIRST-PASS SCORE` divider above the five weighted bars, mirroring the existing `BEYOND THE FIRST-PASS SCORE` divider so the panel reads as two named groups (what the score includes vs. hazards kept out of it). New CSS class `.facts-label.breakdown-label` (compound selector, see gotchas); `.breakdown` top margin 16→10px.
- **Footer dead band** (`app/globals.css`): home `.readon` grid carried ~124px section bottom-padding → stacked into a ~230px gap above the footer. Fixed with `main:not(.map-page) > :last-child { padding-bottom: clamp(20px,3vw,40px) }` — **`/map` excluded** (it manages its own ~50px footer gap), every editorial page normalized to ~75px.
- **Tags:** added `v2-finalist-live` (non-destructive); `event.yaml` + project memory updated.

## Key files (for making changes)
- **Pages / routes:** `sanctuary/web/app/{page,map,method,vision,funding,sources}/page.tsx`
- **ALL on-screen copy + numbers:** `lib/content.ts` — change words/figures here, not in components.
- **Hub data + scoring model** (the 35/25/20/10/10 weights, breakdown rows, honesty status keys): `lib/hubs.ts`
- **The score panel** (the Inside/Beyond panel on `/map`): `components/DetailPanel.tsx`
- **Map:** `components/MapExplorer.tsx` → `MapStage.tsx`; **fly-to / zoom math** in `lib/map.ts`
- **Sections:** `components/sections/*` (Vision body, Funding, etc.)
- **Shared components:** `components/{Nav,Footer,Section,EvidenceTag,CountUp,BackToTop}.tsx`
- **Icons:** `components/icons/` (local inline Phosphor SVGs, zero runtime dep)
- **Styles — ONE file:** `app/globals.css` (~2700 lines; semantic tokens at top; footer rules ~line 2120; panel `.breakdown`/`.facts` ~line 1824).

## Hard constraints — READ `sanctuary/web/CLAUDE.md` before editing
- **NO Tailwind.** All CSS is hand-written in `app/globals.css` with semantic tokens.
- **Honesty labels are sacred** (verified / modelled / pending) — never present modelled/estimated as measured. **Ember (`--signal`) = signal only**, never decorative.
- **Every on-screen number is real (sourced) or labelled modelled/pending.** Data truths: Peel HVI quintiles verified, Malton = quintile 5; reachable population is *pending* (modelled 500m catchment ~5,900, verified tract pop 5,217); **15% Clean Electricity ITC** (not 30% CTITC); Brampton Lighthouse = 79 registered / 39 signed.
- The **scroll-pinned "deal the five" map is THE signature** — don't dilute it.

## Run / build / deploy
- **Dev:** `cd sanctuary/web && npm run dev` (:3000). No tests by design.
- **Build:** `cd sanctuary/web && npm run build` — keep green.
- **Deploy is MANUAL** (git push does NOT deploy): `cd sanctuary/web && vercel deploy --prod --yes`. Then **ship-verify**: `curl` all 6 routes for 200 **+ grep a new-code token** in the deployed HTML (CSS tokens work — `inlineCss` is on, e.g. `not(.map-page)`; SSR'd text works too, e.g. `Inside the first-pass score` on `/map`). Then sync `.hackathon/event.yaml` `prod_code_commit` and (if you cut a release) tag it.

## Gotchas (accumulated — these will bite)
- **CSS specificity:** a *later* base rule overrides an *earlier* modifier of equal specificity. Beat it with a compound selector (this session: `.facts-label.breakdown-label`; prior: `.readon-card.readon-card-wide`).
- **Bash tool cwd PERSISTS across calls** — after `cd sanctuary/web` (build/deploy), a later `git diff -- sanctuary/web/` silently matches nothing (resolves to `sanctuary/web/sanctuary/web`). **`cd` to repo root for git pathspecs.**
- **motion/Framer owns `transform-origin`** — a CSS `transformOrigin` is ignored on an animated scale; bake a centre-pivot into the math (`lib/map.ts`).
- **Preview MCP:** navigating via `preview_eval` closes the eval context (expected — re-query after). Desktop screenshots at the **native/default desktop size rendered full-width fine** this session (the older "letterbox >500px" warning did *not* reproduce at native desktop); for tall content a **tall mobile viewport (e.g. 420×1600)** gives the crispest full-panel capture. Use `preview_inspect`/`preview_eval` (DOM) for exact desktop measurements. `preview_resize` with both `preset` and `width/height` → preset wins.

## Commits (pushed to main, this session)
- `01cbdbe` feat(web): panel inside/beyond symmetry + tighten footer dead band
- `3f01687` chore(hackathon): sync prod_code_commit to 01cbdbe
- (this handoff doc commit follows)

## Open / pending
- **Copy nit (not done):** `INSIDE THE FIRST-PASS SCORE` makes "first-pass score" appear 3× in the panel (caption + both dividers). Left as-is (the repetition reinforces "this is a screen, not a verdict"); shorten to `INSIDE THE SCORE` in `DetailPanel.tsx` if it reads heavy — one-line change.
- **It is demo day (May 30).** The site is in a freeze-recommended state. Any change is downside risk the day of the finale — make it, **verify in preview + ship-verify after deploy**, or hold. The judged artifact is the StoryMap/video, not this site.

## Resume Prompt
> "Continue Sanctuary showcase work in `sanctuary/web` — live build is `01cbdbe` (https://project-sanctuary-seneca.vercel.app, tagged `v2-finalist-live`), build green, working tree clean. **Read `sanctuary/web/CLAUDE.md` first:** NO Tailwind, honesty labels sacred, all CSS in `app/globals.css`, copy/numbers in `lib/content.ts`, deploy is MANUAL via `vercel deploy --prod --yes` then ship-verify. I want to make changes — here's what: **[DESCRIBE]**. Verify with the preview MCP (tall mobile viewport for crisp panel shots, DOM/`preview_inspect` for desktop measurements). It's the finale (May 30) — verify before and after deploy. Watch the cwd-persistence and CSS-specificity gotchas."
