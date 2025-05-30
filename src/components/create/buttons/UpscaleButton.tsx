import useImageUpscale from "@/hooks/create/useImageUpscale";
import CreationButtonWrapper from "./CreationButtonWrapper";
import UpscaleIcon from "@/assets/create/upscale_icon.svg";

function UpscaleButton({
  index,
  taskId,
}: {
  index: number | null;
  taskId: string | null;
}) {
  const imageUpscale = useImageUpscale();
  const handleClick = async () => {
    try {
      if (taskId === null || index === null) {
        console.warn("업스케일할 이미지를 선택해주세요");
        return;
      }
      await imageUpscale.handleImageUpscale(taskId, String(index));
    } catch (error) {
      console.error("이미지 업스케일 실패", error);
    }
  };
  return (
    <CreationButtonWrapper
      icon={<UpscaleIcon />}
      tooltip="업스케일"
      onClick={handleClick}
    />
  );
}

export default UpscaleButton;
