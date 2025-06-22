import type { ImageType } from "@/@types/images";
import MediaPrompt from "../MediaPrompt";
import MediaRatio from "../MediaRatio";
import MediaLikes from "../MediaLikes";
import MediaShare from "../MediaShare";
import Image from "next/image";

function MediaDetailInfo(props: ImageType) {
  return (
    <div className="w-full max-w-450">
      <div className="mb-29 flex items-center justify-between">
        <div className="flex items-center gap-10">
          <Image
            src={props.member.profileImage}
            alt={`${props.member.nickname}의 프로필이미지`}
            height={24}
            width={24}
            className="aspect-square shrink rounded-full"
            unoptimized
          />
          <span>{props.member.nickname}</span>
        </div>

        <MediaShare isShared />
      </div>
      <MediaPrompt prompt={props.prompt} />
      <MediaRatio />
      <MediaLikes
        imageId={props.id}
        isLiked={props.isLiked}
        likeCount={props.likeCount}
        className="mt-41 rounded-24 border bg-coolGray-200 px-18 py-10"
      />
    </div>
  );
}

export default MediaDetailInfo;
