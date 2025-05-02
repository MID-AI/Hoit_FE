import { getUserInfo } from "@/apis/services/user";
import DataPrefetch from "@/components/query/data-prefetch";
import { Sidebar } from "@/components/sidebar/sidebar";
import { QUERY_KEY } from "@/constants/query-key";
import React from "react";

function SidebarPage() {
  return (
    <DataPrefetch queryKey={QUERY_KEY.MY.PROFILE} queryFn={getUserInfo}>
      <Sidebar />
    </DataPrefetch>
  );
}

export default SidebarPage;
