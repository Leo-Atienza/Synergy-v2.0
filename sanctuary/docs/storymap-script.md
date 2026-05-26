# Sanctuary StoryMap Script

## Section 1 — Heat Risk Is Uneven

Open on the Peel Heat Vulnerability Index.

Use the current Sanctuary Web Map as the working artifact:

`https://senecatechnology.maps.arcgis.com/apps/mapviewer/index.html?webmap=17951a55fae44a83a330101433dda67a`

Copy:

> Heat risk in Peel is not evenly distributed. The red areas combine hotter surroundings, higher sensitivity, and lower adaptive capacity.

Visual:

- Full Peel HVI map.
- HVI indicators available for narration: overall HVI, Exposure, Sensitivity, Adaptive Capacity.
- One Malton high-risk area labelled.

## Section 2 — Shelter Access Is Also Uneven

Show official/public facilities.

Copy:

> Official cooling spaces matter, but they are not the whole resilience network. During an outage or heat wave, distance, trust, hours, and familiarity decide whether a space is usable.

Visual:

- Public/civic facilities layer.
- If available, use official cooling/public facilities as the "current network" layer.
- Short caption: "The network exists. It is incomplete."

## Section 3 — Trusted Buildings Are Infrastructure

Fade in trusted community buildings.

Copy:

> Sanctuary asks which buildings communities already use and trust should be hardened first with cooling, solar, and battery support.

Visual:

- Libraries, recreation centres, gurdwaras, mosques, mandirs, churches.
- Use the Web Map's Welcome Spaces / Places of Worship layer as the trust-network context.
- Avoid stock photos. Use labels and map points.

## Section 4 — Hero Click

Click the verified hero building.

> Malton Community Centre and Library, 3540 Morning Star Drive, Mississauga.

Why this one:

- HVI quintile 5 (`Index_Qnt=5`);
- PHDZ `M-04`;
- civic anchor connected to Malton Library;
- safer public-first hero than opening on a faith site.

Panel labels:

- Candidate hub, not currently equipped.
- Reachable population: modelled 500 m estimate.
- Solar/battery: planning estimate, requires site audit.

Panel fields:

- building name;
- address;
- building type;
- nearby HVI level;
- reachable population estimate;
- roof/hardening class;
- why it ranks high.
- source URL.

## Section 5 — Ranked Five

Show the top five candidate hubs.

Copy:

> If Peel can harden only five buildings first, Sanctuary ranks these five.

Table:

| Rank | Building | Why |
|---|---|---|
| 1 | Malton Community Centre and Library | HVI 5, civic/library anchor, high facility suitability. |
| 2 | Sri Guru Singh Sabha Malton | HVI 5, faith/community anchor in Malton. |
| 3 | Susan Fennell Sportsplex | HVI 5, large Brampton civic facility. |
| 4 | Anjuman-E-Anwarul Islam of Malton | HVI 4, adaptive-capacity quintile 5, trusted community site. |
| 5 | Bharat Mata Mandir | Exposure quintile 5, faith/community site; keep labelled as candidate pending catchment check. |

Visual:

- Make ranked pins #1 to #5 visually distinct.
- Keep the ranked table visible long enough to read names, not just numbers.
- If ArcGIS popup styling cannot be changed in time, use the Next.js showcase map for this exact ranked reveal.

## Section 6 — Real vs Estimated

Copy:

> Sanctuary is a planning layer, not a site audit.

Real:

- HVI layer;
- building names and addresses;
- public facility/organization sources;
- transparent scoring fields.

Estimated:

- reachable population if using 500 m buffers;
- roof/hardening class;
- solar and battery potential.

Requires site verification:

- backup power;
- cooling capacity;
- willingness to participate;
- engineering feasibility.

## Section 7 — Future Scalability

Copy:

> First, Sanctuary earns trust as a siting layer. Then it can add feasibility, funding, and operations.

Future layers:

- feasibility: owner/operator, accessibility, cooling capacity, roof and electrical readiness;
- funding: grants, CEITC/CTITC eligibility, rough capital cost ranges;
- operations: hub status, supplies, staffing, outage readiness;
- energy: eventual microgrid/VPP telemetry only after real systems exist.

## Section 8 — The Ask

Copy:

> Harden these five candidate hubs first. Then repeat the same scoring across Alectra's service territory.
