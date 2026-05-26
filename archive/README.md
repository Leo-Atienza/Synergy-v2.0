# archive/

Cut work, kept on purpose. Nothing in here is the active submission.

**The active project is [`../sanctuary/`](../sanctuary/).** Start there.

| Folder | What it was | Why it's here |
|---|---|---|
| [`valley/`](valley/) | The earlier lead candidate (originally named *Tide*): grid-aware load shifting for Ontario renters — a ~$25 smart plug + a Peel energy-burden map. Includes a proven TypeScript engine spike, a Next.js demo UI, and full docs/PDFs. | Cut on 2026-05-25 when Sanctuary became the locked submission. Kept as a working fallback: the engine runs and is test-covered, so if Sanctuary's ArcGIS path stalls, Valley is a real coded backup. |

## Reading the cut Valley work

- Plain-English brief: [`valley/docs/tide-team-brief.pdf`](valley/docs/tide-team-brief.pdf)
- Is the engine real? [`valley/spike/VIABILITY.md`](valley/spike/VIABILITY.md) — proven on live IESO data, 7/7 tests passing
- Run it: [`valley/docs/tide-dev-guide.md`](valley/docs/tide-dev-guide.md) (paths inside read `valley/...`; prepend `archive/` now that it lives here)

## This is a frozen snapshot

Links *inside* `valley/` still work (the whole folder moved together). Links that point *out* of `valley/` into the live repo (e.g. into `docs/` or `.hackathon/`) are **not maintained** — they reflect the repo as it was before the move and may 404. That's intentional: the archive is a record of the cut idea, not a live document that tracks Sanctuary.

## Why archive instead of delete

The decision to swap Valley → Sanctuary is recorded in [`../.hackathon/scope-log.md`](../.hackathon/scope-log.md) and [`../sanctuary/README.md`](../sanctuary/README.md). The build artifacts (`node_modules/`, `.next/`) were removed to keep this lean — run `npm install` inside `valley/spike` or `valley/tide-web` to restore them.
