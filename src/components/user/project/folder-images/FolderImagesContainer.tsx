import { getFolderImages } from "@/apis/services/project";
import InfinitePrefetch from "@/components/query/InfinitePrefetch";
import { QUERY_KEY } from "@/constants/query-key";
import React from "react";
import FolderImages from "./images/FolderImages";

function FolderImagesContainer({ folderId }: { folderId: number }) {
  return (
    <InfinitePrefetch
      queryKey={QUERY_KEY.MY.PROJECT_FOLDER_IMAGES(folderId)}
      queryFn={({ pageParam = null }) =>
        getFolderImages({ cursor: pageParam, folderId })
      }
    >
      <FolderImages folderId={folderId} />
    </InfinitePrefetch>
  );
}

export default FolderImagesContainer;
