import { useRouter } from "next/router";
import styled from "styled-components";
import { ProductInfo } from "../../types/product";

import { getPriceWithComma } from "../../utilities";

const ProductItem = ({
  product: { id, name, thumbnail, price },
  lastNodeRef,
}: ProductItemProps) => {
  const router = useRouter();

  return (
    <S.Container
      ref={lastNodeRef}
      onClick={() => router.push(`/products/${id}`)}
    >
      <S.Thumbnail src={thumbnail ? thumbnail : "/defaultThumbnail.jpg"} />
      <S.Name>{name}</S.Name>
      <S.Price>{getPriceWithComma(price)}</S.Price>
    </S.Container>
  );
};

interface ProductItemProps {
  product: ProductInfo;
  lastNodeRef?: any;
}

const S = {
  Container: styled.a`
    width: 180px;
    margin-left: 20px;
    margin-top: 20px;
  `,

  Thumbnail: styled.img`
    width: 100%;
    height: 180px;
  `,

  Name: styled.div`
    margin-top: 8px;
    font-size: 16px;
  `,

  Price: styled.div`
    margin-top: 4px;
  `,
};

export default ProductItem;
