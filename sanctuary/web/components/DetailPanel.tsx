"use client";

import type { Hub } from "@/lib/hubs";
import { HVI_LABEL } from "@/lib/hubs";
import { m } from "@/lib/motion";
import { EvidenceTag } from "@/components/EvidenceTag";
import { CountUp } from "@/components/CountUp";
import { ArrowUpRight } from "@/components/icons";
import type { PlanningChecklist } from "@/lib/planning-assistant";
import { PLANNING_ASSISTANT_DISCLAIMER } from "@/lib/planning-assistant";

// The decision panel. Remounted by key={hub.rank} in the parent, so the score
// count-up and bar fills replay on each new selection. All motion is guarded:
// when `reduced`, bars render at final scale and the number shows instantly.
export function DetailPanel({
  hub,
  reduced,
  planningChecklist,
  planningStatus,
  onRequestChecklist,
}: {
  hub: Hub;
  reduced: boolean;
  planningChecklist?: PlanningChecklist;
  planningStatus: "idle" | "loading" | "ready" | "error";
  onRequestChecklist: () => void;
}) {
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
        {hub.breakdown.map((r) => (
          <div className="bd-row" key={r.label}>
            <div className="bd-top">
              <span className="bd-label">{r.label}</span>
              <span className="bd-weight tnum">{r.weightPct}%</span>
            </div>
            <div className="bd-bar">
              <m.div className="bd-fill" initial={false} animate={{ scaleX: r.fraction }} style={{ transformOrigin: "left center" }} />
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
      <div style={{ marginTop: 14, paddingTop: 14, borderTop: "1px solid var(--hairline)" }}>
        <button
          type="button"
          onClick={onRequestChecklist}
          disabled={planningStatus === "loading" || Boolean(planningChecklist)}
          style={{
            width: "100%",
            border: "1px solid var(--hairline-strong)",
            borderRadius: "var(--r-2)",
            background: "var(--surface-sunken)",
            color: "var(--text)",
            cursor: planningStatus === "loading" ? "wait" : planningChecklist ? "default" : "pointer",
            font: "inherit",
            fontSize: "0.86rem",
            fontWeight: 600,
            padding: "10px 12px",
            textAlign: "left",
          }}
        >
          {planningStatus === "loading" ? "Loading reviewed checklist..." : planningChecklist ? "Checklist loaded from static review" : "Show Gemini planning checklist"}
        </button>
        {planningChecklist && <PlanningChecklistCard checklist={planningChecklist} fallback={planningStatus === "error"} />}
      </div>
      <a className="detail-src" href={hub.sourceUrl} target="_blank" rel="noreferrer">
        official building page <ArrowUpRight size={13} />
      </a>
    </div>
  );
}

function PlanningChecklistCard({ checklist, fallback }: { checklist: PlanningChecklist; fallback: boolean }) {
  return (
    <section
      aria-label="Planning assistant checklist"
      style={{
        marginTop: 12,
        border: "1px solid var(--hairline)",
        borderRadius: "var(--r-2)",
        background: "color-mix(in oklab, var(--surface-sunken) 64%, transparent)",
        padding: 14,
      }}
    >
      <div className="detail-rank">Planning assistant</div>
      <h4 style={{ margin: "6px 0 8px", fontSize: "1rem", lineHeight: 1.25 }}>
        Site-audit checklist
      </h4>
      <div className="honesty-strip" style={{ marginTop: 0 }}>
        <EvidenceTag tag="modelled">{fallback ? "static fallback" : "Gemini-assisted"}</EvidenceTag>
        <EvidenceTag tag="pending">not engineering advice</EvidenceTag>
      </div>
      <p className="detail-why" style={{ fontStyle: "normal", marginTop: 10 }}>
        {checklist.summary}
      </p>
      <ol style={{ margin: "12px 0 0", paddingLeft: 20, color: "var(--text-muted)", fontSize: "0.84rem", lineHeight: 1.5 }}>
        {checklist.recommended_checks.map((check) => (
          <li key={check} style={{ marginTop: 7 }}>
            {check}
          </li>
        ))}
      </ol>
      <div className="facts" style={{ marginTop: 12 }}>
        <div className="fact">
          <span className="fact-k">Unknowns</span>
          <span className="fact-v">{checklist.unknowns.slice(0, 3).join(", ")}</span>
        </div>
        <div className="fact">
          <span className="fact-k">Source basis</span>
          <span className="fact-v">{checklist.source_basis.join(", ")}</span>
        </div>
      </div>
      <p className="ranked-note" style={{ margin: "12px 0 0" }}>
        {PLANNING_ASSISTANT_DISCLAIMER}
      </p>
    </section>
  );
}
