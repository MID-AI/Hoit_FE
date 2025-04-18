import TabAllWrapper from "@/components/user/project/tab/tab-all-wrapper";
import TabWrapper from "@/components/user/project/tab/tab-wrapper";

function MyProject() {
  return (
    <div className="w-full px-23 py-64">
      <TabWrapper tabAll={<TabAllWrapper />} />
    </div>
  );
}

export default MyProject;
