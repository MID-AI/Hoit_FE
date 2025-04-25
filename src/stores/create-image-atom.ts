import { type CREATE_IMAGE_SELECT_MENU } from "@/constants/select-menu";
import { atom } from "jotai";

// 이미지 생성 atom
export const selectedRatioAtom =
  atom<keyof typeof CREATE_IMAGE_SELECT_MENU>("1");

export const selectedCharacterAtom = atom<File | null>(null);
export const selectedStyleAtom = atom<File | null>(null);

export const imageCharacterUrlAtom = atom<string | null>(null);
export const imageStyleUrlAtom = atom<string | null>(null);

// 로딩 atom
export const isCreateImageOptionLockedAtom = atom<boolean>(false);

export const resetCreateImageAtoms = atom(null, (_, set) => {
  set(selectedRatioAtom, "1");
  set(selectedStyleAtom, null);
  set(selectedCharacterAtom, null);
  set(imageStyleUrlAtom, null);
  set(imageCharacterUrlAtom, null);
});
