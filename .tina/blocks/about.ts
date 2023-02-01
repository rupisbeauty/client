import { Template } from 'tinacms';

import defaults from '../collections/_defaults.json';
import { fields } from '../fields-config';

export const aboutBlock: Template = {
  label: 'About Section',
  name: 'about',
  ui: {
    defaultItem: defaults.templates.about,
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
