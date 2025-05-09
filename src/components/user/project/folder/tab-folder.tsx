"use client";

import useGetFolder from "@/hooks/user/project/folder/use-get-folder";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import NewFolder from "./new-folder";
import FolderItem from "./folder-item";

function TabFolder() {
  const { data, isLoading, fetchNextPage, hasNextPage } = useGetFolder();
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
            id={folder.id}
            name={folder.name}
            imageCount={folder.imageCount}
            videoCount={folder.videoCount}
            coverImage={folder.coverImage}
            modifiedAt={folder.modifiedAt}
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
