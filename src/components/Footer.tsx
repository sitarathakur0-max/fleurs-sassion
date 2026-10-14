import React from 'react';
import { Phone, MapPin, Star, ArrowUpRight } from 'lucide-react';
import { PageId } from '../types';
import { BUSINESS_INFO } from '../data/floristData';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#1C281D] text-[#E5EBE6] border-t border-[#293B2B] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#2C3E2F]">
          {/* Column 1: Brand & Factual Description */}
          <div className="lg:col-span-4 space-y-4">
            <div>
              <span className="font-editorial text-3xl tracking-wide text-[#FAF8F5] block">
                Fleurs de Saison
              </span>
              <span className="text-xs uppercase tracking-[0.2em] text-[#93A796] block mt-1">
                Artisan Florist • Strasbourg
              </span>
            </div>
            <p className="text-sm text-[#B8C8BC] leading-relaxed max-w-sm">
              {BUSINESS_INFO.shortAbout}
            </p>
            {/* Google Rating Trust Badge */}
            <div id="footer-trust-badge" className="inline-flex items-center gap-2.5 py-1.5 px-3 rounded-full bg-[#273729] border border-[#374D3A] text-xs">
              <div className="flex text-[#F2C94C]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <span className="font-semibold text-white">{BUSINESS_INFO.rating}</span>
              <span className="text-[#9DB0A0]">({BUSINESS_INFO.reviewsCount} Google Reviews)</span>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h2 className="text-xs uppercase tracking-widest text-[#93A796] font-semibold">
              Navigation
            </h2>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  id="footer-link-home"
                  onClick={() => handleNav('home')}
                  className="text-[#D0DDD2] hover:text-white transition-colors text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  id="footer-link-services"
                  onClick={() => handleNav('services')}
                  className="text-[#D0DDD2] hover:text-white transition-colors text-left"
                >
                  Floral Services
                </button>
              </li>
              <li>
                <button
                  id="footer-link-gallery"
                  onClick={() => handleNav('gallery')}
                  className="text-[#D0DDD2] hover:text-white transition-colors text-left"
                >
                  Gallery
                </button>
              </li>
              <li>
                <button
                  id="footer-link-about"
                  onClick={() => handleNav('about')}
                  className="text-[#D0DDD2] hover:text-white transition-colors text-left"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  id="footer-link-faq"
                  onClick={() => handleNav('faq')}
                  className="text-[#D0DDD2] hover:text-white transition-colors text-left"
                >
                  FAQ
                </button>
              </li>
              <li>
                <button
                  id="footer-link-contact"
                  onClick={() => handleNav('contact')}
                  className="text-[#D0DDD2] hover:text-white transition-colors text-left"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Floral Services */}
          <div className="lg:col-span-3 space-y-3">
            <h2 className="text-xs uppercase tracking-widest text-[#93A796] font-semibold">
              Floral Services
            </h2>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  id="footer-service-bouquets"
                  onClick={() => handleNav('services')}
                  className="text-[#D0DDD2] hover:text-white transition-colors text-left block"
                >
                  Seasonal Bouquets
                </button>
              </li>
              <li>
                <button
                  id="footer-service-weddings"
                  onClick={() => handleNav('services')}
                  className="text-[#D0DDD2] hover:text-white transition-colors text-left block"
                >
                  Wedding Arrangements
                </button>
              </li>
              <li>
                <button
                  id="footer-service-decorations"
                  onClick={() => handleNav('services')}
                  className="text-[#D0DDD2] hover:text-white transition-colors text-left block"
                >
                  Custom Floral Decorations
                </button>
              </li>
              <li className="pt-2">
                <button
                  id="footer-service-gallery-view"
                  onClick={() => handleNav('gallery')}
                  className="inline-flex items-center gap-1 text-xs text-[#A1B8A5] hover:text-white transition-colors"
                >
                  <span>View Floral Portfolio</span>
                  <ArrowUpRight className="w-3 h-3" />
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Exact Contact Details */}
          <div className="lg:col-span-3 space-y-3">
            <h2 className="text-xs uppercase tracking-widest text-[#93A796] font-semibold">
              Visit & Contact
            </h2>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#8BA38E] shrink-0 mt-1" />
                <div>
                  <span className="text-white font-medium block">Fleurs de Saison</span>
                  <span className="text-[#C5D5C8] block leading-snug">{BUSINESS_INFO.address}</span>
                  <a
                    id="footer-maps-link"
                    href={BUSINESS_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-[#95B29A] hover:text-white mt-1 underline underline-offset-2"
                  >
                    <span>Open in Google Maps</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5 pt-1">
                <Phone className="w-4 h-4 text-[#8BA38E] shrink-0" />
                <a
                  id="footer-phone-call"
                  href={`tel:${BUSINESS_INFO.phoneClean}`}
                  className="text-white hover:text-[#95B29A] font-medium transition-colors"
                >
                  {BUSINESS_INFO.phone}
                </a>
              </div>

              <div className="pt-3">
                <button
                  id="footer-enquiry-btn"
                  onClick={() => handleNav('contact')}
                  className="w-full text-center bg-[#293B2B] hover:bg-[#344D37] text-white border border-[#3E5642] py-2 px-3 rounded-md text-xs uppercase tracking-wider font-semibold transition-colors"
                >
                  Submit an Enquiry
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#8A9C8D] gap-4">
          <p>© {new Date().getFullYear()} Fleurs de Saison. All rights reserved.</p>
          <p className="text-center sm:text-right">
            Artisanal Seasonal Floral Design in Strasbourg, France
          </p>
        </div>
      </div>
    </footer>
  );
};
