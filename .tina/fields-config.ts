import { theme } from '@chakra-ui/react';
import { Template } from 'tinacms';

import { mapColors, mapOptions, mapSemanticTokens } from './utils/chakra';

export const fieldConfig: Record<string, Template['fields']> = {
  pageTitle: [
    // @TODO: this might be able to be remove (check and remove)
    {
      type: 'string',
      label: 'Page Title (SEO, Search results) 50-70 chars.',
      name: 'title',
      isTitle: true,
      required: true,
      ui: {
        validate: (value) => {
          if (value?.length && value.length > 70)
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
          if (value?.length && value.length > 160)
            return `-${Number(value.length) - 160} chars remaining / 160`;
        },
      },
    },
  ],
  page: [
    {
      type: 'string',
      label: 'Page Title (SEO, Search results) 50-70 chars.',
      name: 'title',
      required: true,
      ui: {
        validate: (value) => {
          if (value?.length && value.length > 70)
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
          if (value?.length && value.length > 160)
            return `-${Number(value.length) - 160} chars remaining / 160`;
        },
      },
    },
  ],
  services: [
    {
      type: 'object',
      name: 'options',
      label: 'Options',
      list: true,
      ui: {
        itemProps: (item) => ({
          id: item.option,
          key: item.option,
          label: item.option,
        }),
      },
      fields: [
        {
          type: 'reference',
          name: 'option',
          label: 'Select A Service Option',
          collections: ['options'],
        },
      ],
    },
    {
      type: 'object',
      name: 'relatedServices',
      label: 'Related Services',
      list: true,
      ui: {
        itemProps: (item) => ({
          id: item.service,
          key: item.service,
          label: item.service,
        }),
      },
      fields: [
        {
          type: 'reference',
          name: 'service',
          label: 'Select A Child Service',
          collections: ['categories'],
        },
      ],
    },
  ],
};

fieldConfig.size = [
  {
    type: 'object',
    name: 'size',
    label: 'Image Size',
    fields: [
      {
        type: 'number',
        label: 'Width',
        name: 'width',
      },
      {
        type: 'number',
        label: 'Height',
        name: 'height',
      },
    ],
  },
];

fieldConfig.image = [
  {
    type: 'object',
    name: 'image',
    label: 'Add or Update Image',
    ui: {
      // W I P @TODO: see if this label can be more readable
      itemProps: (item) => {
        console.log('🚀 | file: fields-config.ts:131 | item', item);
        return {
          id: item.src,
          key: item.src,
          label: item.alt,
        };
      },
    },
    fields: [
      {
        type: 'image',
        label: 'Image Source',
        name: 'src',
      },
      {
        type: 'string',
        label: 'Image Alt Text',
        name: 'alt',
      },
      {
        type: 'string',
        label: 'Image Credits',
        name: 'attr',
      },
      ...fieldConfig.size,
    ],
  },
];

fieldConfig.typography = [
  {
    type: 'object',
    name: 'typography',
    label: 'Font Styles',
    fields: [
      {
        type: 'string',
        label: 'Font Family',
        name: 'fontFamily',
        options: Object.keys(theme.fonts).map(mapOptions),
      },
      {
        type: 'string',
        label: 'Font Size',
        name: 'fontSize',
        options: Object.keys(theme.fontSizes).map(mapOptions),
      },
      {
        type: 'string',
        label: 'Font Weight',
        name: 'fontWeight',
        options: Object.keys(theme.fontWeights).map(mapOptions),
      },
      {
        type: 'string',
        label: 'Line Height',
        name: 'lineHeight',
        options: Object.keys(theme.lineHeights).map(mapOptions),
      },
      {
        type: 'string',
        label: 'Letter Spacing',
        name: 'letterSpacing',
        options: Object.keys(theme.letterSpacings).map(mapOptions),
      },
      {
        type: 'string',
        label: 'Text Align',
        name: 'textAlign',
        options: [
          { key: 'left', value: 'left', label: 'left' },
          { key: 'center', value: 'center', label: 'center' },
          { key: 'right', value: 'right', label: 'right' },
        ],
      },
      {
        type: 'string',
        label: 'Text Transform',
        name: 'textTransform',
        options: [
          { key: 'none', value: 'none', label: 'none' },
          { key: 'uppercase', value: 'uppercase', label: 'uppercase' },
          { key: 'lowercase', value: 'lowercase', label: 'lowercase' },
          { key: 'capitalize', value: 'capitalize', label: 'capitalize' },
        ],
      },
      {
        type: 'string',
        label: 'Text Decoration',
        name: 'textDecoration',
        options: [
          { key: 'none', value: 'none', label: 'none' },
          { key: 'underline', value: 'underline', label: 'underline' },
          {
            key: 'line-through',
            value: 'line-through',
            label: 'line-through',
          },
          { key: 'overline', value: 'overline', label: 'overline' },
        ],
      },
      {
        type: 'string',
        label: 'Text Overflow',
        name: 'textOverflow',
        options: [
          { key: 'clip', value: 'clip', label: 'clip' },
          { key: 'ellipsis', value: 'ellipsis', label: 'ellipsis' },
        ],
      },
    ],
  },
];

fieldConfig.decorative = [
  {
    type: 'object',
    name: 'decorative',
    label: 'Decorative Styles',
    fields: [
      {
        type: 'string',
        label: 'Border',
        name: 'border',
        options: Object.keys(theme.borders).map(mapOptions),
      },
      {
        type: 'string',
        label: 'Border Color',
        name: 'borderColor',
        options: mapSemanticTokens.concat(mapColors),
      },
      {
        type: 'string',
        label: 'Rounded',
        name: 'rounded',
        options: Object.keys(theme.radii).map(mapOptions),
      },
      {
        type: 'string',
        label: 'Shadow',
        name: 'shadow',
        options: Object.keys(theme.shadows).map(mapOptions),
      },
    ],
  },
];

fieldConfig.spacing = [
  {
    type: 'object',
    name: 'spacing',
    label: 'Spacing Settings',
    fields: [
      {
        type: 'string',
        label: 'Horizontal Padding',
        name: 'px',
        options: Object.keys(theme.space).map(mapOptions),
      },
      {
        type: 'string',
        label: 'Vertical Padding',
        name: 'py',
        options: Object.keys(theme.space).map(mapOptions),
      },
      {
        type: 'string',
        label: 'Horizontal Margin',
        name: 'mx',
        options: Object.keys(theme.space).map(mapOptions),
      },
      {
        type: 'string',
        label: 'Vertical Margin',
        name: 'my',
        options: Object.keys(theme.space).map(mapOptions),
      },
    ],
  },
];

fieldConfig.container = [
  {
    type: 'boolean',
    name: 'centerContent',
    label: 'Center Content?',
  },
  {
    type: 'boolean',
    name: 'contained',
    label: 'Use a Container?',
  },
  {
    type: 'string',
    label: 'Width',
    name: 'width',
    options: Object.keys(theme.sizes).map(mapOptions),
  },
  {
    type: 'string',
    label: 'Max Width',
    name: 'maxW',
    options: Object.keys(theme.sizes.container).map(mapOptions),
  },
  {
    type: 'string',
    label:
      'Background Color: https://chakra-ui.com/docs/styled-system/theme#colors',
    name: 'backgroundColor',
    options: mapSemanticTokens.concat(mapColors),
  },
  {
    type: 'string',
    label: 'Text Color: https://chakra-ui.com/docs/styled-system/theme#colors',
    name: 'color',
    options: mapSemanticTokens.concat(mapColors),
  },
];

fieldConfig.settings = [
  {
    type: 'object',
    name: 'settings',
    label: 'Settings',
    fields: [
      {
        type: 'boolean',
        name: 'showHeader',
        label: 'Show Header?',
      },
      {
        type: 'boolean',
        name: 'showFooter',
        label: 'Show Footer',
      },
      {
        type: 'boolean',
        name: 'showCta',
        label: 'Show Email Signup CTA?',
      },
      {
        type: 'boolean',
        name: 'showReviews',
        label: 'Show Reviews Footer Title?',
      },
    ],
  },
];

fieldConfig.colors = [
  {
    type: 'object',
    name: 'colors',
    label: 'Color Settings',
    fields: [
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
  },
];

fieldConfig.seo = [
  {
    type: 'object',
    name: 'seo',
    label: 'SEO Settings',
    fields: [
      {
        type: 'string',
        label: 'SEO Title (SEO, Search results) 50-70 chars.',
        name: 'title',
        ui: {
          validate: (value) => {
            if (value?.length && value.length > 70)
              return `-${Number(value.length) - 70} chars remaining / 70`;
          },
        },
      },
      {
        type: 'string',
        label: 'SEO Description (Seo, Search results) 150-160 chars.',
        name: 'description',
        ui: {
          component: 'textarea',
          validate: (value) => {
            if (value?.length && value.length > 160)
              return `-${Number(value.length) - 160} chars remaining / 160`;
          },
        },
      },
      {
        name: 'slug',
        label: 'SEO Slug',
        type: 'string',
      },
      ...fieldConfig?.image,
    ],
  },
];

export const fields = fieldConfig;
