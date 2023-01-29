import { Template } from 'tinacms';

export const coreServicesBlock: Template = {
  label: 'Core Services',
  name: 'coreServices',
  ui: {
    defaultItem: {
      title: 'Core Services',
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
      type: 'object',
      name: 'options',
      label: 'Options',
      list: true,
      fields: [
        {
          type: 'reference',
          name: 'option',
          label: 'Select An Option',
          collections: ['categories'],
        },
      ],
    },
  ],
};
