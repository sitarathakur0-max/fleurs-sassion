import React from 'react';
import { ArrowRight, Check, Sparkles, Phone, MessageSquare } from 'lucide-react';
import { PageId } from '../types';
import { BUSINESS_INFO, SERVICES } from '../data/floristData';

interface ServicesViewProps {
  onNavigate: (page: PageId, prefillService?: string) => void;
}

export const ServicesView: React.FC<ServicesViewProps> = ({ onNavigate }) => {
  return (
    <div id="services-view" className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAE5DC] text-[#475C4B] text-xs uppercase tracking-widest font-semibold">
          <Sparkles className="w-3.5 h-3.5 text-[#C88D7B]" />
          <span>Fleurs de Saison • Strasbourg</span>
        </span>
        <h1 className="font-editorial text-4xl sm:text-6xl text-[#1F2E20] font-normal tracking-tight">
          Floral Services
        </h1>
        <p className="text-base sm:text-lg text-[#556958] leading-relaxed">
          Artisanal floral design created with seasonal flowers and thoughtful craftsmanship at our independent flower shop in Strasbourg.
        </p>
      </div>

      {/* 3 Detailed Service Sections */}
      <div className="space-y-24">
        {SERVICES.map((service, index) => {
          const isEven = index % 2 === 1;
          return (
            <section
              key={service.id}
              id={`service-detail-${service.id}`}
              className="scroll-mt-24 border-b border-[#E8E2D5] pb-20 last:border-b-0 last:pb-0"
            >
              <div
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center ${
                  isEven ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Visual Column */}
                <div
                  className={`lg:col-span-6 ${
                    isEven ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div className="relative rounded-3xl overflow-hidden shadow-md bg-[#EBE5DC] aspect-4/3 group">
                    <img
                      src={service.imageSrc}
                      alt={service.altText}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
                    <div className="absolute bottom-5 left-5 right-5 text-white">
                      <span className="text-[11px] uppercase tracking-widest text-[#E0EBE2] block">
                        Fleurs de Saison Craft
                      </span>
                      <p className="font-editorial text-xl">{service.title}</p>
                    </div>
                  </div>
                </div>

                {/* Narrative Column */}
                <div
                  className={`lg:col-span-6 space-y-6 ${
                    isEven ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div>
                    <span className="text-xs uppercase tracking-[0.2em] text-[#647967] font-semibold block mb-1">
                      {service.subtitle}
                    </span>
                    <h2 className="font-editorial text-3xl sm:text-4xl text-[#1F2E20]">
                      {service.title}
                    </h2>
                  </div>

                  <p className="text-sm sm:text-base text-[#465B49] leading-relaxed">
                    {service.description}
                  </p>

                  {/* Highlights List */}
                  <div className="space-y-3 pt-2">
                    {service.highlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-[#E5DFD2] flex items-center justify-center text-[#2C3E2D] shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-xs sm:text-sm text-[#384C3C] leading-snug">
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Contextual Action CTAs */}
                  <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                    <button
                      id={`enquire-btn-${service.id}`}
                      onClick={() => {
                        onNavigate('contact', service.title);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="inline-flex items-center justify-center gap-2 bg-[#2C3E2D] hover:bg-[#1E2B1F] text-[#FAF8F5] text-xs uppercase tracking-widest font-semibold px-6 py-3.5 rounded-full shadow-xs transition-colors"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Enquire About {service.title}</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </button>

                    <a
                      id={`phone-enquire-${service.id}`}
                      href={`tel:${BUSINESS_INFO.phoneClean}`}
                      className="inline-flex items-center justify-center gap-2 border border-[#C5BCAD] hover:border-[#2C3E2D] text-[#2C3E2D] text-xs uppercase tracking-widest font-medium px-5 py-3.5 rounded-full transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Call to Discuss</span>
                    </a>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* General Consultation & Enquiry Box */}
      <div className="rounded-3xl bg-[#F3EFE7] border border-[#E2DBD0] p-8 sm:p-12 text-center max-w-4xl mx-auto space-y-6">
        <h2 className="font-editorial text-2xl sm:text-4xl text-[#1F2E20]">
          Looking for a tailored floral consultation?
        </h2>
        <p className="text-sm text-[#4E6252] max-w-xl mx-auto leading-relaxed">
          Whether planning wedding arrangements, inquiring about seasonal bouquets, or organizing custom floral decorations in Strasbourg, we invite you to reach out.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <button
            id="services-bottom-contact-cta"
            onClick={() => {
              onNavigate('contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 bg-[#2C3E2D] text-white text-xs uppercase tracking-widest font-semibold px-7 py-3.5 rounded-full hover:bg-[#1C281D] transition-colors"
          >
            <span>Go to Contact Form</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
          <a
            id="services-bottom-phone-cta"
            href={`tel:${BUSINESS_INFO.phoneClean}`}
            className="inline-flex items-center gap-2 border border-[#BDB4A4] text-[#1F2E20] text-xs uppercase tracking-widest font-semibold px-6 py-3.5 rounded-full hover:bg-[#EAE5DA] transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#C88D7B]" />
            <span>{BUSINESS_INFO.phone}</span>
          </a>
        </div>
      </div>
    </div>
  );
};
