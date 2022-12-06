import { useState } from "react";
import { validateCorrectIdValue } from "../utilities";
import { validateCorrectPasswordValue } from "./../utilities/index";
import useUser from "./useUser";

const useLoginForm = () => {
  const [idInputValue, setIdInputValue] = useState("");
  const [idError, setIdError] = useState(false);
  const [passwordInputValue, setPasswordInputValue] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const { handleLoginWithIdPassword } = useUser();

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

  const handleSubmitLoginForm = async (e: React.FormEvent) => {
    e.preventDefault();

    await handleLoginWithIdPassword({
      id: idInputValue,
      password: passwordInputValue,
    });
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
    handleSubmitLoginForm,
  };
};

export default useLoginForm;
