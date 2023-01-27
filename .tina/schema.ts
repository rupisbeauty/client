import { defineSchema } from 'tinacms';

import { categories, media, pages, posts, products, tags } from './collections';

export const schema = defineSchema({
  collections: [
    {
      name: 'post',
      label: 'Posts',
      path: '_content/posts',
      format: 'md',
      ui: {
        // This is an DEMO router. You can remove this to fit your site
        router: ({ document }) => `/demo/blog/${document._sys.filename}`,
      },
      ...posts,
    },
    {
      name: 'pages',
      label: 'Pages',
      path: '_content/pages',
      format: 'mdx',
      ui: {
        defaultItem: {
          title: 'This is the title of your page',
          description: 'This is the description of your page',
          backgroundColor: '#FFF1E4',
          color: '#4A5568',
          showCta: true,
          showReviews: true,
        },

        router: ({ document }) => {
          if (document._sys.filename === 'home') {
            return `/sandbox/home`;
          }
          const crumbs = document?._sys?.breadcrumbs;
          return `/sandbox/${crumbs.join('/')}`;
        },
      },
      ...pages,
    },
    {
      name: 'categories',
      label: 'Category',
      path: '_content/categories',
      format: 'md',
      ...categories,
      ui: { global: true },
      // @TODO: add allowedActions to restrict create, edit and delete
    },
    {
      name: 'tags',
      label: 'Tags',
      path: '_content/tags',
      format: 'md',
      ...tags,
      ui: { global: true },
      // @TODO: add allowedActions to restrict create, edit and delete
    },
    {
      name: 'products',
      label: 'Products',
      path: '_content/products',
      format: 'mdx',
      ui: {
        defaultItem: {
          title: 'Product Title',
          price: 0,
          slug: 'test-product',
        },
        router: ({ document }) => `/sandbox/products/${document._sys.filename}`,
      },
      ...products,
    },
    {
      name: 'media',
      label: 'Media',
      path: '_content/media',
      format: 'md',
      ui: {
        defaultItem: {
          title: 'file-name',
          src: 'https://picsum.photos/200',
          alt: 'Image Alt Text',
          width: 200,
          height: 200,
          attr: 'Add Image Attribution or Keep Blank',
          caption: 'Include a caption or keep blank',
        },
      },
      ...media,
    },
  ],
});
