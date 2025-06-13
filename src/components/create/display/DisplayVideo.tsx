"use client";

import {
  createVideoAtom,
  videoLoadingAtom,
  videoProgressAtom,
} from "@/stores/create-video-atom";
import { useAtomValue } from "jotai";

import DisplayLoading from "./DisplayLoading";
import DisplayDefault from "./DisplayDefault";
import DisplayWrapper from "./DisplayWrapper";

function DisplayVideo() {
  const video = useAtomValue(createVideoAtom);
  const progress = useAtomValue(videoProgressAtom);

  const isLoading = useAtomValue(videoLoadingAtom);
  if (isLoading) {
    return <DisplayLoading progress={progress} />;
  }
  if (!video) return <DisplayDefault />;

  return (
    <DisplayWrapper>
      <video src={video} />
    </DisplayWrapper>
  );
}

export default DisplayVideo;
