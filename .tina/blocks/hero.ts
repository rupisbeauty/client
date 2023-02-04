import { Template } from 'tinacms';

import { fields } from '../fields';
import { defaults } from './_defaults';

export const heroBlock: Template = {
  label: 'Hero',
  name: 'hero',
  ui: {
    defaultItem: defaults.hero,
    // @TODO: add all previews to blocks
    previewSrc: `/blocks/preview-hero-composite.webp`,
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
    ...(fields?.image as Template['fields']),
    {
      type: 'string',
      label: 'Phone Call-Out-Action',
      name: 'cta',
    },
    {
      type: 'string',
      label: 'Phone Number "(000) 000-0000"',
      name: 'phone',
    },
  ],
};
