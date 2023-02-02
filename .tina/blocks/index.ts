import type { Template } from 'tinacms';

import { aboutBlock } from './about';
import { contactBlock } from './contact';
import { coreServicesBlock } from './core-services';
import { heroBlock } from './hero';
import { locationCTABlock } from './location-cta';
import { logoBlock } from './logo';
import { sectionBlock } from './section';
import { sectionCoverBlock } from './section-cover';
import { sectionTitleBlock } from './section-title';
import { serviceMenuBlock } from './service-menu';

export const templates = {
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
  ] as Template[],
  section: [
    sectionBlock,
    sectionTitleBlock,
    sectionCoverBlock,
    logoBlock,
    serviceMenuBlock,
  ] as Template[],
};
