"use client";

import Image from "next/image";
import { useAtomValue } from "jotai";
import { createImageAtom } from "@/stores/create-image-atom";
import DisplayLoading from "./display-loading";
import DisplayDefault from "./display-default";

function DisplayImage() {
  const state = useAtomValue(createImageAtom);
  const { createdImages, isOptionLocked } = state;

  if (isOptionLocked) return <DisplayLoading />;

  if (createdImages) {
    return createdImages?.map((img, idx) => (
      <Image key={idx} src={img} alt="image" width={800} height={800} />
    ));
  }
  return <DisplayDefault />;
}

export default DisplayImage;
