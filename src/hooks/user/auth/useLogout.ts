import { logout } from "@/apis/services/user";
import PAGE_ROUTES from "@/constants/page-routes";
import { errorDialogAtom } from "@/stores/error-atom";
import handleErrorDialog from "@/utils/handleErrorDialog";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSetAtom } from "jotai";

function useLogout() {
  const queryClient = useQueryClient();
  const setErrorDialog = useSetAtom(errorDialogAtom);

  return useMutation({
    mutationFn: logout,
    onSuccess: () => {
      queryClient.clear();
      window.location.href = PAGE_ROUTES.HOME;
    },
    onError: (error: any) => handleErrorDialog(error, setErrorDialog),
  });
}

export default useLogout;
