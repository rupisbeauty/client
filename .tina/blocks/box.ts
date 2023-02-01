import type { Template } from 'tinacms';

import { customLayerStyles } from '../../chakra.ui/theme/foundations/layerStyles';
import { fields } from '../fields-config';
import { mapStylesToTinaComponents, sectionStyles } from '../utils/chakra';

// const styles = sectionStyles(customLayerStyles?.container?.default);
const styles = mapStylesToTinaComponents();
if (styles.flex) delete styles['flex'];

export const boxBlock: Template = {
  label: 'Box',
  name: 'box',
  ui: {
    defaultItem: {
      title: '👩‍💼 Change This title ',
      settings: {
        width: 'full',
        backgroundColor: '#FFF1E4',
        color: '#4A5568',
        ...styles,
      },
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
      type: 'rich-text',
      name: 'body',
      label: 'Body',
      isBody: true,
      // templates: [],
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
