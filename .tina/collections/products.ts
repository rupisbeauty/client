import type { SchemaField } from 'tinacms';

export const products: { fields: SchemaField[] } = {
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'string',
      isTitle: true,
      required: true,
    },
    {
      name: 'price',
      label: 'Price',
      type: 'number',
      required: true,
    },
    {
      name: 'body',
      label: 'Body',
      type: 'rich-text',
      isBody: true,
      templates: [],
    },
    // @TODO: ADD REFERENCE ONCE MEDIA IS UPDATED
    {
      name: 'image',
      label: 'Image',
      type: 'reference',
      collections: ['media'],
    },
    {
      name: 'gallery',
      label: 'Gallery',
      type: 'object',
      list: true,
      fields: [
        {
          name: 'image',
          label: 'Image',
          type: 'reference',
          collections: ['media'],
        },
      ],
      ui: {
        itemProps(item) {
          return {
            label: item.image,
            key: `${item.image}-image`,
          };
        },
      },
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
  ],
};
