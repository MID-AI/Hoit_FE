import Modal from "@/components/common/modal/Modal";
import React from "react";
import TabAllImageDetailPage from "../../[imageId]/page";

function FolderImageDetailModalPage(props: any) {
  return (
    <Modal>
      <TabAllImageDetailPage {...props} />
    </Modal>
  );
}

export default FolderImageDetailModalPage;
