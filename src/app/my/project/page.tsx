import TabAllToolbar from "@/components/user/project/all/toolbar/tab-all-toolbar";
import TabAllWrapper from "@/components/user/project/all/tab-all-wrapper";
import TabWrapper from "@/components/user/project/tab/tab-wrapper";
import { Suspense } from "react";

function MyProject() {
  return (
    <div className="w-full px-23 py-28">
      <Suspense fallback="로딩중(MyProject 컴포넌트)">
        <TabWrapper
          tabAll={<TabAllWrapper />}
          editToolbar={<TabAllToolbar />}
        />
      </Suspense>
    </div>
  );
}

export default MyProject;
