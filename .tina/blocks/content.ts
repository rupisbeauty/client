import { customTextStyles } from 'chakra.ui/theme/foundations/textStyles';
import { Template } from 'tinacms';

import { fields, options, parseToString } from '../fields';
import { defaults } from './_defaults';

export const contentBlock: Template = {
  label: 'Simple Text Block',
  name: 'content',
  ui: {
    defaultItem: defaults.content,
  },
  fields: [
    {
      type: 'string',
      label: 'Heading',
      name: 'heading',
    },
    {
      type: 'object',
      name: 'headingSettings',
      label: 'Heading Settings',
      fields: [
        {
          type: 'string',
          label: 'Heading Color',
          name: 'color',
          options: options.colors,
        },
        ...(fields?.typography as Template['fields']),
      ],
    },
    {
      type: 'string',
      label: 'Text',
      name: 'text',
      ui: {
        component: 'textarea',
        defaultItem: { color: 'text' },
      },
    },
    {
      type: 'object',
      name: 'textSettings',
      label: 'Text Settings',
      fields: [
        {
          type: 'string',
          label: 'Text Color',
          name: 'color',
          options: options.colors,
        },
        ...(fields?.typography as Template['fields']),
      ],
    },
    {
      type: 'string',
      label: 'Background Color',
      name: 'backgroundColor',
      options: options.colors,
    },
    {
      type: 'object',
      name: 'spacing',
      label: 'Spacing Settings',
      ui: { defaultItem: { my: 'auto' } },
      fields: [
        {
          type: 'string',
          label: 'Vertical Margin',
          name: 'my',
          options: options.space,
          ui: {
            parse: (val: string) => val.toString(),
          },
        },
        ...(fields?.flex as Template['fields']),
      ],
    },
    ...(fields?.decorative as Template['fields']),
  ],
};
