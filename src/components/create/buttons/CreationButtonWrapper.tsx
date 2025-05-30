import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

function CreationButtonWrapper({
  icon,
  tooltip,
  onClick,
}: {
  icon: React.ReactNode;
  tooltip: string;
  onClick?: () => void;
}) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger
          asChild
          onClick={onClick}
          className="box-border h-24 w-24 cursor-pointer rounded-6 border border-coolGray-300 bg-coolGray-300 p-2 opacity-90 hover:bg-white"
        >
          {icon}
        </TooltipTrigger>
        <TooltipContent>{tooltip}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export default CreationButtonWrapper;
