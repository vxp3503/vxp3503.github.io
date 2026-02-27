import type { NextConfig } from "next";

const repo = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const isUserOrOrgSite = repo.endsWith(".github.io");
const shouldUseBasePath = Boolean(process.env.GITHUB_ACTIONS) && !isUserOrOrgSite;
const basePath = shouldUseBasePath ? `/${repo}` : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
};

export default nextConfig;
