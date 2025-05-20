import { getUserInfo } from "@/apis/services/user";
import DataPrefetch from "@/components/query/DataPrefetch";
import { QUERY_KEY } from "@/constants/query-key";
import Sidebar from "./Sidebar";

function SidebarContainer() {
  return (
    <DataPrefetch queryKey={QUERY_KEY.MY.PROFILE} queryFn={getUserInfo}>
      <Sidebar />
    </DataPrefetch>
  );
}

export default SidebarContainer;
