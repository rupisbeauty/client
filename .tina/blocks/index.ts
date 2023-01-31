import { aboutBlock } from './about';
import { contactBlock } from './contact';
import { coreServicesBlock } from './core-services';
import { heroBlock } from './hero';
import { locationCTABlock } from './location-cta';
import { sectionBlock } from './section';
import { sectionCoverBlock } from './section-cover';
import { sectionTitleBlock } from './section-title';
import { serviceMenuBlock } from './service-menu';

import type { Template } from 'tinacms';

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
    serviceMenuBlock,
  ] as Template[],
};
