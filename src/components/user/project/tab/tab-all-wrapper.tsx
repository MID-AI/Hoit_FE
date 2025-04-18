import InfinitePrefetch from "@/components/query/infinite-prefetch";
import { QUERY_KEY } from "@/constants/query-key";
import { getMyImageList } from "@/apis/services/project";
import TabAll from "./tab-all";

function TabAllWrapper() {
  return (
    <InfinitePrefetch
      queryKey={QUERY_KEY.MY.PROJECT()}
      queryFn={({ pageParam = 0 }) => getMyImageList(pageParam)}
    >
      <TabAll />
    </InfinitePrefetch>
  );
}

export default TabAllWrapper;
