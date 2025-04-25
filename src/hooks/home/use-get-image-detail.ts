import { getImageDetail } from "@/apis/services/images";
import { QUERY_KEY } from "@/constants/query-key";
import { useQuery } from "@tanstack/react-query";

function useGetImageDetail(imageId: number, options?: any) {
  return useQuery({
    queryKey: QUERY_KEY.IMAGE.DETAIL(imageId),
    queryFn: () => getImageDetail(imageId),
    ...options,
  });
}

export default useGetImageDetail;
