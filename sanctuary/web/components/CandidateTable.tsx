"use client";

import type { Hub } from "@/lib/hubs";

// All ten candidates. Clicking a row sets the shared selectedRank.
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
    <div className="candidate-table" role="table" aria-label="All ten candidate resilience hubs">
      <div className="candidate-row candidate-head" role="row">
        <span role="columnheader">Rank</span>
        <span role="columnheader">Building</span>
        <span role="columnheader">Municipality</span>
        <span role="columnheader">HVI</span>
        <span role="columnheader">Role</span>
      </div>
      {hubs.map((h) => (
        <button
          key={h.rank}
          type="button"
          role="row"
          className={`candidate-row ${h.rank <= 5 ? "candidate-top" : ""} ${h.rank === selectedRank ? "candidate-selected" : ""}`}
          onClick={() => onSelect(h.rank)}
          aria-pressed={h.rank === selectedRank}
        >
          <span className="tnum" role="cell">#{h.rank}</span>
          <span role="cell">{h.name}</span>
          <span role="cell">{h.municipality}</span>
          <span className="tnum" role="cell">HVI {h.hvi}</span>
          <span role="cell">{h.trustLabel}</span>
        </button>
      ))}
    </div>
  );
}
