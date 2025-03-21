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
      <Prompt placeholder="프롬프트 예시: 푸른 언덕 위에 있는 오두막, 그림책, 아크릴 물감 느낌, 화려한 색깔" />
    </main>
  );
}

export default ImageCreation;
