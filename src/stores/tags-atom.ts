import { atom } from "jotai";

export const selectedTagAtom = atom<number | null>(null);
export const selectedSubTagAtom = atom<number | null>(null);
export const sortAtom = atom<string | null>(null);
