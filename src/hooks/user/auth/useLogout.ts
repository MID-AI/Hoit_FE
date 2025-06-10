import { logout } from "@/apis/services/user";
import PAGE_ROUTES from "@/constants/page-routes";
import { QUERY_KEY } from "@/constants/query-key";
import { errorDialogAtom } from "@/stores/error-atom";
import handleErrorDialog from "@/utils/handleErrorDialog";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSetAtom } from "jotai";
import { useRouter } from "next/navigation";

function useLogout() {
  const queryClient = useQueryClient();
  const setErrorDialog = useSetAtom(errorDialogAtom);
  const router = useRouter();

  return useMutation({
    mutationFn: logout,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: QUERY_KEY.MY.PROFILE });
      queryClient.clear();
      router.push(PAGE_ROUTES.HOME);
    },
    onError: (error: any) => handleErrorDialog(error, setErrorDialog),
  });
}

export default useLogout;
