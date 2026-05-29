"use client";

import type { Hub } from "@/lib/hubs";
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

      {/* Mirror of the "Beyond the first-pass score" divider below: labels the
          five weighted factors as what the score IS, so the panel reads as two
          named groups (inside the score / beyond it) instead of bars floating
          under the honesty strip. */}
      <p className="facts-label breakdown-label">Inside the first-pass score</p>
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

      {/* Beyond the five weighted factors above: the hazards and readiness signals
          the first-pass score does NOT yet cover. Kept honest, not folded into the
          score. The duplicates of the breakdown rows (heat, population, roof) were
          removed so the panel reads as one story, not the same facts twice. */}
      <div className="facts">
        <p className="facts-label">Beyond the first-pass score</p>
        {hub.ctPopulation && (
          <div className="fact">
            <span className="fact-k">Census tract population</span>
            <span className="fact-v">
              <span className="tnum">{hub.ctPopulation}</span>
              <EvidenceTag tag="verified" />
            </span>
          </div>
        )}
        <div className="fact">
          <span className="fact-k">Flood</span>
          <span className="fact-v">
            <span>{hub.flood}</span>
            <EvidenceTag tag={hub.floodEvidence} />
          </span>
        </div>
        {hub.winterVuln >= 1 && (
          <div className="fact">
            <span className="fact-k">Winter / energy burden</span>
            <span className="fact-v">
              <span className="tnum">quintile {hub.winterVuln} of 5</span>
              <EvidenceTag tag="modelled" />
            </span>
          </div>
        )}
        <div className="fact">
          <span className="fact-k">Backup power</span>
          <span className="fact-v">
            <span>{hub.backupPower === "pending" ? "not confirmed" : hub.backupPower}</span>
            <EvidenceTag tag={hub.backupPower === "pending" ? "pending" : "verified"} />
          </span>
        </div>
      </div>

      {hub.yearRound && (
        <p className="detail-meta detail-yearround">
          Year-round resilience case: high on both heat (HVI {hub.hvi}) and winter energy burden (quintile {hub.winterVuln} of 5).
        </p>
      )}
      <p className="detail-why">{hub.notes}</p>
      <div className="planning-block">
        <button
          type="button"
          onClick={onRequestChecklist}
          disabled={planningStatus === "loading" || Boolean(planningChecklist)}
          className="planning-trigger"
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
    <section aria-label="Planning assistant checklist" className="planning-card">
      <div className="detail-rank">Planning assistant</div>
      <h4>Site-audit checklist</h4>
      <div className="honesty-strip planning-tags">
        <EvidenceTag tag="modelled">{fallback ? "static fallback" : "Gemini-assisted"}</EvidenceTag>
        <EvidenceTag tag="pending">not engineering advice</EvidenceTag>
      </div>
      <p className="planning-summary">{checklist.summary}</p>
      <ol className="planning-checks">
        {checklist.recommended_checks.map((check) => (
          <li key={check}>{check}</li>
        ))}
      </ol>
      <div className="facts planning-facts">
        <div className="fact">
          <span className="fact-k">Unknowns</span>
          <span className="fact-v">{checklist.unknowns.slice(0, 3).join(", ")}</span>
        </div>
        <div className="fact">
          <span className="fact-k">Source basis</span>
          <span className="fact-v">{checklist.source_basis.join(", ")}</span>
        </div>
      </div>
      <p className="ranked-note planning-disclaimer">{PLANNING_ASSISTANT_DISCLAIMER}</p>
    </section>
  );
}
