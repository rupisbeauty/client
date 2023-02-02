import { Template } from 'tinacms';

import { fields } from '../fields-config';
import { defaults } from './_defaults';

export const serviceMenuBlock: Template = {
  label: 'Service Menu',
  name: 'serviceMenu',
  ui: {
    defaultItem: defaults.serviceMenu,
  },
  fields: [
    {
      type: 'string',
      label: 'Title',
      name: 'title',
      required: true,
      isTitle: true,
    },
    ...(fields.services as Template['fields']),
  ],
};
