import { type selectMenu } from "@/components/image/create/navigation/navigation-select";
import { atom } from "jotai";

export const selectedRatioAtom = atom<keyof typeof selectMenu>("1");
export const selectedCharacterAtom = atom<File | null>(null);
export const selectedStyleAtom = atom<File | null>(null);
