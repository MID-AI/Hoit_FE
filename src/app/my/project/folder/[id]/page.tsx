import { getFolderImages } from "@/apis/services/project";
import InfinitePrefetch from "@/components/query/infinite-prefetch";
import FolderHeader from "@/components/user/project/folder-images/folder-header";
import FolderImages from "@/components/user/project/folder-images/images/folder-images";
import TestList from "@/components/user/project/folder-images/test";
import { QUERY_KEY } from "@/constants/query-key";

async function ProjectFolder({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const folderId = Number(id);
  return (
    <main className="w-full px-24">
      <FolderHeader folderName="캐릭터" />
      <div>임시</div>
      <TestList />

      <div>아래가 실제 반영</div>
      <InfinitePrefetch
        queryKey={QUERY_KEY.MY.PROJECT_FOLDER_IMAGES(folderId)}
        queryFn={({ pageParam = 0 }) => getFolderImages(pageParam, folderId)}
      >
        <FolderImages />
      </InfinitePrefetch>
    </main>
  );
}

export default ProjectFolder;
