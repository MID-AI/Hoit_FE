import Image from "next/image";
import MoreIcon from "@/assets/my/more.svg";
import EmptyFolder from "@/assets/my/empty_folder.svg";
import Link from "next/link";
import PAGE_ROUTES from "@/constants/page-routes";

interface Props {
  folderId: number;
  image?: string;
  title: string;
  imageCount: number;
  videoCount: number;
  lastUpdated: number;
}

function FolderItem({
  folderId,
  image,
  title,
  imageCount,
  videoCount,
  lastUpdated,
}: Props) {
  return (
    <Link
      href={PAGE_ROUTES.MY_PROJECT_FOLDER(folderId)}
      className="h-286 w-415 overflow-hidden rounded-22 border border-coolGray-200"
    >
      <div className="flex h-184 w-415 items-center justify-center bg-coolGray-100">
        {image ? (
          <Image
            src={image}
            alt={`${title} 폴더`}
            width={415}
            height={184}
            className="h-full w-full object-cover"
          />
        ) : (
          <EmptyFolder />
        )}
      </div>

      <div className="pb-25 pl-14 pr-12 pt-18">
        <div className="mb-19 flex justify-between">
          <h3 className="text-Type-18-medium">{title}</h3>
          <MoreIcon className="cursor-pointer" />
        </div>

        <div className="flex items-center text-Type-14-regular text-coolGray-600">
          <div className="mr-8">이미지 {imageCount}</div>
          <div className="mr-10">영상 {videoCount}</div>
          <div className="h-12 w-2 border bg-coolGray-300" />
          <div className="ml-10">{lastUpdated} 전 수정</div>
        </div>
      </div>
    </Link>
  );
}

export default FolderItem;
