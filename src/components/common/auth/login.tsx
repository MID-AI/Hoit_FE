import { Button } from "@/components/ui/button";
import { DialogContent, DialogTitle } from "@/components/ui/dialog";
import Logo from "@/assets/logo/logo.svg";
import GoogleLogo from "@/assets/logo/googleLogo.svg";

function Login() {
  return (
    <DialogContent className="px-38 py-44">
      <DialogTitle>구글 로그인</DialogTitle>
      <section className="flex gap-95">
        <div className="mt-45 flex flex-col items-center">
          <Logo className="mb-43" />
          <div className="mb-24 shrink-0 text-nowrap text-Type-20-medium text-coolGray-500">
            로그인 후 나만의 이미지를 만들어 보세요!
          </div>
          <Button className="flex items-center gap-33 rounded-50 border border-coolGray-300 bg-coolGray-50 py-15 pl-94 pr-103 text-Type-20-medium hover:border-blue-400 hover:bg-blue-50">
            <GoogleLogo />
            구글로 로그인하기
          </Button>
        </div>
        <div className="h-347 w-261 rounded-20 bg-gray-300">이미지 자리</div>
      </section>
    </DialogContent>
  );
}

export default Login;
