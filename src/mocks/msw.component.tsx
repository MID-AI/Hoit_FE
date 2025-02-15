"use client";

import { useEffect } from "react";

export const MswComponent = () => {
  // useEffect(() => {
  //   if (
  //     process.env.NODE_ENV === "development" &&
  //     process.env.NEXT_PUBLIC_MODE === "mock"
  //   ) {
  //     if (typeof window === "undefined") {
  //       (async () => {
  //         const { server } = await import("@/mocks/server");
  //         server.listen();
  //       })();
  //     } else {
  //       (async () => {
  //         const { worker } = await import("@/mocks/browser");
  //         worker.start();
  //       })();
  //     }
  //   }
  // });
  useEffect(() => {
    const enableMocking = async () => {
      if (typeof window !== "undefined") {
        if (
          process.env.NODE_ENV === "development" &&
          process.env.NEXT_PUBLIC_MODE === "mock"
        ) {
          const { worker } = await import("@/mocks/browser");
          await worker.start({
            onUnhandledRequest: "bypass", // 핸들러가 없는 요청은 무시
          });
          /* eslint-disable-next-line no-console */
          console.log("📢 MSW Started!");
        }
      }
    };
    enableMocking();
  }, []);

  return null;
};
