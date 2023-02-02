import { Template } from 'tinacms';

import { fields } from '../fields-config';
import { mapOptions } from '../utils/chakra';
import { defaults } from './_defaults';

export const dividerBlock: Template = {
  label: 'Horizontal Divider',
  name: 'divider',
  ui: {
    defaultItem: defaults.divider,
  },
  fields: [
    {
      type: 'string',
      label: 'Title',
      name: 'title',
      required: true,
      isTitle: true,
    },
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
      options: ['gray.600', 'black'].map(mapOptions),
    },
  ],
};
