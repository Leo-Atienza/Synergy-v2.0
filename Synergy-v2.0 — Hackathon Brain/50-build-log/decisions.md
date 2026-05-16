---
title: Decisions — high-leverage choices and reasoning
type: log
status: draft
updated: 2026-05-15
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

_None yet. First entries expected at `/hackathon:ideate` (idea-lock decision) and `/hackathon:scope` (demo moment + MUST-HAVES decisions)._

---

## Retro queue — todos for `/hackathon:retro`

> Items deferred from pre-event audit (2026-05-15). Retro picks these up after the event so post-mortem decisions are made with the experience fresh.

## 2026-05-15 — Hoist Pattern-break sections into the global scope template
- **Context:** Pre-event audit found that `~/.claude/skills/hackathon/templates/scope.md` (global) doesn't include the four Pattern-break sections required by the project's `demo-moment-critic` agent. Mitigated for this event by creating project-local [`templates/scope.md.tmpl`](../../templates/scope.md.tmpl) and pointing CLAUDE.md at it.
- **Retro action:** If the four sections (`Pattern-break archetype`, `Demo moment — literal video script`, `Fallback if the weird version doesn't land`, `What was cut to support the pattern-break`) actually held the line during this event (i.e., the agents enforced them and it improved the outcome), hoist them into the global template at `~/.claude/skills/hackathon/templates/scope.md` so every future hackathon inherits the discipline. Also patch `~/.claude/commands/hackathon/scope.md` line 16 to check for `templates/scope.md.tmpl` in the project root before falling back to the global template (current behavior: always loads global, ignores project-local).
- **Decide at retro:** Did the Pattern-break sections actually shape the build, or did they get filled with placeholder text and ignored? Only hoist if they were load-bearing.
- **Owner:** Future-Leo at `/hackathon:retro`
