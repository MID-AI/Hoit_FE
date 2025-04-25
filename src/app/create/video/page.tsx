import LoginChecker from "@/components/common/auth/login-checker";
import ImageList from "@/components/create/image-list/image-list";
import CreateVideoContainer from "@/components/video/create/create-video-container";
import CreateVideoPrompt from "@/components/video/create/create-video-prompt";
import CreateVideoStateCleanup from "@/components/video/create/create-video-state-cleanup";

function VideoCreation() {
  return (
    <main className="flex h-screen w-full flex-col justify-between gap-24 p-24">
      <CreateVideoStateCleanup />
      <LoginChecker />
      <section className="flex h-full w-full justify-between">
        <CreateVideoContainer />
        <ImageList />
      </section>
      <CreateVideoPrompt />
    </main>
  );
}

export default VideoCreation;
