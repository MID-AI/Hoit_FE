function Test() {
  return (
    <div>
      <h2 className="text-Type-32-bold">비디오 테스트</h2>
      <div>옵션 - 자동재생, 크기조절</div>
      <div className="flex gap-10">
        <div>
          <h2 className="text-Type-20-bold">video - 기본</h2>
          <video width={500} height={500} controls preload="none">
            <source src="/test2.mp4" type="video/mp4" />
          </video>
        </div>

        <div>
          <h2 className="text-Type-20-bold">iframe</h2>
          <iframe src="/test1.mp4" allowFullScreen />
        </div>
      </div>
    </div>
  );
}

export default Test;
