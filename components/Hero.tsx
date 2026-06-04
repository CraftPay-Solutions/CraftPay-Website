import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <div className="container">
      <div className="hero">
        <div className="hero-badge">
          <span className="hero-badge-dot"></span>
          <b>Dołącz do nas już dziś i ciesz się darmowym itemshopem</b>
        </div>

        <h1 className="hero-title">
          Automatyzacja sklepu Minecraft.<br />
          Skonfiguruj raz, <span className="hero-green">zarabiaj bez przerwy.</span>
        </h1>

        <p className="hero-sub">
          Zakładasz konto i Twój itemshop od razu żyje w sieci. Zero konfiguracji serwera, zero ukrytych opłat. Ty
          wybierasz bramki płatności, my zajmujemy się resztą.
        </p>

        <div className="hero-btns">
          <Link href="#" className="hero-btn-primary">Stwórz swój pierwszy sklep</Link>
          <Link href="#" className="hero-btn-secondary">Dowiedz się więcej</Link>
        </div>

        <div className="trusted-box">
          <div className="trusted-corner top-left"></div>
          <div className="trusted-corner top-right"></div>
          <div className="trusted-corner bottom-left"></div>
          <div className="trusted-corner bottom-right"></div>
          <div className="trusted-avatars">
            <Image src="/img/avatar1.png" alt="Avatar użytkownika CraftPay" width={63} height={63} loading="lazy" />
            <Image src="/img/avatar2.png" alt="Avatar użytkownika CraftPay" width={63} height={63} loading="lazy" />
            <Image src="/img/avatar3.png" alt="Avatar użytkownika CraftPay" width={63} height={63} loading="lazy" />
            <Image src="/img/avatar4.png" alt="Avatar użytkownika CraftPay" width={63} height={63} loading="lazy" />
          </div>
          <div className="trusted-text">
            Zaufało nam już ponad<br />
            <span>50 serwerów</span>
          </div>
        </div>
      </div>

      <div className="hero-decoration">
        <Image src="/img/vector1.svg" className="vector vector-1" alt="" aria-hidden="true" width={950} height={600} />
        <Image src="/img/vector2.svg" className="vector vector-2" alt="" aria-hidden="true" width={560} height={400} />
        <Image src="/img/vector3.svg" className="vector vector-3" alt="" aria-hidden="true" width={560} height={400} />
        <div className="polygon-center">
          <Image src="/img/polygon.svg" className="polygon" alt="" aria-hidden="true" width={400} height={400} />
          <Image src="/img/render.webp" className="render" alt="Podgląd panelu itemshopu CraftPay" width={1231} height={1699} />
        </div>
        <Image src="/img/vector-emerald1.svg" className="vector vector-emerald1" alt="" aria-hidden="true" width={72} height={72} />
        <Image src="/img/vector-emerald2.svg" className="vector vector-emerald2" alt="" aria-hidden="true" width={72} height={72} />
        <Image src="/img/vector-emerald3.svg" className="vector vector-emerald3" alt="" aria-hidden="true" width={72} height={72} />
      </div>
    </div>
  );
}
