import ArrowIcon from "@/assets/my/arrow_header.svg";
import FolderImagesToolbar from "./toolbar/FolderImagesToolbar";
import Link from "next/link";
import PAGE_ROUTES from "@/constants/page-routes";

function FolderHeader({
  folderName,
  isEmpty,
}: {
  folderName: string;
  isEmpty?: boolean;
}) {
  return (
    <Link
      href={PAGE_ROUTES.MY_PROJECT_FOLDER}
      className="mb-39 mt-30 flex w-full items-center justify-between"
    >
      <div className="flex items-center gap-13">
        <ArrowIcon />
        <header className="text-Type-28-bold">{folderName}</header>
      </div>
      {!isEmpty && <FolderImagesToolbar />}
    </Link>
  );
}

export default FolderHeader;
