---
title: 50-build-log — daily journal, decisions, failures
type: folder-index
status: confirmed
updated: 2026-05-15
---

# 50-build-log — daily journal, decisions, failures

The running journal of build days. One file per day during Phase 1 (May 24–28), plus cross-cutting pages for things that span days.

## Pages

- [[daily-template]] — copy this when starting a new day's log
- [[failures]] — running list of what went wrong (mirror of [`../../.hackathon/failures-log.md`](../../.hackathon/failures-log.md) when that gets created)
- [[decisions]] — high-leverage decisions and their reasoning (Architecture Decision Record-lite)
- `2026-05-24.md` through `2026-05-28.md` — daily logs (created on the day)
- `2026-05-29.md` and `2026-05-30.md` — only if we're a finalist

## Daily log structure

Each daily log uses [[daily-template]]. Sections:

1. **Yesterday's commitments** — what we said we'd do, did we?
2. **Today's MUST-DO** — 1-3 items only, ranked
3. **Mentor takeaways** — if any mentor sessions happened
4. **Decisions made** — link to entries added to [[decisions]]
5. **Failures** — link to entries added to [[failures]]
6. **Tomorrow's commitments** — 1-3 items

## Decisions vs failures

- **Decision:** "We chose X over Y because Z." Future-self should be able to reconstruct the reasoning.
- **Failure:** "We tried X, it didn't work, we did Y instead (or mocked it / cut it)." Becomes input to [`/hackathon:retro`](../../.hackathon/) and the `30-min stuck rule`.

## Scope amendments

If we run `/hackathon:scope --amend` (cut something to add something), log the trade in [[decisions]] with format:

```
## YYYY-MM-DD HH:MM — Scope amendment
- ADDED: <feature> — reason: <reason>
- CUT: <feature> — reason: <reason>
- Approved by: <self / scope-defender agent>
```

## Hot-link to canonical

- [Event YAML](../../.hackathon/event.yaml)
- [Scope](../../.hackathon/scope.md) (created at `/hackathon:scope`)
- [Failures log](../../.hackathon/failures-log.md) (created at first failure)
- [Timeline](../../docs/timeline.md)
