import { create } from 'zustand';

import { productsApi } from '../api/products';

import type { Product } from './types/Product';

interface ProductsState {
  products: Product[];
  isFetching: boolean;
  fetchProducts: () => Promise<void>;
}

export const useProductsStore = create<ProductsState>((set) => ({
  products: [],
  isFetching: true,
  fetchProducts: async () => {
    set({ isFetching: true });
    const data = await productsApi.getProducts();
    set({ products: data.products ?? [], isFetching: false });
  },
}));
