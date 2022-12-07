import { useInfiniteQuery } from "@tanstack/react-query";
import { useCallback, useRef } from "react";
import { requestGetProducts } from "../axios";
import { PRODUCTS_SIZE, QUERY_KEY } from "../constants";

const useInfiniteScroll = () => {
  const observerRef = useRef<IntersectionObserver>();

  const {
    data: pages,
    isLoading: pagesLoading,
    fetchNextPage,
  } = useInfiniteQuery(
    [QUERY_KEY.PRODUCTS],
    ({ pageParam = 1 }) =>
      requestGetProducts({
        pageIndex: pageParam,
        size: PRODUCTS_SIZE.INFINITY_SCROLL,
      }),
    {
      getNextPageParam: (lastPage) => {
        const lastPageItemId = Number(lastPage.products.at(-1)?.id);

        if (lastPageItemId !== lastPage.totalCount) {
          return Math.floor(lastPageItemId / PRODUCTS_SIZE.INFINITY_SCROLL) + 1;
        }
      },
    }
  );

  const lastNodeRef = useCallback(
    (node: any) => {
      if (observerRef.current) observerRef.current.disconnect();

      observerRef.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          fetchNextPage();
        }
      });

      if (node) observerRef.current.observe(node);
    },
    [pages]
  );

  return {
    pages: pages?.pages,
    pagesLoading,
    observerRef,
    lastNodeRef,
  };
};

export default useInfiniteScroll;
