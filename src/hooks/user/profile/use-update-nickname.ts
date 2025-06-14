// hooks/user/use-update-nickname.ts

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateUserNickname } from "@/apis/services/user";
import { QUERY_KEY } from "@/constants/query-key";

export default function useUpdateNickname() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateUserNickname,
    onSuccess: (data) => {
      // 성공 시 사용자 정보 캐시 업데이트
      queryClient.setQueryData(QUERY_KEY.MY.PROFILE, data);

      // 사용자 관련 모든 쿼리 무효화 (필요하다면)
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY.MY.PROFILE,
      });

      console.log("닉네임 업데이트 성공:", data);
    },
    onError: (error) => {
      console.error("닉네임 업데이트 실패:", error);
    },
  });
}
