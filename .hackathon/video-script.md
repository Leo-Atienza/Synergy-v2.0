# 5-minute qualifier video — shot list (Sanctuary)

> Deliverable due May 26 23:59. 5-min target, 6-min hard max, YouTube. Demo on camera — NOT a deployed app.
> Arc + timings from the Opening Day deck. Every on-screen number must be sourced or labelled as estimated.
> Record the ArcGIS interaction as a clean pre-take; if it lags, use screenshots with the same sequence.

---

## 0:00–0:20 — COLD OPEN (the decision)
- **On screen:** Peel Heat Vulnerability Index. No title card, no faces. One high-risk pocket glows dark red.
- **VO:** "During a heat wave, the safest building is not always the nearest building. It is the one people already trust, inside the heat-risk zone."
- **Caption:** "Heat risk is not evenly distributed. Shelter access is not either."

## 0:20–1:00 — PROBLEM (PS2, made literal)
- **On screen:** HVI map, then official/public facilities layer.
- **VO:** "Peel already maps heat vulnerability. But official cooling spaces are only part of the network. A library two bus rides away, or a centre people do not know, will not protect an older adult when the power is out. The planning question is blunt: if Peel can harden only five buildings before the next heat wave, which five should come first?"
- **On-screen citations:** "Peel Heat Vulnerability Index · public facility data."

## 1:00–1:50 — SOLUTION (trusted buildings as infrastructure)
- **VO:** "Sanctuary ranks trusted community buildings — libraries, recreation centres, gurdwaras, mosques, mandirs, churches — as candidate solar-and-battery resilience hubs."
- **On screen:** trusted-building layer fades in over the HVI map.
- **VO:** "This is not saying these buildings are ready today. It is a prioritization map: where would hardening protect the most vulnerable residents nearby?"

## 1:50–3:10 — DEMO (the moment)
- **On screen:** click the hero building: **Malton Community Centre and Library, 3540 Morning Star Drive, Mississauga**.
- **Panel labels, visible:** "Candidate hub, not currently equipped"; "Reachable population: modelled 500 m estimate"; "Solar/battery: planning estimate, requires site audit."
- **VO:** "Here is the first click. Malton Community Centre and Library is a real building at 3540 Morning Star Drive, inside a top-quintile heat-vulnerability tract. Sanctuary shows the nearby heat vulnerability, a modelled 500 metre catchment, and a rough hardening class. The point is not false precision. The point is deciding where to investigate first."
- **Action:** top five candidate hubs light up in rank order.
- **VO:** "Now the decision: if Peel can harden five buildings first, Sanctuary ranks these five."

## 3:10–4:05 — HOW THE SCORE WORKS
- **On screen:** simple score card: heat vulnerability, reachable vulnerable population, trust/community role, rooftop hardening potential, facility suitability.
- **VO:** "The score is intentionally simple: heat risk, people nearby, trust and community role, rough roof potential, and facility suitability. A judge can understand it in twenty seconds, and a planner can challenge any input."
- **On screen:** top five table with one-line "why" for each candidate.

## 4:05–4:40 — HONESTY + SOURCES
- **VO:** "Here is what is real: the Peel HVI layer, building names and addresses, public facility data, and the transparent score. Here is what is estimated: reachable population from the buffer, roof class, and solar or battery potential. Those require site audits before any capital decision."
- **On screen:** "Real / Estimated / Requires site verification" box.

## 4:40–5:00 — WHERE IT GOES + COLLABORATION
- **VO:** "For Alectra and municipal partners, Sanctuary turns community trust into an energy-resilience planning layer: harden these five first, then repeat across the service territory. Built by [NAME] on GIS/data, [NAME] on StoryMap/design, and [NAME] on research/pitch over one weekend."
- **On screen:** final ranked-five map and caption: "Harden these five first."

---

## Recording checklist
- [x] Confirm the hero building is in/near a high-HVI reveal before recording — Malton Community Centre and Library geocodes into HVI quintile 5.
- [ ] Screen-capture the StoryMap/Web Map hero click.
- [ ] Capture screenshot fallback for HVI map, hero panel, ranked-five table, and honesty box.
- [ ] Confirm every named building has a source URL and verification status in `sanctuary/data/candidate-hubs.csv`.
- [ ] Confirm every estimated number is labelled in the panel or methods note.
- [ ] Name all three teammates on screen (Collaboration axis = 20%).
- [ ] Export ≤ 6:00, upload unlisted YouTube, paste link in submission + freeze git tag `v1-submission`.
