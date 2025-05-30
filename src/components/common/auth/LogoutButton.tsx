import { useRouter } from "next/navigation";

function LogoutButton() {
  const router = useRouter();
  const logout = async () => {
    await fetch("/api/logout", { method: "POST", credentials: "include" });
    router.push("/login");
  };

  return <button onClick={logout}>logout</button>;
}

export default LogoutButton;
