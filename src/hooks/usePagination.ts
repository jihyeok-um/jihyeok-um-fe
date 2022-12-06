import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useState } from "react";
import { requestGetProducts } from "./../axios/index";

const usePagination = () => {
  const router = useRouter();
  const pageIndex = Number(router.query.page);
  const [wrappedPages, setWrappedPages] = useState<number[]>([]);
  const [maxPage, setMaxPage] = useState<number | null>(null);

  const {
    data: products,
    isLoading: productsLoading,
    isError: productsError,
  } = useQuery(["products", pageIndex], () => requestGetProducts(pageIndex), {
    onError: () => {},
    onSuccess: (products) => {
      const fullProductPageCount = Math.floor(products.totalCount / 10);
      const remainProductPageCount = products.totalCount % 10 > 0 ? 1 : 0;

      setMaxPage(fullProductPageCount + remainProductPageCount);
      getWrappedPages(fullProductPageCount + remainProductPageCount);
    },
  });

  const getWrappedPages = (maxPage: number) => {
    const wrappedPages: number[] = [];
    const minWrappedPage = Math.floor((pageIndex - 1) / 5) * 5 + 1;
    const maxWrappedPage = minWrappedPage + 4;

    for (let i = minWrappedPage; i <= maxWrappedPage; i++) {
      if (maxPage < i) break;
      wrappedPages.push(i);
    }

    setWrappedPages(wrappedPages);
  };

  const handleClickNextWrappedPageButton = () => {
    router.push(`${router.basePath}?page=${wrappedPages[4] + 1}`);
  };

  const handleClickPrevWrappedPageButton = () => {
    router.push(`${router.basePath}?page=${wrappedPages[0] - 1}`);
  };

  const handleClickProduct = (page: number) => () => {
    router.push(`${router.basePath}?page=${page}`);
  };

  return {
    products: products?.products,
    productsLoading,
    productsError,
    pageIndex,
    maxPage,
    wrappedPages,
    handleClickNextWrappedPageButton,
    handleClickPrevWrappedPageButton,
    handleClickProduct,
  };
};

export default usePagination;
