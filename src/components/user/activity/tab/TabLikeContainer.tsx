import InfinitePrefetch from "@/components/query/InfinitePrefetch";
import TabLikes from "../TabLikes";
import { QUERY_KEY } from "@/constants/query-key";
import { getMyActivityLikes } from "@/apis/services/activity";

function TabLikeContainer() {
  return (
    <InfinitePrefetch
      queryKey={QUERY_KEY.MY.ACTIVITY_LIKES}
      queryFn={({ pageParam = null }) =>
        getMyActivityLikes({ cursor: pageParam })
      }
    >
      <TabLikes />
    </InfinitePrefetch>
  );
}

export default TabLikeContainer;
