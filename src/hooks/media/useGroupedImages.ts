import type { ImageType } from "@/@types/images";
import groupImagesByDate from "@/utils/groupImagesByDate";
import { useMemo } from "react";

/**
 * 이미지 배열을 날짜 기준으로 그룹핑하여 반환합니다.
 * useMemo로 감싸서 images가 바뀔 때만 계산되도록 최적화합니다.
 *
 * @param images - 그룹핑할 이미지 배열
 * @returns 날짜별로 그룹핑된 이미지 객체 (key: 날짜, value: 이미지 배열)
 */
export default function useGroupedImages(images: ImageType[]) {
  return useMemo(() => groupImagesByDate(images), [images]);
}
