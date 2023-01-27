import { defineSchema } from 'tinacms';

import { categories, media, pages, posts, services, tags } from './collections';
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
  services: ({ document }) => {
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
      name: 'services',
      label: 'Services',
      path: '_content/services',
      format: 'mdx',
      ui: {
        defaultItem: defaultItems.services,
        router: routers.services,
      },
      ...services,
    },
    {
      name: 'media',
      label: 'Media',
      path: '_content/media',
      format: 'md',
      ui: {
        defaultItem: defaultItems.media,
      },
      ...media,
    },
    {
      name: 'categories',
      label: 'Category',
      path: '_content/categories',
      format: 'md',
      ui: { global: true, allowedActions: { create: true, delete: false } },
      ...categories,

      // @TODO: add default item as 'uncategorized'
    },
    {
      name: 'tags',
      label: 'Tags',
      path: '_content/tags',
      format: 'md',
      ui: { global: true, allowedActions: { create: false, delete: false } },
      ...tags,
      // @TODO: add default item as 'untagged'
    },
  ],
});
