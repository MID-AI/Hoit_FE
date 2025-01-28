import type { Metadata } from "next";

import "./globals.css";
import Provider from "./provider";

import { Sidebar } from "@/components/sidebar/sidebar";

export const metadata: Metadata = {
  title: "AI App",
  description: "AI App",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <Provider>
          <Sidebar />
          <main>{children}</main>
        </Provider>
      </body>
    </html>
  );
}
