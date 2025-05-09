import { editFolderName } from "@/apis/services/project";
import { errorDialogAtom } from "@/stores/error-atom";
import handleErrorDialog from "@/utils/handleErrorDialog";
import { useMutation } from "@tanstack/react-query";
import { useSetAtom } from "jotai";

interface Props {
  folderId: number;
  newFolderName: string;
}

function useEditFolderName() {
  const setErrorDialog = useSetAtom(errorDialogAtom);
  return useMutation({
    mutationFn: ({ folderId, newFolderName }: Props) =>
      editFolderName(folderId, newFolderName),
    onError: (error: any) => {
      handleErrorDialog(error, setErrorDialog);
    },
  });
}

export default useEditFolderName;
