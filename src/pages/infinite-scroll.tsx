import type { NextPage } from "next";
import styled from "styled-components";
import ProductList from "../components/productList/ProductList";
import useInfiniteScroll from "../hooks/useInfiniteScroll";

const InfiniteScrollPage: NextPage = () => {
  const { lastNodeRef, pages } = useInfiniteScroll();

  return (
    <S.Container>
      {pages &&
        pages.map((page, index) => {
          if (index === pages.length - 1) {
            return (
              <ProductList products={page.products} lastNodeRef={lastNodeRef} />
            );
          }
          return <ProductList products={page.products} />;
        })}
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
