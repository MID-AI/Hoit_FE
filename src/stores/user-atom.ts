import { atom } from "jotai";

export const isAuthenticatedAtom = atom<boolean>(false);
export const userNickNameAtom = atom<string | null>(null);
export const userCreditAtom = atom<number | null>(null);
