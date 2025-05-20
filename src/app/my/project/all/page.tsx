import TabAllContainer from "@/components/user/project/tab/TabAllContainer";

import TabWrapper from "@/components/user/project/tab/TabWrapper";

async function ProjectTabPage() {
  return (
    <main className="w-full px-23 py-28">
      <TabWrapper activeTab="all">
        <TabAllContainer />
      </TabWrapper>
    </main>
  );
}

export default ProjectTabPage;
