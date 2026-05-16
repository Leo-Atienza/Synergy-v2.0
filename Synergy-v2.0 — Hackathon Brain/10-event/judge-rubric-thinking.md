---
title: Judge rubric — reverse-engineering what wins
type: event
status: draft
updated: 2026-05-15
sources: ["[[../../docs/themes.md|themes]]", "[[../../docs/seneca-hackathon-context.md|seneca-hackathon-context]]"]
---

# Judge rubric — reverse-engineering what wins

Organizers haven't published the rubric. We're defaulting to **universal 4-axis** (technical / design / originality / impact, 25% each) until they confirm. This page captures our reasoning about what judges at THIS event are likely to weight more, based on the theme prose.

## Signal #1 — themes overweight communication

All 3 themes ([[../../docs/themes.md|themes verbatim]]) explicitly call out:

- "maps, visuals, or digital tools" (Theme 1)
- "simple tools or visuals that help people understand" (Theme 2)
- "clear and accessible ideas" (Theme 3)

Every theme uses words like *understand*, *help*, *communicate*, *clear*, *accessible*. **Inference:** judges will reward a project where the message lands in the first 10 seconds, even if the underlying tech is modest. They will probably PUNISH projects that are technically impressive but visually confusing or require explanation to grasp.

→ **Implication for scope:** demo moment must be a 10-second visual reveal, not a feature walkthrough.

## Signal #2 — "decision makers" framing in Theme 3

Theme 3 specifically: *"help decision makers understand where support or investment can make the biggest difference."*

→ **Implication for user persona:** if we pick Theme 3, the user in the demo should be a planner / policymaker / utility analyst, not a consumer. UI should look like a dashboard, not a consumer app.

## Signal #3 — Canadian context

Theme 1 explicitly mentions Canada. None of the themes mention any other country.

→ **Implication for data choice:** use Canadian sources where dual options exist (Statistics Canada, ECCC, IESO grid data, Open Data Toronto, NRCan datasets) over US/global. Adds credibility to the demo even if judges don't notice consciously.

## Signal #4 — venue is a polytechnic, not a startup incubator

Seneca Polytechnic is an applied-learning institution. Judges are likely to include faculty, energy-industry folk, and Seneca admin. They are NOT VCs — they're not scoring "could this be a unicorn?". They're scoring "does this solve a real energy/equity problem in a way the audience can grasp?".

→ **Implication for pitch:** lead with the problem (energy poverty / grid resilience / clean-energy literacy) and how the demo moment makes it concrete. Don't lead with market size or scaling story.

## Default rubric weighting (until organizer confirms)

| Axis | Default weight | Our suspected weight (this event) | Why |
|---|---|---|---|
| Technical | 25% | 20% | This is an energy/sustainability hackathon, not a code competition. |
| Design | 25% | 30% | Theme prose overweights communication & accessibility. |
| Originality | 25% | 20% | Themes are framed broadly — many teams will land in similar territory. Originality matters but isn't the swing axis. |
| Impact | 25% | 30% | "Help decision makers", "fairness", "community well-being" — judges want to feel the project matters. |

**Update this once organizers publish the actual rubric** — this is a starting prior, not a fact.

## Demo-moment-critic anchor

When we run the [`demo-moment-critic`](../../.claude/agents/demo-moment-critic.md) agent at `/hackathon:scope` and `/hackathon:polish`, give it this rubric-thinking page as input alongside the demo description. The agent's verdict is more useful when calibrated to the actual judging context, not the generic rubric.

## Open question

Confirm rubric with organizers Day 1 of Phase 1 (top-priority Open Question from [[../../docs/seneca-hackathon-context.md#open-questions]]).
