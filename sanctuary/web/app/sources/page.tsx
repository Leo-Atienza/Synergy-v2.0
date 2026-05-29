import type { Metadata } from "next";
import Link from "next/link";

import { ArcgisSection } from "@/components/sections/ArcgisSection";
import { DataPipelineSection } from "@/components/sections/DataPipelineSection";
import { PhotoSection } from "@/components/sections/PhotoSection";
import { QaSection } from "@/components/sections/QaSection";
import { SourcesSection } from "@/components/sections/SourcesSection";
import { ArrowUpRight } from "@/components/icons";

export const metadata: Metadata = {
  title: "Sources · Sanctuary",
  description: "Sanctuary data sources, candidate-source links, photo attribution, and answers to common questions.",
};

export default function SourcesPage() {
  return (
    <main className="page content-page">
      <section className="content-hero" aria-labelledby="sources-title">
        <p className="eyebrow">Sources</p>
        <h1 id="sources-title">No hidden numbers, no stock imagery, no unlabelled estimates.</h1>
        <p>
          Every data layer, candidate building, and photo is linked to its public source, with short, plain answers to
          the obvious hard questions.
        </p>
      </section>
      <DataPipelineSection />
      <SourcesSection />
      <ArcgisSection />
      <PhotoSection />
      <QaSection />
      <p className="decision-more">
        <Link href="/" className="inline-link">
          Back to the overview <ArrowUpRight size={14} />
        </Link>
      </p>
    </main>
  );
}
