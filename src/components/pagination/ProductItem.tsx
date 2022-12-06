import { useRouter } from "next/router";
import styled from "styled-components";
import { ProductInfo } from "../../types/product";

import { getPriceWithComma } from "../../utilities";

const ProductItem = ({
  product: { id, name, thumbnail, price },
}: ProductItemProps) => {
  const router = useRouter();

  return (
    <Container onClick={() => router.push(`/products/${id}`)}>
      <Thumbnail src={thumbnail ? thumbnail : "/defaultThumbnail.jpg"} />
      <Name>{name}</Name>
      <Price>{getPriceWithComma(price)}</Price>
    </Container>
  );
};

interface ProductItemProps {
  product: ProductInfo;
}

const Container = styled.a`
  width: 180px;
  margin-left: 20px;
  margin-top: 20px;
`;

const Thumbnail = styled.img`
  width: 100%;
  height: 180px;
`;

const Name = styled.div`
  margin-top: 8px;
  font-size: 16px;
`;

const Price = styled.div`
  margin-top: 4px;
`;

export default ProductItem;
