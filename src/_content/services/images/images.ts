import type { CDNImage, ServiceCategories } from '../../index';

import { CDN_URL, PEOPLE_DIR, SERVICES_DIR } from '@/utils';

export type AllImagesMap = Record<
  keyof ServiceCategories,
  Record<string, CDNImage>
>;

export const allImagesMap: AllImagesMap = {
  eyebrows: {
    'eyebrow-threading': {
      src: `${CDN_URL}/${SERVICES_DIR}/eyebrow-threading.webp`,
      alt: 'Professional eyebrow threading services',
      attr: 'Image by Freepik',
      width: 1920,
      height: 1046,
      dimensions: {
        width: 1920,
        height: 1046,
      },
    },
    'eyebrow-threading2': {
      src: `${CDN_URL}/${SERVICES_DIR}/eyebrow-threading2.webp`,
      alt: 'Professional eyebrow threading services',
      attr: 'Image by diana.grytsku on Freepik',
      width: 1200,
      height: 800,
      dimensions: {
        width: 1200,
        height: 800,
      },
    },
    'eyebrow-waxing': {
      src: `${CDN_URL}/${SERVICES_DIR}/eyebrow-waxing.webp`,
      alt: 'Professional eyebrow waxing services',
      attr: 'Image by wavebreakmedia_micro on Freepik',
      width: 1920,
      height: 1280,
      dimensions: {
        width: 1920,
        height: 1280,
      },
    },
    'brow-lamination': {
      src: `${CDN_URL}/${SERVICES_DIR}/brow-lamination.webp`,
      alt: 'Professional eyebrow lamination services',
      attr: '',
      width: 1920,
      height: 1080,
      dimensions: {
        width: 1920,
        height: 1080,
      },
    },
    'brow-tinting': {
      src: `${CDN_URL}/${SERVICES_DIR}/brow-tinting.webp`,
      alt: 'Professional eyebrow tinting services',
      attr: '',
      width: 1920,
      height: 1080,
      dimensions: {
        width: 1920,
        height: 1080,
      },
    },
    'woman-eyes-covering-face': {
      src: `${CDN_URL}/${PEOPLE_DIR}/woman-eyes-covering-face.webp`,
      alt: 'Professional Estheticaian services for eyebrows',
      attr: 'Photo by Alexandru Zdrobău on Unsplash',
      width: 1920,
      height: 1022,
      dimensions: {
        width: 1920,
        height: 1022,
      },
    },
    'woman-with-cucumber': {
      src: `${CDN_URL}/${PEOPLE_DIR}/woman-with-cucumber.webp`,
      alt: 'Professional Estheticaian services for eyebrows',
      attr: 'Image by cookie_studio on Freepik',
      width: 1920,
      height: 1280,
      dimensions: {
        width: 1920,
        height: 1280,
      },
    },
  },
  facials: {
    facial: {
      src: `${CDN_URL}/${SERVICES_DIR}/facial.webp`,
      alt: 'Professional facial treatments',
      attr: 'Image by Racool_studio on Freepik',
      width: 1920,
      height: 1280,
      dimensions: {
        width: 1920,
        height: 1280,
      },
    },
    facial2: {
      src: `${CDN_URL}/${SERVICES_DIR}/facial2.webp`,
      alt: 'Professional facial treatments',
      attr: 'Image by kroshka__nastya on Freepik',
      width: 1920,
      height: 1280,
      dimensions: {
        width: 1920,
        height: 1280,
      },
    },
    'gold-facial': {
      src: `${CDN_URL}/${SERVICES_DIR}/gold-facial.webp`,
      alt: 'Professional facial treatments with gold',
      attr: 'Image by diana.grytsku on Freepik',
      width: 1920,
      height: 1280,
      dimensions: {
        width: 1920,
        height: 1280,
      },
    },
    'oxygen-infusion-facial': {
      src: `${CDN_URL}/${SERVICES_DIR}/oxygen-infusion-facial.webp`,
      alt: 'Professional oxygen infused facial treatments',
      attr: '',
      width: 1920,
      height: 1280,
      dimensions: {
        width: 1920,
        height: 1280,
      },
    },
    'chemical-peel': {
      src: `${CDN_URL}/${SERVICES_DIR}/chemical-peel.webp`,
      alt: 'Professional chemical peel services',
      attr: 'Image by senivpetro on Freepik',
      width: 1920,
      height: 1280,
      dimensions: {
        width: 1920,
        height: 1280,
      },
    },
    'dermaplaning-facial': {
      src: `${CDN_URL}/${SERVICES_DIR}/dermaplaning.webp`,
      alt: 'Professional dermaplaning services',
      attr: '',
      width: 1000,
      height: 800,
      dimensions: {
        width: 1000,
        height: 800,
      },
    },
    'woman-facial-treatment': {
      src: `${CDN_URL}/${PEOPLE_DIR}/woman-facial-treatment.webp`,
      alt: 'Professional facial treatments',
      attr: 'Image by senivpetro on Freepik',
      width: 1200,
      height: 800,
      dimensions: {
        width: 1200,
        height: 800,
      },
    },
    'older-woman-anti-aging': {
      src: `${CDN_URL}/${PEOPLE_DIR}/older-woman-anti-aging.webp`,
      alt: 'Professional anti-aging facial treatments',
      attr: 'Image by wayhomestudi on Freepik',
      width: 1920,
      height: 1280,
      dimensions: {
        width: 1920,
        height: 1280,
      },
    },
    'woman-half-face-mask': {
      src: `${CDN_URL}/${PEOPLE_DIR}/woman-half-face-mask.webp`,
      alt: 'Professional facial treatements',
      attr: 'Image by senivpetro on Freepik',
      width: 1200,
      height: 800,
      dimensions: {
        width: 1200,
        height: 800,
      },
    },
    'woman-looking-back': {
      src: `${CDN_URL}/${PEOPLE_DIR}/woman-looking-back.webp`,
      alt: 'Professional facial treatements',
      attr: 'Photo by Rafaella Mendes Diniz',
      width: 1280,
      height: 1920,
      dimensions: {
        width: 1280,
        height: 1920,
      },
    },
    'woman-shy-covering-face': {
      src: `${CDN_URL}/${PEOPLE_DIR}/woman-shy-covering-face.webp`,
      alt: 'Professional facial treatements',
      attr: 'Photo by Abigail  Keenan on Unsplash',
      width: 1280,
      height: 1920,
      dimensions: {
        width: 1280,
        height: 1920,
      },
    },
    'woman-smooth-skin-sitting': {
      src: `${CDN_URL}/${PEOPLE_DIR}/woman-smooth-skin-sitting.webp`,
      alt: 'Professional facial treatements',
      attr: 'Photo by ŞULE MAKAROĞLU on Unsplash',
      width: 1715,
      height: 1920,
      dimensions: {
        width: 1715,
        height: 1920,
      },
    },
    'woman-smooth-skin-white-clothes': {
      src: `${CDN_URL}/${PEOPLE_DIR}/woman-smooth-skin-white-clothes.webp`,
      alt: 'Professional facial treatements',
      attr: 'Photo by Alexandru Zdrobău on Unsplash',
      width: 1277,
      height: 1920,
      dimensions: {
        width: 1277,
        height: 1920,
      },
    },
    'woman-tenderly-touching-skin': {
      src: `${CDN_URL}/${PEOPLE_DIR}/woman-tenderly-touching-skin.webp`,
      alt: 'Professional facial treatements',
      attr: 'Image by nakaridore on Freepik',
      width: 1920,
      height: 1280,
      dimensions: {
        width: 1920,
        height: 1280,
      },
    },
    'woman-touching-face': {
      src: `${CDN_URL}/${PEOPLE_DIR}/woman-touching-face.webp`,
      alt: 'Professional facial treatements',
      attr: '',
      width: 1920,
      height: 1280,
      dimensions: {
        width: 1920,
        height: 1280,
      },
    },
    'woman-touching-face-in-box-trans': {
      src: `${CDN_URL}/${PEOPLE_DIR}/woman-touching-face-in-box-trans.webp`,
      alt: 'Professional facial treatements',
      attr: '',
      width: 900,
      height: 900,
      dimensions: {
        width: 900,
        height: 900,
      },
    },
    'woman-touching-face-trans': {
      src: `${CDN_URL}/${PEOPLE_DIR}/woman-touching-face-trans.webp`,
      alt: 'Professional facial treatements',
      attr: '',
      width: 781,
      height: 821,
      dimensions: {
        width: 781,
        height: 821,
      },
    },
    'woman-wavy-hair': {
      src: `${CDN_URL}/${PEOPLE_DIR}/woman-wavy-hair.webp`,
      alt: 'Professional facial treatements',
      attr: '',
      width: 1920,
      height: 1440,
      dimensions: {
        width: 1920,
        height: 1440,
      },
    },
    'woman-young-happy': {
      src: `${CDN_URL}/${PEOPLE_DIR}/woman-young-happy.webp`,
      alt: 'Professional facial treatements',
      attr: 'Image by Racool_studio from Freepik',
      width: 1920,
      height: 1280,
      dimensions: {
        width: 1920,
        height: 1280,
      },
    },
  },
  waxing: {
    'woman-holding-buttocks': {
      src: `${CDN_URL}/${PEOPLE_DIR}/woman-holding-buttocks.webp`,
      alt: 'Professional buttocks waxing treatments',
      attr: 'Image by master1305 on Freepik',
      width: 1920,
      height: 1280,
      dimensions: {
        width: 1920,
        height: 1280,
      },
    },
    'underarm-waxing': {
      src: `${CDN_URL}/${SERVICES_DIR}/underarm-waxing.webp`,
      alt: 'Professional underarm waxing services',
      attr: 'Image by wavebreakmedia_micro',
      width: 1920,
      height: 1080,
      dimensions: {
        width: 1920,
        height: 1080,
      },
    },
    'arm-waxing': {
      src: `${CDN_URL}/${SERVICES_DIR}/arm-waxing.webp`,
      alt: 'Professional arm waxing services',
      attr: '',
      width: 1920,
      height: 1280,
      dimensions: {
        width: 1920,
        height: 1280,
      },
    },
    'upper-legs-waxing': {
      src: `${CDN_URL}/${SERVICES_DIR}/upper-legs-waxing.webp`,
      alt: 'Professional upper leg waxing services',
      attr: 'Image by prostooleh on Freepik',
      width: 1920,
      height: 1278,
      dimensions: {
        width: 1920,
        height: 1278,
      },
    },
    'lower-legs-waxing': {
      src: `${CDN_URL}/${SERVICES_DIR}/lower-legs-waxing.webp`,
      alt: 'Professional lower leg waxing services',
      attr: '',
      width: 1920,
      height: 1080,
      dimensions: {
        width: 1920,
        height: 1080,
      },
    },
    'chest-waxing': {
      src: `${CDN_URL}/${SERVICES_DIR}/chest-waxing.webp`,
      alt: 'Professional chest waxing services',
      attr: '',
      width: 1920,
      height: 1280,
      dimensions: {
        width: 1920,
        height: 1280,
      },
    },
    'wax-sheet': {
      src: `${CDN_URL}/${SERVICES_DIR}/wax-sheet.webp`,
      alt: 'Professional waxing services',
      attr: '',
      width: 1536,
      height: 1920,
      dimensions: {
        width: 1536,
        height: 1920,
      },
    },
    'smooth-waxed-legs-in-air': {
      src: `${CDN_URL}/${PEOPLE_DIR}/smooth-waxed-legs-in-air.webp`,
      alt: 'Professional leg waxing treatments',
      attr: 'Photo by Oz Seyrek on Unsplash',
      width: 1280,
      height: 1920,
      dimensions: {
        width: 1280,
        height: 1920,
      },
    },
  },
  other: {
    'hylauron-pen': {
      src: `${CDN_URL}/${SERVICES_DIR}/hylauron-pen.webp`,
      alt: 'Professional hylauron pen services',
      attr: '',
      width: 626,
      height: 417,
      dimensions: {
        width: 626,
        height: 417,
      },
    },
    'laser-hair-removal': {
      src: `${CDN_URL}/${SERVICES_DIR}/laser-hair-removal.webp`,
      alt: 'Professional laser hair removal services',
      attr: '',
      width: 1920,
      height: 1280,
      dimensions: {
        width: 1920,
        height: 1280,
      },
    },
    'lash-lift': {
      src: `${CDN_URL}/${SERVICES_DIR}/lash-lift.webp`,
      alt: 'Professional lash lift services',
      attr: '',
      width: 1920,
      height: 1920,
      dimensions: {
        width: 1920,
        height: 1920,
      },
    },
    massage: {
      src: `${CDN_URL}/${SERVICES_DIR}/massage.webp`,
      alt: 'Professional massage services',
      attr: '',
      width: 1920,
      height: 1337,
      dimensions: {
        width: 1920,
        height: 1337,
      },
    },
    'micro-needling': {
      src: `${CDN_URL}/${SERVICES_DIR}/micro-needling.webp`,
      alt: 'Professional micro needling services',
      attr: '',
      width: 1920,
      height: 1280,
      dimensions: {
        width: 1920,
        height: 1280,
      },
    },
    'ipl-therapy': {
      src: `${CDN_URL}/${SERVICES_DIR}/ipl-therapy.webp`,
      alt: 'Professional Intense Pulse Light (IP)L therapy treatment',
      attr: '',
      width: 1920,
      height: 1281,
      dimensions: {
        width: 1920,
        height: 1281,
      },
    },
    'hero-composite': {
      src: `${CDN_URL}/${PEOPLE_DIR}/hero-composite.png`,
      alt: 'Professional Esthetician services for your skin care needs.',
      attr: '',
      width: 1200,
      height: 1200,
      dimensions: {
        width: 1200,
        height: 1200,
      },
    },
    'leaf-eye': {
      src: `${CDN_URL}/${PEOPLE_DIR}/leaf-eye.webp`,
      alt: 'Professional Eyebrow treatment services',
      attr: 'Photo by Drew Dizzy Graham',
      width: 1280,
      height: 1920,
      dimensions: {
        width: 1280,
        height: 1920,
      },
    },
  },
};

export type ImageTitleKeys = {
  eyebrows: keyof AllImagesMap['eyebrows'];
  facials: keyof AllImagesMap['facials'];
  waxing: keyof AllImagesMap['waxing'];
  other: keyof AllImagesMap['other'];
};
