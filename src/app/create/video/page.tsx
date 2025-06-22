import LoginChecker from "@/components/common/auth/LoginChecker";
import DisplayVideo from "@/components/create/display/DisplayVideo";

import VideoList from "@/components/create/image-list/VideoList";
import CreateVideoPrompt from "@/components/video/create/CreateVideoPrompt";
import CreateVideoStateCleanup from "@/components/video/create/CreateVideoStateCleanup";
import VideoCreateNavigation from "@/components/video/create/VideoCreateNavigation";

function VideoCreation() {
  return (
    <section className="flex h-screen w-full flex-col justify-between gap-24 p-24">
      <CreateVideoStateCleanup />
      <LoginChecker />
      <div className="flex h-full w-full justify-between">
        <VideoCreateNavigation />
        <DisplayVideo />
        <VideoList />
      </div>
      <CreateVideoPrompt />
    </section>
  );
}

export default VideoCreation;
