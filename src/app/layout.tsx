import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "长三角汽车科创学院 YDI — 打造汽车产业科技创新策源地",
  description:
    "长三角汽车科创学院（YDI）以「打造汽车产业科技创新策源地」为使命，聚焦汽车科创人才培养与产业资源对接，落址合肥包河区中关村智汇园。",
  keywords:
    "长三角汽车科创学院,YDI,汽车科创,产业孵化,博奇数据,达尔文平台,合肥,包河区",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="h-full scroll-smooth">
      <body className="min-h-full bg-white text-[#1A1A2E]">{children}</body>
    </html>
  );
}
