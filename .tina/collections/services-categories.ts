import type { SchemaField } from 'tinacms';

import { templates } from '../blocks';
import { sectionBlock } from '../blocks/section';
import { fields } from '../fields-config';

export const categories: { fields: SchemaField[] } = {
  fields: [
    ...fields?.page,
    {
      type: 'rich-text',
      name: 'body',
      label: 'body',
      isBody: true,
      templates: [sectionBlock, ...templates.section],
    },
    ...fields?.image,
    ...fields?.services,
    ...fields?.settings,
    ...fields?.seo,
    ...fields?.colors,
  ],
};
