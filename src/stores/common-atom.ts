import { atom } from "jotai";

export const isErrorDialogOpenAtom = atom<boolean>(false);
export const errorDialogAtom = atom<{
  isOpen: boolean;
  heading: string;
  body: string;
  button: string;
  redirectUrl?: string;
} | null>(null);
