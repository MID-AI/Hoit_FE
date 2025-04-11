"use client";

import { resetCreateVideoAtoms } from "@/stores/create-video-atom";
import { useSetAtom } from "jotai";
import { useEffect } from "react";

function CreateVideoStateCleanup() {
  const resetAll = useSetAtom(resetCreateVideoAtoms);

  useEffect(() => {
    return () => {
      resetAll();
    };
  }, []);

  return null;
}

export default CreateVideoStateCleanup;
