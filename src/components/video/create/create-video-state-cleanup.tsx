"use client";

import { resetCreateVideoAtom } from "@/stores/create-video-atom";
import { useSetAtom } from "jotai";
import { useEffect } from "react";

function CreateVideoStateCleanup() {
  const resetAll = useSetAtom(resetCreateVideoAtom);

  useEffect(() => {
    return () => {
      resetAll();
    };
  }, [resetAll]);

  return null;
}

export default CreateVideoStateCleanup;
