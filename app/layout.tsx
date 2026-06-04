import './globals.css';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Loader from '@/components/Loader';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'CraftPay - Nowoczesna Automatyzacja Sklepów Minecraft',
  description: 'Zbuduj własny sklep Minecraft w kilka minut. W pełni darmowy, bez ograniczeń i ukrytych opłat. Zacznij zarabiać na swoich serwerach już dziś.',
  metadataBase: new URL('https://craftpay.pl'),
  openGraph: {
    type: 'website',
    title: 'CraftPay - Nowoczesna Automatyzacja Sklepów Minecraft',
    description: 'Zbuduj własny sklep Minecraft w kilka minut. W pełni darmowy, bez ograniczeń i ukrytych opłat. Zacznij zarabiać na swoich serwerach już dziś.',
    url: 'https://craftpay.pl',
    siteName: 'CraftPay',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://craftpay.pl',
  },
  icons: {
    icon: '/img/favicon.ico',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
      <html lang="pl">
      <head>
        <meta name="theme-color" content="#09C777" />
      </head>
      <body>
      <Loader />

      <div id="app">
        {children}
      </div>

      <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"
          strategy="afterInteractive"
      />
      <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"
          strategy="afterInteractive"
      />
      </body>
      </html>
  );
}