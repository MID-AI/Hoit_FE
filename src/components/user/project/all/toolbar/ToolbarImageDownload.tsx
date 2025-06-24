"use client";

import type { ImageType } from "@/@types/images";
import { QUERY_KEY } from "@/constants/query-key";
import { selectedAllTabCardsAtom } from "@/stores/project-atom";
import { type InfiniteData, useQueryClient } from "@tanstack/react-query";
import { useAtomValue } from "jotai";
import ToolbarEditButton from "../../toolbar/ToolbarEditButton";
import { downloadImage } from "@/utils/downloadImage";
import { PageNation } from "@/@types/response";
import { Download } from "lucide-react";

function ToolbarImageDownload() {
  const selectedCards = useAtomValue(selectedAllTabCardsAtom);
  const queryClient = useQueryClient();
  const cachedData = queryClient.getQueryData(
    QUERY_KEY.MY.PROJECT(),
  ) as InfiniteData<PageNation<ImageType>>;

  const handleClick = () => {
    const selectedImages = cachedData?.pages
      .flatMap((page) => page.content)
      .filter((img) => selectedCards.has(img.id));

    selectedImages?.forEach((img) => {
      downloadImage(img.url, img.id);
    });
  };

  return (
    <ToolbarEditButton
      icon={<Download className="text-coolGray-500" />}
      text="다운로드"
      onClick={handleClick}
    />
  );
}

export default ToolbarImageDownload;
