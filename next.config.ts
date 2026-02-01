import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactCompiler: true,
  output: 'standalone',
  images: {
    remotePatterns: [{ hostname: 'cdn.dummyjson.com' }],
  },
};

export default nextConfig;
