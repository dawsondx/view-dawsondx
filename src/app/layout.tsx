import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://view.dawsondx.top";
const title = "Dawson — Office 培训讲师 ｜ PPT 设计师 ｜ 神器收藏家";
const description =
  "Dawson：秋叶 Office 核心助教、《秒懂 Word》著书合作者。提供 Office 疑难解答、PPT 定制设计、海报设计与效率神器分享服务。";

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
        alt: "Dawson — Office 培训讲师 / PPT 设计师 / 神器收藏家",
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
      <body>{children}</body>
    </html>
  );
}
