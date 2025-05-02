"use client";

import ImageList from "@/components/create/image-list/image-list";
import CreateImageContainer from "./create-image-container";
import CreateImagePrompt from "./create-image-prompt";
import useImageCreationSSE from "@/hooks/user/media/use-image-creation-sse";
import { useQueryClient } from "@tanstack/react-query";
import { UserType } from "@/@types/auth";
import { QUERY_KEY } from "@/constants/query-key";

function ImageCreationInteractive() {
  const queryClient = useQueryClient();
  const user = queryClient.getQueryData<UserType>(QUERY_KEY.MY.PROFILE);
  useImageCreationSSE(user?.id);
  return (
    <>
      <div className="flex h-full w-full justify-between">
        <CreateImageContainer />
        <ImageList />
      </div>
      <CreateImagePrompt />
    </>
  );
}

export default ImageCreationInteractive;
