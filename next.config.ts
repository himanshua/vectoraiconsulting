import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async rewrites() {
    return [
      {
        source: '/api/shared-visitors',
        destination: 'https://aheadterra.com/api/visitors',
      },
    ];
  },
};

export default nextConfig;
