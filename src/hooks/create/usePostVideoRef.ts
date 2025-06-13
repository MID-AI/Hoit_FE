import { postVideoReference } from "@/apis/services/video";
import { createVideoAtom } from "@/stores/create-video-atom";
import { errorDialogAtom } from "@/stores/error-atom";
import handleErrorDialog from "@/utils/handleErrorDialog";
import { useMutation } from "@tanstack/react-query";
import { useAtom, useSetAtom } from "jotai";

function usePostVideoRef() {
  const [state, setState] = useAtom(createVideoAtom);
  const { reference } = state;
  const setErrorDialog = useSetAtom(errorDialogAtom);

  const mutation = useMutation({
    mutationFn: (formData: FormData) => postVideoReference(formData),
    onSuccess: (data) => {
      if (data.image) {
        setState((prev) => ({
          ...prev,
          reference: {
            ...prev.reference,
            url: data.image,
          },
        }));
      }
    },
    onError: (error: any) => handleErrorDialog(error, setErrorDialog),
  });

  const postRefImages = () => {
    if (!reference.file) return null;

    const formData = new FormData();
    formData.append("image", reference.file);

    mutation.mutate(formData);
  };

  return { postRefImages };
}

export default usePostVideoRef;
