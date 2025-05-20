"use client";

import PAGE_ROUTES from "@/constants/page-routes";
import Link from "next/link";
import CreationButtonWrapper from "./CreationButtonWrapper";
import CreateVideoIcon from "@/assets/create/creation_video.svg";
import { useSetAtom } from "jotai";
import { createVideoAtom } from "@/stores/create-video-atom";

function ImageToVideo({ image }: { image: string }) {
  const setImage = useSetAtom(createVideoAtom);
  return (
    <Link
      href={PAGE_ROUTES.VIDEO_CREATE}
      onClick={() =>
        setImage((prev) => ({
          ...prev,
          reference: { ...prev.reference, url: image },
        }))
      }
    >
      <CreationButtonWrapper icon={<CreateVideoIcon />} tooltip="비디오 생성" />
    </Link>
  );
}

export default ImageToVideo;
