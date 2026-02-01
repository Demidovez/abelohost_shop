'use client';

import { useEffect } from 'react';

import { useProductsStore } from '@/entities/product';
import { Loader } from '@/shared/ui/Icons';

import { ProductItem } from './ProductItem';
import styles from './ProductsList.module.scss';

export const ProductsList = () => {
  const { products, isFetching, fetchProducts } = useProductsStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <div className={styles.container}>
      {isFetching && <Loader />}
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};
