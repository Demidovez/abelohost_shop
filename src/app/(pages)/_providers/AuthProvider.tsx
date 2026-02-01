'use client';

import { useEffect } from 'react';

import { useUserStore } from '@/entities/user';

export const AuthProvider = ({ children }: React.PropsWithChildren) => {
  const { auth } = useUserStore();

  useEffect(() => {
    auth();
  }, [auth]);

  return <>{children}</>;
};
