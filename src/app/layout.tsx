import type { Metadata } from "next";
import "./globals.css";
import { Noto_Sans_KR } from "next/font/google";
import Provider from "./provider";
import { Sidebar } from "@/components/sidebar/sidebar";
import { MswComponent } from "@/mocks/msw.component";

export const metadata: Metadata = {
  title: "Hoit",
  description: "AI App",
};

const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

if (typeof window === "undefined") {
  const { server } = await import("@/mocks/server");
  server.listen();
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${notoSansKr.className} bg-[#F8F8F8]`}>
        <MswComponent />
        <Provider>
          <Sidebar />
          <main className="mx-auto mb-5 flex justify-center md:ml-16 lg:ml-[200px]">
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
}
