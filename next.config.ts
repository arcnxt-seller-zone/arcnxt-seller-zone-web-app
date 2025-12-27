import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // required for GitHub Pages / static hosting
  images: {
    unoptimized: true, // required for next/image in static export
  },
};

export default nextConfig;
