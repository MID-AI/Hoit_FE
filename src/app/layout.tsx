import type { Metadata } from "next";

import "./globals.css";
import Provider from "./provider";

export const metadata: Metadata = {
  title: "AI App",
  description: "AI App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
