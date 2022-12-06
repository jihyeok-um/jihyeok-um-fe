import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { requestPostLogin } from "../axios";
import { INITIAL_USER_INFO, LOCAL_STORAGE } from "../constants";
import { LoginInfo } from "../types/login";
import { UserContext, UserDispatchContext } from "./../contexts/userContext";

const useUser = () => {
  const userInfo = useContext(UserContext);
  const userInfoDispatcher = useContext(UserDispatchContext);
  const router = useRouter();

  const handleLoginWithIdPassword = async (loginInfo: LoginInfo) => {
    const userInfo = await requestPostLogin(loginInfo);

    userInfoDispatcher(userInfo);
    localStorage.setItem(LOCAL_STORAGE.USER_INFO, JSON.stringify(userInfo));
    router.replace("/");
  };

  const handleLogout = () => {
    userInfoDispatcher(INITIAL_USER_INFO);
    localStorage.removeItem(LOCAL_STORAGE.USER_INFO);
    router.replace("/");
  };

  useEffect(() => {
    const localStorageUserInfo = localStorage.getItem(LOCAL_STORAGE.USER_INFO);
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
