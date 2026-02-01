import { create } from 'zustand';

import { productsApi } from '../api/products';

import type { Product } from './types/Product';

interface ProductsState {
  products: Product[];
  fetchProducts: () => Promise<void>;
}

export const useProductsStore = create<ProductsState>((set) => ({
  products: [],
  fetchProducts: async () => {
    const data = await productsApi.getProducts();
    set({ products: data.products ?? [] });
  },
}));
