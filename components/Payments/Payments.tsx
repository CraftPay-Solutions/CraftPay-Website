'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import './payments.css';

const gateways = [
  { id: 'przelewy24', name: 'Przelewy24', img: '/img/payments/przelewy24.png' },
  { id: 'payu',       name: 'PayU',       img: '/img/payments/payu.png' },
  { id: 'stripe',     name: 'Stripe',     img: '/img/payments/stripe.png' },
  { id: 'paypal',     name: 'PayPal',     img: '/img/payments/paypal.png' },
  { id: 'hotpay',     name: 'HotPay',     img: '/img/payments/hotpay.png' },
  { id: 'simpay',     name: 'SimPay',     img: '/img/payments/simpay.png' },
  { id: 'cashbill',   name: 'CashBill',   img: '/img/payments/cashbill.png' },
  { id: 'paybylink',  name: 'PayByLink',  img: '/img/payments/paybylink.png' },
  { id: 'dpay',       name: 'DPay',       img: '/img/payments/dpay.png' },
];

export default function Payments() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const cards = ref.current?.querySelectorAll('.pm-logo-box, .pm-more');
    if (!cards) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('pm--in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.08 });
    cards.forEach((c, i) => { (c as HTMLElement).style.transitionDelay = `${i * 0.06}s`; io.observe(c); });
    return () => io.disconnect();
  }, []);

  return (
    <>
      <section className="pm-section" ref={ref}>
        <div className="pm-container">

          <div className="pm-header-row">
            <h2 className="pm-title">
              Operatorzy płatności, których
              <span className="pm-accent"> obsługujemy</span>
            </h2>
            <p className="pm-desc">
              10 bramek, dziesiątki metod - BLIK, przelewy,
              karty, SMS Premium, PayPal i kryptowaluty.
              Wszystko w jednym miejscu.
            </p>
          </div>

          <div className="pm-grid">
            {gateways.map((gw) => (
              <div className="pm-logo-box" key={gw.id}>
                <Image
                  src={gw.img}
                  alt={gw.name}
                  width={100}
                  height={36}
                  style={{ objectFit: 'contain', filter: 'brightness(0) invert(1)', opacity: 0.75 }}
                />
              </div>
            ))}

            <div className="pm-more">
              <span className="pm-more-badge">+12 innych</span>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}