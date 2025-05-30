import ImageList from "@/components/create/image-list/ImageList";
import CreateImagePrompt from "./CreateImagePrompt";
import ImageCreateNavigation from "./ImageCreateNavigation";
import DisplayImage from "@/components/create/display/DisplayImage";

function ImageCreationInteractive() {
  return (
    <>
      <div className="flex h-full w-full justify-between">
        <ImageCreateNavigation />
        <DisplayImage />
        <ImageList />
      </div>
      <CreateImagePrompt />
    </>
  );
}

export default ImageCreationInteractive;
