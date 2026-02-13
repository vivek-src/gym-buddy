import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "dist",
  basePath: isProd ? "/gym-buddy" : "",
  assetPrefix: isProd ? "/gym-buddy/" : "",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "gymbuddy.cdn.viveksahu.dev",
      },
    ],
  },
};

export default nextConfig;
