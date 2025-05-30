import React from "react";
import FolderImageDetailPage from "../../[imageId]/page";
import PageModal from "@/components/common/modal/PageModal";

function FolderImageDetailModalPage(props: any) {
  return (
    <PageModal>
      <FolderImageDetailPage {...props} />
    </PageModal>
  );
}

export default FolderImageDetailModalPage;
