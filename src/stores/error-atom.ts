import type { ErrorDialogType } from "@/@types/error";
import { atom } from "jotai";

export const isErrorDialogOpenAtom = atom<boolean>(false);
export const errorDialogAtom = atom<ErrorDialogType | null>(null);
