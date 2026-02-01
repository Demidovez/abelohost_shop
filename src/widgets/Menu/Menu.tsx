'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useEffectEvent, useState } from 'react';

import { PAGES, PATHS } from '@/shared/constants';
import { ContentContainer } from '@/shared/ui/ContentContainer';
import { MenuBurger } from '@/shared/ui/Icons';

import styles from './Menu.module.scss';

export const Menu = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const forceCloseMenu = useEffectEvent(() => {
    setIsMenuOpen(false);
  });

  useEffect(() => {
    forceCloseMenu();
  }, [pathname]);

  return (
    <nav className={styles.container}>
      <ContentContainer>
        <div className={styles.menu}>
          <MenuBurger
            onClick={() => {
              throw new Error('test error');
              setIsMenuOpen((state) => !state);
            }}
          />
        </div>
        <ul data-open={isMenuOpen}>
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
