import Display from "@/components/create/display/display";
import ImageList from "@/components/create/image-list/image-list";
import Prompt from "@/components/create/prompt/prompt";
import VideoCreateNavigation from "@/components/video/create/video-create-navigation";

function VideoCreation() {
  return (
    <main className="flex h-screen w-full flex-col justify-between gap-24 p-24">
      <section className="flex h-full w-full justify-between">
        <VideoCreateNavigation />
        <Display />
        <ImageList />
      </section>
      <Prompt placeholder="나만의 상상의 세계를 펼쳐보세요!" />
    </main>
  );
}

export default VideoCreation;
