# Sanctuary Scoring Notes

## Decision Question

If Peel can harden only five trusted community buildings before the next heat wave, which five should be investigated first?

## Score

Keep this transparent enough to explain in 20 seconds:

```txt
hub_score =
  35% heat vulnerability nearby
+ 25% vulnerable population within catchment
+ 20% trust / community role
+ 10% rooftop hardening potential
+ 10% facility suitability
```

## Buckets

Use buckets until real joins are complete:

- **Heat vulnerability nearby:** low / medium / high / top-quintile.
- **Reachable population:** modelled 500 m estimate; do not present as exact.
- **Trust / community role:** civic anchor / faith community anchor / mixed community service.
- **Roof hardening potential:** small / medium / large, from footprint inspection.
- **Facility suitability:** low / medium / high, based on public facility type, accessibility, and visible service role.

## Ranking Discipline

- A candidate cannot be ranked top five from an unverifiable estimate alone.
- A candidate with a strong community role but weak HVI proximity can stay in the dataset, but should not be the hero click.
- The final top five each need a one-sentence "why this one" line for the StoryMap.
- If two candidates are close, choose the one with cleaner source verification and a clearer map reveal.

## Current Status

The seed CSV is address-verified and HVI-verified through the public Peel HVI feature service. Catchment population estimates are still pending. Do not present reachable population as exact until a 500 m estimate or Network Analyst walkshed is filled in.

Current top-five seed, pending catchment estimate:

1. Malton Community Centre and Library — HVI 5, civic/library anchor.
2. Sri Guru Singh Sabha Malton — HVI 5, faith/community anchor.
3. Susan Fennell Sportsplex — HVI 5, large civic facility.
4. Anjuman-E-Anwarul Islam of Malton — HVI 4, adaptive-capacity quintile 5.
5. Bharat Mata Mandir — HVI 3, exposure quintile 5.

## Multi-hazard context columns (2026-05-28) — NOT scoring weights

The 35 / 25 / 20 / 10 / 10 model above is **frozen**. The multi-hazard upgrade added per-building **context facts**, shown in the detail panel with their own evidence tags but **never folded into the score** (adding weighted factors would break both the model and the "where the weights came from" story):

- `flood_status` — relationship to the TRCA regulatory floodplain (dual-method verified). See [`../../docs/peel-flood-data-note.md`](../../docs/peel-flood-data-note.md).
- `winter_vuln` — ON-Marg 2021 Material Resources quintile of the building's tract (the winter / energy-burden lens), `modelled`. A "year-round resilience case" is flagged only where a building is high on BOTH heat (HVI >= 4) and this (>= 4). See [`../../docs/peel-winter-vuln-data-note.md`](../../docs/peel-winter-vuln-data-note.md).
- `backup_power_status` — `pending` for all ten; no candidate has confirmed backup power.
- `ct_population` / `reachable_population_est` — Malton now carries a real, modelled 500 m catchment estimate (~5,900) plus its verified 2021 tract population (5,217). See [`../../docs/malton-catchment-data-note.md`](../../docs/malton-catchment-data-note.md). Other candidates' reachable population stays `pending`.
