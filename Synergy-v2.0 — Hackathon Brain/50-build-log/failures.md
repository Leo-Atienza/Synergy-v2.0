---
title: Failures — what went wrong
type: log
status: draft
updated: 2026-05-15
---

# Failures — what went wrong

Running list of failures, mocked features, and cut features during the build. Mirror of [`../../.hackathon/failures-log.md`](../../.hackathon/failures-log.md) when that file exists. Input to `/hackathon:retro`.

## Format

```
## YYYY-MM-DD HH:MM — <short title>
- **What we tried:** <approach>
- **Why it failed:** <root cause if known, "unknown" otherwise>
- **What we did instead:** <mocked / cut / replaced with X>
- **Time lost:** <Xh>
- **Time saved by giving up:** <Yh — applying 30-min stuck rule>
- **Worth retrying post-hackathon?:** yes / no / maybe
```

## 30-minute stuck rule reminder

From [`../../CLAUDE.md`](../../CLAUDE.md):

> If any feature is >30 min over its estimate:
> 1. Stop debugging.
> 2. Mock the output (return fake data that looks real).
> 3. Log it here.
> 4. Move on to the next MUST-HAVE.
> 5. Revisit in `/hackathon:polish` if time permits.

When you mock instead of fix → log here, link from that day's daily log.

## Entries

_None yet. Empty until build starts May 24._
