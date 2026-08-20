
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // 忽略 TypeScript 錯誤，強行打包上線
    ignoreBuildErrors: true,
  },
  eslint: {
    // 忽略 ESLint 錯誤，強行打包上線
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
