'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { identifySession, updateFunnelStage } from '@/lib/analytics';

export default function SessionInitializer() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.umami) {
      identifySession();
      return;
    }
    let attempts = 0;
    const interval = setInterval(() => {
      attempts++;
      if (window.umami) {
        identifySession();
        clearInterval(interval);
      } else if (attempts >= 30) {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    updateFunnelStage(pathname);
  }, [pathname]);

  return null;
}
