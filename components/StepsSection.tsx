'use client';

import { useEffect, type ReactNode } from 'react';
import Image from 'next/image';

interface Step {
  icon: string;
  title: string;
  desc: ReactNode;
}

const steps: Step[] = [
  {
    icon: '/img/icons/1.svg',
    title: 'Zarejestruj się i utwórz sklep',
    desc: <>Przejdź na <a href="https://app.craftpay.pl" className="hero-green">app.craftpay.pl</a> załóż darmowe konto i stwórz swój własny sklep w kilku prostych krokach bezpośrednio w panelu.</>,
  },
  {
    icon: '/img/icons/2.svg',
    title: 'Konfiguracja i podłączanie',
    desc: 'W ustawieniach wybierz szablon i darmową subdomenę. W panelu zarządzania dodaj produkty, serwery oraz bramki płatności. Twój sklep jest gotowy do startu!',
  },
  {
    icon: '/img/icons/3.svg',
    title: 'Teraz zarabiaj',
    desc: 'Konfiguracja zakończona sukcesem. Twój serwer jest gotowy do generowania zysków – uruchom sprzedaż!',
  },
];

export default function StepsSection() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    }, { root: null, threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.step-card').forEach(card => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="steps-section">
      <div className="container" style={{ display: 'block' }}>
        <div className="steps-header">
          <h2 className="steps-title">Proste kroki do działającego sklepu</h2>
        </div>
        <div className="steps-grid">
          {steps.map((step, i) => (
            <div className="step-card" key={i}>
              <div className="step-icon-wrapper">
                <Image src={step.icon} width={40} height={40} alt="" aria-hidden="true" loading="lazy" />
              </div>
              <h3 className="step-card-title">{step.title}</h3>
              <p className="step-card-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
