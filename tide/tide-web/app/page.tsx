import type { Metadata } from "next";
import MapScreen from "./map/map-screen";

export const metadata: Metadata = {
  title: "Tide — Peel energy-burden map",
  description:
    "Where Ontario's overnight-rate gap hurts renters most across Peel — and which fix each neighbourhood actually needs.",
};

// Map-led: the landing page is the energy-burden map. The device demo lives at /device.
export default function Home() {
  return <MapScreen />;
}
