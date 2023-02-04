import type { ImageProps } from '@chakra-ui/react';

import images from './images.json';

export type CDNImage = {
  src: string;
  alt: string;
  attr: string;
  width: number;
  height: number;
  dimensions?: {
    width: number;
    height: number;
  };
  styles?: Pick<ImageProps, 'objectFit' | 'objectPosition' | 'transform'>;
};

export type ServiceImages = {
  eyebrows: {
    cover: CDNImage;
    accents: CDNImage[];
  };
  facials: {
    cover: CDNImage;
    accents: CDNImage[];
  };
  waxing: {
    cover: CDNImage;
    accents: CDNImage[];
  };
  other: {
    cover: CDNImage;
    accents: CDNImage[];
  };
};

export type DefaultServiceImages = {
  cover: CDNImage;
  accents: CDNImage[];
};

export const allServiceImages = { ...images };

export * from './card-image-map';
export * from './image-map';
export * from './images';
export * from './options-image.map';
