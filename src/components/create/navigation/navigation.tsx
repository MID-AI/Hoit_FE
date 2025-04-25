import ResetIcon from "@/assets/create/reset.svg";
import { ReactNode } from "react";

function Navigation({
  children,
  onClickReset,
  disabled,
}: {
  children: ReactNode;
  onClickReset: () => void;
  disabled: boolean;
}) {
  return (
    <nav className="flex h-fit w-278 flex-col items-center rounded-22 border border-coolGray-300 bg-white px-12 py-32 text-cBlack">
      <div className="flex w-full flex-col gap-32">{children}</div>
      <button
        onClick={onClickReset}
        disabled={disabled}
        className="mt-36 flex w-72 items-center gap-8 rounded-20 border border-coolGray-100 bg-coolGray-100 px-8 py-6 hover:border-coolGray-400 hover:bg-coolGray-200 hover:shadow-custom disabled:cursor-not-allowed disabled:bg-coolGray-100 disabled:text-coolGray-300 disabled:hover:border-coolGray-100 disabled:hover:bg-coolGray-100 disabled:hover:shadow-none"
      >
        <ResetIcon />
        <span className="shrink-0 text-Type-12-regular">리셋</span>
      </button>
    </nav>
  );
}

export default Navigation;
