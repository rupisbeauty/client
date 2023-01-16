import { CDN_URL, PEOPLE_DIR, SERVICES_DIR } from '@/utils';
import type { DefaultServiceImages, ServiceImages } from '..';

export const imageMap: ServiceImages = {
  eyebrows: {
    cover: {
      filename: 'woman-eyes-covering-face.jpg',
      src: `${CDN_URL}/${PEOPLE_DIR}/woman-eyes-covering-face.jpg`,
      alt: 'woman with the perfect eyebrows covering her face',
      attr: 'Photo by Alexandru Zdrobău on Unsplash',
      width: 1200,
      height: 639,
    },
    accents: [
      {
        filename: 'leaf-eye.jpg',
        src: `${CDN_URL}/${PEOPLE_DIR}/leaf-eye.jpg`,
        alt: 'beautiful eyes peering from behind a plant',
        attr: 'Photo by Drew Dizzy Graham on Unsplash',
        width: 0,
        height: 0,
      },
      {
        filename: 'young-woman-with-cucumber.jpg',
        src: `${CDN_URL}/${PEOPLE_DIR}/young-woman-with-cucumber.jpg`,
        alt: 'young woman playfully holding a cucumber to her eye',
        attr: 'Photo by cookie_studio on Freepik',
        width: 1200,
        height: 800,
      },
    ],
  },
  facials: {
    cover: {
      filename: 'service-facial.jpg',
      src: `${CDN_URL}/${SERVICES_DIR}/service-facial.jpg`,
      alt: 'woman receiving facial treatment from licensed professional esthetician',
      attr: 'Image by Racool_studio on Freepik',
      width: 1200,
      height: 800,
    },
    accents: [
      {
        filename: 'young-happy-woman.jpg',
        src: `${CDN_URL}/${PEOPLE_DIR}/young-happy-woman.jpg`,
        alt: 'woman with great skin smiling happily',
        attr: 'Image by Racool_studio on Freepik',
        width: 1200,
        height: 800,
      },
      {
        filename: 'skin-care-woman-touching-face.jpg',
        src: `${CDN_URL}/${PEOPLE_DIR}/skin-care-woman-touching-face.jpg`,
        alt: 'woman pleasingly touching her own face and rubbing skin',
        attr: 'Image by cookie_studio on Freepik',
        width: 1200,
        height: 800,
      },
    ],
  },
  waxing: {
    cover: {
      filename: 'service-waxing-legs.jpg',
      src: `${CDN_URL}/${SERVICES_DIR}/service-waxing-legs.jpg`,
      alt: "professional esthetician performing a hot wax treament on a woman's legs",
      attr: 'Image by prostooleh on Freepik',
      width: 1200,
      height: 798,
    },
    accents: [
      {
        filename: 'smooth-waxed-legs.jpg',
        src: `${CDN_URL}/${PEOPLE_DIR}/smooth-waxed-legs.jpg.jpg`,
        alt: 'Woman laying outside with her smooth waxed legs in the air and sandals on.',
        attr: 'Photo by Oz Seyrek on Unsplash',
        width: 1200,
        height: 1800,
      },
      {
        filename: 'service-mens-waxing.jpg',
        src: `${CDN_URL}/${SERVICES_DIR}/service-mens-waxing.jpg.jpg`,
        alt: "professional esthetician performing a man's wax treatment",
        attr: 'Image by wavebreakmedia_micro on Freepik',
        width: 1200,
        height: 800,
      },
    ],
  },
  other: {
    cover: {
      filename: 'services-laser-hair-removal.jpg',
      src: `${CDN_URL}/${SERVICES_DIR}/service-waxing-legs.jpg`,
      alt: 'professional esthetician performing a laser hair removal treatment',
      attr: 'Image by senivpetro on Freepik',
      width: 1200,
      height: 800,
    },
    accents: [
      {
        filename: 'woman-back.jpg',
        src: `${CDN_URL}/${PEOPLE_DIR}/woman-back.jpg.jpg`,
        alt: 'Woman with beautiful skin with her back towards camera.',
        attr: 'Photo by Rafaella Mendes Diniz on Unsplash',
        width: 1200,
        height: 1800,
      },
      {
        filename: 'woman-covering-face.jpg',
        src: `${CDN_URL}/${SERVICES_DIR}/woman-covering-face.jpg.jpg`,
        alt: 'shy woman covering her face',
        attr: 'Photo by Abigail  Keenan on Unsplash',
        width: 1200,
        height: 1800,
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
