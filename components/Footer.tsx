import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo-row">
              <Image src="/img/logo1.svg" className="footer-logo" alt="Logo" width={50} height={57} loading="lazy" />
              <span className="brand">
                <span className="brand-craft">Craft</span><span className="brand-pay">Pay</span>
              </span>
            </div>
            <p className="footer-desc">Automatyzacja sklepu Minecraft. Skonfiguruj raz, zarabiaj bez przerwy.</p>
            <div className="footer-socials">
              <Link href="#" className="footer-social-btn">
                <Image src="/img/discord.svg" alt="Discord" className="social-icon" width={16} height={16} loading="lazy" />
                Discord
              </Link>
              <Link href="#" className="footer-social-btn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" />
                </svg>
                TikTok
              </Link>
              <Link href="#" className="footer-social-btn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
                YouTube
              </Link>
            </div>
          </div>

          <div className="footer-links-group">
            <h4 className="footer-links-title">Nawigacja</h4>
            <ul className="footer-links">
              <li><Link href="/">Strona Główna</Link></li>
              <li><Link href="/szablony">Szablony</Link></li>
              <li><a href="https://docs.craftpay.pl">Dokumentacja</a></li>
              <li><Link href="#pricing">Cennik</Link></li>
            </ul>
          </div>

          <div className="footer-links-group">
            <h4 className="footer-links-title">Prawne</h4>
            <ul className="footer-links">
              <li><Link href="#">Kontakt</Link></li>
              <li><Link href="#">Regulamin</Link></li>
              <li><Link href="#">Polityka prywatności</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span className="footer-status">
            <span className="footer-status-dot"></span>
            Wszystkie systemy działają prawidłowo
          </span>
          <p className="footer-copy">© 2025 CraftPay. Wszelkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  );
}
