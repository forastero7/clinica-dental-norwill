import type { NextConfig } from "next";

// En GitHub Pages el sitio vive en /<nombre-del-repo>. El workflow define PAGES_BASE_PATH;
// en local queda vacío y el sitio se sirve en la raíz.
const basePath = process.env.PAGES_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
