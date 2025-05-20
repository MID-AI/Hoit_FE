import LoginChecker from "@/components/common/auth/LoginChecker";
import DisplayVideo from "@/components/create/display/display-video";
import DisplayWrapper from "@/components/create/display/display-wrapper";
import ImageList from "@/components/create/image-list/ImageList";
import CreateVideoPrompt from "@/components/video/create/create-video-prompt";
import CreateVideoStateCleanup from "@/components/video/create/create-video-state-cleanup";
import VideoCreateNavigation from "@/components/video/create/video-create-navigation";

function VideoCreation() {
  return (
    <main className="flex h-screen w-full flex-col justify-between gap-24 p-24">
      <CreateVideoStateCleanup />
      <LoginChecker />
      <section className="flex h-full w-full justify-between">
        <VideoCreateNavigation />
        <DisplayWrapper>
          <DisplayVideo />
        </DisplayWrapper>
        <ImageList />
      </section>
      <CreateVideoPrompt />
    </main>
  );
}

export default VideoCreation;
