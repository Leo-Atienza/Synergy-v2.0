import { Section } from "@/components/Section";
import { FUNDING_PROGRAMS, FUNDING_NOTE, HOW_IT_WORKS, OPERATING_MODEL } from "@/lib/content";
import { EvidenceTag } from "@/components/EvidenceTag";
import { ArrowUpRight } from "@/components/icons";

// The Funding page body. Two sections: the real capital stack a public or
// community owner can claim (every rate verified and sourced, no modelled
// dollar totals per the data-truth rule), then the future operating model.
// Reuses the card + source idiom of EvidenceSection; the honesty caveat names
// the two programs that are real but not open doors right now.
export function FundingSection() {
  return (
    <>
      <Section
        eyebrow="What a hub can claim"
        title="How the hardening gets paid for."
        lead="Hardening a trusted building with rooftop solar and battery backup is a capital project. For a public or community owner the realistic stack is a federal refundable tax credit, a municipal retrofit fund, and Ontario's efficiency program. The rates below are real and current. None of it is guaranteed money. Eligibility is the first step, and every project still needs a site audit."
      >
        <div className="card-grid card-grid-2">
          {FUNDING_PROGRAMS.map((p) => (
            <article className="card fund-card" key={p.program}>
              <span className="fund-rate tnum">{p.rate}</span>
              <span className="fund-meta">{p.status}</span>
              <h3>{p.program}</h3>
              <p>{p.body}</p>
              <div className="fund-card-foot">
                <EvidenceTag tag={p.tag} />
                <a className="card-src" href={p.source.url} target="_blank" rel="noreferrer">
                  {p.source.name} <ArrowUpRight size={12} />
                </a>
              </div>
            </article>
          ))}
        </div>

        <p className="scale-note">{FUNDING_NOTE.body}</p>
        <p className="fund-note-srcs">
          {FUNDING_NOTE.sources.map((s) => (
            <a className="card-src" href={s.url} target="_blank" rel="noreferrer" key={s.url}>
              {s.name} <ArrowUpRight size={12} />
            </a>
          ))}
        </p>
      </Section>

      <Section eyebrow="How it works" title="From candidate to hardened hub.">
        <ol className="howto">
          {HOW_IT_WORKS.map((s) => (
            <li className="howto-step" key={s.num}>
              <span className="howto-num tnum" aria-hidden="true">
                {s.num}
              </span>
              <div className="howto-text">
                <h3>{s.label}</h3>
                <p>{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <Section
        eyebrow="Operating model"
        title="How a hardened hub pays for itself."
        lead="This is the future operating model, labelled as such. The prototype ranks candidate hubs. It does not run a microgrid, and no named building generates revenue or islands from the grid today."
      >
        <div className="card-grid card-grid-3">
          {OPERATING_MODEL.map((m) => (
            <article className="card" key={m.label}>
              <h3>{m.label}</h3>
              <p>{m.body}</p>
              {m.source ? (
                <a className="card-src" href={m.source.url} target="_blank" rel="noreferrer">
                  {m.source.name} <ArrowUpRight size={12} />
                </a>
              ) : null}
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
