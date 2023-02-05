import type { SchemaField } from 'tinacms';

import {
  contentBlock,
  dividerBlock,
  locationCTABlock,
  logoBlock,
  sectionBlock,
  sectionCoverBlock,
  sectionTitleBlock,
  serviceMenuBlock,
} from '../blocks';
import { fields } from '../fields';

export const categories: { fields: SchemaField[] } = {
  fields: [
    ...fields?.page,
    ...fields?.image,
    {
      type: 'object',
      name: 'blocks',
      label: 'Service Category Sections',
      list: true,
      ui: {
        visualSelector: true,
      },
      templates: [
        contentBlock,
        dividerBlock,
        sectionTitleBlock,
        sectionCoverBlock,
        logoBlock,
        serviceMenuBlock,
        sectionBlock,
        locationCTABlock,
      ],
    },
    ...fields?.settings,
    ...fields?.seo,
    ...fields?.colors,
  ],
};
