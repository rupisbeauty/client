import type { Template } from 'tinacms';

import { fields } from '../fields';

import {
  boxBlock,
  dividerBlock,
  logoBlock,
  sectionCoverBlock,
  sectionTitleBlock,
  serviceMenuBlock,
} from '.';


import { defaults } from './_defaults';

export const sectionBlock: Template = {
  label: 'Section',
  name: 'section',
  ui: {
    defaultItem: defaults.section,
    itemProps: (item) => ({
      key: item.title,
      label: item.title,
    }),
  },
  fields: [
    {
      type: 'string',
      name: 'title',
      label: 'Title',
    },
    {
      type: 'rich-text',
      name: 'body',
      label: 'Body',
      isBody: true,
      templates: [
        boxBlock,
        logoBlock,
        dividerBlock,
        sectionTitleBlock,
        sectionCoverBlock,
        serviceMenuBlock,
      ],
    },
    {
      type: 'object',
      name: 'settings',
      label: 'Settings',
      fields: [
        ...(fields.container as Template['fields']),
        ...(fields?.spacing as Template['fields']),
        ...(fields?.decorative as Template['fields']),
        ...(fields?.typography as Template['fields']),
      ],
    },
  ],
};
