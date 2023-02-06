export const routers = {
  pages: ({ document }) => {
    if (document._sys.filename === 'home') {
      return `/home`;
    }
    const crumbs = document?._sys?.breadcrumbs;
    return `/${crumbs.join('/')}`;
  },
  categories: ({ document }) => {
    const crumbs = document?._sys?.breadcrumbs;
    return `/services/${crumbs.join('/')}`;
  },
};
