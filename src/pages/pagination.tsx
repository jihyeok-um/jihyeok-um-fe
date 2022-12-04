import type { NextPage } from "next";
import styled from "styled-components";

import Pagination from "../components/Pagination";
import ProductList from "../components/ProductList";
import usePagination from "../hooks/usePagination";

const PaginationPage: NextPage = () => {
  const { currentPage, currentWrappedPages, maxPage, products, isError } =
    usePagination();

  if (isError) {
    return (
      <ErrorContainer>
        <div> 존재하지 않는 페이지입니다</div>
      </ErrorContainer>
    );
  }

  return (
    <Container>
      {products && <ProductList products={products} />}
      {currentPage && maxPage && currentWrappedPages && (
        <Pagination
          maxPage={maxPage}
          currentPage={currentPage}
          currentWrappedPages={currentWrappedPages}
        />
      )}
    </Container>
  );
};

export default PaginationPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px 40px;
`;

const ErrorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
`;
