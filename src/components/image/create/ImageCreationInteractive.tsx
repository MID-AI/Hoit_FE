import ImageList from "@/components/create/image-list/ImageList";
import CreateImagePrompt from "./CreateImagePrompt";
import ImageCreateNavigation from "./ImageCreateNavigation";
import DisplayImage from "@/components/create/display/DisplayImage";

function ImageCreationInteractive() {
  return (
    <section className="flex h-screen w-full flex-col items-center justify-between gap-24 p-6 md:p-24">
      <div className="flex h-full w-full flex-col justify-between gap-24 md:flex-row">
        <ImageCreateNavigation />
        <DisplayImage />
        <ImageList />
      </div>

      <CreateImagePrompt />
    </section>
  );
}

export default ImageCreationInteractive;
