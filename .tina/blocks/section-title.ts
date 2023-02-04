import { Template } from 'tinacms';

import { defaults } from './_defaults';

export const sectionTitleBlock: Template = {
  label: 'Section Title',
  name: 'sectionTitle',
  ui: {
    defaultItem: defaults.sectionTitle,
    previewSrc: '/blocks/preview-section-title.webp',
  },
  fields: [
    {
      type: 'string',
      label: 'Section Title',
      name: 'title',
    },
  ],
};
