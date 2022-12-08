import axios from "axios";
import { PRODUCTS_SIZE } from "../constants";
import { LoginInfo, LoginResponse } from "../types/login";
import { ProductResponse, ProductsResponse } from "../types/product";

export const requestPostLogin = async (
  loginInfo: LoginInfo
): Promise<LoginResponse> => {
  const res = await axios.post("/login", loginInfo);

  return res.data.data;
};

export const requestGetProducts = async ({
  pageIndex,
  size = PRODUCTS_SIZE.PAGINATION,
}: RequestGetProductsParams): Promise<ProductsResponse> => {
  const res = await axios.get(`/products?page=${pageIndex}&size=${size}`);

  return res.data.data;
};

export const requestGetProduct = async (
  productId: number
): Promise<ProductResponse> => {
  const res = await axios.get(`/products/${productId}`);

  return res.data.data;
};

interface RequestGetProductsParams {
  pageIndex: number;
  size?: number;
}
