import { postImageReference } from "@/apis/services/images";
import { imageLoadingAtom, imageRefAtom } from "@/stores/create-image-atom";
import { errorDialogAtom } from "@/stores/error-atom";
import handleErrorDialog from "@/utils/handleErrorDialog";
import { useMutation } from "@tanstack/react-query";
import { useAtom, useSetAtom } from "jotai";

function usePostImageRef() {
  const [reference, setReference] = useAtom(imageRefAtom);
  const setLoading = useSetAtom(imageLoadingAtom);

  const setErrorDialog = useSetAtom(errorDialogAtom);

  const mutation = useMutation({
    mutationFn: (formData: FormData) => postImageReference(formData),
    onMutate: () => setLoading(true),
    onSuccess: (data) => {
      setReference((prev) => ({
        ...prev,
        characterUrl: data.crefImage ?? prev.characterUrl,
        styleUrl: data.srefImage ?? prev.styleUrl,
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
