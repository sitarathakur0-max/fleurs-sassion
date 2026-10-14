import React, { useState } from 'react';
import { Sparkles, Maximize2, Info } from 'lucide-react';
import { GalleryItem, FloralCategory } from '../types';
import { GALLERY_ITEMS } from '../data/floristData';

interface GalleryViewProps {
  onOpenLightbox: (item: GalleryItem) => void;
}

export const GalleryView: React.FC<GalleryViewProps> = ({ onOpenLightbox }) => {
  const [selectedCategory, setSelectedCategory] = useState<FloralCategory>('all');

  const categories: { id: FloralCategory; label: string }[] = [
    { id: 'all', label: 'All Works' },
    { id: 'bouquets', label: 'Seasonal Bouquets' },
    { id: 'weddings', label: 'Wedding Flowers' },
    { id: 'decorations', label: 'Floral Decorations' },
    { id: 'details', label: 'Flower Details' },
  ];

  const filteredItems =
    selectedCategory === 'all'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <div id="gallery-view" className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAE5DC] text-[#475C4B] text-xs uppercase tracking-widest font-semibold">
          <Sparkles className="w-3.5 h-3.5 text-[#C88D7B]" />
          <span>Fleurs de Saison • Gallery</span>
        </span>
        <h1 className="font-editorial text-4xl sm:text-6xl text-[#1F2E20] font-normal tracking-tight">
          Floral Portfolio
        </h1>
        <p className="text-base sm:text-lg text-[#556958] leading-relaxed">
          An editorial glimpse into our seasonal bouquets, wedding arrangements, custom floral decorations, and workshop details in Strasbourg.
        </p>

        {/* Disclaimer note on representative visual content */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-[#F2EFE9] text-[#6E8071] text-xs max-w-md mx-auto border border-[#E5DFD4]">
          <Info className="w-4 h-4 shrink-0 text-[#8C9E90]" />
          <span>Representative imagery showcasing the craftsmanship and aesthetic of Fleurs de Saison.</span>
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3" role="tablist" aria-label="Floral categories">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              id={`filter-cat-${cat.id}`}
              role="tab"
              aria-selected={isActive}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold transition-all duration-200 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#2C3E2D] ${
                isActive
                  ? 'bg-[#2C3E2D] text-[#FAF8F5] shadow-xs'
                  : 'bg-[#FAF8F5] text-[#556958] border border-[#DDD6C9] hover:border-[#2C3E2D] hover:text-[#1F2E20]'
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Responsive Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 pt-4">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            id={`gallery-card-${item.id}`}
            onClick={() => onOpenLightbox(item)}
            className="group relative overflow-hidden rounded-2xl bg-[#ECE7DE] border border-[#E0D9CC] cursor-pointer shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col"
          >
            {/* Image Container with zoom */}
            <div className="relative aspect-4/3 sm:aspect-square overflow-hidden bg-[#E5DFD2]">
              <img
                src={item.imageSrc}
                alt={item.altText}
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white scale-90 group-hover:scale-100 transition-transform duration-300">
                  <Maximize2 className="w-5 h-5" />
                </div>
              </div>

              {/* Category Pill on Image */}
              <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#1F2E20]/75 backdrop-blur-xs text-[10px] uppercase tracking-widest text-[#E8F0E9] font-medium">
                {item.categoryLabel}
              </div>
            </div>

            {/* Card Footer Details */}
            <div className="p-5 bg-[#FAF8F5] flex-1 flex flex-col justify-between">
              <div>
                <h2 className="font-editorial text-xl text-[#1F2E20] group-hover:text-[#2C3E2D] transition-colors leading-snug">
                  {item.title}
                </h2>
                <p className="mt-1.5 text-xs text-[#5C705F] line-clamp-2 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#EFEBE3] flex items-center justify-between text-[11px] text-[#7A8E7D]">
                <span>Fleurs de Saison</span>
                <span className="group-hover:text-[#1F2E20] font-medium transition-colors">
                  Click to enlarge →
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
