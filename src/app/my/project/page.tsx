import TabAllWrapper from "@/components/user/project/tab/tab-all-wrapper";
import TabWrapper from "@/components/user/project/tab/tab-wrapper";
import { Suspense } from "react";

function MyProject() {
  return (
    <div className="w-full px-23 py-64">
      <Suspense fallback="로딩중(MyProject 컴포넌트)">
        <TabWrapper tabAll={<TabAllWrapper />} />
      </Suspense>
    </div>
  );
}

export default MyProject;
