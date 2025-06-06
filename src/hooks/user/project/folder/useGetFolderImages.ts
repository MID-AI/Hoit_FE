import { getFolderImages } from "@/apis/services/project";
import { QUERY_KEY } from "@/constants/query-key";
import { useInfiniteQuery } from "@tanstack/react-query";

export default function useGetFolderImages(folderId: number, size?: number) {
  return useInfiniteQuery({
    queryKey: QUERY_KEY.MY.PROJECT_FOLDER_IMAGES(folderId),
    queryFn: ({ pageParam }: { pageParam?: string | null }) =>
      getFolderImages({ cursor: pageParam, size, folderId }),
    initialPageParam: null,
    getNextPageParam: (lastPage) => lastPage.images.nextPageCursor ?? undefined,
    getPreviousPageParam: (firstPage) =>
      firstPage.images.previousPageCursor ?? undefined,
  });
}
