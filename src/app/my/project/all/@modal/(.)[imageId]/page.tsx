import React from "react";
import TabAllImageDetailPage from "../../[imageId]/page";
import PageModal from "@/components/common/modal/PageModal";

function FolderImageDetailModalPage(props: any) {
  return (
    <PageModal>
      <TabAllImageDetailPage {...props} />
    </PageModal>
  );
}

export default FolderImageDetailModalPage;
