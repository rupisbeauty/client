import { defineSchema, type Template } from 'tinacms';
import { heroBlock } from './blocks/hero';

export const schema = defineSchema({
  collections: [
    {
      name: 'page_sections',
      label: 'Pages Sections',
      path: 'content/pages',
      format: 'json',
      fields: [
        {
          type: 'string',
          label: 'Title',
          name: 'title',
          isTitle: true,
          required: true,
        },
        {
          type: 'object',
          label: 'SEO',
          name: 'seo',
          fields: [
            {
              type: 'string',
              label: 'Title',
              name: 'title',
              required: true,
            },
            {
              type: 'string',
              label: 'Description',
              name: 'description',
              required: true,
            },
          ],
        },
        {
          type: 'object',
          list: true,
          name: 'blocks',
          label: 'Blocks',
          ui: {
            visualSelector: true,
          },
          templates: [heroBlock] as Template[],
        },
      ],
      ui: {
        global: true,
        router: ({ document }) => {
          if (document._sys.filename === 'home') {
            return `/sandbox/tina`;
          }
          return undefined;
        },
      },
    },

    {
      name: 'post',
      label: 'Posts',
      path: 'content/posts',
      format: 'md',
      fields: [
        {
          type: 'string',
          name: 'title',
          label: 'Title',
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
      ui: {
        // This is an DEMO router. You can remove this to fit your site
        router: ({ document }) => `/demo/blog/${document._sys.filename}`,
      },
    },
  ],
});
