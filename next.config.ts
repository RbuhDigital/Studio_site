import type { NextConfig } from "next";

const pagesBasePath = process.env.PAGES_BASE_PATH ?? "";
const isPagesBuild = Boolean(pagesBasePath);

const nextConfig: NextConfig = {
  output: isPagesBuild ? "export" : undefined,
  basePath: pagesBasePath,
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
