import type { Metadata } from "next";
import "./globals.css";
import { CustomCursor } from "@/components/common/CustomCursor";
import { SiteMotion } from "@/components/common/SiteMotion";

const siteUrl = "https://view.dawsondx.top";
const title = "Dawson — AI 工作流架构师 ｜ 全栈独立开发者";
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
        alt: "Dawson — AI 工作流架构师 / 全栈独立开发者",
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
        {/*
          Cloudflare Web Analytics。以下为 Cloudflare 控制台「Manually add a site」
          给出的原始片段，逐字保留：type="module" 在 HTML 解析阶段加载，不依赖 hydration。
          静态导出会把它原样写进 out/index.html 的 body 末尾。
        */}
        <div
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: `<!-- Cloudflare Web Analytics --><script type='module' src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "f6194082d20c498298da7b02b9dfff64"}'></script><!-- End Cloudflare Web Analytics -->`,
          }}
        />
      </body>
    </html>
  );
}
