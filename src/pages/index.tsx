import type { NextPage } from "next";
import Link from "next/link";
import styled from "styled-components";

const HomePage: NextPage = () => {
  return (
    <S.Container>
      <Link href="/pagination?page=1">
        <S.StyledLink>pagination</S.StyledLink>
      </Link>
      <Link href="/infinite-scroll">
        <S.StyledLink>infinite scroll</S.StyledLink>
      </Link>
    </S.Container>
  );
};

export default HomePage;

const S = {
  Container: styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    margin-top: 40px;
  `,

  StyledLink: styled.a`
    display: flex;
    justify-content: center;
    width: 240px;
    padding: 20px;
    border-radius: 12px;
    background-color: #222;
    color: #fff;
    font-size: 24px;

    & + & {
      margin-top: 40px;
    }
  `,
};
