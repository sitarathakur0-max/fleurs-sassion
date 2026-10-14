import React, { useState, useEffect } from 'react';
import { PageId, GalleryItem } from './types';
import { GALLERY_ITEMS } from './data/floristData';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Lightbox } from './components/Lightbox';
import { HomeView } from './views/HomeView';
import { ServicesView } from './views/ServicesView';
import { GalleryView } from './views/GalleryView';
import { AboutView } from './views/AboutView';
import { FaqView } from './views/FaqView';
import { ContactView } from './views/ContactView';

export default function App() {
  const getPageFromHash = (): PageId => {
    const hash = window.location.hash.replace('#/', '').replace('#', '').toLowerCase();
    if (['home', 'services', 'gallery', 'about', 'faq', 'contact'].includes(hash)) {
      return hash as PageId;
    }
    return 'home';
  };

  const [currentPage, setCurrentPage] = useState<PageId>(getPageFromHash);
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);
  const [prefilledService, setPrefilledService] = useState<string | undefined>(undefined);

  // Sync state with URL hash
  useEffect(() => {
    const handleHashChange = () => {
      const page = getPageFromHash();
      setCurrentPage(page);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: PageId, prefill?: string) => {
    setCurrentPage(page);
    if (prefill) {
      setPrefilledService(prefill);
    }
    window.location.hash = `#/${page}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#1F2E20]">
      {/* Refined Sticky Header */}
      <Header currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Content Area */}
      <main id="main-content" className="flex-1">
        {currentPage === 'home' && (
          <HomeView
            onNavigate={handleNavigate}
            onOpenLightbox={(item) => setLightboxItem(item)}
          />
        )}

        {currentPage === 'services' && (
          <ServicesView onNavigate={handleNavigate} />
        )}

        {currentPage === 'gallery' && (
          <GalleryView onOpenLightbox={(item) => setLightboxItem(item)} />
        )}

        {currentPage === 'about' && (
          <AboutView onNavigate={handleNavigate} />
        )}

        {currentPage === 'faq' && (
          <FaqView onNavigate={handleNavigate} />
        )}

        {currentPage === 'contact' && (
          <ContactView initialService={prefilledService} />
        )}
      </main>

      {/* Factual Refined Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Accessible Photo Lightbox Modal */}
      <Lightbox
        item={lightboxItem}
        items={GALLERY_ITEMS}
        onClose={() => setLightboxItem(null)}
        onNavigate={(item) => setLightboxItem(item)}
      />
    </div>
  );
}

