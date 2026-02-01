'use client';

import { useEffect } from 'react';

import { useProductsStore } from '@/entities/product';

import { ProductItem } from './ProductItem';
import styles from './ProductsList.module.scss';

export const ProductsList = () => {
  const { products, fetchProducts } = useProductsStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <div className={styles.container}>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};
