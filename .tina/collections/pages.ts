import type { SchemaField, Template } from 'tinacms';

import { aboutBlock } from '../blocks/about';
import { contactBlock } from '../blocks/contact';
import { coreServicesBlock } from '../blocks/core-services';
import { dividerBlock } from '../blocks/divider';
import { heroBlock } from '../blocks/hero';
import { locationCTABlock } from '../blocks/location-cta';
import { logoBlock } from '../blocks/logo';
import { sectionCoverBlock } from '../blocks/section-cover';
import { sectionTitleBlock } from '../blocks/section-title';
import { fields } from '../fields';
import { serviceMenuBlock } from '../blocks/service-menu';

export const pages: { fields: SchemaField[] } = {
  fields: [
    {
      type: 'string',
      label: 'Page Title (SEO, Search results) 50-70 chars.',
      name: 'title',
      isTitle: true,
      required: true,
      // @NOTE: removed validation to allow the search engine to auto-truncate as needed
      // ui: {
      //   validate: (value) => {
      //     if (value?.length && value.length > 70)
      //       return `-${Number(value.length) - 70} chars remaining / 70`;
      //   },
      // },
    },
    {
      type: 'string',
      label: 'Description (Seo, Search results) 150-160 chars.',
      name: 'description',
      required: true,
      ui: {
        component: 'textarea',
        // validate: (value) => {
        //   if (value?.length && value.length > 160)
        //     return `-${Number(value.length) - 160} chars remaining / 160`;
        // },
      },
    },
    // {
    //   type: 'rich-text',
    //   name: 'body',
    //   label: 'body',
    //   isBody: true,
    //   ui: {},
    //   templates: templates.page,
    // },

    {
      // // 00icQ @WIP : block migration
      type: 'object',
      name: 'blocks',
      label: 'Page Sections',
      list: true,
      ui: {
        visualSelector: true,
      },
      templates: [
        heroBlock,
        aboutBlock,
        locationCTABlock,
        coreServicesBlock,
        contactBlock,
        logoBlock,
        sectionTitleBlock,
        sectionCoverBlock,
        dividerBlock,
        serviceMenuBlock
      ],
    },

    // ...fields?.blocks,
    ...fields?.seo,
    ...fields?.settings, // show: header, footer, emailCta, reviewHeader
    ...fields?.colors,
  ],
};
