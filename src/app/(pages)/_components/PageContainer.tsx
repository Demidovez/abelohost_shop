import { ContentContainer } from '@/shared/ui/ContentContainer';

import styles from './PageContainer.module.scss';

interface PageContainerProps {
  children: React.ReactNode;
}

export const PageContainer = ({ children }: PageContainerProps) => {
  return (
    <main className={styles.container}>
      <ContentContainer>{children}</ContentContainer>
    </main>
  );
};
