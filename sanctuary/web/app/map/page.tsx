import type { Metadata } from "next";
import { loadMapData } from "@/lib/load-map-data";
import { MapExplorer } from "@/components/MapExplorer";

export const metadata: Metadata = {
  title: "Map — Sanctuary",
  description:
    "Explore Peel's Heat Vulnerability Index by census tract and the ten candidate resilience hubs ranked to harden first. Pan, zoom, click a tract for its real sub-scores, and play the decision from heat risk to Malton.",
};

// Full-bleed, always-interactive Peel HVI map. The build-time projection runs in
// this RSC shell (loadMapData → d3-geo, server only); the client island receives
// only serialized path strings + projected points.
export default function MapPage() {
  const { mapData, hubs } = loadMapData();
  return (
    <main className="map-page">
      <MapExplorer mapData={mapData} hubs={hubs} />
    </main>
  );
}
