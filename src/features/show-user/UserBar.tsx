'use client';

import { useRouter } from 'next/navigation';

import { useUserStore } from '@/entities/user';
import { PATHS } from '@/shared/constants';
import { LogoutSolid, UserSolid } from '@/shared/ui/Icons';
import { LinkWithIcon } from '@/shared/ui/LinkWithIcon';

import styles from './UserBar.module.scss';

export const UserBar = () => {
  const { user, logout } = useUserStore();
  const router = useRouter();

  if (!user) {
    return <LinkWithIcon href={PATHS.login} icon={<UserSolid />} label="Login" />;
  }

  const handleLogout = async () => {
    await logout();
    router.push(PATHS.home);
  };

  return (
    <div className={styles.container}>
      <UserSolid />
      <span>
        {user.firstName} {user.lastName}
      </span>
      <div className={styles.separator} />
      <button onClick={handleLogout}>
        <LogoutSolid />
      </button>
    </div>
  );
};
