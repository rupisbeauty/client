import { theme } from '@chakra-ui/react';

import type { Template } from 'tinacms';
import { SECTION_DEFAULT_STYLES } from '../../src/components/blocks/section/experimental';
import { fields } from '../fields-config';
import { mapColors, mapOptions, mapSemanticTokens } from '../utils/chakra';
import { sectionTitleBlock } from './section-title';
import { serviceCoverBlock } from './service-cover';

const full = { key: 'full', value: 'full' };

const {
  px,
  py,
  mx,
  my,
  border,
  borderColor,
  rounded,
  shadow,
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  letterSpacing,
  textAlign,
  textDecoration,
  textOverflow,
  textTransform,
  ...styles
} = SECTION_DEFAULT_STYLES;

const defaultItem = {
  settings: {
    ...styles,
    spacing: { px, py, mx, my },
    decorative: { border, borderColor, rounded, shadow },
    typography: {
      fontFamily,
      fontSize,
      fontWeight,
      lineHeight,
      letterSpacing,
      textAlign,
      textDecoration,
      textOverflow,
      textTransform,
    },
  },
};

export const sectionBlock: Template = {
  label: 'Section',
  name: 'section',
  ui: { defaultItem },
  fields: [
    {
      type: 'rich-text',
      name: 'body',
      label: 'Body',
      isBody: true,
      templates: [sectionTitleBlock, serviceCoverBlock],
    },
    {
      type: 'object',
      name: 'settings',
      label: 'Settings',
      fields: [...fields.spacing, ...fields.decorative, ...fields.typography],
    },
  ],
};
