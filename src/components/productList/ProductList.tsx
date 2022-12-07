import React from "react";
import styled from "styled-components";

import { ProductInfo } from "../../types/product";
import ProductItem from "./ProductItem";

export const ProductList = ({
  products,
  lastNodeRef,
  handleRememberScrollY,
}: ProductListProps) => {
  return (
    <S.Container>
      {products.map((product, index) => {
        if (index === products.length - 1) {
          return (
            <ProductItem
              key={product.id}
              product={product}
              lastNodeRef={lastNodeRef}
              handleRememberScrollY={handleRememberScrollY}
            />
          );
        }
        return (
          <ProductItem
            key={product.id}
            product={product}
            handleRememberScrollY={handleRememberScrollY}
          />
        );
      })}
    </S.Container>
  );
};

export const MemoizedProductList = React.memo(ProductList);

interface ProductListProps {
  products: ProductInfo[];
  lastNodeRef?: (node: HTMLAnchorElement) => void;
  handleRememberScrollY?: () => void;
}

const S = {
  Container: styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 400px;
    margin-left: -20px;
  `,
};
