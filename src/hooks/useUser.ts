import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { requestPostLogin } from "../axios";
import { LoginInfo } from "../types/login";
import { UserContext, UserDispatchContext } from "./../contexts/userContext";

const useUser = () => {
  const userInfo = useContext(UserContext);
  const userInfoDispatcher = useContext(UserDispatchContext);
  const router = useRouter();

  const handleLoginWithIdPassword = async (loginInfo: LoginInfo) => {
    const userInfo = await requestPostLogin(loginInfo);

    userInfoDispatcher(userInfo);
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
    router.replace("/");
  };

  const handleLogout = () => {
    userInfoDispatcher({
      accessToken: "",
      user: {
        ID: "",
        NAME: "",
      },
    });
    localStorage.removeItem("userInfo");
    router.replace("/");
  };

  useEffect(() => {
    const localStorageUserInfo = localStorage.getItem("userInfo");
    if (localStorageUserInfo) {
      userInfoDispatcher(JSON.parse(localStorageUserInfo));
    }
  }, []);

  return {
    userInfo,
    userInfoDispatcher,
    handleLoginWithIdPassword,
    handleLogout,
  };
};

export default useUser;
