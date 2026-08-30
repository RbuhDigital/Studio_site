import type { NextConfig } from "next";

const isPagesBuild = process.env.PAGES_BUILD === "true";
const pagesBasePath = process.env.PAGES_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: isPagesBuild ? "export" : undefined,
  basePath: pagesBasePath || undefined,
  assetPrefix: pagesBasePath || undefined,
  trailingSlash: isPagesBuild,
  env: {
    NEXT_PUBLIC_BASE_PATH: pagesBasePath,
  },
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
