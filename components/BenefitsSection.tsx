import Image from 'next/image';

interface Benefit {
  icon: string;
  title: string;
  desc: string;
  stat: string;
  statLabel: string;
  green?: boolean;
  iconDark?: boolean;
}

const benefits: Benefit[] = [
  {
    icon: '/img/icons/flash.svg',
    title: 'Błyskawiczne uruchomienie',
    desc: 'Twój sklep działa w ciągu kilku minut od rejestracji. Zero konfiguracji serwera, zero technicznej wiedzy.',
    stat: '~5 min',
    statLabel: 'do działającego sklepu',
    green: true,
  },
  {
    icon: '/img/icons/privacy.svg',
    title: 'Pełne bezpieczeństwo',
    desc: 'SSL, szyfrowanie transakcji i ochrona danych graczy. Twoi gracze mogą płacić bez obaw.',
    stat: 'SSL',
    statLabel: 'szyfrowane transakcje',
  },
  {
    icon: '/img/icons/payments.svg',
    title: 'Dowolna bramka płatności',
    desc: 'HotPay, PayPal, Stripe, BLIK, Crypto - jako pierwsi w Polsce łączymy dowolnego operatora płatności.',
    stat: '8+',
    statLabel: 'operatorów płatności',
  },
  {
    icon: '/img/icons/templates.svg',
    title: 'Personalizacja szablonów',
    desc: 'Wybierz jeden z gotowych szablonów i dostosuj go do swojego serwera. Twoja marka, Twój styl.',
    stat: '10+',
    statLabel: 'gotowych szablonów',
  },
  {
    icon: '/img/icons/trust.svg',
    title: 'Zaufało nam 50+ serwerów',
    desc: 'Dołącz do rosnącej społeczności właścicieli serwerów, którzy już zarabiają z CraftPay.',
    stat: '50+',
    statLabel: 'aktywnych serwerów',
  },
  {
    icon: '/img/icons/stats.svg',
    title: 'Statystyki w czasie rzeczywistym',
    desc: 'Śledź sprzedaż, aktywność graczy i przychody na żywo z przejrzystego panelu administracyjnego.',
    stat: 'Live',
    statLabel: 'dane na żywo',
    green: true,
    iconDark: true,
  },
];

export default function BenefitsSection() {
  return (
    <section className="benefits-section">
      <div className="container" style={{ display: 'block' }}>
        <div className="benefits-header">
          <h2 className="benefits-title">Zalety korzystania z <span className="hero-green">CraftPay</span></h2>
          <p className="benefits-subtitle">Wszystko czego potrzebuje Twój serwer Minecraft w jednym miejscu.</p>
        </div>
        <div className="benefits-grid">
          {benefits.map((b) => (
            <div key={b.title} className={`benefit-card${b.green ? ' benefit-card--green' : ''}`}>
              <div className={`benefit-icon${b.iconDark ? ' benefit-icon--dark' : ''}`}>
                <Image src={b.icon} width={40} height={40} alt="" aria-hidden="true" loading="lazy" />
              </div>
              <h3 className="benefit-card-title">{b.title}</h3>
              <p className="benefit-card-desc">{b.desc}</p>
              <div className="benefit-stat">
                <span className="benefit-stat-value">{b.stat}</span>
                <span className="benefit-stat-label">{b.statLabel}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
