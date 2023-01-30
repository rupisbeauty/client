import type { Template } from 'tinacms';

import { chakraStyles } from '../../chakra.ui/theme/foundations/layerStyles';
import { fields } from '../fields-config';
import { sectionStyles } from '../utils/chakra';
import { sectionCoverBlock } from './section-cover';
import { sectionTitleBlock } from './section-title';
import { serviceMenuBlock } from './service-menu';

const full = { key: 'full', value: 'full' };

export const sectionBlock: Template = {
  label: 'Section',
  name: 'section',
  ui: {
    defaultItem: {
      contained: false,
      settings: sectionStyles(chakraStyles?.container?.default),
    },
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
      type: 'boolean',
      name: 'contained',
      label: 'Use a Container?',
    },
    {
      type: 'rich-text',
      name: 'body',
      label: 'Body',
      isBody: true,
      templates: [sectionTitleBlock, serviceMenuBlock, sectionCoverBlock],
    },
    {
      type: 'object',
      name: 'settings',
      label: 'Settings',
      fields: [
        ...fields?.spacing,
        ...fields?.decorative,
        ...fields?.typography,
      ],
    },
  ],
};
