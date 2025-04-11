"use client";

import { resetCreateImageAtoms } from "@/stores/create-image-atom";
import { useSetAtom } from "jotai";
import { useEffect } from "react";

function CreateImageStateCleanup() {
  const resetAll = useSetAtom(resetCreateImageAtoms);

  useEffect(() => {
    return () => {
      resetAll();
    };
  }, []);

  return null;
}

export default CreateImageStateCleanup;
