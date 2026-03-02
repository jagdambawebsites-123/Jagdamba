'use client';

import { useEffect } from 'react';

/**
 * Locks the outer window/body scroll on md+ screens (≥768px) only.
 * On mobile, the page uses normal scroll so no lock is applied.
 */
export default function ScrollLock() {
  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    const mediaQuery = window.matchMedia('(min-width: 768px)');

    const applyLock = (matches) => {
      html.style.overflow = matches ? 'hidden' : '';
      body.style.overflow = matches ? 'hidden' : '';
    };

    const handler = (e) => applyLock(e.matches);

    applyLock(mediaQuery.matches);
    mediaQuery.addEventListener('change', handler);

    return () => {
      html.style.overflow = '';
      body.style.overflow = '';
      mediaQuery.removeEventListener('change', handler);
    };
  }, []);

  return null;
}
