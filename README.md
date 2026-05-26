# Synergy-v2.0

Team entry for the **[Seneca Energy Hackathon 2026](https://www.senecahackathon.com/)** — qualifier video due May 26, in-person finale May 29–30 at Newnham Campus.

> Theme: *The Energy to Innovate* — clean energy, smart grid, community equity (Canadian / Ontario context).

> 👋 **Teammates — start here → [ONBOARDING.md](ONBOARDING.md).** How to accept your invite and read the project (no coding required). The project is [`sanctuary/`](sanctuary/).

| | |
|---|---|
| **Repo** | [github.com/Leo-Atienza/Synergy-v2.0](https://github.com/Leo-Atienza/Synergy-v2.0) |
| **Live URL** | [project-sanctuary-seneca.vercel.app](https://project-sanctuary-seneca.vercel.app) · [sanctuary-phi.vercel.app](https://sanctuary-phi.vercel.app) — support showcase + recording backup |
| **ArcGIS Web Map** | [Build Web Map](https://senecatechnology.maps.arcgis.com/apps/mapviewer/index.html?webmap=17951a55fae44a83a330101433dda67a) (built) · StoryMap wrapper pending |
| **Demo video** | _pending — team recording pass (≤5:00)_ |
| **Final commit** | _freeze `v1-submission` tag at submission_ |
| **Submission deadline** | 2026-05-26 23:59 ET |
| **Pitch venue** | HELIX Main Stage, 1750 Finch Ave East, Toronto |

## Status (as of 2026-05-26 — submission day)

| Field | Value |
|---|---|
| Phase | Build / qualifier-video prep |
| Active submission | Sanctuary |
| Time to submission | **TODAY — deadline 2026-05-26 23:59 ET** (confirm the firm time on the Hackathon Portal) |
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
- [ ] Team locked — fill `event.yaml` `team.members` + name every member on screen (Collaboration = 20%)
- [x] Stack locked + support site built, deployed, and verified — [`sanctuary/web/`](sanctuary/web/), live at the URLs above
- [x] Seed data — 10 hand-verified candidate buildings — [`sanctuary/data/candidate-hubs.csv`](sanctuary/data/candidate-hubs.csv)
- [x] Idea locked — Sanctuary, after 2026-05-25 scope amendment
- [x] Pattern-break archetype locked + scope written — [`.hackathon/scope.md`](.hackathon/scope.md)
- [~] ArcGIS **Web Map** built; **StoryMap** wrapper + screenshots + video pending (team recording) — [`sanctuary/artifacts/arcgis-links.md`](sanctuary/artifacts/arcgis-links.md)

## Where things live

**The project is [`sanctuary/`](sanctuary/).** Everything else is reference, state, or history.

| If you want… | Open |
|---|---|
| **The project — Sanctuary** (data, StoryMap script, methods, judge Q&A) | [`sanctuary/`](sanctuary/) — start at its README |
| The plain-English intro + FAQ | [`sanctuary/docs/sanctuary-introduction-faq.md`](sanctuary/docs/sanctuary-introduction-faq.md) |
| The runnable web map (Next.js) | [`sanctuary/web/`](sanctuary/web/) |
| The candidate-building data + scoring | [`sanctuary/data/`](sanctuary/data/) |
| The locked scope + 10-second demo moment | [`.hackathon/scope.md`](.hackathon/scope.md) |
| Event metadata | [`.hackathon/event.yaml`](.hackathon/event.yaml) |
| Themes verbatim + 15-angle library | [`docs/themes.md`](docs/themes.md) |
| The pattern-break doctrine | [`docs/uniqueness-principles.md`](docs/uniqueness-principles.md) |
| Day-by-day with `/hackathon:*` mapping | [`docs/timeline.md`](docs/timeline.md) |
| Ontario energy datasets / APIs | [`docs/energy-domain.md`](docs/energy-domain.md) |
| Pre-event research dossier (1,343 lines) | [`docs/research-dossier.md`](docs/research-dossier.md) |
| Pre-event readiness checklist | [`docs/build-readiness.md`](docs/build-readiness.md) |
| The thinking vault (ideas, research, daily log, handoffs) | `Synergy-v2.0 — Hackathon Brain/` → start at `index.md` |
| **Cut earlier idea** (Valley/Tide) — kept as a fallback, *not* what we're building | [`archive/`](archive/) |

## Project-local Claude config

- [`CLAUDE.md`](CLAUDE.md) — project rules + persistent memory layers + Uniqueness mode doctrine
- [`.claude/agents/`](.claude/agents/) — `demo-moment-critic`, `scope-defender`, `energy-domain-researcher`
- [`templates/scope.md.tmpl`](templates/scope.md.tmpl) — project-local scope template (extends global with Pattern-break sections)

## Stack

- **Primary deliverable:** an ArcGIS StoryMap + Web Map (Esri sponsor fit) — the 5-minute qualifier video demos this, not a deployed app. See [`sanctuary/docs/storymap-and-data-guide.md`](sanctuary/docs/storymap-and-data-guide.md).
- **Supporting web map:** a Next.js app in [`sanctuary/web/`](sanctuary/web/) (`npm install && npm run dev` inside that folder) rendering the Peel HVI + candidate hubs.
- **Data spine:** hand-verified candidate buildings in [`sanctuary/data/`](sanctuary/data/) (CSV + GeoJSON), sourced per [`docs/peel-fsa-data-note.md`](docs/peel-fsa-data-note.md).
