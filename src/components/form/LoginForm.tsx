import styled from "styled-components";
import useLoginForm from "../../hooks/useLoginForm";
import Field from "../input/Field";

const LoginForm = () => {
  const {
    idInputValue,
    idError,
    passwordInputValue,
    passwordError,
    handleChangeIdInputValue,
    handleChangePasswordInputValue,
    validateIdError,
    validatePasswordError,
    isDisabledLoginButton,
    handleSubmitLoginForm,
  } = useLoginForm();

  return (
    <S.Form onSubmit={handleSubmitLoginForm}>
      <Field
        labelText={"아이디"}
        inputValue={idInputValue}
        handleChangeInputValue={handleChangeIdInputValue}
        handleBlurInput={validateIdError}
        isError={idError}
        errorText={"올바른 아이디 형식으로 입력해주세요."}
      />
      <Field
        labelText={"비밀번호"}
        inputValue={passwordInputValue}
        handleChangeInputValue={handleChangePasswordInputValue}
        handleBlurInput={validatePasswordError}
        isError={passwordError}
        errorText={"올바른 비밀번호 형식으로 입력해주세요."}
      />
      <S.LoginButton disabled={isDisabledLoginButton()}>로그인</S.LoginButton>
    </S.Form>
  );
};

const S = {
  Form: styled.form`
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    padding: 0 20px 40px;
  `,

  LoginButton: styled.button`
    margin-top: 40px;
    padding: 20px;
    border-radius: 12px;
    background-color: #222;
    color: #fff;

    &:disabled {
      background-color: #e2e2ea;
    }
  `,
};

export default LoginForm;
