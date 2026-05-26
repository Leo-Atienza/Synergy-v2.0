"use client";

import type { Hub } from "@/lib/hubs";

// All ten candidates as selectable buttons. (Not an ARIA table — the rows are
// interactive buttons, so each carries its own accessible name; the header row is
// visual only.) Clicking a row sets the shared selectedRank.
export function CandidateTable({
  hubs,
  selectedRank,
  onSelect,
}: {
  hubs: Hub[];
  selectedRank: number;
  onSelect: (rank: number) => void;
}) {
  return (
    <div className="candidate-table" role="group" aria-label="All ten candidate resilience hubs">
      <div className="candidate-row candidate-head" aria-hidden="true">
        <span>Rank</span>
        <span>Building</span>
        <span>Municipality</span>
        <span>HVI</span>
        <span>Role</span>
      </div>
      {hubs.map((h) => (
        <button
          key={h.rank}
          type="button"
          className={`candidate-row ${h.rank <= 5 ? "candidate-top" : ""} ${h.rank === selectedRank ? "candidate-selected" : ""}`}
          onClick={() => onSelect(h.rank)}
          aria-pressed={h.rank === selectedRank}
          aria-label={`${h.name}, ${h.municipality}, HVI ${h.hvi}, ${h.trustLabel}, rank ${h.rank}`}
        >
          <span className="tnum" aria-hidden="true">#{h.rank}</span>
          <span aria-hidden="true">{h.name}</span>
          <span aria-hidden="true">{h.municipality}</span>
          <span className="tnum" aria-hidden="true">HVI {h.hvi}</span>
          <span aria-hidden="true">{h.trustLabel}</span>
        </button>
      ))}
    </div>
  );
}
