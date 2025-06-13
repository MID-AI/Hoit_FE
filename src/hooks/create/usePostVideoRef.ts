import { postVideoReference } from "@/apis/services/video";
import { videoRefAtom } from "@/stores/create-video-atom";
import { errorDialogAtom } from "@/stores/error-atom";
import handleErrorDialog from "@/utils/handleErrorDialog";
import { useMutation } from "@tanstack/react-query";
import { useAtom, useSetAtom } from "jotai";

function usePostVideoRef() {
  const [ref, setRef] = useAtom(videoRefAtom);

  const setErrorDialog = useSetAtom(errorDialogAtom);

  const mutation = useMutation({
    mutationFn: (formData: FormData) => postVideoReference(formData),
    onSuccess: (data) => {
      if (data.image) {
        setRef({ ref: null, refUrl: data.image });
      }
    },
    onError: (error: any) => handleErrorDialog(error, setErrorDialog),
  });

  const postRefImages = () => {
    if (!ref.ref) return null;

    const formData = new FormData();
    formData.append("image", ref.ref);

    mutation.mutate(formData);
  };

  return { postRefImages };
}

export default usePostVideoRef;
