# Cursor tasks — Sanctuary showcase redesign (content-pages lane)

**Hand this whole file to Cursor.** It is self-contained. Full plan (for reference, optional):
`docs/plans/2026-05-26-001-showcase-redesign-interactive-map.md`.

## What this project is (30-second context)
**Sanctuary** is a Seneca Energy Hackathon 2026 entry (Theme 3): it ranks trusted Peel buildings
to harden into solar+battery heat-resilience hubs first. The web app is in `sanctuary/web/`
(Next.js App Router, hand-written CSS — **no Tailwind**, hand-rolled d3-geo SVG map — **no MapLibre**).
We are converting the current single-long-scroll site into a **multi-page site** with top nav:
**Overview (`/`) · Map (`/map`) · Method (`/method`) · Vision (`/vision`) · Sources (`/sources`)**.

## Your lane (Cursor) — content pages, assets, copy
You build the **content pages** and the **Malton photography**. You do **NOT** touch the map engine
or the shared shell (Claude owns those — see "Do NOT touch" below).

### Dependency / start order
Claude is building the shared shell first (Phase A): `app/layout.tsx` (nav + footer mounted),
`components/Nav.tsx`, and the design tokens in `app/globals.css`. **Coordinate:** if those exist,
build your routes into them. If not yet, start by simplifying the **section component bodies**
(`sanctuary/web/components/sections/*.tsx`) and sourcing photography — both are safe in isolation —
then add the thin `app/<route>/page.tsx` wrappers once the layout/nav land.

### Tasks

**B1 — `/method` page** → `sanctuary/web/app/method/page.tsx` (new) rendering
`components/sections/MethodSection.tsx` (+ `HonestySection.tsx` if it fits).
- Content source (verbatim facts, simplify wording): `sanctuary/docs/methods-note.md`,
  `sanctuary/data/scoring-notes.md`. The score weights are **35% heat vuln · 25% catchment pop ·
  20% trust/community · 10% roof · 10% facility**.
- Must include the **real-vs-estimated box** (verified / modelled / pending), icon + text.
- Acceptance: explains the score in <20s of reading; every number sourced or labelled.

**B2 — `/vision` page** → `sanctuary/web/app/vision/page.tsx` (new) rendering
`components/sections/FutureSection.tsx`.
- Content source: `sanctuary/docs/sanctuary-future-vision.md`, `sanctuary/docs/team-brief.md` §16.
- Frame as an **honest roadmap** (walksheds → site audits → public app → Alectra-wide scale).
  Label everything as future/roadmap, NOT built. Keep ~4 stages, tight.
- Acceptance: reads as a credible staged plan, no overclaim ("could", "after verification").

**B3 — `/sources` page** → `sanctuary/web/app/sources/page.tsx` (new) rendering
`components/sections/SourcesSection.tsx` (+ `QaSection.tsx` for judge Q&A).
- Content source: `sanctuary/data/sources.md`, `sanctuary/docs/judge-qa.md`.
- List every data source with its URL + the verified/modelled/pending key. This is the anti-slop receipts page.
- Acceptance: a judge can trace every claim to a source link.

**B4 — Malton photography + identity** (real photos only — NO stock).
- Source from **Wikimedia Commons** (verify each file's license, add attribution in a `<figcaption>`):
  the "Malton Community Centre" exterior, the Morning Star Dr × Goreway Dr corner, archival Malton/Peel maps.
- Place under `sanctuary/web/public/photos/`; render via Next `<Image>` with width/height (no CLS).
- Identity to match: **"civic field report × refuge-vs-heat"** — editorial, document-like, ember (`--signal`)
  used only as signal, mono font for all data. See `sanctuary/web/CLAUDE.md` "Design system".
- Acceptance: photos are real, licensed, attributed; zero layout shift; no stock imagery anywhere.

**B5 — Copy simplification** across the pages you own.
- Keep EVERY `verified`/`modelled`/`pending` label and the proper nouns (Malton, 3540 Morning Star Drive,
  Mississauga, Peel HVI). Cut corporate-comms words ("leverage", "empower", "stakeholders", "AI-powered").
- Tip: use `local_llm_agent` (free) to draft simplifications, then review — don't ship unreviewed AI copy.

## Do NOT touch (Claude owns — will cause merge collisions)
`components/MapStage.tsx`, `components/MapExplorer.tsx`, `components/MapControls.tsx`,
`lib/map.ts`, `lib/map-constants.ts`, `lib/load-map-data.ts`, `components/Nav.tsx`,
`app/layout.tsx`, `app/page.tsx` (Overview), `app/map/page.tsx`, `lib/hubs.ts`, `package.json`,
and the map/shell CSS sections of `globals.css`.

## Shared files — additive only, rebase before push
- `app/globals.css`: add a clearly-commented section for YOUR pages only (`/* --- method/vision/sources/photos --- */`). Don't edit Claude's map/shell sections.
- `lib/content.ts`: only add/extend your own exports; don't rename existing ones.
- Before every push: `git pull --rebase`. Small, frequent commits. Branch: `feat/showcase-redesign`.

## Sacred constraints (non-negotiable)
- **No Tailwind. No MapLibre/Leaflet/deck.gl. No new heavy deps** (don't edit `package.json`).
- Every number **real or labelled** verified/modelled/pending. Re-check against
  `sanctuary/artifacts/submission-package.md` "No-Overclaim Gate" before you commit copy.
- Real photography only (Wikimedia Malton/Peel). No stock photos, no solar-panel/turbine clip art.
- Honesty labels = icon + text, never colour alone. Reduced-motion safe. AA contrast on `#0d1620`.
- d3-geo is server-only — never import `lib/map.ts` into a client component.

## Verify before you call a task done
- `cd sanctuary/web && npm run build` stays green (no network needed at build).
- Your route renders with JS off (it's server-rendered content), keyboard-navigable, AA contrast.
- Run the page through the `web-design-guidelines` review if available.

## Resources (where the facts live — so quality stays high)
- Candidate data: `sanctuary/data/candidate-hubs.csv`, `sanctuary/web/public/candidate-hubs.geojson`
- Provenance + honesty rules: `sanctuary/data/sources.md`, `lib/content.ts` header
- Method/score: `sanctuary/docs/methods-note.md`, `sanctuary/data/scoring-notes.md`
- Plain-English copy: `sanctuary/docs/team-brief.md`, `sanctuary/docs/sanctuary-introduction-faq.md`
- Vision: `sanctuary/docs/sanctuary-future-vision.md`
- Judge Q&A: `sanctuary/docs/judge-qa.md`
- No-overclaim gate: `sanctuary/artifacts/submission-package.md`
- Design system + anti-slop firewall: `sanctuary/web/CLAUDE.md`
- Free help: `local_llm_agent` (zero-cost) for copy drafts + no-overclaim passes; `firecrawl` MCP to pull photo/source pages.
