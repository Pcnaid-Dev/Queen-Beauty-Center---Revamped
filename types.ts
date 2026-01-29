export type Language = 'en' | 'ar';

export interface Service {
  id: string;
  nameEn: string;
  nameAr: string;
  category: ServiceCategory;
  descriptionEn: string;
  descriptionAr: string;
  priceStart?: number; // In JOD
  image?: string;
}

export type ServiceCategory = 'hair' | 'makeup' | 'nails' | 'lashes' | 'skincare' | 'bridal' | 'academy';

export interface Offer {
  id: string;
  titleEn: string;
  titleAr: string;
  descriptionEn: string;
  descriptionAr: string;
  price: number;
  originalPrice?: number;
  image?: string;
  expiryDate?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  commentEn: string;
  commentAr: string;
  rating: number;
  image?: string;
}

export interface SocialLink {
  platform: 'instagram' | 'facebook' | 'tiktok' | 'snapchat' | 'whatsapp';
  url: string;
  handle?: string;
}

// AI Studio Types
export type AIModuleId = 
  | 'makeup' | 'nails' | 'hair_style' | 'hair_color' | 'lashes' | 'bridal' 
  | 'skin' | 'wrinkle' | 'eyes' | 'teeth' | 'lips' | 'contour' | 'event' | 'lookbook';

export interface AIModule {
  id: AIModuleId;
  name: string;
  icon: string;
  description: string;
  promptTemplate: string;
  controls: AIControl[];
}

export interface AIControl {
  id: string;
  type: 'slider' | 'select' | 'color';
  label: string;
  options?: string[]; // For select
  min?: number;
  max?: number;
  defaultValue: string | number;
}