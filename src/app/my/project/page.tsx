import { getMyImageList } from "@/apis/services/project";

import InfinitePrefetch from "@/components/query/infinite-prefetch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TabAll from "@/components/user/project/tab-all";
import TabFolder from "@/components/user/project/tab-folder";
import { QUERY_KEY } from "@/constants/query-key";

function MyProject() {
  return (
    <div className="w-full px-23 py-64">
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="h-44">
          <TabsTrigger value="all">전체</TabsTrigger>
          <TabsTrigger value="folder">폴더</TabsTrigger>
        </TabsList>
        <TabsContent value="all">
          <InfinitePrefetch
            queryKey={QUERY_KEY.MY.PROJECT()}
            queryFn={({ pageParam = 0 }) => getMyImageList(pageParam)}
          >
            <TabAll />
          </InfinitePrefetch>
        </TabsContent>
        <TabsContent value="folder">
          <TabFolder />
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default MyProject;
