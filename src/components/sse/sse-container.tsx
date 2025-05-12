"use client";

import { UserType } from "@/@types/auth";
import { QUERY_KEY } from "@/constants/query-key";
import useUserSSE from "@/hooks/user/sse/use-user-sse";
import { useQueryClient } from "@tanstack/react-query";

function SSEContainer() {
  const queryClient = useQueryClient();
  const user = queryClient.getQueryData<UserType>(QUERY_KEY.MY.PROFILE);
  useUserSSE(user?.id ?? null);
  return null;
}

export default SSEContainer;
