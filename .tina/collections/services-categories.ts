import type { SchemaField } from 'tinacms';

import { templates } from '../blocks';
import { fields } from '../fields-config';

export const categories: { fields: SchemaField[] } = {
  fields: [
    ...fields?.page,
    // {
    //   type: 'string',
    //   name: 'icon',
    //   label: 'Icon',
    //   options: [
    //     { label: 'Facials', value: 'facials' },
    //     { label: 'Eyebrows', value: 'eyebrows' },
    //     { label: 'Hair Removal', value: 'hair-removal' },
    //   ],
    // },
    {
      type: 'rich-text',
      name: 'body',
      label: 'body',
      isBody: true,
      templates: templates.section,
    },
    ...fields?.image,
    ...fields?.services,
    ...fields?.settings,
    ...fields?.seo,
    ...fields?.colors,
  ],
};
