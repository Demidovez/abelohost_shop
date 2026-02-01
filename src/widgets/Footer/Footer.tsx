'use client';

import { useUserStore } from '@/entities/user';
import { Contacts } from '@/features/show-contacts';
import { ContentContainer } from '@/shared/ui/ContentContainer';

import styles from './Footer.module.scss';

const CURRENT_YEAR = new Date().getFullYear();

export const Footer = () => {
  const { user } = useUserStore();

  const whoIsLogged = user?.email ? `. Logged as ${user.email}` : '';

  return (
    <footer className={styles.container}>
      <ContentContainer className={styles.content}>
        <Contacts className={styles.contacts} direction="column" />
        <p>
          &copy; {CURRENT_YEAR}
          {whoIsLogged}
        </p>
      </ContentContainer>
    </footer>
  );
};
