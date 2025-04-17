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
      className="ml-18 flex items-center gap-12 text-coolGray-500"
    >
      {icon}
      {text}
    </button>
  );
}

export default ToolbarEditButton;
