# Synergy-v2.0

Team entry for the **[Seneca Energy Hackathon 2026](https://www.senecahackathon.com/)** — qualifier video due May 26, in-person finale May 29–30 at Newnham Campus.

> Theme: *The Energy to Innovate* — clean energy, smart grid, community equity (Canadian / Ontario context).

> 👋 **Teammates — start here → [ONBOARDING.md](ONBOARDING.md).** How to accept your invite and read the whole project brain (no coding required). The active working packet is [`sanctuary/`](sanctuary/).

| | |
|---|---|
| **Repo** | [github.com/Leo-Atienza/Synergy-v2.0](https://github.com/Leo-Atienza/Synergy-v2.0) |
| **Live URL** | _set at `/hackathon:scaffold`_ |
| **Demo video** | _set at `/hackathon:demo`_ |
| **Final commit** | _frozen at `/hackathon:demo`_ |
| **Submission deadline** | 2026-05-26 23:59 ET |
| **Pitch venue** | HELIX Main Stage, 1750 Finch Ave East, Toronto |

## Status (as of 2026-05-25)

| Field | Value |
|---|---|
| Phase | Build / qualifier-video prep |
| Active submission | Sanctuary |
| Days to submission | **1** (deadline 2026-05-26 23:59 ET) |
| Mode | Team — split GIS/data, StoryMap/design, research/pitch |
| Stack preset | ArcGIS StoryMap + Web Map/Dashboard |
| Pattern-break archetype | Public-Good Frame + Local-Detail |
| Demo moment | HVI hot spot -> named candidate hub -> honesty-labelled panel -> ranked top five |

### Pre-event progress

- [x] Event metadata locked — [`.hackathon/event.yaml`](.hackathon/event.yaml)
- [x] Themes captured verbatim + 15-angle library — [`docs/themes.md`](docs/themes.md)
- [x] Energy domain dossier compiled (1,343 lines, 6 parallel agents) — [`docs/research-dossier.md`](docs/research-dossier.md)
- [x] Uniqueness doctrine written (11 archetypes, default-breaker checklist) — [`docs/uniqueness-principles.md`](docs/uniqueness-principles.md)
- [x] Build-readiness checklist (sections A–J: stack / mock data / demo / submission / sponsors / crisis / decisions / wellbeing / reading) — [`docs/build-readiness.md`](docs/build-readiness.md)
- [x] Three project-local Claude agents synced to doctrine — [`.claude/agents/`](.claude/agents/)
- [x] Project-local scope template extending global with four Pattern-break sections — [`templates/scope.md.tmpl`](templates/scope.md.tmpl)
- [x] Pre-mortem template scaffolded — [`.hackathon/pre-mortem.md`](.hackathon/pre-mortem.md)
- [x] Vault scaffolded — 8 numbered folders + daily template + decision log + mentor questions seeded
- [ ] Team locked — run `/hackathon:team` to fill `event.yaml` `team.size` + `team.members`
- [ ] Stack pre-validated (Next.js + Vercel + Supabase + Mapbox/MapLibre throwaway deploys) — per `docs/build-readiness.md` §A
- [ ] Seed data pre-fetched — per `docs/build-readiness.md` §B
- [x] Idea locked — Sanctuary, after 2026-05-25 scope amendment
- [x] Pattern-break archetype locked + scope written — [`.hackathon/scope.md`](.hackathon/scope.md)
- [ ] ArcGIS StoryMap/Web Map built — track in [`sanctuary/artifacts/arcgis-links.md`](sanctuary/artifacts/arcgis-links.md)

## Where things live

| If you want… | Open |
|---|---|
| **The active Sanctuary submission** — data, StoryMap script, methods, judge Q&A | [`sanctuary/`](sanctuary/) |
| **The cut Valley candidate** — docs, engine spike, demo UI | [`valley/`](valley/) |
| Event metadata | [`.hackathon/event.yaml`](.hackathon/event.yaml) |
| Locked scope (after May 24) | [`.hackathon/scope.md`](.hackathon/scope.md) |
| Themes verbatim + 15-angle library | [`docs/themes.md`](docs/themes.md) |
| Pre-event readiness checklist | [`docs/build-readiness.md`](docs/build-readiness.md) |
| The pattern-break doctrine | [`docs/uniqueness-principles.md`](docs/uniqueness-principles.md) |
| Day-by-day with `/hackathon:*` mapping | [`docs/timeline.md`](docs/timeline.md) |
| Ontario energy datasets / APIs | [`docs/energy-domain.md`](docs/energy-domain.md) |
| Working brain (Obsidian vault) | [`Synergy-v2.0 — Hackathon Brain/index.md`](Synergy-v2.0%20%E2%80%94%20Hackathon%20Brain/index.md) |
| Pre-event research dossier (1,343 lines) | [`docs/research-dossier.md`](docs/research-dossier.md) |

## Project-local Claude config

- [`CLAUDE.md`](CLAUDE.md) — project rules + persistent memory layers + Uniqueness mode doctrine
- [`.claude/agents/`](.claude/agents/) — `demo-moment-critic`, `scope-defender`, `energy-domain-researcher`
- [`templates/scope.md.tmpl`](templates/scope.md.tmpl) — project-local scope template (extends global with Pattern-break sections)

## Stack

_Not yet scaffolded — happens at `/hackathon:scaffold` after `/hackathon:ideate` picks a preset._
