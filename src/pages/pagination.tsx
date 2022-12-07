import type { NextPage } from "next";
import styled from "styled-components";
import Error from "../components/Error";

import Pagination from "../components/pagination/Pagination";
import { ProductList } from "../components/productList/ProductList";
import Spinner from "../components/Spinner";
import usePagination from "../hooks/usePagination";

const PaginationPage: NextPage = () => {
  const {
    products,
    productsLoading,
    productsError,
    pageIndex,
    maxPage,
    wrappedPages,
    handleClickNextWrappedPageButton,
    handleClickPrevWrappedPageButton,
    handleClickProduct,
  } = usePagination();

  if (productsLoading) return <Spinner />;
  if (productsError) return <Error errorText="존재하지 않는 페이지입니다" />;

  return (
    <S.Container>
      {products && <ProductList products={products} />}
      {wrappedPages && maxPage && (
        <Pagination
          maxPage={maxPage}
          currentPage={pageIndex}
          wrappedPages={wrappedPages}
          handleClickNextWrappedPageButton={handleClickNextWrappedPageButton}
          handleClickPrevWrappedPageButton={handleClickPrevWrappedPageButton}
          handleClickProduct={handleClickProduct}
        />
      )}
    </S.Container>
  );
};

export default PaginationPage;

const S = {
  Container: styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 20px 40px;
  `,
};
