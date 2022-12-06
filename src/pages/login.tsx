import type { NextPage } from "next";
import { useRouter } from "next/router";
import LoginForm from "../components/loginForm/form/LoginForm";
import useUser from "../hooks/useUser";

const LoginPage: NextPage = () => {
  const { userInfo } = useUser();
  const router = useRouter();

  if (userInfo.accessToken !== "") {
    router.replace("/");
  }

  return <LoginForm />;
};

export default LoginPage;
