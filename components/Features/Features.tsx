'use client';

import { useEffect, useRef } from 'react';
import './features.css';

const IconProducts = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="7" height="7" rx="1.5"/>
    <rect x="15" y="3" width="7" height="7" rx="1.5"/>
    <rect x="2" y="14" width="7" height="7" rx="1.5"/>
    <rect x="15" y="14" width="7" height="7" rx="1.5"/>
  </svg>
);

const IconCart = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
    <line x1="3" y1="6" x2="21" y2="6"/>
    <path d="M16 10a4 4 0 01-8 0"/>
  </svg>
);

const IconVoucher = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 12V7a1 1 0 00-1-1H5a1 1 0 00-1 1v5"/>
    <path d="M4 12v5a1 1 0 001 1h14a1 1 0 001-1v-5"/>
    <path d="M12 6v12M4 12h16"/>
    <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none"/>
  </svg>
);

const IconStats = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="20" x2="18" y2="10"/>
    <line x1="12" y1="20" x2="12" y2="4"/>
    <line x1="6" y1="20" x2="6" y2="14"/>
    <line x1="2" y1="20" x2="22" y2="20"/>
  </svg>
);

const IconReward = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="6"/>
    <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
  </svg>
);

const IconAPI = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6"/>
    <polyline points="8 6 2 12 8 18"/>
    <line x1="12" y1="2" x2="12" y2="22" strokeDasharray="3 3"/>
  </svg>
);

interface Feature {
  id: string;
  icon: React.ReactNode;
  title: string;
  desc: string;
  tag?: string;
}

const features: Feature[] = [
  {
    id: 'products',
    icon: <IconProducts />,
    title: 'Nieograniczone produkty',
    desc: 'Dodaj dowolną liczbę przedmiotów, pakietów i rangi bez żadnych limitów.',
    tag: 'Free',
  },
  {
    id: 'cart',
    icon: <IconCart />,
    title: 'Koszyk i zamówienia',
    desc: 'Gracze mogą składać zamówienia na wiele produktów naraz. Pełna historia transakcji w panelu.',
  },
  {
    id: 'vouchers',
    icon: <IconVoucher />,
    title: 'Vouchery i kody rabatowe',
    desc: 'Twórz kody procentowe lub kwotowe, jednorazowe lub wielokrotnego użytku.',
    tag: 'Free',
  },
  {
    id: 'stats',
    icon: <IconStats />,
    title: 'Statystyki sprzedaży',
    desc: 'Śledź przychody, najpopularniejsze produkty i aktywność graczy w czasie rzeczywistym.',
  },
  {
    id: 'rewards',
    icon: <IconReward />,
    title: 'Dzienna nagroda dla graczy',
    desc: 'Automatyczny system nagród, który zachęca graczy do codziennych odwiedzin sklepu.',
    tag: 'Pro',
  },
  {
    id: 'api',
    icon: <IconAPI />,
    title: 'Dostęp do API sklepu',
    desc: 'Integruj sklep z własnym botem, pluginem lub zewnętrznymi systemami przez REST API.',
    tag: 'Free',
  },
];

function HexIcon({ icon, featured }: { icon: React.ReactNode; featured?: boolean }) {
  return (
    <div className="ft-hex-wrap">
      <svg className="ft-hex-svg" viewBox="0 0 100 116" xmlns="http://www.w3.org/2000/svg">
        <polygon
          className="ft-hex-bg"
          points="50,6 94,30 94,86 50,110 6,86 6,30"
          style={{
            fill: featured ? 'rgba(255,149,0,0.1)' : 'rgba(255,255,255,0.04)',
            stroke: featured ? 'rgba(255,149,0,0.3)' : 'rgba(255,255,255,0.08)',
          }}
        />
        <polygon
          className="ft-hex-spin"
          points="50,6 94,30 94,86 50,110 6,86 6,30"
        />
      </svg>
      <span className="ft-hex-icon">{icon}</span>
    </div>
  );
}

const tagColors: Record<string, string> = {
  Free: 'rgba(255,255,255,0.06)',
  Pro: 'rgba(255,149,0,0.12)',
};
const tagTextColors: Record<string, string> = {
  Free: 'rgba(255,255,255,0.35)',
  Pro: '#FF9500',
};

export default function Features() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const cards = sectionRef.current?.querySelectorAll('.ft-card');
    if (!cards) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) { e.target.classList.add('ft-card--in'); io.unobserve(e.target); }
        });
      },
      { threshold: 0.1 }
    );
    cards.forEach((c, i) => {
      (c as HTMLElement).style.transitionDelay = `${i * 0.09}s`;
      io.observe(c);
    });
    return () => io.disconnect();
  }, []);

  return (
    <>
      <section className="ft-section" ref={sectionRef} id="features">
        <div className="ft-container">

          <div className="ft-left">
            <h2 className="ft-title">
              Nasz panel posiada<br />
              <span className="ft-accent">wszystkie funkcje</span>
            </h2>
            <p className="ft-subtitle">
              Nasz intuicyjny panel administracyjny zapewnia pełną kontrolę
              nad sklepem. Zarządzaj wszystkim w jednym miejscu.
            </p>
            <a href="https://app.craftpay.pl/auth/register" className="ft-btn">
              Sprawdź cały panel
            </a>
          </div>

          <div className="ft-grid">
            {features.map((f) => {
              const isPro = f.tag === 'Pro';
              return (
                <div className={`ft-card${isPro ? ' ft-card--pro' : ''}`} key={f.id}>
                  <div className="ft-card-inner">
                    <HexIcon icon={f.icon} featured={isPro} />
                    {f.tag && (
                      <span
                        className="ft-tag"
                        style={{
                          background: tagColors[f.tag],
                          color: tagTextColors[f.tag],
                          borderColor: isPro ? 'rgba(255,149,0,0.2)' : 'rgba(255,255,255,0.08)',
                        }}
                      >
                        {f.tag}
                      </span>
                    )}
                  </div>
                  <h3 className="ft-card-title">{f.title}</h3>
                  <p className="ft-card-desc">{f.desc}</p>
                  {isPro && <div className="ft-card-glow" />}
                </div>
              );
            })}
          </div>

        </div>
      </section>
    </>
  );
}