export interface NextJSImage {
  fileName: string;
  title: string;
  alt: string;
  width: any; // next/image expects a value of type "SafeNumber
  height: any; // next/image expects a value of type "SafeNumber
  attr?: string;
}

export const serviceImages: NextJSImage[] = [
  {
    fileName: '/service-eyebrow-threading2.jpg',
    title: 'Threading',
    alt: 'Eyebrow Threading',
    attr: 'Image by diana.grytsku',
    width: '1200',
    height: '800',
  },
  {
    fileName: '/service-facial.jpg',
    title: 'Facials',
    alt: 'Facial mask treatment',
    attr: 'Image by kroshka__nastya',
    width: '1200',
    height: '800',
  },
  {
    fileName: '/service-waxing-legs.jpg',
    title: 'Waxing',
    alt: 'Leg waxing treatment',
    attr: 'Image by prostooleh',
    width: '1200',
    height: '700',
  },
  {
    fileName: '/service-microneedling.jpg',
    title: 'Micro-needling',
    alt: 'Microneedling treatment',
    attr: 'Image by senivpetro',
    width: '1200',
    height: '800',
  },
];
