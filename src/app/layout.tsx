import type { Metadata } from "next";
import "./globals.css";
import { Noto_Sans_KR } from "next/font/google";
import Provider from "./provider";
import { MswComponent } from "@/mocks/msw.component";
import QueryProviders from "@/providers/query-provider";
import JotaiProvider from "@/providers/jotai-provider";
import ErrorDialog from "@/components/common/dialog/ErrorDialog";
import SidebarContainer from "@/components/sidebar/sidebar-container";

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
        className={`${notoSansKr.className} overflow-x-hidden overflow-y-scroll bg-default`}
      >
        <MswComponent />
        <Provider>
          <QueryProviders>
            <JotaiProvider>
              <SidebarContainer />
              <main className="ml-64 flex items-start justify-center lg:ml-140">
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
