"use client";

import { resetCreateImageAtom } from "@/stores/create-image-atom";
import { useSetAtom } from "jotai";
import { useEffect } from "react";

function CreateImageStateCleanup() {
  const resetAll = useSetAtom(resetCreateImageAtom);

  useEffect(() => {
    return () => {
      resetAll();
    };
  }, [resetAll]);

  return null;
}

export default CreateImageStateCleanup;
