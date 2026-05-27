import { Section } from "@/components/Section";
import { COUNTERFACTUAL, COUNTERFACTUAL_INTRO } from "@/lib/content";
import { ArrowUpRight } from "@/components/icons";
import { EvidenceTag } from "@/components/EvidenceTag";

// Counterfactual / precedent dossier. Editorial vertical stack (NOT a card grid)
// of real, sourced events with an explicit "planning counterfactual, not
// measured impact" honesty banner. Each entry: index + serif title + mono
// when/where strip + two-lede prose (What happened. / If Sanctuary had existed.)
// + per-entry honesty note + source link. Lives on /method between honesty +
// evidence: the bridge between "how we're honest" and "what others did."
export function CounterfactualSection() {
  return (
    <Section
      eyebrow="If Sanctuary had existed"
      title="Two real events. One pre-verify list."
      lead="A heat warning at Pearson last June, five kilometres from Malton. An Ottawa derecho three years earlier. Both are real, both are sourced. What Sanctuary would have changed is the planning artifact — a ranked five-building list that already existed before the morning of the event — not the event response itself."
    >
      <p className="counterfactual-disclaimer">
        <EvidenceTag tag="modelled">Planning counterfactual — not measured impact</EvidenceTag>
        <span>{COUNTERFACTUAL_INTRO.body}</span>
      </p>

      <ol className="counterfactual-list">
        {COUNTERFACTUAL.map((entry) => (
          <li className="counterfactual-entry" key={entry.index}>
            <header className="counterfactual-head">
              <span className="counterfactual-index tnum">Dossier · {entry.index}</span>
              <h3 className="counterfactual-title">{entry.title}</h3>
              <dl className="counterfactual-meta">
                <div>
                  <dt>When</dt>
                  <dd className="tnum">{entry.when}</dd>
                </div>
                <div>
                  <dt>Where</dt>
                  <dd>{entry.where}</dd>
                </div>
              </dl>
            </header>

            <div className="counterfactual-body">
              <p>
                <span className="counterfactual-lede">What happened.</span>{" "}
                {entry.whatHappened}
              </p>
              <p>
                <span className="counterfactual-lede counterfactual-lede-signal">
                  If Sanctuary had existed.
                </span>{" "}
                {entry.sanctuaryFrame}
              </p>
            </div>

            <footer className="counterfactual-foot">
              <span className="counterfactual-honesty tnum">{entry.honestyNote}</span>
              <a
                className="card-src counterfactual-src"
                href={entry.source.url}
                target="_blank"
                rel="noreferrer"
              >
                {entry.source.name} <ArrowUpRight size={12} />
              </a>
            </footer>
          </li>
        ))}
      </ol>
    </Section>
  );
}
