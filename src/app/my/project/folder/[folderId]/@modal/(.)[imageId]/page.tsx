import Modal from "@/components/common/modal/Modal";
import React from "react";
import FolderImageDetailPage from "../../[imageId]/page";

function FolderImageDetailModalPage(props: any) {
  return (
    <Modal>
      <FolderImageDetailPage {...props} />
    </Modal>
  );
}

export default FolderImageDetailModalPage;
