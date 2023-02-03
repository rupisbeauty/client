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
    // @TODO: check if color settings are getting applied correctly
    // settings: settings, // U96mLYCh @NOTE: Tina Settings Definitions
  },
  contact: {
    address: '2A Franklin Ave',
    locality: 'Pearl River, NY 10965',
    phoneNumber: '(862) 571-7873',
  },
  coreServices: {
    relatedServices: [
      { service: '_content/categories/eyebrows.mdx' },
      { service: '_content/categories/hair-removal/body-waxing.mdx' },
      { service: '_content/categories/hair-removal/laser-hair-removal.mdx' },
      { service: '_content/categories/hair-removal/ipl.mdx' },
    ],
  },
  divider: {
    title: 'Horizontal Divider',
    orientation: 'horizontal',
    borderColor: 'gray.200',
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
      colors: {
        // U96mLYCh @NOTE: Tina Settings Definitions
        backgroundColor: '#FFF1E4', // bg
        color: '#4A5568', // gray.600
      },
      // ...nonFlexSettings,
    },
  },
  serviceMenu: {
    title: '👩‍💼 Change This title ',
  },
};
