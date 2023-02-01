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
        ...fields?.box,
        ...fields?.spacing,
        // ...fields?.flex,
        ...fields?.decorative,
        ...fields?.typography,
      ],
    },
  ],
};
