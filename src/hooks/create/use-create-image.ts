import { createImage } from "@/apis/services/images";
import { errorDialogAtom } from "@/stores/error-atom";
import {
  imageCharacterUrlAtom,
  imageStyleUrlAtom,
  isCreateImageOptionLockedAtom,
  selectedRatioAtom,
} from "@/stores/create-image-atom";
import { useMutation } from "@tanstack/react-query";
import { useAtomValue, useSetAtom } from "jotai";
import handleErrorDialog from "@/utils/handleErrorDialog";

export default function useCreateImage({ prompt }: { prompt: string }) {
  const ratio = useAtomValue(selectedRatioAtom);
  const characterRef = useAtomValue(imageCharacterUrlAtom);
  const styleRef = useAtomValue(imageStyleUrlAtom);
  const isOptionLockedAtom = useSetAtom(isCreateImageOptionLockedAtom);

  const setErrorDialog = useSetAtom(errorDialogAtom);

  const mutation = useMutation({
    mutationFn: (data: {
      prompt: string;
      ratio: string;
      crefUrl?: string;
      srefUrl?: string;
    }) => createImage(data),
    onSuccess: () => {
      isOptionLockedAtom(true);
    },
    onError: (error: any) => handleErrorDialog(error, setErrorDialog),
  });

  const handleCreateImage = () => {
    let hasError = false;
    if (prompt === "") {
      console.warn("프롬프트를 입력해주세요");
      hasError = true;
    }
    if (hasError) return;

    const payload = {
      prompt,
      ratio: ratio,
      crefUrl: characterRef || undefined,
      srefUrl: styleRef || undefined,
    };

    mutation.mutate(payload);
  };
  return { handleCreateImage };
}
