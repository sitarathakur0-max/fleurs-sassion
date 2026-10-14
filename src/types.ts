export type PageId = 'home' | 'services' | 'gallery' | 'about' | 'faq' | 'contact';

export type FloralCategory = 'all' | 'bouquets' | 'weddings' | 'decorations' | 'details';

export interface GalleryItem {
  id: string;
  title: string;
  category: FloralCategory;
  categoryLabel: string;
  imageSrc: string;
  altText: string;
  description: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface ServiceDetail {
  id: 'bouquets' | 'weddings' | 'decorations';
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  imageSrc: string;
  altText: string;
}

export interface ContactFormData {
  fullName: string;
  phone: string;
  email: string;
  serviceType: string;
  occasion: string;
  message: string;
}
