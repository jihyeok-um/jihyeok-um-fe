import { useInfiniteQuery } from "@tanstack/react-query";
import { useCallback, useRef } from "react";
import { requestGetProducts } from "../axios";
import { QUERY_KEY } from "../constants";

const useInfiniteScroll = () => {
  const observerRef = useRef<IntersectionObserver>();

  const { data: pages, fetchNextPage } = useInfiniteQuery(
    [QUERY_KEY.PRODUCTS],
    ({ pageParam = 1 }) =>
      requestGetProducts({ pageIndex: pageParam, size: 16 }),
    {
      getNextPageParam: (lastPage) => {
        const lastPageItemId = Number(lastPage.products.at(-1)?.id);

        if (lastPageItemId !== lastPage.totalCount) {
          return Math.floor(lastPageItemId / 16) + 1;
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
    observerRef,
    lastNodeRef,
  };
};

export default useInfiniteScroll;
