export interface UserInfo {
  ID: string;
  NAME: string;
}

export interface LoginInfo {
  id: string;
  password: string;
}

export interface LoginResponse {
  accessToken: string;
  user: UserInfo;
}
