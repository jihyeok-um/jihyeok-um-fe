import type { NextPage } from "next";
import { useRouter } from "next/router";
import styled from "styled-components";
import LoginForm from "../components/loginForm/form/LoginForm";
import useUser from "../hooks/useUser";

const LoginPage: NextPage = () => {
  const { userInfo } = useUser();
  const router = useRouter();

  if (userInfo.accessToken !== "") {
    router.replace("/");
  }

  return (
    <S.Container>
      <LoginForm />
    </S.Container>
  );
};

const S = {
  Container: styled.main`
    margin-top: 40px;
    padding: 0 20px 40px;
  `,
};

export default LoginPage;
