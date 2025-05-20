import TabFolderContainer from "@/components/user/project/tab/TabFolderContainer";
import TabWrapper from "@/components/user/project/tab/TabWrapper";

async function ProjectFolderTabPage() {
  return (
    <main className="w-full px-23 py-28">
      <TabWrapper activeTab="folder">
        <TabFolderContainer />
      </TabWrapper>
    </main>
  );
}

export default ProjectFolderTabPage;
