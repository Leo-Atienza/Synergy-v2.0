---
title: 60-handoffs — session handoff files
type: folder-index
status: confirmed
updated: 2026-05-15
---

# 60-handoffs — session handoff files

Where session-end handoff files land. Written by the [`/handoff`](https://github.com/anthropics/claude-code) skill at session close.

## Format

One file per session: `YYYY-MM-DD-HHMM-handoff.md`

Each handoff captures:
- Where we left off
- What's blocking
- Next session's first action
- Any uncommitted changes / dirty state
- Open questions

## When to use

Run [`/handoff`](https://docs.anthropic.com/en/docs/claude-code) at the end of any session where:
- Work is mid-flight (not at a clean checkpoint)
- We've made decisions worth remembering
- Tomorrow's first action isn't obvious from the code

## Anti-patterns

- **Handoffs every session** — only create one when the session ends mid-flight or with high cognitive load. Clean checkpoints don't need a handoff (the commit message is enough).
- **Long handoffs** — keep under 300 words. Verbose handoffs get skimmed and miss the point.

## Entries

_None yet._
