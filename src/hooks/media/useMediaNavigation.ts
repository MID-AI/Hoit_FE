import type { ImageType } from "@/@types/images";
import { useRouter, useSearchParams } from "next/navigation";
import { useMemo } from "react";

/**
 * 현재 URL 쿼리의 mediaView 값(이미지 ID)을 기준으로
 * 현재 미디어 위치(index)를 찾고, 이전/다음 미디어로 이동하는 기능을 제공합니다.
 *
 * @param images - 현재 전체 이미지 리스트
 * @param basePath - 닫기 시 이동한 기본 경로
 * @returns mediaId, showNext, showPrev, closeModal 함수
 */
export default function useMediaNavigation(
  images: ImageType[],
  basePath: string,
) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const mediaId = searchParams.get("mediaView");

  const id = Number(mediaId);

  const idToIndexMap = useMemo(() => {
    const map = new Map<number, number>();
    images.forEach((img, i) => map.set(img.id, i));
    return map;
  }, [images]);

  const mediaIndex = idToIndexMap.get(id);
  const hasNext = mediaIndex !== undefined && mediaIndex < images.length - 1;
  const hasPrev = mediaIndex !== undefined && mediaIndex > 0;
  const showNext = () => {
    if (mediaIndex === undefined) return;
    const next = images[mediaIndex + 1];
    if (next) router.push(`?mediaView=${next.id}`, { scroll: false });
  };
  const showPrev = () => {
    if (mediaIndex === undefined) return;
    const prev = images[mediaIndex - 1];
    if (prev) router.push(`?mediaView=${prev.id}`, { scroll: false });
  };

  return {
    mediaId: id,
    showNext,
    showPrev,
    hasNext,
    hasPrev,
    closeModal: () => router.push(basePath, { scroll: false }),
  };
}
