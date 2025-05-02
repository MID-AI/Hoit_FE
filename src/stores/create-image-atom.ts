import { type AspectRatio } from "@/constants/select-menu";
import { atom } from "jotai";

// 이미지 생성 atom
export const createdImageAtom = atom<string[] | null>(null);
export const selectedRatioAtom = atom<AspectRatio>("1:1");
export const promptAtom = atom<string>("");

// 레퍼런스 atom
export const selectedCharacterAtom = atom<File | null>(null);
export const selectedStyleAtom = atom<File | null>(null);

export const imageCharacterUrlAtom = atom<string | null>(null);
export const imageStyleUrlAtom = atom<string | null>(null);

// 레퍼런스 이미지 제어 atom
export const setCharacterByFileAtom = atom(
  null,
  (_, set, file: File | null) => {
    set(selectedCharacterAtom, file);
    set(imageCharacterUrlAtom, null);
  },
);

export const setCharacterByUrlAtom = atom(
  null,
  (_, set, url: string | null) => {
    set(selectedCharacterAtom, null);
    set(imageCharacterUrlAtom, url);
  },
);

export const setStyleByFileAtom = atom(null, (_, set, file: File | null) => {
  set(selectedStyleAtom, file);
  set(imageStyleUrlAtom, null);
});

export const setStyleByUrlAtom = atom(null, (_, set, url: string | null) => {
  set(selectedStyleAtom, null);
  set(imageStyleUrlAtom, url);
});

// 이미지 리스트 선택 atom
export const currentImageAtom = atom<string | null>(null);
export const hasPrevAtom = atom<number | null>(null);
export const hasNextAtom = atom<number | null>(null);

// 로딩 atom
export const isCreateImageOptionLockedAtom = atom<boolean>(false);

export const resetCreateImageAtoms = atom(null, (_, set) => {
  set(selectedRatioAtom, "1:1");
  set(selectedStyleAtom, null);
  set(selectedCharacterAtom, null);
  set(imageStyleUrlAtom, null);
  set(imageCharacterUrlAtom, null);
  set(currentImageAtom, null);
});
