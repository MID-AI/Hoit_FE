import DownloadButton from "./DownloadButton";
import ImageToVideo from "./ImageToVideo";
import UpscaleButton from "./UpscaleButton";

function CreationButtonsWrapper({ image }: { image: string }) {
  return (
    <div className="absolute bottom-12 right-12 flex items-center gap-4">
      <ImageToVideo image={image} />
      <UpscaleButton />
      <DownloadButton image={image} />
    </div>
  );
}

export default CreationButtonsWrapper;
