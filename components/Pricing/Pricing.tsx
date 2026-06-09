'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import './pricing.css';

const plans = [
  {
    id: 'free',
    name: 'Free',
    badge: null,
    price: { monthly: '0', yearly: '0' },
    period: 'na zawsze',
    desc: 'Wszystko czego potrzebujesz żeby zacząć. Zero opłat, zero karty kredytowej.',
    cta: 'Zacznij za darmo',
    ctaHref: 'https://app.craftpay.pl/auth/register',
    featured: false,
    features: [
      'Darmowa subdomena sklepu',
      'Nieograniczone produkty',
      'Historia zamówień',
      'Vouchery i kody rabatowe',
      'Statystyki sprzedaży',
      'System walut',
      'Dostęp do API sklepu',
      'Obsługa 10 bramek płatności',
    ],
  },
  {
    id: 'pro',
    name: 'Pro',
    badge: 'Najlepszy wybór',
    price: { monthly: '49', yearly: '39' },
    period: 'zł / mies.',
    desc: 'Dla serwerów które chcą się wyróżnić. Własna domena, brak brandingu i więcej.',
    cta: 'Wybierz Pro',
    ctaHref: 'https://app.craftpay.pl/auth/register',
    featured: true,
    features: [
      'Wszystko z planu Free',
      'Własna domena (SaaS)',
      'Brak brandingu CraftPay',
      'Ogłoszenia w sklepie',
      'Cele miesięczne',
      'Dzienna nagroda dla graczy',
      'Priorytetowe wsparcie 24/7',
      'Wczesny dostęp do nowych funkcji',
    ],
  },
];

export default function Pricing() {
  const ref = useRef<HTMLElement>(null);
  const [yearly, setYearly] = useState(false);

  useEffect(() => {
    const cards = ref.current?.querySelectorAll('.pc-card');
    if (!cards) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('pc-card--in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.1 });
    cards.forEach((c, i) => { (c as HTMLElement).style.transitionDelay = `${i * 0.12}s`; io.observe(c); });
    return () => io.disconnect();
  }, []);

  return (
    <>
      <section className="pc-section" ref={ref} id="pricing">
        <div className="pc-container">
          <div className="pc-heading">

            <h2 className="pc-title">
              Prosty cennik,<br />
              <span className="pc-accent">zero niespodzianek</span>
            </h2>
            <p className="pc-subtitle">
              Zacznij za darmo i przejdź na Pro kiedy będziesz gotowy.
            </p>

            <div className="pc-toggle-wrap">
              <button
                className={`pc-toggle-btn${!yearly ? ' pc-toggle-btn--active' : ''}`}
                onClick={() => setYearly(false)}
              >
                Miesięcznie
              </button>
              <button
                className={`pc-toggle-btn${yearly ? ' pc-toggle-btn--active' : ''}`}
                onClick={() => setYearly(true)}
              >
                Rocznie
                <span className="pc-save-pill">-20%</span>
              </button>
            </div>
          </div>

          <div className="pc-grid">
            {plans.map((plan) => (
              <div
                className={`pc-card${plan.featured ? ' pc-card--featured' : ''}`}
                key={plan.id}
              >
                {plan.badge && (
                  <div className="pc-badge">{plan.badge}</div>
                )}

                <div className="pc-card-top">
                  <div className="pc-hex">
                    <svg viewBox="0 0 100 116" width="44" height="52">
                      <polygon
                        points="50,6 94,30 94,86 50,110 6,86 6,30"
                        fill={plan.featured ? 'rgba(255,149,0,0.12)' : 'rgba(255,255,255,0.05)'}
                        stroke={plan.featured ? 'rgba(255,149,0,0.4)' : 'rgba(255,255,255,0.12)'}
                        strokeWidth="2"
                      />
                      {plan.featured ? (
                        <text x="50" y="68" textAnchor="middle" fontSize="35" fill="#FF9500">★</text>
                      ) : (
                        <text x="50" y="65" textAnchor="middle" fontSize="26" fill="rgba(255,255,255,0.5)">◇</text>
                      )}
                    </svg>
                  </div>

                  <div>
                    <div className="pc-plan-name">{plan.name}</div>
                    <div className="pc-plan-desc">{plan.desc}</div>
                  </div>
                </div>

                <div className="pc-price-row">
                  <span className="pc-price">
                    {yearly ? plan.price.yearly : plan.price.monthly}
                  </span>
                  <div className="pc-price-meta">
                    <span className="pc-currency">zł</span>
                    <span className="pc-period">{plan.period}</span>
                  </div>
                </div>

                <Link
                  href={plan.ctaHref}
                  className={`pc-cta${plan.featured ? ' pc-cta--featured' : ''}`}
                >
                  {plan.cta}
                </Link>

                <div className="pc-divider">
                  <span>Co zawiera plan</span>
                </div>

                <ul className="pc-features">
                  {plan.features.map((f) => (
                    <li key={f} className="pc-feature">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <circle
                          cx="8" cy="8" r="7.5"
                          stroke={plan.featured ? 'rgba(255,149,0,0.3)' : 'rgba(255,255,255,0.1)'}
                        />
                        <path
                          d="M5 8l2 2 4-4"
                          stroke={plan.featured ? '#FF9500' : 'rgba(255,255,255,0.4)'}
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>

                {plan.featured && <div className="pc-glow" />}
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}