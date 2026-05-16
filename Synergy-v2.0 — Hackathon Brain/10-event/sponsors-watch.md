---
title: Sponsors watch — track sponsors as announced
type: event
status: draft
updated: 2026-05-15
sources: ["[[../../docs/seneca-hackathon-context.md|seneca-hackathon-context]]"]
---

# Sponsors watch

> Sponsors are NOT yet announced (as of 2026-05-15). The website doesn't list them; the kickoff slide deck slide 07 was visible, but slides on sponsors weren't captured. Update this file as sponsors surface — Discord, Teams, kickoff slides May 24, organizer email.

## Confirmed sponsors

_None yet. Empty state expected until kickoff (2026-05-24) when challenge sets unveil._

## Suspected / hinted

| Sponsor | Evidence | Likely interest |
|---|---|---|
| _learnatocto.com_ | Listed on website as learning resource | Octopus Energy? Or a Seneca learning platform? Worth checking. |
| Seneca Polytechnic itself | Host institution | Internal IT / facilities / sustainability office may have a track |

## Common Canadian energy-hackathon sponsors (prior-art guess — verify, don't assume)

These have sponsored Canadian energy/sustainability hackathons in recent years. Use as a watch-list, NOT as fact:

- IESO (Independent Electricity System Operator, Ontario grid)
- Hydro One
- Toronto Hydro
- Enbridge
- Bruce Power
- Natural Resources Canada (NRCan)
- ECCC (Environment and Climate Change Canada)
- Octopus Energy / Kraken Tech
- Honeywell

If any of these show up, look up their open APIs and note in [[../30-research/canadian-data-sources|canadian-data-sources]].

## Sponsor-driven scope risk

If a sponsor track is offered with a prize and required tech (e.g., "must use Sponsor X's API"):
- Decide whether to chase it BEFORE `/hackathon:scope` (cost: scope-lock complexity)
- If chasing: add the API to `event.yaml` `judging.required_tech` and treat as DISQUALIFY-IF-MISSING
- If not chasing: explicitly note "skipping sponsor track X — reason: <X>" in [[../50-build-log/decisions]]

## Action: pre-kickoff

- [ ] 2026-05-23: re-check senecahackathon.com for updates
- [ ] 2026-05-24 morning: scan kickoff slides for sponsor list, API mentions, prize tracks
- [ ] 2026-05-24 within 2h of unveil: update this file + canonical docs/ + event.yaml
