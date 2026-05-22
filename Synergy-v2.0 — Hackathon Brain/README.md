---
title: vault — README & routing guide
type: folder-index
status: confirmed
updated: 2026-05-15
---

# Synergy-v2.0 — working brain

This is the project's note-taking brain. **Open as an Obsidian vault:** File → Open folder as vault → select the `Synergy-v2.0 — Hackathon Brain/` folder (this folder, *inside* the repo — not the repo root). New teammates: see [`../ONBOARDING.md`](../ONBOARDING.md) for both reading paths.

This is the **thinking** layer. Operational, machine-read facts live in [`../docs/`](../docs/) and [`../.hackathon/`](../.hackathon/) — those are what `/hackathon:*` commands consume. Don't duplicate facts here; reason about them here.

---

## Where does new context go?

| If it's... | Put it in |
|---|---|
| A confirmed event fact (rules, sponsor, deadline) | Update [`../docs/seneca-hackathon-context.md`](../docs/seneca-hackathon-context.md), then drop a thinking-note in [`10-event/`](10-event/) |
| A photo, slide, PDF, screenshot, audio clip | [`90-raw/<type>/<YYYY-MM-DD-slug>/`](90-raw/) — never edit, immutable source |
| **Don't know yet** | [`00-inbox/`](00-inbox/) — process later |
| An idea for the project | [`20-ideas/`](20-ideas/) |
| Research on energy data, APIs, Canadian datasets | [`30-research/`](30-research/) |
| Inspiration screenshot, wireframe, design mock | [`40-design/`](40-design/) (`inspiration/` and `wireframes/` subfolders) |
| Daily build note, mentor takeaway, decision | [`50-build-log/<YYYY-MM-DD>.md`](50-build-log/) |
| Session-end handoff | [`60-handoffs/`](60-handoffs/) |
| Something that broke (failed idea, scope cut, mocked feature) | [`50-build-log/failures.md`](50-build-log/failures.md) |

## Folder index (10-step gaps so we can insert later)

| # | Folder | Purpose |
|---|---|---|
| 00 | [`00-inbox/`](00-inbox/) | Unsorted dump — process into right folder weekly (or when it gets >5 files) |
| 10 | [`10-event/`](10-event/) | Event-fact reasoning (companion to `../docs/`) |
| 20 | [`20-ideas/`](20-ideas/) | Idea generation → scoring → chosen idea |
| 30 | [`30-research/`](30-research/) | Energy domain — datasets, APIs, regulators, sponsor research |
| 40 | [`40-design/`](40-design/) | Demo storyboard, wireframes, judge narrative, inspiration |
| 50 | [`50-build-log/`](50-build-log/) | Daily journal, decisions, failures, scope amendments |
| 60 | [`60-handoffs/`](60-handoffs/) | Session handoff files (per `/handoff` skill) |
| 90 | [`90-raw/`](90-raw/) | Immutable source materials — photos, PDFs, screenshots |

## Conventions

- **Frontmatter on every page:**
  ```yaml
  ---
  title: <page title>
  type: event | idea | research | design | log | handoff | folder-index | raw
  status: draft | confirmed | stale
  updated: 2026-05-15
  sources: ["[[Page]]", "https://..."]
  ---
  ```
- **Links:** wikilinks `[[Page]]` for in-vault navigation, markdown `[text](../docs/file.md)` for files outside the vault (Obsidian opens them in the system's default editor).
- **Dates:** ISO `YYYY-MM-DD` everywhere.
- **Daily build log:** one file per day named `50-build-log/YYYY-MM-DD.md`. Start May 24.
- **Numbering gap:** folders use 10-step gaps (00, 10, 20...) so new categories slot in without renumbering.

## Relationship to the global wiki

This vault is **project-scoped** — only Synergy-v2.0 / Seneca Energy Hackathon 2026 lives here. The personal global wiki at `~/Documents/Wiki/` holds cross-project knowledge.

Post-event, anything worth keeping (patterns, errors, failures, lessons) gets promoted into `~/Documents/Wiki/wiki/engineering/` at `/hackathon:retro`. This vault stays in the project repo as a record of what happened.

## Maintenance

- **Inbox cleanup:** sort `00-inbox/` weekly or when it gets >5 files.
- **Hot list:** [`hot.md`](hot.md) is auto-updated by ATLAS hooks if available, otherwise manually.
- **Activity trail:** [`log.md`](log.md) is append-only — never delete entries.
- **Stale frontmatter:** if `updated` is >7 days old and content references the past, mark `status: stale`.

See [`index.md`](index.md) for the live MOC (Map of Content) and current status board.
