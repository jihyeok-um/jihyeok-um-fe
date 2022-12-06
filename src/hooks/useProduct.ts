import { requestGetProduct } from "./../axios/index";

import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";

const useProduct = () => {
  const router = useRouter();
  const productId = Number(router.query.id);

  const {
    data: product,
    isError: productError,
    isLoading: productLoading,
  } = useQuery(["product", productId], () => requestGetProduct(productId), {
    onError: () => {},
  });

  return { product: product?.product, productError, productLoading };
};

export default useProduct;
