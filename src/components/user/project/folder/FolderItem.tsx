import Image from "next/image";
import EmptyFolderIcon from "@/assets/my/empty_folder.svg";
import Link from "next/link";
import PAGE_ROUTES from "@/constants/page-routes";
import type { FolderType } from "@/@types/folder";
import formatTimeAgo from "@/utils/formatTimeAgo";
import FolderEdit from "./FolderEdit";

function FolderItem({
  id,
  name,
  imageCount,
  videoCount,
  coverImage,
  modifiedAt,
}: FolderType) {
  const updateDate = formatTimeAgo(modifiedAt);

  return (
    <div className="relative h-286 w-415 overflow-hidden rounded-22 border border-coolGray-200">
      <Link
        href={PAGE_ROUTES.MY_PROJECT_FOLDER_IMAGE(id)}
        className="flex h-184 w-415 items-center justify-center bg-coolGray-100"
      >
        {coverImage ? (
          <Image
            src={coverImage}
            alt={`${name} 폴더`}
            width={415}
            height={184}
            className="h-full w-full object-cover"
            unoptimized
          />
        ) : (
          <EmptyFolderIcon className="h-32 w-39 text-coolGray-300" />
        )}
      </Link>

      <div className="pb-25 pl-14 pr-12 pt-18">
        <div className="mb-19 flex items-center justify-between">
          <Link
            href={PAGE_ROUTES.MY_PROJECT_FOLDER_IMAGE(id)}
            className="text-Type-18-medium"
          >
            {name}
          </Link>
          <FolderEdit folderId={id} folderName={name} />
        </div>

        <div className="flex items-center text-Type-14-regular text-coolGray-600">
          <div className="mr-8">이미지 {imageCount}</div>
          <div className="mr-10">영상 {videoCount}</div>
          <div className="h-12 w-2 border bg-coolGray-300" />
          <div className="ml-10">{updateDate} 수정</div>
        </div>
      </div>
    </div>
  );
}

export default FolderItem;
