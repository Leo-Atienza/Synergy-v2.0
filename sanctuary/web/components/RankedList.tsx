"use client";

import type { Hub } from "@/lib/hubs";
import { HVI_COLORS } from "@/lib/hubs";

// The ranked top-five. Shares selectedRank with the map for cross-highlight.
export function RankedList({
  hubs,
  selectedRank,
  onSelect,
}: {
  hubs: Hub[];
  selectedRank: number;
  onSelect: (rank: number) => void;
}) {
  return (
    <div className="ranked">
      <div className="ranked-head">Harden these five first</div>
      {hubs.map((h) => (
        <button
          key={h.rank}
          type="button"
          className={`ranked-row ${h.rank === selectedRank ? "ranked-sel" : ""}`}
          onClick={() => onSelect(h.rank)}
          aria-pressed={h.rank === selectedRank}
        >
          <span className="ranked-num tnum">{h.rank}</span>
          <span className="ranked-name">{h.name}</span>
          <span className="ranked-hvi tnum" style={{ color: HVI_COLORS[h.hvi] }}>
            HVI {h.hvi}
          </span>
        </button>
      ))}
      <p className="ranked-note">Rank is hand-verified. A building cannot enter the top five from a modelled estimate alone.</p>
    </div>
  );
}
