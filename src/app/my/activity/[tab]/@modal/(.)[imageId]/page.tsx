import Modal from "@/components/common/modal/modal";
import ActivityImagePage from "../../[imageId]/page";

function ActivityImageModalPage(props: any) {
  return (
    <Modal>
      <ActivityImagePage {...props} isModal={true} />
    </Modal>
  );
}

export default ActivityImageModalPage;
