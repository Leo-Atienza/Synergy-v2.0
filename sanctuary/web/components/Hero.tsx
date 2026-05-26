import { EMBODIED, MALTON, ARCGIS_WEB_MAP } from "@/lib/content";
import { ArrowUpRight } from "@/components/icons";

// Hero: a giant Fraunces "5" and the verb "harden", led by the proper noun and
// a real, sourced heat number. The "5" stays inside the heading text so screen
// readers read the full sentence; its heat-shimmer is decorative CSS only.
export function Hero() {
  const { pearsonHeat, heatDays } = EMBODIED;
  return (
    <header className="hero">
      <p className="eyebrow">Project Sanctuary · Seneca Energy Hackathon 2026</p>

      <h1 className="hero-head">
        Before the next heat wave,{" "}
        <span className="hero-five" data-shimmer>
          5
        </span>{" "}
        buildings Peel should <em className="hero-verb">harden</em> first.
      </h1>

      <p className="hero-lead">
        Pearson hit <span className="hero-num tnum">{pearsonHeat.value}</span> on {pearsonHeat.when} — about 5 km from{" "}
        <strong>{MALTON.name}</strong>, the building Sanctuary ranks first.{" "}
        <a className="hero-src" href={pearsonHeat.source.url} target="_blank" rel="noreferrer">
          {pearsonHeat.source.name} <ArrowUpRight size={12} />
        </a>
      </p>

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
    </header>
  );
}
