---
title: 30-research — energy domain knowledge
type: folder-index
status: confirmed
updated: 2026-05-15
---

# 30-research — energy domain knowledge

Where domain research lives. Mostly populated by the [`energy-domain-researcher`](../../.claude/agents/energy-domain-researcher.md) project agent on demand, but also direct human research.

## Canonical companion

The agent appends durable findings to **[`../../docs/energy-domain.md`](../../docs/energy-domain.md)** — that's the operational, command-readable canonical version. This folder holds the working notes, drafts, and cross-references.

## Pages

- [[canadian-data-sources]] — datasets, APIs, regulators we know about (working list)
- [[../10-event/sponsors-watch|sponsors-watch]] (linked, not here) — sponsors as they're announced

## When to invoke `energy-domain-researcher`

- We have an idea that requires a real dataset and we don't know if one exists
- A mentor or sponsor mentions a tool, API, or regulator we don't recognize
- We need a metric definition (kWh vs kW, capacity factor, LCOE, demand response) for a pitch

## Process

1. Invoke the agent: "Find a Canadian dataset for X" or "Does NRCan publish Y?"
2. Agent appends to [`../../docs/energy-domain.md`](../../docs/energy-domain.md) with citation URLs
3. We add reasoning / cross-references in this folder if needed
4. Update [[canadian-data-sources]] index when a new source is added
