import { ProductsApiClient } from './clients/products';

export const api = {
  productsApi: new ProductsApiClient('/products'),
};
