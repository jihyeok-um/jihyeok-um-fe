import styled from "styled-components";

import { ProductInfo } from "../types/product";
import ProductItem from "./ProductItem";

const ProductList = ({ products }: ProductListProps) => (
  <Container>
    {products.map((product) => (
      <ProductItem key={product.id} product={product} />
    ))}
  </Container>
);

interface ProductListProps {
  products: ProductInfo[];
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 400px;
  margin-left: -20px;
`;

export default ProductList;
