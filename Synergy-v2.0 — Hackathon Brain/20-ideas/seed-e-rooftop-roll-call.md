---
title: Seed E — Rooftop Roll Call
type: idea
status: draft
updated: 2026-05-21
sources: ["[[../README]]", "[[seed-ideas]]", "[[../../docs/energy-domain]]", "[[../../docs/themes]]", "[[../../docs/uniqueness-principles]]"]
---

# Seed E — Rooftop Roll Call (Toronto's 100 best unbuilt solar sites)

> **Round-2 seed.** Surfaced 2026-05-21, same session as [[seed-d-tide]]. This is the *produce* play to Tide's *save* play. **Pure context — not a commitment.** Final pick at `/hackathon:ideate`.

## Theme alignment

Theme 1 (Clean Energy Generation & Integration) — bullseye on the organizers' own sample: *"identify good locations for small-scale solar… using publicly available data."* Theme 3 thread (whose roofs, whose neighbourhoods get generation investment).

## The wedge

Toronto's single biggest under-used generation asset isn't homes — it's the **thousands of flat commercial/industrial roofs** (big-box retail, distribution centres, schools, arenas, public-works yards) sitting empty. NRCan's pan-Canadian PV-potential dataset + Toronto Open Data building footprints can pinpoint and rank them — **but nobody has published the list.**

Rooftop Roll Call does the work nobody's done: ranks Toronto's flat roofs by buildable PV potential and **publishes the named Top 100**. Per roof: address, est. nameplate kW, est. MWh/year, CO₂ offset, household-equivalents, and (where in public records) the owner. A public counter: *"Top 100 built today = 340 GWh/year ≈ 31,000 Ontario homes."* One-click **"Endorse this roof"** adds a name to a public nudge list.

Narrow shippable thing: a Toronto map with the Top 100 ranked + one detail card. Vision in pitch: a buildable spec with named assets, not another "Ontario should do more solar" chart.

## 10-second demo moment

> **Map of Etobicoke.** Click a specific big-box roof — **"Costco, 1411 Warden / pick a real one — 12,400 m². 2.4 MW potential. ~3,100 MWh/year. Offsets 290 homes. Panels today: zero."** Zoom out: **"99 more like this. The list is public. The roofs are visible from space."**

A named, real, satellite-verifiable asset (Local-Detail §2.2) + the Permission-Break of publishing a ranked accountability list nobody dared (§2.11) + the Embodied-Number (homes-equivalent, §2.10).

## Data sources

- **Toronto Open Data** — building footprints / 3D massing (roof area + height); ward + neighbourhood boundaries. <https://open.toronto.ca/>
- **NRCan PV Potential & Solar Resource Maps** — municipal kWh/kW-yr yield. <https://natural-resources.canada.ca/energy-sources/renewable-energy/photovoltaic-potential-solar-resource-maps-canada>
- **MPAC / assessment or open ownership records** — owner attribution for the Top 100 (best-effort; flag gaps).
- **OEB net-metering + IESO** — revenue/offset math at current rates.
- **ECCC NIR factors** — CO₂ offset per MWh displaced (Ontario grid is clean, so frame offset as *marginal gas displaced* + exportable clean electrons, not naive grid-average).

## Why it could win (4-axis rubric)

- **Technical (25%)** — geospatial pipeline: footprint ingest → flat-roof classifier (footprint area + low height-variance heuristic, manual-verify Top 100) → PV-yield join → ranking. Real GIS engineering.
- **Design (25%)** — map-as-the-whole-app, no chrome; one ranked list, one detail card. Satellite imagery does the persuading.
- **Originality (25%)** — residential solar tools are everywhere; **commercial flat-roof aggregation with a named public ranking** is rare and journalist-friendly (Carl Meyer / The Narwhal bait).
- **Impact (25%)** — output is a *buildable plan*. If even 10% of the Top 100 get developed, that's real new generation. Decision-support for the City climate office, IESO siting, solar developers.

## Risks

- **Doesn't itself produce kWh** — it specifies potential. Be honest: this is a siting/accountability tool, the highest-signal "produce" move buildable in 96 h. Don't claim it generates power.
- **Flat-roof classification noise** — heuristics misfire on sloped/obstructed roofs. Mitigation: hand-verify only the Top 100 (tractable N).
- **Owner attribution sensitivity** — naming owners invites pushback. Frame as opportunity ("these roofs could earn $X/yr"), not blame; make endorsement opt-in and positive.
- **PV yield ≠ installable capacity** — setbacks, structural load, shading cut the theoretical max. Apply a conservative derate (e.g., 0.6×) and say so.

## Stack flexibility

- **Web:** Next.js + MapLibre GL (vector tiles, not raw GeoJSON — 100s of polygons) + a precomputed score table (Supabase/Postgres or a static JSON).
- **Python pipeline:** GeoPandas + rasterio (PV raster sampling) builds the score table once; a light frontend just renders it. "Build the table once" is simplest and demos identically.

## Differentiation note

Lead with the **named roof**, not the methodology. *"This Costco roof could power 290 homes and has zero panels"* beats any aggregate. The ranked public list IS the artifact — make it downloadable (CSV) and embed an open methodology page (CalEnviroScreen-style transparency).

## Ontario → elsewhere

Any city with open building footprints + a national PV-potential layer (most of Canada via NRCan; US via NREL) is a drop-in. The classifier + ranking + map are city-agnostic; only the two data layers change.

## Cross-references

- [[seed-d-tide]] — sibling round-2 seed (the *save* play)
- [[../../docs/energy-domain]] — NRCan PV potential, Open Data Toronto, net metering
- [[seed-b-ontario-enviroscreen]] — shares the geospatial-pipeline + map-as-app shape
- [[../README]] — scoring rubric

## Comparison with siblings

| | Seed D (Tide) | **Seed E (Roll Call)** | Seed F (Backwards Hour) |
|---|---|---|---|
| Save vs Produce | Save (shift) | **Produce (site)** | Save (behavioural) |
| Moves kWh now? | Yes | Specifies potential | Yes if users comply |
| Demo | Hardware + live | **Map + named roof** | Notification ritual |
| Hardware | Yes | No | No |
| LOC | ~200 | ~300 | ~250 |
| Pattern-break | Hardware-Surprise | **Permission-Break + Local-Detail** | Format-Inversion |

## Pre-commitment notes for `/hackathon:ideate`

- If May 24 emphasizes **generation / siting / "where should we build"** → strongest seed.
- If a **solar / developer / municipal sponsor** appears → direct fit.
- If scope must shrink → drop to **one neighbourhood's Top 20** (Scarborough, Etobicoke industrial) — demos identically, less pipeline.
- If "produce" framing is the challenge but commercial-roof data is thin → pivot the same pipeline to **school roofs** (public, sympathetic, ties to Theme 3).
