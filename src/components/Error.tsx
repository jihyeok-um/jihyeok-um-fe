import styled from "styled-components";

const Error = ({ errorText }: ErrorProps) => {
  return (
    <S.ErrorContainer>
      <p>{errorText}</p>
    </S.ErrorContainer>
  );
};

interface ErrorProps {
  errorText: string;
}

const S = {
  ErrorContainer: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90vh;
  `,
};

export default Error;
