"use client";

import { useParams } from "next/navigation";
import ToolbarEditButton from "../toolbar-edit-button";
import DownLoadIcon from "@/assets/create/download.svg";
import { type InfiniteData, useQueryClient } from "@tanstack/react-query";
import { useAtomValue } from "jotai";
import { selectedCardsAtom } from "@/stores/edit-folder-atom";
import type { ImageType, PageNation } from "@/@types/images";
import { downloadImage } from "@/utils/download";

function ToolbarDownload() {
  const params = useParams();
  const folderId = Number(params.id);
  const selectedCards = useAtomValue(selectedCardsAtom);
  const queryClient = useQueryClient();
  const cachedData = queryClient.getQueryData([
    "folderImages",
    folderId,
  ]) as InfiniteData<PageNation<ImageType>>;

  const handleClick = () => {
    const selectedImages = cachedData?.pages
      .flatMap((page) => page.content)
      .filter((img) => selectedCards.has(img.id));

    selectedImages?.forEach((img) => {
      const extension = img.url.split(".").pop()?.split("?")[0] ?? "jpg";
      downloadImage(img.url, `image_${img.id}.${extension}`);
    });
  };

  return (
    <ToolbarEditButton
      icon={<DownLoadIcon className="h-18 w-18 text-coolGray-500" />}
      text="다운로드"
      onClick={handleClick}
    />
  );
}

export default ToolbarDownload;
