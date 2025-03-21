import clsx from "clsx";

function ImageCreateNavigationSelectItem({
  content,
  width,
}: {
  content: string;
  width: string;
}) {
  return (
    <div className="flex items-center gap-7 text-Type-12-regular">
      <span className="h-14 w-19">
        <span
          className={clsx(
            width,
            "flex h-14 items-center rounded-4 border border-coolGray-800",
          )}
        />
      </span>
      {content}
    </div>
  );
}

export default ImageCreateNavigationSelectItem;
