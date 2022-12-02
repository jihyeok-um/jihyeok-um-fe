import type { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";
import Field from "../components/input/Field";

const LoginPage: NextPage = () => {
  const [idInputValue, setIdInputValue] = useState("");
  const [passwordInputValue, setPasswordInputValue] = useState("");

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
      <Form>
        <Field
          labelText={"아이디"}
          inputValue={idInputValue}
          handleChangeInputValue={() => setIdInputValue}
          isError={true}
          errorText={"올바른 아이디 형식으로 입력해주세요."}
        />
        <Field
          labelText={"비밀번호"}
          inputValue={passwordInputValue}
          handleChangeInputValue={() => setPasswordInputValue}
          isError={true}
          errorText={"올바른 비밀번호 형식으로 입력해주세요."}
        />
        <LoginButton disabled>로그인</LoginButton>
      </Form>
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
