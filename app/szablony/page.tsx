'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import './templates.css';

interface Template {
  id: string;
  name: string;
  price: string;
  demoHref: string;
  img: string;
  featured?: boolean;
  tag?: string;
  features: string[];
}

const templates: Template[] = [
  {
    id: 'test',
    name: 'Test',
    price: '0',
    demoHref: 'https://app.craftpay.pl',
    img: '/img/templates/test.png',
    features: [
      'TEST',
      'TEST',
      'TEST',
      'TEST',
      'TEST',
      'TEST',
      'TEST',
      'TEST',
      'TEST',
    ],
  },
  {
    id: 'test1',
    name: 'Test1',
    price: '0',
    demoHref: 'https://app.craftpay.pl',
    img: '/img/templates/test.png',
    features: [
      'TEST',
      'TEST',
      'TEST',
      'TEST',
      'TEST',
      'TEST',
      'TEST',
      'TEST',
      'TEST',
    ],
  },
  {
    id: 'test',
    name: 'Test',
    price: '5',
    demoHref: 'https://app.craftpay.pl',
    img: '/img/templates/test.png',
    featured: true,
    features: [
      'TEST',
      'TEST',
      'TEST',
      'TEST',
      'TEST',
      'TEST',
      'TEST',
      'TEST',
      'TEST',
    ],
  },
];

const IconExternal = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
    <polyline points="15 3 21 3 21 9"/>
    <line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
);

const IconCheck = ({ accent }: { accent?: boolean }) => (
  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" style={{ flexShrink: 0 }}>
    <circle cx="6.5" cy="6.5" r="6" stroke={accent ? 'rgba(255,149,0,0.35)' : 'rgba(255,255,255,0.1)'}/>
    <path d="M4 6.5l1.8 1.8 3.5-3.5" stroke={accent ? '#FF9500' : 'rgba(255,255,255,0.35)'} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

function TemplateCard({ t, index }: { t: Template; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { card.classList.add('tpl-card--in'); io.disconnect(); } },
      { threshold: 0.06 }
    );
    card.style.transitionDelay = `${index * 0.08}s`;
    io.observe(card);
    return () => io.disconnect();
  }, [index]);

  return (
    <div className={`tpl-card${t.featured ? ' tpl-card--featured' : ''}`} ref={cardRef}>
      <div className="tpl-img-wrap">
        <Image src={t.img} alt={t.name} fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 33vw" />
        <div className="tpl-img-overlay" />
        {t.tag && (
          <div className={`tpl-img-badge${t.tag === 'Pro' ? ' tpl-img-badge--pro' : ''}`}>
            {t.tag}
          </div>
        )}
      </div>

      <div className="tpl-body">
        <h3 className="tpl-name">{t.name}</h3>
        <p className="tpl-features-label">Dostępne funkcje:</p>
        <ul className="tpl-features">
          {t.features.map((f) => (
            <li key={f} className="tpl-feature">
              <IconCheck accent={t.featured} />
              {f}
            </li>
          ))}
        </ul>

        <div className="tpl-footer">
          <div className="tpl-price">
            <span className="tpl-price-num">{t.price === '0' ? 'Free' : `${t.price} PLN`}</span>
          </div>
          <Link href={t.demoHref} className={`tpl-demo-btn${t.featured ? ' tpl-demo-btn--featured' : ''}`} target="_blank" rel="noopener noreferrer">
            Zobacz demo
            <IconExternal />
          </Link>
        </div>
      </div>

      {t.featured && <div className="tpl-card-glow" />}
    </div>
  );
}

export default function TemplatesPage() {
  return (
    <>
      <Navbar />
      <main className="tpls-root">
        <div className="tpls-container">

          <div className="tpls-header">
            <div className="tpls-eyebrow">
              <span className="tpls-dot" />
              Szablony
            </div>
            <h1 className="tpls-title">
              Wybierz swój<br />
              <span className="tpls-accent">szablon sklepu</span>
            </h1>
            <p className="tpls-subtitle">
              Każdy szablon możesz wypróbować za darmo przed zakupem.<br />
              Jeden klik - sklep żyje w sieci.
            </p>
          </div>

          <div className="tpl-grid">
            {templates.map((t, i) => (
              <TemplateCard key={t.id} t={t} index={i} />
            ))}
          </div>

        </div>
      </main>
    </>
  );
}