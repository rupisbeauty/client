import { Template } from 'tinacms';

import defaults from '../collections/_defaults.json';
import { fields } from '../fields-config';

export const dividerBlock: Template = {
  label: 'Horizontal Divider',
  name: 'hr',
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
  ],
};
