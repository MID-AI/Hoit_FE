import type { Metadata } from "next";
import "./globals.css";
import { Noto_Sans_KR } from "next/font/google";
import Provider from "./provider";
import { MswComponent } from "@/mocks/msw.component";
import QueryProviders from "@/providers/query-provider";
import JotaiProvider from "@/providers/jotai-provider";
import ErrorDialog from "@/components/common/dialog/ErrorDialog";
import SidebarContainer from "@/components/sidebar/SidebarContainer";

export const metadata: Metadata = {
  title: "Hoit",
  description: "자유롭게 이미지를 생성하고 비디오를 만들어 보세요.",
  icons: {
    icon: "/favicon.png",
  },
};

const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

// if (typeof window === "undefined") {
//   (async () => {
//     const { server } = await import("@/mocks/server");
//     server.listen();
//   })();
// }

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${notoSansKr.className} flex overflow-hidden bg-default`}
      >
        <MswComponent />
        <Provider>
          <QueryProviders>
            <JotaiProvider>
              <SidebarContainer />
              <main className="mt-64 flex h-screen w-full items-start justify-center overflow-y-scroll sm:ml-64 sm:mt-0 lg:ml-140">
                {children}
                <div id="modal-root"></div>
                <ErrorDialog />
              </main>
            </JotaiProvider>
          </QueryProviders>
        </Provider>
      </body>
    </html>
  );
}
