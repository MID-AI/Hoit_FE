import { type VideoModelKey } from "@/constants/select-menu";
import { atom } from "jotai";

type CreateVideoState = {
  createVideo: string;
  aiModel: VideoModelKey;
  reference: {
    file: File | null;
    url: string | null;
  };
  prompt: string;
  isOptionLocked: boolean;
};

export const defaultCreateVideoState: CreateVideoState = {
  createVideo: "",
  aiModel: "I2V-01",
  reference: {
    file: null,
    url: null,
  },
  prompt: "",
  isOptionLocked: false,
};

export const createVideoAtom = atom<CreateVideoState>(defaultCreateVideoState);

export const resetCreateVideoAtom = atom(null, (_, set) => {
  set(createVideoAtom, (prev) => ({
    ...prev,
    aiModel: "I2V-01",
    reference: {
      file: null,
      url: null,
    },
  }));
});
