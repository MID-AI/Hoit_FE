"use client";

import DownloadIcon from "@/assets/create/download.svg";
import { useCallback } from "react";

function MediaDownload({ image }: { image: string }) {
  const handleDownload = useCallback(async () => {
    try {
      const res = await fetch(image, { mode: "cors" });
      if (!res.ok) throw new Error("이미지를 불러오지 못했습니다.");

      const blob = await res.blob();
      const url = URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = `hoit-${image}`;
      a.click();

      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("이미지 다운로드 실패:", error);
      alert("이미지 다운로드에 실패했습니다.");
    }
  }, [image]);

  return (
    <button className="flex items-center" onClick={handleDownload}>
      <DownloadIcon className="h-18 w-18 text-coolGray-800" />
    </button>
  );
}

export default MediaDownload;
