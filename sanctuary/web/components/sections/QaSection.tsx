import { Section } from "@/components/Section";
import { QA } from "@/lib/content";

export function QaSection() {
  return (
    <Section eyebrow="Common questions" title="Short answers to the obvious hard questions.">
      <div className="qa-grid">
        {QA.map((item) => (
          <article className="card qa-card" key={item.q}>
            <h3>{item.q}</h3>
            <p>{item.a}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
