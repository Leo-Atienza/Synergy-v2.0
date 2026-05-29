# sanctuary/web — showcase site build rules

This is the Sanctuary **support showcase + recording backup** (the judged deliverable is the ArcGIS StoryMap/video; this site reinforces it and is a clickable backup). It must read as **premium, editorial, civic-data craft — never "AI slop."** These rules are locked decisions from the 2026-05-26 research + design pass. Full rationale: [`../../docs/showcase-research-2026-05-26.md`](../../docs/showcase-research-2026-05-26.md). Build plan: `~/.claude/plans/first-of-all-i-binary-babbage.md`.

## The one signature move (sacred — polish to glass, cut distractions)
A **scroll-pinned Peel map that performs the decision**: risk (HVI heat-glow) → shelter gap → candidates appear → **"deal the five"** (#5→#1 scale-pop in sequence, others recede) → zoom to **Malton** (honesty panel + score count-up). Then unpin → editorial sections = proof/appendix. Every choice asks: *does this support or distract from this move?* Distract → cut.

## Locked stack decisions (do not relitigate mid-build)
- **Map:** keep the hand-rolled **d3-geo SVG**. Do NOT add MapLibre / deck.gl / react-simple-maps (token, WebGL, basemap = demo-day failure modes).
- **Animation:** **`motion@12.40.0`** only, via `LazyMotion` + `m` + `domAnimation` (~4.6KB). Every animation guarded by `useReducedMotion`. No GSAP.
- **No Tailwind.** Hand-written CSS with semantic tokens in `globals.css`. No aceternity / Magic UI / heroui (require Tailwind + read as generated).
- **Architecture:** RSC server shell (`page.tsx`, all `sections/*`) + ONE `"use client"` island (`ScrollStage`/`MapStage`). Load GeoJSON at build (fs/import), pass as props — no runtime fetch (offline-safe). ArcGIS iframe stays `loading="lazy"`, the only network item.
- **Reuse verbatim:** `lib/hubs.ts` (`toHub`, `HVI_COLORS`, `HVI_LABEL`, the score `status` field = evidence-key source) + the map primitives (`geoMercator().fitExtent`, `geoPath`, `catchmentRadius`, `mapViewBox`).
- **Planning-checklist route (`app/api/planning-checklist/route.ts`) = regeneration tool, NOT a live demo dependency** (decision 2026-05-26). The UI reads the static `public/planning-checklists.json` (offline-safe). The Gemini route exists only to *regenerate* that JSON (POST a candidate → review → commit). Do NOT wire it into the live demo path. The live Gemini call is gated behind a server-only flag: it runs only when **both** `GEMINI_API_KEY` and `PLANNING_CHECKLIST_REGEN=1` are set (local regen). Without the flag the route returns the free static fallback, so a key in the prod env can't be abused to burn quota — set both in `.env.local` when regenerating.

## Design system
- **Type:** Fraunces (variable serif) for display + the "5"; quiet sans body; **mono for ALL data** (scores, HVI, weights, ranks, addresses, honesty tags). Self-host via `next/font/local` from `app/fonts/`. `font-variant-numeric: tabular-nums` on every aligned/changing number. **Never** change font-weight on hover.
- **Color:** keep the heat palette; make tokens **semantic**. Ember (`--signal`) = **signal only** — CTA, selected pin/row, the "5", section eyebrow. Never decorative. Keep the `HVI_COLORS` quintile ramp. Hairlines (0.5–1px low-alpha), not heavy boxes. Concentric radii 8/12/16. Section rhythm 96–128px.
- **Hero:** giant **"5"** + verb **"harden"**. Lead with the number + the proper noun (Malton). Never vague copy.
- **Honesty labels** (`verified`/`modelled`/`pending`): first-class evidence key, icon + text (never color alone), consistent across legend + detail panel + persistent indicator. This is the credibility signature — never sacrifice it for drama.
- **Motion:** transform/opacity only; never animate width/top/left or use `transition: all`. Curves/durations as CSS vars. Reduced-motion → full story renders statically (map unpins, count-ups show final values).

## Anti-slop firewall (DO NOT)
- No gradient-clip wordmark; no decorative gradient-filled cards (`.mission-card`, `.story-block`, `.phase-card`, `.timeline-step`, `.indicator-card` must be flattened to `--surface-raised` + hairline).
- No purple/blue gradients · no Inter-as-display · no centered-tagline+two-buttons hero · no 3-column emoji feature grid · no uniform-card monotony · no color-only meaning · no autoplay/parallax · no beams/aurora/confetti/typewriter · no WebGL gimmicks.
- ONE signature move, not three. Tasteful + restrained beats flashy. Demo-safety is paramount.

## Voice (copy)
Specific proper nouns + real numbers. Every modelled value labelled at point of display; never present modelled/estimated as measured. No corporate-comms ("leverage", "empower", "stakeholders", "powering bright futures"), no "AI-powered" as a feature. Run new copy through `stop-slop`/`ghost` but **preserve** the verified/modelled/pending honesty voice.

## Data accuracy (every number real or labelled)
- HVI quintiles + sub-scores are **verified** against the public Peel EHVI service (`services6.arcgis.com/ONZht79c8QWuX759/.../Extreme_Heat_Vulnerability_Index/FeatureServer/0`). Malton = quintile 5 is real.
- Reachable population is `pending` → show "catchment pending", never a fabricated count.
- Community (tax-exempt) buildings → **15% Clean Electricity ITC**, not 30% Clean Technology ITC.
- Do not claim Alectra GridExchange ran in Peel (it didn't). Brampton Lighthouse = 79 registered / 39 signed, an emergency-refuge program (not solar).

## Assets & techniques (locked picks — full reference: [`../../docs/showcase-assets-and-techniques.md`](../../docs/showcase-assets-and-techniques.md))
- **Icons:** Phosphor (regular weight), copied as ~8 **local inline SVGs** in `components/icons/` (zero runtime dep). One set only. Icons = punctuation, used sparingly. Lucide = fallback.
- **Imagery:** the map + data ARE the visuals — **no stock photos**. Real-place photos (Wikimedia Commons / municipal pages) only when a specific building/place genuinely helps.
- **Texture:** generate grain locally with inline SVG `feTurbulence` (zero asset, offline-safe); optional faint contour/topographic motif. No glassmorphism, no heavy patterns.
- **Color:** keep `HVI_COLORS`; validate via ColorBrewer (YlOrRd) + Viz Palette for CVD; every color AA on `#0d1620`; pins keep numerals (never hue-only).
- **Motion:** Motion + IntersectionObserver = the core (cross-browser, offline). CSS scroll-driven animations (`animation-timeline: view()`) only as `@supports` progressive enhancement — never bet the wow moment on a Firefox-flagged feature.
- **CSS polish (use):** container queries (the map+rail+table responsive layout), `clamp()` fluid type, `text-wrap: balance`, `color-mix()` (hairlines/tints), `content-visibility: auto` (offscreen sections), `:has()`. Responsive: `100svh`/`dvh` for the sticky map; on mobile **unpin** → stacked step cards + final map state.
- **Delight (tasteful, all reduced-motion-guarded):** the deal-the-five stagger, score count-ups, selection blink-then-settle, cross-highlight (row↔pin), a subtle hero-"5" heat-shimmer. **CUT:** sound, confetti/aurora/beams, cursor trails, scroll-jacking, horizontal-surprise, autoplay, 3D globe.
- **Gestures (use):** scroll-reveal, sticky-pin scrollytelling, map hover-highlight + click-select, keyboard (arrows cycle ranks, visible focus). **Avoid:** scroll-jacking, surprise horizontal scroll, hover-only (touch), autoplay.
- **Perf targets:** transform/opacity only; LCP <2.5s, CLS <0.1, INP <200ms; Lighthouse Perf ≥95 / A11y 100 desktop.

## Run / verify
`npm run dev` · `npm run build` (must stay green; needs no network) · `lighthouse` MCP `run_audit` (target Perf 95+/A11y 100 desktop). Check JS-off, reduced-motion, keyboard nav, AA contrast before recording.
