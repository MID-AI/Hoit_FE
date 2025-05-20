import { ReactNode } from "react";
import ResetButton from "./ResetButton";

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
    <nav className="flex h-fit w-278 flex-col items-center rounded-22 border border-coolGray-300 bg-white px-12 py-32 pt-30 text-coolGray-800">
      <div className="flex w-full flex-col gap-32">{children}</div>
      <ResetButton onClick={onClickReset} disabled={disabled} />
    </nav>
  );
}

export default Navigation;
