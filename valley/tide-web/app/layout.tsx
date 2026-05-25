import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Valley — the Discount Lockout map",
  description:
    "Ontario charges 3.9¢/kWh overnight and 39.1¢ at dinnertime. Valley shows who can reach the discount, then automates the shift for renters it can help.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
