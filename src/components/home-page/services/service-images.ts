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

export const licenses: NextJSImage[] = [
  {
    fileName: '/service-laser-hair-removal.jpg',
    title: 'Laser Hair Removal',
    alt: 'Laser Hair Removal treatment',
    attr: 'Image by senivpetro on Freepik',
    width: '1200',
    height: '800',
  },
  // {
  //   fileName: '/service-makeup-artist.jpg',
  //   title: 'Makeup Artist',
  //   alt: 'Makeup Artist',
  //   attr: 'Image by valuavitaly on Freepik',
  //   width: '1200',
  //   height: '867',
  // },
  {
    fileName: '/service-microneedling.jpg',
    title: 'Micro-needling',
    alt: 'Microneedling treatment',
    attr: 'Image by senivpetro',
    width: '1200',
    height: '800',
  },
  {
    fileName: '/service-hyaluron-pen.jpg',
    title: 'Hyaluron Pen',
    alt: 'Hyaluron treatment',
    attr: 'Image by senivpetro',
    width: '1200',
    height: '800',
  },
  {
    fileName: '/service-dermaplaning.jpg',
    title: 'Dermaplaning',
    alt: 'Dermaplaning treatment',
    attr: '',
    width: '1000',
    height: '800',
  },
];
