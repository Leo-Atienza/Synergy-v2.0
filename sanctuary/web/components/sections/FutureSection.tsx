import { Section } from "@/components/Section";
import { FUTURE_PHASES, FUTURE_UPGRADE_TRACKS, SCALE_NOTE } from "@/lib/content";
import { ArrowUpRight } from "@/components/icons";
import { EvidenceTag } from "@/components/EvidenceTag";

export function FutureSection() {
  return (
    <Section
      eyebrow="Roadmap, not built"
      title="After the demo, this becomes a deployable municipal playbook."
      lead="The current prototype ranks candidate hubs. The next phases focus on decision quality, verified readiness, and a scale path sponsors and municipal partners can fund with confidence."
    >
      <ol className="phase-track">
        {FUTURE_PHASES.map((p) => (
          <li className="card phase-card" key={p.num}>
            <span className="phase-num tnum">{p.num}</span>
            <h3>{p.label}</h3>
            <p>{p.body}</p>
          </li>
        ))}
      </ol>

      <div className="future-upgrade-intro">
        <p className="eyebrow">What improves next</p>
        <p>
          These are the highest-value upgrades after judging: better hazard coverage, stronger verification, and a
          repeatable model that can expand across municipalities without overclaiming readiness.
        </p>
      </div>

      <div className="card-grid card-grid-2 future-upgrade-grid">
        {FUTURE_UPGRADE_TRACKS.map((track) => (
          <article className="card" key={track.label}>
            <div className="future-upgrade-head">
              <h3>{track.label}</h3>
              <EvidenceTag tag={track.status} />
            </div>
            <p>{track.body}</p>
          </article>
        ))}
      </div>

      <p className="scale-note">
        {SCALE_NOTE.body}{" "}
        <a className="card-src" href={SCALE_NOTE.source.url} target="_blank" rel="noreferrer">
          {SCALE_NOTE.source.name} <ArrowUpRight size={12} />
        </a>
      </p>
    </Section>
  );
}
