import type { Template } from 'tinacms';

import { aboutBlock } from './about';
import { boxBlock } from './box';
import { childBoxBlock } from './child-box';
import { contactBlock } from './contact';
import { coreServicesBlock } from './core-services';
import { dividerBlock } from './divider';
import { heroBlock } from './hero';
import { locationCTABlock } from './location-cta';
import { logoBlock } from './logo';
import { sectionBlock } from './section';
import { sectionCoverBlock } from './section-cover';
import { sectionTitleBlock } from './section-title';
import { serviceMenuBlock } from './service-menu';

export const templates: Record<string, Template[]> = {
  page: [
    sectionBlock,
    sectionCoverBlock,
    sectionTitleBlock,
    serviceMenuBlock,
    coreServicesBlock,
    heroBlock,
    aboutBlock,
    contactBlock,
    locationCTABlock,
    dividerBlock,
  ],
  section: [
    boxBlock,
    dividerBlock,
    sectionTitleBlock,
    sectionCoverBlock,
    logoBlock,
    serviceMenuBlock,
  ],
  box: [childBoxBlock, dividerBlock],
  childBox: [boxBlock, dividerBlock],
};
