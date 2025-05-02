import cn from "@/utils/cn";

function ImageCreateNavigationSelectItem({
  content,
  width,
}: {
  content: string;
  width: string;
}) {
  return (
    <div className="flex items-center gap-7 text-Type-12-regular">
      <div className="h-14 w-19">
        <div
          className={cn(
            "h-14 w-14 items-center rounded-4 border border-coolGray-800",
            width === "w-15" && "w-15",
            width,
          )}
        />
      </div>
      {content}
    </div>
  );
}

export default ImageCreateNavigationSelectItem;
