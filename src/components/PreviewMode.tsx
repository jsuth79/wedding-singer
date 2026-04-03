'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

export default function PreviewMode() {
  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams.get('preview') === 'true') {
      localStorage.setItem('umami.disabled', '1');
    }
  }, [searchParams]);

  return null;
}
