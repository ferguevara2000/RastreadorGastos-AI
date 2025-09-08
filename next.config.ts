import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["img.clerk.com"], // 👈 agrega este dominio
  },
};

export default nextConfig;
