import { ReactNode } from "react";

function ToolbarEditButton({
  icon,
  text,
  onClick,
}: {
  icon: ReactNode;
  text: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="ml-18 flex shrink items-center gap-12 text-coolGray-500"
    >
      <span className="flex w-fit shrink-0">{icon}</span>

      {text}
    </button>
  );
}

export default ToolbarEditButton;
