"use client";

import { useParams } from "next/navigation";
import ToolbarEditButton from "../../toolbar/ToolbarEditButton";
import DownLoadIcon from "@/assets/create/download.svg";
import { type InfiniteData, useQueryClient } from "@tanstack/react-query";
import { useAtomValue } from "jotai";
import { selectedFolderCardsAtom } from "@/stores/project-atom";
import type { ImageType, PageNation } from "@/@types/images";
import { QUERY_KEY } from "@/constants/query-key";
import { downloadImage } from "@/utils/downloadImage";

function ToolbarDownload() {
  const params = useParams();
  const folderId = Number(params.id);
  const selectedCards = useAtomValue(selectedFolderCardsAtom);
  const queryClient = useQueryClient();
  const cachedData = queryClient.getQueryData(
    QUERY_KEY.MY.PROJECT_FOLDER_IMAGES(folderId),
  ) as InfiniteData<PageNation<ImageType>>;

  const handleClick = () => {
    const selectedImages = cachedData?.pages
      .flatMap((page) => page.content)
      .filter((img) => selectedCards.has(img.id));

    selectedImages?.forEach((img) => {
      downloadImage(img.url);
    });
  };

  return (
    <ToolbarEditButton
      icon={<DownLoadIcon className="h-26 w-26 text-coolGray-500" />}
      text="다운로드"
      onClick={handleClick}
    />
  );
}

export default ToolbarDownload;
