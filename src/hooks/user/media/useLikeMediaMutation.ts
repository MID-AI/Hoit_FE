import type { ImageType } from "@/@types/images";
import { deleteMediaLike, postMediaLike } from "@/apis/services/media";
import { QUERY_KEY } from "@/constants/query-key";
import { errorDialogAtom } from "@/stores/error-atom";
import handleErrorDialog from "@/utils/handleErrorDialog";
import { getRecentFolderIds } from "@/utils/query/getRecentFolderIds";
import { updateIfExists } from "@/utils/query/updateIfExists";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSetAtom } from "jotai";

function useLikeMediaMutation() {
  const queryClient = useQueryClient();
  const setErrorDialog = useSetAtom(errorDialogAtom);

  return useMutation({
    mutationFn: ({
      imageId,
      isLiked,
    }: {
      imageId: number;
      isLiked: boolean;
    }) => (isLiked ? deleteMediaLike(imageId) : postMediaLike(imageId)),

    onMutate: async ({ imageId, isLiked }) => {
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
                    likeCount: img.likeCount + (img.isLiked ? -1 : 1),
                    isLiked: !img.isLiked,
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
                      likeCount: img.likeCount + (img.isLiked ? -1 : 1),
                      isLiked: !img.isLiked,
                    }
                  : img,
              ),
            },
          })),
        };
      };

      /**
       * 좋아요 - 데이터 리패칭
       * 좋아요 취소 - 캐시 업데이트
       * 업데이트 페이지: 내 활동(좋아요, 포스트) 내 프로젝트(전체, 폴더 내 이미지), 홈
       */
      updateIfExists({
        queryClient,
        key: QUERY_KEY.MY.ACTIVITY_LIKES,
        updater: updateImageList,
        prevCache,
        shouldRefetch: !isLiked,
      });
      updateIfExists({
        queryClient,
        key: QUERY_KEY.MY.PROJECT(),
        updater: updateImageList,
        prevCache,
      });
      updateIfExists({
        queryClient,
        key: QUERY_KEY.MY.ACTIVITY_POST,
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
      //   like: {
      //     likeStatus: old.like.likeStatus === 1 ? 0 : 1,
      //     likes: old.like.likes + (old.like.likeStatus === 1 ? -1 : 1),
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

export default useLikeMediaMutation;
