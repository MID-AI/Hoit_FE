"use client";

import { useCallback } from "react";
import CreationButtonWrapper from "./CreationButtonWrapper";
import DownloadIcon from "@/assets/create/download.svg";
import { downloadImage } from "@/utils/downloadImage";

function DownloadButton({ image }: { image: string }) {
  const handleDownload = useCallback(async () => {
    downloadImage(image);
  }, [image]);

  return (
    <CreationButtonWrapper
      icon={<DownloadIcon />}
      tooltip="다운로드"
      onClick={handleDownload}
    />
  );
}

export default DownloadButton;
