import { addImageToFolder } from "@/apis/services/project";
import { QUERY_KEY } from "@/constants/query-key";
import { errorDialogAtom } from "@/stores/error-atom";
import handleErrorDialog from "@/utils/handleErrorDialog";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSetAtom } from "jotai";

function useAddImageToFolder() {
  const queryClient = useQueryClient();
  const setErrorDialog = useSetAtom(errorDialogAtom);

  return useMutation({
    mutationFn: ({
      folderId,
      imageIds,
    }: {
      folderId: number;
      imageIds: number[];
    }) => addImageToFolder(folderId, Array.from(imageIds)),
    onSuccess: (_, variable) => {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY.MY.PROJECT_FOLDER_IMAGES(variable.folderId),
      });
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY.MY.PROJECT_FOLDER,
      });
    },
    onError: (error: any) => handleErrorDialog(error, setErrorDialog),
  });
}

export default useAddImageToFolder;
