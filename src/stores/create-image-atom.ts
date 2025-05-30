import { type AspectRatio } from "@/constants/select-menu";
import { atom } from "jotai";

type ImageRefType = {
  character: File | null;
  characterUrl: string | null;
  style: File | null;
  styleUrl: string | null;
};

const ImageRefState: ImageRefType = {
  character: null,
  characterUrl: null,
  style: null,
  styleUrl: null,
};

type ImageInfoType = {
  isUpscaled: boolean;
  taskId: string | null;
  imageIndex: number | null;
};

export const createImageAtom = atom<string[] | null>(null);

export const imageRatioAtom = atom<AspectRatio>("1:1");
export const imageRefAtom = atom<ImageRefType>(ImageRefState);
export const imageInformationAtom = atom<ImageInfoType>({
  isUpscaled: false,
  taskId: null,
  imageIndex: null,
});
export const imagePromptAtom = atom<string>("");

export const imageLoadingAtom = atom<boolean>(false);
export const imageProgressAtom = atom<number | null>(null);

// 초기화
export const resetCreateImageAtom = atom(null, (_, set) => {
  set(createImageAtom, null);
  set(imagePromptAtom, "");
  set(imageRatioAtom, "1:1");
  set(imageRefAtom, {
    character: null,
    characterUrl: null,
    style: null,
    styleUrl: null,
  });
  set(imageInformationAtom, {
    isUpscaled: false,
    taskId: null,
    imageIndex: null,
  });
});
