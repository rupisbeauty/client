// @NOTE: this is still used by section-block component internally

import { chakra, Divider } from '@chakra-ui/react';

import { Section } from '@/components';
import { FullLogo, SectionBox, SectionTitle } from '../components/blocks';

export function useComponents(type: 'section' | 'page') {
  // @NOTE: components have to be defined inside the function otherwise Tina does not pick them up on re-render
  const components = {
    section: {
      sectionTitle: SectionTitle,
      // sectionCover: SectionCover,
      // serviceMenu: ServiceMenu,
      box: SectionBox,
      childBox: SectionBox,
      logo: FullLogo,
      divider: chakra(Divider, {
        baseStyle: {
          borderColor: 'gray.700',
          orientation: 'horizontal',
        },
      }),
    },
    page: {
      logo: FullLogo,
      // about: About,
      // hero: Hero,
      sectionTitle: SectionTitle,
      divider: Divider,
      // locationCTA: VisitLocationCTA,
      // contact: ContactInfo,
      // coreServices: CoreServices,
      section: Section,
      // sectionCover: SectionCover,
      // serviceMenu: ServiceMenu,
      childBox: SectionBox,
    },
  };
  return components[type];
}
