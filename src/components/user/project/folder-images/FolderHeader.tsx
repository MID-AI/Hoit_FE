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
    <div className="mb-39 mt-30 flex w-full flex-col">
      <Link href={PAGE_ROUTES.MY_PROJECT_FOLDER}>
        <div className="flex items-center gap-13">
          <ArrowIcon />
          <header className="text-Type-28-bold">{folderName}</header>
        </div>
      </Link>
      {!isEmpty && <FolderImagesToolbar />}
    </div>
  );
}

export default FolderHeader;
