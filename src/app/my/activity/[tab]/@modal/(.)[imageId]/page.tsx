import ActivityImagePage from "../../[imageId]/page";
import PageModal from "@/components/common/modal/PageModal";

function ActivityImageModalPage(props: any) {
  return (
    <PageModal>
      <ActivityImagePage {...props} />
    </PageModal>
  );
}

export default ActivityImageModalPage;
