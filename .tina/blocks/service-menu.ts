import { Template } from 'tinacms';

import defaults from '../collections/_defaults.json';
import { fields } from '../fields-config';

export const serviceMenuBlock: Template = {
  label: 'Service Menu',
  name: 'serviceMenu',
  ui: {
    defaultItem: {
      title: 'Service Menu',
    },
  },
  fields: [
    {
      type: 'string',
      label: 'Title',
      name: 'title',
      // required: true,
      // isTitle: true,
    },
    ...(fields.services as Template['fields']),
  ],
};
