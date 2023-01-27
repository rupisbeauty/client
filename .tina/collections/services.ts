import type { SchemaField } from 'tinacms';
import { slugify } from '../../src/utils/fns';

export const services: { fields: SchemaField[] } = {
  fields: [
    {
      name: 'title',
      label: 'Service Title (SEO, Search results) 50-70 chars.',
      type: 'string',
      required: true,
      ui: {
        validate: (value) => {
          if (value === 'Service Title') return 'Must change Service Title';
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
      // @TODO: add advanced session pricing via template block
      name: 'price',
      label: 'Price',
      type: 'number',
    },
    {
      name: 'duration',
      label: 'Duration',
      type: 'number',
    },
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
    // {
    //   // 7bj31Y9RiJCRrrkMFHH3cg  @TODO: Replace with reference to tina media
    //   name: 'image',
    //   label: 'Image',
    //   type: 'reference',
    //   collections: ['media'],
    // },
    // {
    //   // 7bj31Y9RiJCRrrkMFHH3cg  @TODO: Replace with template of tina media
    //   name: 'gallery',
    //   label: 'Gallery',
    //   type: 'object',
    //   list: true,
    //   fields: [
    //     {
    //       name: 'image',
    //       label: 'Image',
    //       type: 'reference',
    //       collections: ['media'],
    //     },
    //   ],
    //   ui: {
    //     itemProps(item) {
    //       return {
    //         label: item.image,
    //         key: `${item.image}-image`,
    //       };
    //     },
    //   },
    // },
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
  ],
};
