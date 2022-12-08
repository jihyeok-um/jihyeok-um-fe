import styled from "styled-components";

const Spinner = () => {
  return (
    <S.LoadingContainer>
      <S.Spinner />
    </S.LoadingContainer>
  );
};

const S = {
  LoadingContainer: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90vh;
  `,

  Spinner: styled.div`
    width: 50px;
    height: 50px;
    border: 4px solid lightgray;
    border-top: 4px solid black;
    border-radius: 50px;
    animation: spinner 1.5s linear infinite;
    @keyframes spinner {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  `,
};

export default Spinner;
