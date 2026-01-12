import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "我的个人网站",
  description: "个人网站 - 使用 Next.js 和 Cloudflare Pages 构建",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
