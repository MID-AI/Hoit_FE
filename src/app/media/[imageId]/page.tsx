import { getImageDetail } from "@/apis/services/images";
import MediaDetailContainer from "@/components/media/page/MediaDetailContainer";
import DataPrefetch from "@/components/query/DataPrefetch";
import { QUERY_KEY } from "@/constants/query-key";

async function page({
  params,
}: {
  params: Promise<{
    imageId: string;
  }>;
}) {
  const { imageId } = await params;
  const id = Number(imageId);
  return (
    <section className="p-12 sm:p-24 lg:p-64">
      <DataPrefetch
        queryKey={QUERY_KEY.IMAGE.DETAIL(id)}
        queryFn={() => getImageDetail(id)}
      >
        <MediaDetailContainer imageId={id} />
      </DataPrefetch>
    </section>
  );
}

export default page;
