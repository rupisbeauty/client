import { Template } from 'tinacms';

import { defaults } from './_defaults';

export const logoBlock: Template = {
  label: 'Rupi Full Logo',
  name: 'logo',
  ui: {
    defaultItem: defaults.logo,
    previewSrc: '/blocks/preview-full-logo.webp',
  },
  fields: [
    {
      type: 'string',
      label: 'Title',
      name: 'title',
    },
  ],
};
