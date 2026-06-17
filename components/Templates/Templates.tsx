'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import './templates.css';

interface Template {
  id: string;
  name: string;
  price: string;
  demoHref: string;
  img: string;
  featured?: boolean;
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
    id: 'ember',
    name: 'Ember',
    price: '10,00',
    demoHref: 'https://app.craftpay.pl',
    img: 'https://i.imgur.com/fYLFSpp.png',
    features: [
      'Ostatnie zakupy',
      'Cele serwera',
      'Ogłoszenia',
      'SocialMedia',
      'Sklep',
      'Voucher',
      'Dokumenty',
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
      { threshold: 0.08 }
    );
    card.style.transitionDelay = `${index * 0.12}s`;
    io.observe(card);
    return () => io.disconnect();
  }, [index]);

  return (
    <div className={`tpl-card${t.featured ? ' tpl-card--featured' : ''}`} ref={cardRef}>

      <div className="tpl-img-wrap">
        <Image
          src={t.img}
          alt={t.name}
          fill
          style={{ objectFit: 'cover' }}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="tpl-img-overlay" />
        {t.featured && <div className="tpl-img-badge">Popularny</div>}
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
            <span className="tpl-price-num">{t.price}</span>
            <span className="tpl-price-unit">wPLN</span>
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

export default function Templates() {
  return (
    <>
      <section className="tpl-section" id="templates">
        <div className="tpl-container">
          <div className="tpl-header">
            <div className="tpl-header-left">
              <h2 className="tpl-title">
                Zobacz nasze <span className="tpl-accent">szablony </span>
              </h2>
              <p className="tpl-subtitle">Sprawdź nasze dostępne szablony.</p>
            </div>
            <Link href="https://app.craftpay.pl" className="tpl-all-btn">
              Zobacz wszystkie
            </Link>
          </div>

          <div className="tpl-grid">
            {templates.map((t, i) => (
              <TemplateCard key={t.id} t={t} index={i} />
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
