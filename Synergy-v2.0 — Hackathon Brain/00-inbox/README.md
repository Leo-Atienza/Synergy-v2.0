---
title: 00-inbox — unsorted dump
type: folder-index
status: confirmed
updated: 2026-05-15
---

# 00-inbox — unsorted

Drop anything here when you don't know where else it goes. Process into the right folder weekly, or whenever this folder gets >5 files.

## Routing rules (when sorting)

| Content type | Move to |
|---|---|
| Photo, slide, PDF, screenshot of source material | [`90-raw/<type>/<YYYY-MM-DD-slug>/`](../90-raw/) |
| New event fact (rule, sponsor, deadline change) | Update [`../../docs/seneca-hackathon-context.md`](../../docs/seneca-hackathon-context.md) and add reasoning to [`10-event/`](../10-event/) |
| Idea sketch | [`20-ideas/`](../20-ideas/) |
| Research finding | [`30-research/`](../30-research/) |
| Design inspiration / wireframe | [`40-design/`](../40-design/) |
| Daily takeaway, mentor quote | [`50-build-log/<YYYY-MM-DD>.md`](../50-build-log/) |
| Decision worth remembering | [`50-build-log/decisions.md`](../50-build-log/decisions.md) |

## When in doubt

Tag the file with `#unsorted` in frontmatter and add a one-line note about what it might be. Future-you will figure it out.

## Default for new notes

The Obsidian vault config ([`../.obsidian/app.json`](../.obsidian/app.json)) sets this folder as the default for new notes — they land here, then get moved during sorting passes.
