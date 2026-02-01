import { ContentContainer } from '@/shared/ui/ContentContainer';

import styles from './Footer.module.scss';

const CURRENT_YEAR = new Date().getFullYear();

export const Footer = () => {
  const isAuthorized = true;
  const userEmail = 'nikolay@gmail.com';

  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  const whoIsLogged = isAuthorized ? `. Logged as ${userEmail}` : '';

  return (
    <footer className={styles.container}>
      <ContentContainer className={styles.content}>
        <p>
          &copy; {CURRENT_YEAR}
          {whoIsLogged}
        </p>
      </ContentContainer>
    </footer>
  );
};
