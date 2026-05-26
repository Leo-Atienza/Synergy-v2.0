import type { ReactNode } from "react";

// One generic editorial section: eyebrow + title + optional lead, then content.
// Zero JS. The reveal-on-scroll is CSS-only progressive enhancement (globals.css).
export function Section({
  eyebrow,
  title,
  lead,
  id,
  className,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  id?: string;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <section className={`section reveal${className ? ` ${className}` : ""}`} id={id}>
      <div className="section-head">
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        {lead ? <p className="section-lead">{lead}</p> : null}
      </div>
      {children}
    </section>
  );
}
