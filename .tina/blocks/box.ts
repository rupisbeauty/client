import type { Template } from 'tinacms';

import { customLayerStyles } from '../../chakra.ui/theme/foundations/layerStyles';
import { fields } from '../fields';
import { mapSettingsToTinaComponents } from '../utils/chakra';

import { defaults } from './_defaults';

// const styles = sectionStyles(customLayerStyles?.container?.default);
const settings = mapSettingsToTinaComponents();
if (settings.flex) delete settings['flex'];

export const boxBlock: Template = {
  label: 'Box',
  name: 'box',
  ui: {
    defaultItem: defaults.box,
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
      // templates: [],
    },
    {
      type: 'string',
      name: 'poly',
      label: 'Box Variants',
      options: [
        { label: 'box', value: 'box' },
        { label: 'stack', value: 'stack' },
        { label: 'card', value: 'card' },
        { label: 'hidden', value: 'hidden' },
      ],
    },
    {
      type: 'object',
      name: 'settings',
      label: 'Settings',
      fields: [
        ...(fields.box as Template['fields']),
        ...(fields.spacing as Template['fields']),
        // ...fields?.flex,
        ...(fields.decorative as Template['fields']),
        ...(fields.typography as Template['fields']),
      ],
    },
  ],
};
