"use client";

import { createVideoAtom } from "@/stores/create-video-atom";
import { useAtomValue } from "jotai";

import DisplayLoading from "./DisplayLoading";
import DisplayDefault from "./DisplayDefault";

function DisplayVideo() {
  const state = useAtomValue(createVideoAtom);
  const { createVideo, isOptionLocked } = state;

  if (isOptionLocked) {
    return <DisplayLoading />;
  }

  if (createVideo) {
    return <video src={createVideo} />;
  }

  return <DisplayDefault />;
}

export default DisplayVideo;
