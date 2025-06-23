import { getUserInfo, logout } from "@/apis/services/user";
import PAGE_ROUTES from "@/constants/page-routes";
import { QUERY_KEY } from "@/constants/query-key";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";

export default function useGetUser() {
  const queryClient = useQueryClient();

  const { data, isLoading, error } = useQuery({
    queryKey: QUERY_KEY.MY.PROFILE,
    queryFn: getUserInfo,
    staleTime: 1000 * 60 * 10,
    gcTime: 1000 * 60 * 30,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    initialData: null,
    retry: (failureCount, error) => {
      const status =
        (error as any)?.response?.status ||
        (error as any)?.information?.statusCode;
      // 401은 재시도하지 않음
      return status !== 401 && failureCount < 3;
    },
  });

  useEffect(() => {
    const status =
      (error as any)?.response?.status ||
      (error as any)?.information?.statusCode;

    if (status === 401) {
      (async () => {
        try {
          queryClient.removeQueries({ queryKey: QUERY_KEY.MY.PROFILE });
          queryClient.clear();

          await logout();
        } catch (e) {
          console.warn("세션 만료", e);
        } finally {
          window.location.href = PAGE_ROUTES.HOME;
        }
      })();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error]);

  return { data, isLoading, error };
}
