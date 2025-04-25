import { postImageReference } from "@/apis/services/images";
import {
  imageCharacterUrlAtom,
  imageStyleUrlAtom,
  selectedCharacterAtom,
  selectedStyleAtom,
} from "@/stores/create-image-atom";
import { errorDialogAtom } from "@/stores/error-atom";
import handleErrorDialog from "@/utils/handleErrorDialog";
import { useMutation } from "@tanstack/react-query";
import { useAtomValue, useSetAtom } from "jotai";

function usePostImageRef() {
  const characterRef = useAtomValue(selectedCharacterAtom);
  const styleRef = useAtomValue(selectedStyleAtom);
  const setStyleUrl = useSetAtom(imageStyleUrlAtom);
  const setCharacterUrl = useSetAtom(imageCharacterUrlAtom);
  const setErrorDialog = useSetAtom(errorDialogAtom);

  const mutation = useMutation({
    mutationFn: (formData: FormData) => postImageReference(formData),
    onSuccess: (data) => {
      if (data.srefImage) setStyleUrl(data.srefImage);
      if (data.crefImage) setCharacterUrl(data.crefImage);
    },
    onError: (error: any) => handleErrorDialog(error, setErrorDialog),
  });

  const postRefImages = () => {
    if (!characterRef && !styleRef) return null;

    const formData = new FormData();

    if (characterRef) {
      formData.append("crefImage", characterRef);
    }

    if (styleRef) {
      formData.append("srefImage", styleRef);
    }

    mutation.mutate(formData);
  };

  return { postRefImages };
}

export default usePostImageRef;
