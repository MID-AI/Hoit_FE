import type { ImageType } from "@/@types/images";
import Image from "next/image";
import MediaDetailInfo from "./MediaDetailInfo";

function MediaDetailSection(props: ImageType) {
  const isVideo = props.url.endsWith(".mp4");

  return (
    <section className="mb-143 grid w-full grid-flow-row flex-col items-center justify-center gap-32 lg:grid-flow-col lg:grid-cols-2 lg:gap-102">
      <div className="flex items-center justify-end">
        {isVideo ? (
          <video
            src={props.url}
            controls
            aria-label={`${props.member.nickname}의 비디오`}
            // className={`h-auto w-600 transition-opacity duration-300`}
          />
        ) : (
          <Image
            src={props.url}
            width={600}
            height={600}
            alt={`${props.member.nickname}의 이미지`}
            className="max-h-600 max-w-full object-contain"
            unoptimized
          />
        )}
      </div>

      <MediaDetailInfo {...props} />
    </section>
  );
}

export default MediaDetailSection;
