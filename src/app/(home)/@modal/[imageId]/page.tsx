import React from "react";
import ImageDetailPage from "../../[imageId]/page";
import PageModal from "@/components/common/modal/PageModal";

function ImageDetailModalPage(props: any) {
  return (
    <PageModal>
      <ImageDetailPage {...props} />
    </PageModal>
  );
}

export default ImageDetailModalPage;
