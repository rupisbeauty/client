import serviceDescriptions from './services/descriptions.json';
import servicesList from './services/list.json';

export type ServicesList = {
  title: string;
  options: string[];
};

export type ServiceDescriptions = Record<
  string,
  {
    title: string;
    description: string[];
    other?: string[];
    points?: string[];
  }
>;

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
