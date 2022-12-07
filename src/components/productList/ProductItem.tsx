import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { ProductInfo } from "../../types/product";

import { getPriceWithComma } from "../../utilities";

const ProductItem = ({
  product: { id, name, thumbnail, price },
  lastNodeRef,
  handleRememberScrollY,
}: ProductItemProps) => {
  return (
    <S.Container>
      <Link href={`/products/${id}`}>
        <a
          ref={lastNodeRef}
          onClick={() => {
            if (handleRememberScrollY) handleRememberScrollY();
          }}
        >
          <Image
            src={thumbnail ? thumbnail : "/defaultThumbnail.jpg"}
            alt={`${name}의 상품이미지`}
            width="180px"
            height="180px"
          />
          <S.Name>{name}</S.Name>
          <S.Price>{getPriceWithComma(price)}</S.Price>
        </a>
      </Link>
    </S.Container>
  );
};

interface ProductItemProps {
  product: ProductInfo;
  lastNodeRef?: (node: HTMLAnchorElement) => void;
  handleRememberScrollY?: () => void;
}

const S = {
  Container: styled.li`
    width: 180px;
    margin-left: 20px;
    margin-top: 20px;
  `,

  Name: styled.p`
    margin-top: 8px;
    font-size: 16px;
  `,

  Price: styled.p`
    margin-top: 4px;
  `,
};

export default ProductItem;
