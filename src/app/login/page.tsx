import { BASE_URL } from "@/apis/client/APIClient";
import { CLIENT_URL } from "@/apis/client/baseUrl";
import API_ROUTES from "@/apis/constants/routes";
import NoItems from "@/components/common/card/no-items";

async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ redirect: string | undefined }>;
}) {
  const { redirect } = await searchParams;
  const uri = redirect === "/" ? "" : `?redirect_uri=${CLIENT_URL}${redirect}`;

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-44">
      <NoItems text="이미지와 영상을 생성해 보세요!" className="h-auto" />
      <a
        href={`${BASE_URL}/${API_ROUTES.LOGIN}${uri}`}
        rel="noopener noreferrer"
        className="flex w-fit rounded-30 bg-[linear-gradient(86deg,_#39434A_-41.17%,_#279AF2_56.08%)] px-60 py-12 text-Type-20-bold text-white"
      >
        로그인하기
      </a>
    </div>
  );
}

export default LoginPage;
