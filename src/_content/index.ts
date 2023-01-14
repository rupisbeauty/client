import serviceDescriptions from './services/descriptions.json';
import servicesList from './services/list.json';

export type ServicesList = {
  title: string;
  options: string[];
  other?: string[];
};

export type Description = {
  title: string;
  description: string[];
  points?: string[];
  other?: string[];
};

export type ServiceDescriptions = Record<string, Description[]>;

export type Image = {
  title: string;
  filename: string;
  width: number;
  height: number;
  alt: string;
  attr: string;
};

const services = { servicesList, serviceDescriptions };
export default services;

export type ServiceDetails = {
  title: string;
  description: string[];
  points?: string[];
};

export type Service = {
  services: ServiceDetails[];
  options: string[];
};

// export type Services = Record<string, Service>;
export type Services = {
  eyebrows: Service;
  facials: Service;
  waxing: Service;
  other: Service;
};
