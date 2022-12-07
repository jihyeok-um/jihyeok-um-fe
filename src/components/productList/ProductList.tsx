import styled from "styled-components";

import { ProductInfo } from "../../types/product";
import ProductItem from "./ProductItem";

const ProductList = ({ products, lastNodeRef }: ProductListProps) => (
  <S.Container>
    {products.map((product, index) => {
      if (index === products.length - 1) {
        return (
          <ProductItem
            key={product.id}
            product={product}
            lastNodeRef={lastNodeRef}
          />
        );
      }
      return <ProductItem key={product.id} product={product} />;
    })}
  </S.Container>
);

interface ProductListProps {
  products: ProductInfo[];
  lastNodeRef?: any;
}

const S = {
  Container: styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 400px;
    margin-left: -20px;
  `,
};

export default ProductList;
