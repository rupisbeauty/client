import { CDN_URL, SERVICES_DIR } from '@/utils';
import { getImages } from '@/_content';
import type { ServiceCategories, ServiceImages } from '..';

// create a type for this image map
export type CategoryCardImages = Record<
  keyof ServiceCategories,
  Record<string, string>
>;
export const serviceCardImageMap: CategoryCardImages = {
  eyebrows: {
    threading: `${CDN_URL}/${SERVICES_DIR}/eyebrow-threading.webp`,
    waxing: `${CDN_URL}/${SERVICES_DIR}/eyebrow-waxing.webp`,
    // lamination: `${CDN_URL}/${PEOPLE_DIR}/`,
    // tinting: `${CDN_URL}/${PEOPLE_DIR}/`,
  },
  facials: {
    // "teen-facial": `${CDN_URL}/${SERVICES_DIR}/facial.webp`,
    // "express-facial": `${CDN_URL}/${SERVICES_DIR}/facial2.webp`,
    // "traditional-facial": `${CDN_URL}/${SERVICES_DIR}/facial.webp`,
    // "soothing-facial": `${CDN_URL}/${SERVICES_DIR}/facial2.webp`,
    // "detoxifying-facial": `${CDN_URL}/${SERVICES_DIR}/facial.webp`,
    // "led-light-facial": `${CDN_URL}/${SERVICES_DIR}/facial2.webp`,
    microdermabrasion: `${CDN_URL}/${SERVICES_DIR}/facial`,
    'dermaplaning-facial': `${CDN_URL}/${SERVICES_DIR}/dermaplaning.webp`,
    'micro-hydra-facial': `${CDN_URL}/${SERVICES_DIR}/facial`,
    // "vitamin-c-facial": `${CDN_URL}/${SERVICES_DIR}/facial.webp`,
    // "gold-facial": `${CDN_URL}/${SERVICES_DIR}/facial2.webp`,
    // "skin-brightening-facial": `${CDN_URL}/${SERVICES_DIR}/facial.webp`,
    // "acne-reduction-facial": `${CDN_URL}/${SERVICES_DIR}/facial2.webp`,
    // "anti-aging-facial": `${CDN_URL}/${SERVICES_DIR}/facial.webp`,
    // "oxygen-infusion-facial": `${CDN_URL}/${SERVICES_DIR}/facial2.webp`,
  },
  waxing: {
    // "bikini-waxing": `${CDN_URL}/${SERVICES_DIR}/bikini-waxing.webp`,
    // "brazilian-waxing": `${CDN_URL}/${SERVICES_DIR}/brazilian-waxing.webp`,
    // "butt-waxing": `${CDN_URL}/${SERVICES_DIR}/butt-waxing.webp`,
    'underarm-waxing': `${CDN_URL}/${SERVICES_DIR}/underarm-waxing.webp`,
    // "half-arm-waxing": `${CDN_URL}/${SERVICES_DIR}/half-arm-waxing.webp`,
    // "full-arm-waxing": `${CDN_URL}/${SERVICES_DIR}/full-arm-waxing.webp`,
    'upper-legs-waxing': `${CDN_URL}/${SERVICES_DIR}/upper-legs-waxing.webp`,
    // "lower-legs-waxing": `${CDN_URL}/${SERVICES_DIR}/lower-legs-waxing.webp`,
    // "full-legs-waxing": `${CDN_URL}/${SERVICES_DIR}/full-legs-waxing.webp`,
    // "back-waxing": `${CDN_URL}/${SERVICES_DIR}/back-waxing.webp`,
    // "stomach-waxing": `${CDN_URL}/${SERVICES_DIR}/stomach-waxing.webp`,
    // "chest-waxing": `${CDN_URL}/${SERVICES_DIR}/chest-waxing.webp`,
  },
  other: {
    'micro-needling': `${CDN_URL}/${SERVICES_DIR}/micro-needling.webp`,
    // "pro-cell-therapy": `${CDN_URL}/${SERVICES_DIR}/pro-cell-therapy.webp`,
    // "chemical-peel": `${CDN_URL}/${SERVICES_DIR}/chemical-peel.webp`,
    // "lash-lift": `${CDN_URL}/${SERVICES_DIR}/lash-lift.webp`,
    // "ipl-therapy": `${CDN_URL}/${SERVICES_DIR}/ipl-therapy.webp`,
  },
};

export const getCardImages = (
  category: keyof ServiceImages,
  service: string
) => {
  const fallback = getImages(category).cover.src;

  return serviceCardImageMap[category][service] ?? fallback;
};
