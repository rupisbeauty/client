import type { CDNImage, ServiceCategories, ServiceImages } from '..';

import { CDN_URL, PEOPLE_DIR, SERVICES_DIR } from '@/utils';
import { getImages } from '@/_content';
import { allImagesMap } from '@/_content/services/images';

// create a type for this image map
export type CategoryCardImages = Record<
  keyof ServiceCategories,
  Record<string, CDNImage | undefined>
>;

export const serviceCardImageMap: CategoryCardImages = {
  eyebrows: {
    threading: allImagesMap?.eyebrows['eyebrow-threading'],
    waxing: allImagesMap?.eyebrows['eyebrow-waxing'],
    'brow-lamination': allImagesMap?.eyebrows['brow-lamination'],
    tinting: allImagesMap?.eyebrows['brow-tinting'],
  },
  facials: {
    'teen-facial': allImagesMap?.facials['woman-touching-face'],
    'express-facial': allImagesMap?.facials['facial2'],
    'traditional-facial': allImagesMap?.facials['facial'],
    'soothing-back-facial': allImagesMap?.facials['woman-looking-back'],
    'detoxifying-facial': allImagesMap?.facials['facial'],
    'led-light-facial': allImagesMap?.facials['micro-needling'],
    microdermabrasion: allImagesMap?.facials['micro-needling'],
    'dermaplaning-facial': allImagesMap?.facials['dermaplaning'],
    'micro-hydra-facial': allImagesMap?.facials['micro-needling'],
    'vitamin-c-facial': allImagesMap?.facials['facial2'],
    'gold-facial': allImagesMap?.facials['gold-facial'],
    'skin-brightening-facial': allImagesMap?.facials['facial'],
    'acne-reduction-facial': allImagesMap?.facials['facial2'],
    'anti-aging-facial': allImagesMap?.facials['older-woman-anti-aging'],
    'oxygen-infusion-facial': allImagesMap?.facials['oxygen-infused-facial'],
    'chemical-peel': allImagesMap?.facials['chemical-peel'],
  },
  waxing: {
    'bikini-waxing': allImagesMap?.waxing['woman-bikini-bottom'],
    'brazilian-waxing': allImagesMap?.waxing['woman-bikini-bottom'],
    'butt-waxing': allImagesMap?.waxing['woman-holding-buttocks'],
    'underarm-waxing': allImagesMap?.waxing['underarm-waxing'],
    'half-arm-waxing': allImagesMap?.waxing['arm-waxing'],
    'full-arm-waxing': allImagesMap?.waxing['arm-waxing'],
    'upper-legs-waxing': allImagesMap?.waxing['upper-legs-waxing'],
    'lower-legs-waxing': allImagesMap?.waxing['lower-legs-waxing'],
    'full-legs-waxing': allImagesMap?.waxing['smooth-waxed-legs-in-air'],
    'back-waxing': allImagesMap?.facials['woman-looking-back'],
    'stomach-waxing': allImagesMap?.waxing['wax-sheet'],
    'chest-waxing': allImagesMap?.waxing['chest-waxing'],
  },
  other: {
    'micro-needling': allImagesMap?.facials['micro-needling'],
    'pro-cell-therapy': allImagesMap?.other['pro-cell-therapy'],
    'chemical-peel': allImagesMap?.facials['chemical-peel'],
    'lash-lift': allImagesMap?.other['lash-lift'],
    'ipl-therapy': allImagesMap?.other['ipl-therapy'],
    'laser-hair-removal': allImagesMap?.other['laser-hair-removal'],
  },
};

export const getCardImages = (
  category: keyof ServiceImages,
  service: string
) => {
  const fallback = getImages(category).cover;
  return serviceCardImageMap[category][service] ?? fallback;
};
