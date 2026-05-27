import type { Metadata } from "next";

import { ArcgisSection } from "@/components/sections/ArcgisSection";
import { DataPipelineSection } from "@/components/sections/DataPipelineSection";
import { PhotoSection } from "@/components/sections/PhotoSection";
import { QaSection } from "@/components/sections/QaSection";
import { SourcesSection } from "@/components/sections/SourcesSection";

export const metadata: Metadata = {
  title: "Sources · Sanctuary",
  description: "Sanctuary data receipts, candidate-source links, photo attribution, and judge Q&A.",
};

export default function SourcesPage() {
  return (
    <main className="page content-page">
      <section className="content-hero" aria-labelledby="sources-title">
        <p className="eyebrow">Sources</p>
        <h1 id="sources-title">No hidden numbers, no stock imagery, no unlabelled estimates.</h1>
        <p>
          This page is the anti-slop appendix: source links for every data layer, candidate-building receipts, Commons
          photo attribution, and short answers to likely judge questions.
        </p>
      </section>
      <DataPipelineSection />
      <SourcesSection />
      <ArcgisSection />
      <PhotoSection />
      <QaSection />
    </main>
  );
}
