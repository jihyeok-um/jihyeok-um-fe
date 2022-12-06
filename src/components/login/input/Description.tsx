import styled from "styled-components";

const Description = ({ errorText, isError }: DescriptionProps) => {
  return (
    <S.Container>
      {isError && <S.ErrorText>{errorText}</S.ErrorText>}
    </S.Container>
  );
};

interface DescriptionProps {
  errorText: string;
  isError: boolean;
}

const S = {
  Container: styled.div`
    width: 100%;
    height: 15.5px;
    margin-bottom: 20px;
  `,

  ErrorText: styled.p`
    color: #ed4e5c;
    font-weight: 400;
    font-size: 13px;
  `,
};

export default Description;
