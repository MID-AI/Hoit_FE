import { deleteFolder } from "@/apis/services/project";
import { QUERY_KEY } from "@/constants/query-key";
import { errorDialogAtom } from "@/stores/error-atom";
import handleErrorDialog from "@/utils/handleErrorDialog";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSetAtom } from "jotai";

export default function useDeleteFolder() {
  const queryClient = useQueryClient();
  const setErrorDialog = useSetAtom(errorDialogAtom);
  return useMutation({
    mutationFn: (folderId: number) => deleteFolder(folderId),
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY.MY.PROJECT_FOLDER,
      }),
    onError: (error: any) => handleErrorDialog(error, setErrorDialog),
  });
}
