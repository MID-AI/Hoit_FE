import InfinitePrefetch from "@/components/query/InfinitePrefetch";
import TabAllCleanup from "../all/TabAllCleanup";
import { QUERY_KEY } from "@/constants/query-key";
import TabAll from "../all/TabAll";
import { getMyImageList } from "@/apis/services/project";

function TabAllContainer() {
  return (
    <>
      <TabAllCleanup />
      <InfinitePrefetch
        queryKey={QUERY_KEY.MY.PROJECT()}
        queryFn={({ pageParam = null }) =>
          getMyImageList({ cursor: pageParam })
        }
      >
        <TabAll />
      </InfinitePrefetch>
    </>
  );
}

export default TabAllContainer;
