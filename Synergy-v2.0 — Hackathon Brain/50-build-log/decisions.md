---
title: Decisions — high-leverage choices and reasoning
type: log
status: draft
updated: 2026-05-22
---

# Decisions — high-leverage choices and reasoning

ADR-lite (Architecture Decision Record). Captures decisions that future-self will want the reasoning for. Bias toward over-recording during hackathon — by hour 60 we WILL forget why we did things.

## What counts as a "decision"

Record if:
- Picking one of multiple options (stack, library, theme, idea, data source, demo angle)
- Cutting something from scope or amending scope (1-in-1-out trade)
- Choosing not to follow a mentor's advice
- Accepting a tradeoff (e.g., "going with mock data instead of real because…")
- Naming things (project name, tagline, demo title)

Don't record:
- Code-level micro-decisions (that's git log's job)
- Things that aren't reversible by writing code (hardware, venue)

## Format

```
## YYYY-MM-DD HH:MM — <short decision title>
- **Context:** <why this came up>
- **Options considered:** <option A, option B, option C>
- **Chosen:** <option, with the determining reason>
- **Tradeoffs accepted:** <what we're giving up>
- **Revisit if:** <condition that would invalidate this — e.g., "if we hit a finalist round, reconsider X">
```

## Scope amendments (special format)

```
## YYYY-MM-DD HH:MM — Scope amendment #N
- **ADDED:** <feature> — reason: <reason>
- **CUT:** <feature> — reason: <reason>
- **Approved by:** <self / scope-defender agent verdict>
- **Net delta to demo moment:** <stronger / weaker / neutral>
```

## Entries

## 2026-05-25 — Confirmed event facts (Opening Day slides) + promoted Sanctuary & Thaw (Theme 3) to Candidate
- **Context:** Read the authoritative "Opening Day Slides" PDF + the Esri tech-session deck + Alectra, and ran verification-first deep-research dives on two Theme-3 ideas (Sanctuary, Thaw). User asked to promote both to candidates and back every decision with data.
- **Confirmed event facts (supersede earlier assumptions):**
  - **Rubric = 5 axes** — Innovation & Creativity · Impact & Relevance · Technical Execution · Presentation & Communication · Collaboration & Teamwork. Weights not published. (Was: assumed 4-axis technical/design/originality/impact.)
  - **Deadline contested:** Opening Day slides say **May 26, 11:59 PM** (stated twice); senecahackathon.com implies May 27-28. **Build toward May 26**, confirm on Discord. `event.yaml` updated to May 26 (conservative).
  - **Deliverable = a 5-minute (max 6) YouTube video + artifacts** (design docs, code, wireframes, GIS maps / dashboards / StoryMaps). A live deployed app is NOT required. *"A submission consisting of AI slop in any form will disqualify."* Don't artificially speed up the video.
  - **Sponsors = Esri + Alectra** (industry). **SSF = Seneca Student Federation** (student union, not an industry sponsor). Partners: Octo, Toronto Tech Week, ComUnity, GDG. Esri Canada runs the GIS mentoring + free Seneca ArcGIS org (`senecatechnology.maps.arcgis.com`); sessions cover Living Atlas / StoryMaps / app-templates / "vibe coding". Alectra GRE&T grid-edge leads (Keith Hemingway, Daniel Carr) give the May-26 domain sessions; pre-read `alectra.com/innovation-projects`.
  - **Implication:** Theme-3 winners = Esri ArcGIS StoryMaps/Dashboards, in Alectra's Peel/GGH territory, on real public data, scoped to ONE narrow use case.
- **Promotions (this session's deep research, verification-first):**
  - **[[../20-ideas/seed-g-sanctuary|G · Sanctuary]] — 90/100 — STRONG GO, lead Theme-3 pick.** Claude directly verified the Peel Heat Vulnerability Index is a PUBLIC ArcGIS layer (Peel Public Health) — resolves the main data risk. Novel, scalable (config), Esri+Alectra bullseye. Caveat: per-building solar/backup layers are modelled — label them.
  - **[[../20-ideas/seed-h-thaw|H · Thaw]] — 79/100 — promoted but WOUNDED.** Kill-shot verified: no public granular Peel outage history, and the multi-day storms hit Hydro One's rural territory, not Alectra's urban Peel. Survives only as a labelled MODELLED restoration scenario; originality overlaps [[../20-ideas/seed-c-outage-equity-index]]. Rank below Sanctuary.
- **Calibration note:** the six earlier seed scores (Tide 94, etc.) predate the sponsor/rubric/deliverable reveal and undercount GIS-native Theme-3 ideas. Re-score the pool against the 5 confirmed axes before the chosen-idea lock.
- **Chosen idea: still NOT locked** (per user — exploring, not committing yet). Current lean: Sanctuary. Lock happens at `/hackathon:scope`.
- **Not committed to git.**

## 2026-05-22 ~10:30 — Tide promoted seed → Candidate (lead); chosen-lock deferred to May 24
- **Context:** Idea-lock self-deadline (2026-05-22). User asked to promote Tide to Candidate. Scored the 6 carded seeds against the project rubric to formalize the finalist pool. Full scores in [[scored-ideas]].
- **Options considered:** All 6 carded seeds — A (carbon API), B (EnviroScreen), C (Outage Equity), D (Tide), E (Roll Call), F (Backwards Hour). 12 thin dossier candidates screened out before scoring (no card; mostly "talk about energy, don't move kWh").
- **Chosen:** All 6 clear ≥75 → finalist candidates. **Tide = lead Candidate (94/100).** Determining reasons: the only seed with a proven runnable viability spike + an already-built `next build`-green demo UI (buildability 19/20), the best-articulated demo moment (hardware + live IESO compute + embodied number, written as a literal video script, 25/25), and max Canadian-data leverage (15/15).
- **Tradeoffs accepted:** (1) Buildability scored before `/hackathon:team` locks capacity (team size 0) — provisional; re-check once known. (2) Tide concedes Originality (12/15) — grid-aware control already exists (Optiwatt, Home-Assistant DIY); the novelty is the cost+carbon+generic-load+zero-config+receipt fusion, not the relay. (3) Scoring is pre-kickoff; the challenge set isn't revealed yet.
- **Revisit if:** the May-24 challenge set rewards generation/siting (→ Roll Call rises), equity/resilience (→ Outage Equity / EnviroScreen rise), or behaviour/accessibility over technical depth (→ Backwards Hour rises). Re-rank buildability once team capacity is locked. The **chosen-idea** lock + `event.yaml` `stack_preset` happen then, not now.

---

## Retro queue — todos for `/hackathon:retro`

> Items deferred from pre-event audit (2026-05-15). Retro picks these up after the event so post-mortem decisions are made with the experience fresh.

## 2026-05-15 — Hoist Pattern-break sections into the global scope template
- **Context:** Pre-event audit found that `~/.claude/skills/hackathon/templates/scope.md` (global) doesn't include the four Pattern-break sections required by the project's `demo-moment-critic` agent. Mitigated for this event by creating project-local [`templates/scope.md.tmpl`](../../templates/scope.md.tmpl) and pointing CLAUDE.md at it.
- **Retro action:** If the four sections (`Pattern-break archetype`, `Demo moment — literal video script`, `Fallback if the weird version doesn't land`, `What was cut to support the pattern-break`) actually held the line during this event (i.e., the agents enforced them and it improved the outcome), hoist them into the global template at `~/.claude/skills/hackathon/templates/scope.md` so every future hackathon inherits the discipline. Also patch `~/.claude/commands/hackathon/scope.md` line 16 to check for `templates/scope.md.tmpl` in the project root before falling back to the global template (current behavior: always loads global, ignores project-local).
- **Decide at retro:** Did the Pattern-break sections actually shape the build, or did they get filled with placeholder text and ignored? Only hoist if they were load-bearing.
- **Owner:** Future-Leo at `/hackathon:retro`
