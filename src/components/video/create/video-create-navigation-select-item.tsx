import cn from "@/utils/cn";

function VideoCreateNavigationSelectItem({
  content,
  describe,
  className,
}: {
  content: string;
  describe: string;
  className?: string;
}) {
  return (
    <div className={cn("text-Type-12-regular", className)}>
      <span className="mr-8 text-coolGray-800">{content}</span>
      <span className="text-coolGray-500">{describe}</span>
    </div>
  );
}

export default VideoCreateNavigationSelectItem;
