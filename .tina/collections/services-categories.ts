import type { SchemaField } from 'tinacms';
import { templates } from '../blocks';
import { fields } from '../fields-config';

export const categories: { fields: SchemaField[] } = {
  fields: [
    ...fields?.page,
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
      templates: templates.section,
    },
    ...fields?.image,
    ...fields?.services,
    ...fields?.settings,
    ...fields?.seo,
    ...fields?.colors,
  ],
};