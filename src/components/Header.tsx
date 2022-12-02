import Link from "next/link";
import styled from "styled-components";

const Header = () => {
  return (
    <S.Header>
      <Link href="/">
        <S.Title>HAUS</S.Title>
      </Link>
      <Link href="/login">
        <p>login</p>
      </Link>
    </S.Header>
  );
};

const S = {
  Header: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
  `,

  Title: styled.a`
    font-size: 48px;
  `,
};

export default Header;
