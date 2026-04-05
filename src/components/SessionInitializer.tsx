'use client';

import { useEffect } from 'react';
import { identifySession } from '@/lib/analytics';

export default function SessionInitializer() {
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

  return null;
}
