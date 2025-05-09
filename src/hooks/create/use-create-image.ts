import { createImage } from "@/apis/services/images";
import { errorDialogAtom } from "@/stores/error-atom";
import { createImageAtom } from "@/stores/create-image-atom";
import { useMutation } from "@tanstack/react-query";
import { useAtom, useSetAtom } from "jotai";
import handleErrorDialog from "@/utils/handleErrorDialog";

export default function useCreateImage() {
  const [state, setState] = useAtom(createImageAtom);
  const setErrorDialog = useSetAtom(errorDialogAtom);

  const mutation = useMutation({
    mutationFn: (data: {
      prompt: string;
      ratio: string;
      crefUrl?: string;
      srefUrl?: string;
    }) => createImage(data),
    onSuccess: () => {
      setState((prev) => ({
        ...prev,
        isOptionLocked: true,
      }));
    },
    onError: (error: any) => handleErrorDialog(error, setErrorDialog),
  });

  const handleCreateImage = () => {
    const { prompt, ratio, reference } = state;

    if (!prompt) {
      console.warn("프롬프트를 입력해주세요");
      return;
    }

    const payload = {
      prompt,
      ratio,
      crefUrl: reference.characterUrl || undefined,
      srefUrl: reference.styleUrl || undefined,
    };

    mutation.mutate(payload);
  };

  return { handleCreateImage };
}
