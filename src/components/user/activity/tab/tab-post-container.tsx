import { getMyActivityPost } from "@/apis/services/activity";
import InfinitePrefetch from "@/components/query/infinite-prefetch";
import { QUERY_KEY } from "@/constants/query-key";
import React from "react";
import TabPost from "../tab-post";

function TabPostContainer() {
  return (
    <InfinitePrefetch
      queryKey={QUERY_KEY.MY.ACTIVITY_POST}
      queryFn={({ pageParam = null }) =>
        getMyActivityPost({ cursor: pageParam })
      }
    >
      <TabPost />
    </InfinitePrefetch>
  );
}

export default TabPostContainer;
