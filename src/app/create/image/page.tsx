import CreateImageStateCleanup from "@/components/image/create/create-image-state-cleanup";
import LoginChecker from "@/components/common/auth/login-checker";
import ImageCreationInteractive from "@/components/image/create/image-creation-interactive";

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
