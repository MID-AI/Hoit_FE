import { getFolderImages } from "@/apis/services/project";
import InfinitePrefetch from "@/components/query/infinite-prefetch";
import { QUERY_KEY } from "@/constants/query-key";
import React from "react";
import FolderImages from "./images/folder-images";

function FolderImagesContainer({ folderId }: { folderId: number }) {
  return (
    <InfinitePrefetch
      queryKey={QUERY_KEY.MY.PROJECT_FOLDER_IMAGES(folderId)}
      queryFn={({ pageParam = 0 }) => getFolderImages(pageParam, folderId)}
    >
      <FolderImages folderId={folderId} />
    </InfinitePrefetch>
  );
}

export default FolderImagesContainer;
