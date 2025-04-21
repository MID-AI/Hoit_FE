import { createImage } from "@/apis/services/images";
import { CREATE_IMAGE_SELECT_MENU } from "@/constants/select-menu";
import { errorDialogAtom } from "@/stores/error-atom";
import {
  createImageErrorAtom,
  isCreateImageOptionLockedAtom,
  selectedCharacterAtom,
  selectedRatioAtom,
  selectedStyleAtom,
} from "@/stores/create-image-atom";
import { useMutation } from "@tanstack/react-query";
import { useAtomValue, useSetAtom } from "jotai";

export default function useCreateImage({ prompt }: { prompt: string }) {
  const ratio = useAtomValue(selectedRatioAtom);
  const characterRef = useAtomValue(selectedCharacterAtom);
  const styleRef = useAtomValue(selectedStyleAtom);
  const isOptionLockedAtom = useSetAtom(isCreateImageOptionLockedAtom);
  const setErrorMessage = useSetAtom(createImageErrorAtom);
  const setErrorDialog = useSetAtom(errorDialogAtom);

  const mutation = useMutation({
    mutationFn: (formData: FormData) => createImage(formData),
    onSuccess: () => {
      isOptionLockedAtom(true);
    },
    onError: (error: any) => {
      if (error) {
        const { BODY, BUTTON, REDIRECT_URL, SERVER_MESSAGE } =
          error.information.payload;
        setErrorDialog({
          isOpen: true,
          heading: SERVER_MESSAGE,
          body: BODY,
          button: BUTTON,
          redirectUrl: REDIRECT_URL,
        });
      }
    },
  });

  const handleSubmit = () => {
    let hasError = false;
    if (prompt === "") {
      console.warn("프롬프트를 입력해주세요");
      setErrorMessage("프롬프트를 입력해주세요.");
      hasError = true;
    }
    if (hasError) return;

    const formData = new FormData();
    if (characterRef) {
      formData.append("crefUrl", characterRef);
    }
    if (styleRef) {
      formData.append("srefUrl", styleRef);
    }
    formData.append("prompt", prompt);
    formData.append("ratio", CREATE_IMAGE_SELECT_MENU[ratio].content);

    mutation.mutate(formData);
  };
  return { handleSubmit };
}
