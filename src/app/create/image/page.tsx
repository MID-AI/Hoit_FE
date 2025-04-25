import ImageList from "@/components/create/image-list/image-list";
import CreateImageStateCleanup from "@/components/image/create/create-image-state-cleanup";
import LoginChecker from "@/components/common/auth/login-checker";
import CreateImageContainer from "@/components/image/create/create-image-container";
import CreateImagePrompt from "@/components/image/create/create-image-prompt";

function ImageCreation() {
  return (
    <main className="flex h-screen w-full flex-col justify-between gap-24 p-24">
      <CreateImageStateCleanup />
      <LoginChecker />
      <section className="flex h-full w-full justify-between">
        <CreateImageContainer />
        <ImageList />
      </section>
      <CreateImagePrompt />
    </main>
  );
}

export default ImageCreation;
