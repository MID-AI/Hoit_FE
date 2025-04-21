import { getUserInfo } from "@/apis/services/user";
import { QUERY_KEY } from "@/constants/query-key";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

async function UserProfileFetcher({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: QUERY_KEY.MY.PROFILE,
    queryFn: getUserInfo,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      {children}
    </HydrationBoundary>
  );
}

export default UserProfileFetcher;
