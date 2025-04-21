import cn from "@/utils/cn";
import { ReactNode } from "react";

function ToolbarEditButton({
  icon,
  text,
  onClick,
  className,
}: {
  icon: ReactNode;
  text: string;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "ml-18 flex shrink items-center gap-12 text-coolGray-500",
        className,
      )}
    >
      {icon}
      {text}
    </button>
  );
}

export default ToolbarEditButton;
