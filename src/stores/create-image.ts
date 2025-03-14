import { type CREATE_IMAGE_SELECT_MENU } from "@/constants/select-menu";
import { atom } from "jotai";

export const selectedRatioAtom =
  atom<keyof typeof CREATE_IMAGE_SELECT_MENU>("1");
export const selectedCharacterAtom = atom<File | null>(null);
export const selectedStyleAtom = atom<File | null>(null);
