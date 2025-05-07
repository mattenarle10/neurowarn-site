import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ['@swc/css', 'lightningcss', 'critters'],
  experimental: {
    optimizeCss: true
  }
};

export default nextConfig;
