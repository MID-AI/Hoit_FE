import { getImageDetail } from "@/apis/services/images";
import { QUERY_KEY } from "@/constants/query-key";
import { useQuery } from "@tanstack/react-query";

export default function useGetImageDetail(imageId: number) {
  return useQuery({
    queryKey: QUERY_KEY.IMAGE.DETAIL(imageId),
    queryFn: () => getImageDetail(imageId),
    staleTime: 1000 * 60 * 30,
    gcTime: 1000 * 60 * 60,
  });
}
