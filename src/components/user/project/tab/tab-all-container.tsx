import InfinitePrefetch from "@/components/query/infinite-prefetch";
import TabAllCleanup from "../all/tab-all-cleanup";
import { QUERY_KEY } from "@/constants/query-key";
import TabAll from "../all/tab-all";
import { getMyImageList } from "@/apis/services/project";

function TabAllContainer() {
  return (
    <>
      <TabAllCleanup />
      <InfinitePrefetch
        queryKey={QUERY_KEY.MY.PROJECT()}
        queryFn={({ pageParam = 0 }) => getMyImageList(pageParam)}
      >
        <TabAll />
      </InfinitePrefetch>
    </>
  );
}

export default TabAllContainer;
