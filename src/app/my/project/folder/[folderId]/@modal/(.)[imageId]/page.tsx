import Modal from "@/components/common/modal/modal";
import React from "react";
import FolderImageDetailPage from "../../[imageId]/page";

function FolderImageDetailModalPage(props: any) {
  return (
    <Modal>
      <FolderImageDetailPage {...props} isModal={true} />
    </Modal>
  );
}

export default FolderImageDetailModalPage;
