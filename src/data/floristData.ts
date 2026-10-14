import heroImg from '../assets/images/fleurs_hero_bouquet_1789835871440.jpg';
import bouquetImg from '../assets/images/seasonal_bouquet_craft_1789835884048.jpg';
import weddingImg from '../assets/images/wedding_floral_centerpiece_1789835896511.jpg';
import decorImg from '../assets/images/floral_decor_installation_1789835908490.jpg';
import workshopImg from '../assets/images/florist_workshop_table_1789835922804.jpg';
import macroImg from '../assets/images/botanical_macro_detail_1789835933702.jpg';
import storefrontImg from '../assets/images/boutique_strasbourg_1789835946045.jpg';
import { GalleryItem, FaqItem, ServiceDetail } from '../types';

export const BUSINESS_INFO = {
  name: 'Fleurs de Saison',
  category: 'Florist',
  address: '14 Rue des Bouchers, 67000 Strasbourg, France',
  street: '14 Rue des Bouchers',
  city: 'Strasbourg',
  postalCode: '67000',
  country: 'France',
  phone: '+33 3 88 24 51 76',
  phoneClean: '+33388245176',
  rating: '4.8/5',
  reviewsCount: 37,
  tagline: 'Seasonal Flowers, Thoughtfully Arranged',
  shortAbout: 'Independent flower shop creating seasonal bouquets, wedding arrangements and custom floral decorations.',
  description: 'Beautiful seasonal bouquets, wedding arrangements and custom floral decorations from an independent flower shop in Strasbourg.',
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=14+Rue+des+Bouchers%2C+67000+Strasbourg%2C+France',
};

export const IMAGES = {
  hero: heroImg,
  bouquet: bouquetImg,
  wedding: weddingImg,
  decor: decorImg,
  workshop: workshopImg,
  macro: macroImg,
  storefront: storefrontImg,
};

export const SERVICES: ServiceDetail[] = [
  {
    id: 'bouquets',
    title: 'Seasonal Bouquets',
    subtitle: 'Nature-inspired hand-tied arrangements',
    description: 'Beautiful floral arrangements created around seasonal flowers and natural character. Every bouquet reflects the current seasonal rhythm with balanced foliage, fresh stems, and organic harmony.',
    highlights: [
      'Arranged with fresh seasonal flowers and natural greenery',
      'Artisanal hand-tied presentation with natural craft paper',
      'Harmonious color palettes suited for everyday and gifting',
      'Crafted individually by an independent florist in Strasbourg'
    ],
    imageSrc: bouquetImg,
    altText: 'Handcrafted seasonal flower bouquet wrapped in natural paper'
  },
  {
    id: 'weddings',
    title: 'Wedding Arrangements',
    subtitle: 'Refined floral design for wedding celebrations',
    description: 'Floral arrangements designed for wedding celebrations and special occasions. Thoughtful compositions created to complement each celebratory setting with romantic grace and natural elegance.',
    highlights: [
      'Bespoke floral arrangements for wedding ceremonies and receptions',
      'Elegant table centerpieces, focal displays, and delicate details',
      'Designed to complement individual wedding styles and atmosphere',
      'Personalized consultation directly with our independent flower shop'
    ],
    imageSrc: weddingImg,
    altText: 'Elegant wedding floral centerpiece on a banquet table'
  },
  {
    id: 'decorations',
    title: 'Custom Floral Decorations',
    subtitle: 'Bespoke floral styling for memorable atmospheres',
    description: 'Bespoke floral decoration for customers looking for a personalized floral atmosphere. Crafted to transform spaces with distinctive botanical compositions tailored to your occasion.',
    highlights: [
      'Custom floral atmospheres tailored to your specific occasion',
      'Artistic architectural and decorative botanical styling',
      'Careful harmonization of fresh florals, greenery, and vessels',
      'Direct collaboration to bring your floral vision to life'
    ],
    imageSrc: decorImg,
    altText: 'Bespoke architectural floral decoration with lush foliage'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gallery-1',
    title: 'Seasonal Hand-Tied Garden Bouquet',
    category: 'bouquets',
    categoryLabel: 'Seasonal Bouquets',
    imageSrc: heroImg,
    altText: 'Artisanal seasonal floral bouquet on a wooden florist worktable',
    description: 'A signature seasonal composition featuring lush garden blooms, delicate ranunculus, and organic textured eucalyptus leaves.'
  },
  {
    id: 'gallery-2',
    title: 'Craft Paper Wrapped Fresh Stems',
    category: 'bouquets',
    categoryLabel: 'Seasonal Bouquets',
    imageSrc: bouquetImg,
    altText: 'Fresh seasonal bouquet wrapped in neutral craft paper with linen twine',
    description: 'Carefully conditioned seasonal stems bound with rustic twine and neutral florist craft paper.'
  },
  {
    id: 'gallery-3',
    title: 'Romantic Wedding Centerpiece',
    category: 'weddings',
    categoryLabel: 'Wedding Flowers',
    imageSrc: weddingImg,
    altText: 'Ivory and blush floral compote arrangement on a wedding table',
    description: 'Low compote wedding arrangement highlighting soft ivory and blush blossoms with cascading botanical greenery.'
  },
  {
    id: 'gallery-4',
    title: 'Bespoke Architectural Floral Installation',
    category: 'decorations',
    categoryLabel: 'Floral Decorations',
    imageSrc: decorImg,
    altText: 'Custom floral installation framing an interior stone archway',
    description: 'An immersive custom floral decoration featuring layered branches, cascading foliage, and accent flowers.'
  },
  {
    id: 'gallery-5',
    title: 'Florist Workbench & Cut Stems',
    category: 'details',
    categoryLabel: 'Flower Details',
    imageSrc: workshopImg,
    altText: 'Florist workshop table with brass shears, fresh stems, and terracotta vessels',
    description: 'Behind the scenes at the Strasbourg atelier where seasonal stems are trimmed, conditioned, and curated daily.'
  },
  {
    id: 'gallery-6',
    title: 'Dew-Kissed Botanical Petal Macro',
    category: 'details',
    categoryLabel: 'Flower Details',
    imageSrc: macroImg,
    altText: 'Close-up macro of delicate velvety flower petals with tiny dew drops',
    description: 'An intimate study of natural petal texture, delicate veining, and morning moisture on fresh seasonal blooms.'
  },
  {
    id: 'gallery-7',
    title: 'Rue des Bouchers Boutique Entrance',
    category: 'decorations',
    categoryLabel: 'Floral Decorations',
    imageSrc: storefrontImg,
    altText: 'Charming European flower shop entrance with outdoor floral displays',
    description: 'Our independent flower shop facade on 14 Rue des Bouchers in Strasbourg welcoming visitors with fresh seasonal flowers.'
  }
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'Seasonal Bouquets',
    question: 'What makes your seasonal bouquets unique?',
    answer: 'At Fleurs de Saison, our bouquets are composed around flowers that reflect the current seasonal period. We prioritize natural character, balanced botanical foliage, and thoughtful hand-tying to let every stem express its organic beauty.'
  },
  {
    id: 'faq-2',
    category: 'Wedding Arrangements',
    question: 'How do wedding floral arrangements work at Fleurs de Saison?',
    answer: 'We design wedding floral arrangements tailored to your celebration. We invite couples to contact the shop to discuss their event, color preferences, and the specific floral atmosphere they wish to create for their special day.'
  },
  {
    id: 'faq-3',
    category: 'Custom Floral Decoration',
    question: 'What is custom floral decoration?',
    answer: 'Custom floral decoration is our bespoke service for customers seeking a tailored floral atmosphere. Whether for a dinner, private reception, or distinct interior setting, we create personalized arrangements that harmonize with your space.'
  },
  {
    id: 'faq-4',
    category: 'Enquiries & Contact',
    question: 'How can I place an enquiry or contact the florist?',
    answer: 'You can submit an enquiry directly through our website contact form or call our shop by telephone at +33 3 88 24 51 76 to speak with us about your floral requirements.'
  },
  {
    id: 'faq-5',
    category: 'Location',
    question: 'Where is your flower shop located?',
    answer: 'Fleurs de Saison is located in Strasbourg, France, at 14 Rue des Bouchers, 67000 Strasbourg. We welcome you to discover our independent shop and seasonal floral designs.'
  },
  {
    id: 'faq-6',
    category: 'General Questions',
    question: 'Do you create arrangements for special occasions?',
    answer: 'Yes. In addition to everyday seasonal bouquets and weddings, we create custom floral decorations and arrangements for a wide range of personal milestones and celebrations.'
  }
];
