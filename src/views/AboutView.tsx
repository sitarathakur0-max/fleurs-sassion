import React from 'react';
import { Star, MapPin, Phone, ArrowRight, Flower2, Heart, Sparkles } from 'lucide-react';
import { PageId } from '../types';
import { BUSINESS_INFO, IMAGES } from '../data/floristData';

interface AboutViewProps {
  onNavigate: (page: PageId) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onNavigate }) => {
  return (
    <div id="about-view" className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAE5DC] text-[#475C4B] text-xs uppercase tracking-widest font-semibold">
          <Sparkles className="w-3.5 h-3.5 text-[#C88D7B]" />
          <span>Independent Florist • Strasbourg</span>
        </span>
        <h1 className="font-editorial text-4xl sm:text-6xl text-[#1F2E20] font-normal tracking-tight">
          About Fleurs de Saison
        </h1>
        <p className="text-base sm:text-lg text-[#556958] leading-relaxed">
          An independent flower shop in Strasbourg creating seasonal bouquets, wedding arrangements and custom floral decorations.
        </p>
      </div>

      {/* Main Story & Atelier Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Visual Showcase (2 images composition) */}
        <div className="lg:col-span-6 space-y-6">
          <div className="relative rounded-3xl overflow-hidden shadow-md bg-[#EBE5DC] aspect-4/3">
            <img
              src={IMAGES.storefront}
              alt="Fleurs de Saison storefront on 14 Rue des Bouchers in Strasbourg"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 text-white">
              <span className="text-[11px] uppercase tracking-widest text-[#E0EBE2]">
                Our Strasbourg Location
              </span>
              <p className="font-editorial text-xl">14 Rue des Bouchers</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl overflow-hidden shadow-xs bg-[#EBE5DC] aspect-4/3">
              <img
                src={IMAGES.workshop}
                alt="Florist workshop table with fresh stems and tools"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xs bg-[#EBE5DC] aspect-4/3">
              <img
                src={IMAGES.macro}
                alt="Botanical detail of fresh seasonal petals"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Narrative & Craft Pillars */}
        <div className="lg:col-span-6 space-y-8">
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-[0.2em] text-[#637765] font-semibold block">
              Our Philosophy
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl text-[#1F2E20] leading-snug">
              Floral Design Shaped by the Seasons
            </h2>
            <p className="text-sm sm:text-base text-[#495E4D] leading-relaxed">
              Fleurs de Saison is an independent flower shop located on 14 Rue des Bouchers in the historic heart of Strasbourg, France.
            </p>
            <p className="text-sm sm:text-base text-[#495E4D] leading-relaxed">
              We specialize in creating hand-tied seasonal bouquets, thoughtful wedding arrangements, and custom floral decorations designed to bring the organic character of nature into homes, celebrations, and special occasions.
            </p>
            <p className="text-sm sm:text-base text-[#495E4D] leading-relaxed">
              Every arrangement is composed with attention to form, texture, and natural harmony, reflecting the distinctive spirit of seasonal floral artistry.
            </p>
          </div>

          {/* Three Core Areas */}
          <div className="space-y-4 pt-2">
            <div className="p-4 rounded-xl bg-[#F4F0E8] border border-[#E5DFD4] flex items-start gap-3.5">
              <div className="p-2 rounded-lg bg-[#2C3E2D] text-white shrink-0 mt-0.5">
                <Flower2 className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-editorial text-lg text-[#1F2E20] font-semibold">
                  Seasonal Bouquets
                </h3>
                <p className="text-xs text-[#526656] mt-0.5">
                  Natural floral compositions created around seasonal blooms and organic foliage.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#F4F0E8] border border-[#E5DFD4] flex items-start gap-3.5">
              <div className="p-2 rounded-lg bg-[#2C3E2D] text-white shrink-0 mt-0.5">
                <Heart className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-editorial text-lg text-[#1F2E20] font-semibold">
                  Wedding Arrangements
                </h3>
                <p className="text-xs text-[#526656] mt-0.5">
                  Floral arrangements designed for wedding celebrations and special moments.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#F4F0E8] border border-[#E5DFD4] flex items-start gap-3.5">
              <div className="p-2 rounded-lg bg-[#2C3E2D] text-white shrink-0 mt-0.5">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-editorial text-lg text-[#1F2E20] font-semibold">
                  Custom Floral Decorations
                </h3>
                <p className="text-xs text-[#526656] mt-0.5">
                  Bespoke floral styling for individuals seeking a personalized floral atmosphere.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Signal Section: Factual 4.8/5 & 37 Google Reviews */}
      <div className="rounded-3xl bg-[#243526] text-[#FAF8F5] p-8 sm:p-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs uppercase tracking-[0.25em] text-[#A5B9A8] font-semibold block">
              Customer Satisfaction
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl text-white">
              A Trusted Independent Florist in Strasbourg
            </h2>
            <p className="text-sm text-[#CAD8CD] max-w-xl">
              Our customers value our dedication to fresh seasonal flowers, careful arrangement, and personalized floral service.
            </p>
          </div>

          <div className="bg-[#1B291D] border border-[#344B36] rounded-2xl p-6 sm:p-8 text-center shrink-0 w-full sm:w-auto">
            <div className="flex items-center justify-center gap-1 text-[#F2C94C] mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-current" />
              ))}
            </div>
            <p className="font-editorial text-4xl sm:text-5xl font-semibold text-white">
              {BUSINESS_INFO.rating}
            </p>
            <p className="text-xs font-medium uppercase tracking-wider text-[#A1B8A5] mt-1">
              {BUSINESS_INFO.reviewsCount} Google Reviews
            </p>
          </div>
        </div>
      </div>

      {/* Location & Contact Callout */}
      <div className="bg-[#FAF8F5] border border-[#E5DFD4] rounded-3xl p-8 sm:p-12 text-center space-y-6">
        <span className="text-xs uppercase tracking-[0.2em] text-[#637765] font-semibold block">
          Visit Us in Strasbourg
        </span>
        <h2 className="font-editorial text-3xl sm:text-4xl text-[#1F2E20]">
          14 Rue des Bouchers, 67000 Strasbourg, France
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-[#4E6252]">
          <span className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#2C3E2D]" />
            Central Strasbourg
          </span>
          <span>•</span>
          <a
            href={`tel:${BUSINESS_INFO.phoneClean}`}
            className="flex items-center gap-2 hover:text-[#1F2E20] font-medium transition-colors"
          >
            <Phone className="w-4 h-4 text-[#2C3E2D]" />
            {BUSINESS_INFO.phone}
          </a>
        </div>

        <div className="pt-2">
          <button
            id="about-contact-cta"
            onClick={() => {
              onNavigate('contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 bg-[#2C3E2D] hover:bg-[#1C281D] text-white text-xs uppercase tracking-widest font-semibold px-8 py-4 rounded-full transition-colors shadow-xs"
          >
            <span>Contact the Florist</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
