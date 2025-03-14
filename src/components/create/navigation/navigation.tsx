"use client";

import ResetIcon from "@/assets/create/reset.svg";
import { ReactNode } from "react";

function Navigation({
  children,
  onClickReset,
}: {
  children: ReactNode;
  onClickReset: () => void;
}) {
  return (
    <nav className="flex h-fit w-278 flex-col items-center rounded-22 border border-coolGray-300 bg-white px-12 py-32 text-cBlack">
      <div className="flex w-full flex-col gap-32">{children}</div>
      <button
        onClick={onClickReset}
        className="mt-36 flex w-72 items-center gap-8 rounded-20 border border-coolGray-50 bg-coolGray-50 px-8 py-6 hover:border-coolGray-400 hover:bg-coolGray-200 hover:shadow-custom"
      >
        <ResetIcon />
        <span className="shrink-0 text-Type-12-regular">리셋</span>
      </button>
    </nav>
  );
}

export default Navigation;
