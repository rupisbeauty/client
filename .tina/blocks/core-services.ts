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
      list: true,
      name: 'coreServices',
      label: 'Core Services',
      fields: [
        {
          type: 'reference',
          label: 'Service',
          name: 'service',
          collections: ['services'],
        },
      ],
      ui: {
        itemProps(item) {
          return { label: item.coreServices };
        },
      },
    },
  ],
};
