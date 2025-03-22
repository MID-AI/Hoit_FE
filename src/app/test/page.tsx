import Link from "next/link";

function Test() {
  return (
    <div>
      <h2>구글 로그인 테스트</h2>
      <Link href="/oauth2/authorization/google">구글 로그인</Link>
    </div>
  );
}

export default Test;
