export const routers = {
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
