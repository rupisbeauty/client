import type { ImageProps } from '@chakra-ui/react';
import serviceDescriptions from './services/descriptions.json';
import servicesList from './services/list.json';

const services = { servicesList, serviceDescriptions };
export default services;

export type ServiceDetails = {
  title: string;
  description: string[];
  category: string;
  slug: string;
  points?: string[];
};

export type Service = {
  services: ServiceDetails[];
};

// export type Services = Record<string, Service>;
export type Services = {
  all: Service;
  eyebrows: Service;
  facials: Service;
  waxing: Service;
  other: Service;
};

export type ServiceCategories = Omit<Services, 'all'>;

export type ServiceContent = Omit<ServiceDetails, 'points'> & {
  info?: string[];
};

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

export * from './services/card-image-map';
export * from './services/category-color-scheme';
export * from './services/image-map';
export * from './services/images';
