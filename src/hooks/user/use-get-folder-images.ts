import { ImageType, PageNation } from "@/@types/images";
import { getFolderImages } from "@/apis/services/project";
import { QUERY_KEY } from "@/constants/query-key";
import { InfiniteData, useInfiniteQuery } from "@tanstack/react-query";

export default function useGetFolderImages(
  folderId: number,
  size?: number,
  searchValue?: string,
) {
  return useInfiniteQuery<
    PageNation<ImageType>,
    Error,
    InfiniteData<PageNation<ImageType>>,
    ReturnType<typeof QUERY_KEY.MY.PROJECT_FOLDER_IMAGES>,
    string | null
  >({
    queryKey: QUERY_KEY.MY.PROJECT_FOLDER_IMAGES(folderId),
    queryFn: ({ pageParam }) =>
      getFolderImages({ cursor: pageParam, size, searchValue, folderId }),
    initialPageParam: null,
    getNextPageParam: (lastPage) => lastPage.nextPageCursor ?? undefined,
    getPreviousPageParam: (firstPage) =>
      firstPage.previousPageCursor ?? undefined,
  });
}
