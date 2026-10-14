import React, { useState } from 'react';
import { ChevronDown, Sparkles, Phone, MessageSquare } from 'lucide-react';
import { PageId } from '../types';
import { FAQS, BUSINESS_INFO } from '../data/floristData';

interface FaqViewProps {
  onNavigate: (page: PageId) => void;
}

export const FaqView: React.FC<FaqViewProps> = ({ onNavigate }) => {
  const [openIds, setOpenIds] = useState<string[]>(['faq-1', 'faq-4']);

  const toggleFaq = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div id="faq-view" className="py-12 sm:py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Header Banner */}
      <div className="text-center space-y-4">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAE5DC] text-[#475C4B] text-xs uppercase tracking-widest font-semibold">
          <Sparkles className="w-3.5 h-3.5 text-[#C88D7B]" />
          <span>Helpful Information</span>
        </span>
        <h1 className="font-editorial text-4xl sm:text-6xl text-[#1F2E20] font-normal tracking-tight">
          Frequently Asked Questions
        </h1>
        <p className="text-base sm:text-lg text-[#556958] leading-relaxed max-w-2xl mx-auto">
          Learn more about our seasonal bouquets, wedding arrangements, custom floral decorations, and how to reach our shop in Strasbourg.
        </p>
      </div>

      {/* Accordion Container */}
      <div className="space-y-4">
        {FAQS.map((faq) => {
          const isOpen = openIds.includes(faq.id);
          return (
            <div
              key={faq.id}
              id={`faq-item-${faq.id}`}
              className="bg-[#FAF8F5] border border-[#E5DFD4] rounded-2xl overflow-hidden transition-all duration-200 shadow-xs"
            >
              <button
                id={`faq-btn-${faq.id}`}
                onClick={() => toggleFaq(faq.id)}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${faq.id}`}
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#2C3E2D]"
              >
                <div className="space-y-1">
                  <span className="text-[11px] uppercase tracking-wider text-[#6B806E] font-medium block">
                    {faq.category}
                  </span>
                  <span className="font-editorial text-xl sm:text-2xl text-[#1F2E20] font-normal block leading-snug">
                    {faq.question}
                  </span>
                </div>
                <div
                  className={`w-9 h-9 rounded-full bg-[#EAE5DC] flex items-center justify-center text-[#2C3E2D] shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 bg-[#2C3E2D] text-white' : ''
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              {isOpen && (
                <div
                  id={`faq-answer-${faq.id}`}
                  className="px-6 pb-6 pt-1 text-sm sm:text-base text-[#465B4A] leading-relaxed border-t border-[#F0ECE4]"
                >
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Still Have Questions Box */}
      <div className="rounded-3xl bg-[#F4F0E8] border border-[#E2DBD0] p-8 sm:p-10 text-center space-y-5">
        <h2 className="font-editorial text-2xl sm:text-3xl text-[#1F2E20]">
          Have a question about an upcoming occasion?
        </h2>
        <p className="text-sm text-[#506454] max-w-lg mx-auto">
          We are pleased to assist you with inquiries about seasonal flowers, wedding arrangements, or custom floral decorations.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <button
            id="faq-contact-btn"
            onClick={() => {
              onNavigate('contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#2C3E2D] text-white text-xs uppercase tracking-widest font-semibold px-6 py-3.5 rounded-full hover:bg-[#1C281D] transition-colors"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Send An Enquiry</span>
          </button>
          <a
            id="faq-phone-btn"
            href={`tel:${BUSINESS_INFO.phoneClean}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-[#C5BCAD] text-[#2C3E2D] text-xs uppercase tracking-widest font-medium px-6 py-3.5 rounded-full hover:bg-[#EAE5DA] transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Call {BUSINESS_INFO.phone}</span>
          </a>
        </div>
      </div>
    </div>
  );
};
