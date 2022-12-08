import { createContext, Dispatch, SetStateAction, useState } from "react";
import { INITIAL_USER_INFO } from "../constants";
import { LoginResponse } from "../types/login";

export const UserContext = createContext<LoginResponse>(INITIAL_USER_INFO);
export const UserDispatchContext = createContext<UserDispatchType>(() => {});

export const UserProvider = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  const [userState, setUserState] = useState<LoginResponse>(INITIAL_USER_INFO);

  return (
    <UserContext.Provider value={userState}>
      <UserDispatchContext.Provider value={setUserState}>
        {children}
      </UserDispatchContext.Provider>
    </UserContext.Provider>
  );
};

type UserDispatchType = Dispatch<SetStateAction<LoginResponse>>;
