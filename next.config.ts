import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 配置静态导出以适配 Cloudflare Pages
  output: 'export',
  // 禁用图片优化（静态导出不支持）
  images: {
    unoptimized: true,
  },
  // 可选：设置基础路径（如果使用自定义域名）
  // basePath: '',
  // 可选：设置资源路径前缀
  // assetPrefix: '',
};

export default nextConfig;
