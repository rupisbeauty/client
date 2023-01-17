import servicesList from './arg.json';

export const allServices = {
  all: {
    services: [
      ...servicesList.eyebrows.services,
      ...servicesList.facials.services,
      ...servicesList.waxing.services,
      ...servicesList.other.services,
    ],
  },
  ...servicesList,
};
