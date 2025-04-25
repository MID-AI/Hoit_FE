import { errorDialogAtom } from "@/stores/error-atom";
import { useMutation } from "@tanstack/react-query";
import { useAtomValue, useSetAtom } from "jotai";
import handleErrorDialog from "@/utils/handleErrorDialog";
import { createVideo } from "@/apis/services/video";
import {
  isCreateVideoOptionLockedAtom,
  videoRefUrlAtom,
} from "@/stores/create-video-atom";

export default function useCreateVideo({ prompt }: { prompt: string }) {
  const videoRef = useAtomValue(videoRefUrlAtom);
  const isOptionLockedAtom = useSetAtom(isCreateVideoOptionLockedAtom);

  const setErrorDialog = useSetAtom(errorDialogAtom);

  const mutation = useMutation({
    mutationFn: (data: { prompt: string; imageUrl?: string }) =>
      createVideo(data),
    onSuccess: () => {
      isOptionLockedAtom(true);
    },
    onError: (error: any) => handleErrorDialog(error, setErrorDialog),
  });

  const handleCreateVideo = () => {
    let hasError = false;
    if (prompt === "") {
      console.warn("프롬프트를 입력해주세요");
      hasError = true;
    }
    if (hasError) return;

    const payload = {
      prompt,
      imageUrl: videoRef || undefined,
    };

    mutation.mutate(payload);
  };
  return { handleCreateVideo };
}
