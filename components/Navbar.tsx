'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  useEffect(() => {
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu') as HTMLElement | null;
    const mobileLinks = document.querySelectorAll('.mobile-link, .mobile-link-secondary, .mobile-signup');
    let menuOpen = false;

    if (hamburger && mobileMenu) {
      const handleClick = () => {
        menuOpen = !menuOpen;
        if (menuOpen) {
          hamburger.classList.add('open');
          mobileMenu.style.display = 'block';
          if (typeof window !== 'undefined' && (window as any).gsap) {
            (window as any).gsap.fromTo(mobileMenu,
                { opacity: 0, y: -16 },
                { duration: 0.35, opacity: 1, y: 0, ease: 'power3.out' }
            );
            (window as any).gsap.fromTo(mobileLinks,
                { opacity: 0, x: -16 },
                { duration: 0.3, opacity: 1, x: 0, stagger: 0.05, ease: 'power3.out', delay: 0.08 }
            );
          } else {
            mobileMenu.style.opacity = '1';
          }
        } else {
          hamburger.classList.remove('open');
          if (typeof window !== 'undefined' && (window as any).gsap) {
            (window as any).gsap.to(mobileMenu, {
              duration: 0.25, opacity: 0, y: -10, ease: 'power3.in',
              onComplete: () => { mobileMenu.style.display = 'none'; }
            });
          } else {
            mobileMenu.style.display = 'none';
          }
        }
      };
      hamburger.addEventListener('click', handleClick);
      return () => hamburger.removeEventListener('click', handleClick);
    }
  }, []);

  useEffect(() => {
    const initGsap = () => {
      if (typeof window === 'undefined' || !(window as any).gsap) return;
      const gsap = (window as any).gsap;

      document.querySelectorAll('.nav-center a').forEach(link => {
        link.addEventListener('mouseenter', () => {
          gsap.killTweensOf(link);
          gsap.to(link, { duration: 0.22, y: -2, color: '#ffffff', ease: 'power2.out' });
        });
        link.addEventListener('mouseleave', () => {
          gsap.killTweensOf(link);
          gsap.to(link, {
            duration: 0.22, y: 0,
            color: link.classList.contains('active') ? '#00E58B' : 'rgba(255,255,255,0.6)',
            ease: 'power2.out'
          });
        });
      });

      const signup = document.querySelector('.signup');
      if (signup) {
        signup.addEventListener('mouseenter', () => {
          gsap.killTweensOf(signup);
          gsap.to(signup, { duration: 0.18, scale: 1.05, ease: 'power2.out' });
        });
        signup.addEventListener('mouseleave', () => {
          gsap.killTweensOf(signup);
          gsap.to(signup, { duration: 0.18, scale: 1, ease: 'power2.out' });
        });
      }
    };

    const timer = setTimeout(initGsap, 500);
    return () => clearTimeout(timer);
  }, []);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
      <>
        <nav className="navbar">
          <div className="navbar-inner">
            <div className="nav-left">
              <Image src="/img/logo1.svg" className="nav-logo" alt="Logo" width={50} height={57} />
              <span className="brand">
              <span className="brand-craft">Craft</span><span className="brand-pay">Pay</span>
            </span>
              <div className="nav-separator"></div>
              <div className="nav-center">
                <Link href="/" className={isActive('/') ? 'active' : ''}>Strona Główna</Link>
                <Link href="/szablony" className={isActive('/szablony') ? 'active' : ''}>Szablony</Link>
                <a href="https://docs.craftpay.pl">Dokumentacja</a>
                <Link href="/#pricing">Cennik</Link>
              </div>
            </div>
            <div className="nav-right">
              <a href="https://app.craftpay.pl/auth/login" className="login">Zaloguj się</a>
              <a href="https://app.craftpay.pl/auth/register" className="signup">Zarejestruj się</a>
            </div>
            <button className="hamburger" aria-label="Menu">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </nav>

        <div className="mobile-menu" style={{ display: 'none' }}>
          <div className="mobile-menu-inner">
            <Link href="/" className={`mobile-link${isActive('/') ? ' active' : ''}`}>Strona Główna</Link>
            <Link href="/szablony" className={`mobile-link${isActive('/szablony') ? ' active' : ''}`}>Szablony</Link>
            <a href="https://docs.craftpay.pl" className="mobile-link">Dokumentacja</a>
            <Link href="/#pricing" className="mobile-link">Cennik</Link>
            <div className="mobile-divider"></div>
            <a href="https://app.craftpay.pl/auth/login" className="mobile-link-secondary">Zaloguj się</a>
            <a href="https://app.craftpay.pl/auth/register" className="mobile-signup">Zarejestruj się</a>
          </div>
        </div>
      </>
  );
}