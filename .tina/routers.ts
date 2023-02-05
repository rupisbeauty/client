export const routers = {
  // posts: ({ document }) => `/demo/blog/${document._sys.filename}`,
  pages: ({ document }) => {
    if (document._sys.filename === 'home') {
      // SbfdQQqT @TODO: update this when out of sandbox
      // return `/sandbox/home`;
      return `home`;
    }
    const crumbs = document?._sys?.breadcrumbs;
    // SbfdQQqT @TODO: update this when out of sandbox
    return `/sandbox/${crumbs.join('/')}`;
    return `/sandbox/${crumbs.join('/')}`;
  },
  categories: ({ document }) => {
    const crumbs = document?._sys?.breadcrumbs;
    // SbfdQQqT @TODO: update this when out of sandbox
    return `/sandbox/services/${crumbs.join('/')}`;
  },
};
