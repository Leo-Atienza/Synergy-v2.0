import { Section } from "@/components/Section";
import { SOURCE_LINKS, TECH_STACK } from "@/lib/content";
import { ArrowUpRight } from "@/components/icons";

export function SourcesSection() {
  return (
    <Section eyebrow="Sources and stack" title="Public data, simple code, no backend risk.">
      <div className="source-stack-grid">
        <div className="source-list">
          <h3>Source links</h3>
          {SOURCE_LINKS.map((s) => (
            <a key={s.label} href={s.url} target="_blank" rel="noreferrer">
              {s.label} <ArrowUpRight size={12} />
            </a>
          ))}
        </div>
        <div className="stack-list">
          <h3>Technical stack</h3>
          {TECH_STACK.map((t) => (
            <div key={t.label}>
              <strong>{t.label}</strong>
              <p>{t.body}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
