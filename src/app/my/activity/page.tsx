import { getMyActivityPost } from "@/apis/services/activity";
import TabLikes from "@/components/my/activity/tab-likes";
import TabPost from "@/components/my/activity/tab-post";
import InfinitePrefetch from "@/components/query/infinite-prefetch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { QUERY_KEY } from "@/constants/query-key";

function MyActivity() {
  return (
    <div className="w-full px-23 py-64">
      <Tabs defaultValue="post" className="w-full">
        <TabsList className="h-44">
          <TabsTrigger value="post">포스팅</TabsTrigger>
          <TabsTrigger value="likes">좋아요</TabsTrigger>
        </TabsList>
        <TabsContent value="post">
          <InfinitePrefetch
            queryKey={QUERY_KEY.MY.ACTIVITY_POST}
            queryFn={({ pageParam = 0 }) => getMyActivityPost(pageParam)}
          >
            <TabPost />
          </InfinitePrefetch>
        </TabsContent>
        <TabsContent value="likes">
          <TabLikes />
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default MyActivity;
