import { errorDialogAtom } from "@/stores/error-atom";
import { useMutation } from "@tanstack/react-query";
import { useAtomValue, useSetAtom } from "jotai";
import handleErrorDialog from "@/utils/handleErrorDialog";
import { createVideo } from "@/apis/services/video";
import {
  videoLoadingAtom,
  // videoModelAtom,
  videoPromptAtom,
  videoRefAtom,
} from "@/stores/create-video-atom";

export default function useCreateVideo() {
  const prompt = useAtomValue(videoPromptAtom);
  // const model = useAtomValue(videoModelAtom);
  const reference = useAtomValue(videoRefAtom);
  const setLoading = useSetAtom(videoLoadingAtom);
  const setErrorDialog = useSetAtom(errorDialogAtom);

  const mutation = useMutation({
    mutationFn: (data: { prompt: string; imageUrl?: string }) =>
      createVideo(data),
    onMutate: () => setLoading(true),
    onError: (error: any) => {
      setLoading(false);
      handleErrorDialog(error, setErrorDialog);
    },
  });

  const handleCreateVideo = () => {
    if (!prompt) {
      console.warn("프롬프트를 입력해주세요");
      return;
    }

    const payload = {
      prompt,
      imageUrl: reference.refUrl || undefined,
    };

    mutation.mutate(payload);
  };

  return { handleCreateVideo };
}
