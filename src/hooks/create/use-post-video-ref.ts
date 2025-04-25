import { postVideoReference } from "@/apis/services/video";
import {
  selectedRefImageAtom,
  videoRefUrlAtom,
} from "@/stores/create-video-atom";
import { errorDialogAtom } from "@/stores/error-atom";
import handleErrorDialog from "@/utils/handleErrorDialog";
import { useMutation } from "@tanstack/react-query";
import { useAtomValue, useSetAtom } from "jotai";

function usePostVideoRef() {
  const imageRef = useAtomValue(selectedRefImageAtom);
  const setVideoRefUrl = useSetAtom(videoRefUrlAtom);
  const setErrorDialog = useSetAtom(errorDialogAtom);

  const mutation = useMutation({
    mutationFn: (formData: FormData) => postVideoReference(formData),
    onSuccess: (data) => {
      if (data.image) setVideoRefUrl(data.image);
    },
    onError: (error: any) => handleErrorDialog(error, setErrorDialog),
  });

  const postRefImages = () => {
    if (!imageRef) return null;

    const formData = new FormData();

    if (imageRef) {
      formData.append("image", imageRef);
    }

    mutation.mutate(formData);
  };

  return { postRefImages };
}

export default usePostVideoRef;
