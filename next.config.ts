import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: "export",
    distDir: "build",
    basePath: "/website",
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
