import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hoit",
  description:
    "hoit과 함께 ai이미지를 생성해봐요. 쉽게 내가 원하는대로 디자인할 수 있어요.",
};

// const SpoqaHanSansNeo = localFont({
//   src: "",
//   display: "swap",
//   weight: "45 920",
//   variable: "--font-SpoqaHanSansNeo",
// });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
