import TabFolderContainer from "@/components/user/project/tab/tab-folder-container";
import TabWrapper from "@/components/user/project/tab/tab-wrapper";

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
