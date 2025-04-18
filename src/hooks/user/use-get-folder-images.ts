import { getFolderImages } from "@/apis/services/project";
import { QUERY_KEY } from "@/constants/query-key";
import { useInfiniteQuery } from "@tanstack/react-query";

export default function useGetFolderImages(folderId: number) {
  return useInfiniteQuery({
    queryKey: QUERY_KEY.MY.PROJECT_FOLDER_IMAGES(folderId),
    queryFn: ({ pageParam = 0 }) => getFolderImages(pageParam, folderId),
    initialPageParam: 0,
    getNextPageParam: (lastPage, pages) => {
      return !lastPage.last ? pages.length : undefined;
    },
  });
}
