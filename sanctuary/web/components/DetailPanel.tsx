"use client";

import type { Hub } from "@/lib/hubs";
import { HVI_LABEL } from "@/lib/hubs";
import { m, DUR, EASE_CALM } from "@/lib/motion";
import { EvidenceTag } from "@/components/EvidenceTag";
import { CountUp } from "@/components/CountUp";
import { ArrowUpRight } from "@/components/icons";

// The decision panel. Remounted by key={hub.rank} in the parent, so the score
// count-up and bar fills replay on each new selection. All motion is guarded:
// when `reduced`, bars render at final scale and the number shows instantly.
export function DetailPanel({ hub, reduced }: { hub: Hub; reduced: boolean }) {
  return (
    <div className="detail" aria-live="polite">
      <div className="detail-rank">#{hub.rank} · candidate hub</div>
      <h3 className="detail-name">{hub.name}</h3>
      <div className="detail-meta">
        {hub.typeLabel} · {hub.municipality}
      </div>
      <div className="detail-addr">{hub.address}</div>

      <div className="detail-score">
        <span className="detail-score-num">
          <CountUp value={hub.score} reduced={reduced} />
        </span>
        <span className="detail-score-suffix">/100</span>
        <span className="detail-score-cap">first-pass score</span>
      </div>

      <div className="honesty-strip">
        <EvidenceTag tag="verified">candidate hub, not equipped</EvidenceTag>
        <EvidenceTag tag="modelled">modelled 500 m reach</EvidenceTag>
        <EvidenceTag tag="pending">site audit required</EvidenceTag>
      </div>

      <div className="breakdown">
        {hub.breakdown.map((r, i) => (
          <div className="bd-row" key={r.label}>
            <div className="bd-top">
              <span className="bd-label">{r.label}</span>
              <span className="bd-weight tnum">{r.weightPct}%</span>
            </div>
            <div className="bd-bar">
              <m.div
                className="bd-fill"
                initial={{ scaleX: reduced ? r.fraction : 0 }}
                animate={{ scaleX: r.fraction }}
                transition={{ duration: reduced ? 0 : DUR.panel, ease: EASE_CALM, delay: reduced ? 0 : 0.12 + i * 0.05 }}
              />
            </div>
            <div className="bd-bottom">
              <span className="bd-bucket">{r.bucket}</span>
              <EvidenceTag tag={r.status} />
            </div>
          </div>
        ))}
      </div>

      <div className="facts">
        <div className="fact">
          <span className="fact-k">Reachable population</span>
          <span className="fact-v">
            <span className="tnum">{hub.reachablePopulation === "pending" ? "catchment pending" : hub.reachablePopulation}</span>
            <EvidenceTag tag={hub.reachablePopulation === "pending" ? "pending" : "modelled"} />
          </span>
        </div>
        <div className="fact">
          <span className="fact-k">Roof / upgrade class</span>
          <span className="fact-v">
            <span>{hub.roofClass}</span>
            <EvidenceTag tag="modelled" />
          </span>
        </div>
        <div className="fact">
          <span className="fact-k">Adaptive capacity</span>
          <span className="fact-v">
            <span className="tnum">quintile {hub.adaptiveCapacity}</span>
            <EvidenceTag tag="verified" />
          </span>
        </div>
        <div className="fact">
          <span className="fact-k">Heat vulnerability</span>
          <span className="fact-v">
            <span className="tnum">HVI {hub.hvi} · {HVI_LABEL[hub.hvi]}</span>
            <EvidenceTag tag="verified" />
          </span>
        </div>
      </div>

      <p className="detail-why">{hub.notes}</p>
      <a className="detail-src" href={hub.sourceUrl} target="_blank" rel="noreferrer">
        official building page <ArrowUpRight size={13} />
      </a>
    </div>
  );
}
