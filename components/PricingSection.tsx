'use client';

import { useEffect, type ReactNode } from 'react';
import Link from 'next/link';

const freeFeatures: ReactNode[] = [
  <>Darmowa subdomena - <span className="pricing-subdomain">nazwaserwera<span className="pricing-subdomain-suffix">.cfpay.pl</span></span></>,
  'System walut',
  'Historia zamówień',
  'Vouchery i kody rabatowe',
  'Statystyki sprzedaży',
  'Dostęp do API',
];

const premiumFeatures: ReactNode[] = [
  <>Darmowa subdomena - <span className="pricing-subdomain">nazwaserwera<span className="pricing-subdomain-suffix">.cfpay.pl</span></span></>,
  'System walut',
  'Historia zamówień',
  'Vouchery i kody rabatowe',
  'Statystyki sprzedaży',
  'Brak informacji o CraftPay w stópce strony',
  'Ogłoszenia w sklepie',
  'Możliwość dodania własnej domeny',
  'Dostęp do API',
];

export default function PricingSection() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    }, { root: null, threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.pricing-card').forEach(card => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="pricing" className="pricing-section">
      <div className="container" style={{ display: 'block' }}>
        <div className="pricing-header">
          <h2 className="pricing-title">Wybierz plan <span className="hero-green">dopasowany do Ciebie</span></h2>
          <p className="pricing-subtitle">Zacznij za darmo i skaluj w miarę wzrostu Twojego serwera.</p>
        </div>
        <div className="pricing-grid-two">
          <div className="pricing-card">
            <div className="pricing-plan-name">Pakiet Free</div>
            <p className="pricing-plan-desc">Zacznij sprzedawać online od zaraz, bez żadnych kosztów początkowych.</p>
            <div className="pricing-price">
              <span className="pricing-amount">0,00</span>
              <div className="pricing-price-meta">
                <span className="pricing-currency">PLN</span>
                <span className="pricing-period"> netto / mies.</span>
              </div>
            </div>
            <Link href="#" className="pricing-btn pricing-btn-outline">Zacznij za darmo</Link>
            <div className="pricing-divider"></div>
            <ul className="pricing-features">
              {freeFeatures.map((f, i) => (
                <li key={i}><span className="pricing-check">✓</span><span>{f}</span></li>
              ))}
            </ul>
          </div>
          <div className="pricing-card pricing-card-featured">
            <div className="pricing-plan-name">Pakiet Premium</div>
            <p className="pricing-plan-desc">Dołączając do pakietu Premium uzyskujesz dostęp do wszystkich funkcji</p>
            <div className="pricing-price">
              <span className="pricing-amount">19,99</span>
              <div className="pricing-price-meta">
                <span className="pricing-currency">PLN</span>
                <span className="pricing-period"> netto / mies.</span>
              </div>
            </div>
            <Link href="#" className="pricing-btn pricing-btn-primary">Wybierz Premium</Link>
            <div className="pricing-divider"></div>
            <ul className="pricing-features">
              {premiumFeatures.map((f, i) => (
                <li key={i}><span className="pricing-check">✓</span><span>{f}</span></li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
