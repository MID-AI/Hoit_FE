import TabAllContainer from "@/components/user/project/tab/tab-all-container";

import TabWrapper from "@/components/user/project/tab/tab-wrapper";

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
