import { putProfile } from "@/apis/services/user";
import { QUERY_KEY } from "@/constants/query-key";
import { errorDialogAtom } from "@/stores/error-atom";
import handleErrorDialog from "@/utils/handleErrorDialog";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSetAtom } from "jotai";

interface Props {
  nickname: string | null;
  profileImage: File | null;
}

function useUpdateProfile() {
  const queryClient = useQueryClient();
  const setErrorDialog = useSetAtom(errorDialogAtom);
  return useMutation({
    mutationFn: async ({ nickname, profileImage }: Props) => {
      const formData = new FormData();
      if (nickname) {
        formData.append("nickname", nickname);
      }

      if (profileImage) {
        formData.append("profileImage", profileImage);
      }
      return await putProfile(formData);
    },
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY.MY.PROFILE,
      }),
    onError: (error: any) => {
      handleErrorDialog(error, setErrorDialog);
    },
  });
}

export default useUpdateProfile;
