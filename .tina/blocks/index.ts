import { aboutBlock } from './about';
import { contactBlock } from './contact';
import { coreServicesBlock } from './core-services';
import { heroBlock } from './hero';
import { locationCTABlock } from './location-cta';
import { sectionBlock } from './section';
import { sectionTitleBlock } from './section-title';
import { serviceCoverBlock } from './service-cover';

import type { Template } from 'tinacms';

export const templates = {
  page: [
    sectionBlock,
    aboutBlock,
    contactBlock,
    coreServicesBlock,
    heroBlock,
    sectionTitleBlock,
    locationCTABlock,
    serviceCoverBlock,
  ] as Template[],
  section: [sectionTitleBlock, serviceCoverBlock] as Template[],
};
