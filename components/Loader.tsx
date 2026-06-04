'use client';

import { useEffect } from 'react';
import Image from 'next/image';

export default function Loader() {
  useEffect(() => {
    const loader = document.getElementById('loader');
    const app = document.getElementById('app');

    const timer = setTimeout(() => {
      if (!loader) return;
      loader.style.opacity = '0';
      setTimeout(() => {
        loader.style.display = 'none';
        document.body.style.overflow = 'auto';
        if (app) app.style.opacity = '1';
        if (typeof window !== 'undefined' && window.ScrollTrigger) {
          window.ScrollTrigger.refresh();
        }
      }, 400);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="loader">
      <Image src="/img/logo.svg" className="loader-logo" alt="Logo" width={109} height={125} />
    </div>
  );
}
