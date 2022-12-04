import { createContext, Dispatch, SetStateAction, useState } from "react";
import { LoginResponse } from "../types/login";

const initialValue = {
  accessToken: "",
  user: {
    ID: "",
    NAME: "",
  },
};

export const UserContext = createContext<LoginResponse>(initialValue);
export const UserDispatchContext = createContext<UserDispatchType>(() => {});

export const UserProvider = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  const [userState, setUserState] = useState<LoginResponse>(initialValue);

  return (
    <UserContext.Provider value={userState}>
      <UserDispatchContext.Provider value={setUserState}>
        {children}
      </UserDispatchContext.Provider>
    </UserContext.Provider>
  );
};

type UserDispatchType = Dispatch<SetStateAction<LoginResponse>>;
