'use client';

import Image from 'next/image';

import type { Product } from '@/entities/product';
import { useIsAuth } from '@/entities/user';
import { Button } from '@/shared/ui/Button';
import { ShoppingCartAddSolid } from '@/shared/ui/Icons';

import styles from './ProductItem.module.scss';

interface ProductItemProps {
  product: Product;
}

export const ProductItem = ({ product }: ProductItemProps) => {
  const isAuth = useIsAuth();

  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Image
          src={product.thumbnail}
          alt={product.title}
          fill
          loading="eager"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className={styles.description}>
        <h4>{product.title}</h4>
        <p>{product.category}</p>
        <span>${product.price}</span>
      </div>
      {isAuth && (
        <div className={styles.button}>
          <Button>
            <ShoppingCartAddSolid /> Add to cart
          </Button>
        </div>
      )}
    </div>
  );
};
