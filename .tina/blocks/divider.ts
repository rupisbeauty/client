import { Template } from 'tinacms';

import defaults from '../collections/_defaults.json';
import { fields } from '../fields-config';
import { mapOptions } from '../utils/chakra';

export const dividerBlock: Template = {
  label: 'Horizontal Divider',
  name: 'divider',
  ui: {
    defaultItem: {
      title: 'Give this component a default title',
    },
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
