import DownloadButton from "./DownloadButton";
import ImageToVideo from "./ImageToVideo";
import UpscaleButton from "./UpscaleButton";

function CreationButtonsWrapper({
  image,
  isUpscaled,
  taskId,
  index,
}: {
  image: string;
  isUpscaled: boolean;
  taskId: string | null;
  index: number | null;
}) {
  return (
    <div className="absolute bottom-12 right-12 flex items-center gap-4">
      <ImageToVideo image={image} />
      {isUpscaled || <UpscaleButton taskId={taskId} index={index} />}
      <DownloadButton image={image} />
    </div>
  );
}

export default CreationButtonsWrapper;
