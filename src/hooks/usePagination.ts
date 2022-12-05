import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { requestGetProducts } from "../axios";
import { ProductInfo } from "./../types/product";
const usePagination = () => {
  const [currentPage, setCurrentPage] = useState<number | null>(null);
  const [currentWrappedPages, setCurrentWrappedPages] = useState<number[]>([]);
  const [maxPage, setMaxPage] = useState<number | null>(null);
  const [products, setProducts] = useState<ProductInfo[] | null>(null);
  const [isError, setIsError] = useState(false);
  const router = useRouter();
  const { page } = router.query;

  const getProducts = async (pageIndex: number) => {
    try {
      const productsInfo = await requestGetProducts(pageIndex);
      const fullProductPageCount = Math.floor(productsInfo.totalCount / 10);
      const remainProductPageCount = productsInfo.totalCount % 10 > 0 ? 1 : 0;
      const totalPageCount = fullProductPageCount + remainProductPageCount;

      setCurrentPage(pageIndex);
      setMaxPage(totalPageCount);
      setProducts(productsInfo.products);

      getCurrentWrappedPages(pageIndex, totalPageCount);
      setIsError(false);
    } catch (err) {
      if (axios.isAxiosError(err) && err instanceof Error) {
        if (err.response?.status === 404) {
          setIsError(true);
        }
      }
    }
  };

  const getCurrentWrappedPages = (currentPage: number, maxPage: number) => {
    const wrappedPages: number[] = [];
    const minWrappedPage = Math.floor((currentPage - 1) / 5) * 5 + 1;
    const maxWrappedPage = minWrappedPage + 4;

    for (let i = minWrappedPage; i <= maxWrappedPage; i++) {
      if (maxPage < i) break;

      wrappedPages.push(i);
    }

    setCurrentWrappedPages(wrappedPages);
  };

  useEffect(() => {
    if (!page) return;

    getProducts(Number(page));
  }, [page]);

  return {
    currentPage,
    currentWrappedPages,
    products,
    maxPage,
    isError,
    getProducts,
  };
};

export default usePagination;
