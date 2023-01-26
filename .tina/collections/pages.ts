import type { SchemaField, Template } from 'tinacms';

import { slugify } from '../../src/utils/fns';
import { heroBlock, pagesTemplate } from '../blocks';

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
          if (value.length > 70)
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
          if (value.length > 160)
            return `-${Number(value.length) - 160} chars remaining / 160`;
        },
      },
    },
    {
      type: 'string',
      label: 'backgroundColor',
      name: 'backgroundColor',
      //   list: true,
      //   required: true,
      //   options: colorOptions,
      ui: {
        component: 'color',
        // component: 'select',
      },
    },
    {
      type: 'string',
      label: 'color',
      name: 'color',
      //   list: true,
      //   required: true,
      //   options: colorOptions,
      ui: {
        component: 'color',
        // component: 'select',
      },
    },
    {
      type: 'boolean',
      name: 'showCta',
      label: 'Show Email Signup CTA?',
    },
    {
      type: 'boolean',
      name: 'showReviews',
      label: 'Show Reviews Footer Title?',
    },
    {
      type: 'object',
      list: true,
      name: 'blocks',
      label: 'Blocks',
      ui: {
        visualSelector: true,
        // itemProps: (item) => ({ label: item?.name }),
      },
      templates: [heroBlock] as Template[],
    },
  ],
};
