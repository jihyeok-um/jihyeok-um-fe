import type { NextPage } from "next";
import styled from "styled-components";
import Error from "../../components/Error";

import useProduct from "../../hooks/useProduct";
import { getPriceWithComma } from "../../utilities";

const ProductDetailPage: NextPage = () => {
  const { product, productError } = useProduct();

  if (productError || !product)
    return <Error errorText="존재하지 않는 상품입니다."></Error>;

  return (
    <>
      {product.thumbnail && <S.Thumbnail src={product.thumbnail} />}
      {!product.thumbnail && <S.Thumbnail src={"/defaultThumbnail.jpg"} />}
      <S.ProductInfoWrapper>
        <S.Name>{product.name}</S.Name>
        <S.Price>{getPriceWithComma(product.price)}</S.Price>
      </S.ProductInfoWrapper>
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

  Name: styled.div`
    font-size: 20px;
    font-weight: bold;
  `,

  Price: styled.div`
    font-size: 18px;
    margin-top: 8px;
  `,
};

export default ProductDetailPage;
