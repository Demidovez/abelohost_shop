export interface ProductsResponse {
  products:
    | {
        id: number;
        title: string;
        price: number;
        category: string;
        thumbnail: string;
      }[]
    | null;
  skip: number;
  total: number;
  limit: number;
}

export type Product = NonNullable<ProductsResponse['products']>[number];
