import { Template } from 'tinacms';

export const coreServicesBlock: Template = {
  label: 'Core Services',
  name: 'coreServices',
  ui: {
    defaultItem: {
      title: 'Core Services',
      // address: '2A Franklin Ave Pearl River, NY 10965',
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
      label: 'Products',
      name: 'categories',
      type: 'object',
      list: true,
      fields: [
        {
          label: 'Product Select',
          name: 'product',
          type: 'reference',
          collections: ['products'],
        },
      ],
    },
    // {
    //   type: 'object',
    //   list: true,
    //   name: 'core-services-list',
    //   label: 'Core Services List',
    //   fields: [
    //     {
    //       type: 'reference',
    //       label: 'Product',
    //       name: 'product',
    //       collections: ['products'],
    //     }
    //   ]
    // }
  ],
};
