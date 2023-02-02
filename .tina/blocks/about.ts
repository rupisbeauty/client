import { Template } from 'tinacms';

import { fields } from '../fields';
import { defaults } from './_defaults';

export const aboutBlock: Template = {
  label: 'About Section',
  name: 'about',
  ui: {
    defaultItem: defaults.about,
  },
  fields: [
    {
      type: 'string',
      label: 'Title',
      name: 'title',
    },
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
      type: 'string',
      label: 'Caption',
      name: 'caption',
    },
    {
      type: 'string',
      label: 'Description',
      name: 'description',
      ui: {
        component: 'textarea',
      },
    },
    ...(fields?.image as Template['fields']),
    {
      type: 'boolean',
      label: 'Show Licenses?',
      name: 'showLicenses',
    },
  ],
};
