import type { SchemaField } from 'tinacms';

export const tags: { fields: SchemaField[] } = {
  fields: [
    {
      name: 'name',
      label: 'Name',
      type: 'string',
      required: true,
      list: true,
      options: [
        { label: 'Service', value: 'service' },
        { label: 'Brand Assets', value: 'brand' },
        { label: 'Interior Shots', value: 'interior' },
        { label: 'Exterior Shots', value: 'location' },
        { label: 'Accent', value: 'accent' },
        { label: 'Vector', value: 'vector' },
        { label: 'Untagged', value: 'untagged' },
      ],
    },
  ],
};
