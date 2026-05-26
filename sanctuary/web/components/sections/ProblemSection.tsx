import { Section } from "@/components/Section";
import { PROBLEM_POINTS } from "@/lib/content";

export function ProblemSection() {
  return (
    <Section
      eyebrow="Why it matters"
      title="Heat risk is mapped. The next safe building is not."
      lead="Heat waves and outages hit unevenly. The people most at risk may not be near an official cooling space, may not know where to go, or may not trust a distant facility during an emergency."
    >
      <div className="card-grid card-grid-3">
        {PROBLEM_POINTS.map((p) => (
          <article className="card" key={p.label}>
            <h3>{p.label}</h3>
            <p>{p.body}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
