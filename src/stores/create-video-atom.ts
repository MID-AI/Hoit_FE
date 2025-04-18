import { CREATE_VIDEO_SELECT_MENU } from "@/constants/select-menu";
import { atom } from "jotai";

export const selectedAiModelAtom =
  atom<keyof typeof CREATE_VIDEO_SELECT_MENU>("1");
export const selectedRefImageAtom = atom<File | null>(null);

export const resetCreateVideoAtoms = atom(null, (_, set) => {
  set(selectedAiModelAtom, "1");
  set(selectedRefImageAtom, null);
});
