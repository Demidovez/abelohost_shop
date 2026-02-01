import Link from 'next/link';

import { PAGES } from '@/shared/constants';
import { ContentContainer } from '@/shared/ui/ContentContainer';

import styles from './Menu.module.scss';

export const Menu = () => {
  return (
    <nav className={styles.container}>
      <ContentContainer>
        <ul>
          {PAGES.map((item) => {
            if (item.hideInMenu) {
              return null;
            }

            return (
              <li key={item.href}>
                <Link href={item.href}>
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
