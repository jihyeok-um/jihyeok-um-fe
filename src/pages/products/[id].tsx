import type { NextPage } from "next";
import styled from "styled-components";

import useProduct from "../../hooks/useProduct";
import { getPriceWithComma } from "../../utilities";

const ProductDetailPage: NextPage = () => {
  const { product, isError } = useProduct();

  if (isError) {
    return (
      <ErrorContainer>
        <div>존재하지 않는 상품입니다.</div>
      </ErrorContainer>
    );
  }

  return (
    <>
      {product && (
        <>
          <Thumbnail
            src={
              product.thumbnail ? product.thumbnail : "/defaultThumbnail.jpg"
            }
          />
          <ProductInfoWrapper>
            <Name>{product.name}</Name>
            <Price>{getPriceWithComma(product.price)}</Price>
          </ProductInfoWrapper>
        </>
      )}
    </>
  );
};

export default ProductDetailPage;

const Thumbnail = styled.img`
  width: 100%;
  height: 420px;
`;

const ProductInfoWrapper = styled.div`
  margin-top: 20px;
  padding: 0 20px;
`;

const Name = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const Price = styled.div`
  font-size: 18px;
  margin-top: 8px;
`;

const ErrorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
`;
