import { Button } from "@/components/ui/button";
import Image from "next/image";
import PlayStopIcon from "@/assets/create/play_stop.svg";

function DisplayImage({ image }: { image: string }) {
  return (
    <div>
      <Image key={image} src={image} alt="image" width={800} height={800} />
      <Button className="box-border bg-coolGray-300 p-5 hover:border hover:bg-white">
        <PlayStopIcon />
      </Button>
    </div>
  );
}

export default DisplayImage;
