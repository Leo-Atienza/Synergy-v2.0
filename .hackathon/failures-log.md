# Failures log — Sanctuary

> Append-only, in-event record of features that went over the 30-minute stuck rule and got **mocked** or **cut**, plus anything that broke. Mirror of the vault's [`50-build-log/failures.md`](../Synergy-v2.0%20—%20Hackathon%20Brain/50-build-log/failures.md). Input to `/hackathon:retro`. The `scope-defender` agent reads this: a feature that already failed once is cut by default.

**How to use:** when a feature is >30 min over estimate (per [`CLAUDE.md`](../CLAUDE.md) → "30-minute stuck rule"), stop, mock the output, add a row below, and move on. Revisit at `/hackathon:polish` only if time remains.

| Timestamp (ET) | Feature | What happened | Decision | Revisit? |
|---|---|---|---|---|
| _none yet_ | — | — | — | — |

<!-- Template row:
| 2026-05-26T14:30 | 500 m walkshed via Network Analyst | ArcGIS Network Analyst auth kept failing on the free org | Mocked with 500 m circular buffers, labelled "modelled 500 m estimate" | Only if buffer looks wrong on camera |
-->
