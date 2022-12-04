import type { NextPage } from "next";
import { useRouter } from "next/router";
import styled from "styled-components";

import products from "../api/data/products.json";
import Pagination from "../components/Pagination";
import ProductList from "../components/ProductList";

const PaginationPage: NextPage = () => {
  const router = useRouter();
  const { page } = router.query;

  return (
    <Container>
      <ProductList products={products.slice(0, 10)} />
      <Pagination />
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
