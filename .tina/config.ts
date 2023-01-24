import { defineConfig, Template } from 'tinacms';

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.HEAD ||
  process.env.NEXT_PUBLIC_TINA_BRANCH || // @TODO: Must add this variable to vercel
  process.env.VERCEL_GIT_COMMIT_REF ||
  'main';

const heroBlock: Template = {
  label: 'Hero',
  name: 'hero',
  ui: {
    // previewSrc: 'path/to/component/preview.png'
    defaultItem: {
      heading: 'Insert Your Most Impactful Statement Here',
      subheading: 'Frame your statement',
      image: {
        src: 'https://cdn.jsdelivr.net/gh/rupistudio/assets@main/images/people/hero-composite.png',
        alt: 'Your neighborhood beauty and skin care experts. Trained and certified estheticians | ✨ Rupi Beauty Studio ✨',
        width: 1920,
        height: 1080,
      },
    },
  },
  fields: [
    {
      type: 'string',
      label: 'Heading',
      name: 'heading',
    },
    {
      type: 'string',
      label: 'Subheading',
      name: 'subheading',
    },
    {
      type: 'object',
      label: 'Image',
      name: 'image',
      fields: [
        {
          type: 'string',
          label: 'Image URL',
          name: 'src',
        },
        {
          type: 'string',
          label: 'Alt Text',
          name: 'alt',
        },
        {
          type: 'number',
          label: 'Width',
          name: 'width',
        },
        {
          type: 'number',
          label: 'Height',
          name: 'height',
        },
      ],
    },
  ],
};

export default defineConfig({
  branch,
  clientId: String(process.env.NEXT_PUBLIC_TINA_CLIENT_ID) ?? undefined, // Get this from tina.io
  token: String(process.env.NEXT_PUBLIC_TINA_READ_ONLY_TOKEN) ?? undefined, // Get this from tina.io
  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
  },
  media: {
    tina: {
      mediaRoot: 'uploads',
      publicFolder: 'public',
    },
  },
  schema: {
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
              return `/`;
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
  },
});
