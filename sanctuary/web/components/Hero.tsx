import Image from "next/image";

import { EMBODIED, MALTON, ARCGIS_WEB_MAP, LOCAL_PLACE_FACTS, PHOTO_ASSETS } from "@/lib/content";
import { EvidenceTag } from "@/components/EvidenceTag";
import { ArrowUpRight } from "@/components/icons";

// Hero: a giant Fraunces "5" and the verb "harden", led by the proper noun and
// a real, sourced heat number. The "5" stays inside the heading text so screen
// readers read the full sentence; its heat-shimmer is decorative CSS only. The
// evidence ledger + the real Malton photo make the first screen read as a Peel
// civic artifact, not a generic landing page — every fact carries its honesty tag.
export function Hero() {
  const { pearsonHeat, heatDays } = EMBODIED;
  const heroPhoto = PHOTO_ASSETS[0];

  return (
    <header className="hero">
      <div className="hero-copy">
        <p className="eyebrow">Project Sanctuary · Seneca Energy Hackathon 2026</p>

        <h1 className="hero-head">
          Before the next heat wave,{" "}
          <span className="hero-five" data-shimmer>
            5
          </span>{" "}
          buildings Peel should <em className="hero-verb">harden</em> first.
        </h1>

        <p className="hero-lead">
          Pearson hit <span className="hero-num tnum">{pearsonHeat.value}</span> on {pearsonHeat.when}, about 5 km from{" "}
          <strong>{MALTON.name}</strong>, the building Sanctuary ranks first.{" "}
          <a className="hero-src" href={pearsonHeat.source.url} target="_blank" rel="noreferrer">
            {pearsonHeat.source.name} <ArrowUpRight size={12} />
          </a>
        </p>

        <dl className="hero-ledger" aria-label="Malton evidence strip">
          {LOCAL_PLACE_FACTS.map((fact) => (
            <div key={fact.label}>
              <dt>{fact.label}</dt>
              <dd>
                <span>{fact.value}</span>
                <EvidenceTag tag={fact.status} />
              </dd>
            </div>
          ))}
        </dl>

        <p className="hero-sub">
          Extreme-heat days in the Toronto area are climbing from about{" "}
          <span className="tnum">{heatDays.past}</span> a year in the 1950s to{" "}
          <span className="tnum">{heatDays.now}</span> today, and a projected{" "}
          <span className="tnum">{heatDays.future}</span> by the 2060s.
        </p>

        <div className="hero-actions">
          <a href="#decision" className="cta">
            See the decision
          </a>
          <a href={ARCGIS_WEB_MAP} target="_blank" rel="noreferrer" className="hero-link">
            Open the ArcGIS map <ArrowUpRight size={13} />
          </a>
        </div>
      </div>

      <figure className="hero-figure">
        <Image
          src={heroPhoto.src}
          width={heroPhoto.width}
          height={heroPhoto.height}
          alt={heroPhoto.alt}
          sizes="(max-width: 980px) 100vw, 42vw"
          priority
        />
        <figcaption className="source-strip">
          <strong>{heroPhoto.caption}</strong>
          <span>
            {heroPhoto.credit}; {heroPhoto.license}.{" "}
            <a href={heroPhoto.source.url} target="_blank" rel="noreferrer">
              {heroPhoto.source.name} <ArrowUpRight size={12} />
            </a>
          </span>
        </figcaption>
      </figure>
    </header>
  );
}
