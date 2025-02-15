"use client";
import React, { ReactNode } from "react";
import * as Sentry from "@sentry/nextjs";

import Error from "./error";

type Props = {
  children: ReactNode;
};

export default function Provider({ children }: Props) {
  if (typeof window === "undefined") {
    return <>{children}</>;
  }
  return <>{children}</>;
  return (
    <Sentry.ErrorBoundary fallback={<Error />}>{children}</Sentry.ErrorBoundary>
  );
}
