'use client';

import Image from 'next/image';

import type { Product } from '@/entities/product';

import styles from './ProductItem.module.scss';

interface ProductItemProps {
  product: Product;
}

export const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <div className={styles.container}>
      <Image src={product.thumbnail} alt={product.title} width={350} height={350} loading="lazy" />
      <div className={styles.description}>
        <h4>{product.title}</h4>
        <p>{product.category}</p>
        <span>${product.price}</span>
      </div>
    </div>
  );
};
