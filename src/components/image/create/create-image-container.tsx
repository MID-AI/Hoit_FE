"use client";

import Display from "@/components/create/display/display";
import ImageCreateNavigation from "./image-create-navigation";
import { useAtomValue } from "jotai";
import { isCreateImageOptionLockedAtom } from "@/stores/create-image-atom";

function CreateImageContainer() {
  const isLoading = useAtomValue(isCreateImageOptionLockedAtom);
  return (
    <>
      <ImageCreateNavigation isLoading={isLoading} />
      <Display isLoading={isLoading} />
    </>
  );
}

export default CreateImageContainer;
