import type { NextConfig } from "next";

const isGitHubPagesBuild = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  ...(isGitHubPagesBuild ? { basePath: "/kate" } : {}),
  poweredByHeader: false,
  agentRules: false,
};

export default nextConfig;
