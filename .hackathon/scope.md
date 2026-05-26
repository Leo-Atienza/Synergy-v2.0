# Scope Lock — Sanctuary

**Status:** AMENDED and LOCKED at 2026-05-25T13:55:00-04:00
**Amendments:** see `scope-log.md`
**Challenge:** Seneca Energy Hackathon 2026 · Theme 3 · Problem Statement 2 (climate resilience, vulnerable populations, and shelter access)
**Deadline:** 2026-05-26T23:59:00-04:00 (qualifier video) · **Deliverable:** a 5-min YouTube video demoing the StoryMap/Web Map artifact, NOT a deployed app

---

## Pattern-break archetype

> One of the 11 archetypes from [`docs/uniqueness-principles.md`](../docs/uniqueness-principles.md) §2. Stress-tested by `demo-moment-critic` 2026-05-25 (verdict: BORDERLINE → LANDS once the proper-noun hero building and honesty labels are locked).

**Locked archetype:** **Public-Good Frame**

**Reinforcing archetype:** **Local-Detail**

**Why this one:** Most heat-risk tools route vulnerable people to official cooling spaces. Sanctuary flips the decision: **which trusted buildings should become the next resilience hubs?** The remembered idea is not "a dashboard for heat." It is "harden these five named Peel buildings first." The public-good frame keeps the project municipal and utility-facing; the local-detail frame makes it memorable with proper nouns, addresses, and one real hero building.

**Hero building:** **Malton Community Centre and Library, 3540 Morning Star Drive, Mississauga.** It geocodes into Peel HVI quintile 5 (`Index_Qnt=5`, PHDZ `M-04`) via the public HVI feature service. Gore Meadows was demoted after verification because it sits in HVI quintile 2.

---

## Demo moment — literal video script

```
0:00 — Camera shows: Peel Heat Vulnerability Index. One Brampton/Malton pocket burns dark red.
         Caption: "Heat risk is not evenly distributed. Shelter access is not either."
0:02 — User clicks a real named candidate hub: "Malton Community Centre and Library,
         3540 Morning Star Drive, Mississauga."
0:05 — Panel snaps open:
         "Candidate hub, not currently equipped"
         "Reachable population: modelled 500 m estimate"
         "Solar/battery: planning estimate, requires site audit"
         plus HVI level, roof/hardening class, and why this ranks high.
0:08 — Top five candidate hubs light up in rank order.
         Caption: "If Peel can harden only five buildings first, Sanctuary ranks these five."
```

The "describe it 2 hours later" test: *"the one that picks the five trusted Peel buildings to harden before the next heat wave."* Build this FIRST. If it looks like a generic GIS dashboard, the whole project fails.

**Three seams to close before recording:**
1. **The hero click must be a proper noun.** No generic "community building" point. Use a real name and address.
2. **Honesty labels must appear in the panel.** `candidate hub, not currently equipped`; `modelled 500 m estimate`; `planning estimate, requires site audit`.
3. **The reveal must be a decision.** Top-five dots must animate as a ranked answer to "which buildings first?", not decorative glowing markers.

---

## Fallback if the weird version doesn't land

**Baseline:** ArcGIS StoryMap + Web Map recording with the hero click and ranked-five reveal.

**If ArcGIS interaction is slow on camera:** use preloaded screenshots of the HVI map, hero panel, and ranked-five map. The video deliverable still works.

**If the HVI layer cannot be embedded cleanly:** use a screenshot from the public Peel HVI dashboard and manually placed candidate points, labelled as a demo fixture.

**What we do NOT fall back to:** a generic dashboard tour; a full custom app rebuild; unlabelled solar/battery numbers; "AI-powered" language; claiming any named building is already a resilience hub.

---

## What was cut to support the pattern-break

- **Valley ULO plug + renter energy-burden map** — cut entirely. Sanctuary is a project replacement, not a feature addition.
- **Hardware surprise** — cut. The visual proof is a ranked public-good siting decision, not a device firing.
- **Full command-center / VPP operations layer** — demoted to future context. The prototype ranks candidate hubs; it does not dispatch microgrids.
- **Precise per-building kW/kWh claims** — cut. Use hardening classes and planning-estimate labels.
- **Scoring every possible building in Peel** — cut. Hand-verify 8 to 10 candidates and make the top five defensible.

---

## MUST-HAVES (max 5, ranked by demo criticality)

| # | Feature | Rubric axis | Pattern-break role | Est. hours | Status |
|---|---|---|---|---|---|
| 1 | **Candidate hub data spine** — 8 to 10 hand-verified Peel buildings with name, address, type, source URL, HVI bucket, 500 m catchment estimate, roof/hardening class, verification status, and `candidate hub` labels. | Technical / Impact | supports | 3 | [x] done — 10 buildings in `sanctuary/data/candidate-hubs.csv` |
| 2 | **ArcGIS Web Map / StoryMap** — Peel HVI layer + candidate points + 500 m buffers + selected-building panel + ranked top-five view. ArcGIS first; screenshots if interaction is slow. | Technical / Design / Sponsor fit | supports | 4 | [~] Web Map built · StoryMap + screenshots pending (recording) · support site live |
| 3 | **Ranked decision reveal** — first click on a named hero building, honesty-labelled panel, then #1–#5 candidate hubs animate as "harden these first." | Presentation / Originality / Impact | is the break | 2 | [x] live in the support site · ArcGIS popups pending (recording) |
| 4 | **5-min qualifier video** — arc: heat risk → shelter gap → trusted building → ranking logic → honesty → Alectra/Esri fit. Includes one collaboration line. | Presentation / Collaboration | supports | 3 | [ ] pending — team recording pass (≤5:00, names on screen) |
| 5 | **Methods + judge Q&A** — visible "real vs estimated" box, source list, scoring note, and answers for solar sizing / participation / faith-building framing. | Technical / Impact | supports | 1.5 | [x] done — `methods-note.md` + `judge-qa.md` |

Total estimated hours: **13.5** (single-track)
Event duration: ~34h effective (now → May 26 23:59, minus sleep/setup)
Buffer: workable if the build stays ArcGIS-first. If the map track slips by 30 minutes twice, use static screenshots and the ranked CSV instead of trying to fix ArcGIS live interaction.

> **Status synced 2026-05-26 ~17:10 ET (status only — NOT a scope amendment; MUST-HAVES, demo moment, and archetype unchanged).** Done: data spine, methods, judge Q&A, and the support showcase site (live + verified, delivers the ranked-decision reveal). The ArcGIS **Web Map** is built (`senecatechnology.maps.arcgis.com` — see [`../sanctuary/artifacts/arcgis-links.md`](../sanctuary/artifacts/arcgis-links.md)). Remaining = the **StoryMap** wrapper, screenshots, and the **5-min video** — all owned by the team's recording pass.

---

## NICE-TO-HAVES (only if buffer remains, only if they reinforce the pattern-break)

- ArcGIS Network Analyst walksheds instead of 500 m buffers.
- Ontario Marginalization Index overlay if it drops in cleanly.
- A before/after slide showing official cooling spaces only, then trusted community buildings added.
- Tiny "future operating model" panel for solar + battery + Alectra DER hardening, explicitly labelled future/site-audit required.

---

## EXPLICITLY CUT (resist the urge)

- **Valley app work** — reason: active submission is now Sanctuary.
- **Custom Next.js rebuild of Sanctuary** — reason: ArcGIS StoryMap is faster and sponsor-aligned.
- **Full Peel automated scoring of every building** — reason: too much data-cleaning risk; hand-verify 8 to 10.
- **Precise solar/battery engineering** — reason: not defensible without site audits.
- **Emergency dispatch / live operations dashboard** — reason: turns a strong siting tool into fake enterprise software.
- **Stock photos of solar panels or generic disaster imagery** — reason: local map and proper nouns are the surface uniqueness.

---

## 60-second pitch draft (written BEFORE build)

**Hook (5s):** "During a heat wave, the safest building is not always the nearest building. It is the one people already trust, inside the heat-risk zone."

**Problem (10s):** "Peel already maps heat vulnerability. But official cooling spaces are only part of the network. A library two bus rides away, or a centre people do not know, will not protect an older adult when the power is out."

**Solution (10s):** "Sanctuary ranks trusted community buildings — libraries, recreation centres, gurdwaras, mosques, mandirs, churches — as candidate solar-and-battery resilience hubs."

**Live demo (25s):** "Here is the high-risk pocket. I click Malton Community Centre and Library. The panel is honest: candidate hub, not currently equipped; reachable population is a modelled 500 m estimate; solar and battery are planning estimates. Then Sanctuary ranks the five buildings Peel should harden first."

**Tech highlight (5s):** "The spine is real public data: Peel Heat Vulnerability Index, public building and facility data, hand-verified addresses, and a transparent weighted score."

**Ask / close (5s):** "For Alectra and municipal partners: harden these five first, then repeat across the service territory."

---

## Amendment protocol

- Cannot silently add a feature during `/hackathon:build`.
- To amend: run `/hackathon:scope --amend`, which FORCES a 1-in-1-out trade.
- Amendments must preserve the locked **Public-Good Frame + Local-Detail** archetype OR explicitly re-lock a new one (then `demo-moment-critic` re-validates from scratch).
- Every amendment appends to `.hackathon/scope-log.md` with timestamp + reason.
- `/hackathon:retro` reviews the amendment log for learnings.
