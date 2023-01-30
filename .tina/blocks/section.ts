import type { Template } from 'tinacms';

import { chakraStyles } from '../../chakra.ui/theme/foundations/layerStyles';
import { fields } from '../fields-config';
import { sectionStyles } from '../utils/chakra';
import { sectionCoverBlock } from './section-cover';
import { sectionTitleBlock } from './section-title';

const full = { key: 'full', value: 'full' };

export const sectionBlock: Template = {
  label: 'Section',
  name: 'section',
  ui: {
    defaultItem: {
      contained: false,
      settings: sectionStyles(chakraStyles?.container?.default),
    },
  },
  fields: [
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
      templates: [sectionTitleBlock, sectionCoverBlock],
    },
    {
      type: 'object',
      name: 'settings',
      label: 'Settings',
      fields: [...fields.spacing, ...fields.decorative, ...fields.typography],
    },
  ],
};
