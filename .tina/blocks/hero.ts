import { Template } from 'tinacms';
import defaults from '../collections/_defaults.json';
import { fields } from '../fields-config';

export const heroBlock: Template = {
  label: 'Hero',
  name: 'hero',
  ui: {
    // previewSrc: 'path/to/component/preview.png'
    defaultItem: defaults.templates.hero,
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
    ...fields.image,
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
