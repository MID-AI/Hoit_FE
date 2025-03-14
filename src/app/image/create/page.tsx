import Navigation from "@/components/image/create/navigation/navigation";

function ImageCreation() {
  return (
    <main className="p-24">
      <div>
        <Navigation />
        <div>이미지 본문</div>
        <div>이미지 히스토리 리스트</div>
      </div>
      <div>프롬프트 창</div>
    </main>
  );
}

export default ImageCreation;
