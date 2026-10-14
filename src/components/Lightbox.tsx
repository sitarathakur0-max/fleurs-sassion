import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GalleryItem } from '../types';

interface LightboxProps {
  item: GalleryItem | null;
  items: GalleryItem[];
  onClose: () => void;
  onNavigate: (item: GalleryItem) => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  item,
  items,
  onClose,
  onNavigate,
}) => {
  useEffect(() => {
    if (!item) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        const currentIndex = items.findIndex((i) => i.id === item.id);
        if (currentIndex < items.length - 1) {
          onNavigate(items[currentIndex + 1]);
        } else {
          onNavigate(items[0]);
        }
      } else if (e.key === 'ArrowLeft') {
        const currentIndex = items.findIndex((i) => i.id === item.id);
        if (currentIndex > 0) {
          onNavigate(items[currentIndex - 1]);
        } else {
          onNavigate(items[items.length - 1]);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    // Prevent background scrolling when lightbox is open
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [item, items, onClose, onNavigate]);

  if (!item) return null;

  const currentIndex = items.findIndex((i) => i.id === item.id);
  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : items.length - 1;
    onNavigate(items[prevIndex]);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    const nextIndex = currentIndex < items.length - 1 ? currentIndex + 1 : 0;
    onNavigate(items[nextIndex]);
  };

  return (
    <div
      id="gallery-lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={`Viewing ${item.title}`}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#131E15]/95 backdrop-blur-md p-4 sm:p-6 md:p-10"
      onClick={onClose}
    >
      {/* Close Button */}
      <button
        id="lightbox-close-btn"
        onClick={onClose}
        aria-label="Close image lightbox"
        className="absolute top-5 right-5 z-50 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-white"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev Button */}
      <button
        id="lightbox-prev-btn"
        onClick={handlePrev}
        aria-label="View previous image"
        className="absolute left-4 sm:left-6 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-white"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Next Button */}
      <button
        id="lightbox-next-btn"
        onClick={handleNext}
        aria-label="View next image"
        className="absolute right-4 sm:right-6 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-white"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Content Container */}
      <div
        className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative overflow-hidden rounded-xl bg-black/40 shadow-2xl border border-white/10 max-h-[75vh]">
          <img
            src={item.imageSrc}
            alt={item.altText}
            referrerPolicy="no-referrer"
            className="w-auto h-auto max-h-[72vh] max-w-full object-contain mx-auto transition-transform duration-300"
          />
        </div>

        {/* Captions and metadata */}
        <div className="mt-4 text-center max-w-2xl px-4">
          <div className="inline-block px-3 py-1 mb-2 text-xs uppercase tracking-widest text-[#93A796] bg-white/5 border border-white/10 rounded-full font-medium">
            {item.categoryLabel}
          </div>
          <h2 className="text-xl sm:text-2xl font-editorial text-[#FAF8F5] tracking-wide">
            {item.title}
          </h2>
          <p className="text-xs sm:text-sm text-[#C5D5C8] mt-1 line-clamp-2">
            {item.description}
          </p>
          <p className="text-[11px] text-[#7A917E] mt-1.5 italic">
            Representative visual content showcasing floral design craft at Fleurs de Saison
          </p>
        </div>
      </div>
    </div>
  );
};
