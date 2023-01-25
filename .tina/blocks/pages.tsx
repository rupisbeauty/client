import { Template, wrapFieldsWithMeta } from 'tinacms';

import type { ChakraTheme, Colors } from '@chakra-ui/react';
import { theme } from '@chakra-ui/react';

import { colors } from '../../chakra.ui/theme/foundations/colors';
import { semanticTokens } from '../../chakra.ui/theme/foundations/tokens';
import { slugify } from '../../src/utils/fns';

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
  label: 'Pages',
  name: 'pages',
  ui: {
    // previewSrc: 'path/to/component/preview.png'
    defaultItem: {
      title: 'This is the title of your page',
      description: 'This is the description of your page',
      backgroundColor: '#FFF1E4',
      color: '#4A5568',
      slug: 'Test Page',
      path: '/',
    },
  },
  fields: [
    {
      type: 'string',
      label: 'Page Title (SEO, Search results) 50-70 chars.',
      name: 'title',
      isTitle: true,
      required: true,
      ui: {
        validate: (value) => {
          if (value.length > 70)
            return `-${Number(value.length) - 70} chars remaining / 70`;
        },
      },
    },
    {
      type: 'string',
      label: 'Description (Seo, Search results) 150-160 chars.',
      name: 'description',
      required: true,
      ui: {
        component: 'textarea',
        validate: (value) => {
          if (value.length > 160)
            return `-${Number(value.length) - 160} chars remaining / 160`;
        },
      },
    },
    {
      type: 'string',
      label: 'Page Slug',
      name: 'slug',
      required: true,
      ui: {
        validate: (value) => {
          if (value === 'new-page') {
            return 'Please change the slug to something other than "new-page"';
          }
        },
        format: (value) => slugify(value),
        parse: (value) => slugify(value),
      },
    },
    {
      type: 'string',
      label: 'Page Path',
      name: 'path',
      required: true,
    },
    // {
    //   type: 'string',
    //   label: 'backgroundColor',
    //   name: 'backgroundColor',
    //   list: true,
    //   required: true,
    //   options: colorOptions,
    //   ui: {
    //     component: 'select',
    //   },
    // },
    // {
    //   type: 'string',
    //   label: 'Color',
    //   name: 'color',
    //   list: true,
    //   required: true,
    //   options: colorOptions,
    //   ui: {
    //     component: 'select',
    //   },
    // },
    {
      type: 'string',
      label: 'backgroundColor',
      name: 'backgroundColor',
      ui: {
        component: 'color',
      },
    },
    {
      type: 'string',
      label: 'color',
      name: 'color',
      ui: {
        component: 'color',
      },
    },
  ],
};
