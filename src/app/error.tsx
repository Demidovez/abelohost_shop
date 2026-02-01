'use client';

import { useEffect } from 'react';

import { PagePlaceholder } from '@/shared/ui/PagePlaceholder';

interface ErrorProps {
  error: Error & { digest?: string };
}

export default function Error({ error }: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <PagePlaceholder title="Something went wrong!" description={`Error: ${error.message}`} />
    </div>
  );
}
