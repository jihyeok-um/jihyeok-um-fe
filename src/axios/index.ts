import axios from "axios";
import { LoginInfo, LoginResponse } from "../types/login";
import { ProductResponse, ProductsResponse } from "../types/product";

export const requestPostLogin = async (
  loginInfo: LoginInfo
): Promise<LoginResponse> => {
  const res = await axios.post("/login", loginInfo);

  return res.data.data;
};

export const requestGetProducts = async (
  pageIndex: number
): Promise<ProductsResponse> => {
  const res = await axios.get(`/products?page=${pageIndex}&size=10`);

  return res.data.data;
};

export const requestGetProduct = async (
  productId: number
): Promise<ProductResponse> => {
  const res = await axios.get(`/products/${productId}`);

  return res.data.data;
};
