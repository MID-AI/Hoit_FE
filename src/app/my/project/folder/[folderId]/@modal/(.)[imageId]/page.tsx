import React from "react";
import FolderImageDetailPage from "../../[imageId]/page";
import Modal from "@/components/common/modal/Modal";

function FolderImageDetailModalPage(props: any) {
  return (
    <Modal>
      <FolderImageDetailPage {...props} />
    </Modal>
  );
}

export default FolderImageDetailModalPage;
