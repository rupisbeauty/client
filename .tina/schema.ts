import { defineSchema } from 'tinacms';

import {
  categories as servicesCategories,
  pages,
  posts,
  servicesOptions,
} from './collections';
import defaultItems from './collections/_defaults.json';
import { routers } from './routers';

export const schema = defineSchema({
  collections: [
    {
      name: 'post',
      label: 'Posts',
      path: '_content/posts',
      format: 'md',
      ui: {
        // This is an DEMO router. You can remove this to fit your site
        router: routers.posts,
      },
      ...posts,
    },
    {
      name: 'pages',
      label: 'Pages',
      path: '_content/pages',
      format: 'mdx',
      ui: {
        defaultItem: defaultItems.pages,
        router: routers.pages,
      },
      ...pages,
    },
    {
      name: 'categories',
      label: 'Service Categories',
      path: '_content/categories',
      format: 'mdx',
      ui: {
        defaultItem: defaultItems.categories, // @TODO:  update to newer shape
        router: routers.categories,
      },
      ...servicesCategories,
    },
    {
      name: 'options',
      label: 'Service Options',
      path: '_content/options',
      format: 'mdx',
      ui: { global: true },
      ...servicesOptions,
    },
  ],
});
