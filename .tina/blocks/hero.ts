import { Template } from "tinacms";

export const heroBlock: Template = {
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
