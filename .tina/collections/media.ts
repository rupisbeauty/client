import type { SchemaField } from 'tinacms';

export const media: { fields: SchemaField[] } = {
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'string',
      isTitle: true,
      required: true,
      ui: {
        validate(item) {
          if (item === 'file-name') {
            return 'Please change the Title.';
          }
        },
      },
    },
    {
      name: 'src',
      label: 'Image Url',
      type: 'string',
      required: true,
    },
    {
      name: 'alt',
      label: 'Image Alt Text',
      type: 'string',
      required: true,
    },
    {
      name: 'width',
      label: 'Image Width',
      type: 'number',
      required: true,
    },
    {
      name: 'height',
      label: 'Image Height',
      type: 'number',
      required: true,
    },
    {
      name: 'attr',
      label: 'Image Attribution',
      type: 'string',
    },
    {
      name: 'caption',
      label: 'Image Caption',
      type: 'string',
    },
    {
      name: 'preview',
      label: 'Preview',
      type: 'rich-text',
      isBody: true,
    },
    {
      name: 'imageTags',
      label: 'Image Tags',
      type: 'object',
      list: true,
      fields: [
        {
          name: 'tags',
          label: 'Tags',
          type: 'reference',
          collections: ['tags'],
        },
      ],
      ui: {
        itemProps(item) {
          return {
            label: item.tags,
            key: `${item.tags}-tag`,
          };
        },
      },
    },
    {
      name: 'imageCategories',
      label: 'Image Categories',
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
