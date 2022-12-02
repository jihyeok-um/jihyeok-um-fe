import styled, { css } from "styled-components";
import Description from "./Description";

const Field = ({
  labelText,
  inputValue,
  handleChangeInputValue,
  handleBlurInput,
  isError,
  errorText,
}: FieldProps) => {
  return (
    <S.Container>
      <S.Label>{labelText}</S.Label>
      <S.Input
        isError={isError}
        value={inputValue}
        onChange={handleChangeInputValue}
        onBlur={handleBlurInput}
      />
      <Description errorText={errorText} isError={isError} />
    </S.Container>
  );
};

interface FieldProps {
  labelText: string;
  inputValue: string;
  handleChangeInputValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlurInput: () => void;
  isError: boolean;
  errorText: string;
}

const S = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
  `,

  Label: styled.label`
    font-size: 13px;
    font-weight: 700;
    color: #6c6c7d;
  `,

  Input: styled.input<{ isError: boolean }>`
    box-sizing: border-box;
    width: 100%;
    height: 48px;
    border-radius: 12px;
    padding: 16px;
    background-color: #f7f7fa;

    ${(props) =>
      props.isError === true &&
      css`
        background-color: #fdedee;
      `}
  `,
};

export default Field;
