'use client';

import { useEffect } from 'react';
import Image from 'next/image';

interface Payment {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const payments: Payment[] = [
  { src: '/img/payments/hotpay.png', alt: 'HotPay', width: 330, height: 110 },
  { src: '/img/payments/paypal.png', alt: 'PayPal', width: 330, height: 110 },
  { src: '/img/payments/nowpayments.png', alt: 'NowPayments', width: 163, height: 21 },
  { src: '/img/payments/stripe.png', alt: 'Stripe', width: 330, height: 110 },
  { src: '/img/payments/przelewy24.png', alt: 'Przelewy24', width: 1000, height: 350 },
  { src: '/img/payments/payu.png', alt: 'PayU', width: 810, height: 405 },
  { src: '/img/payments/cashbill.png', alt: 'CashBill', width: 990, height: 330 },
  { src: '/img/payments/paybylink.png', alt: 'PayByLink', width: 330, height: 110 },
  { src: '/img/payments/dpay.png', alt: 'DPay', width: 990, height: 330 },
  { src: '/img/payments/blik.png', alt: 'BLIK', width: 747, height: 376 },
  { src: '/img/payments/zen.png', alt: 'Zen', width: 330, height: 123 },
];

declare global {
  interface Window {
    gsap: any;
    ScrollTrigger: any;
  }
}

export default function PaymentsSection() {
  useEffect(() => {
    const track = document.querySelector<HTMLElement>('.marquee-track');
    const container = document.querySelector<HTMLElement>('.marquee-container');
    if (!track || !container) return;

    const originalItems = Array.from(track.children) as HTMLElement[];
    const boxCount = originalItems.length;
    originalItems.forEach(item => {
      const clone = item.cloneNode(true);
      track.appendChild(clone);
    });

    document.querySelectorAll<HTMLElement>('.payment-box').forEach(box => {
      box.addEventListener('mousemove', (e: MouseEvent) => {
        const rect = box.getBoundingClientRect();
        box.style.setProperty('--x', `${e.clientX - rect.left}px`);
        box.style.setProperty('--y', `${e.clientY - rect.top}px`);
      });
    });

    let currentIndex = 0;
    let autoSlideInterval: ReturnType<typeof setInterval> | null = null;
    let isDragging = false;
    let startX = 0;
    let startTranslateX = 0;

    const getStepWidth = (): number => {
      const gap = window.innerWidth <= 768 ? 12 : 20;
      return originalItems[0].getBoundingClientRect().width + gap;
    };

    function slideToIndex(index: number, animated = true): void {
      const stepWidth = getStepWidth();
      currentIndex = index;
      const targetX = -currentIndex * stepWidth;
      if (window.gsap) {
        window.gsap.killTweensOf(track);
        if (animated) {
          window.gsap.to(track, {
            x: targetX, duration: 0.6, ease: 'power3.out',
            onComplete: () => {
              if (currentIndex >= boxCount) {
                currentIndex = 0;
                window.gsap.set(track, { x: 0 });
              }
            }
          });
        } else {
          window.gsap.set(track, { x: targetX });
        }
      }
    }

    function startAutoSlide(): void {
      stopAutoSlide();
      autoSlideInterval = setInterval(() => slideToIndex(currentIndex + 1), 3000);
    }
    function stopAutoSlide(): void {
      if (autoSlideInterval) { clearInterval(autoSlideInterval); autoSlideInterval = null; }
    }

    const startDrag = (e: MouseEvent | TouchEvent): void => {
      isDragging = true;
      stopAutoSlide();
      if (window.gsap) window.gsap.killTweensOf(track);
      const pageX = (e as TouchEvent).touches ? (e as TouchEvent).touches[0].pageX : (e as MouseEvent).pageX;
      startX = pageX;
      const matrix = new WebKitCSSMatrix(window.getComputedStyle(track).transform);
      startTranslateX = matrix.m41;
      container.style.cursor = 'grabbing';
    };

    const doDrag = (e: MouseEvent | TouchEvent): void => {
      if (!isDragging) return;
      if (!(e as TouchEvent).touches) e.preventDefault();
      const pageX = (e as TouchEvent).touches ? (e as TouchEvent).touches[0].pageX : (e as MouseEvent).pageX;
      const diffX = pageX - startX;
      let targetX = startTranslateX + diffX;
      const totalWidth = boxCount * getStepWidth();
      if (targetX < -totalWidth) { targetX += totalWidth; startTranslateX += totalWidth; }
      else if (targetX > 0) { targetX -= totalWidth; startTranslateX -= totalWidth; }
      if (window.gsap) window.gsap.set(track, { x: targetX });
    };

    const stopDrag = (): void => {
      if (!isDragging) return;
      isDragging = false;
      container.style.cursor = 'grab';
      const currentX = new WebKitCSSMatrix(window.getComputedStyle(track).transform).m41;
      let nearestIndex = Math.round(-currentX / getStepWidth());
      if (nearestIndex < 0) nearestIndex = 0;
      slideToIndex(nearestIndex);
      startAutoSlide();
    };

    container.addEventListener('mousedown', startDrag as EventListener);
    window.addEventListener('mouseup', stopDrag);
    container.addEventListener('mousemove', doDrag as EventListener);
    container.addEventListener('touchstart', startDrag as EventListener, { passive: true });
    container.addEventListener('touchend', stopDrag);
    container.addEventListener('touchmove', doDrag as EventListener, { passive: false });
    container.addEventListener('mouseenter', stopAutoSlide);
    container.addEventListener('mouseleave', startAutoSlide);
    startAutoSlide();

    return () => {
      stopAutoSlide();
      window.removeEventListener('mouseup', stopDrag);
    };
  }, []);

  return (
    <section className="payments-section">
      <div className="container" style={{ display: 'block' }}>
        <h2 className="payments-title">
          Wiele możliwości dotyczących <span className="hero-green">operatorów płatności</span>
        </h2>
        <div className="marquee-container">
          <div className="marquee-track">
            {payments.map((p) => (
              <div className="payment-box" key={p.alt}>
                <div className="payment-logo">
                  <Image src={p.src} alt={p.alt} width={p.width} height={p.height} loading="lazy" />
                </div>
              </div>
            ))}
          </div>
        </div>
        <p className="payments-footer-text">
          Zobacz z jakich konkretnie dostawców płatności korzystamy{' '}
          <a href="https://docs.craftpay.pl">Sprawdź teraz</a>.
        </p>
      </div>
    </section>
  );
}
