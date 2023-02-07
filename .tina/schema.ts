import { defineSchema } from 'tinacms';

import {
  categories as servicesCategories,
  pages,
  servicesOptions,
} from './collections';
import { defaults } from './collections/_defaults';
import { routers } from './routers';

/**
 * Schema file defines the individual collections available in our CMS
 *
 * Each collection has a definition stored in `./collections/*`
 * Each collection will have fields where we define the inputs exposed in the TinaCloud Sidebar
 * The field config definitions are all located in a single file `./fields-config.ts` then imported into each field array as needed. This way a particular set of fields only has to be defined once and their definitions can then be re-used by different collections or template blocks.
 *
 * Templating occurs at the collection level and at the block level, both types are instantiated in `./blocks/*
 * For more information on handling blocks
 * @SEE: `./blocks/README.md`
 */

export const schema = defineSchema({
  collections: [
    {
      name: 'pages',
      label: 'Pages',
      path: '_content/pages',
      format: 'mdx',
      ui: {
        defaultItem: defaults.page,
        // router: routers.pages,
      },
      ...pages,
    },
    {
      name: 'categories',
      label: 'Services',
      path: '_content/categories',
      format: 'mdx',
      ui: {
        defaultItem: defaults.categories,
        router: routers.categories,
      },
      ...servicesCategories,
    },
    {
      name: 'options',
      label: 'Service Options',
      path: '_content/options',
      format: 'mdx',
      ui: {
        global: true,
        defaultItem: defaults.options,
      },
      ...servicesOptions,
    },
  ],
});
