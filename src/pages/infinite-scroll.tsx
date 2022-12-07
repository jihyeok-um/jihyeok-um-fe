import type { NextPage } from "next";
import styled from "styled-components";
import {
  MemoizedProductList,
  ProductList,
} from "../components/productList/ProductList";
import Spinner from "../components/Spinner";
import useInfiniteScroll from "../hooks/useInfiniteScroll";

const InfiniteScrollPage: NextPage = () => {
  const { lastNodeRef, pages, pagesLoading } = useInfiniteScroll();

  return (
    <S.Container>
      {pages &&
        pages.map((page, index) => {
          if (index === pages.length - 1) {
            return (
              <ProductList
                key={page.products[0].id}
                products={page.products}
                lastNodeRef={lastNodeRef}
              />
            );
          }
          return (
            <MemoizedProductList
              key={page.products[0].id}
              products={page.products}
            />
          );
        })}
      {pagesLoading && <Spinner />}
    </S.Container>
  );
};

const S = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 20px 40px;
  `,
};

export default InfiniteScrollPage;
