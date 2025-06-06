import { deleteImages } from "@/apis/services/project";
import { QUERY_KEY } from "@/constants/query-key";
import { errorDialogAtom } from "@/stores/error-atom";
import handleErrorDialog from "@/utils/handleErrorDialog";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSetAtom } from "jotai";

export default function useDeleteImages() {
  const queryClient = useQueryClient();
  const setErrorDialog = useSetAtom(errorDialogAtom);

  return useMutation({
    mutationFn: (imageIds: number[]) => deleteImages(Array.from(imageIds)),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: QUERY_KEY.MY.PROJECT() });
    },
    onError: (error: any) => handleErrorDialog(error, setErrorDialog),
  });
}
