import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { requestGetProduct } from "./../axios/index";
import { ProductInfo } from "./../types/product";
const useProduct = () => {
  const [product, setProduct] = useState<ProductInfo | null>(null);
  const [isError, setIsError] = useState(false);
  const router = useRouter();

  const getProduct = async (productId: number) => {
    try {
      const { product } = await requestGetProduct(productId);
      setProduct(product);
      setIsError(false);
    } catch (err) {
      if (axios.isAxiosError(err) && err instanceof Error) {
        if (err.response?.status === 404) {
          setIsError(true);
        }
      }
    }
  };

  useEffect(() => {
    if (!isNaN(Number(router.query.id))) {
      getProduct(Number(router.query.id));
    }
  }, [router.query.id]);

  return {
    product,
    isError,
  };
};

export default useProduct;
