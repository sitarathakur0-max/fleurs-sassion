import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ArrowUpRight } from 'lucide-react';
import { PageId } from '../types';
import { BUSINESS_INFO } from '../data/floristData';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on page navigation or Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Floral Services' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'about', label: 'About' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header
      id="main-header"
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FAF8F5]/95 backdrop-blur-md shadow-xs border-b border-[#EBE5DA]'
          : 'bg-[#FAF8F5] border-b border-[#F0EBE1]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Wordmark */}
          <button
            id="brand-logo-btn"
            onClick={() => handleNavClick('home')}
            className="text-left group focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#2C3E2D] rounded-xs"
            aria-label="Fleurs de Saison - Return to homepage"
          >
            <span className="block font-editorial text-2xl sm:text-3xl tracking-wide text-[#1F2E20] group-hover:text-[#3D523F] transition-colors">
              Fleurs de Saison
            </span>
            <span className="block text-[11px] uppercase tracking-[0.2em] text-[#6B7C6E] font-medium mt-0.5">
              Strasbourg • Artisan Florist
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" aria-label="Main Navigation" className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-[14px] font-medium tracking-wide transition-colors relative py-1 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#2C3E2D] rounded-xs ${
                    isActive
                      ? 'text-[#1F2E20] font-semibold'
                      : 'text-[#4A5D4D] hover:text-[#1F2E20]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#2C3E2D] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Header Action CTAs */}
          <div className="hidden lg:flex items-center space-x-5">
            <a
              id="header-phone-link"
              href={`tel:${BUSINESS_INFO.phoneClean}`}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-[#4A5D4D] hover:text-[#1F2E20] py-2 px-3 rounded-full border border-[#DCD5C9] bg-[#FAF8F5] transition-colors"
              title="Call the shop"
            >
              <Phone className="w-3.5 h-3.5 text-[#2C3E2D]" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>

            <button
              id="header-contact-cta"
              onClick={() => handleNavClick('contact')}
              className="inline-flex items-center gap-2 bg-[#2C3E2D] hover:bg-[#1E2B1F] text-[#FAF8F5] text-xs uppercase tracking-widest font-semibold px-5 py-2.5 rounded-full shadow-xs hover:shadow-md transition-all duration-200 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#2C3E2D]"
            >
              <span>Contact the Florist</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-3 lg:hidden">
            <a
              id="mobile-quick-call"
              href={`tel:${BUSINESS_INFO.phoneClean}`}
              className="p-2 text-[#2C3E2D] bg-[#F2EFE9] rounded-full"
              aria-label="Call shop directly"
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#1F2E20] hover:bg-[#F2EFE9] focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#2C3E2D]"
              aria-controls="mobile-menu"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden border-b border-[#E8E2D6] bg-[#FAF8F5] px-4 pt-2 pb-6 space-y-2 shadow-lg animate-fadeIn"
        >
          <div className="space-y-1">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  id={`mobile-nav-${link.id}`}
                  onClick={() => handleNavClick(link.id)}
                  className={`w-full text-left px-3 py-2.5 text-base font-medium rounded-md transition-colors ${
                    isActive
                      ? 'bg-[#EFECE5] text-[#1F2E20] font-semibold'
                      : 'text-[#4A5D4D] hover:bg-[#F5F2EB] hover:text-[#1F2E20]'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          <div className="pt-4 border-t border-[#E8E2D6] space-y-3">
            <a
              id="mobile-drawer-phone"
              href={`tel:${BUSINESS_INFO.phoneClean}`}
              className="flex items-center justify-center gap-2 w-full py-2.5 px-4 text-sm font-medium text-[#2C3E2D] border border-[#D5CEC2] rounded-md bg-[#F8F6F1]"
            >
              <Phone className="w-4 h-4" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>

            <button
              id="mobile-drawer-contact-cta"
              onClick={() => handleNavClick('contact')}
              className="flex items-center justify-center gap-2 w-full bg-[#2C3E2D] text-[#FAF8F5] py-3 px-4 rounded-md text-sm font-medium uppercase tracking-wider shadow-sm"
            >
              <span>Contact the Florist</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
