import { Template } from 'tinacms';

import defaults from '../collections/_defaults.json';
import { fields } from '../fields-config';

export const dividerBlock: Template = {
  label: 'About Section',
  name: 'about',
  ui: {
    defaultItem: defaults.templates.about,
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
