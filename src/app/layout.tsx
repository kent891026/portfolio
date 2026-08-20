
// src/app/layout.tsx
import type { Metadata } from "next";
// 引入思源宋體 (Noto Serif TC)
import { Inter, Noto_Serif_TC } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// ⭐ 設定思源宋體，並宣告為 CSS 變數 '--font-noto-serif-tc'
const notoSerifTC = Noto_Serif_TC({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-noto-serif-tc",
});

export const metadata: Metadata = {
  title: "陳致穎 Kent Chen | Multidisciplinary Developer",
  description: "Portfolio exploring the intersection of algorithms, spatial design, and digital fabrication.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // ⭐ 在 html 標籤上加入這個字體變數
    <html lang="zh-TW" className={`${notoSerifTC.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}