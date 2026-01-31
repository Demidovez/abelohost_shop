import { ProductsList } from '@/widgets/ProductsList';

import styles from './page.module.scss';

export default function HomePage() {
  return (
    <div className={styles.container}>
      <ProductsList />
    </div>
  );
}
