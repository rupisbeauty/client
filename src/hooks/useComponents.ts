import {
  About,
  ContactInfo,
  CoreServices,
  Hero,
  Section,
  VisitLocationCTA,
} from '@/components';
import {
  FullLogo,
  SectionBox,
  SectionCover,
  SectionTitle,
  ServiceMenu,
} from '../components/blocks';

const components = {
  section: {
    sectionTitle: SectionTitle,
    sectionCover: SectionCover,
    serviceMenu: ServiceMenu,
    box: SectionBox,
    logo: FullLogo,
  },
  page: {
    about: About,
    hero: Hero,
    sectionTitle: SectionTitle,
    locationCTA: VisitLocationCTA,
    contact: ContactInfo,
    coreServices: CoreServices,
    section: Section,
    sectionCover: SectionCover,
    serviceMenu: ServiceMenu,
  },
};

export function useComponents(type: 'section' | 'page') {
  return components[type];
}
