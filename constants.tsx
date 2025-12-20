import { Service } from './types';

export const SERVICES: Service[] = [
  {
    id: 'mowing',
    title: 'Precision Mowing',
    description: 'Weekly or bi-weekly mowing at optimal heights for your specific turf species.',
    icon: 'yard',
    imageUrl: 'https://cdn.shopify.com/s/files/1/0676/6896/7561/files/efls2-technology-for-precision-mowing.png?v=1754558963'
  },
  {
    id: 'fertilization',
    title: 'Nutrient Programs',
    description: 'Custom fertilizer blends that feed your grass roots and promote lush, green growth.',
    icon: 'nutrition',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3Pr3IerLSkPd0VN3bruKaU9xnzZy6fe4kuw&s'
  },
  {
    id: 'weed-control',
    title: 'Weed Management',
    description: 'Pre-emergent and post-emergent solutions to keep your lawn weed-free all year.',
    icon: 'eco',
    imageUrl: 'https://kj1bcdn.b-cdn.net/media/47833/weed-management.jpeg'
  },
  {
    id: 'cleanup',
    title: 'Seasonal Cleanup',
    description: 'Debris and leaf removal to prepare your yard for the changing seasons.',
    icon: 'park',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKmmJ8zqkDKM17x25wiDomNsW5TZgTztAEWQ&s'
  }
];

export const FOOTER_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Our Services', path: '/services' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'About Us', path: '/about' },
  { name: 'Contact', path: '/contact' },
  { name: 'Client Portal', path: '/portal' },
];
