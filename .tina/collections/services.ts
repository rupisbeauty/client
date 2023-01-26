import type { SchemaField } from 'tinacms';

export const services: { fields: SchemaField[] } = {
  fields: [
    {
      type: 'string',
      name: 'title',
      isTitle: true,
      required: true,
    },
    {
      type: 'rich-text',
      name: 'body',
      label: 'Body',
      isBody: true,
    },
  ],
};
