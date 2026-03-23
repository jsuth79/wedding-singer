import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/funerals',
        destination: '/events',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
