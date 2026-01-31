import { create } from 'zustand'
import { Product } from './types/Product'

type ProductsState = {
  products: Product[]
}

export const useProductsStore = create<ProductsState>((set) => ({
    products: [],
}))