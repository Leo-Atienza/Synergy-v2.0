import { Section } from "@/components/Section";
import { FUTURE_PHASES, SCALE_NOTE } from "@/lib/content";
import { ArrowUpRight } from "@/components/icons";

export function FutureSection() {
  return (
    <Section
      eyebrow="Roadmap, not built"
      title="After the demo, the honest version grows in stages."
      lead="The current prototype ranks candidate hubs. Walksheds, site audits, public navigation, and utility-scale rollout only come after verification."
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

      <p className="scale-note">
        {SCALE_NOTE.body}{" "}
        <a className="card-src" href={SCALE_NOTE.source.url} target="_blank" rel="noreferrer">
          {SCALE_NOTE.source.name} <ArrowUpRight size={12} />
        </a>
      </p>
    </Section>
  );
}
