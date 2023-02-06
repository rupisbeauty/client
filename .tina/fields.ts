import { theme } from '@chakra-ui/react';
import { Template } from 'tinacms';

import {
  mapColors,
  mapOptions,
  mapSemanticTokens,
  objectFit,
  objectPosition,
  scale,
  translate,
} from './utils';

import { paths } from '../chakra.ui/icons/paths';
import { customTextStyles } from '../chakra.ui/theme/foundations/textStyles';

export const parseToString = (val?: string) => val && val.toString();

/* -------------------------------------------------------------------------- */
/*                              Options Mappings                              */
/* -------------------------------------------------------------------------- */
// U96mLYCh @NOTE: Tina Settings Definitions
const full = [{ key: 'auto', value: 'auto', label: 'auto' }];
export const options = {
  colors: mapSemanticTokens.concat(mapColors),
  shadows: Object.keys(theme.shadows).map(mapOptions),
  space: full.concat(
    [{ key: '0', value: '0', label: '0' }],
    Object.keys(theme.space).map(mapOptions)
  ),
  sizes: Object.keys(theme.sizes).map(mapOptions),
  radii: Object.keys(theme.radii).map(mapOptions),
  icons: Object.keys(paths).map(mapOptions),
  container: {
    sizes: Object.keys(theme.sizes.container).map(mapOptions),
    flex: {
      direction: ['row', 'column', 'row-reverse', 'column-reverse'].map(
        mapOptions
      ),
      wrap: ['nowrap', 'wrap', 'wrap-reverse'].map(mapOptions),
      justify: [
        'flex-start',
        'flex-end',
        'center',
        'space-between',
        'space-around',
        'space-evenly',
      ].map(mapOptions),
      align: ['stretch', 'flex-start', 'flex-end', 'center', 'baseline'].map(
        mapOptions
      ),
    },
    box: {
      display: ['block', 'inline-block', 'inline'].map(mapOptions),
      position: ['static', 'relative', 'absolute', 'fixed', 'sticky'].map(
        mapOptions
      ),
      overflow: ['visible', 'hidden', 'scroll', 'auto'].map(mapOptions),
      visibility: ['visible', 'hidden'].map(mapOptions),
      opacity: [
        '0',
        '0.1',
        '0.2',
        '0.3',
        '0.4',
        '0.5',
        '0.6',
        '0.7',
        '0.8',
        '0.9',
        '1',
      ].map(mapOptions),
      zIndex: Object.keys(theme.zIndices).map(mapOptions),
    },
  },
  typography: {
    fonts: Object.keys(theme.fonts).map(mapOptions),
    fontSizes: Object.keys(theme.fontSizes).map(mapOptions),
    fontWeights: Object.keys(theme.fontWeights).map(mapOptions),
    lineHeights: Object.keys(theme.lineHeights).map(mapOptions),
    letterSpacings: Object.keys(theme.letterSpacings).map(mapOptions),
    textAlign: ['left', 'center', 'right'].map(mapOptions),
    textTransform: ['none', 'uppercase', 'lowercase', 'capitalize'].map(
      mapOptions
    ),
    textDecoration: ['none', 'underline', 'line-through', 'overline'].map(
      mapOptions
    ),
    textOverflow: ['clip', 'ellipsis'].map(mapOptions),
  },
  decorative: {
    border: Object.keys(theme.borders).map(mapOptions),
  },
};

/* -------------------------------------------------------------------------- */
/*                                Config:Pages                                */
/* -------------------------------------------------------------------------- */
export const fields: Record<string, Template['fields']> = {
  page: [
    {
      type: 'string',
      label: 'Page Title (SEO, Search results) 50-70 chars.',
      name: 'title',
      required: true,
    },
    {
      name: 'slug',
      label: 'Slug',
      type: 'string',
      required: true,
      isTitle: true,
    },
    {
      type: 'string',
      label: 'Description (Seo, Search results) 150-160 chars.',
      name: 'description',
      required: true,
      ui: {
        component: 'textarea',
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
  colors: [],
  size: [],
  typography: [],
  decorative: [],
  spacing: [],
  box: [],
  flex: [],
  container: [],
  settings: [],
  image: [],
  seo: [],
};

/* -------------------------------------------------------------------------- */
/*                                 Styles:Size                                */
/* -------------------------------------------------------------------------- */
fields['size'] = [
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
] as Template['fields'];

/* -------------------------------------------------------------------------- */
/*                              Styles:Typography                             */
/* -------------------------------------------------------------------------- */
fields['typography'] = [
  {
    type: 'object',
    name: 'typography',
    label: 'Font Styles',
    fields: [
      {
        type: 'string',
        label: 'Font Family',
        name: 'fontFamily',
        options: options.typography.fonts,
      },
      {
        type: 'string',
        label: 'Font Size',
        name: 'fontSize',
        options: options.typography.fontSizes,
      },
      {
        type: 'string',
        label: 'Font Weight',
        name: 'fontWeight',
        options: options.typography.fontWeights,
      },
      {
        type: 'string',
        label: 'Line Height',
        name: 'lineHeight',
        options: options.typography.lineHeights,
      },
      {
        type: 'string',
        label: 'Letter Spacing',
        name: 'letterSpacing',
        options: options.typography.letterSpacings,
      },
      {
        type: 'string',
        label: 'Text Align',
        name: 'textAlign',
        options: options.typography.textAlign,
      },
      {
        type: 'string',
        label: 'Text Transform',
        name: 'textTransform',
        options: options.typography.textTransform,
      },
      {
        type: 'string',
        label: 'Text Decoration',
        name: 'textDecoration',
        options: options.typography.textDecoration,
      },
      {
        type: 'string',
        label: 'Text Overflow',
        name: 'textOverflow',
        options: options.typography.textOverflow,
      },
    ],
  },
] as Template['fields'];

/* -------------------------------------------------------------------------- */
/*                              Styles:Decorative                             */
/* -------------------------------------------------------------------------- */
fields['decorative'] = [
  {
    type: 'object',
    name: 'decorative',
    label: 'Decorative Styles',
    fields: [
      {
        type: 'string',
        label: 'Border',
        name: 'border',
        options: options.decorative.border,
      },
      {
        type: 'string',
        label: 'Border Color',
        name: 'borderColor',
        options: options.colors,
      },
      {
        type: 'string',
        label: 'Rounded',
        name: 'rounded',
        options: options.radii,
      },
      {
        type: 'string',
        label: 'Shadow',
        name: 'shadow',
        options: options.shadows,
      },
    ],
  },
] as Template['fields'];

/* -------------------------------------------------------------------------- */
/*                               Styles:Spacing                               */
/* -------------------------------------------------------------------------- */
fields['spacing'] = [
  {
    type: 'object',
    name: 'spacing',
    label: 'Spacing Settings',
    fields: [
      {
        type: 'string',
        label: 'Horizontal Padding',
        name: 'px',
        options: options.space,
        ui: { parse: parseToString },
      },
      {
        type: 'string',
        label: 'Vertical Padding',
        name: 'py',
        options: options.space,
        ui: { parse: parseToString },
      },
      {
        type: 'string',
        label: 'Horizontal Margin',
        name: 'mx',
        options: options.space,
        ui: { parse: parseToString },
      },
      {
        type: 'string',
        label: 'Vertical Margin',
        name: 'my',
        options: options.space,
        ui: { parse: parseToString },
      },
    ],
  },
] as Template['fields'];

/* -------------------------------------------------------------------------- */
/*                                Styles:Colors                               */
/* -------------------------------------------------------------------------- */
fields['colors'] = [
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
] as Template['fields'];

/* -------------------------------------------------------------------------- */
/*                                 Styles:Box                                 */
/* -------------------------------------------------------------------------- */
fields['box'] = [
  {
    type: 'object',
    name: 'box',
    label: 'Box Settings',
    fields: [
      {
        type: 'string',
        label: 'Width',
        name: 'width',
        options: options.sizes,
      },
      {
        type: 'string',
        label: 'Max Width',
        name: 'maxW',
        options: options.sizes,
      },
      {
        type: 'string',
        label: 'Min Width',
        name: 'minW',
        options: options.sizes,
      },
      {
        type: 'string',
        label: 'Height',
        name: 'height',
        options: options.sizes,
      },
      {
        type: 'string',
        label: 'Max Height',
        name: 'maxH',
        options: options.sizes,
      },
      {
        type: 'string',
        label: 'Min Height',
        name: 'minH',
        options: options.sizes,
      },
      ...fields['colors'], // bg ,text colors
      {
        type: 'string',
        label: 'Display',
        name: 'display',
        options: options.container.box.display,
      },
      {
        type: 'string',
        label: 'Position',
        name: 'position',
        options: options.container.box.position,
      },
      {
        type: 'string',
        label: 'Top',
        name: 'top',
        options: options.space,
        parse: parseToString,
      },
      {
        type: 'string',
        label: 'Right',
        name: 'right',
        options: options.space,
        parse: parseToString,
      },
      {
        type: 'string',
        label: 'Bottom',
        name: 'bottom',
        options: options.space,
        parse: parseToString,
      },
      {
        type: 'string',
        label: 'Left',
        name: 'left',
        options: options.space,
        parse: parseToString,
      },
      {
        type: 'string',
        label: 'Overflow',
        name: 'overflow',
        options: options.container.box.overflow,
      },
      {
        type: 'string',
        label: 'Visibility',
        name: 'visibility',
        options: options.container.box.visibility,
      },
      {
        type: 'string',
        label: 'Opacity',
        name: 'opacity',
        options: options.container.box.opacity,
        parse: parseToString,
      },
      {
        type: 'string',
        label: 'Z-Index',
        name: 'zIndex',
        options: options.container.box.zIndex,
      },
    ],
  },
] as Template['fields'];

/* -------------------------------------------------------------------------- */
/*                                 Styles:Flex                                */
/* -------------------------------------------------------------------------- */
fields['flex'] = [
  {
    type: 'object',
    name: 'flex',
    label: 'Flex Settings',
    fields: [
      {
        type: 'string',
        label: 'Direction',
        name: 'direction',
        options: options.container.flex.direction,
      },
      {
        type: 'string',
        label: 'Horizontal Spacing',
        name: 'justify',
        options: options.container.flex.justify,
        ui: { defaultItem: 'flex-start' },
      },
      {
        type: 'string',
        label: 'Vertical Spacing',
        name: 'align',
        options: options.container.flex.align,
        ui: { defaultItem: 'stretch' },
      },
      {
        type: 'string',
        label: 'Wrap',
        name: 'wrap',
        options: options.container.flex.wrap,
        ui: { defaultItem: 'nowrap' },
      },
      {
        type: 'string',
        label: 'Gap',
        name: 'gap',
        required: true,
        options: options.space,
        ui: {
          defaultItem: 'auto',
          parse: parseToString,
        },
      },
    ],
  },
] as Template['fields'];

/* -------------------------------------------------------------------------- */
/*                              Styles:Container                              */
/* -------------------------------------------------------------------------- */

fields['container'] = [
  // @NOTE: used to define section block colors '.tina/blocks/section.ts'
  // {
  //   type: 'string',
  //   label:
  //     'Background Color: https://chakra-ui.com/docs/styled-system/theme#colors',
  //   name: 'backgroundColor',
  //   options: options.colors,
  // },
  // {
  //   type: 'string',
  //   label: 'Text Color: https://chakra-ui.com/docs/styled-system/theme#colors',
  //   name: 'color',
  //   options: options.colors,
  // },
  ...fields['colors'], // bg ,text colors
] as Template['fields'];

/* -------------------------------------------------------------------------- */
/*                               Config:Settings                              */
/* -------------------------------------------------------------------------- */
fields['settings'] = [
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
        // @TODO: convert this to a block
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
] as Template['fields'];

/* -------------------------------------------------------------------------- */
/*                                Config:Image                                */
/* -------------------------------------------------------------------------- */
fields['image'] = [
  {
    type: 'object',
    name: 'image',
    label: 'Add or Update Image',
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
        isTitle: true,
        required: true,
      },
      {
        type: 'string',
        label: 'Image Credits',
        name: 'attr',
      },
      ...fields['size'],
      {
        type: 'object',
        name: 'pos',
        label: 'Image Display',
        fields: [
          {
            type: 'string',
            label: 'Image Position',
            name: 'objectPosition',
            options: objectPosition.map(mapOptions),
          },
          {
            type: 'string',
            label: 'Image Fit',
            name: 'objectFit',
            options: objectFit.map(mapOptions),
          },
          {
            type: 'string',
            label: 'Transform Image',
            name: 'transform',
            options: translate.map(mapOptions), // @TODO: add translate options
          },
        ],
      },
    ],
  },
] as Template['fields'];

/* -------------------------------------------------------------------------- */
/*                                 Config:Seo                                 */
/* -------------------------------------------------------------------------- */
fields['seo'] = [
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
          validate: (value: any) => {
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
          validate: (value: any) => {
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
      ...fields?.image,
    ],
  },
] as Template['fields'];

/* -------------------------------------------------------------------------- */
/*                           Get Field Names Helper                           */
/* -------------------------------------------------------------------------- */
type Field = {
  name: string;
  fields?: Field[];
};
/**
 * @NOTE: Takes in an array of fieldConfig Objects and returns the name of each field as an array
 *
 * @param {Field[]} array
 * @return {*}  {({ [key: string]: (string | { [key: string]: string[] })[] })}
 */
export const getFieldNames = (
  array: Field[]
): { [key: string]: (string | { [key: string]: string[] })[] } => {
  return array.reduce((acc, curr) => {
    const fields: any[] = [];

    if (curr.fields && Array.isArray(curr.fields)) {
      curr.fields.forEach((field) => {
        if (!field.fields) {
          fields.push(field.name);
        } else if (Array.isArray(field.fields)) {
          const obj = { [field.name]: field.fields.map((f) => f.name) };
          fields.push(obj);
        }
      });
    }

    return { ...acc, [curr.name]: fields };
  }, {});
};
