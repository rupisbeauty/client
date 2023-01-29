import { defineSchema } from 'tinacms';

import { categories as servicesCategories, pages, posts, servicesOptions, tags } from './collections';
import defaultItems from './collections/_defaults.json';

const routers = {
  posts: ({ document }) => `/demo/blog/${document._sys.filename}`,
  pages: ({ document }) => {
    if (document._sys.filename === 'home') {
      return `/sandbox/home`;
    }
    const crumbs = document?._sys?.breadcrumbs;
    return `/sandbox/${crumbs.join('/')}`;
  },
  categories: ({ document }) => {
    const crumbs = document?._sys?.breadcrumbs;
    return `/sandbox/services/${crumbs.join('/')}`;
  },
};

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
        defaultItem: defaultItems.categories,
        router: routers.categories,
      },
      ...servicesCategories,
    },
    {
      name: 'services',
      label: 'Service Options',
      path: '_content/services',
      format: 'mdx',
      ui: { global: true },
      ...servicesOptions,
    },
  ],
});
