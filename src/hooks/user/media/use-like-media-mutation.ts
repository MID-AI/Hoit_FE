import type { ImageType } from "@/@types/images";
import { postMediaLike } from "@/apis/services/media";
import { errorDialogAtom } from "@/stores/error-atom";
import handleErrorDialog from "@/utils/handleErrorDialog";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSetAtom } from "jotai";

function useLikeMediaMutation({
  queryKey,
  isList,
}: {
  queryKey?: readonly unknown[];
  isList: boolean;
}) {
  const queryClient = useQueryClient();
  const setErrorDialog = useSetAtom(errorDialogAtom);

  return useMutation({
    mutationFn: (imageId: number) => postMediaLike(imageId),

    onMutate: async (imageId) => {
      if (!queryKey) return;

      const previous = queryClient.getQueryData(queryKey);

      queryClient.setQueryData(queryKey, (old: any) => {
        if (!old) return old;

        if (isList && "pages" in old) {
          // 리스트 캐시 업데이트
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
        }

        if (!isList && "like" in old) {
          // 상세 캐시 업데이트
          const newStatus = old.like.likeStatus === 1 ? 0 : 1;
          return {
            ...old,
            like: {
              likeStatus: newStatus,
              likes: old.like.likes + (newStatus === 1 ? 1 : -1),
            },
          };
        }

        return old;
      });

      return { previous };
    },

    onError: (error: any, _, context) => {
      if (queryKey && context?.previous) {
        queryClient.setQueryData(queryKey, context.previous);
      }

      handleErrorDialog(error, setErrorDialog);
    },
  });
}

export default useLikeMediaMutation;
