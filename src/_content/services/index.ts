import servicesList from './arg.json';

/**
 * NOTE: As a general rule on the client-side use the allServices object here.
 *
 * the json file is used for the static generation of the pages via nextjs helpers
 * @SEE:
 * '../../pages/services/[slug].tsx'
 * '../../pages/services/[...slug].tsx'
 */

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
