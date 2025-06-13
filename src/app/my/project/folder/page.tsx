import TabFolderContainer from "@/components/user/project/tab/TabFolderContainer";
import TabWrapper from "@/components/user/project/tab/TabWrapper";

async function ProjectFolderTabPage() {
  return (
    <section className="w-full px-23 py-28">
      <TabWrapper activeTab="folder">
        <TabFolderContainer />
      </TabWrapper>
    </section>
  );
}

export default ProjectFolderTabPage;
