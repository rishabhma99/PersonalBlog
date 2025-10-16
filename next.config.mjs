/** @type {import("next").NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS === "true";
const repository = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";

const assetPrefix = isGithubActions && repository ? `/${repository}` : "";

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  assetPrefix,
  basePath: assetPrefix,
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: assetPrefix
  }
};

export default nextConfig;
