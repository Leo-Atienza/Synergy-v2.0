---
title: 20-ideas — idea generation, scoring, chosen idea
type: folder-index
status: confirmed
updated: 2026-05-16
---

# 20-ideas — idea generation → scoring → chosen idea

This is where `/hackathon:ideate` lives — the workflow for going from "we have 3 themes" to "we have ONE locked idea by 2026-05-22".

## Pages

- [[seed-ideas]] — initial brainstorm (5–10 candidates, lightly described)
- [[scored-ideas]] — _to be created at_ `/hackathon:ideate` — same ideas with rubric scores
- [[chosen-idea]] — _to be created at end of_ `/hackathon:ideate` — locked decision + reasoning

## Idea-scoring rubric (input to `/hackathon:ideate`)

Use this when scoring — informed by [[../10-event/judge-rubric-thinking|judge-rubric-thinking]]:

| Criterion | Weight | Question |
|---|---|---|
| Theme fit | 25% | Does it land cleanly in 1 of the 3 themes? Bonus if Theme 3 (broadest, easiest to pivot). |
| Demo moment visual | 25% | Can the 10-second demo clip be described as a literal video script? Without verbs like "allows" or "lets users"? |
| Buildability in 96h | 20% | Team build (size + member skills set via `/hackathon:team`). Realistically achievable end-to-end (data + UI + deploy) given parallel track-split? Score after `/hackathon:team` locks capacity, not before. |
| Canadian data leverage | 15% | Does it use a real Canadian dataset (IESO, ECCC, NRCan, Open Data Toronto)? Better story for judges. |
| Originality | 15% | Will 10 other teams probably build the same thing? If yes, dock points. |

Total: 100. Pick anything ≥75 as a finalist; pick the highest-scoring ≥75 as the locked idea.

## Anti-patterns (don't pick these)

- **Generic dashboards** — "Dashboard showing energy use over time" with no specific question being answered.
- **Chatbots that explain energy** — overdone, doesn't show technical chops, hard to demo in 10s.
- **Mobile apps requiring a download** — judges can't experience them in 10s on a screen-share.
- **Anything requiring real-time data** when no real-time API is available (mocked real-time = obvious to judges).
- **Anything requiring user input to demo** — the demo moment must auto-play without a typing user.

## Pre-locked considerations

Before scoring, write down:
1. Which theme(s) we're considering (and which we're explicitly NOT)
2. What sponsor tracks we're chasing (none, until sponsors are announced)
3. Stack preset bias (web-ai / saas / mobile / data-viz / agent — see `~/.claude/skills/hackathon/references/stack-presets.md`)

## Output of `/hackathon:ideate`

Updates to capture once `/hackathon:ideate` runs:
- [`../../.hackathon/event.yaml`](../../.hackathon/event.yaml) → set `stack_preset`
- [`../../CLAUDE.md`](../../CLAUDE.md) → fill `Stack preset` and tentative `Demo moment` rows
- [[chosen-idea]] in this folder
- Append decision row to [[../50-build-log/decisions]]
