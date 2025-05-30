import React from "react";
import TabAllImageDetailPage from "../../[imageId]/page";
import Modal from "@/components/common/modal/Modal";

function FolderImageDetailModalPage(props: any) {
  return (
    <Modal>
      <TabAllImageDetailPage {...props} />
    </Modal>
  );
}

export default FolderImageDetailModalPage;
