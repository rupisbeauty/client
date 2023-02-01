import { theme } from '@chakra-ui/react';
import { FieldsBuilder,Template } from 'tinacms';

import {
mapColors,
mapOptions,
mapSemanticTokens,
objectFit,
objectPosition,
scale
} from './utils';

import { paths } from '../chakra.ui/icons/paths';

/* -------------------------------------------------------------------------- */
/*                              Options Mappings                              */
/* -------------------------------------------------------------------------- */
const full = [{ key: 'auto', value: 'auto', label: 'auto' }];
const options = {
  colors: mapSemanticTokens.concat(mapColors),
  shadows: Object.keys(theme.shadows).map(mapOptions),
  space: full.concat(Object.keys(theme.space).map(mapOptions)),
  sizes: Object.keys(theme.sizes).map(mapOptions),
  radii: Object.keys(theme.radii).map(mapOptions),
  icons: Object.keys(paths).map(mapOptions),
  container: {
    sizes: Object.keys(theme.sizes.container).map(mapOptions),
    flex: {
      direction: [
        { key: 'row', label: 'row', value: 'row' },
        { key: 'column', label: 'column', value: 'column' },
        { key: 'row-reverse', label: 'row-reverse', value: 'row-reverse' },
        {
          key: 'column-reverse',
          label: 'column-reverse',
          value: 'column-reverse',
        },
      ],
      wrap: [
        { key: 'nowrap', label: 'No Wrap', value: 'nowrap' },
        { key: 'wrap', label: 'Wrap', value: 'wrap' },
        { key: 'wrap-reverse', label: 'Wrap Reverse', value: 'wrap-reverse' },
      ],
      justify: [
        { key: 'flex-start', label: 'Start', value: 'flex-start' },
        { key: 'flex-end', label: 'End', value: 'flex-end' },
        { key: 'center', label: 'Center', value: 'center' },
        {
          key: 'space-between',
          label: 'Space Between',
          value: 'space-between',
        },
        { key: 'space-around', label: 'Space Around', value: 'space-around' },
        { key: 'space-evenly', label: 'Space Evenly', value: 'space-evenly' },
      ],
      align: [
        { key: 'stretch', label: 'Stretch', value: 'stretch' },
        { key: 'flex-start', label: 'Start', value: 'flex-start' },
        { key: 'flex-end', label: 'End', value: 'flex-end' },
        { key: 'center', label: 'Center', value: 'center' },
        { key: 'baseline', label: 'Baseline', value: 'baseline' },
      ],
    },
    box: {
      display: [
        { key: 'block', label: 'Block', value: 'block' },
        { key: 'inline-block', label: 'Inline Block', value: 'inline-block' },
        { key: 'inline', label: 'Inline', value: 'inline' },
      ],
      position: [
        { key: 'static', label: 'Static', value: 'static' },
        { key: 'relative', label: 'Relative', value: 'relative' },
        { key: 'absolute', label: 'Absolute', value: 'absolute' },
        { key: 'fixed', label: 'Fixed', value: 'fixed' },
        { key: 'sticky', label: 'Sticky', value: 'sticky' },
      ],
      overflow: [
        { key: 'visible', label: 'Visible', value: 'visible' },
        { key: 'hidden', label: 'Hidden', value: 'hidden' },
        { key: 'scroll', label: 'Scroll', value: 'scroll' },
        { key: 'auto', label: 'Auto', value: 'auto' },
      ],
      visibility: [
        { key: 'visible', label: 'Visible', value: 'visible' },
        { key: 'hidden', label: 'Hidden', value: 'hidden' },
      ],
      opacity: [
        { key: '0', label: '0', value: '0' },
        { key: '0.1', label: '0.1', value: '0.1' },
        { key: '0.2', label: '0.2', value: '0.2' },
        { key: '0.3', label: '0.3', value: '0.3' },
        { key: '0.4', label: '0.4', value: '0.4' },
        { key: '0.5', label: '0.5', value: '0.5' },
        { key: '0.6', label: '0.6', value: '0.6' },
        { key: '0.7', label: '0.7', value: '0.7' },
        { key: '0.8', label: '0.8', value: '0.8' },
        { key: '0.9', label: '0.9', value: '0.9' },
        { key: '1', label: '1', value: '1' },
      ],
      zIndex: Object.keys(theme.zIndices).map(mapOptions),
    },
  },
  typography: {
    fonts: Object.keys(theme.fonts).map(mapOptions),
    fontSizes: Object.keys(theme.fontSizes).map(mapOptions),
    fontWeights: Object.keys(theme.fontWeights).map(mapOptions),
    lineHeights: Object.keys(theme.lineHeights).map(mapOptions),
    letterSpacings: Object.keys(theme.letterSpacings).map(mapOptions),
    textAlign: [
      { key: 'left', value: 'left', label: 'left' },
      { key: 'center', value: 'center', label: 'center' },
      { key: 'right', value: 'right', label: 'right' },
    ],
    textTransforms: [
      { key: 'none', value: 'none', label: 'none' },
      { key: 'uppercase', value: 'uppercase', label: 'uppercase' },
      { key: 'lowercase', value: 'lowercase', label: 'lowercase' },
      { key: 'capitalize', value: 'capitalize', label: 'capitalize' },
    ],
    textDecorations: [
      { key: 'none', value: 'none', label: 'none' },
      { key: 'underline', value: 'underline', label: 'underline' },
      {
        key: 'line-through',
        value: 'line-through',
        label: 'line-through',
      },
      { key: 'overline', value: 'overline', label: 'overline' },
    ],
    textOverflow: [
      { key: 'clip', value: 'clip', label: 'clip' },
      { key: 'ellipsis', value: 'ellipsis', label: 'ellipsis' },
    ],
  },
  decorative: {
    border: Object.keys(theme.borders).map(mapOptions),
  },
};

/* -------------------------------------------------------------------------- */
/*                                Config:Pages                                */
/* -------------------------------------------------------------------------- */
export const fields: Record<string, Template['fields']> = {
  pageTitle: [
    // @TODO: this might be able to be remove (check and remove)
    {
      type: 'string',
      label: 'Title',
      name: 'title',
      ui: {
        validate: (value: any) => {
          if (value?.length && value.length > 70)
            return `-${Number(value.length) - 70} chars remaining / 70`;
        },
      },
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
        validate: (value: any) => {
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
        validate: (value: any) => {
          if (value?.length && value.length > 70)
            return `-${Number(value.length) - 70} chars remaining / 70`;
        },
      },
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
        validate: (value: any) => {
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
        options: options.typography.textTransforms,
      },
      {
        type: 'string',
        label: 'Text Decoration',
        name: 'textDecoration',
        options: options.typography.textDecorations,
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
      },
      {
        type: 'string',
        label: 'Vertical Padding',
        name: 'py',
        options: options.space,
      },
      {
        type: 'string',
        label: 'Horizontal Margin',
        name: 'mx',
        options: options.space, // @TODO: add 'auto' as option @DONE?
      },
      {
        type: 'string',
        label: 'Vertical Margin',
        name: 'my',
        options: options.space, // @TODO: add 'auto' as option @DONE?
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
      },
      {
        type: 'string',
        label: 'Right',
        name: 'right',
        options: options.space,
      },
      {
        type: 'string',
        label: 'Bottom',
        name: 'bottom',
        options: options.space,
      },
      {
        type: 'string',
        label: 'Left',
        name: 'left',
        options: options.space,
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
      },
      {
        type: 'string',
        label: 'Vertical Spacing',
        name: 'align',
        options: options.container.flex.align,
      },
      {
        type: 'string',
        label: 'Wrap',
        name: 'wrap',
        options: options.container.flex.wrap,
      },
      {
        type: 'number',
        label: 'Gap',
        name: 'gap',
        options: options.space,
      },
    ],
  },
] as Template['fields'];

/* -------------------------------------------------------------------------- */
/*                              Styles:Container                              */
/* -------------------------------------------------------------------------- */

fields['container'] = [
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
    options: options.sizes,
  },
  {
    type: 'string',
    label: 'Max Width',
    name: 'maxW',
    options: options.container.sizes,
  },
  {
    type: 'string',
    label:
      'Background Color: https://chakra-ui.com/docs/styled-system/theme#colors',
    name: 'backgroundColor',
    options: options.colors,
  },
  {
    type: 'string',
    label: 'Text Color: https://chakra-ui.com/docs/styled-system/theme#colors',
    name: 'color',
    options: options.colors,
  },
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
            options: scale.map(mapOptions),
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
