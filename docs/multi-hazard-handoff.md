# Hand-off: Sanctuary multi-hazard finalist build (post-ship)

> Written 2026-05-29 at the end of the multi-hazard upgrade session, for the next
> session. Self-contained: assumes no memory of the build conversation. The work is
> DONE, DEPLOYED, VERIFIED, and FROZEN. This doc gives you full context + a concrete
> re-verification checklist so you can double-check before the May 30 finale.

---

## TL;DR

Sanctuary (Seneca Energy Hackathon 2026, Theme 3 / PS2) is a finalist. This session
closed the two literal Problem-Statement-2 gaps a judge could attack (it was heat-only
and cooling-only) by adding, with real cited data and honest labels:

1. a **flood hazard layer + per-building flood row** (TRCA regulatory floodplain),
2. a **winter / energy-burden vulnerability lens** (ON-Marg 2021, NOT a fake cold map),
3. a **real modelled Malton 500 m catchment number** (~5,900),
4. copy upgrades (named stakeholders, weighting provenance, site-audit checklist,
   backup-power row, schools + replication roadmap),
5. full source/data-note provenance + a team pitch/Q&A handout.

**State:** live at https://project-sanctuary-seneca.vercel.app · git `main` HEAD
`4cc41f6` (in sync with origin) · frozen tag **`v2-multi-hazard-finalist`** (= code
commit `c07393a`) · Vercel deploy `dpl_HqWuuCLUNytayozTzz5R5N7PnjmV` (READY, aliased).
The deployed CODE commit is recorded in `.hackathon/event.yaml` `prod_code_commit`.

**Judged artifact is still the ArcGIS StoryMap + live pitch + Q&A.** This Next.js site
(`sanctuary/web/`) is the support showcase + clickable backup. Do not destabilize it.

---

## What shipped, wave by wave (commits)

| Commit | Wave | What |
|---|---|---|
| `715cbf5` | 1 | STAKEHOLDERS on /vision, weighting-provenance + site-audit checklist + grid anchor on /method, backup_power_status column + DetailPanel fact, schools + replication FUTURE tracks |
| `4c0c970` | 2 | Flood layer (TRCA layer 6, 295 polygons) + per-building flood_status, dual-method verified |
| `bbf95ac` | 3 | Winter / energy-burden lens (ON-Marg 2021 Material Resources), "why no cold map" note, year-round-case flag |
| `da916de` | 4 | Real Malton catchment (~5,900) + verified CT population (5,217) |
| `8a35ebb` | 5 | /sources 6 layers + 4 new SOURCE_LINKS; data notes; sources.md + scoring-notes.md |
| `c9c76d9`->`c07393a` | 5 | Pitch/Q&A talking points + winter-fact empty-data guard (rebased onto teammate's README) |
| `4cc41f6` | - | event.yaml prod_code_commit sync |

(SHAs after `c07393a` differ from the pre-rebase ones because I rebased my 6 commits
onto the teammate's `eb36f11` README change. Clean, no conflicts, disjoint files.)

---

## The verified data (every number is real-cited or labelled; trust these)

### Flood (per building) - `flood_status` column
Source: TRCA "Flood and Heat Vulnerable Areas in Peel", layer 6 (Floodline TRCA Polygon),
riverine regulatory floodplain (Hurricane Hazel Regional Storm / 100-year). **All 10
candidates are OUTSIDE the floodplain** (honest result for civic buildings). Dual-method
verified: local ray-casting + great-circle distance on full-precision geometry, cross-
checked against live ArcGIS spatial queries (intersects=0 for all 10; distances confirmed
within +/-15 m). Watershed from CVC's Credit River Watershed boundary.
- Near (modelled, ~N m): ranks 1 (~50), 2 (~30), 4 (~40), 5 (~280), 7 (~190), 8 (~70), 9 (~50)
- Outside (verified): rank 6 (Chinguacousy, 1138 m)
- **Not mapped by TRCA / Credit watershed (pending):** rank 3 (Susan Fennell), rank 10 (Cassie Campbell) - these are CVC's jurisdiction; saying "outside the floodplain" would be false.

### Winter / energy burden (per building) - `winter_vuln` column
Source: 2021 Ontario Marginalization Index (ON-Marg), Material Resources quintile per
census tract (St. Michael's Hospital + Public Health Ontario; StatCan 2021 Census). All
282 Peel tracts matched. 1 = low marginalization, 5 = high. Tagged `modelled`.
- **Malton = Material Resources quintile 5 (verified, not assumed).**
- **Year-round resilience case** (high on BOTH heat HVI>=4 AND winter>=4): ranks 1-4
  (Malton 5/5, Sri Guru Singh Sabha 5/5, Susan Fennell 5/4, Anjuman 4/4).

### Malton catchment - `reachable_population_est` = "~5,900"
Method: sum of 2021 populations of the **7 dissemination areas whose StatCan
representative point falls within 500 m** of Malton (-79.63854, 43.72354) = **5,855**,
displayed "~5,900", tagged modelled. Populations dual-source confirmed (ON-Marg DA file
== "Census 2021 Population by DA" service, exact). **Boundary-sensitive:** two large DAs
(35212311 pop 1817, 35211077 pop 1383) sit at 489-494 m; a geometric-centroid method
gives 6 DAs / ~4,472. Honest range is "roughly 4,500-5,900". Verified anchor beside it:
**CT 5350530.01 population = 5,217** (shown as a verified fact, Malton only via
`ct_population` column).

### Preserved locked facts (do NOT change)
Malton = HVI quintile 5 · community/tax-exempt owners reach the **15% Clean Electricity
ITC** (not 30% CTITC) · Brampton Lighthouse = 79 registered / 39 signed (refuge, not
solar) · do NOT claim Alectra GridExchange ran in Peel (it is a GGH template).

---

## Architecture you need to know

- **Data spine = CSV is source of truth.** `sanctuary/data/candidate-hubs.csv` ->
  regenerated into BOTH `sanctuary/data/candidate-hubs.geojson` and
  `sanctuary/web/public/candidate-hubs.geojson` (kept byte-identical). Columns added
  this session: `backup_power_status`, `flood_status`, `winter_vuln`, `ct_population`.
  These are CONTEXT facts, NOT scoring weights - the 35/25/20/10/10 model in
  `lib/hubs.ts scoreHub()` is FROZEN.
- **GOTCHA - line endings.** `candidate-hubs.geojson` is CRLF, no trailing newline.
  Regenerate with `JSON.stringify(fc, null, 2).replace(/\n/g, "\r\n")`; this reproduces
  it byte-for-byte. The HVI/flood/winter geojson are compact single-line (LF). The CSV
  is LF. `core.autocrlf=true` (CRLF warnings on commit are cosmetic). NEVER bulk-rewrite
  these with plain LF or you flip every line.
- **Map layers are static build-time GeoJSON, never runtime fetch (offline-safe).**
  `lib/load-map-data.ts` reads `public/*.geojson` at build; `lib/map.ts projectMap()`
  projects polygons to path strings; `MapStage.tsx` renders them. Flood rides
  `BaseLayer.flood`; winter reuses the HVI tract paths recoloured by `HviTract.winterQ`
  (joined by CTUID at build - no second polygon set ships).
- **Layer scripts** (one-shot, committed): `scripts/fetch-flood.mjs` (TRCA),
  `scripts/build-winter-vuln.py` (ON-Marg, needs `pip install openpyxl`). The catchment
  was computed via a scratchpad script; the value lives in the CSV (data note has the
  reproduction).
- **The one design exception:** flood = muted water-blue (`#4a9ee0`, `.flood-poly` +
  `.mc-sw-flood`), winter = indigo/violet ramp (`WINTER_COLORS`, `.winter-tract` +
  `.mc-sw-winter`). Nothing else in the design system changed.
- **Map toggle defaults:** heat on (lead), flood on (low-opacity overlay), winter OFF
  (toggle to compare), facilities/candidates/rings on. Flood + winter are explore-only
  (opacity 0 during the homepage scroll story, so the deal-the-five move stays heat-only).
- **Voice rule honored:** rendered site copy is em/en-dash-free (verified on all 6
  routes). Em dashes remain only in code comments + provenance docs, matching the
  existing codebase pattern (fetch-hvi.mjs, peel-hvi-data-note.md).

---

## DOUBLE-CHECK CHECKLIST (run these to re-verify before the finale)

```bash
cd sanctuary/web

# 1. Build stays green, offline
npm run build                       # expect: Compiled OK, TypeScript OK, 13 routes

# 2. Data integrity: CSV <-> both geojson identical + counts
node -e "const fs=require('fs');const a=fs.readFileSync('public/candidate-hubs.geojson','utf8'),b=fs.readFileSync('../data/candidate-hubs.geojson','utf8');console.log('identical:',a===b)"
for f in peel-hvi peel-flood peel-winter-vuln peel-facilities peel-fsa candidate-hubs; do node -e "console.log('$f', JSON.parse(require('fs').readFileSync('public/$f.geojson')).features.length)"; done
# expect: hvi 282, flood 295, winter-vuln 282, facilities 87, fsa 35, candidate-hubs 10
```

Live site (the shipped artifact):
```bash
BASE=https://project-sanctuary-seneca.vercel.app
for r in / /map /method /vision /sources /funding; do echo -n "$r "; curl -s -o /dev/null -w "%{http_code}\n" "$BASE$r"; done   # all 200
curl -s "$BASE/map" | grep -c 'flood-poly'        # ~295 (paths present in SSR -> JS-off safe)
curl -s "$BASE/map" | grep -c 'winter-tract'      # ~282
curl -s "$BASE/map" | grep -o '~5,900' | head -1  # Malton catchment present
```

Interactive (Claude Preview MCP, `preview_start sanctuary-web`):
- All 6 toggles flip (heat, winter, flood, facilities, candidates, rings).
- DetailPanel facts render per candidate; Malton shows "~5,900" + "5,217"; year-round flag on ranks 1-4 only; Susan Fennell flood = "not mapped by TRCA (pending)".
- "Play the decision" tour reaches Malton; 0 console errors.
- Lighthouse desktop (run on the LIVE url): /sources A11y 100 + Best-Practices 100; /map A11y 100 + Perf 100 (unthrottled).

Data-truth audit: every on-screen number verified (cited) or labelled modelled/pending;
rendered copy has 0 em/en dashes; locked facts intact (HVI 5, 15% CEITC, 79/39, no Peel
GridExchange claim).

---

## Provenance docs (where everything is sourced)

- `docs/peel-flood-data-note.md` - flood layer + the 10 per-building results + dual-method verification.
- `docs/peel-winter-vuln-data-note.md` - winter lens + the "why no cold map" reasoning + ON-Marg citation.
- `docs/malton-catchment-data-note.md` - the 7 DAs, exact 5,855, boundary sensitivity, sources.
- `docs/multi-hazard-talking-points.md` - the team's pitch/Q&A handout for the finale.
- `sanctuary/data/sources.md` + `scoring-notes.md` - updated; `sanctuary/web/lib/content.ts` `SOURCE_LINKS` + `DATA_LAYERS` carry the on-site provenance.

---

## Not done / possible next steps (optional, only if time)

- **Pitch + StoryMap rehearsal** is the team's parallel priority (the judged artifact).
- The winter lens could later add energy-explicit cost-burden data (CUSP Energy Poverty
  Explorer, 2016 - must label vintage). Roadmap-noted, not built.
- If a judge wants a more conservative catchment, "~4,500-5,900" is the honest range
  (see the catchment data note); the panel currently shows ~5,900 (StatCan rep-point method).
- The /map page is heavy (282 heat + 282 winter + 295 flood SVG paths) but Lighthouse
  desktop perf is still 100 unthrottled; no action needed unless mobile-throttle perf
  becomes a concern.

Nothing is broken. Nothing is fabricated. Build green, 6 routes 200, A11y 100, frozen + tagged.
