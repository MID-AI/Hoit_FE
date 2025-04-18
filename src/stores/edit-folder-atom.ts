import { atom } from "jotai";

export const folderNameAtom = atom<string>("");

export const editModeAtom = atom<boolean>(false);
export const selectedCardsAtom = atom<Set<number>>(new Set<number>());
