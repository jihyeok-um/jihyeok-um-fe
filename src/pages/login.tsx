import type { NextPage } from "next";
import Link from "next/link";
import styled from "styled-components";
import LoginForm from "../components/form/LoginForm";

const LoginPage: NextPage = () => {
  return (
    <>
      <Header>
        <Link href="/">
          <Title>HAUS</Title>
        </Link>
        <Link href="/login">
          <p>login</p>
        </Link>
      </Header>
      <LoginForm />
    </>
  );
};

export default LoginPage;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

const Title = styled.a`
  font-size: 48px;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  padding: 0 20px 40px;
`;

const TextInput = styled.input`
  border: 1px solid #000;
`;

const LoginButton = styled.button`
  margin-top: 40px;
  padding: 20px;
  border-radius: 12px;
  background-color: #222;
  color: #fff;

  &:disabled {
    background-color: #e2e2ea;
  }
`;
