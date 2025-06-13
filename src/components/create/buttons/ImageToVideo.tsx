"use client";

import PAGE_ROUTES from "@/constants/page-routes";
import Link from "next/link";
import CreationButtonWrapper from "./CreationButtonWrapper";
import CreateVideoIcon from "@/assets/create/creation_video.svg";
import { useSetAtom } from "jotai";
import { videoRefAtom } from "@/stores/create-video-atom";

function ImageToVideo({ image }: { image: string }) {
  const setVideoRef = useSetAtom(videoRefAtom);
  return (
    <Link
      href={PAGE_ROUTES.VIDEO_CREATE}
      onClick={() =>
        setVideoRef({
          ref: null,
          refUrl: image,
        })
      }
    >
      <CreationButtonWrapper icon={<CreateVideoIcon />} tooltip="비디오 생성" />
    </Link>
  );
}

export default ImageToVideo;
