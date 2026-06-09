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
    twitter: {
        card: 'summary',
        title: 'CraftPay - Nowoczesna Automatyzacja Sklepów Minecraft',
        description: 'Zbuduj własny sklep Minecraft w kilka minut...',
        images: ['https://craftpay.pl/img/web-app-manifest-512x512.png'],
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
        <meta name="theme-color" content="#FF9500" />
        <meta name="google-site-verification" content="T5jnl1i3jErQjlKfkyQ9ZXm7OUvQ6ckLY42S228Sor4" />

        <link rel="icon" type="image/png" href="./img/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="./img/favicon.svg" />
        <link rel="shortcut icon" href="./img/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="./img/apple-touch-icon.png" />
        <link rel="manifest" href="./img/site.webmanifest" />
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