import { deleteFolderImages } from "@/apis/services/project";
import { QUERY_KEY } from "@/constants/query-key";
import { errorDialogAtom } from "@/stores/error-atom";
import handleErrorDialog from "@/utils/handleErrorDialog";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSetAtom } from "jotai";

export default function useDeleteFolderImages() {
  const queryClient = useQueryClient();
  const setErrorDialog = useSetAtom(errorDialogAtom);

  return useMutation({
    mutationFn: ({
      folderId,
      imageIds,
    }: {
      folderId: number;
      imageIds: number[];
    }) => deleteFolderImages(folderId, Array.from(imageIds)),
    onSuccess: (_, { folderId }) =>
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY.MY.PROJECT_FOLDER_IMAGES(folderId),
      }),
    onError: (error: any) => handleErrorDialog(error, setErrorDialog),
  });
}
