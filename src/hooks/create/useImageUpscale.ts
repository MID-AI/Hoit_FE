import { imageUpscale } from "@/apis/services/images";
import { imageLoadingAtom } from "@/stores/create-image-atom";
import { errorDialogAtom } from "@/stores/error-atom";
import handleErrorDialog from "@/utils/handleErrorDialog";
import { useMutation } from "@tanstack/react-query";
import { useSetAtom } from "jotai";

export default function useImageUpscale() {
  const setLoading = useSetAtom(imageLoadingAtom);
  const setErrorDialog = useSetAtom(errorDialogAtom);

  const mutation = useMutation({
    mutationFn: (data: { taskId: string; index: string }) => imageUpscale(data),
    onSuccess: () => {
      setLoading(true);
    },
    onError: (error: any) => handleErrorDialog(error, setErrorDialog),
  });

  const handleImageUpscale = (taskId: string, index: string) => {
    if (!taskId || !index) {
      console.warn("업스케일할 이미지를 선택해주세요");
      return;
    }

    mutation.mutate({ taskId, index });
  };

  return { handleImageUpscale };
}
