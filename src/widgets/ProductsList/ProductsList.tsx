'use client';

import { useEffect } from 'react';

import { useProductsStore } from '@/entities/product/model/store';

export const ProductsList = () => {
  const { products, fetchProducts } = useProductsStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>{product.title}</div>
      ))}
    </div>
  );
};
