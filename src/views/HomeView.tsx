import React from 'react';
import { Star, ArrowRight, ArrowUpRight, Phone, MapPin, Sparkles, CheckCircle2 } from 'lucide-react';
import { PageId, GalleryItem } from '../types';
import { BUSINESS_INFO, IMAGES, SERVICES, GALLERY_ITEMS } from '../data/floristData';

interface HomeViewProps {
  onNavigate: (page: PageId) => void;
  onOpenLightbox: (item: GalleryItem) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate, onOpenLightbox }) => {
  return (
    <div id="home-view" className="space-y-16 sm:space-y-24">
      {/* 1. HERO SECTION */}
      <section
        id="hero-section"
        className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-[#1E2B20] text-[#FAF8F5]"
      >
        {/* Background Editorial Floral Photograph with Dark Wash */}
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.hero}
            alt="Handcrafted seasonal bouquet on a wooden workbench at Fleurs de Saison"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-1000 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#141F16]/90 via-[#19261B]/80 to-[#19261B]/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141F16] via-transparent to-transparent opacity-80" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          {/* Subtle Location & Category Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs uppercase tracking-[0.25em] text-[#DCE6DE] mb-6 font-medium">
            <Sparkles className="w-3.5 h-3.5 text-[#E3B096]" />
            <span>Independent Flower Shop • Strasbourg</span>
          </div>

          {/* Exact Headline as specified */}
          <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-[#FAF8F5] max-w-4xl mx-auto leading-[1.15]">
            Seasonal Flowers, Thoughtfully Arranged
          </h1>

          {/* Exact Supporting Copy as specified */}
          <p className="mt-6 text-base sm:text-xl text-[#D0DDD2] max-w-2xl mx-auto font-light leading-relaxed">
            Beautiful seasonal bouquets, wedding arrangements and custom floral decorations from an independent flower shop in Strasbourg.
          </p>

          {/* Primary & Secondary Action CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
            <button
              id="hero-primary-cta"
              onClick={() => {
                onNavigate('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#FAF8F5] text-[#1F2E20] hover:bg-[#EBE6DB] text-xs uppercase tracking-widest font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 group"
            >
              <span>Contact the Florist</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>

            <button
              id="hero-secondary-cta"
              onClick={() => {
                onNavigate('services');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-white/40 bg-white/10 hover:bg-white/20 backdrop-blur-xs text-[#FAF8F5] text-xs uppercase tracking-widest font-semibold px-8 py-4 rounded-full transition-all duration-200"
            >
              <span>Explore Our Floral Services</span>
            </button>
          </div>

          {/* Quick Shop Trust Footnote */}
          <div className="mt-12 flex items-center justify-center gap-6 text-xs text-[#B8C8BC]">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#E3B096]" />
              14 Rue des Bouchers, Strasbourg
            </span>
            <span className="hidden sm:inline text-white/30">•</span>
            <a
              href={`tel:${BUSINESS_INFO.phoneClean}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#E3B096]" />
              {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      </section>

      {/* 2. TRUST SECTION */}
      <section id="trust-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F4F0E8] border border-[#E5DFD2] rounded-2xl p-8 sm:p-10 shadow-xs">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            {/* Trust Metric Card */}
            <div className="flex flex-col sm:flex-row items-center gap-5">
              <div className="w-16 h-16 rounded-2xl bg-[#2C3E2D] flex items-center justify-center text-[#FAF8F5] shadow-sm">
                <Star className="w-8 h-8 fill-[#F2C94C] text-[#F2C94C]" />
              </div>
              <div>
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <span className="font-editorial text-3xl sm:text-4xl font-semibold text-[#1F2E20]">
                    4.8 / 5
                  </span>
                  <div className="flex text-[#D4A373] ml-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-sm font-medium text-[#4D6050] mt-0.5">
                  Based on 37 Google Reviews
                </p>
              </div>
            </div>

            {/* Factual Value Statements */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-[#3E5241] max-w-xl">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#2C3E2D] shrink-0 mt-0.5" />
                <span>Seasonal bouquets arranged around natural freshness</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#2C3E2D] shrink-0 mt-0.5" />
                <span>Wedding arrangements tailored for celebrations</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#2C3E2D] shrink-0 mt-0.5" />
                <span>Bespoke custom floral decoration for personalized settings</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#2C3E2D] shrink-0 mt-0.5" />
                <span>Independent local florist located in Strasbourg, France</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SERVICES PREVIEW */}
      <section id="services-preview-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.25em] text-[#637765] font-semibold block mb-2">
            Our Craft & Offerings
          </span>
          <h2 className="font-editorial text-3xl sm:text-5xl text-[#1F2E20] font-normal">
            Floral Design for Every Occasion
          </h2>
          <p className="text-sm sm:text-base text-[#566A59] mt-3 leading-relaxed">
            From everyday seasonal bouquets to wedding celebrations and bespoke floral decoration, every creation is thoughtfully composed with artisanal care.
          </p>
        </div>

        {/* 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className="group bg-[#FAF8F5] border border-[#E5DFD2] rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col"
            >
              {/* Image Container */}
              <div className="relative aspect-4/3 overflow-hidden bg-[#EAE5DC]">
                <img
                  src={service.imageSrc}
                  alt={service.altText}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
              </div>

              {/* Text Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] uppercase tracking-widest text-[#788C7B] font-medium block mb-1">
                    {service.subtitle}
                  </span>
                  <h3 className="font-editorial text-2xl text-[#1F2E20] font-normal group-hover:text-[#2C3E2D] transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm text-[#4D6050] leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-[#EDE7DC] flex items-center justify-between">
                  <button
                    id={`learn-more-btn-${service.id}`}
                    onClick={() => {
                      onNavigate('services');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#2C3E2D] group-hover:text-[#182319] transition-colors"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <button
                    id={`enquire-service-btn-${service.id}`}
                    onClick={() => {
                      onNavigate('contact');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-xs text-[#6B7D6E] hover:text-[#1F2E20] transition-colors"
                  >
                    Make Enquiry
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action Button underneath */}
        <div className="text-center mt-12">
          <button
            id="view-all-services-cta"
            onClick={() => {
              onNavigate('services');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 border border-[#C5BCAD] hover:border-[#2C3E2D] bg-[#FAF8F5] hover:bg-[#F2EFE9] text-[#1F2E20] text-xs uppercase tracking-widest font-semibold px-6 py-3.5 rounded-full transition-colors"
          >
            <span>Explore Complete Services Page</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>

      {/* 4. FEATURED GALLERY PREVIEW */}
      <section id="featured-gallery-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[#637765] font-semibold block mb-2">
              Visual Portfolio
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl text-[#1F2E20]">
              Curated Floral Imagery
            </h2>
            <p className="text-xs sm:text-sm text-[#556958] mt-1">
              Seasonal bouquets, wedding arrangements, custom decorations, and atelier moments.
            </p>
          </div>

          <button
            id="open-full-gallery-btn"
            onClick={() => {
              onNavigate('gallery');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#2C3E2D] hover:text-[#162117] transition-colors"
          >
            <span>Browse Full Gallery ({GALLERY_ITEMS.length} Photos)</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Gallery Grid Preview (5 key shots) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_ITEMS.slice(0, 6).map((item, index) => (
            <div
              key={item.id}
              id={`home-gallery-item-${item.id}`}
              onClick={() => onOpenLightbox(item)}
              className={`group relative overflow-hidden rounded-xl bg-[#EBE5DC] cursor-pointer shadow-xs hover:shadow-md transition-all duration-300 ${
                index === 0 ? 'sm:col-span-2 lg:col-span-2 aspect-16/9' : 'aspect-4/3'
              }`}
            >
              <img
                src={item.imageSrc}
                alt={item.altText}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
                <span className="text-[11px] uppercase tracking-wider text-[#D3E0D5] font-medium">
                  {item.categoryLabel}
                </span>
                <p className="font-editorial text-xl tracking-wide mt-0.5">
                  {item.title}
                </p>
                <p className="text-xs text-white/80 line-clamp-1 mt-1">
                  Click to view full photo
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. STRASBOURG SHOP CALLOUT BANNER */}
      <section id="strasbourg-callout-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="relative overflow-hidden rounded-3xl bg-[#243526] text-[#FAF8F5] p-8 sm:p-14 lg:p-16">
          {/* Subtle floral background pattern or soft overlay */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-[#354D38]/50 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <span className="text-xs uppercase tracking-[0.25em] text-[#A5B9A8] font-semibold block mb-3">
              Independent Strasbourg Florist
            </span>
            <h2 className="font-editorial text-3xl sm:text-5xl font-normal leading-tight">
              Ready to discuss seasonal bouquets, wedding flowers, or custom decoration?
            </h2>
            <p className="text-sm sm:text-base text-[#CCD9CE] mt-4 leading-relaxed max-w-2xl">
              Visit our flower shop at 14 Rue des Bouchers in Strasbourg, call us directly by telephone, or submit an online enquiry with your floral ideas.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                id="callout-contact-cta"
                onClick={() => {
                  onNavigate('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center gap-2 bg-[#FAF8F5] text-[#1F2E20] hover:bg-[#EAE4D7] text-xs uppercase tracking-widest font-semibold px-7 py-4 rounded-full transition-colors shadow-md"
              >
                <span>Submit Floral Enquiry</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                id="callout-phone-cta"
                href={`tel:${BUSINESS_INFO.phoneClean}`}
                className="inline-flex items-center justify-center gap-2 border border-white/30 hover:border-white bg-white/5 hover:bg-white/10 text-white text-xs uppercase tracking-widest font-semibold px-7 py-4 rounded-full transition-colors"
              >
                <Phone className="w-4 h-4 text-[#D4A373]" />
                <span>Call {BUSINESS_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
