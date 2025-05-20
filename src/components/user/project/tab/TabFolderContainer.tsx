import { getMyProjectFolder } from "@/apis/services/project";
import InfinitePrefetch from "@/components/query/InfinitePrefetch";
import { QUERY_KEY } from "@/constants/query-key";
import TabFolder from "../folder/TabFolder";

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
