import { CDN_URL, PEOPLE_DIR, SERVICES_DIR } from '@/utils';
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
    'brow-lamination': `${CDN_URL}/${SERVICES_DIR}/brow-lamination.webp`,
    tinting: `${CDN_URL}/${SERVICES_DIR}/brow-tinting.webp`,
  },
  facials: {
    'teen-facial': `${CDN_URL}/${PEOPLE_DIR}/woman-touching-face.webp`,
    // "express-facial": `${CDN_URL}/${SERVICES_DIR}/facial2.webp`,
    // "traditional-facial": `${CDN_URL}/${SERVICES_DIR}/facial.webp`,
    'soothing-facial': `${CDN_URL}/${SERVICES_DIR}/woman-looking-back.webp`,
    // "detoxifying-facial": `${CDN_URL}/${SERVICES_DIR}/facial.webp`,
    'led-light-facial': `${CDN_URL}/${SERVICES_DIR}/micro-needling.webp`,
    microdermabrasion: `${CDN_URL}/${SERVICES_DIR}/micro-needling.webp`,
    'dermaplaning-facial': `${CDN_URL}/${SERVICES_DIR}/dermaplaning.webp`,
    'micro-hydra-facial': `${CDN_URL}/${SERVICES_DIR}/micro-needling.webp`,
    // "vitamin-c-facial": `${CDN_URL}/${SERVICES_DIR}/facial.webp`,
    'gold-facial': `${CDN_URL}/${SERVICES_DIR}/gold-facial.webp`,
    // "skin-brightening-facial": `${CDN_URL}/${SERVICES_DIR}/facial.webp`,
    'acne-reduction-facial': `${CDN_URL}/${PEOPLE_DIR}/woman-touching-face.webp`,
    'anti-aging-facial': `${CDN_URL}/${PEOPLE_DIR}/older-woman-anti-aging.webp`,
    'oxygen-infusion-facial': `${CDN_URL}/${SERVICES_DIR}/oxygen-infusion-facial.webp`,
  },
  waxing: {
    'bikini-waxing': `${CDN_URL}/${PEOPLE_DIR}/woman-bikini-bottom.webp`,
    'brazilian-waxing': `${CDN_URL}/${PEOPLE_DIR}/woman-bikini-bottom.webp`,
    'butt-waxing': `${CDN_URL}/${PEOPLE_DIR}/woman-holding-buttocks.webp`,
    'underarm-waxing': `${CDN_URL}/${SERVICES_DIR}/underarm-waxing.webp`,
    'half-arm-waxing': `${CDN_URL}/${SERVICES_DIR}/arm-waxing.webp`,
    'full-arm-waxing': `${CDN_URL}/${SERVICES_DIR}/arm-waxing.webp`,
    'upper-legs-waxing': `${CDN_URL}/${SERVICES_DIR}/upper-legs-waxing.webp`,
    'lower-legs-waxing': `${CDN_URL}/${SERVICES_DIR}/lower-legs-waxing.webp`,
    'full-legs-waxing': `${CDN_URL}/${PEOPLE_DIR}/smooth-waxed-legs-in-air.webp`,
    'back-waxing': `${CDN_URL}/${PEOPLE_DIR}/woman-looking-back.webp`,
    'stomach-waxing': `${CDN_URL}/${SERVICES_DIR}/wax-sheet.webp`,
    'chest-waxing': `${CDN_URL}/${SERVICES_DIR}/chest-waxing.webp`,
  },
  other: {
    'micro-needling': `${CDN_URL}/${SERVICES_DIR}/micro-needling.webp`,
    'pro-cell-therapy': `${CDN_URL}/${SERVICES_DIR}/micro-needling.webp`,
    'chemical-peel': `${CDN_URL}/${SERVICES_DIR}/chemical-peel.webp`,
    'lash-lift': `${CDN_URL}/${SERVICES_DIR}/lash-lift.jpg`, // @FIXME: change extension to webp
    'ipl-therapy': `${CDN_URL}/${SERVICES_DIR}/ipl-therapy.webp`,
  },
};

export const getCardImages = (
  category: keyof ServiceImages,
  service: string
) => {
  const fallback = getImages(category).cover.src;

  return serviceCardImageMap[category][service] ?? fallback;
};
