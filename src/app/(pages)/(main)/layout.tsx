'use client';

import { usePathname } from 'next/navigation';

import { PAGES } from '@/shared/constants';

import styles from './layout.module.scss';

interface PageLayoutProps {
  children: React.ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  const pathname = usePathname();

  const page = PAGES.find((page) => page.href === pathname);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{page?.title || 'Page'}</h1>
      {children}
    </div>
  );
}
