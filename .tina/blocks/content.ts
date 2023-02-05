import { Template } from 'tinacms';

import { fields } from '../fields';
import { defaults } from './_defaults';

export const contentBlock: Template = {
  label: 'Simple Text Block',
  name: 'content',
  ui: {
    // defaultItem: defaults.locationCTA,
    // previewSrc: '/blocks/preview-location-cta.webp',
  },
  fields: [
    {
      type: 'string',
      label: 'Text',
      name: 'text',
    },
    ...(fields?.typography as Template['fields']),
  ],
};
