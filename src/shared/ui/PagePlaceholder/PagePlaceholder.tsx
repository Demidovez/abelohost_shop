import Image from 'next/image';
import Link from 'next/link';

import { PATHS } from '@/shared/constants';

import styles from './PagePlaceholder.module.scss';

export const PagePlaceholder = () => {
  return (
    <div className={styles.container}>
      <Image
        src="/images/empty-page.svg"
        alt="Empty Page"
        width={300}
        height={300}
        loading="lazy"
      />
      <div className={styles.description}>
        <h2>No products found</h2>
        <p>We couldn&apos;t find any products on this page.</p>
        <Link href={PATHS.home}>
          <span>Go to Home</span>
        </Link>
      </div>
    </div>
  );
};
