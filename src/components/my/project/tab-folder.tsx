"use client";

import useGetMyProjectFolder from "@/hooks/user/use-get-my-project-folder";
import FolderItem from "./folder-item";
import NewFolder from "./new-folder";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

function TabFolder() {
  const { data, isLoading, fetchNextPage, hasNextPage } =
    useGetMyProjectFolder();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);
  if (isLoading)
    return (
      <div aria-label="이미지 목록 불러오는 중" className="w-full">
        로딩중
      </div>
    );
  return (
    <div className="flex flex-wrap gap-24">
      <NewFolder />
      {data?.pages.map((page) =>
        page.content.map((folder, idx) => (
          <FolderItem
            key={idx}
            folderId={0}
            image="https://picsum.photos/500/500"
            imageCount={1}
            videoCount={1}
            lastUpdated={10}
            title={folder.name}
          />
        )),
      )}

      {hasNextPage ? (
        <div ref={ref} aria-label="다음 페이지를 불러오고 있습니다">
          로딩중
        </div>
      ) : (
        <div aria-label="마지막 페이지입니다" />
      )}
    </div>
  );
}

export default TabFolder;
