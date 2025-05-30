"use client";

import { resetTabAllAtoms } from "@/stores/project-atom";
import { useSetAtom } from "jotai";
import { useEffect } from "react";

function TabAllCleanup() {
  const resetAll = useSetAtom(resetTabAllAtoms);

  useEffect(() => {
    return () => {
      resetAll();
    };
  }, []);

  return null;
}

export default TabAllCleanup;
