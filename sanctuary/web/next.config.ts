import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Dev-only: the verification browser runs in Docker and reaches the host via
  // host.docker.internal. Next 16 blocks cross-origin dev resources by default.
  allowedDevOrigins: ["host.docker.internal"],
  // Inline the (~19KB) CSS into the HTML so first paint needs no extra round-trip —
  // meaningfully faster FCP/LCP under constrained networks. No design change.
  experimental: { inlineCss: true },
};

export default nextConfig;
