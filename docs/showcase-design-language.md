# Sanctuary showcase — design language (researched 2026-05-26)

The visual + UX spec for the [showcase redesign](plans/2026-05-26-001-showcase-redesign-interactive-map.md).
Grounded in real, on-theme references found online. **Adopt the proven *patterns and UX conventions*
below; keep the visuals and copy original to Sanctuary** (no cloning — civic-data craft, not AI slop).

## Theme fit (what the design must say)
Sanctuary is a **civic heat-resilience field report**: serious, warm-but-grave, sourced, map-first.
Mood = "a planner's trustworthy decision tool," not a flashy SaaS dashboard and not alarmist climate-doom.
The feeling the map should give: *slow down, look at where the heat actually is, decide which five buildings.*

## Reference set — what to steal from each

| Reference | URL | Steal this |
|---|---|---|
| **Probable Futures** (by Moth Design) | https://probablefutures.org/maps/ · https://www.moth.design/projects/probable-futures/ | **Keep cells discrete** (don't smooth quintiles into a fake gradient — the grid *is* the honesty). **Minimal map chrome** — few controls, big map, "functionality to a bare minimum" so anyone can focus. Editorial pacing that makes you slow down. |
| **First Street / Risk Factor** | https://firststreet.org/ · https://help.firststreet.org/hc/en-us/articles/9685765015319-How-to-interpret-interactive-Heat-Maps | **Place lookup → a single 1–N score** (they do address → 1–10 risk). Our analog: postal-code/place → nearest candidate hubs + the HVI quintile there. Tabbed map views (current / community). Plain-language score interpretation. |
| **NYC Heat Vulnerability Index** | https://a816-dohbesp.nyc.gov/IndicatorPublic/data-features/hvi/ | **Click a census tract → read its indicators** (exposure/sensitivity/adaptive-capacity). This is *exactly* our tract-click readout — it's the domain-standard interaction. |
| **Philadelphia HVI tool** | https://link.springer.com/article/10.1007/s11524-020-00443-9 | Public-facing HVI map that **links each priority area to resources/actions** — our "candidate hub → what to verify next." |
| **ASU / Tempe Heat Webtool** | https://globalfutures.asu.edu/sustainable-cities/heat-vulnerability-map-and-cooling-solutions-webtool/ | **Multi-scale** (city → neighbourhood → site) + **cooling *solutions* layered on vulnerability** — vulnerability isn't the end, the intervention is. Mirrors heat-risk → candidate hubs. |
| **Climate–Conflict–Vulnerability Index** (Truth & Beauty) | https://www.truth-and-beauty.net/ | Award-winning vulnerability cartography: restrained palette, heavy typographic hierarchy, the map carries the argument. |
| **CARTO best maps 2024 · Esri StoryMaps winners** | https://carto.com/blog/2024-best-maps-dataviz/ · https://www.esri.com/arcgis-blog/products/story-maps/announcements/congratulations-to-the-2024-arcgis-storymaps-competition-winners | Current conventions for map-led civic stories (Esri = our sponsor; mirror StoryMap-winner structure since judges know it). |

## The synthesized direction

### Identity / mood
- **"Civic field report × refuge-vs-heat."** Document-like, editorial, sourced. Warm-grave, not neon, not doom.
- Calm, protective framing (it's *Sanctuary*) — the danger is the heat map; the answer is the trusted building.

### Layout & navigation
- **Multi-page, top nav** (Overview · Map · Method · Vision · Sources). Generous whitespace, section rhythm 96–128px, hairlines not heavy boxes (existing tokens).
- Each page does ONE job. The map page is full-bleed; content pages are a readable measure (~64–72ch).

### The map (the centerpiece) — the rules that matter most
- **Discrete quintile cells**, never a smoothed gradient (Probable Futures). The `HVI_COLORS` ramp stays; cells keep crisp edges + the numeral.
- **Big + always interactive**: pan/zoom/pinch/keyboard, full viewport minus nav.
- **Minimal chrome, foldaway overlays**: the legend and the layer-controls are **collapsible** (default expanded desktop / collapsed mobile) so the map stays the focus. (This is the user's collapsible-legend ask + Probable Futures' "bare minimum.")
- **Click-to-read**: clicking a tract reveals its real exposure/sensitivity/adaptive-capacity quintiles; clicking a hub opens the honesty detail panel (NYC/Philly HVI pattern).
- **The decision is the payoff**: the optional "Play the decision" tour runs RISK→GAP→CANDIDATES→deal #5→#1→Malton. The map ends on an *answer*, not a vibe (Truth & Beauty: the map carries the argument).
- **NICE-TO-HAVE (only if buffer): place lookup** — type a Peel postal code / place → fly there, show the HVI quintile + nearest candidate hubs (First Street's address-search pattern). Honest: "nearest *candidate* hubs," not "go here in an emergency."

### Color
- Keep the **heat ramp** (`HVI_COLORS`, blue→ember), validated against **ColorBrewer YlOrRd** + checked for colour-vision-deficiency; every fill AA on `#0d1620`. Ember (`--signal`) = signal only (CTA, selected, the "5"). Never decorative.

### Typography
- **Fraunces** (variable serif) for display + the "5"; quiet sans for body; **mono (JetBrains Mono) for ALL data** (HVI, scores, ranks, addresses, honesty tags) with `tabular-nums`. Never change weight on hover.

### Motion
- `motion@12.40.0` only, transform/opacity only, every animation `useReducedMotion`-guarded. The legend/controls collapse is a height+opacity transition (instant when reduced). No autoplay, beams, parallax, scroll-jacking.

### Imagery / texture
- **Real Malton/Peel photography** (Wikimedia, licensed + attributed) — the building people trust, the real corner. **No stock photos**, no solar-panel/turbine clip art. The map + data ARE the hero visuals. Optional faint inline-SVG grain/contour texture (offline, zero asset).

## Per-page design notes
- **Overview (`/`)** — hero (ember "5" + "harden" + Malton + the sourced 35.8 °C), problem in 3 lines, the condensed deal-the-five hook, cards into Map/Method/Vision/Sources.
- **Map (`/map`)** — the centerpiece per "The map" rules above.
- **Method (`/method`)** — the 35/25/20/10/10 score as a readable diagram + the real-vs-estimated box.
- **Vision (`/vision`)** — honest staged roadmap (walksheds → audits → public app → Alectra scale).
- **Sources (`/sources`)** — provenance table, every URL, the verified/modelled/pending key, judge Q&A.

## Do NOT (anti-slop firewall — reaffirmed)
No Tailwind look (slate/zinc gradients, 3-column emoji features, centered-tagline-+-two-buttons hero).
No gradient-clip wordmart, no glassmorphism, no purple/blue SaaS gradients, no Inter-as-display.
No smoothed heat blob (keep discrete cells). No colour-only meaning. No stock photography. No "AI-powered" copy.
Every number real or labelled. (Full list: [`sanctuary/web/CLAUDE.md`](../sanctuary/web/CLAUDE.md).)
