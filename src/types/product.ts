export interface ProductInfo {
  id: string;
  name: string;
  thumbnail: string | null;
  price: number;
}

export interface ProductsResponse {
  products: ProductInfo[];
  totalCount: number;
}
