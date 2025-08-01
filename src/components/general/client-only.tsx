'use client';

import { ReactNode } from 'react';
import useMounted from '@/hooks/use-mounted';

interface ClientOnlyProps {
  children: ReactNode;
  fallback?: ReactNode;
}

const ClientOnly = ({ children, fallback = null }: ClientOnlyProps) => {
  const mounted = useMounted();

  if (!mounted) {
    return <>{fallback}</>;
  }

  return <>{children}</>;
};

export default ClientOnly; 