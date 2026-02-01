import { BaseApiClient } from '@/shared/api';

import type { ProductsResponse } from '../model/types/Product';

class ProductsApiClient extends BaseApiClient {
  async getProducts(): Promise<ProductsResponse> {
    const response = await this.client.get<ProductsResponse>('');
    return response.data;
  }
}

export const productsApi = new ProductsApiClient('/products');
