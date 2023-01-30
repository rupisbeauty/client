import { aboutBlock } from './about';
import { contactBlock } from './contact';
import { coreServicesBlock } from './core-services';
import { heroBlock } from './hero';
import { locationCTABlock } from './location-cta';
import { sectionBlock } from './section';
import { sectionCoverBlock } from './section-cover';
import { sectionTitleBlock } from './section-title';

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
    sectionCoverBlock,
  ] as Template[],
  section: [sectionTitleBlock, sectionCoverBlock] as Template[],
};
