import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Dev-only: the verification browser runs in Docker and reaches the host via
  // host.docker.internal. Next 16 blocks cross-origin dev resources by default.
  allowedDevOrigins: ["host.docker.internal"],
};

export default nextConfig;
