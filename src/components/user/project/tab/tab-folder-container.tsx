import { getMyProjectFolder } from "@/apis/services/project";
import InfinitePrefetch from "@/components/query/infinite-prefetch";
import { QUERY_KEY } from "@/constants/query-key";
import TabFolder from "../folder/tab-folder";

function TabFolderContainer() {
  return (
    <InfinitePrefetch
      queryKey={QUERY_KEY.MY.PROJECT_FOLDER}
      queryFn={({ pageParam = null }) =>
        getMyProjectFolder({ cursor: pageParam })
      }
    >
      <TabFolder />
    </InfinitePrefetch>
  );
}

export default TabFolderContainer;
