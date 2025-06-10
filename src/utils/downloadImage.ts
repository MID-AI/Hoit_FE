/**
 * 이미지 url을 받아 브라우저에서 다운로드 하는 함수
 * @param imageUrl 다운로드 할 이미지 url
 * @param filename 저장할 파일 이름 (기본값: hoit-[파일이름])
 */
export const downloadImage = async (
  imageUrl: string,
  filename?: string | number,
) => {
  try {
    const res = await fetch(imageUrl, { mode: "cors" });
    if (!res.ok) throw new Error("이미지를 불러오지 못했습니다.");

    const blob = await res.blob();
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = `hoit-${filename || imageUrl}`;
    a.click();

    URL.revokeObjectURL(url);
  } catch (error) {
    console.error("이미지 다운로드 실패:", error);
    alert("이미지 다운로드에 실패했습니다.");
  }
};

/**
 * url 변경 시 적용할 다운로드 함수(도메인이 맞지 않아 적용 불가)
 * @param url
 * @param filename
 */
// export function downloadImage(url: string, filename: string) {
//   const link = document.createElement("a");
//   link.href = url;
//   link.download = filename;
//   document.body.appendChild(link);
//   link.click();
//   document.body.removeChild(link);
// }
