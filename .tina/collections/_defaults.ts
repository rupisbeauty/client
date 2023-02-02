export const defaultSEO = {
  title: 'Rupi Beauty Studio Service',
  description:
    'Find out more about our incredible lineup of services for all of your beauty and skin-care needs.',
};

export const defaultColors = {
  backgroundColor: '#FFF1E4',
  color: '#4A5568',
};

export const defaultLayoutSettings = {
  showCta: true,
  showReviews: true,
  showHeader: true,
  showFooter: true,
};

export const defaultImage = {
  src: '/uploads/assets/placeholder-sq.webp',
  alt: 'Your neighborhood beauty and skin care experts. Trained and certified estheticians | ✨ Rupi Beauty Studio ✨',
  size: {
    width: 500,
    height: 500,
  },
};

export const defaults = {
  page: {
    title: 'Page Title (SEO, Search results) 50-70 chars.',
    description: 'Description (Seo, Search results) 150-160 chars.',
    seo: defaultSEO,
    settings: defaultLayoutSettings,
    colors: defaultColors,
  },
  categories: {
    title: 'Page Title (SEO, Search results) 50-70 chars.',
    description: 'Description (Seo, Search results) 150-160 chars.',
    slug: 'category-slug',
    image: defaultImage,
    options: [],
    relatedServices: [
      { service: '_content/categories/eyebrows.mdx' },
      { service: '_content/categories/skin-care.mdx' },
      { service: '_content/categories/facials.mdx' },
      { service: '_content/categories/addons.mdx' },
    ],
    settings: defaultLayoutSettings,
    colors: defaultColors,
    seo: defaultSEO,
  },
  options: {
    title: 'Page Title (SEO, Search results) 50-70 chars.',
    description: 'Description (Seo, Search results) 150-160 chars.',
    slug: 'option-slug',
    price: 0,
    duration: 30,
    image: defaultImage,
    options: [],
  },
};
