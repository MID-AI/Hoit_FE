import { Button } from "@/components/ui/button";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

function Login() {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>로그인</DialogTitle>
      </DialogHeader>
      <div>
        <Button>구글 로그인</Button>
      </div>
    </DialogContent>
  );
}

export default Login;
