import { Template } from 'tinacms';

import { fields } from '../fields';
import { defaults } from './_defaults';

export const coreServicesBlock: Template = {
  label: 'Core Services',
  name: 'coreServices',
  ui: {
    defaultItem: defaults.coreServices,
    previewSrc: '/blocks/preview-core-services.jpg',
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
      type: 'object',
      name: 'serviceCategories',
      label: 'Service Category',
      list: true,
      ui: {
        itemProps: (item) => ({
          id: item.category,
          key: item.category,
          label: item.category,
        }),
      },
      fields: [
        {
          type: 'string',
          name: 'category',
          label: 'Category TItle',
        },
        ...(fields?.image as Template['fields']),
        {
          type: 'string',
          name: 'link',
          label: 'Relative Link',
        },
      ],
    },
  ],
};
