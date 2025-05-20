import CreationButtonWrapper from "./CreationButtonWrapper";
import UpscaleIcon from "@/assets/create/upscale_icon.svg";

function UpscaleButton() {
  return <CreationButtonWrapper icon={<UpscaleIcon />} tooltip="업스케일" />;
}

export default UpscaleButton;
