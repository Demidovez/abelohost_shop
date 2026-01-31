import type { ProductsResponse } from '../types/products';

import { BaseApiClient } from './base';

export class ProductsApiClient extends BaseApiClient {
  async getProducts(): Promise<ProductsResponse> {
    const response = await this.client.get<ProductsResponse>('');
    return response.data;
  }
}
