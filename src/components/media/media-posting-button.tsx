import PostingIcon from "@/assets/icon/post.svg";
import usePostingMediaMutation from "@/hooks/user/media/use-posting-media-mutation";
import cn from "@/utils/cn";

interface Props {
  imageId: number;
  context: readonly unknown[] | undefined;
  isList?: boolean;
  isPosted?: boolean | null;
  className?: string;
}

function MediaPostingButton({
  imageId,
  context,
  isList,
  isPosted,
  className,
}: Props) {
  const { mutate } = usePostingMediaMutation({
    queryKey: context,
    isList: isList!,
  });

  const handleImagePosting = () => {
    if (isPosted === null) return;
    mutate(imageId);
  };

  return (
    <button
      onClick={handleImagePosting}
      className={cn(
        "text-type-14-medium flex items-center gap-8 rounded-24 bg-cBlue-400 px-15 py-10 text-white",
        className,
      )}
    >
      <PostingIcon />
      {isPosted ? "포스팅 취소" : "포스팅하기"}
    </button>
  );
}

export default MediaPostingButton;
