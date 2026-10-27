/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_ACTIONS === "true";
const repoName = "portfolio";

const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // GitHub project sites are served from /<repo>/, local dev stays at /
  basePath: isGithubPages ? `/${repoName}` : "",
  assetPrefix: isGithubPages ? `/${repoName}/` : undefined,
  // Remove trailing slash for cleaner URLs
  trailingSlash: false,
};

export default nextConfig;
