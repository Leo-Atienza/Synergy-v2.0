# Pre-mortem — Sanctuary

> Per [`docs/build-readiness.md`](../docs/build-readiness.md) §G.1. Imagine the project failing in concrete ways and pre-write the response BEFORE it happens. By judging time, the canned answer is muscle memory.

**Status:** FILLED
**Updated:** 2026-05-25
**Chosen idea:** Sanctuary — trusted Peel buildings as candidate resilience hubs (Theme 3 · PS2)
**Locked archetype:** Public-Good Frame (primary) + Local-Detail (reinforcing)

---

## 1. Technical failure modes (3)

### TF-1 — The ArcGIS HVI layer will not embed or load smoothly
- **Why it could happen:** public dashboard item permissions, layer service quirks, or browser slowness during recording.
- **Pre-mitigation:** capture screenshots of the HVI layer, hero panel, and ranked-five view. The deliverable is a video; live interaction is an upgrade, not a dependency.
- **Live response:** "The HVI source is public; the video uses a captured view so the demo is reproducible."

### TF-2 — Candidate HVI/catchment numbers are not ready in time
- **Why it could happen:** joins take too long, Network Analyst is unavailable, or exact catchment population is hard to extract.
- **Pre-mitigation:** use 500 m modelled estimates and rough buckets; label them directly on screen. If a candidate cannot be verified, remove it from the top five.
- **Live response:** "This is a planning layer. The building names and heat layer are real; reachable population and hardening potential are labelled estimates for site-screening."

### TF-3 — The hero building gets challenged
- **Why it could happen:** Judges ask whether the hero was chosen for story convenience instead of evidence.
- **Pre-mitigation:** use Malton Community Centre and Library, which geocodes into HVI quintile 5 (`Index_Qnt=5`, PHDZ `M-04`) in the public Peel HVI feature service. Keep Gore Meadows in the CSV as a demoted contrast candidate because it verified as HVI quintile 2.
- **Live response:** "We changed the hero after checking the HVI layer. Malton is top-quintile; Gore Meadows was real but not the strongest heat-risk reveal."

---

## 2. Narrative failure modes (3)

### NF-1 — It reads like a generic GIS dashboard
- **Why it could happen:** heat maps and facility dots are common.
- **Pre-mitigation:** open on the decision, not the tooling: "If Peel can harden only five buildings first, which five?" Use real names and addresses.
- **Live response:** "The output is not a map. The output is a ranked capital-planning shortlist."

### NF-2 — Faith-building framing feels tokenistic
- **Why it could happen:** naming gurdwaras, mosques, mandirs, and churches without care can sound extractive.
- **Pre-mitigation:** mix civic and faith/community buildings; use asset-based language: trusted community infrastructure, not pity framing.
- **Live response:** "We are not replacing public infrastructure. We are recognizing buildings communities already use and trust as part of the resilience network."

### NF-3 — Solar/battery claims get punctured
- **Why it could happen:** a judge asks how a roof-area estimate became kW/kWh.
- **Pre-mitigation:** do not quote precise sizing. Use rough hardening classes and show "planning estimate, requires site audit."
- **Live response:** "The prototype ranks where to investigate first. Engineering sizing starts after site audit."

---

## 3. Stage failure modes (3)

### SF-1 — Wifi out / live demo dies / API rate limit
- **Pre-mitigation:** backup video recorded before the deadline; screenshots exported from ArcGIS; candidate CSV committed; one git tag `v1-submission` frozen at the working commit.
- **Live response:** switch to the backup video without apologizing — just transition.

### SF-2 — Video doesn't play
- **Pre-mitigation:** backup on USB + cloud; hero screenshot in README as visual fallback.
- **Live response:** verbal walkthrough from README screenshots, practiced once.

### SF-3 — Hostile Q&A — the question we fear most: "Are these buildings already resilience hubs?"
- **Pre-mitigation:** pre-written 30-second answer in `sanctuary/docs/judge-qa.md`; panel labels visible in the demo.
- **Live response:** "No. Sanctuary ranks candidate hubs for investment. Building names and the heat layer are real; reachable population and hardening potential are labelled planning estimates that require site verification."

---

## Standing reminders (apply during the entire event)

- **30-min stuck rule:** feature >30 min over estimate → mock + log in `failures-log.md` + move on.
- **`scope-defender`:** any new feature mid-build requires 1-in-1-out; ideas that distract from Public-Good Frame + Local-Detail are cut regardless of rubric.
- **`demo-moment-critic`:** current verdict is BORDERLINE until hero HVI/catchment and top five are locked; re-run after that.
- **No code changes after the demo video is recorded** (failure mode F-10).
