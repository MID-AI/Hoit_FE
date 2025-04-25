import NextIcon from "@/assets/icon/next.svg";
import PrevIcon from "@/assets/icon/prev.svg";
import Image from "next/image";
import MediaNavWrapper from "./media-nav-wrapper";
import { ImageType } from "@/@types/images";
import Link from "next/link";

interface Props {
  isModal?: boolean;
  image: ImageType;
  context?: readonly unknown[];
  folderId?: number;
  prevId?: number;
  nextId?: number;
  isList?: boolean;
}

function MediaWrapper({
  isModal,
  image,
  context,
  prevId,
  nextId,
  isList,
}: Props) {
  return (
    <main className="flex h-screen w-full items-center justify-center gap-200 py-95">
      <div className="ml-180 flex items-center justify-between gap-64">
        {prevId && (
          <Link href={`/${context}/${prevId}`}>
            <PrevIcon />
          </Link>
        )}
        <Image
          src={image.url}
          alt="이미지"
          width={800}
          height={800}
          className="max-h-800 max-w-650 object-contain"
        />
        {nextId && (
          <Link href={`/${context}/${nextId}`}>
            <NextIcon />
          </Link>
        )}
      </div>

      <MediaNavWrapper
        isModal={isModal}
        image={image}
        context={context}
        isList={isList}
      />
    </main>
  );
}

export default MediaWrapper;
