import { Divider } from '@chakra-ui/react';

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

export function useComponents(type: 'section' | 'page') {
  // @NOTE: components have to be defined inside the function otherwise Tina does not pick them up on re-render
  const components = {
    section: {
      sectionTitle: SectionTitle,
      sectionCover: SectionCover,
      serviceMenu: ServiceMenu,
      box: SectionBox,
      logo: FullLogo,
      divider: Divider,
    },
    page: {
      logo: FullLogo,
      about: About,
      hero: Hero,
      sectionTitle: SectionTitle,
      divider: Divider,
      locationCTA: VisitLocationCTA,
      contact: ContactInfo,
      coreServices: CoreServices,
      section: Section,
      sectionCover: SectionCover,
      serviceMenu: ServiceMenu,
    },
  };
  return components[type];
}
