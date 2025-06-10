"use client";

import useGetFolder from "@/hooks/user/project/folder/useGetFolder";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import FolderIcon from "@/assets/my/empty_folder.svg";
import cn from "@/utils/cn";
import ToolbarNewFolder from "./ToolbarNewFolder";

function ToolbarFolderList({
  folderId,
  setFolderId,
}: {
  folderId: number | null;
  setFolderId: (folderId: number) => void;
}) {
  const [newFolder, setNewFolder] = useState(false);
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
    <>
      <div>
        <div className="mb-10 flex justify-between px-7 text-coolGray-500">
          <span>{newFolder ? "새로운 폴더 만들기" : "전체폴더"}</span>
          <button onClick={() => setNewFolder(!newFolder)}>
            {newFolder ? "취소" : "+폴더 추가버튼"}
          </button>
        </div>
        {newFolder && <ToolbarNewFolder />}
      </div>

      <div
        className={cn(
          "flex h-full max-h-280 flex-col gap-9 overflow-y-scroll",
          newFolder && "mt-28",
        )}
      >
        {data?.pages.map((page) =>
          page.content.map((folder) => (
            <div
              key={folder.id}
              onClick={() => setFolderId(folder.id)}
              className={cn(
                "box-border flex items-center gap-20 rounded-10 border border-transparent bg-white px-7 py-5 text-Type-18-medium text-coolGray-700",
                folderId === folder.id && "border-cBlue-400 bg-cBlue-50",
              )}
            >
              <FolderIcon className="h-31 w-39 text-coolGray-500" />
              {folder.name}
            </div>
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
    </>
  );
}

export default ToolbarFolderList;
