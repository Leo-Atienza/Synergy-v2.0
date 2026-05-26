# Sanctuary — Free Assets, Advanced Techniques & Hackathon-Site Playbook

> Compiled 2026-05-26. Companion to [`showcase-research-2026-05-26.md`](showcase-research-2026-05-26.md) (strategy/design direction) and `sanctuary/web/CLAUDE.md` (locked rules). This file is the **tactical layer**: free + license-clear assets that fit the theme, advanced front-end techniques to make the site fast/responsive/elegant/fun, and what actually lands with hackathon judges.
>
> **Note on X/Reddit:** both are login/bot-gated and could not be scraped directly. The picks below reflect the consensus captured in 2026 curated dev roundups, MDN/web.dev, and hackathon judging guides (which aggregate community opinion). Subs/accounts worth browsing yourself are listed in §D. Everything here is tuned to the **locked stack** (Next 16 / React 19 / hand-rolled d3-geo SVG / Motion / no Tailwind / dark heat-anchored palette / Fraunces + mono) and the hard constraints: **demo-safe (offline, recording-proof), anti-AI-slop, accessible.**

---

## §A — Free, theme-fit assets (free · license-clear · demo-safe)

### A1. Icons — PICK: **Phosphor** (copied as local inline SVGs, zero runtime dep)
Phosphor has the editorial personality that matches Fraunces + mono, six weights (thin→duotone), 9,000+ icons, MIT. For a serious civic-data site it reads more "designed" than the very neutral Lucide. **Lucide** is the clean, safe fallback (1,600+, MIT, the de-facto React default). Tabler is the "dashboard" look — we're explicitly *not* a dashboard, so skip.

- **Decision:** choose Phosphor, **copy the ~8 SVGs we actually need** into a local `components/icons/` (zero dependency, full control of stroke/size to match the hairline aesthetic, nothing unused in the bundle). If a runtime dep is preferred for speed, `@phosphor-icons/react` (tree-shakeable) or `lucide-react`.
- **Icon set to pull** (regular weight, ember only when it's a signal): map-pin / crosshair (hero), sun or thermometer-hot (heat/HVI), lightning + battery (solar/storage), buildings + books (library/rec/faith — use a neutral "buildings" not literal religious glyphs), shield-check or house-line (refuge/hub), check-circle / dots-three / warning (the verified/modelled/pending evidence key), arrow-up-right (external links).
- Sources: [Phosphor](https://phosphoricons.com/) (MIT) · [Lucide](https://lucide.dev/) (ISC/MIT) · [Tabler](https://tabler.io/icons) (MIT) · roundup [adhamdannaway.com/blog/icons/free-icon-sets](https://www.adhamdannaway.com/blog/icons/free-icon-sets) · [25+ open-source icon libraries 2026](https://hugeicons.com/blog/development/best-open-source-icon-libraries)
- **Rule:** ONE set only. Mixing icon families is a slop tell. Icons are punctuation, not decoration — use sparingly.

### A2. Imagery — PICK: **the map and the data ARE the imagery (≈zero photography)**
The anti-slop move for a map-led civic site is to let the Peel map, the ranked pins, and the real numbers carry the visuals. **Do not** add generic stock photos of solar panels, turbines, glowing earths, or diverse-people-pointing-at-screens — that is the literal slop signature and the doctrine bans it.

Where a *real* image genuinely strengthens the story, use **real, license-clear photos of the actual place/building** — never generic stock:
- **Wikimedia Commons** — 6.2M+ public-domain/CC0 images; search "Malton", "Mississauga", "Brampton", the actual building names. Attribute per file. [commons.wikimedia.org](https://commons.wikimedia.org/wiki/Commons:Free_media_resources/Map)
- **Municipal / building's own page** — City of Mississauga / Brampton facility pages and open-data hubs (the same source URLs already in `candidate-hubs.csv`). Confirm reuse terms.
- **Public-domain satellite/aerial** (only if it strengthens the heat story) — NASA Earth Observatory / Worldview, USGS/Landsat (public domain), NASA World Wind. [eos.com free-satellite-imagery list](https://eos.com/blog/free-satellite-imagery-sources/) · [Landsat (OSM wiki)](https://wiki.openstreetmap.org/wiki/Landsat)
- **OpenAerialMap** — openly licensed (CC-BY 4.0) aerial/UAV imagery.
- If you use OSM-derived basemap tiles anywhere, credit "© OpenStreetMap contributors" (ODbL). [openstreetmap.org/copyright](https://www.openstreetmap.org/copyright)
- General free-photo libraries (Unsplash/Pexels) — allowed but **only for a specific real place**, never as generic "energy" mood imagery. Default to *not* using them.

### A3. Texture / depth — PICK: **generate grain locally with inline SVG `feTurbulence` (zero asset)**
A whisper of grain over the dark field reads "premium/tactile" and breaks flat color — and it's generated in-page, so there's nothing to download and nothing to break offline. Layer noise under the existing palette, low opacity. Optionally add a **very faint topographic/contour SVG** as a background motif (it echoes the heat map without being literal).
- How-to: [CSS-Tricks — Grainy Gradients](https://css-tricks.com/grainy-gradients/) · [freeCodeCamp — grainy backgrounds via SVG filters](https://www.freecodecamp.org/news/grainy-css-backgrounds-using-svg-filters/) · [Codrops — feTurbulence texture](https://tympanus.net/codrops/2019/02/19/svg-filter-effects-creating-texture-with-feturbulence/)
- Generators (if you'd rather author a static SVG): [fffuel nnnoise](https://www.fffuel.co/nnnoise/) · [fffuel gggrain](https://www.fffuel.co/gggrain/) · [uwarp nnnoise](https://www.uwarp.design/nnnoise) — all free.
- Subtle SVG patterns (use *very* sparingly): Hero Patterns. **Avoid** heavy patterns/glassmorphism — overdone.

### A4. Color — validate the heat ramp (don't redesign it)
Keep the `HVI_COLORS` quintile ramp; just prove it's colorblind-safe + WCAG-AA on the dark field, and never rely on hue alone (pins already carry numerals — keep that).
- **[ColorBrewer](https://colorbrewer2.org/)** — its sequential **YlOrRd** *is* a heat ramp and is flagged colorblind-safe; use it to sanity-check/space the 5 quintile steps.
- **Viz Palette (Elijah Meeks)** — paste the 5 quintile hex values; it reports which colors collide under protan/deutan/tritan CVD. [projects.susielu.com/viz-palette]
- **Contrast:** [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) / [Adobe color accessibility](https://color.adobe.com/create/color-accessibility) — every text/UI color must clear AA (4.5:1 normal, 3:1 large) on `#0d1620`.
- Reference: **viridis/cividis** are the gold-standard perceptually-uniform, CVD-safe sequential ramps if you ever need a continuous scale (not for the discrete quintiles).

---

## §B — Advanced front-end techniques (fast · responsive · elegant · fun)

All mapped to the locked stack. **Rule of thumb:** Motion + IntersectionObserver drives the *core* experience (cross-browser, demo-safe); modern CSS adds polish as *progressive enhancement* behind `@supports`. Never bet the wow moment on a flagged feature.

| Technique | What it buys | Where in Sanctuary | Ready / demo-safe? | Verdict |
|---|---|---|---|---|
| **Motion + IntersectionObserver** | The scroll-pinned "deal the five", reveals, count-ups | The signature move + all reveals | ✅ cross-browser, offline | **Core — use** |
| **CSS scroll-driven animations** (`animation-timeline: view()/scroll()`) | Native, GPU, zero-JS section reveals | Cheap entrance reveals on editorial sections | Chrome/Edge/Safari 18 ✅; Firefox behind flag (~85% caniuse) | **Progressive enhancement** behind `@supports`; Motion fallback. Don't use for the wow. |
| **View Transitions API** (same-document) | Buttery crossfades between map states/sections | Section/state transitions | Chrome/Edge/Safari ✅; FF partial | **Nice-to-have**, Chrome/Safari only; Motion already covers it |
| **Container queries** (`@container`) | Components respond to their own width | The map + rail + candidate table responsive layout | ✅ broad support | **Use** |
| **Fluid type** `clamp()` | One scale, no breakpoints, the giant "5" | Type scale + hero | ✅ universal | **Use** |
| **`text-wrap: balance` / `pretty`** | Headlines/paras wrap elegantly, no orphans | All headings + lead copy | ✅ supported, graceful fallback | **Use** (free polish) |
| **`color-mix()`** | Hairlines/tints derived from the palette | `--hairline`, hover tints, evidence states | ✅ 2023+ | **Use** |
| **`@property`** | Animatable custom props (gradient angle, counters) | Hero "5" heat-shimmer, score count-up | Chrome/Safari/FF 2024+ | **Optional** polish |
| **`content-visibility: auto`** | Skip rendering offscreen sections | Long editorial sections below the map | ✅ Chromium; harmless elsewhere | **Use** (perf) |
| **`:has()`** | Relational styling (dim siblings on hover) | Candidate table / legend interactions | ✅ all major 2023+ | **Use** tastefully |
| **`scroll-snap`** | Snappy step sections | The 5 scrolly steps | ✅ supported | **Cautious** — can fight the pin; test or skip |

Sources: [MDN scroll-driven animations](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Scroll-driven_animations) · [Josh Comeau — Scroll-Driven Animations](https://www.joshwcomeau.com/animation/scroll-driven-animations/) · [Chrome — scroll-triggered animations (Chrome 145)](https://developer.chrome.com/blog/scroll-triggered-animations) · [WebKit — Interop 2026](https://webkit.org/blog/17818/announcing-interop-2026/)

### B1. Fast + responsive checklist (this exact site)
- Animate **only `transform` + `opacity`** (GPU); never `width/top/left`; no `transition: all`.
- **IntersectionObserver**, never scroll-event listeners, for step triggers.
- **`content-visibility: auto`** + `contain` on offscreen editorial sections.
- **`next/font/local`** (already staged) → zero font CLS.
- **RSC by default**; ship JS only for the one map island (per the architecture plan).
- **No runtime data fetch** — GeoJSON bundled at build (offline-safe); ArcGIS iframe stays `loading="lazy"`.
- `will-change` only on the actively-animating element, removed after.
- **Responsive:** container queries; `100svh`/`dvh` (not `vh`) for the sticky map (avoids mobile-bar jump); on small screens **unpin** the map and render the 5 steps as stacked cards with the final map state (same as the reduced-motion path).
- Targets: LCP < 2.5s, CLS < 0.1, INP < 200ms; Lighthouse Perf ≥95 / A11y 100 desktop (verify with the `lighthouse` MCP).

### B2. "Fun / delight" — tasteful + demo-safe shortlist
- The **staggered "deal the five"** (spring or `cubic-bezier(.34,1.56,.64,1)` overshoot) — the signature delight.
- **Number count-ups** on the score (and reachable population once filled) — respect reduced-motion (show final value instantly).
- **Selection feedback:** pin/row **blink-then-settle** (Rauno's rule), not a static outline.
- **Magnetic / spring hover** on the primary CTA only (subtle).
- **Hover-to-highlight cross-link:** hovering a candidate row glows its map pin and vice-versa.
- **Hero "5" heat-shimmer:** a slow, low-amplitude gradient/opacity pulse (reduced-motion off) — one tasteful signature flourish.

### B3. Too far — CUT (slop / demo-risk)
Sound effects (risk on camera) · confetti / aurora / beams / sparkles · cursor trails · scroll-jacking (hijacking scroll speed) · surprise horizontal scroll · autoplay video/carousels · parallax-for-its-own-sake · 3D/WebGL globe · typewriter text · hover-only interactions that die on touch · any motion without a `prefers-reduced-motion` path.

---

## §C — Hackathon-site playbook (judges · gestures · examples)

### C1. What judges actually notice in the first 10–30 seconds (sourced)
- **Clarity beats completeness** — "a simple product with three features that work perfectly beats a massive platform where nothing works." ([DoraHacks judging](https://medium.com/hidorahacks/how-to-design-a-hackathon-judging-plan-9fb0e844fc41), [Eventornado](https://eventornado.com/blog/how-to-judge-a-hackathon-5-criteria-to-pick-winners))
- **Design is the tie-breaker** — "a clean, intuitive interface immediately signals professionalism" to judges reviewing dozens of projects. ([underratedcoder roadmap](https://www.underratedcoder.com/blog/how-to-win-a-hackathon-complete-step-by-step-roadmap-2026-guide))
- **Lead with a demo, not slides** — "focus on a demo of your hack rather than a presentation"; structure = problem → solution → demo → impact → next steps.
- **Real, working, on first try** — judges reward execution + a specific underserved audience + real data over raw novelty. (Sanctuary's verified HVI + honest labels are exactly this.)
- **Turn-offs:** tech-stack name-dropping, broken/empty states, generic template look, no demo focus, no closing line. ([MLH judging](https://guide.mlh.io/general-information/judging-and-submissions/judging-plan), [TAIKAI](https://taikai.network/en/blog/hackathon-judging))

### C2. Narrative structure for the site (and the recording)
Hook → Problem → the ONE wow → Proof → Ask:
1. **Hook (first frame):** the giant **"5"** + Malton + a real heat number (e.g., "Pearson hit 35.8 °C — 5 km from here").
2. **Problem:** heat risk is uneven + the shelter gap (real Peel HVI).
3. **The wow:** the scroll-pinned map *deals out the five* and lands on Malton. **Make it legible in a screen-recording** — pause on it, large type, one clear motion, no clutter.
4. **Proof:** the honesty box (verified/modelled/pending), the real HVI source, the transparent score.
5. **Ask / close:** "Harden these five first — then repeat across Alectra's territory." One memorable closing line; never trail off.

### C3. Gestures — use vs avoid (tuned to a map-led decision site)
| Use (modern, expected, satisfying) | Avoid (dated / annoying / inaccessible) |
|---|---|
| Scroll-reveal entrances; **sticky-pin scrollytelling** (the signature) | **Scroll-jacking** (hijacking scroll speed/length) |
| Map **hover-to-highlight + click-to-select**, bidirectional with the list/table | Surprise **horizontal scroll** |
| **Keyboard** nav (arrows cycle ranks, Enter/Space select, visible focus) | **Hover-only** reveals (break on touch/mobile) |
| Click-to-expand detail; smooth in-page anchor scroll | **Autoplay** carousels/video; anything needing sign-in to see the wow |
| Optional **before/after swipe** ("official cooling only" → "+ trusted buildings") | Motion with **no reduced-motion** fallback |

### C4. Examples & inspiration to study
Most individual hackathon project sites aren't archived or notable — the transferable craft is **data-journalism scrollytelling**. Study these:
- **Webflow — "Made in Webflow: Hackathon"** gallery (real hackathon site designs): [webflow.com/made-in-webflow/hackathon](https://webflow.com/made-in-webflow/hackathon)
- **Awwwards — Scrolling / Scrollytelling** galleries: [awwwards.com/websites/scrolling](https://www.awwwards.com/websites/scrolling/)
- **Shorthand — 12 scrollytelling examples** (incl. a climate/wildfire piece where "maps and charts build themselves in sync with the scroll"): [shorthand.com/the-craft/scrollytelling-examples](https://shorthand.com/the-craft/scrollytelling-examples/index.html)
- **The Pudding** ([pudding.cool](https://pudding.cool/)) + **NYT climate graphics** — the register to aim for (already in the design dossier).
- Scrolling-pattern guide: [Lovable — scrolling designs, when to use each](https://lovable.dev/guides/scrolling-designs-patterns-when-to-use)

### C5. Anti-patterns (make-it-look-amateur list, sourced)
Overscoping; no demo moment; slick homepage / shallow substance; generic or recycled idea; ignoring the judging criteria; tech-jargon-heavy pitch; empty states with no seed data; broken live demo with no backup; no closing line. (MLH / DoraHacks / TAIKAI judging guides, above.)

---

## §D — Where to keep watching (X / Reddit / accounts)
Direct scraping is gated, so browse these yourself:
- **Reddit:** r/web_design, r/Frontend, r/webdev, r/UI_Design, r/dataisbeautiful (map/viz craft), r/SideProject & r/hackathon (project-site feedback). Search "free icons", "free images not stock", "what won the hackathon".
- **X / design-engineering for this exact aesthetic:** Josh W. Comeau, Rauno Freiberg, Emil Kowalski, Paco Coursey, the Vercel/Linear design orbit (motion + craft); for data-viz: The Pudding, Nathan Yau (FlowingData), Elijah Meeks (viz-palette).
- **Galleries to calibrate "award-tier":** Awwwards, Godly.website, SiteInspire, Land-book.

---

## §E — Locked picks (the decisive shortlist)
1. **Icons:** Phosphor (regular), copied as ~8 local inline SVGs — zero dep. Lucide = fallback.
2. **Imagery:** the map + data are the visuals; real-place photos (Wikimedia/municipal) only when specific; **no stock**.
3. **Texture:** inline SVG `feTurbulence` grain (zero asset) + optional faint contour motif.
4. **Color:** keep `HVI_COLORS`; validate via ColorBrewer YlOrRd + Viz Palette; AA on dark; numerals on pins.
5. **Motion:** Motion + IntersectionObserver core; CSS scroll-driven animations as `@supports` progressive enhancement.
6. **CSS polish:** container queries, `clamp()`, `text-wrap: balance`, `color-mix()`, `content-visibility`.
7. **Delight:** deal-the-five stagger, count-ups, blink-then-settle, hero heat-shimmer — all reduced-motion-guarded. **Cut:** sound, confetti, beams, cursor trails, scroll-jacking, 3D globe.
8. **Gestures:** scroll-reveal + sticky scrollytelling + map hover/select + keyboard. Avoid scroll-jacking, horizontal-surprise, autoplay, hover-only.
9. **Judge framing:** clarity > completeness; demo-led; hook = "5" + Malton + a real heat number; close with "harden these five, then scale."
