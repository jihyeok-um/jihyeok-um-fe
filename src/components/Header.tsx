import Link from "next/link";
import styled from "styled-components";
import useUser from "../hooks/useUser";

const Header = () => {
  const { userInfo, handleLogout } = useUser();

  return (
    <S.Header>
      <Link href="/">
        <S.Title>HAUS</S.Title>
      </Link>
      {userInfo.accessToken !== "" && (
        <S.UserInfoContainer>
          <p>{userInfo.user.NAME}</p>
          <Link href={"/"}>
            <button onClick={handleLogout}>logout</button>
          </Link>
        </S.UserInfoContainer>
      )}
      {userInfo.accessToken === "" && (
        <Link href="/login">
          <button>login</button>
        </Link>
      )}
    </S.Header>
  );
};

const S = {
  Header: styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
  `,

  Title: styled.a`
    font-size: 48px;
    cursor: pointer;
  `,

  UserInfoContainer: styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  `,
};

export default Header;
