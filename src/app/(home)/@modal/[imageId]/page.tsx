import React from "react";
import ImageDetailPage from "../../[imageId]/page";
import Modal from "@/components/common/modal/modal";

function ImageDetailModalPage(props: any) {
  return (
    <Modal>
      <ImageDetailPage {...props} />
    </Modal>
  );
}

export default ImageDetailModalPage;
