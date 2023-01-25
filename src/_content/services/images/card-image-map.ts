import type { CDNImage, ServiceCategories, ServiceImages } from '../../index';

import { getImages } from '@/_content';
import { allImagesMap } from './images';

// create a type for this image map
export type CategoryCardImages = Record<
  keyof ServiceCategories,
  Record<string, CDNImage | undefined>
>;

export const serviceCardImageMap: CategoryCardImages = {
  eyebrows: {
    threading: allImagesMap.eyebrows['eyebrow-threading'],
    waxing: allImagesMap.eyebrows['eyebrow-waxing'],
    'brow-lamination': allImagesMap.eyebrows['brow-lamination'],
    tinting: allImagesMap.eyebrows['brow-tinting'],
  },
  facials: {
    'teen-facial': allImagesMap.facials['woman-touching-face'],
    'express-facial': allImagesMap.facials['facial2'],
    'traditional-facial': allImagesMap.facials['traditional-facial'],
    'soothing-back-facial': allImagesMap.facials['woman-looking-back'],
    'detoxifying-facial': allImagesMap.facials['facial'],
    'led-light-facial': allImagesMap.facials['led-light-facial'],
    microdermabrasion: allImagesMap.other['micro-needling'],
    'dermaplaning-facial': allImagesMap.facials['dermaplaning-facial'],
    'micro-hydra-facial': allImagesMap.other['micro-needling'],
    'vitamin-c-facial': allImagesMap.facials['facial2'],
    'gold-facial': allImagesMap.facials['gold-facial'],
    'skin-brightening-facial': allImagesMap.facials['facial'],
    'acne-reduction-facial': allImagesMap.facials['facial2'],
    'anti-aging-facial': allImagesMap.facials['older-woman-anti-aging'],
    'oxygen-infusion-facial': allImagesMap.facials['oxygen-infusion-facial'],
    'chemical-peels': allImagesMap.facials['chemical-peels'],
  },
  waxing: {
    'bikini-waxing': allImagesMap.waxing['woman-bikini-bottom'],
    'brazilian-waxing': allImagesMap.waxing['woman-bikini-bottom'],
    'buttocks-waxing': allImagesMap.waxing['woman-holding-buttocks'],
    'underarm-waxing': allImagesMap.waxing['underarm-waxing'],
    'half-arm-waxing': allImagesMap.waxing['arm-waxing'],
    'full-arm-waxing': allImagesMap.waxing['arm-waxing'],
    'upper-legs-waxing': allImagesMap.waxing['upper-legs-waxing'],
    'lower-legs-waxing': allImagesMap.waxing['lower-legs-waxing2'],
    'full-legs-waxing': allImagesMap.waxing['smooth-waxed-legs-in-air'],
    'back-waxing': allImagesMap.facials['woman-looking-back'],
    'stomach-waxing': allImagesMap.waxing['wax-sheet'],
    'chest-waxing': allImagesMap.waxing['chest-waxing'],
  },
  other: {
    'micro-needling': allImagesMap.other['micro-needling2'],
    'pro-cell-therapy': allImagesMap.other['ipl-therapy'],
    'chemical-peels': allImagesMap.facials['chemical-peels'],
    'lash-lift': allImagesMap.other['lash-lift-result'],
    'ipl-therapy': allImagesMap.other['ipl-therapy'],
    'laser-hair-removal': allImagesMap.other['laser-hair-removal'],
  },
};

export const getCardImages = (
  category: keyof ServiceImages,
  service: string
) => {
  checkExists({ category, service });
  const fallback = getImages(category).cover;
  return serviceCardImageMap[category][service] ?? fallback;
};

const checkExists = (items: Record<string, any>) => {
  const keys = Object.keys(items);
  keys.forEach((key) => {
    const value = items[key];
    if (!value) {
      throw new Error(`Missing ${key} value`);
    }
  });
};
