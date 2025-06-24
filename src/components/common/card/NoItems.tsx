import ScreenStarIcon from "@/assets/create/screen_star.svg";
import cn from "@/utils/cn";

function NoItems({ text, className }: { text?: string; className?: string }) {
  return (
    <div
      className={cn(
        "flex h-full flex-col items-center justify-center gap-68 text-coolGray-400",
        className,
      )}
    >
      <ScreenStarIcon className="h-355 w-353 text-coolGray-200" />
      <span className="text-Type-28-medium">{text}</span>
    </div>
  );
}

export default NoItems;
