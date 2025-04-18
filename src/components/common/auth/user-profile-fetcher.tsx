import { getUserInfo } from "@/apis/services/user";
import { QUERY_KEY } from "@/constants/query-key";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

async function UserProfileFetcher({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient();
  try {
    await queryClient.fetchQuery({
      queryKey: QUERY_KEY.MY.PROFILE,
      queryFn: getUserInfo,
    });
  } catch (error: any) {
    if (error.status === 401 || error?.response?.status === 401) {
      queryClient.setQueryData(QUERY_KEY.MY.PROFILE, null);
    }
  }

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      {children}
    </HydrationBoundary>
  );
}

export default UserProfileFetcher;
