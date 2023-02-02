import type { Template } from 'tinacms';

import { customLayerStyles } from '../../chakra.ui/theme/foundations/layerStyles';
import { fields } from '../fields-config';
import { mapStylesToTinaComponents, sectionStyles } from '../utils/chakra';
import { boxBlock } from './box';
import { logoBlock } from './logo';
import { sectionCoverBlock } from './section-cover';
import { sectionTitleBlock } from './section-title';
import { serviceMenuBlock } from './service-menu';

export const sectionBlock: Template = {
  label: 'Section',
  name: 'section',
  ui: {
    defaultItem: {
      title: '👩‍💼 Change This title ',
      settings: {
        width: 'full',
        backgroundColor: '#FFF1E4',
        color: '#4A5568',
        ...mapStylesToTinaComponents(),
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
      templates: [
        boxBlock,
        logoBlock,
        sectionTitleBlock,
        serviceMenuBlock,
        sectionCoverBlock,
      ],
    },
    {
      type: 'object',
      name: 'settings',
      label: 'Settings',
      fields: [
        ...(fields.container as Template['fields']),
        ...(fields?.spacing as Template['fields']),
        ...(fields?.flex as Template['fields']),
        ...(fields?.decorative as Template['fields']),
        ...(fields?.typography as Template['fields']),
      ],
    },
  ],
};
