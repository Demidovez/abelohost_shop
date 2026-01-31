import type { ProductsResponse } from '@/shared/api';

export type Product = NonNullable<ProductsResponse['products']>[number];
