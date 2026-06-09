'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const handleLinkClick = () => {
    setMenuOpen(false);
    document.body.style.overflow = '';
  };

  useEffect(() => {
    if (typeof window === 'undefined' || !(window as any).gsap) return;

    const gsap = (window as any).gsap;

    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileLinks = document.querySelectorAll(
      '.mobile-link, .mobile-link-secondary, .mobile-signup'
    );

    if (menuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';

      gsap.fromTo(
        mobileMenu,
        {
          opacity: 0,
          y: -20,
          scale: 0.97,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.35,
          ease: 'power3.out',
        }
      );

      gsap.fromTo(
        mobileLinks,
        {
          opacity: 0,
          y: 12,
        },
        {
          opacity: 1,
          y: 0,
          stagger: 0.06,
          duration: 0.35,
          ease: 'power3.out',
          delay: 0.05,
        }
      );
    } else {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    };
  }, [menuOpen]);

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
            color: link.classList.contains('active') ? '#FF9500' : 'rgba(255,255,255,0.6)',
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

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && menuOpen) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [menuOpen]);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-inner">
          <div className="nav-left">
            <Link href="/" onClick={handleLinkClick}>
              <Image src="/img/logo1.svg" className="nav-logo" alt="Logo" width={50} height={57} />
            </Link>
            <Link href="/" className="brand" onClick={handleLinkClick}>
              <span className="brand-craft">Craft</span>
              <span className="brand-pay">Pay</span>
            </Link>
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
          <button
            className={`hamburger ${menuOpen ? 'open' : ''}`}
            aria-label="Menu"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      <div 
        className={`mobile-overlay ${menuOpen ? 'open' : ''}`} 
        onClick={() => setMenuOpen(false)}
      />

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-inner">
          <Link 
            href="/" 
            className={`mobile-link${isActive('/') ? ' active' : ''}`}
            onClick={handleLinkClick}
          >
            Strona Główna
          </Link>
          <Link 
            href="/szablony" 
            className={`mobile-link${isActive('/szablony') ? ' active' : ''}`}
            onClick={handleLinkClick}
          >
            Szablony
          </Link>
          <a 
            href="https://docs.craftpay.pl" 
            className="mobile-link"
            onClick={handleLinkClick}
          >
            Dokumentacja
          </a>
          <Link 
            href="/#pricing" 
            className="mobile-link"
            onClick={handleLinkClick}
          >
            Cennik
          </Link>
          <div className="mobile-divider"></div>
          <a 
            href="https://app.craftpay.pl/auth/login" 
            className="mobile-link-secondary"
            onClick={handleLinkClick}
          >
            Zaloguj się
          </a>
          <a 
            href="https://app.craftpay.pl/auth/register" 
            className="mobile-signup"
            onClick={handleLinkClick}
          >
            Zarejestruj się
          </a>
        </div>
      </div>
    </>
  );
}