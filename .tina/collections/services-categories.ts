import type { SchemaField } from 'tinacms';
import { fields } from '../fields-config';

export const categories: { fields: SchemaField[] } = {
  fields: [
    ...fields.page,
    {
      name: 'slug',
      label: 'Service Slug',
      type: 'string',
      required: true,
      isTitle: true,
    },
    {
      type: 'rich-text',
      name: 'body',
      label: 'body',
      isBody: true,
      // templates: [] as Template[], // @TODO: flesh out services templates
    },
    ...fields.services,
    ...fields.settings,
    ...fields.seo,
    ...fields.colors,
  ],
};
