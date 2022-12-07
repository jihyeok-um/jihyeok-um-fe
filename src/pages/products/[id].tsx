import type { NextPage } from "next";
import styled from "styled-components";
import Error from "../../components/Error";
import Spinner from "../../components/Spinner";

import useProduct from "../../hooks/useProduct";
import { getPriceWithComma } from "../../utilities";

const ProductDetailPage: NextPage = () => {
  const { product, productLoading, productError } = useProduct();

  if (productLoading) return <Spinner />;
  if (productError) return <Error errorText="존재하지 않는 상품입니다." />;

  return (
    <>
      {product?.thumbnail && <S.Thumbnail src={product.thumbnail} />}
      {!product?.thumbnail && <S.Thumbnail src={"/defaultThumbnail.jpg"} />}
      {product && (
        <S.ProductInfoWrapper>
          <S.Name>{product.name}</S.Name>
          <S.Price>{getPriceWithComma(product.price)}</S.Price>
        </S.ProductInfoWrapper>
      )}
    </>
  );
};

const S = {
  Thumbnail: styled.img`
    width: 100%;
    height: 420px;
  `,

  ProductInfoWrapper: styled.div`
    margin-top: 20px;
    padding: 0 20px;
  `,

  Name: styled.p`
    font-size: 20px;
    font-weight: bold;
  `,

  Price: styled.p`
    font-size: 18px;
    margin-top: 8px;
  `,
};

export default ProductDetailPage;
