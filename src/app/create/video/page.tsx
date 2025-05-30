import LoginChecker from "@/components/common/auth/LoginChecker";
import DisplayVideo from "@/components/create/display/DisplayVideo";
import DisplayWrapper from "@/components/create/display/DisplayWrapper";
import ImageList from "@/components/create/image-list/ImageList";
import CreateVideoPrompt from "@/components/video/create/CreateVideoPrompt";
import CreateVideoStateCleanup from "@/components/video/create/CreateVideoStateCleanup";
import VideoCreateNavigation from "@/components/video/create/VideoCreateNavigation";

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
