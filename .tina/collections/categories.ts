import type { SchemaField } from 'tinacms';

export const categories: { fields: SchemaField[] } = {
  fields: [
    {
      name: 'name',
      label: 'Name',
      type: 'string',
      required: true,
      list: true,
      options: [
        { label: 'Eyebrows', value: 'eyebrows' },
        { label: 'Hair Removal', value: 'hair-removal' },
        { label: 'Skin Care', value: 'skin-care' },
        { label: 'Other', value: 'other' },
        { label: 'Uncategorized', value: 'uncategorized' },
      ],
    },
  ],
};
