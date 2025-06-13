import { deleteNotifications } from "@/apis/services/notification";
import { QUERY_KEY } from "@/constants/query-key";
import { errorDialogAtom } from "@/stores/error-atom";
import handleErrorDialog from "@/utils/handleErrorDialog";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSetAtom } from "jotai";

export default function useDeleteNotifications() {
  const queryClient = useQueryClient();
  const setErrorDialog = useSetAtom(errorDialogAtom);

  return useMutation({
    mutationFn: deleteNotifications,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY.NOTIFICATION.ALL,
      });
    },
    onError: (error: any) => handleErrorDialog(error, setErrorDialog),
  });
}
