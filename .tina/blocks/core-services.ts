import { Template } from 'tinacms';
import defaults from '../collections/_defaults.json';
import { fields } from '../fields-config';
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
      name: 'serviceCategories',
      label: 'Service Category',
      list: true,
      ui: {
        defaultItem: {
          category: 'Add A Service Category',
          image: defaults.image,
          link: 'relative-link',
        },
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
        ...fields?.image,
        {
          type: 'string',
          name: 'link',
          label: 'Relative Link',
        },
      ],
    },
  ],
};
