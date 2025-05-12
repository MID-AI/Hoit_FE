import { type AspectRatio } from "@/constants/select-menu";
import { atom } from "jotai";

type CreateImageState = {
  createdImages: string[] | null;
  ratio: AspectRatio;
  prompt: string;

  reference: {
    character: File | null;
    characterUrl: string | null;
    style: File | null;
    styleUrl: string | null;
  };

  currentImage: string | null;

  isOptionLocked: boolean;
};

const defaultState: CreateImageState = {
  createdImages: null,
  ratio: "1:1",
  prompt: "",

  reference: {
    character: null,
    characterUrl: null,
    style: null,
    styleUrl: null,
  },

  currentImage: null,

  isOptionLocked: false,
};

export const createImageAtom = atom<CreateImageState>(defaultState);

// 초기화
export const resetCreateImageAtom = atom(null, (_, set) => {
  set(createImageAtom, (prev) => ({
    ...prev,
    prompt: "",
    ratio: "1:1",
    createdImages: null,
    reference: {
      character: null,
      characterUrl: null,
      style: null,
      styleUrl: null,
    },

    currentImage: null,
  }));
});
