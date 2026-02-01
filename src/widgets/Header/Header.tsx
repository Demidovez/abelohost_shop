import Image from 'next/image';
import Link from 'next/link';

import { Contacts } from '@/features/show-contacts';
import { UserBar } from '@/features/show-user';
import { PATHS } from '@/shared/constants';
import { ContentContainer } from '@/shared/ui/ContentContainer';

import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.top_header}>
        <ContentContainer className={styles.content}>
          <Contacts />
          <UserBar />
        </ContentContainer>
      </div>
      <div className={styles.bottom_header}>
        <ContentContainer className={styles.content}>
          <Link href={PATHS.home}>
            <div className={styles.logo}>
              <span>Abelohost Shop</span>
              <span>.</span>
            </div>
          </Link>
          <Link href={PATHS.home}>
            <Image
              src="/images/banner.png"
              alt="Abelohost Shop"
              width={310}
              height={96}
              loading="eager"
            />
          </Link>
        </ContentContainer>
      </div>
    </header>
  );
};
