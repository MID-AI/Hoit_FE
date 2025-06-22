import { createImage } from "@/apis/services/images";
import { errorDialogAtom } from "@/stores/error-atom";
import {
  imageLoadingAtom,
  imagePromptAtom,
  imageRatioAtom,
  imageRefAtom,
} from "@/stores/create-image-atom";
import { useMutation } from "@tanstack/react-query";
import { useAtomValue, useSetAtom } from "jotai";
import handleErrorDialog from "@/utils/handleErrorDialog";

export default function useCreateImage() {
  const prompt = useAtomValue(imagePromptAtom);
  const ratio = useAtomValue(imageRatioAtom);
  const reference = useAtomValue(imageRefAtom);
  const setLoading = useSetAtom(imageLoadingAtom);
  const setErrorDialog = useSetAtom(errorDialogAtom);

  const mutation = useMutation({
    mutationFn: (data: {
      prompt: string;
      ratio: string;
      crefUrl?: string;
      srefUrl?: string;
    }) => createImage(data),
    onMutate: () => setLoading(true),
    onError: (error: any) => {
      setLoading(false);
      handleErrorDialog(error, setErrorDialog);
    },
  });

  const handleCreateImage = () => {
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
