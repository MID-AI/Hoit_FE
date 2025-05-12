import ImageList from "@/components/create/image-list/image-list";
import CreateImagePrompt from "./create-image-prompt";
import ImageCreateNavigation from "./image-create-navigation";
import DisplayWrapper from "@/components/create/display/display-wrapper";
import DisplayImage from "@/components/create/display/display-image";

function ImageCreationInteractive() {
  return (
    <>
      <div className="flex h-full w-full justify-between">
        <ImageCreateNavigation />
        <DisplayWrapper>
          <DisplayImage />
        </DisplayWrapper>
        <ImageList />
      </div>
      <CreateImagePrompt />
    </>
  );
}

export default ImageCreationInteractive;
