import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true, // 👈 disables TS errors during build
  },
  eslint: {
    ignoreDuringBuilds: true, // 👈 disables ESLint during build
  },
};

export default nextConfig;
