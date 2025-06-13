import { getUserInfo } from "@/apis/services/user";
import { QUERY_KEY } from "@/constants/query-key";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";

export default function useGetUser() {
  const queryClient = useQueryClient();

  const { data, isLoading, error } = useQuery({
    queryKey: QUERY_KEY.MY.PROFILE,
    queryFn: getUserInfo,
    staleTime: Infinity,
    gcTime: 1000 * 60 * 30, // 30분 동안 캐시 유지
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    initialData: null,
    retry: (failureCount, error) => {
      // 상태 코드가 401이면 재시도하지 않음
      if ((error as any)?.information.statusCode === 401) {
        return false;
      }
      return failureCount < 3;
    },
  });

  useEffect(() => {
    if ((error as any)?.status === 401) {
      queryClient.removeQueries({ queryKey: QUERY_KEY.MY.PROFILE });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error]);

  return { data, isLoading, error };
}
