import { mapSettingsToTinaComponents } from '../utils/chakra';

const settings = mapSettingsToTinaComponents();

const nonFlexSettings = settings;
if (settings.flex) delete nonFlexSettings['flex'];

export const defaults = {
  about: {
    title: 'Your Neighborhood Beauty Expert',
    heading: 'Over 15 Years ',
    subheading: 'of Esthetic Industry Experience',
    caption: 'Licensed in NY / NJ',
    description:
      'We are committed to helping you look and feel your best. Our licensed estheticians provide best-in class threading, waxing, tinting along with thoughtful skin and eyebrow care advice.',
    showLicenses: false,
  },
  box: {
    title: '👩‍💼 Change This title ',
    poly: 'box',
    settings: settings,//  // 7tNXwiua8uQ @DONE: keep flex settings for box
  },
  contact: {
    address: '2A Franklin Ave',
    locality: 'Pearl River, NY 10965',
    phoneNumber: '(862) 571-7873',
  },
  coreServices: {
    title: 'Core Services',
    serviceCategories: {
      category: 'Add A Service Category',
      image: {
        src: '/uploads/assets/placeholder-sq.webp',
        alt: 'Your neighborhood beauty and skin care experts. Trained and certified estheticians | ✨ Rupi Beauty Studio ✨',
        size: {
          width: 500,
          height: 500,
        },
      },
      link: 'relative-link-to-page',
    },
  },
  divider: {
    title: '👩‍💼 Change This title ',
    orientation: 'horizontal',
    borderColor: 'gray.400',
  },
  hero: {
    heading: 'Insert Your Most Impactful Statement Here',
    subheading: 'Frame your statement',
    image: {
      src: 'https://cdn.jsdelivr.net/gh/rupistudio/assets@main/images/people/hero-composite.png',
      alt: 'Your neighborhood beauty and skin care experts. Trained and certified estheticians | ✨ Rupi Beauty Studio ✨',
      size: {
        width: 1920,
        height: 1080,
      },
    },
  },
  locationCTA: {
    cta: 'Come Visit Us At Our Newest Location',
  },
  logo: {
    title: 'Rupi Beauty Studio Logo',
  },
  sectionTitle: {
    title: '👩‍💼 Change This title ',
  },
  section: {
    title: '👩‍💼 Change This title ',
    settings: {
      backgroundColor: 'bg',
      color: 'text',
      ...nonFlexSettings,
    },
  },
  serviceMenu: {
    title: '👩‍💼 Change This title ',
  },
};
