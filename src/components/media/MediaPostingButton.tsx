import PostingIcon from "@/assets/icon/post.svg";
import usePostingMediaMutation from "@/hooks/user/media/usePostingMediaMutation";
import cn from "@/utils/cn";

interface Props {
  imageId: number;
  context: readonly unknown[] | undefined;
  isList?: boolean;
  isShared?: boolean | null;
  className?: string;
}

function MediaPostingButton({
  imageId,
  context,
  isList = true,
  isShared,
  className,
}: Props) {
  const { mutate } = usePostingMediaMutation({
    queryKey: context,
    isList: isList,
  });

  /**수정 필요
   * 응답으로 평문이 옴 -> json 으로 수정 해야 함
   * 이후 포스트하기 테스트 필요
   */

  const handleImagePosting = () => {
    if (isShared === undefined) return;
    mutate({ imageId, isShared });
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
      {isShared ? "포스팅 취소" : "포스팅하기"}
    </button>
  );
}

export default MediaPostingButton;
