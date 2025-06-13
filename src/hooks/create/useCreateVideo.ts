import { errorDialogAtom } from "@/stores/error-atom";
import { useMutation } from "@tanstack/react-query";
import { useAtom, useSetAtom } from "jotai";
import handleErrorDialog from "@/utils/handleErrorDialog";
import { createVideo } from "@/apis/services/video";
import { createVideoAtom } from "@/stores/create-video-atom";

export default function useCreateVideo() {
  const [state, setState] = useAtom(createVideoAtom);
  const setErrorDialog = useSetAtom(errorDialogAtom);

  const mutation = useMutation({
    mutationFn: (data: { prompt: string; imageUrl?: string }) =>
      createVideo(data),
    onSuccess: () => {
      setState((prev) => ({ ...prev, isOptionLocked: true }));
    },
    onError: (error: any) => handleErrorDialog(error, setErrorDialog),
  });

  const handleCreateVideo = () => {
    const { prompt, reference } = state;

    if (!prompt) {
      console.warn("프롬프트를 입력해주세요");
      return;
    }

    const payload = {
      prompt,
      imageUrl: reference.url || undefined,
    };

    mutation.mutate(payload);
  };

  return { handleCreateVideo };
}
