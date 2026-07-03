import type { NextConfig } from "next";

// Static export served from GitHub Pages at https://<user>.github.io/Portfolio/
const nextConfig: NextConfig = {
  output: "export",
  basePath: process.env.NODE_ENV === "production" ? "/Portfolio" : "",
  images: { unoptimized: true },
};

export default nextConfig;
