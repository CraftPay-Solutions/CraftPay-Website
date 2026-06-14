'use client';

import Link from 'next/link';
import './footer.css';
const links = {
  Produkt: [
    { label: 'Szablony', href: '#templates' },
    { label: 'Cennik', href: '#pricing' },
    { label: 'Integracje API', href: 'https://docs.craftpay.pl' },
  ],
  Wsparcie: [
    { label: 'Dokumentacja', href: 'https://docs.craftpay.pl' },
    { label: 'Serwer Wsparcia', href: 'https://discord.gg/craftpay' },
    { label: 'Wiki', href: 'https://wiki.craftpat.pl' },
  ],
};

const socials = [
  { id: 'discord', href: 'https://discord.gg/craftpay', icon: './img/icons/discord.svg' },
  { id: 'tiktok', href: 'https://www.tiktok.com/@craftpay', icon: './img/icons/tiktok.svg' },
  { id: 'youtube',  href: 'https://www.youtube.com/c/CraftPay', icon: './img/icons/youtube.svg' },
];

function HexSocial({ href, icon, id }: { href: string; icon: string; id: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="ftr-hex-link" aria-label={id}>
      <div className="ftr-hex-wrap">
        <svg className="ftr-hex-svg" viewBox="0 0 100 116" xmlns="http://www.w3.org/2000/svg">
          <polygon
            className="ftr-hex-bg"
            points="50,6 94,30 94,86 50,110 6,86 6,30"
          />
          <polygon
            className="ftr-hex-spin"
            points="50,6 94,30 94,86 50,110 6,86 6,30"
          />
        </svg>
        <span className="ftr-hex-icon">
          <img src={icon} alt={id} width={20} height={20} />
        </span>
      </div>
    </a>
  );
}

export default function Footer() {
  return (
    <>
      <div className="ftr-outer">
        <div className="ftr-container">
          <footer className="ftr-root">
            <div className="ftr-top">
              <div className="ftr-brand">
                <Link href="/" className="ftr-logo">
                    <img src="./img/logo1.svg" alt="CraftPay" className="ftr-logo-img" />
                    <span className="ftr-logo-text">
                        Craft<strong>Pay</strong>
                    </span>
                </Link>

                <p className="ftr-tagline">
                  Automatyzacja sklepu Minecraft.<br />
                  Skonfiguruj raz, zarabiaj bez przerwy.
                </p>

                <div className="ftr-socials">
                  {socials.map((s) => (
                    <HexSocial key={s.id} href={s.href} icon={s.icon} id={s.id} />
                  ))}
                </div>
              </div>

              {Object.entries(links).map(([group, items]) => (
                <div key={group} className="ftr-col">
                  <span className="ftr-col-title">{group}</span>
                  <ul className="ftr-list">
                    {items.map((item) => (
                      <li key={item.label}>
                        <Link href={item.href} className="ftr-link">{item.label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="ftr-bar">
              <span className="ftr-copy">© {new Date().getFullYear()} CraftPay Solutions.</span>
              <div className="ftr-bar-links">
                <Link href="/regulamin" className="ftr-link-sm">Regulamin</Link>
                <Link href="/polityka" className="ftr-link-sm">Prywatność</Link>
              </div>
            </div>
          </footer>

        </div>
      </div>
    </>
  );
}