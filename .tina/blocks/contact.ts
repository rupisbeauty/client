import { Template } from 'tinacms';

import { defaults } from './_defaults';

export const contactBlock: Template = {
  label: 'Contact Information',
  name: 'contact',
  ui: { defaultItem: defaults.contact, previewSrc: '/blocks/preview-contact.jpg' },
  fields: [
    {
      type: 'string',
      label: 'Street Address',
      name: 'address',
    },
    {
      type: 'string',
      label: 'City, State, Zip',
      name: 'locality',
    },
    {
      type: 'string',
      label: 'Phone Number',
      name: 'phoneNumber',
    },
  ],
};
