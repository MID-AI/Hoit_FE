import Display from "@/components/create/display/display";
import ImageList from "@/components/create/image-list/image-list";
import Prompt from "@/components/create/prompt/prompt";
import ImageCreateNavigation from "@/components/image/create/image-create-navigation";

function ImageCreation() {
  return (
    <main className="flex h-screen w-full flex-col justify-between gap-24 p-24">
      <section className="flex h-full w-full justify-between">
        <ImageCreateNavigation />
        <Display />
        <ImageList />
      </section>
      <Prompt placeholder="나만의 상상의 세계를 펼쳐보세요!" />
    </main>
  );
}

export default ImageCreation;
