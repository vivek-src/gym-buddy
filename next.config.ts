import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "dist",
  basePath: isGithubPages ? "/gym-buddy" : "",
  assetPrefix: isGithubPages ? "/gym-buddy/" : "",
  trailingSlash: true,
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
