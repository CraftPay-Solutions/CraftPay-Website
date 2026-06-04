'use client';

import { useEffect } from 'react';
import Image from 'next/image';

interface FaqItem {
  q: string;
  a: string;
}

const faqs: FaqItem[] = [
  { q: 'Czy CraftPay jest możliwy w wersji darmowej?', a: 'Tak. CraftPay oferuję możliwość założenia darmowego sklepu lecz posiada ograniczone funkcję' },
  { q: 'Czy mogę założyć sklep jeżeli jestem niepełnoletni?', a: 'Możesz założyć sklep i zacząć zarabiać bez konieczności bycia pełnoletnim.' },
  { q: 'Czy aby założyć sklep wymagana jest firma?', a: 'Nie musisz posiadać działalności gospodarczej, aby zarabiać na CraftPay. Wspieramy operatorów płatności obsługujących działalność nierejestrowaną. Więcej informacji znajdziesz na naszym wiki.' },
  { q: 'Jak długo trwa uruchomienie sklepu?', a: 'Średnio około 5 minut. Zakładasz konto, wybierasz szablon, dodajesz produkty i gotowe — sklep działa i przyjmuje płatności.' },
  { q: 'Czy można podpiąć własną domenę?', a: 'Tak, możesz podpiąć własną domene pod sklep.' },
  { q: 'Czy pobieracie prowizję od sprzedaży?', a: 'CraftPay nie pobiera prowizji od sprzedaży i nie ogranicza Twoich zarobków. Nawet w darmowym planie korzystasz bez ukrytych opłat i limitów, płacisz jedynie za szablony.' },
];

export default function FaqSection() {
  useEffect(() => {
    const buttons = document.querySelectorAll<HTMLButtonElement>('.faq-question');

    const handlers: { btn: HTMLButtonElement; h: () => void }[] = [];
    buttons.forEach(btn => {
      const h = () => {
        const item = btn.closest('.faq-item');
        if (!item) return;
        const isOpen = item.classList.contains('open');
        document.querySelectorAll('.faq-item.open').forEach(el => el.classList.remove('open'));
        if (!isOpen) item.classList.add('open');
      };
      handlers.push({ btn, h });
      btn.addEventListener('click', h);
    });

    return () => handlers.forEach(({ btn, h }) => btn.removeEventListener('click', h));
  }, []);

  return (
    <section className="faq-section">
      <div className="container" style={{ display: 'block' }}>
        <div className="faq-layout">
          <div className="faq-left">
            <div className="faq-header">
              <h2 className="benefits-title">Najczęściej zadawane <span className="hero-green">pytania</span></h2>
              <p className="benefits-subtitle">Nie znalazłeś odpowiedzi? Napisz do nas na Discord.</p>
            </div>
            <div className="faq-list">
              {faqs.map((faq, i) => (
                <div className="faq-item" key={i}>
                  <button className="faq-question">
                    <span>{faq.q}</span>
                    <svg className="faq-chevron" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>
                  <div className="faq-answer">
                    <p>{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="faq-right">
            <Image src="/img/faq.svg" alt="Ilustracja FAQ CraftPay" className="faq-image" width={580} height={580} loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
}
