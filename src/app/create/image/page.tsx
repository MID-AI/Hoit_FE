import CreateImageStateCleanup from "@/components/image/create/CreateImageStateCleanup";
import LoginChecker from "@/components/common/auth/LoginChecker";
import ImageCreationInteractive from "@/components/image/create/ImageCreationInteractive";

function ImageCreation() {
  return (
    <>
      <CreateImageStateCleanup />
      <LoginChecker />
      <ImageCreationInteractive />
    </>
  );
}

export default ImageCreation;
