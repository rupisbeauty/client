export const routers = {
  pages: ({ document }) => {
    if (document._sys.filename === 'home') {
      return `/home`;
    }
    const crumbs = document?._sys?.breadcrumbs;
    return `/${crumbs.join('/')}`;
  },
  // 5886
  routes: ({ document }) => {
    if (document._sys.filename === 'home') {
      return `/sandbox/`;
    }
    const crumbs = document?._sys?.breadcrumbs;
    return `/sandbox/${crumbs.join('/')}`;
  },
  categories: ({ document }) => {
    const crumbs = document?._sys?.breadcrumbs;
    return `/services/${crumbs.join('/')}`;
  },
};
