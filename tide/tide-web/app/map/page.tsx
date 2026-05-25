import type { Metadata } from "next";
import MapScreen from "./map-screen";

export const metadata: Metadata = {
  title: "Tide — Peel energy-burden map",
  description:
    "Where Ontario's overnight-rate gap hurts renters most across Peel — and which fix each neighbourhood actually needs.",
};

export default function MapPage() {
  return <MapScreen />;
}
