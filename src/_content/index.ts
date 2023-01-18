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

export type ServiceOptionKeys = keyof ServiceOptions;
export type ServiceOptions = Record<
  keyof ServiceCategories,
  {
    options: string[];
    addons?: Record<string, { options: string[]; packages?: string[] }>;
  }
>;

export * from './services/category-color-scheme';
export * from './services/images';
