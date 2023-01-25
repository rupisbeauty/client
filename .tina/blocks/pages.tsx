import { Template,wrapFieldsWithMeta } from 'tinacms';

import type { ChakraTheme,Colors } from '@chakra-ui/react';
import { theme } from '@chakra-ui/react';

import { colors } from '../../chakra.ui/theme/foundations/colors';
import { semanticTokens } from '../../chakra.ui/theme/foundations/tokens';
import { slugify } from '../../src/utils/fns';
import { heroBlock } from './hero';

const tokenColors =
  (semanticTokens as ChakraTheme['semanticTokens'])?.colors ?? null;

const tokensColorOptions = tokenColors
  ? Object.keys(tokenColors).map((token) => ({
      value: token,
      label: `token:${token}`,
    }))
  : [
      { value: '#FFF1E4', label: 'white' },
      { value: '#4A5568', label: 'black' },
    ];

const brandColorOptions = Object.keys(colors)
  .map((key) =>
    Object.keys(colors[key])
      .map((color) => ({
        value: `${key}.${color}}`,
        label: `color:${key}.${color}`,
      }))
      .flat()
  )
  .flat();

const themeColors = Object.keys(theme.colors)
  .map((key) =>
    Object.keys(theme.colors[key])
      .map((color) => ({
        value: `${key}.${color}}`,
        label: `color:${key}.${color}`,
      }))
      .flat()
  )
  .flat();

const colorOptions = [
  ...new Set([...tokensColorOptions, ...brandColorOptions]),
];

export const pagesTemplate: Template = {
  label: 'Page Temp',
  name: 'page_temp',
  fields: [
    {
      type: 'object',
      list: true,
      name: 'blocks',
      label: 'Blocks',
      ui: {
        // previewSrc: 'path/to/component/preview.png'
        visualSelector: true,
      },
      templates: [heroBlock] as Template[],
    },
  ],
};
