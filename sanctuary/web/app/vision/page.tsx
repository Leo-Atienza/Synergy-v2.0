import type { Metadata } from "next";
import Link from "next/link";

import { FutureSection } from "@/components/sections/FutureSection";
import { Section } from "@/components/Section";
import { STAKEHOLDERS } from "@/lib/content";
import { ArrowUpRight } from "@/components/icons";

export const metadata: Metadata = {
  title: "Vision · Sanctuary",
  description:
    "The Sanctuary upgrade path: multi-hazard scoring across heat, flood, and winter energy burden, verified site audits, resident guidance after validation, and regional scaling across Alectra territory.",
};

export default function VisionPage() {
  return (
    <main className="page content-page">
      <section className="content-hero" aria-labelledby="vision-title">
        <p className="eyebrow">Vision</p>
        <h1 id="vision-title">The future version only works if the prototype stays honest.</h1>
        <p>
          The current build ranks candidate hubs across three honest hazard lenses: heat, flood, and winter energy
          burden. This page shows the practical upgrades next: stronger access modelling, real site audits, a resident
          view only after verification, and repeatable scoring across Alectra territory.
        </p>
      </section>

      <Section
        eyebrow="Who uses this"
        title="Three desks open this on a Monday morning."
        lead="Sanctuary is built for the people who already decide which Peel buildings to prepare, open, and harden, not a new audience that has to be convinced the problem exists."
      >
        <div className="card-grid card-grid-3">
          {STAKEHOLDERS.map((s) => (
            <article className="card" key={s.name}>
              <h3>{s.name}</h3>
              <p className="detail-meta">{s.org}</p>
              <p>{s.role}</p>
              <a className="card-src" href={s.source.url} target="_blank" rel="noreferrer">
                {s.source.name} <ArrowUpRight size={12} />
              </a>
            </article>
          ))}
        </div>
      </Section>

      <FutureSection />
      <p className="decision-more">
        <Link href="/funding" className="inline-link">
          How the hardening gets funded <ArrowUpRight size={14} />
        </Link>
      </p>
    </main>
  );
}
