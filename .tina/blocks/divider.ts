import { Template } from 'tinacms';

import { fields } from '../fields';
import { mapOptions } from '../utils/chakra';
import { defaults } from './_defaults';

// @TODO: add these to the fields object imported above
export const dividerBlock: Template = {
  label: 'Horizontal Divider',
  name: 'divider',
  ui: {
    defaultItem: defaults.divider,
    previewSrc: '/blocks/preview-divider.webp',
  },
  fields: [
    {
      type: 'string',
      label: 'Orientation',
      name: 'orientation',
      options: ['vertical', 'horizontal'].map(mapOptions),
    },
    {
      type: 'string',
      label: 'borderColor',
      name: 'borderColor',
      options: ['gray.400', 'black'].map(mapOptions),
    },
  ],
};
