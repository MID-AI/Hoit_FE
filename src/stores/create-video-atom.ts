import { CREATE_VIDEO_SELECT_MENU } from "@/constants/select-menu";
import { atom } from "jotai";

export const selectedAiModelAtom =
  atom<keyof typeof CREATE_VIDEO_SELECT_MENU>("1");

export const selectedRefImageAtom = atom<File | null>(null);
export const videoRefUrlAtom = atom<string | null>(null);

// 레퍼런스 비디오 제어 atom
export const setRefByFileAtom = atom(null, (_, set, file: File | null) => {
  set(selectedRefImageAtom, file);
  set(videoRefUrlAtom, null);
});

export const setRefByUrlAtom = atom(null, (_, set, url: string | null) => {
  set(selectedRefImageAtom, null);
  set(videoRefUrlAtom, url);
});

// 로딩 atom
export const isCreateVideoOptionLockedAtom = atom<boolean>(false);

export const resetCreateVideoAtoms = atom(null, (_, set) => {
  set(selectedAiModelAtom, "1");
  set(selectedRefImageAtom, null);
});
