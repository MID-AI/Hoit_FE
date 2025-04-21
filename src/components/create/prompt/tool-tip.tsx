import { ReactNode } from "react";

function ToolTip({ icon, content }: { icon: ReactNode; content: string }) {
  return (
    <div className="group relative">
      <button className="text-coolGray-300 group-hover:text-black">
        {icon}
      </button>
      <div className="absolute bottom-0 right-30 hidden max-h-500 min-w-500 shrink-0 overflow-y-auto rounded-22 bg-coolGray-100 p-12 group-hover:block">
        {content}
      </div>
    </div>
  );
}

export default ToolTip;
