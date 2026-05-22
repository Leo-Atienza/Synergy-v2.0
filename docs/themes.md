# Seneca Energy Hackathon 2026 — Themes (verbatim)

> Source: "Energy Hackathon 2026 — Themes" handout, distributed at the pre-event info session on 2026-05-15 (Newnham Campus). Transcribed verbatim from photographs of the printed sheets. Original prose preserved including original grammar (e.g., "communities' experience" in Theme 3, original wording).
>
> **Angle libraries backfilled 2026-05-15** from the deep-research dossier (`research-dossier.md`). Full cards in `Synergy-v2.0 — Hackathon Brain/20-ideas/seed-ideas.md`. Top-3 seeds (⭐) have dedicated files.

---

## Theme 1: Clean Energy Generation and Integration

Canada is moving toward cleaner energy, and communities are exploring how solar, wind, and other renewable sources can support a sustainable future. This theme focuses on how clean energy can be understood, planned, and communicated in simple and creative ways. Students can think about how maps, visuals, or digital tools can help people learn about renewable energy, understand where it can be useful, or see how it fits into everyday life. The goal is to help people imagine how clean energy can grow in their communities in a clear and practical way.

**Sample example:** Students might explore how a community could identify good locations for small-scale solar or wind installations using publicly available data. The goal would be to help people understand where clean energy could be useful and how it might fit into local planning.

### Angle library — for `/hackathon:ideate`

| # | Angle | Wedge | Data source |
|---|---|---|---|
| 1 | OpenIESO.ca (fork OpenNEM) | Live dashboard updates every 5 min showing Ontario's fuel mix | IESO via GridStatus Python SDK |
| 2 | ⭐ api.carbonintensity.ca | Public API + embeddable widget — "plug in EV at 2 AM for half the carbon" | IESO Real-time Totals + ECCC NIR fuel-mix factors |
| 8 | Carbon-Aware EV Router | Routing optimizer: Toronto→Sudbury saves 8 kg CO₂ vs naive | IESO Gen Output by Fuel + Ivy/FLO/ChargePoint APIs |
| 11 | Heat Pump + Solar Calculator (renter lens) | Type address → archetype + payback under HRS 2025 + renter section | Toronto MLAR + NRCan PV potential + Enbridge HRS |
| 13 | WhatPoweredYourPhone.ca | "Your phone was 78% nuclear, 19% hydro, 3% gas" share-card | IESO Gen Output by Fuel Hourly |
| 15 | Peatland Carbon Dashboard (HBL) | "1.3 Bt stored = 40 yrs of Canada vehicle emissions" | ECCC carbon stocks + NRCan peatland + CWFIS fire data |

> Cross-theme: #1, #2, #8 also fit Theme 2; #11 also fits Theme 3.

---

## Theme 2: Smart Grid, Resilience and Electrification

Energy systems are changing as more people use electric vehicles, electric heating, and new technologies. At the same time, weather events are becoming stronger and more frequent. This theme looks at how communities and utilities can prepare for the future by understanding how the grid works and how it can adapt. Students can explore ideas that help explain energy use, show how systems respond to change, or support planning for stronger and more reliable infrastructure. The focus is on simple tools or visuals that help people understand how a modern grid supports daily life.

**Sample example:** Students could look at how a neighborhood might prepare for increased electric vehicle adoption by visualizing charging needs or understanding how weather events affect local energy use. The focus would be on simple tools that help explain how the grid supports daily life.

### Angle library — for `/hackathon:ideate`

| # | Angle | Wedge | Data source |
|---|---|---|---|
| 1 | OpenIESO.ca | Same as Theme 1 — applies via grid framing | IESO via GridStatus |
| 2 | ⭐ api.carbonintensity.ca | Same as Theme 1 — applies via TOU/ULO framing | IESO + ECCC |
| 5 | ⭐ Outage Equity Index | Replay May 2022 derecho with equity overlay; live scraping | Toronto Hydro + Hydro One outage maps + ON-MARG |
| 8 | Carbon-Aware EV Router | EV routing aware of grid carbon mix | IESO + charger APIs |
| 10 | DR Game Layer (OhmConnect for Ontario) | Push dishwasher to 11pm → score rises | Green Button + ULO + IESO |
| 14 | Tower Renewal Energy Estimator | Click 1968 tower → 87% reduction with retrofit + heat pump + balcony PV | Toronto Open Data + ENERGY STAR PM medians |

> Cross-theme: #5 also fits Theme 3; #14 also fits Themes 1+3.

---

## Theme 3: Community Energy, Equity and Sustainability

Not all communities' experience energy and climate challenges in the same way. Some face higher costs, more outages, or greater exposure to extreme weather. This theme focuses on fairness and community well-being. Students can explore how data and maps can help show differences between neighborhoods, highlight community needs, or support planning for a more sustainable and inclusive future. The goal is to create clear and accessible ideas that help decision makers understand where support or investment can make the biggest difference.

**Sample example:** Students might explore how different communities experience energy costs or climate impacts and create a visual that helps identify where support or investment could make a positive difference. The goal would be to highlight community needs in a clear and accessible way.

### Angle library — for `/hackathon:ideate`

| # | Angle | Wedge | Data source |
|---|---|---|---|
| 3 | Toronto Building Disclosure Map | Type Seneca's address → see emissions + retrofit savings (LL97 for Toronto) | open.canada.ca large-buildings + EWRB |
| 4 | ⭐ OntarioEnviroScreen | Toronto map; Etobicoke 92/100 vs Forest Hill 12/100; pollution + demographic + energy access score | EnergyPoverty + ON-MARG + StatCan + AQHI + IESO peakers + Climate TRACE |
| 5 | ⭐ Outage Equity Index | Same as Theme 2 — applies via equity-of-restoration framing | Outage maps + ON-MARG + tower inventory |
| 6 | "Cool & Clean" Heat Equity Router | Route Scarborough address to nearest accessible cool space; AC + transit + asthma-aware | Toronto Open Data Cool Spaces + TPH HVI + AQHI + TTC GTFS |
| 7 | School Energy Report Card | Type "Newnham Campus" → see grade vs board vs province | O.Reg 25/23 PDFs (scrape) + StatCan + ENERGY STAR PM |
| 9 | Northern Ontario Diesel-to-Solar Calculator | Show diesel cost + GHG vs solar-hybrid for a specific Northern FN community | NRCan Remote Communities DB + PV potential + Wataynikaneyap |
| 11 | Heat Pump + Solar Calculator (renter lens) | Type address → archetype + payback + renter-specific guidance | Toronto MLAR + NRCan PV + HRS rebates |
| 12 | Ontario Polluter Dashboard | Top 20 polluters; click → see surrounding census-tract demographics | Climate TRACE + Canada GHGRP + StatCan |
| 14 | Tower Renewal Energy Estimator | Same as Theme 2 — applies via gentrification-aware framing | Toronto Open Data + ENERGY STAR PM |

> Cross-theme: #5 also fits Theme 2; #11 + #14 also fit Theme 1.

---

## Cross-theme observations (not on the handout — our reading)

- **Common thread:** all three themes explicitly call out **maps, visuals, digital tools, simple tools** — the organizers are nudging toward data-viz / explainer / planning-tool projects, not full-stack consumer apps. Demo moment should land visually in <10 seconds.
- **Audience framing:** every theme says "help people understand" or "help decision makers understand" — judges likely score communication clarity as a major axis.
- **Canadian context:** Theme 1 explicitly mentions Canada; assume judges expect Canadian datasets (Statistics Canada, ECCC, IESO grid data, Open Data Toronto, etc.) over US/global data where both exist.
- **Equity framing in Theme 3** is the broadest — easiest to pivot scope without breaking theme alignment if challenge unveil on May 24 narrows things further.
- **Theme 3 "decision makers"** suggests the *user persona* of the demo could be a planner / policymaker, not an end-consumer. That changes UI tone (dashboards over consumer apps).

## Reference for `/hackathon:ideate`

When scoring 5–10 ideas, weight against:
1. Which theme it lands in (state explicitly)
2. Whether the demo moment is visual + <10s (per cross-theme observation #1)
3. Whether it uses Canadian / Toronto / Ontario data (per #3)
4. Whether the user persona matches the theme's framing (per #5 for Theme 3)
5. Whether it picks up an "underserved-communities" or "equity" framing — explicitly rewarded by judges across past energy hackathons (e.g., Incenzo won MIT Energy Hack 2024 1st with this angle)
6. Whether it has a "Monday-morning use" — judges believe concrete impact, not gigaton-2050 claims
