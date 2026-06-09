'use client';

import { useState, useRef, useEffect } from 'react';
import './faq.css'

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: 'Czy CraftPay jest możliwy w wersji darmowej?',
    answer: 'Tak. CraftPay oferuję możliwość założenia darmowego sklepu lecz posiada ograniczone funkcję.',
  },
  {
    question: 'Czy mogę założyć sklep jeżeli jestem niepełnoletni?',
    answer: 'Możesz założyć sklep i zacząć zarabiać bez konieczności bycia pełnoletnim.',
  },
  {
    question: 'Czy aby założyć sklep wymagana jest firma?',
    answer: 'Nie musisz posiadać działalności gospodarczej, aby zarabiać na CraftPay. Wspieramy operatorów płatności obsługujących działalność nierejestrowaną. Więcej informacji znajdziesz na naszym wiki.',
  },
  {
    question: 'Jak długo trwa uruchomienie sklepu?',
    answer: 'Średnio około 5 minut. Zakładasz konto, wybierasz szablon, dodajesz produkty i gotowe - sklep działa i przyjmuje płatności..',
  },
  {
    question: 'Czy można podpiąć własną domenę?',
    answer: 'Tak, możesz podpiąć własną domene pod sklep.',
  },
    {
    question: 'Czy pobieracie prowizję od sprzedaży?',
    answer: 'CraftPay nie pobiera prowizji od sprzedaży i nie ogranicza Twoich zarobków. Nawet w darmowym planie korzystasz bez ukrytych opłat i limitów, płacisz jedynie za szablony.',
  },
];

function FAQItemCard({ item, isOpen, onClick, index, isVisible }: { item: FAQItem; isOpen: boolean; onClick: () => void; index: number; isVisible: boolean }) {
  return (
    <div className={`faq-card ${isOpen ? 'faq-card--open' : ''} ${isVisible ? 'faq-card--in' : ''}`} data-index={index}>
      <button className="faq-question-btn" onClick={onClick} aria-expanded={isOpen}>
        <span className="faq-question-text">{item.question}</span>
        <span className="faq-chevron-wrap">
          <svg className="faq-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </span>
      </button>
      <div className={`faq-answer-wrapper ${isOpen ? 'faq-answer-wrapper--open' : ''}`}>
        <div className="faq-answer-content">
          <p className="faq-answer-text">{item.answer}</p>
        </div>
      </div>
      <div className="faq-card-glow" />
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [visibleIndices, setVisibleIndices] = useState<Record<number, boolean>>({});
  const sectionRef = useRef<HTMLElement>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    const cards = sectionRef.current?.querySelectorAll('.faq-card');
    if (!cards) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const indexStr = e.target.getAttribute('data-index');
            if (indexStr !== null) {
              const idx = parseInt(indexStr, 10);
              setVisibleIndices((prev) => ({ ...prev, [idx]: true }));
            }
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.05 }
    );
    cards.forEach((c) => io.observe(c));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <section className="faq-section" ref={sectionRef} id="faq">
        <div className="faq-container">
          <div className="faq-left">
            <div className="faq-eyebrow">
              <span className="faq-dot" />
              Pomoc i FAQ
            </div>
            <h2 className="faq-title">
              Masz pytania?<br />
              <span className="faq-accent">Mamy odpowiedzi.</span>
            </h2>
            <p className="faq-subtitle">
              Zebraliśmy najczęstsze pytania i wątpliwości naszych użytkowników. Jeśli nie znajdziesz tu odpowiedzi, zapraszamy na nasz serwer Discord.
            </p>
            <a href="https://discord.gg/craftpay" target="_blank" rel="noopener noreferrer" className="faq-btn">
              Dołącz do Discorda
            </a>
          </div>

          <div className="faq-list">
            {faqData.map((item, index) => (
              <FAQItemCard
                key={index}
                item={item}
                isOpen={openIndex === index}
                onClick={() => handleToggle(index)}
                index={index}
                isVisible={!!visibleIndices[index]}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
