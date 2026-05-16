---
title: 90-raw — immutable source materials
type: folder-index
status: confirmed
updated: 2026-05-15
---

# 90-raw — immutable source materials

Where raw, never-edited source material lives. Photos, PDFs, screenshots, audio clips, anything we didn't write ourselves.

## Subfolders (created on demand)

```
90-raw/
  README.md             # this file
  photos/               # camera-roll captures
    YYYY-MM-DD-<event-slug>/
      slide-NN-<title>.jpg
      handout-NN-<title>.jpg
      README.md         # what these photos are
  pdfs/                 # PDFs of slides, rules, datasets
    YYYY-MM-DD-<source>-<title>.pdf
  screenshots/          # browser screenshots of source pages
    YYYY-MM-DD-<source>-<title>.png
  attachments/          # default Obsidian paste-attachments destination
```

## Rules

1. **Never edit raw files.** Annotate and reason in the relevant numbered folder, not here.
2. **Always date the folder/file.** ISO `YYYY-MM-DD` first.
3. **Always include a slug.** Date-only filenames are useless 3 days later.
4. **One README per event/source dump.** Tell future-self what these are and where they came from.
5. **Source URL or origin** in the README — if it came from a website, copy the URL.

## Existing raw materials

| Date | Location | What |
|---|---|---|
| 2026-05-15 | [photos/2026-05-15-info-session/](photos/2026-05-15-info-session/) | 4 phone photos from Seneca pre-event info session — slides 05+07, themes handouts. Text captures done; binary `.jpg` files pending sync from phone. |

## Adding new raw

When new raw material comes in:
1. Decide subfolder (`photos/`, `pdfs/`, `screenshots/`, etc.)
2. Create `YYYY-MM-DD-<slug>/` folder if it's a multi-file drop, otherwise file directly
3. Add `README.md` describing source + content
4. Update the "Existing raw materials" table above
5. Append to [`../log.md`](../log.md)
6. Cross-link from the relevant thinking page (e.g., a photo of a sponsor slide → linked from [[../10-event/sponsors-watch]])

## Why a separate raw folder?

- Raw materials are the **evidence** behind our notes. Citations need somewhere to point.
- Keeping them separate means notes folders stay searchable (no random PDFs cluttering grep).
- Future-us can re-read original source if our notes are wrong or incomplete.
