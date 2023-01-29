import type { SchemaField } from 'tinacms';

export const categories: { fields: SchemaField[] } = {
  fields: [
    {
      name: 'title',
      label: 'Service Category Title (SEO, Search results) 50-70 chars.',
      type: 'string',
      required: true,
      ui: {
        validate: (value) => {
          if (value === 'Service Title') return 'Must change Service Title';
          if (value?.length && value.length > 70)
            return `-${Number(value.length) - 70} chars remaining / 70`;
        },
      },
      // options: [
      //   { label: 'Eyebrows', value: 'eyebrows' },
      //   { label: 'Hair Removal', value: 'hair-removal' },
      //   { label: 'Skin Care', value: 'skin-care' },
      //   { label: 'Other', value: 'other' },
      //   { label: 'Uncategorized', value: 'uncategorized' },
      // ],
    },
    {
      name: 'slug',
      label: 'Service Slug',
      type: 'string',
      required: true,
      isTitle: true,
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
      // templates: [] as Template[], // @TODO: flesh out services templates
    },
    {
      name: 'categories',
      label: 'Categories',
      type: 'object',
      list: true,
      fields: [
        {
          name: 'category',
          label: 'Category',
          type: 'reference',
          collections: ['categories'],
        },
      ],
      ui: {
        itemProps(item) {
          return {
            label: item.category,
            key: `${item.category}-category`,
          };
        },
      },
    },
    {
      type: 'boolean',
      name: 'showHeader',
      label: 'Show Header?',
    },
    {
      type: 'boolean',
      name: 'showFooter',
      label: 'Show Footer',
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
    // {
    //   type: 'object',
    //   name: 'settings',
    //   label: 'Settings',
    //   fields: [
    //     {
    //       type: 'boolean',
    //       name: 'showHeader',
    //       label: 'Show Header?',
    //     },
    //     {
    //       type: 'boolean',
    //       name: 'showFooter',
    //       label: 'Show Footer',
    //     },
    //     {
    //       type: 'boolean',
    //       name: 'showCta',
    //       label: 'Show Email Signup CTA?',
    //     },
    //     {
    //       type: 'boolean',
    //       name: 'showReviews',
    //       label: 'Show Reviews Footer Title?',
    //     },
    //   ],
    // },
  ],
};
