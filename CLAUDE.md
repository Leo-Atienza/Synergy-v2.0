# Synergy-v2.0 — Hackathon Project CLAUDE.md

This CLAUDE.md is for the **Synergy-v2.0** hackathon project, built for the **Seneca Energy Hackathon 2026**.

It inherits from `~/.claude/CLAUDE.md` (global ATLAS rules) and `~/Documents/CLAUDE.md` (Documents-tree project rules), and **adds hackathon-specific overrides that are normally too aggressive but CORRECT here**.

| Field | Value |
|---|---|
| Event | Seneca Energy Hackathon 2026 |
| Theme | energy / sustainability (refine at `/hackathon:init`) |
| Stack preset | _unset — decided at `/hackathon:ideate`_ |
| Demo moment | _unset — locked at `/hackathon:scope`_ |
| State | `.hackathon/event.yaml` |

---

## Hackathon mode: rules that override global defaults

### Speed over correctness (within reason)

- **Skip writing tests** unless testing IS the demo moment.
- **One commit per feature** — no branching, no PRs, push straight to `main`.
- **No type-strict refactoring** — if TypeScript yells, `any` is acceptable; fix in `/hackathon:retro`.
- **No abstractions** — repeat code 3× is fine; premature DRY kills hackathons.
- **No unused-code cleanup** — retro handles this. Dead code today is a non-issue.

### Scope lock (HARD)

- MUST-HAVES live in `.hackathon/scope.md` (written by `/hackathon:scope`). If a feature isn't there, **don't build it**.
- To add a feature: run `/hackathon:scope --amend` and **cut something else**. 1-in-1-out.
- Flag any scope deviation the user proposes with: *"This isn't in scope.md. Amend or cut?"*
- Invoke the **`scope-defender`** project agent on any "wouldn't it be cool if" idea mid-build.

### 30-minute stuck rule

If any feature is >30 min over its estimate:
1. Stop debugging.
2. Mock the output (return fake data that looks real).
3. Log it in `.hackathon/failures-log.md`.
4. Move on to the next MUST-HAVE.
5. Revisit in `/hackathon:polish` if time permits.

### Deploy from minute 1

- Once `/hackathon:scaffold` runs, the live URL is sacred.
- Vercel / EAS auto-deploy on push.
- If a deploy breaks, **fix immediately before writing new features**. Red `main` = broken demo = 0 judging score.

### Seed mock data ≥ 20 rows

- `src/lib/seed.ts` (or stack equivalent) holds ≥20 realistic-looking rows from minute 1.
- All views must render something even with empty user state.
- **Never** show "No data yet" empty states without a CTA or sample content. (Failure mode F-07.)

---

## Uniqueness mode — operational (anti-dilution)

> Teams have natural creative tension — but they also have *compromise dilution*: weird choices get watered down to satisfy the most risk-averse member, and the project drifts toward a generic SaaS template by minute 30. **Claude's job in team mode is the devil's-advocate that holds the line on the locked Pattern-break against that dilution.** This section is operational, not aspirational. See [`docs/uniqueness-principles.md`](docs/uniqueness-principles.md) for the principles and [[Synergy-v2.0 — Hackathon Brain/10-event/uniqueness-thinking]] for the deeper reasoning.

### The one rule

**Pick one strategic pattern-break at `/hackathon:scope`. Polish it to glass. Cut everything that distracts from it.** Judges see 30+ projects in one afternoon; they remember one weird thing per project. We commit to ONE so we get retrieved.

The 11 archetypes are in [`docs/uniqueness-principles.md`](docs/uniqueness-principles.md) §2 (Time-Reveal, Local-Detail, Hardware-Surprise, Audience-Inversion, Format-Inversion, Live-Interactive, Live-Computation, Tension-Reveal, Public-Good Frame, Embodied-Number, Permission-Break). Pick one. Maybe combine two. Never three.

### Behavioral directives for Claude during `/hackathon:build`

When Claude is invoked during build phase, Claude operates as a **creative partner, not an executor**:

1. **Default to non-default options.** When proposing a name/color/copy/UI choice, Claude offers the weird option first, the safe option second. Leo decides; Claude doesn't ask permission.
2. **Flag template-y choices.** Hero gradient + 3-column features, sidebar+top-nav dashboard, "An app that..." opening, `Eco*`/`Green*`/`Smart*` names → Claude says: *"That's the saturated SaaS template. Want a non-default version?"* before proceeding.
3. **Hold the pattern-break commitment.** The archetype locked in `scope.md` is sacred. Every choice asks: *"Does this support or distract from the pattern-break?"* If distract → cut.
4. **Name specific things over abstractions.** "Scarborough East" not "a neighborhood." "Portlands Energy Centre" not "a power plant." "Carl Meyer at The Narwhal" not "a journalist."
5. **Refuse corporate-comms language.** No "leverage," "synergies," "stakeholders," "empower," "powering bright futures," "AI-powered" as a feature. Direct words with proper nouns.
6. **Push back on scope drift toward generic features.** Loyalty is to scope.md, not to Leo's comfort. *"This isn't in scope.md. Amend or cut?"*

### Auto-rejected by Claude (without explicit override)

- Default shadcn slate/zinc gray palette (instead: data-anchored palette — see `uniqueness-principles.md` §9)
- README opening with "An app that..." or "A platform for..."
- Demo opening with "Hi I'm..." (instead: number / sound / image / quote / question)
- Architecture diagram in the first 30 seconds of a demo
- Tech-stack name-dropping in the first 60 seconds of a pitch
- "AI-powered" as a feature description (it's table stakes; say WHAT the AI does)
- Names with `Eco*`/`Green*`/`Smart*`/`Grid*`/`Climate*`/`Sustainable*` prefixes
- Stock photos of solar panels or wind turbines

### Uniqueness gate — when does this apply?

High-leverage moments: project name, tagline, demo opening, demo wow moment, closing line, hero image, color palette, README opening. **Uniqueness on the surface (what judges see), defaults under the hood (what only you see).** Don't make the deploy stack weird. Don't make the auth flow weird. Make the cover image weird.

### Project-agent integration

- **`scope-defender`** — now also rejects new features that distract from the locked pattern-break, in addition to features that aren't in `scope.md`
- **`demo-moment-critic`** — now also rejects `scope.md` that doesn't specify (a) the chosen archetype, (b) the 10-second moment as a literal video script, (c) the fallback if the weird version doesn't land, (d) what was cut to support the pattern-break
- **`energy-domain-researcher`** — unchanged (factual)

---

## What judges see

`.hackathon/scope.md` defines what matters. At any decision point, ask: *"Does this help the demo moment land?"* If no → cut it.

The **demo moment** is the 10-second clip the judges remember. Run the **`demo-moment-critic`** project agent at `/hackathon:scope` AND at `/hackathon:polish` to stress-test it against:
- Universal 4-axis rubric (technical / design / originality / impact — 25% each by default)
- "What ACTUALLY wins" patterns from `~/.claude/skills/hackathon/references/judging-rubrics.md`

Per-event judging axes are stored in `.hackathon/event.yaml` → `judging.rubric` and updated at `/hackathon:init`.

---

## Commands you'll use

### Hackathon phases
- `/hackathon:init` — fill `.hackathon/event.yaml` with confirmed event details
- `/hackathon:ideate` — score 5–10 ideas, pick 1, tag stack preset
- `/hackathon:scope` — write `.hackathon/scope.md` (MUST-HAVES + demo moment + pitch draft)
- `/hackathon:team` — split tracks if going multi-person
- `/hackathon:scaffold` — live-deployed blank URL (web-ai / saas / mobile / data-viz / agent)
- `/hackathon:build` — next feature per scope priority
- `/hackathon:polish` — visual QA, error states, perf
- `/hackathon:demo` — record video + screenshots + finalize README
- `/hackathon:pitch` — 60-sec pitch script
- `/hackathon:retro` — post-event lessons → G-FAIL / G-PAT

### Adjacent
- `/flow:quick [task]` — one-off small change
- `/flow:debug [symptom]` — when stuck (BEFORE the 30-min rule fires)
- `/ship-verify` — MANDATORY after deploy; never trust `UP-TO-DATE`
- `/design-check` — MANDATORY before any UI work with a design reference

---

## Project-local agents (in `.claude/agents/`)

These three exist only in this project — they're not in the global ATLAS roster.

| Agent | When to invoke |
|---|---|
| **`demo-moment-critic`** | At `/hackathon:scope` (does the demo moment land?) and again at `/hackathon:polish` (does the implementation deliver it?). |
| **`scope-defender`** | The instant the user (or you) proposes ANY feature, change, or "wouldn't it be cool if". Returns IN_SCOPE / OUT_OF_SCOPE_CUT / OUT_OF_SCOPE_AMEND. |
| **`energy-domain-researcher`** | When the team needs a concrete energy-sector dataset, API, regulator, or metric. Fetches and appends findings to `docs/energy-domain.md`. |

Invoke via the Agent tool with the matching `subagent_type`.

---

## Persistent memory layers (this project)

Inherited from `~/Documents/CLAUDE.md`. Consult before non-trivial answers.

| Layer | Path | Use when |
|---|---|---|
| Project auto-memory | `~/.claude/projects/C--Users-leooa-Documents-personal-projects-Synergy-v2-0/memory/` | **Empty by design** — auto-memory was retired in global ATLAS v8.0.0. Do not write here. The vault below is the project memory layer. |
| Consolidated brain | `~/Documents/Wiki/wiki/` | Personal facts, engineering patterns, external knowledge. Anchor: `wiki/personal/system-overview.md`. |
| Project state | `.hackathon/` | Event, scope, timeline, failures, demo artifacts — source of truth mid-event. |
| Pre-event dossier | `~/.claude/plans/now-i-want-you-elegant-narwhal.md` | 1,343-line research dossier — Ontario energy landscape, past-winner archetypes, sponsor map, MLH judging conventions. Read sections by topic, not full-file. |
| Uniqueness doctrine | `docs/uniqueness-principles.md` | The 11 pattern-break archetypes + default-breaker checklist. **Required reading** for `scope-defender` and `demo-moment-critic` agents. |
| Build readiness | `docs/build-readiness.md` | Operational pre-event decisions: stack validation, mock data, demo recording, crisis response, scope-defense canned phrases, sleep protocol. The "how-we-don't-trip" doc. |
| Themes (verbatim) | `docs/themes.md` | The 3 organizer challenge categories transcribed verbatim + a 15-angle library mapped per theme. Source of `/hackathon:ideate` candidates. |
| Timeline | `docs/timeline.md` | Day-by-day with `/hackathon:*` command mapping. Read at session start during the event. |
| Domain notes | `docs/energy-domain.md` | Energy-sector facts gathered by `energy-domain-researcher`. |
| Event facts | `docs/seneca-hackathon-context.md` | What we know about the event itself + open questions awaiting organizer confirmation. |
| Project vault | `Synergy-v2.0 — Hackathon Brain/` | Working brain — exploration, daily logs, ideas, design, raw materials. Open as Obsidian vault. See the vault's `README.md` for the routing guide and `index.md` for the live MOC. |
| Project scope template | `templates/scope.md.tmpl` | **Project-local override** for `/hackathon:scope`. Adds the four Pattern-break sections that `demo-moment-critic` enforces. When `/hackathon:scope` runs, use this template instead of the global `~/.claude/skills/hackathon/templates/scope.md`. |

---

## Stack-specific rules

_Will be appended once `/hackathon:ideate` picks a preset (web-ai / saas / mobile / data-viz / agent). See `~/.claude/skills/hackathon/references/stack-presets.md` for the per-preset rule packs._

---

## Do NOT

- Do **not** scaffold a tech stack until `/hackathon:scaffold` runs (idea-locked first).
- Do **not** write `scope.md` outside `/hackathon:scope`.
- Do **not** force-push, hard-reset, or delete branches without explicit user OK (global safety rule).
- Do **not** skip `/ship-verify` after a deploy. UP-TO-DATE messages lie.
- Do **not** push the wiki (`~/Documents/Wiki/`) — local-only repo, enforced by global pre-push hook.
