# Pre-mortem — {{chosen_idea}}

> **TEMPLATE — fill after `/hackathon:scope` runs.** Per [`docs/build-readiness.md`](../docs/build-readiness.md) §G.1. The point: imagine the project failing in concrete ways and pre-write the response BEFORE the failure happens. By the time something breaks live, the canned answer is muscle memory.

**Status:** TEMPLATE
**Updated:** _set when filled_
**Chosen idea:** _from `.hackathon/scope.md`_
**Locked archetype:** _from `.hackathon/scope.md` Pattern-break archetype section_

---

## 1. Technical failure modes (3)

### TF-1 — {{failure mode in plain English}}
- **Why it could happen:** {{specific data/API/model risk — name the actual endpoint/library/scraper}}
- **Pre-mitigation:** {{what we do during build to prevent it — e.g., commit sample CSV to repo, add timeout + cache layer, mock the API}}
- **Live response:** {{what we do if it surfaces during demo — the canned line + the technical fallback path}}

### TF-2 — {{failure mode}}
- **Why it could happen:**
- **Pre-mitigation:**
- **Live response:**

### TF-3 — {{failure mode}}
- **Why it could happen:**
- **Pre-mitigation:**
- **Live response:**

---

## 2. Narrative failure modes (3)

### NF-1 — Judges don't care
- **Why it could happen:** {{e.g., problem feels niche, scale unclear, no "Monday-morning use" the judge can name}}
- **Pre-mitigation:** {{lead pitch with a specific stat + named person/place per `docs/uniqueness-principles.md` §3.4}}
- **Live response:** {{the comeback line if a judge asks "so what?"}}

### NF-2 — Conflicts with sponsor track
- **Why it could happen:** {{e.g., sponsor X is pro-nuclear, our angle reads anti-nuclear; or our framing critiques a sponsor's regulatory record}}
- **Pre-mitigation:** {{neutral framing, multiple valid sponsor-aligned reads, name 2+ sponsors who'd benefit}}
- **Live response:** {{the bridging line that re-aligns}}

### NF-3 — Equity framing comes across performative
- **Why it could happen:** {{lack of community input, no real partner, "for them" not "with them" tone, missing acknowledgment of limits}}
- **Pre-mitigation:** {{cite an actual journalist/advocate by name (per the Local-Detail archetype); honest "what doesn't work yet" section in README}}
- **Live response:** {{name what we know we don't know}}

---

## 3. Stage failure modes (3)

### SF-1 — Wifi out / live demo dies / API rate limit
- **Pre-mitigation:** Backup video recorded by Day 3 evening per `docs/build-readiness.md` §F. All data accessible offline (CSVs committed to repo). One git tag `v1-submission` frozen at the working commit.
- **Live response:** Switch to backup video without apologizing. Per dossier 10.5: **never apologize**, just transition.

### SF-2 — Video doesn't play
- **Pre-mitigation:** Backup video on USB + cloud (build-readiness §H day-of-pitch). Hero screenshot in README serves as the visual fallback.
- **Live response:** Verbal walkthrough using screenshots from README — practiced once before the pitch.

### SF-3 — Hostile Q&A — likely question: "{{the Q we'd fear most}}"
- **Pre-mitigation:** Pre-write the 30-second answer here. If you can't, the project has a real weakness to address before submission.
- **Live response:** {{the actual answer}}

---

## Standing reminders (apply during the entire event)

- **30-min stuck rule** (CLAUDE.md): if a feature is >30 min over estimate, mock + log in `failures-log.md` + move on.
- **`scope-defender`**: any new feature mid-build requires 1-in-1-out trade. Ideas that distract from the locked Pattern-break archetype are CUT regardless of rubric.
- **`demo-moment-critic`**: scope.md missing the four Pattern-break sections returns SCOPE_INCOMPLETE — fix before evaluating.
- **Crash recovery scripts** (build-readiness §F): `scripts/reset-deploy.sh` and `scripts/local-demo.sh` exist and have been tested before submission day.
- **No code changes after the demo video is recorded** (failure mode F-10 — last-minute "just one more feature" breaks the build during judging).
