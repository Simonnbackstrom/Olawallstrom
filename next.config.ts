import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  experimental: {
    agentUpgrade: "security",
  },
  images: {
    qualities: [75, 90],
    formats: ["image/avif", "image/webp"],
  },
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async redirects() {
    return [
      {
        source: "/nyhetsbrev",
        destination: "/inspiration",
        permanent: true,
      },
      {
        source: "/boardroom",
        destination: "/agarklivet",
        permanent: true,
      },
      {
        source: "/metod",
        destination: "/vip-coaching",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
