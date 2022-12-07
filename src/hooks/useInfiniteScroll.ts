import { useInfiniteQuery } from "@tanstack/react-query";
import { useCallback, useEffect, useRef } from "react";
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
    (node: HTMLAnchorElement) => {
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

  const handleRememberScrollY = () => {
    sessionStorage.setItem("scrollY", String(window.scrollY));
  };

  useEffect(() => {
    const scrollY = Number(sessionStorage.getItem("scrollY"));
    const prePathname = sessionStorage.getItem("prePathname");

    if (scrollY && prePathname === "/products/[id]") {
      window.scroll(0, scrollY);
      sessionStorage.removeItem("scrollY");
    }
  }, []);

  return {
    pages: pages?.pages,
    pagesLoading,
    observerRef,
    lastNodeRef,
    handleRememberScrollY,
  };
};

export default useInfiniteScroll;
