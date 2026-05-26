import Image from "next/image";

import { Section } from "@/components/Section";
import { PHOTO_ASSETS } from "@/lib/content";
import { ArrowUpRight } from "@/components/icons";

export function PhotoSection() {
  return (
    <Section
      eyebrow="Malton field notes"
      title="Real places, not stock resilience imagery."
      lead="The photographs are local or archival Commons files. They are here to ground the page in Malton and Peel, not to imply any building is already equipped."
    >
      <div className="photo-grid">
        {PHOTO_ASSETS.map((photo) => (
          <figure className="photo-card" key={photo.src}>
            <Image
              src={photo.src}
              width={photo.width}
              height={photo.height}
              alt={photo.alt}
              sizes="(max-width: 980px) 100vw, 33vw"
            />
            <figcaption>
              <strong>{photo.caption}</strong>
              <span>
                {photo.credit}; {photo.license}.{" "}
                <a href={photo.source.url} target="_blank" rel="noreferrer">
                  {photo.source.name} <ArrowUpRight size={12} />
                </a>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
