import type { NextPage } from "next";
import LoginForm from "../components/form/LoginForm";
import Header from "../components/Header";

const LoginPage: NextPage = () => {
  return (
    <>
      <Header />
      <LoginForm />
    </>
  );
};

export default LoginPage;
