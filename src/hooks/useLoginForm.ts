import { useState } from "react";
import { validateCorrectIdValue } from "../utilities";
import { validateCorrectPasswordValue } from "./../utilities/index";

const useLoginForm = () => {
  const [idInputValue, setIdInputValue] = useState("");
  const [idError, setIdError] = useState(false);
  const [passwordInputValue, setPasswordInputValue] = useState("");
  const [passwordError, setPasswordError] = useState(false);

  const handleChangeIdInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newInputValue = e.currentTarget.value;

    setIdInputValue(newInputValue);
    if (validateCorrectIdValue(newInputValue)) setIdError(false);
  };

  const handleChangePasswordInputValue = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newInputValue = e.currentTarget.value;

    setPasswordInputValue(newInputValue);
    if (validateCorrectPasswordValue(newInputValue)) setPasswordError(false);
  };

  const validateIdError = () => {
    if (!validateCorrectIdValue(idInputValue)) {
      setIdError(true);
    }
  };

  const validatePasswordError = () => {
    if (!validateCorrectPasswordValue(passwordInputValue)) {
      setPasswordError(true);
    }
  };

  const isDisabledLoginButton = () => {
    if (
      validateCorrectPasswordValue(passwordInputValue) &&
      validateCorrectIdValue(idInputValue)
    ) {
      return false;
    }

    return true;
  };

  const handleSubmitLoginForm = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("로그인");
  };

  return {
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
  };
};

export default useLoginForm;
