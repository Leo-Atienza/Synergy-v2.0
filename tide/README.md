# Tide

Grid-aware load shifting for Ontario. A ~$25 smart plug + software that runs your big appliances at the **3.9¢ overnight** hour instead of the **39.1¢ dinnertime** peak — automatically. **Lead candidate** for the Seneca Energy Hackathon 2026 (scored 94/100).

This folder is everything Tide: the docs, the engine, and the demo UI.

## What's here

| Folder | What |
|---|---|
| [`docs/`](docs/) | The guides — team brief (*why*), how-to-use (*product*), dev guide (*code + hardware*), and the 2026-05-22 research update. A polished PDF sits beside each Markdown source. |
| [`spike/`](spike/) | The **engine + CLI** — the proven TypeScript viability spike (optimizer, live IESO feed, carbon, OEB rates, plug drivers). Start at [`spike/README.md`](spike/README.md). |
| [`tide-web/`](tide-web/) | The **demo UI** — the one-screen Next.js 16 / React 19 WAIT / GO NOW display. |

## Start here

- **The whole idea in 5 minutes (no tech background):** [`docs/tide-team-brief.pdf`](docs/tide-team-brief.pdf)
- **Run the code (~2 min) + the hardware build:** [`docs/tide-dev-guide.md`](docs/tide-dev-guide.md)
- **Use it as a product:** [`docs/how-to-use-tide.md`](docs/how-to-use-tide.md)
- **Is it real?** [`spike/VIABILITY.md`](spike/VIABILITY.md) — proven on live IESO data, 7/7 tests passing.

Candidacy itself lives in the brain: the seed card [`seed-d-tide.md`](../Synergy-v2.0%20—%20Hackathon%20Brain/20-ideas/seed-d-tide.md) and the scoring in [`scored-ideas.md`](../Synergy-v2.0%20—%20Hackathon%20Brain/20-ideas/scored-ideas.md). The chosen-lock waits for the May 24 challenge reveal.
