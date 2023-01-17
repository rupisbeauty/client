import { CDN_URL, PEOPLE_DIR, SERVICES_DIR } from '@/utils';
import type { DefaultServiceImages, ServiceImages } from '..';

export const imageMap: ServiceImages = {
  eyebrows: {
    cover: {
      filename: 'woman-eyes-covering-face.webp',
      src: `${CDN_URL}/${PEOPLE_DIR}/woman-eyes-covering-face.webp`,
      alt: 'woman with the perfect eyebrows covering her face',
      attr: 'Photo by Alexandru Zdrobău on Unsplash',
      width: 1600,
      height: 852,
      dimensions: {
        width: 1920,
        height: 1022,
      },
      styles: {
        objectFit: 'cover',
      },
    },
    accents: [
      {
        filename: 'leaf-eye.webp',
        src: `${CDN_URL}/${PEOPLE_DIR}/leaf-eye.webp`,
        alt: 'beautiful eyes peering from behind a plant',
        attr: 'Photo by Drew Dizzy Graham on Unsplash',
        width: 1600,
        height: 1067,
        dimensions: {
          width: 1280,
          height: 1920,
        },
        styles: {
          objectFit: 'cover',
          transform: 'translateY(-20%)',
        },
      },
      {
        filename: 'young-woman-with-cucumber.webp',
        src: `${CDN_URL}/${PEOPLE_DIR}/young-woman-with-cucumber.webp`,
        alt: 'young woman playfully holding a cucumber to her eye',
        attr: 'Photo by cookie_studio on Freepik',
        width: 1600,
        height: 1067,
        dimensions: { width: 1920, height: 1280 },
        styles: {
          objectFit: 'cover',
          transform: 'translateY(-30%)'
        },
      },
    ],
  },
  facials: {
    cover: {
      filename: 'service-facial.webp',
      src: `${CDN_URL}/${SERVICES_DIR}/service-facial.webp`,
      alt: 'woman receiving facial treatment from licensed professional esthetician',
      attr: 'Image by Racool_studio on Freepik',
      width: 1200,
      height: 800,
    },
    accents: [
      {
        filename: 'young-happy-woman.webp',
        src: `${CDN_URL}/${PEOPLE_DIR}/young-happy-woman.webp`,
        alt: 'woman with great skin smiling happily',
        attr: 'Image by Racool_studio on Freepik',
        width: 1600,
        height: 1065,
        dimensions: {
          width: 1920,
          height: 1280,
        },
        styles: {
          objectFit: 'cover',
          transform: 'translateY(-35%)',
        },
      },
      {
        filename: 'skin-care-woman-touching-face.webp',
        src: `${CDN_URL}/${PEOPLE_DIR}/skin-care-woman-touching-face.webp`,
        alt: 'woman pleasingly touching her own face and rubbing skin',
        attr: 'Image by cookie_studio on Freepik',
        width: 1600,
        height: 1065,
        dimensions: {
          width: 1920,
          height: 1280,
        },
        styles: {
          objectFit: 'cover',
          transform: 'translateY(-15%)',
        },
      },
    ],
  },
  waxing: {
    cover: {
      filename: 'service-waxing-legs.webp',
      src: `${CDN_URL}/${SERVICES_DIR}/service-waxing-legs.webp`,
      alt: "professional esthetician performing a hot wax treament on a woman's legs",
      attr: 'Image by prostooleh on Freepik',
      width: 1600,
      height: 1065,
      dimensions: {
        width: 1920,
        height: 1278,
      },
      styles: {
        objectFit: 'contain',
        transform: 'translateY(-28%)',
      },
    },
    accents: [
      {
        filename: 'service-mens-waxing.webp',
        src: `${CDN_URL}/${SERVICES_DIR}/service-mens-waxing.webp`,
        alt: "professional esthetician performing a man's wax treatment",
        attr: 'Image by wavebreakmedia_micro on Freepik',
        width: 1920,
        height: 1280,
        dimensions: {
          width: 1280,
          height: 1920,
        },
        styles: {
          objectFit: 'cover',
          transform: 'translateY(-35%)',
        },
      },
      {
        filename: 'smooth-waxed-legs.webp',
        src: `${CDN_URL}/${PEOPLE_DIR}/smooth-waxed-legs.webp`,
        alt: 'Woman laying outside with her smooth waxed legs in the air and sandals on.',
        attr: 'Photo by Oz Seyrek on Unsplash',
        width: 1280,
        height: 1920,
        dimensions: {
          width: 1280,
          height: 1920,
        },
        styles: {
          objectFit: 'contain',
          transform: 'translateY(-45%)',
        },
      },
    ],
  },
  other: {
    cover: {
      filename: 'service-laser-hair-removal.webp',
      src: `${CDN_URL}/${SERVICES_DIR}/service-laser-hair-removal.webp`,
      alt: 'professional esthetician performing a laser hair removal treatment',
      attr: 'Image by senivpetro on Freepik',
      width: 1280,
      height: 1920,
      dimensions: {
        width: 1280,
        height: 1920,
      },
      styles: {
        objectFit: 'contain',
        transform: 'translateY(-35%)',
      },
    },
    accents: [
      {
        filename: 'woman-back.webp',
        src: `${CDN_URL}/${PEOPLE_DIR}/woman-back.webp`,
        alt: 'Woman with beautiful skin with her back towards camera.',
        attr: 'Photo by Rafaella Mendes Diniz on Unsplash',
        width: 1920,
        height: 1280,
        dimensions: {
          width: 1920,
          height: 1280,
        },
        styles: {
          objectFit: 'cover',
          objectPosition: 'center',
        },
      },
      {
        filename: 'woman-covering-face.webp',
        src: `${CDN_URL}/${PEOPLE_DIR}/woman-covering-face.webp`,
        alt: 'shy woman covering her face',
        attr: 'Photo by Abigail  Keenan on Unsplash',
        width: 5669,
        height: 3017,
        dimensions: {
          width: 1280,
          height: 1920,
        },
        styles: {
          objectFit: 'cover',
          // objectPosition: 'bottom left',
          transform: 'translateY(-65%)',
        },
      },
    ],
  },
};

export const defaultImages: DefaultServiceImages = {
  cover: {
    filename: 'beautiful-woman.jpg',
    src: `${CDN_URL}${PEOPLE_DIR}/beautiful-woman.jpg}`,
    alt: 'beautiful-woman',
    attr: 'Image by valuavitaly on Freepik',
    width: 1600,
    height: 1200,
  },
  accents: [
    {
      filename: 'leaf-eye.jpg',
      src: `${CDN_URL}${PEOPLE_DIR}/leaf-eye.jpg}`,
      alt: 'women with beautiful eye peering out from behind a plant',
      attr: 'Photo by Drew Dizzy Graham on Unsplash',
      width: 1200,
      height: 1800,
    },
    {
      filename: '',
      src: '',
      alt: '',
      attr: '',
      width: 0,
      height: 0,
    },
  ],
};

/**
 *F
 *
 * @param {keyof ServiceImages} category
 * @return {*}
 */
export const getImages = (category: keyof ServiceImages) => {
  return {
    cover: imageMap[category]?.cover ?? defaultImages.cover,
    accents: imageMap[category]?.accents ?? defaultImages.accents,
  };
};
