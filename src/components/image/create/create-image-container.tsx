"use client";

import Display from "@/components/create/display/display";
import ImageCreateNavigation from "./image-create-navigation";
import { useAtomValue } from "jotai";
import {
  createdImageAtom,
  isCreateImageOptionLockedAtom,
} from "@/stores/create-image-atom";

function CreateImageContainer() {
  const isLoading = useAtomValue(isCreateImageOptionLockedAtom);
  const createdImage = useAtomValue(createdImageAtom);

  return (
    <>
      <ImageCreateNavigation isLoading={isLoading} />
      <Display isLoading={isLoading} image={createdImage} />
    </>
  );
}

export default CreateImageContainer;
