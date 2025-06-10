import { ImageType } from "@/@types/images";
import { deleteMediaPosting, postMediaPosting } from "@/apis/services/media";
import { QUERY_KEY } from "@/constants/query-key";
import { errorDialogAtom } from "@/stores/error-atom";
import handleErrorDialog from "@/utils/handleErrorDialog";
import { getRecentFolderIds } from "@/utils/query/getRecentFolderIds";
import { updateIfExists } from "@/utils/query/updateIfExists";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSetAtom } from "jotai";

function usePostingMediaMutation() {
  const queryClient = useQueryClient();
  const setErrorDialog = useSetAtom(errorDialogAtom);

  return useMutation({
    mutationFn: ({
      imageId,
      isShared,
    }: {
      imageId: number;
      isShared: boolean | null;
    }) => (isShared ? deleteMediaPosting(imageId) : postMediaPosting(imageId)),

    onMutate: async ({ imageId, isShared }) => {
      const prevCache: Record<string, unknown> = {};

      const updateImageList = (old: any) => {
        if (!old || !("pages" in old)) return old;
        return {
          ...old,
          pages: old.pages.map((page: any) => ({
            ...page,
            content: page.content.map((img: ImageType) =>
              img.id === imageId
                ? {
                    ...img,
                    isShared: img.isShared ? false : true,
                  }
                : img,
            ),
          })),
        };
      };

      const updateFolderImageList = (old: any) => {
        if (!old || !("pages" in old)) return old;

        return {
          ...old,
          pages: old.pages.map((page: any) => ({
            ...page,
            images: {
              ...page.images,
              content: page.images.content.map((img: ImageType) =>
                img.id === imageId
                  ? {
                      ...img,
                      isShared: img.isShared ? false : true,
                    }
                  : img,
              ),
            },
          })),
        };
      };

      updateIfExists({
        queryClient,
        key: QUERY_KEY.MY.ACTIVITY_LIKES,
        updater: updateImageList,
        prevCache,
      });
      updateIfExists({
        queryClient,
        key: QUERY_KEY.MY.ACTIVITY_POST,
        updater: updateImageList,
        prevCache,
        shouldRefetch: !isShared,
      });
      updateIfExists({
        queryClient,
        key: QUERY_KEY.MY.PROJECT(),
        updater: updateImageList,
        prevCache,
      });
      updateIfExists({
        queryClient,
        key: QUERY_KEY.IMAGE.LIST,
        updater: updateImageList,
        prevCache,
      });

      const recentFolders = getRecentFolderIds(queryClient, 10);
      recentFolders.forEach((folderId) => {
        updateIfExists({
          queryClient,
          key: QUERY_KEY.MY.PROJECT_FOLDER_IMAGES(folderId),
          updater: updateFolderImageList,
          prevCache,
        });
      });

      /**
       * 수정 작업
       * 이미지 상세 페이지에서 캐시 업데이트 추가
       */
      // updateIfExists(["image-detail", imageId], (old: any) => ({
      //   ...old,
      //   isShared: ...
      //   },
      // }));

      return { prevCache };
    },

    onError: (error: any, _, context) => {
      if (context?.prevCache) {
        Object.entries(context.prevCache).forEach(([key, value]) => {
          queryClient.setQueryData(JSON.parse(key), value);
        });
      }

      handleErrorDialog(error, setErrorDialog);
    },
  });
}

export default usePostingMediaMutation;
