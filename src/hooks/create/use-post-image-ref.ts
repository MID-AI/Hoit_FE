import { postImageReference } from "@/apis/services/images";
import { createImageAtom } from "@/stores/create-image-atom";
import { errorDialogAtom } from "@/stores/error-atom";
import handleErrorDialog from "@/utils/handleErrorDialog";
import { useMutation } from "@tanstack/react-query";
import { useAtom, useSetAtom } from "jotai";

function usePostImageRef() {
  const [state, setState] = useAtom(createImageAtom);
  const { reference } = state;

  const setErrorDialog = useSetAtom(errorDialogAtom);

  const mutation = useMutation({
    mutationFn: (formData: FormData) => postImageReference(formData),
    onSuccess: (data) => {
      setState((prev) => ({
        ...prev,
        reference: {
          ...prev.reference,
          characterUrl: data.crefImage ?? prev.reference.characterUrl,
          styleUrl: data.srefImage ?? prev.reference.styleUrl,
        },
      }));
    },
    onError: (error: any) => handleErrorDialog(error, setErrorDialog),
  });

  const postRefImages = () => {
    if (!reference.character && !reference.style) return null;

    const formData = new FormData();

    if (reference.character) {
      formData.append("crefImage", reference.character);
    }

    if (reference.style) {
      formData.append("srefImage", reference.style);
    }

    mutation.mutate(formData);
  };

  return { postRefImages };
}

export default usePostImageRef;
