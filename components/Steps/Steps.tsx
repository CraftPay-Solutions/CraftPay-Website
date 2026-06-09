'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import './steps.css';

const IconRegister = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
    <circle cx="12" cy="7" r="4"/>
    <line x1="19" y1="8" x2="19" y2="14"/>
    <line x1="22" y1="11" x2="16" y2="11"/>
  </svg>
);

const IconConfig = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2"/>
    <path d="M8 21h8M12 17v4"/>
    <path d="M7 8h4M7 11h2"/>
    <rect x="13" y="7" width="4" height="4" rx="1"/>
  </svg>
);

const IconEarn = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 1 0 0 7h5a3.5 3.5 0 1 1 0 7H6"/>
  </svg>
);

const checks: Record<string, string[]> = {
  '01': ['Rejestracja w 30 sekund', 'Brak karty kredytowej', 'Natychmiastowy dostęp'],
  '02': ['Wybór szablonu', 'Dodawanie produktów', 'Podłączenie bramki płatności'],
  '03': ['Publikacja jednym kliknięciem', 'Automatyczne wypłaty', 'Panel statystyk na żywo'],
};

function HexIcon({ icon }: { icon: React.ReactNode }) {
  return (
    <div className="step-hex-wrap">
      <svg className="step-hex-svg" viewBox="0 0 100 116" xmlns="http://www.w3.org/2000/svg">
        <polygon className="step-hex-track" points="50,6 94,30 94,86 50,110 6,86 6,30"/>
        <polygon className="step-hex-border" points="50,6 94,30 94,86 50,110 6,86 6,30"/>
      </svg>
      <span className="step-hex-icon">{icon}</span>
    </div>
  );
}

interface StepProps {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

function Step({ number, icon, title, description }: StepProps) {
  return (
    <div className="step-card">
      <div className="step-card-top">
        <HexIcon icon={icon} />
        <span className="step-number-badge">{number}</span>
      </div>

      <h3 className="step-title">{title}</h3>
      <p className="step-desc">{description}</p>

      <ul className="step-checks">
        {checks[number].map((item) => (
          <li key={item} className="step-check-item">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <circle cx="7" cy="7" r="6.5" stroke="rgba(255,149,0,0.3)"/>
              <path d="M4 7l2 2 4-4" stroke="#FF9500" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {item}
          </li>
        ))}
      </ul>

      <div className="step-card-glow" />
    </div>
  );
}

export default function Steps() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const cards = sectionRef.current?.querySelectorAll('.step-card');
    if (!cards) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('step-card--visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    cards.forEach((card, i) => {
      (card as HTMLElement).style.transitionDelay = `${i * 0.14}s`;
      observer.observe(card);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section className="steps-section" ref={sectionRef}>
        <div className="steps-container">

          <div className="steps-heading">
            <h2 className="steps-title-main">
              Trzy kroki do 
              <span className="steps-title-accent"> działającego sklepu</span>
            </h2>
            <p className="steps-subtitle">
              Żadnego stawiania serwerów, żadnej konfiguracji VPS.<br />
              Od rejestracji do pierwszej sprzedaży w niecałe 5 minut.
            </p>
          </div>

          <div className="steps-grid">
            <Step
              number="01"
              icon={<IconRegister />}
              title="Załóż konto"
              description="Rejestracja zajmuje 30 sekund. Podaj e-mail, ustaw hasło i od razu masz dostęp do panelu."
            />
            <Step
              number="02"
              icon={<IconConfig />}
              title="Skonfiguruj sklep"
              description="Wybierz szablon, dodaj produkty i podłącz bramkę płatności. Kreator prowadzi Cię przez cały proces."
            />
            <Step
              number="03"
              icon={<IconEarn />}
              title="Zarabiaj"
              description="Opublikuj sklep jednym kliknięciem. Gracze składają zamówienia, Ty inkusujesz wypłaty automatycznie."
            />
          </div>

          <div className="steps-cta">
            <Link href="https://app.craftpay.pl/auth/register" className="steps-btn">
              Zacznij juz teraz
            </Link>
          </div>

        </div>
      </section>
    </>
  );
}