import { Template } from 'tinacms';

import { defaults } from './_defaults';

export const locationCTABlock: Template = {
  label: 'Location CTA',
  name: 'locationCTA',
  ui: {
    defaultItem: defaults.locationCTA,
  },
  fields: [
    {
      type: 'string',
      label: 'CTA Message',
      name: 'cta',
    },
  ],
};
