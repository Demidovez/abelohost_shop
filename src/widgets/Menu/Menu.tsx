'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { PAGES, PATHS } from '@/shared/constants';
import { ContentContainer } from '@/shared/ui/ContentContainer';

import styles from './Menu.module.scss';

export const Menu = () => {
  const pathname = usePathname();

  return (
    <nav className={styles.container}>
      <ContentContainer>
        <ul>
          {PAGES.map((item) => {
            if (item.hideInMenu) {
              return null;
            }

            const isActive = pathname === item.href;
            const isHome = pathname === PATHS.home;
            const activeClass = isActive && !isHome ? styles.active : '';

            return (
              <li key={item.href}>
                <Link href={item.href} className={activeClass}>
                  <span>{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </ContentContainer>
    </nav>
  );
};
