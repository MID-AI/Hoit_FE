import { atom } from "jotai";

// 전체
export const selectedAllTabCardsAtom = atom<Set<number>>(new Set<number>());
export const editModeAllTabAtom = atom<boolean>(false);
export const isAllEmptyAtom = atom<boolean | null>(null);

export const resetTabAllAtoms = atom(null, (_, set) => {
  set(selectedAllTabCardsAtom, new Set<number>());
  set(editModeAllTabAtom, false);
  set(isAllEmptyAtom, null);
});

// 폴더
export const folderNameAtom = atom<string>("");

// 폴더 이미지 리스트
export const editModeFolderAtom = atom<boolean>(false);
export const selectedFolderCardsAtom = atom<Set<number>>(new Set<number>());
export const isFolderEmptyAtom = atom<boolean | null>(null);
