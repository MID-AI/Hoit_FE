import { type VideoModelKey } from "@/constants/select-menu";
import { atom } from "jotai";

type VideoRefType = {
  ref: File | null;
  refUrl: string | null;
};

const VideoRefState: VideoRefType = {
  ref: null,
  refUrl: null,
};

type VideoInfoType = {
  isUpscaled: boolean;
  taskId: string | null;
};

export const createVideoAtom = atom<string | null>(null);
export const videoModelAtom = atom<VideoModelKey>("I2V-01");
export const videoRefAtom = atom<VideoRefType>(VideoRefState);
export const videoInformationAtom = atom<VideoInfoType>({
  isUpscaled: false,
  taskId: null,
});

export const videoPromptAtom = atom<string>("");

export const videoLoadingAtom = atom<boolean>(false);
export const videoProgressAtom = atom<number | null>(null);

// 초기화
export const resetCreateVideoAtom = atom(null, (_, set) => {
  set(createVideoAtom, null);
  set(videoPromptAtom, "");
  set(videoModelAtom, "I2V-01");
  set(videoRefAtom, {
    ref: null,
    refUrl: null,
  });
  set(videoInformationAtom, {
    isUpscaled: false,
    taskId: null,
  });
});
