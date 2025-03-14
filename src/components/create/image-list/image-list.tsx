import Image from "next/image";

function ImageList() {
  return (
    <div className="flex flex-col justify-center gap-12">
      <Image
        src="https://picsum.photos/500/500"
        alt="image"
        width={92}
        height={92}
        className="rounded-10"
      />
      <Image
        src="https://picsum.photos/500/500"
        alt="image"
        width={92}
        height={92}
        className="rounded-10"
      />
      <Image
        src="https://picsum.photos/500/500"
        alt="image"
        width={92}
        height={92}
        className="rounded-10"
      />
    </div>
  );
}

export default ImageList;
