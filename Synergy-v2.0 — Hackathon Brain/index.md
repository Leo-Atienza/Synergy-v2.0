---
title: Synergy-v2.0 — Map of Content
type: folder-index
status: confirmed
updated: 2026-05-22
---

# Synergy-v2.0 — Map of Content

> Vault root. See [README](README.md) for the routing guide and conventions.

## Status board

| Field | Value |
|---|---|
| Today | 2026-05-22 |
| Phase | Pre-event (ideate window — **6 seeds scored**; Tide promoted to lead Candidate) |
| Days to kickoff | 2 (kickoff 2026-05-24) |
| Days to submission | 6 (deadline 2026-05-28 23:59 ET) |
| Idea-lock self-deadline | 2026-05-22 (**today** — scored to Candidate; chosen-lock held for the May 24 reveal) |
| Candidates | 18 live + 3 parked → **6 carded seeds scored** ([[20-ideas/scored-ideas\|scored-ideas]]); all clear ≥75. **Lead candidate: [[20-ideas/seed-d-tide\|Tide]]** (94/100) |
| Mode | **Team** — size + members TBD via `/hackathon:team` |
| Theme | undecided — 3 candidates (see [Themes](../docs/themes.md)) |
| Stack preset | undecided (set at `/hackathon:ideate`) |
| Demo moment | undecided (set at `/hackathon:scope`) |
| Live URL | none (set at `/hackathon:scaffold`) |

## Operational source-of-truth (canonical, in `../docs/` and `../.hackathon/`)

- [**Tide candidate folder**](../tide/) — docs + engine spike + demo UI for the lead candidate (consolidated into `tide/` on 2026-05-22)
- [Event facts](../docs/seneca-hackathon-context.md) — name, host, format, logistics, contact, open questions
- [Themes verbatim](../docs/themes.md) — all 3 challenge categories + angle libraries
- [Timeline + ATLAS map](../docs/timeline.md) — day-by-day with command mapping
- [Energy domain notes](../docs/energy-domain.md) — datasets, APIs, regulators, metrics, voices (backfilled 2026-05-15)
- [Build readiness](../docs/build-readiness.md) — operational decision infra for build phase
- [Uniqueness principles](../docs/uniqueness-principles.md) — the one-strategic-pattern-break system
- [Event YAML](../.hackathon/event.yaml) — machine-read state
- [Research dossier](../docs/research-dossier.md) — comprehensive context (~17.5k words, compiled 2026-05-15)

## Vault folders (thinking & exploration)

- [00-inbox](00-inbox/README.md) — unsorted dump
- [10-event](10-event/README.md) — event-fact reasoning, sponsors-watch, mentor channels
- [20-ideas](20-ideas/README.md) — seed ideas, scoring, chosen idea
- [30-research](30-research/README.md) — Canadian data sources, sponsor research, prior art
- [40-design](40-design/README.md) — demo storyboard, judge narrative, inspiration, wireframes
- [50-build-log](50-build-log/README.md) — daily journal, decisions, failures
- [60-handoffs](60-handoffs/README.md) — session handoff files
- [90-raw](90-raw/README.md) — photos, PDFs, screenshots (immutable)

## Project-local agents

In [`../.claude/agents/`](../.claude/agents/) — invoke via the Agent tool:

- **`demo-moment-critic`** — at `/hackathon:scope` and `/hackathon:polish`
- **`scope-defender`** — the moment any new feature idea surfaces
- **`energy-domain-researcher`** — when we need a real dataset, API, or metric

## Open questions (mirrored from canonical)

7 items pending organizer confirmation — see [Open Questions](../docs/seneca-hackathon-context.md#open-questions). Highest priority:

1. **Submission deadline conflict** (May 26 photo vs May 28 website) — confirm Day 1
2. **Required tech / sponsor APIs** — revealed at kickoff May 24
3. **Team size limits** — affects `/hackathon:team`

## Recent activity
- [hot](hot.md) — last 10 touched pages
- [log](log.md) — full append-only trail
