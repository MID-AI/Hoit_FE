import { ImageType } from "@/@types/images";
import { postMediaPosting } from "@/apis/services/media";
import { errorDialogAtom } from "@/stores/error-atom";
import handleErrorDialog from "@/utils/handleErrorDialog";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSetAtom } from "jotai";

function usePostingMediaMutation({
  queryKey,
  isList,
}: {
  queryKey?: readonly unknown[];
  isList: boolean;
}) {
  const queryClient = useQueryClient();
  const setErrorDialog = useSetAtom(errorDialogAtom);

  return useMutation({
    mutationFn: (imageId: number) => postMediaPosting(imageId),

    onMutate: async (imageId) => {
      if (!queryKey) return;

      const previous = queryClient.getQueryData(queryKey);
      queryClient.setQueryData(queryKey, (old: any) => {
        if (!old) return old;

        if (isList && "pages" in old) {
          return {
            ...old,
            pages: old.pages.map((page: any) => ({
              ...page,
              content: page.content.map((img: ImageType) =>
                img.id === imageId
                  ? {
                      ...img,
                      isPosted: !img.isPosted,
                    }
                  : img,
              ),
            })),
          };
        }

        if (!isList && old?.id === imageId) {
          return {
            ...old,
            isPosted: !old.isPosted,
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

export default usePostingMediaMutation;
