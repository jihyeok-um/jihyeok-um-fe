import { requestGetProduct } from "./../axios/index";
import { QUERY_KEY } from "./../constants/index";

import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";

const useProduct = () => {
  const router = useRouter();
  const productId = Number(router.query.id);

  const {
    data: product,
    isError: productError,
    isLoading: productLoading,
  } = useQuery(
    [QUERY_KEY.PRODUCT, productId],
    () => requestGetProduct(productId),
    {
      onError: () => {},
    }
  );

  return { product: product?.product, productError, productLoading };
};

export default useProduct;
