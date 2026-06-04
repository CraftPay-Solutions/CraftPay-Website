import Image from 'next/image';
import Link from 'next/link';

interface Template {
  img: string;
  alt: string;
  name: string;
}

const templates: Template[] = [
  { img: '/img/templatesgold.webp', alt: 'Podgląd szablonu CraftPay Gold', name: 'CraftPay-Gold' },
  { img: '/img/templates/diamond.webp', alt: 'Podgląd szablonu CraftPay Diamond', name: 'CraftPay-Diamond' },
  { img: '/img/templates/emerald.webp', alt: 'Podgląd szablonu CraftPay Emerald', name: 'CraftPay-Emerald' },
];

export default function TemplatesSection() {
  return (
    <section id="templates" className="templates-section">
      <div className="container" style={{ display: 'block' }}>
        <div className="templates-header">
          <div>
            <h2 className="templates-title">
              Zobacz nasze wszystkie dostępne<span className="hero-green"> szablony</span>
            </h2>
            <p className="templates-subtitle">Sprawdź przykładowe szablony dla Twojego itemshopa.</p>
          </div>
          <Link href="/szablony" className="templates-btn-all">Zobacz wszystkie</Link>
        </div>
        <div className="templates-grid">
          {templates.map((t) => (
            <div className="template-card" key={t.name}>
              <div className="template-preview">
                <Image src={t.img} alt={t.alt} width={1024} height={1024} loading="lazy" />
              </div>
              <div className="template-info">
                <h3 className="template-name">{t.name}</h3>
                <p className="template-features-label">Dostępne funkcje:</p>
                <ul className="template-features">
                  {Array(7).fill(null).map((_, i) => <li key={i}>Test</li>)}
                </ul>
              </div>
              <div className="template-footer">
                <span className="template-price">0,00 PLN</span>
                <Link href="#" className="template-demo-btn">
                  Zobacz demo
                  <Image src="/img/icons/external-link.svg" width={14} height={14} alt="" aria-hidden="true" loading="lazy" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
