# Pre-mortem — Tide

> Per [`docs/build-readiness.md`](../docs/build-readiness.md) §G.1. Imagine the project failing in concrete ways and pre-write the response BEFORE it happens. By judging time, the canned answer is muscle memory.

**Status:** FILLED
**Updated:** 2026-05-25
**Chosen idea:** Tide — $15 automated plug + Energy Poverty Map of Peel (Theme 3 · PS1)
**Locked archetype:** Tension-Reveal (primary) + Hardware-Surprise (reinforcing, contingent on hardware)

---

## 1. Technical failure modes (3)

### TF-1 — The live IESO grid read fails on camera
- **Why it could happen:** `lib/grid.ts` `getLiveIntensity()` fetches a live IESO public report; venue wifi, a timeout, or a rate-limit could break it.
- **Pre-mitigation:** the screen already degrades to "live grid · unavailable" and runs on the committed deterministic fixture (`lib/sample-day.ts`, Ontario summer weekday). Record the take with the fixture if the live read is flaky.
- **Live response:** "The top-right is a live pull from IESO; the rest runs on a committed Ontario-summer fixture so the demo is reproducible." No apology.

### TF-2 — The map geometry or census data won't load
- **Why it could happen:** client fetch of `/peel-fsa.geojson` fails, or census attributes are incomplete for some FSAs.
- **Pre-mitigation:** the GeoJSON is committed to `/public` (served statically, works offline); attributes are committed in `lib/peel-fsa-raw.json`. The map degrades gracefully — FSAs with missing attributes render grey rather than crashing.
- **Live response:** the video uses a pre-recorded map clip; the deliverable is a video, so a live map at judging isn't required.

### TF-3 — The Shelly plug won't connect / hardware not acquired in time
- **Why it could happen:** the plug isn't bought yet; venue LAN / static-IP issues; cloud dependency (Kasa KLAP needs cloud creds).
- **Pre-mitigation:** the screen-only WAIT→GO flip is the FLOOR demo (zero hardware). Buy the Shelly Plug US Gen4 (local JSON-RPC, no cloud) and pre-record a clean lamp-fire take during build. The lamp is the hero *upgrade*, never a dependency.
- **Live response:** show the on-screen flip; the lamp is a bonus. Never block the demo on hardware.

---

## 2. Narrative failure modes (3)

### NF-1 — Judges don't care ("energy poverty feels abstract")
- **Why it could happen:** the problem can read as worthy-but-vague.
- **Pre-mitigation:** open on the number (3.9¢ vs 39¢ — a 10× spread) + a named place (Brampton L6T) + the concrete OEB sub-metering fact. ~1.1M Ontario households are in energy poverty.
- **Live response:** "1.1 million Ontario households are in energy poverty. This map shows a utility exactly which Peel neighbourhoods to target — and which fix each one needs."

### NF-2 — Conflicts with sponsor track (reads anti-utility)
- **Why it could happen:** Alectra is a utility; critiquing regressive ULO pricing could sound like an attack.
- **Pre-mitigation:** frame as decision-support FOR the utility — Tide feeds Alectra's GridExchange flexibility marketplace; the map is built on Esri-style GIS. Several sponsor-aligned reads.
- **Live response:** "This is the renter-side device + targeting layer that feeds Alectra's GridExchange — we're solving their last-mile flexibility problem, not criticising the rate."

### NF-3 — Equity framing comes across performative
- **Why it could happen:** "for renters" with no renter input.
- **Pre-mitigation:** the honesty layer — the map names who Tide CANNOT help (sub-metered, baseboard, no-AC) and routes them to policy/retrofit; every number cited (StatCan / IESO / OEB); honest ~$30–130/season, never the EV number.
- **Live response:** "We're explicit about the limits — the device reaches one slice of renters; the map's whole job is to route everyone else to the right fix."

---

## 3. Stage failure modes (3)

### SF-1 — Wifi out / live demo dies / API rate limit
- **Pre-mitigation:** backup video recorded before the deadline; all data offline (GeoJSON + attributes committed); one git tag `v1-submission` frozen at the working commit.
- **Live response:** switch to the backup video without apologizing — just transition.

### SF-2 — Video doesn't play
- **Pre-mitigation:** backup on USB + cloud; hero screenshot in README as visual fallback.
- **Live response:** verbal walkthrough from README screenshots, practiced once.

### SF-3 — Hostile Q&A — the question we fear most: "Does this actually reach poor renters, or just affluent EV owners?"
- **Pre-mitigation:** pre-written 30-second answer (also in `.hackathon/demo-moment.md`).
- **Live response:** "Honestly, the device reaches one slice — individually-metered renters with a shiftable load — and saves them ~$30–130 a year, modest but real. The leverage is the map: it tells the utility which neighbourhoods the plug reaches, and which are sub-metered or baseboard-heated and need a policy fix instead. Matching the fix to the household is the product." (Sources: `docs/energy-domain.md` §3–§6.)

---

## Standing reminders (apply during the entire event)

- **30-min stuck rule:** feature >30 min over estimate → mock + log in `failures-log.md` + move on.
- **`scope-defender`:** any new feature mid-build requires 1-in-1-out; ideas that distract from Tension-Reveal are cut regardless of rubric.
- **`demo-moment-critic`:** already validated (BORDERLINE→LANDS); re-run at `/hackathon:polish`.
- **No code changes after the demo video is recorded** (failure mode F-10).
