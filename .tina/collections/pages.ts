import type { SchemaField,Template } from 'tinacms';

import { templates } from '../blocks';
import { fields } from '../fields-config';

export const pages: { fields: SchemaField[] } = {
  fields: [
    {
      type: 'string',
      label: 'Page Title (SEO, Search results) 50-70 chars.',
      name: 'title',
      isTitle: true,
      required: true,
      ui: {
        validate: (value) => {
          if (value?.length && value.length > 70)
            return `-${Number(value.length) - 70} chars remaining / 70`;
        },
      },
    },
    {
      type: 'string',
      label: 'Description (Seo, Search results) 150-160 chars.',
      name: 'description',
      required: true,
      ui: {
        component: 'textarea',
        validate: (value) => {
          if (value?.length && value.length > 160)
            return `-${Number(value.length) - 160} chars remaining / 160`;
        },
      },
    },
    {
      type: 'rich-text',
      name: 'body',
      label: 'body',
      isBody: true,
      ui: {},
      templates: templates.page,
    },
    ...fields.seo,
    ...fields.settings,
    ...fields.colors,
  ],
};
