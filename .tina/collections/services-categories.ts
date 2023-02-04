import type { SchemaField } from 'tinacms';

import { dividerBlock } from '../blocks/divider';
import { locationCTABlock } from '../blocks/location-cta';
import { logoBlock } from '../blocks/logo';
import { sectionBlock } from '../blocks/section';
import { sectionCoverBlock } from '../blocks/section-cover';
import { sectionTitleBlock } from '../blocks/section-title';
import { serviceMenuBlock } from '../blocks/service-menu';
import { fields } from '../fields';

export const categories: { fields: SchemaField[] } = {
  fields: [
    ...fields?.page,
    {
      // 00icQ @WIP : block migration
      type: 'object',
      name: 'blocks',
      label: 'Service Category Sections',
      list: true,
      ui: {
        visualSelector: true,
      },
      templates: [
        locationCTABlock,
        logoBlock,
        sectionTitleBlock,
        sectionCoverBlock,
        dividerBlock,
        serviceMenuBlock,
        sectionBlock,
      ],
    },
    ...fields?.image,
    ...fields?.services,
    ...fields?.settings,
    ...fields?.seo,
    ...fields?.colors,
  ],
};
