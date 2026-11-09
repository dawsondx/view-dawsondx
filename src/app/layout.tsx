import type { Metadata } from "next";
import "./globals.css";
import { CloudflareBeacon } from "@/components/common/CloudflareBeacon";
import { CustomCursor } from "@/components/common/CustomCursor";
import { SiteMotion } from "@/components/common/SiteMotion";

const siteUrl = "https://view.dawsondx.top";
const title = "Dawson — PMP 运维项目经理 ｜ AI 工作流架构师 ｜ 全栈独立开发者";
const description =
  "Dawson：一线实体运维项目经理、AI 产品与工作流架构师、全栈独立开发者。提供企业级 AI Agent 与工作流定制、年度 AI 实战陪伴群、开源工具与 Office 设计交付。";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: siteUrl,
    siteName: "Dawson",
    title,
    description,
    images: [
      {
        url: "/seo/og.png",
        width: 1200,
        height: 630,
        alt: "Dawson — PMP 运维项目经理 / AI 工作流架构师 / 全栈独立开发者",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/seo/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>
        {children}
        <SiteMotion />
        <CustomCursor />
        <CloudflareBeacon />
      </body>
    </html>
  );
}
