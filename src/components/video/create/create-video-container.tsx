"use client";

import { isCreateVideoOptionLockedAtom } from "@/stores/create-video-atom";
import { useAtomValue } from "jotai";
import VideoCreateNavigation from "./video-create-navigation";
import Display from "@/components/create/display/display";

function CreateVideoContainer() {
  const isLoading = useAtomValue(isCreateVideoOptionLockedAtom);

  return (
    <>
      <VideoCreateNavigation isLoading={isLoading} />
      <Display isLoading={isLoading} image={null} />
    </>
  );
}

export default CreateVideoContainer;
