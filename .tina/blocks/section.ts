import type { Template } from 'tinacms';

import { fields } from '../fields';

import { boxBlock } from './box';
import { dividerBlock } from './divider';
import { logoBlock } from './logo';
import { sectionCoverBlock } from './section-cover';
import { sectionTitleBlock } from './section-title';
import { serviceMenuBlock } from './service-menu';

import { templates } from './index';
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
      isTitle: true,
      required: true,
    },
    {
      type: 'rich-text',
      name: 'body',
      label: 'Body',
      isBody: true,
      // templates: templates.section, // @FIXME: "cannot access templates before initialization"
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
