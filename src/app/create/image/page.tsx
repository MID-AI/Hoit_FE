import CreateImageStateCleanup from "@/components/image/create/CreateImageStateCleanup";
import LoginChecker from "@/components/common/auth/LoginChecker";
import ImageCreationInteractive from "@/components/image/create/ImageCreationInteractive";

function ImageCreation() {
  return (
    <main className="flex h-screen w-full flex-col justify-between gap-24 p-24">
      <CreateImageStateCleanup />
      <LoginChecker />
      <ImageCreationInteractive />
    </main>
  );
}

export default ImageCreation;
