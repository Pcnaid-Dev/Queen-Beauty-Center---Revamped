import { Service, Offer } from '../types';

export const SERVICES: Service[] = [
  // Hair
  {
    id: 'h1',
    category: 'hair',
    nameEn: 'Royal Haircut & Style',
    nameAr: 'قص شعر ملكي وسشوار',
    descriptionEn: 'Precision cut tailored to your face shape with a signature bouncy blow-dry.',
    descriptionAr: 'قص دقيق يناسب شكل وجهك مع سشوار مميز.',
    priceStart: 15,
    image: 'https://picsum.photos/400/300?random=1'
  },
  {
    id: 'h2',
    category: 'hair',
    nameEn: 'Protein & Brazilian Treatment',
    nameAr: 'علاج بروتين وبرازيلي',
    descriptionEn: 'Restore shine and strength tailored for damaged hair.',
    descriptionAr: 'استعادة اللمعان والقوة للشعر التالف.',
    priceStart: 50,
    image: 'https://picsum.photos/400/300?random=2'
  },
  // Makeup
  {
    id: 'm1',
    category: 'makeup',
    nameEn: 'Soft Glam Makeup',
    nameAr: 'مكياج ناعم',
    descriptionEn: 'Radiant, natural look perfect for photoshoots or day events.',
    descriptionAr: 'مظهر مشرق وطبيعي مثالي للتصوير أو المناسبات النهارية.',
    priceStart: 25,
    image: 'https://picsum.photos/400/300?random=3'
  },
  {
    id: 'm2',
    category: 'makeup',
    nameEn: 'Heavy Glam / Soiree',
    nameAr: 'مكياج سهرة ثقيل',
    descriptionEn: 'Full coverage, contour, glitter, and drama for the night.',
    descriptionAr: 'تغطية كاملة، كونتور، جليتر، وإطلالة درامية للسهرة.',
    priceStart: 35,
    image: 'https://picsum.photos/400/300?random=4'
  },
  // Bridal
  {
    id: 'b1',
    category: 'bridal',
    nameEn: 'Full Bridal Package',
    nameAr: 'بكج العروس الكامل',
    descriptionEn: 'Includes full hair styling, professional makeup, skin preparation, and dressing assistance.',
    descriptionAr: 'يشمل تصفيف الشعر، والمكياج الاحترافي، وتجهيز البشرة، والمساعدة في اللباس.',
    priceStart: 150,
    image: 'https://picsum.photos/400/300?random=5'
  }
];