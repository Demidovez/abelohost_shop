import { create } from 'zustand';

import { api } from '@/shared/api';

import type { Product } from './types/Product';

interface ProductsState {
  products: Product[];
  fetchProducts: () => Promise<void>;
}

export const useProductsStore = create<ProductsState>((set) => ({
  products: [],
  fetchProducts: async () => {
    const data = await api.productsApi.getProducts();
    set({ products: data.products ?? [] });
  },
}));
