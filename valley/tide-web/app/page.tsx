import type { Metadata } from "next";
import MapScreen from "./map/map-screen";

export const metadata: Metadata = {
  title: "Valley — the Discount Lockout map",
  description:
    "Where Ontario's overnight-rate discount reaches renters, where it locks them out, and which fix each Peel neighbourhood actually needs.",
};

// Map-led: the landing page is the energy-burden map. The device demo lives at /device.
export default function Home() {
  return <MapScreen />;
}
