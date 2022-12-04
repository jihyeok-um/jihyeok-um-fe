import axios from "axios";
import { LoginInfo, LoginResponse } from "../types/login";

export const requestPostLogin = async (
  loginInfo: LoginInfo
): Promise<LoginResponse> => {
  const res = await axios.post("/login", loginInfo);

  return res.data.data;
};
