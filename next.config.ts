import type { NextConfig } from "next";

// This will validate environment variables on build
import "@/lib/env";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/index",
        destination: "/",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
};

export default nextConfig;
